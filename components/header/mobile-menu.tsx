export default function MobileMenu() {
  const showMobileMenu = true
  return (
    showMobileMenu && (
      <div>
        <div
          className='fixed inset-0 z-50 opacity-100 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80'
          id='headlessui-popover-overlay-:r9:'
          aria-hidden='true'
        />{' '}
        <div
          className='fixed z-50 p-8 origin-top scale-100 bg-white opacity-100 inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'
          id='headlessui-popover-panel-:Rqb6H1:'
          tabIndex={-1}
        >
          <div className='flex flex-row-reverse items-center justify-between'>
            <button aria-label='Close menu' className='p-1 -m-1' type='button' tabIndex={0}>
              <svg
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='w-6 h-6 text-zinc-500 dark:text-zinc-400'
              >
                <path
                  d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>{' '}
            <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>Navigation</h2>
          </div>{' '}
          <nav className='mt-6'>
            <ul className='-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
              <li>
                <a className='block py-2' href='/about'>
                  About
                </a>
              </li>
              <li>
                <a className='block py-2' href='/blog'>
                  Blog
                </a>
              </li>
              <li>
                <a className='block py-2' href='/projects'>
                  Projects
                </a>
              </li>
              <li>
                <a className='block py-2' href='/books'>
                  Books
                </a>
              </li>
              <li>
                <a className='block py-2' href='/courses'>
                  Courses
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  )
}
