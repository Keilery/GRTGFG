"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MOCK_RENTALS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import { CheckCircle2, Shield, Zap } from "lucide-react";

type Plan = "day" | "week" | "month";

export default function RentalGamePage({
  params,
}: {
  params: { gameId: string };
}) {
  const game = MOCK_RENTALS.find((r) => r.gameId === params.gameId);
  if (!game) notFound();
  const [plan, setPlan] = useState<Plan>("week");

  const price =
    plan === "day"
      ? game.pricePerDay
      : plan === "week"
        ? game.pricePerWeek
        : game.pricePerMonth;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card padding="none" className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={game.cover} alt={game.gameName} className="w-full aspect-[21/9] object-cover" />
        </Card>
        <Card padding="lg">
          <h1 className="text-3xl font-bold mb-3">{game.gameName}</h1>
          <p className="text-white/80">
            Арендуй официальный игровой аккаунт с активированной игрой. Никаких
            запретов, чистая запись, поддержка обновлений и DLC.
          </p>
          <ul className="grid grid-cols-2 gap-3 mt-6">
            <li className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="w-4 h-4" /> Все DLC включены
            </li>
            <li className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="w-4 h-4" /> Anti-VAC защита
            </li>
            <li className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="w-4 h-4" /> Без VPN
            </li>
            <li className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="w-4 h-4" /> Поддержка 24/7
            </li>
          </ul>
        </Card>
      </div>

      <div className="self-start lg:sticky lg:top-20">
        <Card variant="glass-strong" padding="lg">
          <p className="text-secondary text-sm mb-3">Выберите тариф</p>
          <div className="space-y-2 mb-5">
            {[
              { id: "day", label: "1 день", price: game.pricePerDay },
              { id: "week", label: "1 неделя", price: game.pricePerWeek, badge: "Популярно" },
              { id: "month", label: "1 месяц", price: game.pricePerMonth, badge: "Выгодно" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPlan(p.id as Plan)}
                className={`w-full text-left p-4 rounded-ios-sm border transition flex items-center justify-between ${
                  plan === p.id
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08]"
                }`}
              >
                <div>
                  <p className="font-semibold">{p.label}</p>
                  {p.badge && (
                    <Badge
                      variant={plan === p.id ? "default" : "info"}
                      className={plan === p.id ? "!bg-black/10 !text-black !border-black/20" : ""}
                    >
                      {p.badge}
                    </Badge>
                  )}
                </div>
                <span className="font-bold text-lg">{formatPrice(p.price)}</span>
              </button>
            ))}
          </div>
          <Button className="w-full" size="lg">
            Арендовать за {formatPrice(price)}
          </Button>
          <ul className="text-xs space-y-2 mt-5 pt-5 border-t border-white/[0.06]">
            <li className="flex items-center gap-2 text-success">
              <Zap className="w-3 h-3" /> Активация в течение 5 минут
            </li>
            <li className="flex items-center gap-2 text-success">
              <Shield className="w-3 h-3" /> Гарантия 100% или возврат
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
