import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm md:text-base";

  const variants = {
    primary:
      "bg-[#1B6CA8] text-white hover:bg-[#0A3D62] shadow-md hover:shadow-lg",
    secondary:
      "bg-[#22A5D9] text-white hover:bg-[#1B6CA8] shadow-md hover:shadow-lg",
    outline:
      "border-2 border-[#1B6CA8] text-[#1B6CA8] hover:bg-[#1B6CA8] hover:text-white",
    white:
      "bg-white text-[#0A3D62] hover:bg-[#F8FAFC] shadow-md hover:shadow-lg",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
