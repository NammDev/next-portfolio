import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
// import { siteConfig } from '@/config/site'
import { cn } from '@/lib/util'
import { SiteFooter } from '@/components/footer/site-footer'
import { SiteHeader } from '@/components/header/site-header'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
//   authors: [
//     {
//       name: 'nammdev',
//       url: 'https://nammdev.com',
//     },
//   ],
//   creator: 'nammdev',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [`${siteConfig.url}/og.jpg`],
//     creator: '@shadcn',
//   },
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
//   manifest: `${siteConfig.url}/site.webmanifest`,
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        className={cn('flex h-full flex-col bg-zinc-50 dark:bg-black font-sans', fontSans.variable)}
      >
        <div className='fixed inset-0 flex justify-center sm:px-8'>
          <div className='flex w-full max-w-7xl lg:px-8'>
            <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
          </div>
        </div>
        <div className='relative'>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
