import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerWidth?: "sm" | "md" | "lg" | "xl" | "full";
  bgColor?: string;
}

const Section = ({
  id,
  children,
  className = "",
  containerWidth = "lg",
  bgColor = "bg-white",
}: SectionProps) => {
  const containerClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "w-full",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div
        className={`container mx-auto px-4 md:px-6 ${containerClasses[containerWidth]}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
