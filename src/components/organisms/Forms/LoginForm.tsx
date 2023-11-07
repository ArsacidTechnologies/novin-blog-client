import React, { useEffect } from 'react';
import FormInput from '@/src/components/molecules/FormInput';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { loginUser, selectUser, selectUserApiStatus, selectUserRole, setUserLoginOrSignUp, userRolesArray } from '@/src/store/slices/userSlice';
import LoginHero from '../../molecules/Login/LoginHero';
import LoginButtonAction from '../../molecules/ButtonAction.tsx/LoginButtonAction';
import ChangeLoginSignUp from '../../molecules/ButtonAction.tsx/ChangeLoginSignUp';
import RoleSelector from '../../molecules/Login/RoleSelector';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const userRole = useAppSelector(selectUserRole)
  const userApiStatus = useAppSelector(selectUserApiStatus)
  const user = useAppSelector(selectUser)
  const router = useRouter()

  useEffect(() => {
    if (user?.userId && userApiStatus === 'success' && user?.userId > 0) {
      router.push('/posts')
    }
  }, [userApiStatus, user])


  return (
    <div className="form-group">
      <FormInput label="شماره همراه" placeholder="شماره موبایلی که با آن ثبت نام کرده اید" type="phone" />
      <FormInput label="رمز عبور" placeholder="********" type="password" />
      <LoginHero />
      <RoleSelector array={userRolesArray} label='انتخاب نقش کاربر' />
      <LoginButtonAction
        label='وارد شوید'
        onClick={() => {
          dispatch(loginUser(userRole))
        }}
        disabled={(userRole === 'choosing')} />
      <ChangeLoginSignUp />
    </div>
  );
}

export default LoginForm;