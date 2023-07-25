import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const font = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'RogueSky',
	description: 'RogueSky: Wings of Eternity',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}
