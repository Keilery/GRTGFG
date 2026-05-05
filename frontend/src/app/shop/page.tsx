import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { formatPrice, formatNumber } from "@/lib/utils";
import { Zap, ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-8">
        <Badge variant="success" className="mb-3">
          ✓ Официальный магазин
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Цифровые товары и подписки
        </h1>
        <p className="text-secondary">
          Steam, PS, Xbox, Discord, Game Pass — мгновенная доставка
        </p>
      </GlassPanel>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
        {["Все", "Подписки", "Ключи", "Кошельки", "DLC", "Гифт-карты"].map((c) => (
          <button
            key={c}
            className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-full text-sm whitespace-nowrap"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {MOCK_PRODUCTS.map((p) => (
          <Link key={p.id} href={`/shop/product/${p.id}`}>
            <Card variant="glass" padding="none" hover className="h-full overflow-hidden flex flex-col">
              <div className="aspect-[4/3] bg-white/[0.04] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <Badge variant="success">✓ Официальный</Badge>
                  {p.deliveryType === "INSTANT" && (
                    <Badge variant="info">
                      <Zap className="w-3 h-3" /> Мгновенно
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold mb-1 line-clamp-2 min-h-[2.5rem]">
                  {p.name}
                </h3>
                <p className="text-xs text-secondary mb-3 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex items-center gap-1 text-xs text-secondary mb-3">
                  <ShoppingBag className="w-3 h-3" />
                  Продано: {formatNumber(p.sold)}
                </div>
                <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-lg font-bold">
                    {formatPrice(p.price)}
                  </span>
                  {p.stock !== -1 && (
                    <Badge variant={p.stock > 50 ? "success" : "warning"}>
                      {p.stock > 50 ? "В наличии" : `Осталось ${p.stock}`}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
