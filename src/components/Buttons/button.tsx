import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  customClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({children, customClass, onClick }: ButtonProps) {
  return (
    <button
      className={customClass}
      onClick={onClick}
    >
      {children}
    </button>
  )
}