import './globals.css'
import type { Metadata } from 'next'
import { VT323 } from 'next/font/google'

const font = VT323({ subsets: ['latin'], weight: ['400'] })

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
