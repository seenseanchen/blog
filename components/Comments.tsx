'use client'

import GiscusComponent from '@giscus/react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function Comments({ slug, locale }: { slug: string; locale: Locale }) {
  const [loadComments, setLoadComments] = useState(false)
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const dictionary = getDictionary(locale)
  const { resolvedTheme } = useTheme()

  // 確保在 client hydration 完成後才讀取 resolvedTheme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Intersection Observer：捲動進入視窗時自動載入
  useEffect(() => {
    const el = sectionRef.current
    if (!el || loadComments) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadComments(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [loadComments])

  // 主題切換後補發 postMessage 給已載入的 giscus iframe
  useEffect(() => {
    if (!mounted || !loadComments) return

    const giscusTheme = resolvedTheme === 'dark' ? 'transparent_dark' : 'light'
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    if (!iframe?.contentWindow) return

    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      'https://giscus.app'
    )
  }, [resolvedTheme, mounted, loadComments])

  if (siteMetadata.comments?.provider !== 'giscus') {
    return null
  }

  const config = siteMetadata.comments.giscusConfig
  // 等 mounted 後才能確認 resolvedTheme；未 mount 前先用 light 佔位，
  // iframe 尚未載入故不影響顯示
  const giscusTheme = mounted && resolvedTheme === 'dark' ? 'transparent_dark' : 'light'

  return (
    <div ref={sectionRef}>
      {loadComments && mounted ? (
        <GiscusComponent
          repo={config.repo as `${string}/${string}`}
          repoId={config.repositoryId}
          category={config.category}
          categoryId={config.categoryId}
          mapping={config.mapping as 'pathname'}
          reactionsEnabled={config.reactions as '0' | '1'}
          emitMetadata={config.metadata as '0' | '1'}
          inputPosition={config.inputPosition as 'bottom' | 'top'}
          theme={giscusTheme}
          lang={config.lang}
          loading="lazy"
        />
      ) : (
        <p className="text-sm text-gray-400">{dictionary.post.loadingComments}</p>
      )}
    </div>
  )
}
