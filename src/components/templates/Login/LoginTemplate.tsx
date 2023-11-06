import React, { FC } from 'react'
import LoginForm from '../../organisms/Forms/LoginForm';
export interface ILoginProps {

}

const LoginTemplate: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6 font-Vazir ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-2">وارد شوید</h1>
        <p className="text-sm">برای دسترسی به حساب خود وارد شوید</p>
      </div>
      <LoginForm />
      <h1 className=' w-fit text-center absolute font-Vazir bottom-0 '>این صفحه جهت تست میباشد!</h1>

    </div>
  );
}

export default LoginTemplate;
