"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "success";
type Size = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-white/95 active:scale-[0.98] shadow-glow",
  secondary:
    "bg-white/[0.08] text-white border border-white/[0.12] hover:bg-white/[0.14] backdrop-blur-xl",
  ghost: "text-white/80 hover:text-white hover:bg-white/[0.06]",
  danger: "bg-error text-white hover:bg-error/90",
  success: "bg-success text-black hover:bg-success/90",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-ios-sm",
  md: "h-11 px-6 text-sm rounded-ios",
  lg: "h-13 px-8 text-base rounded-ios",
  icon: "h-10 w-10 rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap select-none transition-all duration-300 ease-out",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black",
          VARIANTS[variant],
          SIZES[size],
          className,
        )}
        {...rest}
      >
        {loading ? (
          <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
