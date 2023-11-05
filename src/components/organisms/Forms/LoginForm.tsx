import React from 'react';
import FormInput from '@/src/components/molecules/FormInput';
import { useAppDispatch } from '@/src/store/hooks';
import { setUserLoginOrSignUp } from '@/src/store/slices/userSlice';
import LoginHero from '../../molecules/Login/LoginHero';
import LoginButtonAction from '../../molecules/ButtonAction.tsx/LoginButtonAction';
import ChangeLoginSignUp from '../../molecules/ButtonAction.tsx/ChangeLoginSignUp';

const LoginForm: React.FC = () => {

  return (
    <div className="form-group">
      <FormInput label="شماره همراه" placeholder="شماره موبایلی که با آن ثبت نام کرده اید" type="phone" />
      <FormInput label="رمز عبور" placeholder="********" type="password" />
      <LoginHero />
      <LoginButtonAction />
      <ChangeLoginSignUp />
    </div>
  );
}

export default LoginForm;