import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  title: string
  showTitle?: boolean
}

export default function AuthorLayout({ children, content, title, showTitle = true }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  if (!showTitle) {
    return (
      <div className="space-y-10 pt-6">
        <section className="border-b border-gray-200 pb-10 dark:border-gray-800">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {avatar && (
                <Image
                  src={avatar}
                  alt="avatar"
                  width={176}
                  height={176}
                  className="h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40 md:h-44 md:w-44"
                />
              )}

              <div className="space-y-3">
                <div className="space-y-1">
                  <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
                    {name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{occupation}</p>
                  {company && <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>}
                </div>

                <a
                  href={`mailto:${email}`}
                  className="block text-sm font-medium break-all text-gray-800 transition hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300"
                >
                  {email}
                </a>

                <div className="flex flex-wrap items-center gap-3">
                  <SocialIcon kind="mail" href={`mailto:${email}`} />
                  <SocialIcon kind="github" href={github} />
                  <SocialIcon kind="linkedin" href={linkedin} />
                  <SocialIcon kind="x" href={twitter} />
                  <SocialIcon kind="bluesky" href={bluesky} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="prose dark:prose-invert max-w-none pb-8">{children}</div>
      </div>
    )
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {title}
          </h1>
        </div>

        <div className="items-start gap-y-8 pt-8 xl:grid xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-x-12">
          <aside className="xl:sticky xl:top-24">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
              <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
                {avatar && (
                  <Image
                    src={avatar}
                    alt="avatar"
                    width={208}
                    height={208}
                    className="h-52 w-52 rounded-[2rem] object-cover"
                  />
                )}

                <h2 className="pt-5 text-3xl leading-tight font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {name}
                </h2>
                <p className="pt-2 text-base text-gray-600 dark:text-gray-300">{occupation}</p>
                {company && (
                  <p className="pt-1 text-sm text-gray-500 dark:text-gray-400">{company}</p>
                )}

                <div className="mt-6 w-full rounded-2xl bg-gray-50 p-4 dark:bg-gray-950/40">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                    Contact
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-3 block text-sm font-medium break-all text-gray-800 transition hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300"
                  >
                    {email}
                  </a>
                  <div className="flex justify-center space-x-3 pt-4 xl:justify-start">
                    <SocialIcon kind="mail" href={`mailto:${email}`} />
                    <SocialIcon kind="github" href={github} />
                    <SocialIcon kind="linkedin" href={linkedin} />
                    <SocialIcon kind="x" href={twitter} />
                    <SocialIcon kind="bluesky" href={bluesky} />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="prose dark:prose-invert max-w-none pt-2 pb-8 xl:pt-0">{children}</div>
        </div>
      </div>
    </>
  )
}
