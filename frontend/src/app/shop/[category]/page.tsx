import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export default function ShopCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const filtered = MOCK_PRODUCTS.filter(
    (p) => p.category.toLowerCase() === params.category.toLowerCase(),
  );
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel className="px-6 sm:px-10 py-8 mb-6">
        <h1 className="text-3xl font-bold capitalize">{params.category}</h1>
        <p className="text-secondary">
          {filtered.length} товаров в категории
        </p>
      </GlassPanel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <Link key={p.id} href={`/shop/product/${p.id}`}>
            <Card variant="glass" padding="none" hover className="overflow-hidden">
              <div className="aspect-[4/3] bg-white/[0.04] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                <Badge variant="success" className="absolute top-3 left-3">✓ Офиц.</Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{p.name}</h3>
                <p className="text-lg font-bold">{formatPrice(p.price)}</p>
              </div>
            </Card>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-secondary py-12">
            Товаров не найдено.
          </p>
        )}
      </div>
    </div>
  );
}
