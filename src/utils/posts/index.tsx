import { getReadTime } from '../get-read-time'
import HelloWorld from './hello-world.mdx'

export const POSTS = [
	{
		id: 'e93278f5-4cd3-4576-8158-1a9fe6bd4941',
		title: 'Hello World!',
		description: 'The first post of this blog, and plans for the future',
		date: new Date('2024-04-12T06:39:55.343Z'),
		slug: 'hello-world',
		image: '/posts/hello-world.png',
		content: <HelloWorld />,
		read_time: getReadTime(HelloWorld),
	},
]
