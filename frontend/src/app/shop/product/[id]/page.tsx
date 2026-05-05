import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { CheckCircle2, Shield, Zap } from "lucide-react";
import { notFound } from "next/navigation";

export default function ShopProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = MOCK_PRODUCTS.find((p) => p.id === params.id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card padding="none" className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product!.images[0]} alt={product!.name} className="w-full aspect-[16/9] object-cover" />
        </Card>
        <Card padding="lg">
          <Badge variant="success" className="mb-3">✓ Официальный товар</Badge>
          <h1 className="text-3xl font-bold mb-3">{product!.name}</h1>
          <p className="text-white/80 leading-relaxed">{product!.description}</p>
          <div className="grid grid-cols-3 gap-3 mt-6 text-center">
            <Card variant="glass-subtle" padding="md">
              <p className="text-xs text-secondary">Доставка</p>
              <p className="font-semibold">
                {product!.deliveryType === "INSTANT"
                  ? "Мгновенно"
                  : product!.deliveryType === "AUTO"
                    ? "Автоматически"
                    : "Вручную"}
              </p>
            </Card>
            <Card variant="glass-subtle" padding="md">
              <p className="text-xs text-secondary">Продано</p>
              <p className="font-semibold">{product!.sold}</p>
            </Card>
            <Card variant="glass-subtle" padding="md">
              <p className="text-xs text-secondary">Гарантия</p>
              <p className="font-semibold">24 часа</p>
            </Card>
          </div>
        </Card>
      </div>
      <div className="self-start lg:sticky lg:top-20">
        <Card variant="glass-strong" padding="lg">
          <p className="text-secondary text-sm">Цена</p>
          <p className="text-4xl font-bold mb-4">{formatPrice(product!.price)}</p>
          <Button className="w-full mb-2" size="lg">Купить сейчас</Button>
          <Button variant="secondary" className="w-full">В корзину</Button>
          <ul className="text-sm space-y-2 mt-5 pt-5 border-t border-white/[0.06]">
            <li className="flex items-center gap-2 text-success">
              <Zap className="w-4 h-4" /> Мгновенная доставка
            </li>
            <li className="flex items-center gap-2 text-success">
              <Shield className="w-4 h-4" /> 100% гарантия
            </li>
            <li className="flex items-center gap-2 text-success">
              <CheckCircle2 className="w-4 h-4" /> Поддержка 24/7
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
