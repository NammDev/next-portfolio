import Image from 'next/image'
import Link from 'next/link'
import ModeToggle from './mode-toggle'
import MainNav from './main-nav'
import { dashboardConfig } from '@/config/nav'

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
                  <MainNav items={dashboardConfig.mainNav} />
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
