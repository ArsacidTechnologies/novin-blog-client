import React from 'react';
import InputForm from '../atoms/Inputs/InputForm';

interface FormInputProps {
  label: string;
  placeholder: string;
  type: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, type }) => {
  return (
    <div className="form-field">
      <label className="form-label text-base font-Vazir text-content1">{label}</label>
      <InputForm placeholder={placeholder} type={type} />
    </div>
  );
}

export default FormInput;