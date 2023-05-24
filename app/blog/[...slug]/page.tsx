import { notFound } from 'next/navigation'

import '@/styles/mdx.css'
import Image from 'next/image'
import { Mdx } from '@/components/mdx/mdx-components'
import { allBlogs } from '@/.contentlayer/generated'
import { formatDate } from '@/lib/util'
import { Metadata } from 'next'

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
    <article className='container relative max-w-3xl py-6 lg:py-10 lg:mt-6 text-foreground'>
      {/* <Link
        href='/blog'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <Icons.chevronLeft className='w-4 h-4 mr-2' />
        See all blogs
      </Link> */}
      <div>
        {blog.date && (
          <time dateTime={blog.date} className='block text-sm text-muted-foreground'>
            Published on {formatDate(blog.date)}
          </time>
        )}
        <h1 className='inline-block mt-2 text-4xl leading-tight lg:leading-none font-heading lg:text-5xl'>
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
      {/* <div className='flex justify-center py-6 lg:py-10'>
        <Link href='/blog' className={cn(buttonVariants({ variant: 'ghost' }))}>
          <Icons.chevronLeft className='w-4 h-4 mr-2' />
          See all blogs
        </Link>
      </div> */}
    </article>
  )
}
