'use client'

import { Code2Icon, GraduationCapIcon, SpadeIcon } from 'lucide-react'
import { useState } from 'react'
import { FeaturedProjectCard } from './featured-project-card'

const featuredProjects = [
	{
		title: 'Cardfy',
		slug: 'cardfy',
		description: 'A smart flashcard app for students',
		icon: <SpadeIcon className='size-5' />,
		link: '/cardfy',
		highlight: '4K+ flashcards',
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
			className='grid md:grid-cols-4 md:max-w-2xl mt-8 grid-cols-1 w-full'
			onMouseLeave={() => setHovered('')}
		>
			{featuredProjects.map((project, index) => (
				<FeaturedProjectCard
					key={index}
					hovered={hovered}
					setHovered={setHovered}
					project={project}
				/>
			))}
		</div>
	)
}
