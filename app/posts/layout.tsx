import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Head from 'src/components/Head'
import HeaderLogin from '@/src/components/organisms/Headers/HeaderLogin'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Novin Weblog',
  description: 'Written by Mehran Rastgar',
}

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      {/* <Navigation/> */}
      <body className={inter.className}>
        <HeaderLogin />

        {children}

      </body>

    </html>
  )
}
