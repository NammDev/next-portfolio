import ProjectPreview from '@/components/project/project-preview'

export type Project = {
  image: string
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Ciseco',
    description: 'Frontend part of E-commerce website with react-query, react-hook-form',
    link: 'dub.sh',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Share-prompt',
    description:
      'A full-stack chat prompt sharing platform built using Next.js. Users can create, read, update, and delete prompts, and chat with ChatGPT AI. This is a personal project aimed at learning Next.js.',
    link: 'share-prompts.vercel.app',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Taxonomy',
    description: 'An example app built using Next.js 13 server components.',
    link: 'tx.shadcn.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'MarkDx',
    description:
      'Simplify and enhance your Markdown editing with MarkDX. Create beautifully formatted documents effortlessly, thanks to the power of AI',
    link: 'markdx.site',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'AI ICon Generate',
    description: '#trpc #code-along',
    link: 'icongeneratorai.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Fullstack E-commerce',
    description: '#jotai #styledcomponents #swiper #ant',
    link: 'tripfinder-boat.vercel.app',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Fullstack ERP Rental',
    description: '#medusajs #payloadcms #erpxnext',
    link: 'dub.sh',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'peepslab',
    description: 'Tự tìm cách code một project ngơ ngơ!',
    link: 'peepslab.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'RoomGPT',
    description: 'Replicate AI bản việt hóa, đem đi bán kiếm tiền',
    link: 'roomgpt.io',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Scribble Diffusion',
    description: 'Replicate AI bản việt hóa, đem đi bán kiếm tiền',
    link: 'scribblediffusion.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Photoshot',
    description: 'Replicate AI bản việt hóa, đem đi bán kiếm tiền #chakraUI',
    link: 'photoshot.app',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Dub',
    description: 'Tài liệu tham khảo NextJs',
    link: 'dub.sh',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Cal',
    description: 'Tài liệu tham khảo NextJs',
    link: 'cal.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'MedusaJs',
    description: 'Tài liệu tham khảo NextJs',
    link: 'medusajs.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'Payloadcms',
    description: 'Tài liệu tham khảo NextJs',
    link: 'payloadcms.com',
  },
  {
    image: 'https://www.mikenikles.com/projects/webstone-education.svg',
    title: 'MrCook',
    description: 'Managenment Recipes & CRM for Admin',
    link: 'mrcook.app',
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
                {projects.map((project, index) => (
                  <ProjectPreview key={index} project={project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
