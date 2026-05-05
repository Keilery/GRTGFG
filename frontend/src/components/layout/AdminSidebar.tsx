"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ADMIN } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingBag,
  Wallet,
  Shield,
  BarChart3,
  Headphones,
  ScrollText,
  Settings,
} from "lucide-react";

const ICONS = {
  "/admin": LayoutDashboard,
  "/admin/users": Users,
  "/admin/products": Package,
  "/admin/orders": ShoppingBag,
  "/admin/finance": Wallet,
  "/admin/moderation": Shield,
  "/admin/analytics": BarChart3,
  "/admin/support": Headphones,
  "/admin/logs": ScrollText,
  "/admin/settings": Settings,
} as const;

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:block sticky top-20 h-[calc(100vh-6rem)] w-64 shrink-0">
      <div className="glass rounded-ios p-3 h-full overflow-y-auto">
        <div className="px-3 py-2 mb-3">
          <p className="text-xs uppercase tracking-wider text-secondary">
            Админ-панель
          </p>
        </div>
        <ul className="space-y-1">
          {NAV_ADMIN.map((item) => {
            const Icon =
              ICONS[item.href as keyof typeof ICONS] ?? LayoutDashboard;
            const active =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-ios-sm text-sm transition",
                    active
                      ? "bg-white/[0.1] text-white border border-white/[0.12]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04] border border-transparent",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
