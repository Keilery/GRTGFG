"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Store,
  Bot,
  Gamepad2,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/marketplace", label: "Маркет", icon: Store },
  { href: "/automation", label: "Боты", icon: Bot },
  { href: "/rental", label: "Аренда", icon: Gamepad2 },
  { href: "/profile", label: "Я", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-3 left-3 right-3 z-50">
      <div className="glass-strong rounded-ios-lg flex justify-around p-1">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex-1 flex flex-col items-center gap-0.5 py-2 rounded-ios-sm transition",
                active ? "bg-white/[0.1] text-white" : "text-secondary",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
