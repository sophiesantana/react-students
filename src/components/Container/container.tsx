import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  customClass?: string;
}

export default function Container({children, customClass }: ContainerProps) {
  return (
    <div className={customClass}>{children}</div>
  )
}