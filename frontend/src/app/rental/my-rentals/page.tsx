import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock } from "lucide-react";

const MY_RENTALS = [
  {
    game: "Cyberpunk 2077",
    cover: "https://images.unsplash.com/photo-1542751110?w=400&q=80",
    expires: "12 часов",
    plan: "День",
    price: 89,
    status: "ACTIVE",
  },
  {
    game: "Red Dead Redemption 2",
    cover: "https://images.unsplash.com/photo-1538481199705?w=400&q=80",
    expires: "5 дней",
    plan: "Неделя",
    price: 599,
    status: "ACTIVE",
  },
  {
    game: "Elden Ring",
    cover: "https://images.unsplash.com/photo-1605647540924?w=400&q=80",
    expires: "Истёк",
    plan: "День",
    price: 119,
    status: "EXPIRED",
  },
];

export default function MyRentalsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8">
      <h1 className="text-3xl font-bold mb-2">Мои аренды</h1>
      <p className="text-secondary mb-6">Активные и завершённые аренды</p>
      <div className="space-y-3">
        {MY_RENTALS.map((r, i) => (
          <Card key={i} padding="md">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-20 h-14 rounded-ios-sm overflow-hidden bg-white/[0.04] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.cover} alt={r.game} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-[180px]">
                <h3 className="font-semibold">{r.game}</h3>
                <p className="text-xs text-secondary">
                  Тариф: {r.plan} · {r.price} ₽
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-secondary" />
                <span className={r.status === "EXPIRED" ? "text-error" : "text-white"}>
                  {r.expires}
                </span>
              </div>
              <Badge variant={r.status === "ACTIVE" ? "success" : "default"}>
                {r.status}
              </Badge>
              {r.status === "ACTIVE" ? (
                <Button variant="secondary" size="sm">Продлить</Button>
              ) : (
                <Button size="sm">Снова</Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
