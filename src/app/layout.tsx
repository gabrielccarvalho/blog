import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { NavMobile } from '@/components/nav-mobile'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { inter, satoshi } from '@/styles/fonts'
import '@/styles/global.css'

export const metadata: Metadata = {
	title: 'Gabriel Campos | Software Engineer',
	description: 'My personal website and blog.',
	openGraph: {
		title: 'Gabriel Campos | Software Engineer',
		description: 'My personal website and blog.',
		url: 'https://gabrielcampos.com.br',
		siteName: 'Gabriel Campos',
		images: [
			{
				url: 'http://localhost:3000/api/og?title=Gabriel-Campos', // Dynamic og route
				width: 800,
				height: 600,
			},
			{
				url: 'http://localhost:3000/api/og?title=Gabriel-Campos', // Dynamic og route
				width: 1800,
				height: 1600,
				alt: 'Gabriel Campos',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={cn(satoshi.variable, inter.variable)}>
				<main className='px-6'>
					<Nav />
					<NavMobile />
					{children}
					<Footer />
				</main>
				<Toaster />
			</body>
		</html>
	)
}
