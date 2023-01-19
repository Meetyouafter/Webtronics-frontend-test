import React, { FC } from 'react';

interface InputProps {
  text: string,
}

const Input: FC<InputProps> = ({ text }) => (
  <input className="input" placeholder={text} required />
);

export default Input;
