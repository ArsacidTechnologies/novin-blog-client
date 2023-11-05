import React, { FC } from 'react';
import { Input } from '@nextui-org/react';

export interface ILoginHeroProps {
  elementId: string,
  label: string,
  placeHolder: string,
  type: "password" | "text" | "email" | "tel"
}
const LoginInputs: FC<ILoginHeroProps> = ({ elementId, label, placeHolder, type }) => {

  return (
    <div className='font-Vazir justify-start my-2'>
      {/* <label className='flex m-1' htmlFor={elementId}>{label}</label> */}
      <Input
        id={elementId}
        label={label}
        placeholder={placeHolder}
        type={type}
      />
    </div>
  )
}

export default LoginInputs;