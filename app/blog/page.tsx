export default async function BlogPage() {
  return (
    <div className='mt-16 sm:px-8 sm:mt-32'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='max-w-2xl mx-auto lg:max-w-5xl'>
            <header className='flex flex-col max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                Short and long-form content.
              </h1>{' '}
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                For hot takes on anything tech, follow me on Twitter{' '}
                <a href='https://twitter.com/mikenikles'>@mikenikles</a>.
              </p>
            </header>{' '}
            <div className='mt-16 sm:mt-20'>
              <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
                <div className='flex flex-col max-w-3xl space-y-16'>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/svelte-and-xstate'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'> Svelte &amp; XState</span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='12/18/22'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        December 18, 2022
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        State-driven user interfaces with Svelte &amp; XState. Learn how to define a
                        state machine and how to use it in your Svelte components.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='12/18/22'
                    >
                      December 18, 2022
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/dev-environments-in-the-cloud-are-a-half-baked-solution'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            🔥&nbsp; Dev environments in the cloud are a half-baked solution
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='12/8/22'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        December 8, 2022
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        Cloud-only dev environments are fundamentally interested in charging you for
                        writing code. Instead, we need a hybrid solution that automates local dev
                        environments AND let's you run them in the cloud, should you choose to do
                        so.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='12/8/22'
                    >
                      December 8, 2022
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/announcing-a-full-stack-web-development-cohort-based-course'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            Announcing a Full-Stack Web Development cohort-based course
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='12/22/21'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        December 22, 2021
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        Today, I am excited to announce a hands-on, live, project-based course with
                        a small, highly motivated group of professional software engineers.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='12/22/21'
                    >
                      December 22, 2021
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/svelte-kit-prisma-a-match-made-in-digital-heaven'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            🔥&nbsp; SvelteKit &amp; Prisma - A match made in digital heaven
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='8/3/21'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        August 3, 2021
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        At some point, your SvelteKit app needs to persist data. Learn how to use
                        Prisma to achieve exactly that.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='8/3/21'
                    >
                      August 3, 2021
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/why-i-left-google-and-joined-gitpod'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            Why I Left Google and Joined Gitpod
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='4/7/21'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        April 7, 2021
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        A short summary of my time at Google, 2020, and what convinced me to go back
                        to the startup world.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='4/7/21'
                    >
                      April 7, 2021
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/a-svelte-component-to-format-numbers'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            A Svelte component to format numbers
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='1/9/21'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        January 9, 2021
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        Instead of 63476432, the component displays 64M.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='1/9/21'
                    >
                      January 9, 2021
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/2021-my-objectives-key-results'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            2021 - My Objectives &amp; Key Results
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='1/2/21'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        January 2, 2021
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        Watch me succeed or fail at achieving my personal OKRs in 2021.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='1/2/21'
                    >
                      January 2, 2021
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/a-smart-guide-for-your-career-as-a-software-engineer'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            A smart guide for your career as a software engineer
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='1/1/21'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        January 1, 2021
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        Do you want to earn a six figure income, work from anywhere, live a
                        lifestyle of your choosing and be a part of the people who develop the next
                        generation software applications? Are you a software engineer already, but
                        want to change jobs or advance in your current role to get promoted?
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='1/1/21'
                    >
                      January 1, 2021
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/2020-year-in-review'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'> 2020 - Year in Review</span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='12/25/20'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        December 25, 2020
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        A look back at what was 2020. Highlights, what worked and what didn't.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='12/25/20'
                    >
                      December 25, 2020
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/why-i-turned-my-homepage-into-a-timeline'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            Why I turned my homepage into a timeline
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='12/7/20'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        December 7, 2020
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        A short explanation of why I streamlined the homepage into a timeline
                        showcasing my blog posts, Twitter stats, YouTube videos, and projects.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='12/7/20'
                    >
                      December 7, 2020
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/what-was-the-biggest-blunder-in-your-career-as-a-developer'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            What was the biggest blunder in your career as a developer?
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='8/20/20'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        August 20, 2020
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        A twenty year tech career retrospective of what I would do differently and
                        why.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='8/20/20'
                    >
                      August 20, 2020
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/how-i-wrote-214-pages-for-a-web-development-book-with-19-pull-requests-in-3-months'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'>
                            {' '}
                            How I wrote 214 pages for a web development book with 19 pull requests
                            in 3 months
                          </span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='7/4/20'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        July 4, 2020
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        An in-depth journey report of the last three months when I wrote the Cloud
                        Native Web Development book. Why did I write it? How did I develop the
                        source code? Why do I self-publish? What has the post-publication experience
                        been like?
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='7/4/20'
                    >
                      July 4, 2020
                    </time>
                  </article>
                  <article className='md:grid md:grid-cols-4 md:items-baseline'>
                    <div className='relative flex flex-col items-start md:col-span-3 group'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                        <a href='/blog/my-personal-website-v2-0'>
                          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                          <span className='relative z-10'> My personal website v2.0</span>
                        </a>
                      </h2>{' '}
                      <time
                        className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                        dateTime='6/24/20'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                        </span>
                        June 24, 2020
                      </time>{' '}
                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        A complete rewrite of my personal website and blog with Svelte, Sapper,
                        mdsvex and Tailwind CSS. Blog posts can be reviewed on a preview URL and
                        discussed in a pull request. The site follows best practices; accessibility
                        (a11y), top Lighthouse score, Google's web vitals, and SEO.
                      </p>{' '}
                      <div
                        aria-hidden='true'
                        className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='w-4 h-4 ml-1 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>{' '}
                    <time
                      className='relative z-10 flex items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                      dateTime='6/24/20'
                    >
                      June 24, 2020
                    </time>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
