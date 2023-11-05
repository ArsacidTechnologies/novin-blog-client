import React, { FC } from 'react'
import LoginInputs from '../../molecules/Login/LoginInputs';
import RoleSelector from '../../molecules/Login/RoleSelector';
import { setUserLoginOrSignUp, userRolesArray } from '@/src/store/slices/userSlice';
import { useAppDispatch } from '@/src/store/hooks';
import { Button } from '@nextui-org/react';

export interface ILogInformProps {

}

const LogInform: FC<ILogInformProps> = ({ }) => {
  const dispatch = useAppDispatch()
  return (
    <section >
      <ul className=" my-4">
        <LoginInputs
          elementId='userphone'
          placeHolder='09******'
          label='شماره همراه'
          type='tel'
        />
      </ul>
      <ul className=" my-4">
        <RoleSelector
          label='نوع کاربر'
          array={userRolesArray}
        />
      </ul>
      <Button
        onClick={() => {
          dispatch(setUserLoginOrSignUp('signup'))
        }}
      >
        sign Up?
      </Button>
    </section>
  )
}

export default LogInform;