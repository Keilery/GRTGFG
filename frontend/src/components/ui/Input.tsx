"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, className, ...rest }, ref) => {
    return (
      <label className="block w-full">
        {label && (
          <span className="text-xs font-medium text-secondary mb-2 block uppercase tracking-wider">
            {label}
          </span>
        )}
        <div
          className={cn(
            "relative flex items-center rounded-ios-sm border transition-all",
            "bg-white/[0.04] border-white/[0.08]",
            "focus-within:bg-white/[0.07] focus-within:border-white/30",
            error && "border-error/50",
          )}
        >
          {leftIcon && (
            <span className="pl-4 text-secondary flex items-center">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            className={cn(
              "flex-1 bg-transparent outline-none px-4 py-3 text-white placeholder:text-secondary text-sm",
              className,
            )}
            {...rest}
          />
          {rightIcon && (
            <span className="pr-4 text-secondary flex items-center">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <span className="text-xs text-error mt-1">{error}</span>}
      </label>
    );
  },
);
Input.displayName = "Input";
