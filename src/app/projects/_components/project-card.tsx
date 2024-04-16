import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, MoreVertical } from 'lucide-react'
import Image from 'next/image'

type Props = {
	project: {
		name: string
		description: string
		year: number
		url: string
		tech: string[]
	}
}

export function ProjectCard({ project }: Props) {
	return (
		<a href={project.url} target='_blank' rel='noreferrer' className='group'>
			<div className='flex flex-row justify-between text-white font-light p-4 border border-gray-400/20 rounded-md'>
				<div className='flex flex-col gap-4'>
					<div>
						{project.name}
						<p className='text-gray-500'>{project.description}</p>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{project.tech.map((tech, index) => (
							<Badge
								key={index}
								variant='outline'
								className='text-xs rounded-sm cursor-default'
							>
								<Image
									src={`/tech/${tech.toLowerCase()}.svg`}
									alt={tech}
									width={16}
									height={16}
									className='mr-1'
									draggable={false}
								/>
								{tech}
							</Badge>
						))}
					</div>
				</div>
				<Button variant='ghost' size='icon' className='hover:bg-transparent'>
					<ArrowUpRight
						strokeWidth={1.5}
						className='size-6 text-gray-400 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out'
					/>
				</Button>
			</div>
		</a>
	)
}
