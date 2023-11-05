import React, { FC } from 'react'
import TypoGraphy from '../../molecules/ImageComponents/TypoGraphy/TailwindTypo';

export interface ISignUpProps {

}

const SignUpTemplate: FC<ISignUpProps> = ({ }) => {
  return (
    <div>
      <TypoGraphy text='SignUp' />
    </div>
  )
}

export default SignUpTemplate;