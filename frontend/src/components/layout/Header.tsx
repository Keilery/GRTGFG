"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, ShoppingCart, User } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { APP_NAME, NAV_MAIN } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-ios border-b border-white/[0.08]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-ios-sm bg-white/10 flex items-center justify-center border border-white/15">
            ⬢
          </span>
          <span>{APP_NAME}</span>
          <Badge variant="outline" className="hidden sm:inline-flex">
            Beta
          </Badge>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_MAIN.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm transition-all",
                  active
                    ? "bg-white/[0.1] text-white border border-white/[0.12]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.04] border border-transparent",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] min-w-[260px]">
          <Search className="w-4 h-4 text-secondary" />
          <input
            placeholder="Поиск товаров, продавцов…"
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-secondary"
          />
          <kbd className="text-[10px] text-secondary border border-white/10 px-1.5 py-0.5 rounded">
Ctrl K
          </kbd>
        </div>

        <Link
          href="/profile/wallet"
          className="hidden sm:flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition"
          title="Кошелёк"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="font-semibold">12 500 ₽</span>
        </Link>

        <Link
          href="/notifications"
          className="relative p-2 rounded-full hover:bg-white/[0.06] transition"
          aria-label="Уведомления"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-error" />
        </Link>

        <Link
          href="/profile"
          className="flex items-center gap-2"
          title="Профиль"
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/1?v=4"
            size="sm"
            online
          />
        </Link>
      </div>
    </header>
  );
}
