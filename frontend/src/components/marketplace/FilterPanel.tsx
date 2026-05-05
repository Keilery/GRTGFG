"use client";

import { Card } from "@/components/ui/Card";
import { GAMES } from "@/lib/constants";
import { useState } from "react";

export function FilterPanel() {
  const [price, setPrice] = useState({ min: 0, max: 100000 });

  return (
    <Card padding="md" className="space-y-5 sticky top-20">
      <div>
        <h4 className="font-semibold text-sm mb-3">Цена, ₽</h4>
        <div className="flex gap-2">
          <input
            type="number"
            value={price.min}
            onChange={(e) =>
              setPrice((p) => ({ ...p, min: Number(e.target.value) }))
            }
            className="w-1/2 bg-white/[0.04] border border-white/[0.08] rounded-ios-sm px-3 py-2 text-sm outline-none focus:border-white/30"
          />
          <input
            type="number"
            value={price.max}
            onChange={(e) =>
              setPrice((p) => ({ ...p, max: Number(e.target.value) }))
            }
            className="w-1/2 bg-white/[0.04] border border-white/[0.08] rounded-ios-sm px-3 py-2 text-sm outline-none focus:border-white/30"
          />
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3">Игра</h4>
        <ul className="space-y-1.5 max-h-64 overflow-y-auto">
          {GAMES.map((g) => (
            <li key={g.id}>
              <label className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-white"
                  defaultChecked={false}
                />
                <span>
                  {g.icon} {g.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3">Доставка</h4>
        <ul className="space-y-1.5">
          {["Мгновенно", "До 15 минут", "До 1 часа", "До 1 дня", "Дольше"].map(
            (label) => (
              <li key={label}>
                <label className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer">
                  <input type="checkbox" className="accent-white" />
                  {label}
                </label>
              </li>
            ),
          )}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-3">Продавец</h4>
        <ul className="space-y-1.5">
          {["Только верифицированные", "Gold+", "Silver+", "Любые"].map(
            (label) => (
              <li key={label}>
                <label className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer">
                  <input
                    type="radio"
                    name="seller"
                    className="accent-white"
                    defaultChecked={label === "Любые"}
                  />
                  {label}
                </label>
              </li>
            ),
          )}
        </ul>
      </div>
    </Card>
  );
}
