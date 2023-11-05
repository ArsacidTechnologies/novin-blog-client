import React, { FC, useState } from 'react'
import TypoGraphy from '../../molecules/ImageComponents/TypoGraphy/TailwindTypo';
import LoginInput from '../../molecules/InputComponents/LoginInput';
import { Button } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import LoginHero from '../../molecules/Login/LoginInputs';
import LogInform from '../../organisms/Heros/LogInform';

export interface ILoginProps {

}

const LoginTemplate: FC<ILoginProps> = ({ }) => {

  return (
    <section className=''>
      <LogInform />
    </section>
  )
}

export default LoginTemplate;


// <div className="flex flex-col w-fit p-6 rounded-md sm:p-10 ">
// <div className="mb-8 text-center">
//   <h1 className="my-3 text-4xl font-bold">
//     ورود</h1>
//   <h2 className="text-sm ">برای دسترسی به حساب خود وارد شوید</h2>
// </div>
// <form noValidate={true} action="" className="space-y-12">
//   <div className="space-y-4">
//     <div>
//       <label htmlFor="email" className="block mb-2 text-sm">آدرس ایمیل</label>
//       <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
//     </div>
//     <div>
//       <div className="flex justify-between mb-2">
//         <label htmlFor="password" className="text-sm">رمز عبور</label>
//         <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
//       </div>
//       <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
//     </div>
//   </div>
//   <div className="space-y-2">
//     <div>
//       <Button color="default">
//         ورود
//       </Button>
//       <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
//         <Input type="email" label="Email" />
//         <Input type="email" label="Email" placeholder="Enter your email" />
//       </div>

//       {/* <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"></button> */}
//     </div>
//     <p className="px-6 text-sm text-center ">نام کاربری ندارید؟
//       <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">ثبت نام</a>.
//     </p>
//   </div>
// </form>
// </div>
