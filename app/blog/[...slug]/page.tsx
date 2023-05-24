import { notFound } from 'next/navigation'

import '@/styles/mdx.css'
import Image from 'next/image'
import { Mdx } from '@/components/mdx/mdx-components'
import { allBlogs } from '@/.contentlayer/generated'
import { formatDate } from '@/lib/util'
import { Metadata } from 'next'
import { Icons } from '@/components/icons'
import Link from 'next/link'

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

  return (
    <div className='mt-16 sm:px-8 sm:mt-16'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='max-w-2xl mx-auto lg:max-w-5xl'>
            <div className='relative lg:gap-10 xl:grid xl:grid-cols-[1fr_268px]'>
              <article className='w-full max-w-3xl min-w-0 mx-auto text-zinc-600 dark:text-zinc-400'>
                <div>
                  {blog.date && (
                    <time dateTime={blog.date} className='block text-sm text-muted-foreground'>
                      Published on {formatDate(blog.date)}
                    </time>
                  )}
                  <h1 className='inline-block mt-2 text-4xl leading-tight lg:leading-none font-heading lg:text-5xl text-foreground'>
                    {blog.title}
                  </h1>
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
                <div className='sticky top-16 -mt-10 pt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto'>
                  <div className='space-y-2'>
                    <p className='font-medium text-foreground'>On This Page</p>
                    <ul className='m-0 list-none'>
                      <li className='pt-2 mt-0'>
                        <a
                          href='#built-in-components'
                          className='inline-block font-medium no-underline text-primary'
                        >
                          Built-in Components
                        </a>
                        <ul className='pl-4 m-0 list-none'>
                          <li className='pt-2 mt-0'>
                            <a
                              href='#1-callout'
                              className='inline-block text-sm no-underline text-muted-foreground'
                            >
                              1. Callout
                            </a>
                          </li>
                          <li className='pt-2 mt-0'>
                            <a
                              href='#2-card'
                              className='inline-block text-sm no-underline text-muted-foreground'
                            >
                              2. Card
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='pt-2 mt-0'>
                        <a
                          href='#custom-components'
                          className='inline-block text-sm no-underline text-muted-foreground'
                        >
                          Custom Components
                        </a>
                      </li>
                      <li className='pt-2 mt-0'>
                        <a
                          href='#html-elements'
                          className='inline-block text-sm no-underline text-muted-foreground'
                        >
                          HTML Elements
                        </a>
                      </li>
                      <li className='pt-2 mt-0'>
                        <a
                          href='#styling'
                          className='inline-block text-sm no-underline text-muted-foreground'
                        >
                          Styling
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
