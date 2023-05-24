export type MainNavItem = {
  title: string
  href: string
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Project',
      href: '/project',
    },
    {
      title: 'Resume',
      href: '/resume',
    },
  ],
}
