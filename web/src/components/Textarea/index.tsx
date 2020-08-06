import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  className,
  ...rest
}) => {

  const classNameFinal = className ? `textarea-block ${className}` : 'textarea-block'
  return (
    <div className={classNameFinal}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;