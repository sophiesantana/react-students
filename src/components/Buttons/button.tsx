import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  customClass?: string;
}

export default function Button({children, customClass }: ButtonProps) {
  return (
    <button className={customClass}>{children}</button>
  )
}