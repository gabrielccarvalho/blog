import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
	return (
		<div className={cn(['flex items-center gap-2 font-semibold', className])}>
			<Image
				src='/logo.png'
				width={30}
				height={32}
				alt='G logo'
				className='shadow-sm rounded'
			/>
			<span className='sr-only'>Gabriel</span>
		</div>
	)
}
