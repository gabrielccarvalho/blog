import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { POSTS } from '@/utils/posts'
import moment from 'moment'
import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const slug = params.slug

	const post = POSTS.find((post) => post.slug === slug) || {
		title: 'Post not found',
		description: 'This post does not exist.',
	}

	const previousImages = (await parent).openGraph?.images || []

	return {
		title: `Blog | ${post.title}`,
		description: post.description,
		openGraph: {
			images: [`/posts/${slug}.png`, ...previousImages],
		},
	}
}

export default function PostPage({ params }: Props) {
	const { slug } = params

	const post = POSTS.find((post) => post.slug === slug)

	if (!post) return

	return (
		<>
			<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-9rem)] min-h-[calc(100vh-11rem)] p-6 py-16 gap-8'>
				<div className='flex flex-col gap-6'>
					<div className='flex items-center justify-center overflow-hidden max-h-72 rounded-md'>
						<Image
							src={post.image}
							alt={post.title}
							width={1000}
							height={1000}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='text-4xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600'>
							{post.title}
						</h1>
						<p className='text-sm text-gray-500'>
							{moment(post.date).format('MMMM D, YYYY')} (
							{moment(post.date).fromNow()})
						</p>
						<span className='text-xs text-gray-500 uppercase'>
							{post.read_time}
						</span>
					</div>
				</div>
				<article className='prose prose-invert prose-p:text-gray-400 prose-headings:font-medium prose-li:text-gray-400 w-full mt-8'>
					{post.content}
				</article>
			</MaxWidthWrapper>
		</>
	)
}
