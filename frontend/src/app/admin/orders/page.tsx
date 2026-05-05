import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MOCK_ORDERS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

const STATUS_VARIANT = {
  PENDING: "warning",
  CONFIRMED: "info",
  PROCESSING: "info",
  DELIVERING: "info",
  COMPLETED: "success",
  DISPUTED: "error",
  CANCELLED: "default",
  REFUNDED: "warning",
} as const;

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Заказы</h1>
      <Card padding="none" className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06] text-xs text-secondary uppercase tracking-wider">
              <th className="text-left p-4">Заказ</th>
              <th className="text-left p-4">Покупатель → Продавец</th>
              <th className="text-left p-4">Статус</th>
              <th className="text-left p-4">Оплата</th>
              <th className="text-right p-4">Сумма</th>
              <th className="text-right p-4">Дата</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ORDERS.map((o) => (
              <tr key={o.id} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.04]">
                <td className="p-4 font-mono text-sm">#{o.id}</td>
                <td className="p-4 text-sm">
                  <span className="text-white">{o.buyerId}</span>
                  <span className="text-secondary"> → </span>
                  <span className="text-white">{o.sellerId}</span>
                </td>
                <td className="p-4">
                  <Badge variant={STATUS_VARIANT[o.status]}>{o.status}</Badge>
                </td>
                <td className="p-4">
                  <Badge variant={o.paymentStatus === "PAID" ? "success" : "warning"}>
                    {o.paymentStatus}
                  </Badge>
                </td>
                <td className="p-4 text-right font-mono">{formatPrice(o.total)}</td>
                <td className="p-4 text-right text-xs text-secondary">
                  {new Date(o.createdAt).toLocaleString("ru-RU")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
