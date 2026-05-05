import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-ios-sm shimmer bg-white/[0.04]",
        className,
      )}
    />
  );
}
