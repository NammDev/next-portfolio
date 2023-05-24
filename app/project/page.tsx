import ProjectPreview from '@/components/project/project-preview'

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
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
