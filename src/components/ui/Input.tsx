import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => (
  <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring" {...props} />
);