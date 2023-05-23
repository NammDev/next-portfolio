import Image from 'next/image'

export default async function IndexPage() {
  return (
    <div className='mt-16 sm:px-8 sm:mt-32'>
      <div className='sm:px-8 mt-9'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className='max-w-2xl mx-auto lg:max-w-5xl'>
              <div className='max-w-2xl'>
                <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                  Always learn, always grow.
                </h1>{' '}
                <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                  Mike's space. Content about developer experience, full-stack web development, tech
                  careers, and whatever else crosses my mind.
                </p>{' '}
                <div className='flex gap-6 mt-6'>
                  <a
                    className='p-1 -m-1 group'
                    aria-label='Follow on Twitter'
                    href='https://twitter.com/mikenikles'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                      className='w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                    >
                      <path d='M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z' />
                    </svg>
                  </a>
                  <a
                    className='p-1 -m-1 group'
                    aria-label='Follow on GitHub'
                    href='https://github.com/mikenikles'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                      className='w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z'
                      />
                    </svg>
                  </a>
                  <a
                    className='p-1 -m-1 group'
                    aria-label='Follow on LinkedIn'
                    href='https://linkedin.com/in/mikenikles'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      className='w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                    >
                      <path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className='mt-16 sm:mt-20'>
        <div className='flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8'>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='Photo by Prateek Katyal: https://www.pexels.com/photo/black-and-white-laptop-2740956/'
              src='https://www.mikenikles.com/banner-images/pexels-2.webp'
              width={288}
              height={320}
              decoding='async'
              className='absolute inset-0 object-cover w-full h-full'
              loading='lazy'
              style={{ color: 'transparent' }}
            />
          </div>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='Photo by Alex Fu: https://www.pexels.com/photo/dream-big-signage-945966/'
              src='https://www.mikenikles.com/banner-images/pexels-2.webp'
              width={288}
              height={320}
              decoding='async'
              className='absolute inset-0 object-cover w-full h-full'
              loading='lazy'
              style={{ color: 'transparent' }}
            />
          </div>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='Photo by Anna Tarazevich: https://www.pexels.com/photo/welcome-lettering-text-on-black-background-5598288/'
              src='https://www.mikenikles.com/banner-images/pexels-3.webp'
              width={288}
              height={320}
              decoding='async'
              className='absolute inset-0 object-cover w-full h-full'
              loading='lazy'
              style={{ color: 'transparent' }}
            />
          </div>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='Photo by Polina Kovaleva: https://www.pexels.com/photo/uneven-cutouts-on-black-background-6185244/'
              src='https://www.mikenikles.com/banner-images/pexels-4.webp'
              width={288}
              height={320}
              decoding='async'
              className='absolute inset-0 object-cover w-full h-full'
              loading='lazy'
              style={{ color: 'transparent' }}
            />
          </div>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='Photo by Jorge Urosa: https://www.pexels.com/photo/motivational-quote-in-a-frame-9169913/'
              src='https://www.mikenikles.com/banner-images/pexels-5.webp'
              width={288}
              height={320}
              decoding='async'
              className='absolute inset-0 object-cover w-full h-full'
              loading='lazy'
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>{' '}
      <div className='mt-24 sm:px-8 md:mt-28'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className='max-w-2xl mx-auto lg:max-w-5xl'>
              <div className='grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2'>
                <div className='flex flex-col gap-16'>
                  <article className='relative flex flex-col items-start group'>
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
                      className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
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
                      environments AND let's you run them in the cloud, should you choose to do so.
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
                  </article>
                  <article className='relative flex flex-col items-start group'>
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
                      className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
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
                  </article>
                  <article className='relative flex flex-col items-start group'>
                    <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                      <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                      <a href='/blog/why-i-moved-from-react-to-svelte-and-why-others-will-follow'>
                        <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                        <span className='relative z-10'>
                          🔥&nbsp; Why I moved from React to Svelte and why others will follow
                        </span>
                      </a>
                    </h2>{' '}
                    <time
                      className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                      dateTime='12/26/19'
                    >
                      <span
                        className='absolute inset-y-0 left-0 flex items-center'
                        aria-hidden='true'
                      >
                        <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                      </span>
                      December 26, 2019
                    </time>{' '}
                    <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                      A post about my React experience, why Svelte impressed me and code snippets to
                      compare React with Svelte.
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
                  </article>{' '}
                  <a href='/blog'>
                    <div className='relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500'>
                      Read 26 more articles
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
                  </a>
                </div>{' '}
                <div className='space-y-10 lg:pl-16 xl:pl-24'>
                  <form
                    action='https://app.gumroad.com/follow_from_embed_form'
                    method='post'
                    className='p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40'
                  >
                    <input name='seller_id' type='hidden' defaultValue={916051007948} />{' '}
                    <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                        className='flex-none w-6 h-6'
                      >
                        <path
                          d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
                          className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
                        />
                        <path
                          d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
                          className='stroke-zinc-400 dark:stroke-zinc-500'
                        />
                      </svg>
                      <span className='ml-3'>Stay up to date</span>
                    </h2>{' '}
                    <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                      Get notified when I publish something new, and unsubscribe at any time.
                    </p>{' '}
                    <div className='flex mt-6'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email address'
                        aria-label='Email address'
                        required
                        className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm'
                      />
                      <button
                        className='inline-flex items-center justify-center flex-none gap-2 px-3 py-2 ml-4 text-sm font-semibold transition rounded-md outline-offset-2 active:transition-none bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
                        type='submit'
                      >
                        Join
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
