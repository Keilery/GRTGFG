import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  fallback?: string;
  online?: boolean;
}

const SIZES = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-lg",
};

export function Avatar({
  src,
  alt = "",
  size = "md",
  className,
  fallback,
  online,
}: AvatarProps) {
  const initials = (fallback || alt || "?")
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className={cn("relative inline-block shrink-0", className)}>
      <span
        className={cn(
          "rounded-full overflow-hidden inline-flex items-center justify-center font-semibold uppercase",
          "bg-white/[0.06] border border-white/[0.12] text-white/80",
          SIZES[size],
        )}
      >
        {src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          initials
        )}
      </span>
      {online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-success border-2 border-black" />
      )}
    </span>
  );
}
