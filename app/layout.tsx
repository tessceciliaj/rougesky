import { VT323, IBM_Plex_Mono } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt323',
})
const imb_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-IMB',
})

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
      <body className={`${vt323.variable} ${imb_plex_mono.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
