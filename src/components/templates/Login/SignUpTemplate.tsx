import React, { FC } from 'react'
import SignUpForm from '../../organisms/Forms/SignUpForm';

export interface ISignUpProps {

}

const SignUpTemplate: FC<ISignUpProps> = ({ }) => {
  return (
    <div className='mx-auto flex w-full max-w-sm flex-col gap-6 font-Vazir'>
      <SignUpForm />
    </div>
  )
}

export default SignUpTemplate;