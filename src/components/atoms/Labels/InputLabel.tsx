import React, { FC } from 'react'

export interface IInputLabelProps {
  children: React.ReactNode
}

const InputLabel: FC<IInputLabelProps> = ({ children }) => {
  return (
    <div className="w-[69px] h-[21px] text-sm font-bold text-left text-[#4a5568]">
      {children}
    </div>
  )
}

export default InputLabel;