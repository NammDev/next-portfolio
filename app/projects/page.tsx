export default async function ProjectsPage() {
  return (
    <div className='mt-16 sm:px-8 sm:mt-32'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='max-w-2xl mx-auto lg:max-w-5xl'>
            <header className='flex flex-col max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                SaaS, tools, frameworks
              </h1>{' '}
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                <strong className='text-teal-500'>Software projects</strong> I've created. Mostly
                written in Typescript, Node.js, Svelte / SvelteKit, Prisma, PostgreSQL.
              </p>
            </header>{' '}
            <div className='mt-16 sm:mt-20'>
              <ul className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                <li className='relative flex flex-col items-start group'>
                  <div className='relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                    <img
                      alt
                      src='/projects/webstone-education.svg'
                      width={32}
                      height={32}
                      decoding='async'
                      data-nimg={1}
                      className='w-8 h-8'
                      loading='lazy'
                      style={{ color: 'transparent' }}
                    />
                  </div>{' '}
                  <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                    <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                    <a href='https://www.webstone.app/'>
                      <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                      <span className='relative z-10'>Webstone Education</span>
                    </a>
                  </h2>{' '}
                  <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                    Interactive courses. You choose your tech stack. We provide continuous course
                    updates.
                  </p>{' '}
                  <p className='relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200'>
                    <svg viewBox='0 0 24 24' aria-hidden='true' className='flex-none w-6 h-6'>
                      <path
                        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-2'>webstone.app</span>
                  </p>{' '}
                </li>
                <li className='relative flex flex-col items-start group'>
                  <div className='relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                    <img
                      alt
                      src='/projects/webstone-app.svg'
                      width={32}
                      height={32}
                      decoding='async'
                      data-nimg={1}
                      className='w-8 h-8'
                      loading='lazy'
                      style={{ color: 'transparent' }}
                    />
                  </div>{' '}
                  <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                    <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                    <a href='https://github.com/webstonehq/webstone'>
                      <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                      <span className='relative z-10'>Webstone - App Framework</span>
                    </a>
                  </h2>{' '}
                  <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                    Webstone provides an ecosystem of plugins for your full-stack web application.
                  </p>{' '}
                  <p className='relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200'>
                    <svg viewBox='0 0 24 24' aria-hidden='true' className='flex-none w-6 h-6'>
                      <path
                        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-2'>github.com/webstonehq/webstone</span>
                  </p>{' '}
                </li>
                <li className='relative flex flex-col items-start group'>
                  <div className='relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                    <img
                      alt
                      src='/projects/your-analytics.svg'
                      width={32}
                      height={32}
                      decoding='async'
                      data-nimg={1}
                      className='w-8 h-8'
                      loading='lazy'
                      style={{ color: 'transparent' }}
                    />
                  </div>{' '}
                  <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                    <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                    <a href='https://www.your-analytics.org/'>
                      <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                      <span className='relative z-10'>Your Analytics</span>
                    </a>
                  </h2>{' '}
                  <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                    An open source, privacy-focused web analytics platform.
                  </p>{' '}
                  <p className='relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200'>
                    <svg viewBox='0 0 24 24' aria-hidden='true' className='flex-none w-6 h-6'>
                      <path
                        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-2'>your-analytics.org</span>
                  </p>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
