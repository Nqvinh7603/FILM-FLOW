import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
