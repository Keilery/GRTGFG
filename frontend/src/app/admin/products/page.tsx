import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { Plus } from "lucide-react";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Товары магазина</h1>
        <Button leftIcon={<Plus className="w-4 h-4" />}>Добавить</Button>
      </div>
      <Card padding="none" className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06] text-xs text-secondary uppercase tracking-wider">
              <th className="text-left p-4">Товар</th>
              <th className="text-left p-4">Категория</th>
              <th className="text-left p-4">Доставка</th>
              <th className="text-right p-4">Цена</th>
              <th className="text-right p-4">Запас</th>
              <th className="text-right p-4">Продано</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PRODUCTS.map((p) => (
              <tr key={p.id} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.04]">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-ios-sm bg-white/[0.04] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-semibold">{p.name}</span>
                </td>
                <td className="p-4 text-sm">
                  <Badge variant="outline">{p.category}</Badge>
                </td>
                <td className="p-4 text-sm">
                  <Badge variant="info">{p.deliveryType}</Badge>
                </td>
                <td className="p-4 text-right font-mono">{formatPrice(p.price)}</td>
                <td className="p-4 text-right">{p.stock === -1 ? "∞" : p.stock}</td>
                <td className="p-4 text-right">{p.sold}</td>
                <td className="p-4 text-right">
                  <Button variant="secondary" size="sm">Изменить</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
