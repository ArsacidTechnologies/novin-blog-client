import React, { FC } from 'react'

export interface ILoginButtonActionProps {
  disabled?: boolean
  onClick?: () => void
  label: string
}

const LoginButtonAction: FC<ILoginButtonActionProps> = ({ disabled = false, onClick, label }) => {
  return (
    <div className="form-field pt-5">
      <div className="form-control justify-between">
        <button
          disabled={disabled}
          onClick={onClick}
          type="button" className="btn btn-primary w-full rounded-medium">{label}</button>
      </div>
    </div>
  )
}

export default LoginButtonAction;