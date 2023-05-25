import { notFound } from 'next/navigation'

import '@/styles/mdx.css'
import Image from 'next/image'
import { Mdx } from '@/components/mdx/mdx-components'
import { allBlogs } from '@/.contentlayer/generated'
import { formatDate } from '@/lib/util'
import { Metadata } from 'next'
import { Icons } from '@/components/icons'
import Link from 'next/link'
import { DashboardTableOfContents } from '@/components/blog/toc'
import { getTableOfContents } from '@/lib/toc'

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

async function getBlogFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!blog) {
    null
  }

  return blog
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', blog.title)
  ogUrl.searchParams.set('type', 'Blog blog')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<BlogPageProps['params'][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split('/'),
  }))
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    notFound()
  }

  const toc = await getTableOfContents(blog.body.raw)

  return (
    <div className='mt-16 sm:px-8 sm:mt-24'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='max-w-2xl mx-auto lg:max-w-5xl'>
            <div className='relative lg:gap-10 xl:grid xl:grid-cols-[1fr_268px]'>
              <article className='w-full max-w-3xl min-w-0 mx-auto text-zinc-600 dark:text-zinc-400'>
                <Link
                  className='items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 absolute left-0 top-[-4rem] hidden xl:inline-flex -ml-4'
                  href='/blog'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-4 h-4 mr-2'
                  >
                    <polyline points='15 18 9 12 15 6' />
                  </svg>
                  See all posts
                </Link>

                <div>
                  <h1 className='inline-block text-4xl leading-tight lg:leading-none font-heading lg:text-5xl text-foreground'>
                    {blog.title}
                  </h1>
                  {blog.date && (
                    <time dateTime={blog.date} className='block mt-2 text-sm text-muted-foreground'>
                      Published on {formatDate(blog.date)}
                    </time>
                  )}
                </div>
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={720}
                    height={405}
                    className='my-8 transition-colors border rounded-md bg-muted'
                    priority
                  />
                )}
                <Mdx code={blog.body.code} />
                <hr className='mt-12' />
                <div className='flex justify-center py-6 lg:pt-10'>
                  <Link
                    className='inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground'
                    href='/blog'
                  >
                    <Icons.chevronLeft className='w-4 h-4 mr-2' />
                    See all posts
                  </Link>
                </div>
              </article>
              <div className='hidden text-sm xl:block'>
                <div className='sticky top-0 -mt-10 pt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto'>
                  <DashboardTableOfContents toc={toc} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
