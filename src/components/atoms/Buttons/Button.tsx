import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => {};
  disabled?: boolean;
  icon?: React.ReactNode;
}



export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  disabled,

}) => {
  const classes = classNames(
    'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-white',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    className
  );

  return (
    <button
      onClick={onClick}
      type="button"
      className="w-[294px] h-14 relative overflow-hidden rounded-full bg-slate-500"
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    >
      <p className="w-[50.43px] h-4 absolute left-[122px] top-5 text-base font-semibold text-center text-[#f7fafc]">
        {children}
      </p>
    </button>
  );
};