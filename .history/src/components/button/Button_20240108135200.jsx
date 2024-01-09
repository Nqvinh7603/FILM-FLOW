import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (key) {
    case value:
      break;

    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize  w-full mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
