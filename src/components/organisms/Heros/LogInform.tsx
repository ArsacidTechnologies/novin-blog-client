import React, { FC } from 'react'
import LoginInputs from '../../molecules/Login/LoginInputs';
import RoleSelector from '../../molecules/Login/RoleSelector';
import { userRolesArray } from '@/src/store/slices/userSlice';

export interface ILogInformProps {

}

const LogInform: FC<ILogInformProps> = ({ }) => {
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
          array={userRolesArray}
        />
      </ul>
    </section>
  )
}

export default LogInform;