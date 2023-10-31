import React from 'react';
import { BsCheck } from 'react-icons/bs';
import classNames from 'classnames';

interface ButtonRegularProps {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPlacement?: 'left' | 'right';
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
        'inline-flex items-center border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
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