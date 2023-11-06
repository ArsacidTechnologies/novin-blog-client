import SignOrLoginTemplate from '@/src/components/templates/Login/SignOrLoginTemplate';
import { Button } from '@nextui-org/react';
import React, { FC } from 'react'

export interface IpageProps {

}

const Auth: FC<IpageProps> = ({ }) => {
  return (
    <main className='flex justify-center w-full h-full '>
      <SignOrLoginTemplate />
    </main>
  )
}

export default Auth;