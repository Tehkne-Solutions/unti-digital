import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

export function Section({ children, className = "", background }: SectionProps) {
  return (
    <section 
      className={`py-20 md:py-28 ${background || ""} ${className}`}
    >
      {children}
    </section>
  );
}
