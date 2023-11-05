"use client"
import React, { FC, useState } from 'react'
import LoginTemplate from './LoginTemplate';
import SignUpTemplate from './SignUpTemplate';
import TypoGraphy from '../../molecules/ImageComponents/TypoGraphy/TailwindTypo';
import { Button } from '@nextui-org/react';

export interface ISignOrLoginProps {

}

const SignOrLoginTemplate: FC<ISignOrLoginProps> = ({ }) => {
  const [option, setOption] = useState<"login" | "signup">('login')

  const renderComponent = () => {
    switch (option) {
      case 'login':
        return <>
          <LoginTemplate />
          <Button onClick={() => setOption("signup")} color='secondary'>Sign Up</Button>
        </>
          ;
      case 'signup':
        return <>
          <SignUpTemplate />
          <Button onClick={() => setOption("login")} color='secondary'>Login</Button></>
          ;

    }
  };
  return (
    <div className='justify-center items-center' >
      {renderComponent()}
    </div>
  )
}

export default SignOrLoginTemplate;