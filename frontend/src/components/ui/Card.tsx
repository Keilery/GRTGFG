import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "glass" | "glass-strong" | "glass-subtle" | "solid";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  glass: "glass",
  "glass-strong": "glass-strong",
  "glass-subtle": "glass-subtle",
  solid: "bg-zinc-950 border border-white/[0.08]",
};

const PAD = { none: "", sm: "p-4", md: "p-6", lg: "p-8" };

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "glass", padding = "md", hover = false, className, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "rounded-ios overflow-hidden",
        VARIANTS[variant],
        PAD[padding],
        hover &&
          "transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.18] hover:scale-[1.01] hover:shadow-glow",
        className,
      )}
      {...rest}
    />
  ),
);
Card.displayName = "Card";
