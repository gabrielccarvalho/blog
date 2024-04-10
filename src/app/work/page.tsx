import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { career } from '@/utils/career'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'

export default function WorkPage() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] min-h-[calc(100vh-11rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-l from-emerald-400 via-teal-400 to-green-400'>
				Solve. Build. Grow
			</h1>
			<p className='text-gray-500 leading-loose'>
				Since I've started my career as a software engineer, I've worked with a
				few different companies and projects. Here you can navigate through my
				timeline.
			</p>
			<div>
				<a
					href='/CV-Gabriel-Carvalho.pdf'
					target='_blank'
					rel='noopener noreferrer'
					download
				>
					<Button variant='ghost' className='self-start'>
						<DownloadIcon className='size-5 mr-2' />
						Download CV
					</Button>
				</a>
				<a
					href='https://www.linkedin.com/in/gabrielcamposdecarvalho/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button variant='ghost' className='self-start'>
						<LinkedInLogoIcon className='size-5 mr-2' />
						Open Linkedin
					</Button>
				</a>
			</div>
			<div className='flex flex-col space-y-6'>
				<h3 className='text-2xl'>Career</h3>
				<ul className='space-y-12 leading-loose'>
					{career.map((item, index) => (
						<li key={index} className='flex flex-col gap-2'>
							<h4 className='font-medium'>{item.role}</h4>
							<span className='text-sm'>
								<a
									href={item.redirect}
									target='_blank'
									rel='noreferrer'
									className='underline underline-offset-4'
								>
									{item.company}
								</a>{' '}
								• <span className='text-gray-500'>{item.location}</span>
							</span>
							<span className='text-sm text-gray-500'>
								{item.period} • {item.duration}
							</span>
							<Accordion collapsible type='single'>
								<AccordionItem value='description'>
									<AccordionTrigger className='hover:no-underline'>
										Description
									</AccordionTrigger>
									<AccordionContent>
										<p className='text-gray-500 leading-relaxed'>
											{item.description}
										</p>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</li>
					))}
				</ul>
			</div>
		</MaxWidthWrapper>
	)
}
