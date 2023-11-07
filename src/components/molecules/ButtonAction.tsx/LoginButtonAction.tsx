import { useAppSelector } from '@/src/store/hooks'
import { selectUserApiStatus } from '@/src/store/slices/userSlice'
import { Spinner } from '@nextui-org/react'
import React, { FC } from 'react'

export interface ILoginButtonActionProps {
  disabled?: boolean
  onClick?: () => void
  label: string
}

const LoginButtonAction: FC<ILoginButtonActionProps> = ({ disabled = false, onClick, label }) => {
  const userApiStatus = useAppSelector(selectUserApiStatus)
  return (
    <div className="form-field pt-5">
      <div className="form-control justify-between">
        <button
          disabled={disabled && userApiStatus === 'pending'}
          onClick={onClick}
          type="button" className="btn btn-primary w-full rounded-medium">{userApiStatus === 'pending' ?
            <Spinner label="" color="danger" labelColor="foreground" /> : label}</button>
      </div>
    </div>
  )
}

export default LoginButtonAction;