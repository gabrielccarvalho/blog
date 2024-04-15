import FirstProject from './first-real-world-project.mdx'
import HelloWorld from './hello-world.mdx'

export const POSTS = [
	{
		title: 'Hello World!',
		description: 'The first post of this blog, and plans for the future',
		date: new Date('2024-04-12T06:39:55.343Z'),
		slug: 'hello-world',
		image: '/posts/hello-world.png',
		content: <HelloWorld />,
		read_time: '3 min read',
	},
	{
		title: 'Launching my first real-world project',
		description:
			'My experience building and launching my first real-world project, dealing with users and bugs in production.',
		date: new Date('2024-04-15T19:47:18.545Z'),
		slug: 'first-real-world-project',
		image: '/posts/first-real-world-project.png',
		content: <FirstProject />,
		read_time: '8 min read',
	},
]
