import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/util'
import { SiteFooter } from '@/components/footer/site-footer'
import { SiteHeader } from '@/components/header/site-header'
import localFont from 'next/font/local'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: 'nammdev',
      url: 'https://nammdev.com',
    },
  ],
  creator: 'nammdev',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [`${siteConfig.url}/og.jpg`],
    creator: '@namddev',
  },
  icons: {
    icon: '/favicon.png',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'flex h-full flex-col bg-background font-sans',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <div className='relative'>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
