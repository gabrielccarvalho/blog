'use client'

import { POSTS } from '@/utils/posts'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function FeaturedPosts() {
	const [hovered, setHovered] = useState('')
	const featured = POSTS.filter((post) =>
		['hello-world', 'first-real-world-project'].includes(post.slug),
	).sort((a, b) => a.date.valueOf() - b.date.valueOf())

	return (
		<div
			className='flex md:flex-row flex-col items-center justify-between gap-4'
			onMouseLeave={() => setHovered('')}
		>
			{featured.map((post) => (
				<Link key={post.slug} href={`/blog/${post.slug}`}>
					<div
						className='relative flex flex-col justify-between p-2 gap-4 cursor-pointer h-[22rem]'
						onMouseEnter={() => setHovered(post.slug)}
					>
						<div className='flex flex-col gap-2'>
							<div className='flex items-center justify-center h-52 max-w-[25rem] overflow-hidden rounded-md bg-black'>
								<Image
									src={post.image}
									alt={post.title}
									width={500}
									height={500}
									className='flex items-center justify-center self-center'
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<h3 className='text-lg font-medium font-display'>
									{post.title}
								</h3>
								<p className='text-sm text-gray-500 max-w-sm line-clamp-2'>
									{post.description}
								</p>
							</div>
						</div>
						<span className='text-xs text-gray-500 uppercase'>
							{post.read_time}
						</span>
						{post.slug === hovered && (
							<motion.div
								className='absolute top-0 left-0 py-44 px-[13rem] bg-hover/50 rounded-md -z-10'
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
