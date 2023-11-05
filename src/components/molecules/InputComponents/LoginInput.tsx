import React, { FC } from 'react'
import InputField from '../../atoms/Inputs/InputField';
import InputLabel from '../../atoms/Labels/InputLabel';

export interface ILoginInputProps {

}

const LoginInput: FC<ILoginInputProps> = ({ }) => {
  return (
    <div>
      <InputLabel>
        نام کاربری
      </InputLabel>
      <InputField

      >
        نام کاربری را وارد کنید
      </InputField>

    </div>
  )
}

export default LoginInput;