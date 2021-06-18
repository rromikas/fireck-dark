import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  noMinWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className = "", noMinWidth = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`h-42px px-5 ${
        !noMinWidth ? "min-w-160px" : ""
      } rounded-lg whitespace-nowrap font-medium outline-none focus:outline-none text-center ${className}`}
    ></button>
  );
};

export default Button;
