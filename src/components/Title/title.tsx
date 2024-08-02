import React from "react";

interface TitleProps {
  children: React.ReactNode;
  customClass?: string;
}

export default function Title({children, customClass }: TitleProps) {
  return (
    <div className={customClass}>{children}</div>
  )
}