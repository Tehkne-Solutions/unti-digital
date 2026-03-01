"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  className?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseStyles = "h-12 px-6 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-unti-orange text-white hover:opacity-90 focus:ring-unti-orange",
    secondary: "border-2 border-unti-blue text-unti-blue bg-transparent hover:bg-unti-blue hover:text-white focus:ring-unti-blue",
    link: "text-unti-blue hover:underline focus:ring-unti-blue"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
