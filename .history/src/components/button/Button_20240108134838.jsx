import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto ${className}`}
    >
      {chilren}
    </button>
  );
};

export default Button;
