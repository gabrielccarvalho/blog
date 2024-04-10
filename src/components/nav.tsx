'use client'

import { Logo } from '@/components/logo'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { motion, spring } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { DialogCommand } from './command-dialog'
import { Button } from './ui/button'

export const navItems = [
	{
		name: 'About',
		slug: 'about',
	},
	{
		name: 'Work',
		slug: 'work',
	},
	{
		name: 'Projects',
		slug: 'projects',
	},
	{
		name: 'Articles',
		slug: 'articles',
	},
	{
		name: 'Contact',
		slug: 'contact',
	},
]

export function Nav() {
	const scrolled = useScroll(80)
	const pathname = usePathname()
	const [hovered, setHovered] = useState('')

	return (
		<div
			className={cn('sticky inset-x-0 top-2 z-30 w-full transition-all', {
				'backdrop-blur-lg': scrolled,
			})}
			onMouseLeave={() => setHovered('')}
		>
			<div className='flex h-14 items-center justify-between'>
				<Link href='/'>
					<Button size='icon' variant='ghost'>
						<Logo />
					</Button>
				</Link>
				<div className='flex items-center space-x-4'>
					<NavigationMenuPrimitive.Root
						delayDuration={0}
						className='relative hidden lg:block'
					>
						<NavigationMenuPrimitive.List className='flex flex-row space-x-8 p-4'>
							{navItems.map(({ name, slug }) => (
								<NavigationMenuPrimitive.Item key={slug} asChild>
									<Link
										id={`nav-${slug}`}
										key={slug}
										href={`/${slug}`}
										onMouseEnter={() => setHovered(slug)}
										aria-selected={pathname === `/${slug}`}
										className='flex flex-col items-center rounded-md px-3 py-2 text-xs uppercase font-medium text-gray-500 transition-colors duration-300 ease-out hover:text-white aria-selected:text-white'
									>
										{name}
										<div
											aria-selected={pathname === `/${slug}`}
											className='invisible w-1/2 border-b border-white -z-10 mt-1.5 aria-selected:visible'
										/>
										{slug === hovered && (
											<motion.div
												className='absolute top-3 px-12 py-5 bg-white/10 rounded-md -z-10'
												layoutId='underline'
												transition={{
													type: 'sprint',
													bounce: 0.25,
													duration: 0.25,
												}}
											/>
										)}
									</Link>
								</NavigationMenuPrimitive.Item>
							))}
						</NavigationMenuPrimitive.List>

						<NavigationMenuPrimitive.Viewport className='data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-gray-200 bg-white shadow-lg' />
					</NavigationMenuPrimitive.Root>
				</div>
				<DialogCommand />
			</div>
		</div>
	)
}
