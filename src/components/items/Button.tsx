import React, { FC } from 'react';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button',
  className: string,
  children: string,
}

const Button: FC<ButtonProps> = ({ type, className, children }) => (
  <button className={className} type={type}>{children}</button>
);

export default Button;
