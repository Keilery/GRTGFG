import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outline"
  | "hot"
  | "new";

const VARIANTS: Record<Variant, string> = {
  default: "bg-white/10 text-white border-white/10",
  success: "bg-success/15 text-success border-success/20",
  warning: "bg-warning/15 text-warning border-warning/20",
  error: "bg-error/15 text-error border-error/20",
  info: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  outline: "border-white/15 text-white/70",
  hot: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  new: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({
  variant = "default",
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border uppercase tracking-wider",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    />
  );
}
