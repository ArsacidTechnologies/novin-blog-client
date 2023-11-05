import React, { FC } from 'react'

export interface IInputFieldProps {
  children: React.ReactNode
}

const InputField: FC<IInputFieldProps> = ({ children }) => {
  return (
    <div className="w-[294px] h-11 relative bg-white border-t-0 border-r-0 border-b border-l-0 border-slate-200">
      <div className="w-[294px] h-[22px] absolute left-0 top-2.5 overflow-hidden">
        <p className="w-[159px] h-[18px] absolute left-[135px] top-0.5 text-[17.71875px] text-left text-[#a0aec0]">
          {children}
        </p>
      </div>
    </div>
  )
}

export default InputField;