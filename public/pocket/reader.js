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
    const select = document.getElementById('documents')
    const link = document.getElementById('download')
    let downloadUrl
    function showDocument() {
      const doc = documents[select.selectedIndex]
      document.getElementById('document').innerHTML = doc.html
      if (downloadUrl) URL.revokeObjectURL(downloadUrl)
      const bytes = Uint8Array.from(atob(doc.source), c => c.charCodeAt(0))
      downloadUrl = URL.createObjectURL(new Blob([bytes], { type: 'text/markdown;charset=utf-8' }))
      link.download = doc.name
      link.href = downloadUrl
    }
    for (const doc of documents) select.add(new Option(doc.title))
    select.addEventListener('change', showDocument)
    showDocument()
    status.hidden = true
    document.getElementById('shelf').hidden = false
  } catch {
    status.textContent = '無法開啟文件。請確認完整書籤網址，並檢查網路連線後重新整理。'
  }
}
openNotebook()
