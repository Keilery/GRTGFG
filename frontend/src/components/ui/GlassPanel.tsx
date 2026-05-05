import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  withStripes?: boolean;
}

export function GlassPanel({
  className,
  withStripes = false,
  children,
  ...rest
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-ios glass overflow-hidden",
        withStripes && "bg-stripes",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
