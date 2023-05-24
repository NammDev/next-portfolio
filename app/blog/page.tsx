import { allBlogs } from '@/.contentlayer/generated'
import { formatDate } from '@/lib/util'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export default async function BlogPage() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className='mt-16 sm:px-8 sm:mt-32'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='max-w-2xl mx-auto lg:max-w-5xl'>
            <header className='flex flex-col max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                Short and long-form content.
              </h1>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                For hot takes on anything tech, follow me on Twitter{' '}
                <a href='https://twitter.com/mikenikles'>@mikenikles</a>.
              </p>
            </header>
            <div className='mt-16 sm:mt-20'>
              {blogs?.length ? (
                <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
                  <div className='flex flex-col max-w-3xl space-y-16'>
                    {blogs.map((blog) => (
                      <article key={blog._id} className='md:grid md:grid-cols-4 md:items-baseline'>
                        <div className='relative flex flex-col items-start md:col-span-3 group'>
                          <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                            <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
                            <Link href={blog.slug}>
                              <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
                              <span className='relative z-10'>{blog.title}</span>
                            </Link>
                          </h2>
                          <time
                            className='md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
                            dateTime={blog.date}
                          >
                            <span
                              className='absolute inset-y-0 left-0 flex items-center'
                              aria-hidden='true'
                            >
                              <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                            </span>
                            {formatDate(blog.date)}
                          </time>{' '}
                          <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                            {blog.summary}
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
                          className='relative z-10 items-center order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500'
                          dateTime={blog.date}
                        >
                          {formatDate(blog.date)}
                        </time>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No posts published.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
