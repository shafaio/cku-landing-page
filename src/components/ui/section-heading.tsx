import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg";
  children?: ReactNode;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  titleSize = "md",
  children,
  className = "",
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleSizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <h2
        className={`font-bold ${titleSizeClasses[titleSize]} text-gray-900 mb-4`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}

      {children}
    </div>
  );
};

export default SectionHeading;
