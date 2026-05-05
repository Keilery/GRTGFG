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

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8">
      <h1 className="text-3xl font-bold mb-2">Мои заказы</h1>
      <p className="text-secondary mb-6">История покупок и продаж</p>
      <div className="space-y-3">
        {MOCK_ORDERS.map((o) => (
          <Card key={o.id} padding="md" hover>
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider">Заказ</p>
                <p className="font-mono font-semibold">#{o.id}</p>
              </div>
              <div className="flex-1 min-w-[200px]">
                <p className="font-semibold">{o.items[0].name}</p>
                <p className="text-xs text-secondary">
                  {new Date(o.createdAt).toLocaleString("ru-RU")}
                </p>
              </div>
              <Badge variant={STATUS_VARIANT[o.status]}>{o.status}</Badge>
              <Badge variant={o.paymentStatus === "PAID" ? "success" : "warning"}>
                {o.paymentStatus}
              </Badge>
              <p className="text-lg font-bold">{formatPrice(o.total)}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
