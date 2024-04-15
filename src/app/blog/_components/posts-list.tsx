'use client'

import { POSTS } from '@/utils/posts'
import { motion } from 'framer-motion'
import moment from 'moment'
import Link from 'next/link'
import { useState } from 'react'

export function PostsList() {
	const [hovered, setHovered] = useState('')

	return (
		<div
			className='flex flex-col space-y-2'
			onMouseLeave={() => setHovered('')}
		>
			{POSTS.sort(
				(a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
			).map((post) => (
				<Link key={post.slug} href={`/blog/${post.slug}`}>
					<div
						onMouseEnter={() => setHovered(post.slug)}
						className='relative flex justify-between items-start gap-2 cursor-pointer py-8 border-b border-border'
					>
						<h2 className='text-lg font-medium text-gray-400 font-mediums font-display max-w-md line-clamp-1'>
							{post.title}
						</h2>
						<p className='text-xs text-gray-500'>
							{moment(post.date).format('MMMM D, YYYY')}
						</p>
						{post.slug === hovered && (
							<motion.div
								className='absolute top-0 -left-4 py-12 w-[55rem] bg-hover/50 rounded-md -z-10'
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
