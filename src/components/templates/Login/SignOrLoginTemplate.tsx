"use client"
import React, { FC, useState } from 'react'
import LoginTemplate from './LoginTemplate';
import SignUpTemplate from './SignUpTemplate';
import TypoGraphy from '../../molecules/ImageComponents/TypoGraphy/TailwindTypo';
import { Button } from '@nextui-org/react';
import { useAppSelector } from '@/src/store/hooks';
import { selectUserLoginOption } from '@/src/store/slices/userSlice';

export interface ISignOrLoginProps {

}

const SignOrLoginTemplate: FC<ISignOrLoginProps> = ({ }) => {
  // const [option, setOption] = useState<"login" | "signup">('login')
  const selecSignInOrSignUp = useAppSelector(selectUserLoginOption)

  const renderComponent = () => {
    switch (selecSignInOrSignUp) {
      case 'login':
        return <>
          <LoginTemplate />
          {/* <Button onClick={() => setOption("signup")} color='secondary'>Sign Up</Button> */}
        </>
          ;
      case 'signup':
        return <>
          <SignUpTemplate />
          {/* <Button onClick={() => setOption("login")} color='secondary'>Login</Button> */}</>
          ;

    }
  };
  return (
    <div className='justify-center items-center' >
      {renderComponent()}
      <h1 className=' w-fit text-center absolute font-Vazir bottom-0 '>این صفحه جهت تست میباشد!</h1>
    </div>
  )
}

export default SignOrLoginTemplate;