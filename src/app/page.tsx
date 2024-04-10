import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function Home() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] h-[calc(100vh-11rem)] justify-center p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display'>Gabriel Campos</h1>
			<div className='flex flex-col gap-1'>
				<span>Software Engineer</span>
				<span className='text-gray-500'>
					Passionate about javascript and open-source.
				</span>
				<div className='flex items-center self-start rounded-lg mt-4 group'>
					<span>
						Press <kbd className='bg-gray-600 px-1.5 py-0.5 rounded-sm'>⌘</kbd>{' '}
						<kbd className='bg-gray-600 px-1.5 py-0.5 rounded-sm'>k</kbd> to
						start
					</span>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}
