'use client'

import * as React from 'react'

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/command'
import {
	BriefcaseBusinessIcon,
	Code2,
	Code2Icon,
	Command,
	HomeIcon,
	LinkIcon,
	MailIcon,
	NewspaperIcon,
	UserCircleIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from './ui/button'

export function DialogCommand() {
	const [open, setOpen] = React.useState(false)
	const { push } = useRouter()

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<>
			<Button
				size='icon'
				variant='ghost'
				onClick={() => setOpen(!open)}
				className='md:visible invisible'
			>
				<Command className='size-6' />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='GENERAL'>
						<CommandItem
							onSelect={() => {
								navigator.clipboard.writeText(window.location.toString())
								toast.success('Link copied to clipboard.', {
									description: 'You can now share anywhere you want!',
								})
								setOpen(false)
							}}
						>
							<LinkIcon className='mr-2 size-4' />
							<span>Copy Link</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								push('/contact')
								setOpen(false)
							}}
						>
							<MailIcon className='mr-2 size-4' />
							<span>Send Email</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								window.open(
									'https://github.com/gabrielccarvalho/blog',
									'_blank',
								)
								setOpen(false)
							}}
						>
							<Code2 className='mr-2 size-4' />
							<span>View Source Code</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading='GO TO'>
						<CommandItem
							onSelect={() => {
								push('/')
								setOpen(false)
							}}
						>
							<HomeIcon className='mr-2 size-4' />
							<span>Home</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								push('/about')
								setOpen(false)
							}}
						>
							<UserCircleIcon className='mr-2 size-4' />
							<span>About</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								push('/work')
								setOpen(false)
							}}
						>
							<BriefcaseBusinessIcon className='mr-2 size-4' />
							<span>Work</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								push('/projects')
								setOpen(false)
							}}
						>
							<Code2Icon className='mr-2 size-4' />
							<span>Projects</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								push('/articles')
								setOpen(false)
							}}
						>
							<NewspaperIcon className='mr-2 size-4' />
							<span>Articles</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
