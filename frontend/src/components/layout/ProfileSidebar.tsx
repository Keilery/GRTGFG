"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { MOCK_USERS } from "@/lib/mock-data";

const me = MOCK_USERS[0];

export function ProfileSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:block sticky top-20 h-[calc(100vh-6rem)] w-72 shrink-0">
      <div className="glass rounded-ios p-5">
        <div className="flex flex-col items-center text-center pb-5 border-b border-white/[0.06]">
          <Avatar src={me.avatar} size="xl" online />
          <h3 className="mt-3 font-bold">{me.username}</h3>
          <p className="text-xs text-secondary">{me.email}</p>
          <div className="mt-3 flex gap-2">
            <Badge variant="success">★ {me.rating}</Badge>
            <Badge variant="info">{me.level}</Badge>
            {me.verified && <Badge variant="hot">✓ Verified</Badge>}
          </div>
        </div>
        <ul className="mt-3 space-y-1">
          {NAV_PROFILE.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-ios-sm text-sm transition",
                    active
                      ? "bg-white/[0.1] text-white border border-white/[0.12]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]",
                  )}
                >
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
