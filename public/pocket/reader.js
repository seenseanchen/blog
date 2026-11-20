function updateContents(article) {
  const list = document.getElementById('sections')
  list.replaceChildren()
  for (const heading of article.querySelectorAll('h2, h3')) {
    const item = document.createElement('li')
    const button = document.createElement('button')
    item.classList.toggle('subsection', heading.tagName === 'H3')
    button.type = 'button'
    button.textContent = heading.textContent
    heading.tabIndex = -1
    // The URL fragment holds the notebook key. Keep it intact when navigating.
    button.addEventListener('click', () => {
      heading.focus({ preventScroll: true })
      heading.scrollIntoView({ block: 'start' })
    })
    item.append(button)
    list.append(item)
  }
  document.getElementById('contents').hidden = !list.childElementCount
}

async function openNotebook() {
  const status = document.getElementById('status')
  const encoded = location.hash.slice(1)
  if (!/^[A-Za-z0-9_-]{43}$/.test(encoded)) return
  try {
    status.textContent = '正在開啟文件…'
    const keyBytes = Uint8Array.from(atob(encoded.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0))
    const key = await crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['decrypt'])
    const response = await fetch('./notebook.bin', { cache: 'no-store' })
    if (!response.ok) throw new Error('fetch')
    const packed = new Uint8Array(await response.arrayBuffer())
    const data = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: packed.slice(0, 12) }, key, packed.slice(12))
    const documents = JSON.parse(new TextDecoder().decode(data))
    const catalog = document.getElementById('catalog')
    if (catalog) {
      const list = document.getElementById('document-list')
      for (const doc of documents) {
        const item = document.createElement('li')
        const link = document.createElement('a')
        link.href = './' + doc.page + location.hash
        link.textContent = doc.title
        item.append(link)
        list.append(item)
      }
      catalog.hidden = false
    } else {
      const pageName = location.pathname.split('/').pop()
      const doc = documents.find(entry => entry.page === pageName)
      if (!doc) {
        status.textContent = '這份文件已移出目錄。'
        const back = document.createElement('a')
        back.href = './index.html' + location.hash
        back.textContent = '返回文件目錄'
        status.append(' ', back)
        return
      }
      document.title = doc.title + '｜小本本'
      const article = document.getElementById('document')
      article.innerHTML = doc.html
      updateContents(article)
      document.getElementById('back').href = './index.html' + location.hash
      const bytes = Uint8Array.from(atob(doc.source), c => c.charCodeAt(0))
      const download = document.getElementById('download')
      download.href = URL.createObjectURL(new Blob([bytes], { type: 'text/markdown;charset=utf-8' }))
      download.download = doc.name
      document.getElementById('reader').hidden = false
    }
    status.hidden = true
  } catch {
    status.textContent = '無法開啟文件。請確認完整書籤網址，並檢查網路連線後重新整理。'
  }
}
openNotebook()
