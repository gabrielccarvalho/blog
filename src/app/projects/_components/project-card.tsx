'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
	project: {
		title: string
		slug: string
		description: string
		icon: React.ReactNode
		link: string
		highlight: string
	}
	hovered: string
	setHovered: (slug: string) => void
}

export function FeaturedProjectCard({ project, hovered, setHovered }: Props) {
	return (
		<Link href={project.link}>
			<div
				className='relative flex flex-col justify-between gap-2 col-span-1 py-4 px-6 hover:cursor-pointer'
				onMouseEnter={() => setHovered(project.slug)}
			>
				{project.icon}
				<h4 className='text-xl font-bold'>{project.title}</h4>
				<p className='text-sm text-gray-500 max-w-32'>{project.description}</p>
				<span className='text-sm'>{project.highlight}</span>
				{project.slug === hovered && (
					<motion.div
						className='absolute top-0 -left-4 md:px-24 px-52 py-20 bg-hover/50 rounded-md -z-10'
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
	)
}
