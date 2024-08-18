import React from 'react';

const Button = ({ type, onClick, className, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-white ${className}`}
  >
    {children}
  </button>
);

export default Button;
