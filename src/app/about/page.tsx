'use client'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function AboutPage() {
	const [hovered, setHovered] = useState('')

	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-9rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-l from-purple-400 via-pink-400 to-fuchsia-400'>
				Develop. Share. Repeat
			</h1>
			<div className='flex md:flex-row gap-4 flex-col'>
				<Image
					src='/me.jpeg'
					width={320}
					height={320}
					alt='Gabriel Campos Headshot'
					className='rounded-md grayscale'
					draggable={false}
				/>
				<div className='flex flex-col md:max-w-sm mx-auto leading-loose space-y-4'>
					<p className='text-gray-500'>
						<span className='text-white'>Hey, I'm Gabriel Campos</span>. I
						started my journey as a software engineer back in 2018, working with
						React.
					</p>
					<p className='text-gray-500'>
						I've created a few micro-saas companies, currently launching{' '}
						<a
							href='https://cardfy.vercel.app/'
							target='_blank'
							rel='noreferrer'
							className='text-white'
						>
							Cardfy
						</a>
						. I'm originally from Brazil, living in{' '}
						<span className='text-white'>Natal, Rio Grande do Norte</span>.
					</p>
					<p className='text-gray-500'>
						I'm passionated about open-source and creating new projects. When
						I'm not working, I like to surf, play video games and create new
						things.
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-4 mt-12'>
				<h3 className='text-2xl'>Bio</h3>
				<span className='text-gray-500'>
					A quick description about who is Gabriel Campos.
				</span>
				<blockquote className='px-4 py-2 border-l-4 max-w-3xl'>
					<p className='text-gray-500 leading-loose'>
						Gabriel Campos is a Brazilian software engineer, entrepreneur
						enthusiast and open-source lover. He currently lives in Natal, Rio
						Grande do Norte. He started his journey as a software engineer back
						in 2018, working with the MERN stack. Currently looking for new
						opportunities and projects to participate.
					</p>
				</blockquote>
			</div>
			<div className='flex flex-col gap-8'>
				<h3 className='text-2xl'>Keep exploring!</h3>
				<div
					className='grid grid-cols-2 max-w-md gap-4'
					onMouseLeave={() => setHovered('')}
				>
					<Link href='/work'>
						<div
							className='relative flex items-center justify-center h-20 text-lg cursor-pointer group'
							onMouseEnter={() => setHovered('work')}
						>
							My Work
							<ArrowUpRightIcon
								strokeWidth={1.5}
								className='size-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200'
							/>
							{hovered === 'work' && (
								<motion.div
									className='absolute -top-2 -left-2 py-[3rem] px-[7.25rem] bg-hover/50 rounded-md -z-10'
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
					<Link href='/projects'>
						<div
							className='relative flex items-center justify-center h-20 text-lg cursor-pointer group'
							onMouseEnter={() => setHovered('projects')}
						>
							My Projects
							<ArrowUpRightIcon
								strokeWidth={1.5}
								className='size-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200'
							/>
							{hovered === 'projects' && (
								<motion.div
									className='absolute -top-2 -left-2 py-[3rem] px-[7.25rem] bg-hover/50 rounded-md -z-10'
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
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
