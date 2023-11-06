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
        return <LoginTemplate />;
      case 'signup':
        return <SignUpTemplate />;

    }
  };
  return (
    <div className='justify-center items-center my-4'>
      {renderComponent()}
    </div>
  )
}

export default SignOrLoginTemplate;