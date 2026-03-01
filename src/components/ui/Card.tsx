import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover 
    ? "hover:shadow-md hover:-translate-y-1" 
    : "";

  return (
    <div 
      className={`rounded-2xl shadow-sm p-8 transition-all duration-200 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
