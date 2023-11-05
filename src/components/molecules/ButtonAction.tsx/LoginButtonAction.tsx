import React, { FC } from 'react'

export interface ILoginButtonActionProps {

}

const LoginButtonAction: FC<ILoginButtonActionProps> = ({ }) => {
  return (
    <div className="form-field pt-5">
      <div className="form-control justify-between">
        <button type="button" className="btn btn-primary w-full rounded-medium">وارد شوید</button>
      </div>
    </div>
  )
}

export default LoginButtonAction;