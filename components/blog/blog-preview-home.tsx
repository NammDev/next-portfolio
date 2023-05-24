import { Blog } from '@/.contentlayer/generated'
import { formatDate } from '@/lib/util'
import Link from 'next/link'

export function BlogPreviewHome({ blog }: { blog: Blog }) {
  return (
    <article className='relative flex flex-col items-start group'>
      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
        <div className='absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />{' '}
        <Link href={blog.slug}>
          <span className='absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl' />
          <span className='relative z-10'>🔥&nbsp; {blog.title}</span>
        </Link>
      </h2>{' '}
      <time
        className='relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'
        dateTime={blog.date}
      >
        <span className='absolute inset-y-0 left-0 flex items-center' aria-hidden='true'>
          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
        </span>
        {formatDate(blog.date)}
      </time>{' '}
      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>{blog.summary}</p>{' '}
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
  )
}
