import { useAppDispatch, useAppSelector } from '@/src/store/hooks'
import { selectUserLoginOption, setUserLoginOrSignUp } from '@/src/store/slices/userSlice'
import React, { FC } from 'react'

export interface IChangeLoginSignUpProps {

}

const ChangeLoginSignUp: FC<IChangeLoginSignUpProps> = ({ }) => {
  const dispatch = useAppDispatch()
  const signInOrSignup = useAppSelector(selectUserLoginOption)
  return (
    <div className="form-field">
      <div className="form-control justify-center">
        <a
          onClick={() => {
            if (signInOrSignup === 'login')
              dispatch(setUserLoginOrSignUp('signup'))
            else
              dispatch(setUserLoginOrSignUp('login'))
          }}
          className="link link-underline-hover link-primary text-sm">
          {signInOrSignup === 'login' ?
            "تا حالا ثبت نام نکرده اید؟ کلیک کنید" : "از قبل حساب کاربری دارید؟ کلیک کنید"}
        </a>
      </div>
    </div>
  )
}

export default ChangeLoginSignUp;