import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

type Experience = {
	company: string
	role: string
	location: string
	period: string
	duration: string
	description: string
	logo: string
	redirect: string
	tech: string[]
}

export function ExperienceCard({ experience }: { experience: Experience }) {
	return (
		<div className='flex'>
			<a
				href={experience.redirect}
				target='_blank'
				rel='noreferrer'
				className='underline underline-offset-4'
			>
				<img
					src={experience.logo}
					alt={experience.company}
					className='h-16 w-auto rounded-md mx-4 my-2'
					draggable={false}
				/>
			</a>
			<div className='flex flex-col flex-1 gap-2'>
				<h4 className='font-medium'>{experience.role}</h4>
				<span className='text-sm'>
					<a
						href={experience.redirect}
						target='_blank'
						rel='noreferrer'
						className='underline underline-offset-4'
					>
						{experience.company}
					</a>{' '}
					• <span className='text-gray-500'>{experience.location}</span>
				</span>
				<span className='text-sm text-gray-500'>
					{experience.period} • {experience.duration}
				</span>
				<div className='flex gap-2 flex-wrap'>
					{experience.tech.map((tech, index) => (
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
				<Accordion collapsible type='single'>
					<AccordionItem value='description'>
						<AccordionTrigger className='hover:no-underline'>
							Description
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-gray-500 leading-relaxed'>
								{experience.description}
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	)
}
