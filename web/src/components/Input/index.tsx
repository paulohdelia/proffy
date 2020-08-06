import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  className,
  ...rest
}) => {
  const classNameFinal = className ? `input-block ${className}` : 'input-block'

  return (
    <div className={classNameFinal} >
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" {...rest} />
    </div>
  );
}

export default Input;