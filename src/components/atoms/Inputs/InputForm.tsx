import React from 'react';

interface InputFormProps {
  placeholder: string;
  type: string;
}

const InputForm: React.FC<InputFormProps> = ({ placeholder, type }) => {
  return (
    <input placeholder={placeholder} type={type} className="input max-w-full rounded-medium bg-background text-foreground" />
  );
}

export default InputForm;
