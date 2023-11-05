import React, { FC } from 'react'

export interface ILoginHeroProps {

}

const LoginHero: FC<ILoginHeroProps> = ({ }) => {
  return (
    <div className="form-field">
      <div className="form-control justify-between">
        <div className="flex gap-2">
          <input type="checkbox" className="checkbox" />
          <a href="#">من را به خاطر بسپار</a>
        </div>
        <label className="form-label">
          <a className="link link-underline-hover link-primary text-sm">رمز عبور را فراموش کرده اید؟</a>
        </label>
      </div>
    </div>
  )
}

export default LoginHero;