import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface CallButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export const CallButton = ({ className, size = "default" }: CallButtonProps) => {
  return (
    <Button
      size={size}
      className={cn(
        "bg-gradient-primary hover:opacity-90 shadow-elegant transition-all duration-300",
        className
      )}
      asChild
    >
      <a href="tel:0621660867" className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <span>06 21 66 08 67</span>
      </a>
    </Button>
  );
};

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent";
  size?: "default" | "sm" | "lg";
  href?: string;
}

export const CtaButton = ({ 
  children, 
  className, 
  variant = "primary",
  size = "default",
  href
}: CtaButtonProps) => {
  const gradientClass = variant === "accent" ? "bg-gradient-accent" : "bg-gradient-primary";
  
  const buttonContent = (
    <Button
      size={size}
      className={cn(
        gradientClass,
        "hover:opacity-90 shadow-elegant transition-all duration-300 font-semibold",
        className
      )}
      asChild={!!href}
    >
      {href ? <a href={href}>{children}</a> : children}
    </Button>
  );

  return buttonContent;
};
