'use client'

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from '@/components/Link'
import type { ProjectDetails } from '@/data/pageContent'

interface ProjectDetailsDialogProps {
  title: string
  buttonLabel: string
  closeLabel: string
  details: ProjectDetails
}

export default function ProjectDetailsDialog({
  title,
  buttonLabel,
  closeLabel,
  details,
}: ProjectDetailsDialogProps) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100 hover:text-cyan-800 dark:border-cyan-400 dark:bg-cyan-500/10 dark:text-cyan-200 dark:hover:bg-cyan-500/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-1 4a1 1 0 112 0v3a1 1 0 11-2 0V8zm1 5.25a.9.9 0 100 1.8.9.9 0 000-1.8z"
            clipRule="evenodd"
          />
        </svg>
        {buttonLabel}
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8 dark:border-gray-800 dark:bg-gray-900">
                  <button
                    type="button"
                    onClick={close}
                    aria-label={closeLabel}
                    className="absolute top-4 right-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <DialogTitle
                    as="h3"
                    className="pr-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </DialogTitle>

                  {details.intro && (
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {details.intro}
                    </p>
                  )}

                  <div className="mt-6 max-h-[60vh] space-y-6 overflow-y-auto pr-1">
                    {details.sections.map((section) => (
                      <section key={section.heading}>
                        <h4 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                          {section.heading}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700 dark:text-gray-200">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>

                  {details.actions && details.actions.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">
                      {details.actions.map((action) => (
                        <Link
                          key={action.href}
                          href={action.href}
                          className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:text-white"
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
