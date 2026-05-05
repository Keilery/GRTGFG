"use client";

import { useState } from "react";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  const [active, setActive] = useState<string>("all");
  const items = [{ id: "all", name: "Все", icon: "✨" }, ...CATEGORIES];
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
      {items.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition border whitespace-nowrap",
            active === cat.id
              ? "bg-white text-black border-white"
              : "bg-white/[0.04] text-white/70 border-white/[0.08] hover:bg-white/[0.08]",
          )}
        >
          <span>{cat.icon}</span>
          {cat.name}
        </button>
      ))}
    </div>
  );
}
