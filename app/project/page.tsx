import ProjectPreview from '@/components/project/project-preview'

export type Project = {
  id: number
  image: string
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Ciseco',
    description: '#frontend #reactjs #react-query #react-hook-form',
    link: 'https://dub.sh',
  },
  {
    id: 2,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Share-prompt',
    description: '#fullstack #nextjs #mongodb #crud',
    link: 'https://dub.sh',
  },
  {
    id: 3,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Taxonomy',
    description: '#fullstack #nextjs #contentlayer #prisma #postgresql #crud',
    link: 'https://dub.sh',
  },
  {
    id: 4,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Nam Portfolio',
    description: '#frontend #nextjs #contentlayer',
    link: 'https://dub.sh',
  },
  {
    id: 5,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'AI ICon Generate',
    description: '#trpc #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 6,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Railtrack',
    description: '#trpc #nextjs #supabase',
    link: 'https://dub.sh',
  },
  {
    id: 7,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Javascript Project',
    description: '#trpc #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 8,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'AgentGPT',
    description: '#trpc #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 12,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'MrCook',
    description: '#trpc #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 13,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Headless CMS',
    description: '#medusajs #strapi #bcms #contentful #payloadcms #sanity',
    link: 'https://dub.sh',
  },
  {
    id: 15,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Next Commerce',
    description: '#nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 16,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Figma to React',
    description: '#quest.ai',
    link: 'https://dub.sh',
  },
  {
    id: 14,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'peepslab',
    description: '#nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 8,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'RoomGPT',
    description: '#ai #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 9,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'DrawAI',
    description: '#ai #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 10,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'onelink',
    description: '#trpc #nextjs',
    link: 'https://dub.sh',
  },
  {
    id: 11,
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'dub.sh',
    description: '#trpc #nextjs',
    link: 'https://dub.sh',
  },
]

export default async function ProjectsPage() {
  return (
    <div className='mt-16 sm:px-8 sm:mt-32'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='max-w-2xl mx-auto lg:max-w-5xl'>
            <header className='flex flex-col max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                SaaS, tools, frameworks
              </h1>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                <strong className='text-teal-500'>Software projects</strong> I have created. Mostly
                written in Typescript, Node.js, Svelte / SvelteKit, Prisma, PostgreSQL.
              </p>
            </header>
            <div className='mt-16 sm:mt-20'>
              <ul className='grid grid-cols-1 gap-x-12 gap-y-24 sm:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                  <ProjectPreview key={project.id} project={project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
