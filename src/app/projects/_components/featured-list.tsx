'use client'

import { motion } from 'framer-motion'
import { BarChart, Code2Icon, GraduationCapIcon, SpadeIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const featuredProjects = [
	{
		title: 'Cardfy',
		slug: 'cardfy',
		description: 'A smart flashcard app for students',
		icon: <SpadeIcon className='size-5' />,
		link: '/cardfy',
		highlight: '6 users',
	},
	{
		title: 'Datum',
		slug: 'datum',
		description: 'An AI powered data analysis tool',
		icon: <BarChart className='size-5' />,
		link: '/datum',
		highlight: '15 users',
	},
	{
		title: 'Study',
		slug: 'study',
		description: 'A gamified way to study for exams',
		icon: <GraduationCapIcon className='size-5' />,
		link: '/study-app',
		highlight: '+2K studies',
	},
	{
		title: 'Blog',
		slug: 'blog',
		description: 'My personal blog and digital garden',
		icon: <Code2Icon className='size-5' />,
		link: '/blog',
		highlight: '1 post',
	},
]

export function FeaturedList() {
	const [hovered, setHovered] = useState('')

	return (
		<div
			className='grid md:grid-cols-4 max-w-2xl mt-8 grid-cols-2'
			onMouseLeave={() => setHovered('')}
		>
			{featuredProjects.map((project, index) => (
				<Link key={index} href={project.link}>
					<div
						key={index}
						className='relative flex flex-col justify-between gap-2 col-span-1 py-4 px-6 hover:cursor-pointer'
						onMouseEnter={() => setHovered(project.slug)}
					>
						{project.icon}
						<h4 className='text-xl font-bold'>{project.title}</h4>
						<p className='text-sm text-gray-500 max-w-32'>
							{project.description}
						</p>
						<span className='text-sm'>{project.highlight}</span>
						{project.slug === hovered && (
							<motion.div
								className='absolute top-0 -left-4 px-24 py-20 bg-hover/50 rounded-md -z-10'
								layoutId='underline'
								transition={{
									type: 'sprint',
									bounce: 0.25,
									duration: 0.25,
								}}
							/>
						)}
					</div>
				</Link>
			))}
		</div>
	)
}
