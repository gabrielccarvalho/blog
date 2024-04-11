import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { projectHistory } from '@/utils/projects'
import { FeaturedList } from './_components/featured-list'

export default function ProjectsPage() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] min-h-[calc(100vh-11rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300'>
				Work. Hobby. Open Source.
			</h1>
			<p className='text-gray-500 leading-loose'>
				I'm obsessed with side projects and recently started{' '}
				<span className='text-white'>building in public</span>. Here you can
				navigate through my coding life in projects. Some projects are still
				active, others have been discontinued. Keep in mind that{' '}
				<span className='text-white'>done is always better than perfect</span>.
			</p>
			<div className='flex flex-col'>
				<h3 className='text-2xl font-bold font-display text-white'>
					Featured Projects
				</h3>
				<FeaturedList />
				<div className='flex flex-col mt-8'>
					<h3 className='text-2xl font-bold font-display text-white'>
						All Projects
					</h3>
					{projectHistory
						.reduce(
							(
								acc: {
									year: number
									projects: { year: number; name: string; url: string }[]
								}[],
								project,
							) => {
								const yearIndex = acc.findIndex(
									(item) => item.year === project.year,
								)
								if (yearIndex === -1) {
									acc.push({ year: project.year, projects: [project] })
								} else {
									acc[yearIndex].projects.push(project)
								}
								return acc
							},
							[],
						)
						.map((yearGroup, index) => (
							<div key={index} className='flex flex-col gap-4'>
								<h4 className='text-xl font-medium mt-8 font-display'>
									{yearGroup.year}
								</h4>
								{yearGroup.projects.map((project, projectIndex) => (
									<ul key={projectIndex} className='pl-8 list-disc'>
										<li className='text-white font-light'>
											<a
												href={project.url}
												target='_blank'
												rel='noreferrer'
												className='underline underline-offset-4'
											>
												{project.name}
											</a>
										</li>
									</ul>
								))}
							</div>
						))}
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
