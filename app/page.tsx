import SearchInHeaderOrg from '@/src/components/organisms/Search/SearchInHeaderOrg';
import SignOrLoginTemplate from '@/src/components/templates/Login/SignOrLoginTemplate';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { FC } from 'react'

export interface IpageProps {

}

const Home: FC<IpageProps> = ({ }) => {



  return (
    <main className='flex justify-center w-full h-full font-Vazir'>
      <Link href={'/auth'}>

        <Button className='bg-primary text-white text-xl w-[150px]'>صفحه ورود</Button>

      </Link>
    </main>
  )
}

export default Home;