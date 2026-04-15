'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useEffect, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function Comments({ slug, locale }: { slug: string; locale: Locale }) {
  const [loadComments, setLoadComments] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const dictionary = getDictionary(locale)

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

  if (!siteMetadata.comments?.provider) {
    return null
  }

  return (
    <div ref={sectionRef}>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <p className="text-sm text-gray-400">{dictionary.post.loadingComments}</p>
      )}
    </div>
  )
}
