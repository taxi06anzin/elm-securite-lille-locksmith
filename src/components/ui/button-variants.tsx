import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { PHONE_HREF, PHONE_DISPLAY } from "@/config/site";

interface CallButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export const CallButton = ({ className, size = "default" }: CallButtonProps) => {
  return (
    <Button
      size={size}
      className={cn(
        "bg-urgent text-urgent-foreground hover:bg-urgent/90 active:bg-urgent-pulse shadow-elegant transition-all duration-300 font-semibold",
        className
      )}
      asChild
    >
      <a href={PHONE_HREF} className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <span>{PHONE_DISPLAY}</span>
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
