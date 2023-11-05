import React from 'react';
import { BsCheck } from 'react-icons/bs';
import classNames from 'classnames';

export interface ButtonRegularProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
  label: string;
}

export const ButtonRegular: React.FC<ButtonRegularProps> = ({
  className,
  children,
  onClick,
  disabled,
  icon,
  iconPlacement = 'left',
}) => {
  const classes = classNames(
    'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-white',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    className
  );

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPlacement === 'left' && (
        <BsCheck className="-ml-1 mr-2 h-5 w-5" />
      )}
      {children}
      {icon && iconPlacement === 'right' && (
        <BsCheck className="-mr-1 ml-2 h-5 w-5" />
      )}
    </button>
  );
};