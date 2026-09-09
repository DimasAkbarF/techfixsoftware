import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "accent"
  | "whatsapp"
  | "telegram"
  | "secondary"
  | "ghost";

type Size = "default" | "large" | "small" | "icon";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  accent: "bg-accent text-accent-foreground hover:bg-accent-hover",
  whatsapp:
    "bg-whatsapp text-whatsapp-foreground hover:brightness-95",
  telegram:
    "bg-telegram text-telegram-foreground hover:brightness-95",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-4 text-sm font-semibold rounded-md",
  large: "h-11 px-5 text-sm font-semibold rounded-md",
  small: "h-9 px-3.5 text-xs font-medium rounded-md",
  icon: "h-10 w-10 rounded-md",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonLinkProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ variant = "primary", size = "default", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = "primary", size = "default", className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
