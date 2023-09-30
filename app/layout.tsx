import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'normalize.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Flick Pick Chick',
  title: 'Flickle',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
