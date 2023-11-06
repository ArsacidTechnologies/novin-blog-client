"use client"
import LogoImage from '@/src/components/molecules/ImageComponents/LogoImage'
import Link from 'next/link';
// type Props = {}

// const HeaderLogin = (props: Props) => {
//     return (
//         <div className="w-[390px] h-[640px] relative overflow-hidden bg-white">
//             <LogoImage/>    
//         </div>
//     )
// }

// export default HeaderLogin

import React, { FC } from 'react'
import ThemeSwitcher from '../../molecules/ThemeSwitcher';
import Image from 'next/image';
import { useAppSelector } from '@/src/store/hooks';
import { selectUserRole } from '@/src/store/slices/userSlice';
import { Button } from '@nextui-org/react';

export interface IHeaderLoginProps {
  title?: string;
}

const HeaderLogin: FC<IHeaderLoginProps> = ({ title }) => {
  const userRole = useAppSelector(selectUserRole)
  return (
    <header className="py-6 ">
      <nav className='container flex items-center justify-between bg-transparent'>
        <ul className=''>
          <Link href={'/'}>
            <LogoImage classes="w-fit h-fit object-fit" w={100} h={60} />
          </Link>
        </ul>
        <ul className=''>
          <Link href={'/auth'}>
            <Button size='sm' variant='flat' className=''>
              {userRole}
            </Button>
          </Link>
        </ul>
        <ul>
          <ThemeSwitcher />
        </ul>
      </nav>
    </header>
  )
}

export default HeaderLogin;