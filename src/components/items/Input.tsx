import React from 'react';

interface ButtonProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type: string;
  errorMessage?: string
  register?: any;
}

export default function Input(props: ButtonProps) {
  return (
    <div>
      <div className={`"borderWrapper" ${props.disabled && 'borderDisabledWrapper'} ${!!props.errorMessage && 'borderErrorWrapper'} `}>
        <input
          className={`input ${props.className} clear ${
            props.disabled ? 'disabled' : 'buttonEffects'
          } ${!!props.errorMessage && 'error'}`}
          placeholder={props.placeholder}
          disabled={props.disabled}
          {...props.register}
        />
      </div>
      {!!props.errorMessage && <p className="paragrath16px errorMessage">{props.errorMessage}</p>}
    </div>
  );
}

Input.defaultProps = {
  placeholder: '',
  className: '',
  disabled: false,
  errorMessage: '',
  register: '',
};
