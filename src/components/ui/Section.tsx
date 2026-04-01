import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

export function Section({ children, className = "", background, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${background || ""} ${className}`}
    >
      {children}
    </section>
  );
}
