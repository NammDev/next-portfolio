'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { cn } from '@/lib/util'
import { MainNavItem } from '@/config/nav'
import MobileMenu from './mobile-menu'

interface MainNavProps {
  items: MainNavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()

  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex justify-end flex-1 md:justify-center'>
      <div className='pointer-events-auto md:hidden'>
        <button
          className='flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
          type='button'
        >
          Menu
          <svg
            viewBox='0 0 8 6'
            aria-hidden='true'
            className='w-2 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'
          >
            <path
              d='M1.75 1.75 4 4.25l2.25-2.5'
              fill='none'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        {showMobileMenu && <MobileMenu items={items} />}
      </div>
      <nav className='hidden pointer-events-auto md:block'>
        <ul className='flex px-3 text-sm font-medium rounded-full shadow-lg bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
          {items?.map((item, index) => {
            const isActiveSegment =
              item.href.startsWith(`/${segment}`) || (segment === null && item.href === '/')
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'relative block px-3 py-2 transition ',
                  isActiveSegment
                    ? ' text-teal-500  dark:text-teal-400'
                    : 'hover:text-teal-500 dark:hover:text-teal-400'
                )}
              >
                {item.title}
                {isActiveSegment && (
                  <span className='absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
                )}
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
