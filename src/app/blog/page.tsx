import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { FeaturedPosts } from './_components/featured-posts'
import { PostsList } from './_components/posts-list'

export default function BlogPage() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-9rem)] min-h-[calc(100vh-11rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-fuchsia-600'>
				Stories. Thoughts. Guides.
			</h1>
			<p className='text-gray-500 leading-loose'>
				Here begins my journey of{' '}
				<span className='text-white'>writing blog posts</span>. You can read
				about web development,{' '}
				<span className='text-white'>build in public</span>, and tech related
				topics.
			</p>
			<div className='flex flex-col gap-8 my-4'>
				<h3 className='text-xl font-bold font-display'>Featured Posts</h3>
				<FeaturedPosts />
			</div>
			<div className='flex flex-col gap-6'>
				<h3 className='text-xl font-bold font-display'>All Posts</h3>
				<PostsList />
			</div>
		</MaxWidthWrapper>
	)
}
