import React from 'react';
import FormInput from '@/src/components/molecules/FormInput';
import LoginHero from '../../molecules/Login/LoginHero';
import LoginButtonAction from '../../molecules/ButtonAction.tsx/LoginButtonAction';
import ChangeLoginSignUp from '../../molecules/ButtonAction.tsx/ChangeLoginSignUp';

const SignUpForm: React.FC = () => {

  return (
    <div className="form-group">
      <FormInput label="شماره همراه" placeholder="شماره موبایل، جهت دریافت کد تایید" type="phone" />
      <FormInput label="رمز عبور" placeholder="حد اقل 6 رقم" type="password" />
      <FormInput label="تکرار رمز عبور" placeholder="تکرار رمز بالا" type="password" />
      <FormInput label="نام" placeholder="نام خود را وارد کنید" type="password" />
      <FormInput label="نام خانوادگی" placeholder="نام خانوادگی خود را وارد کنید" type="password" />
      <FormInput label="پست الکترونیک - اختیاری" placeholder="YourEmail@gmail.com" type="email" />
      <LoginHero />
      <LoginButtonAction />
      <ChangeLoginSignUp />
    </div>
  );
}

export default SignUpForm;