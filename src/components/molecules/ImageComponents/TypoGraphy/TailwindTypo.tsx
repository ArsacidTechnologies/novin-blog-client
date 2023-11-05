import React, { FC } from 'react';
import classNames from 'classnames';
export interface ITailwindTypoProps {
  text: string,
  fontFamily?: "roboto" | 'open-sans' | 'lato' | 'vazir',
  color?: 'black' | 'gray' | 'red' | 'blue' | 'white',
  backgroundColor?: 'white' | 'red' | 'blue' | 'green' | 'transparent'
}

const TypoGraphy: FC<ITailwindTypoProps> = ({ text, fontFamily, color = 'black', backgroundColor = 'white' }) => {
  const textClasses = classNames(
    'font-sans', // Default font-family
    {
      'text-white': color === 'white',
      'text-black': color === 'black',
      'text-gray-700': color === 'gray',
      'text-red-700': color === 'red',
      'text-blue-700': color === 'blue',
    },
    {
      'font-Vazir font-bold': fontFamily === 'vazir',
      'font-roboto': fontFamily === 'roboto',
      'font-open-sans': fontFamily === 'open-sans',
      'font-lato': fontFamily === 'lato',
    },

  );

  const bgClasses = classNames(
    'bg-white', // Default background-color
    {
      'bg-transparent': backgroundColor === 'transparent',
      'bg-white': backgroundColor === 'white',
      'bg-red-200': backgroundColor === 'red',
      'bg-blue-200': backgroundColor === 'blue',
      'bg-green-200': backgroundColor === 'green',
    }
  );

  return (
    <div className={textClasses}>
      <div className={bgClasses}>
        {text}
      </div>
    </div>
  );
};

export default TypoGraphy;