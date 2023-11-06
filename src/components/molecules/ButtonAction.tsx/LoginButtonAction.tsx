import React, { FC } from 'react'

export interface ILoginButtonActionProps {
  disabled?: boolean
  onClick?: () => void
}

const LoginButtonAction: FC<ILoginButtonActionProps> = ({ disabled = false, onClick }) => {
  return (
    <div className="form-field pt-5">
      <div className="form-control justify-between">
        <button
          disabled={disabled}
          onClick={onClick}
          type="button" className="btn btn-primary w-full rounded-medium">وارد شوید</button>
      </div>
    </div>
  )
}

export default LoginButtonAction;