export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}
export const siteConfig: SiteConfig = {
  name: 'Namdev Porfolio',
  description: 'Portfolio website',
  url: 'https://nammdev.com',
  ogImage: 'https://nammdev.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/namdeveloper_ca',
    github: 'https://github.com/NammDev/next-portfolio',
  },
}
