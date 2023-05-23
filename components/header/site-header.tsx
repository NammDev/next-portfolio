import Image from 'next/image'
import Link from 'next/link'
import ModeToggle from './mode-toggle'
import MobileMenu from './mobile-menu'

export function SiteHeader() {
  return (
    <header className='relative z-50 flex flex-col pointer-events-none'>
      {' '}
      <div className='top-0 z-10 h-16 pt-6'>
        <div className='w-full sm:px-8'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
              <div className='max-w-2xl mx-auto lg:max-w-5xl'>
                <div className='relative flex gap-4'>
                  <div className='flex flex-1'>
                    <div className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 '>
                      <Link href='/' aria-label='Home' className='pointer-events-auto'>
                        <Image
                          width={36}
                          height={36}
                          src='/headshot-small.png'
                          alt="Namm's headshot"
                          className='object-cover rounded-full bg-zinc-100 dark:bg-zinc-800 h-9 w-9'
                          decoding='async'
                        />
                      </Link>
                    </div>
                  </div>{' '}
                  <div className='flex justify-end flex-1 md:justify-center'>
                    <div className='pointer-events-auto md:hidden' data-headlessui-state>
                      <button
                        className='flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
                        id='headlessui-popover-button-:Rqb6:'
                        type='button'
                        aria-expanded='false'
                        data-headlessui-state
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
                      </button>{' '}
                      <MobileMenu />
                    </div>{' '}
                    <nav className='hidden pointer-events-auto md:block'>
                      <ul className='flex px-3 text-sm font-medium rounded-full shadow-lg bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                        <li>
                          <a
                            className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
                            href='/'
                          >
                            Home{' '}
                          </a>{' '}
                        </li>
                        <li>
                          <a
                            className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
                            href='/about'
                          >
                            About{' '}
                          </a>{' '}
                        </li>
                        <li>
                          <a
                            className='relative block px-3 py-2 text-teal-500 transition dark:text-teal-400'
                            href='/blog'
                          >
                            Blog{' '}
                            <span className='absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
                          </a>{' '}
                        </li>
                        <li>
                          <a
                            className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
                            href='/projects'
                          >
                            Projects{' '}
                          </a>{' '}
                        </li>
                        <li>
                          <a
                            className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
                            href='/resume'
                          >
                            Resume{' '}
                          </a>{' '}
                        </li>
                      </ul>
                    </nav>
                  </div>{' '}
                  <div className='flex justify-end md:flex-1'>
                    <div className='pointer-events-auto'>
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
