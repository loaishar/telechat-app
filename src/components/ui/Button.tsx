import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" {...props} />
);