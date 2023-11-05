import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'src/components/Head'
import HeaderLogin from '@/src/components/organisms/Headers/HeaderLogin'
import FooterLogin from '@/src/components/organisms/Footers/FooterLogin'
import Providers from '@/app/providers'
import LoadingModal from '@/src/components/organisms/Loader/LoadingModal'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Novin IB Login',
  description: 'Written by Mehran Rastgar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html dir='rtl' className=' flex flex-wrap justify-center items-center border font-Vazir' lang="fa">
      <body className={inter.className}>
        <Providers>
          <div className='h-screen justify-center items-center'>
            <HeaderLogin />
            <LoadingModal />
            <main>{children}</main>
            <FooterLogin />
          </div>
        </Providers>
      </body>
    </html>
  )
}
