'use client'

import { DialogCommand } from '@/components/command-dialog'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

export default function Home() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-9rem)] h-[calc(100vh-11rem)] justify-center p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display px-4'>
				Gabriel Campos
			</h1>
			<div className='flex flex-col gap-1'>
				<motion.span
					animate={{
						opacity: 1,
						x: 16,
					}}
					transition={{
						ease: 'linear',
						duration: 1,
						x: { duration: 0.8 },
					}}
					className='opacity-0'
				>
					Software Engineer
				</motion.span>
				<motion.span
					animate={{
						opacity: 1,
						x: 16,
					}}
					transition={{
						ease: 'linear',
						duration: 1,
						delay: 0.5,
						x: { duration: 0.8 },
					}}
					className='text-gray-500 opacity-0'
				>
					Passionate about javascript and open-source.
				</motion.span>
				<motion.div
					animate={{
						opacity: 1,
					}}
					transition={{
						ease: 'linear',
						duration: 1,
						delay: 1.5,
					}}
					className='mt-4 opacity-0'
				>
					<DialogCommand>
						<Button variant='ghost' className='hover:bg-white/10'>
							<span>
								Press{' '}
								<kbd className='bg-gray-600 px-1.5 py-0.5 rounded-sm'>⌘</kbd>{' '}
								<kbd className='bg-gray-600 px-1.5 py-0.5 rounded-sm'>K</kbd> to
								start
							</span>
							<ArrowRightIcon className='size-4 ml-2' />
						</Button>
					</DialogCommand>
				</motion.div>
			</div>
		</MaxWidthWrapper>
	)
}
