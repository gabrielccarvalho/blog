'use client'

import { POSTS } from '@/utils/posts'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function FeaturedPosts() {
	const [hovered, setHovered] = useState('')
	const featured = POSTS.filter((post) => ['hello-world'].includes(post.slug))

	return (
		<div
			className='flex items-center justify-between gap-4'
			onMouseLeave={() => setHovered('')}
		>
			{featured.map((post) => (
				<Link key={post.id} href={`/blog/${post.slug}`}>
					<div
						className='relative flex flex-col gap-4 cursor-pointer'
						onMouseEnter={() => setHovered(post.slug)}
					>
						<div className='flex items-center justify-center max-h-52 overflow-hidden rounded-md'>
							<Image
								src={post.image}
								alt={post.title}
								width={400}
								height={300}
								className=''
							/>
						</div>
						<h3 className='text-lg font-medium font-display'>{post.title}</h3>
						<p className='text-sm text-gray-500'>{post.description}</p>
						<span className='text-xs text-gray-500 uppercase'>
							{post.read_time}
						</span>
						{post.slug === hovered && (
							<motion.div
								className='absolute -top-4 -left-4 py-44 px-[13.5rem] bg-hover/50 rounded-md -z-10'
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
