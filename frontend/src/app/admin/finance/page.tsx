import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_TRANSACTIONS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

const FIN_STATS = [
  { label: "Оборот за месяц", value: "8 421 540 ₽" },
  { label: "Комиссии", value: "421 077 ₽" },
  { label: "Заявок на вывод", value: "12" },
  { label: "Балансы пользователей", value: "1.2M ₽" },
];

const TYPE_VARIANT = {
  DEPOSIT: "success",
  SALE: "success",
  BONUS: "success",
  REFERRAL: "success",
  WITHDRAWAL: "warning",
  PURCHASE: "info",
  REFUND: "default",
  FEE: "default",
} as const;

export default function AdminFinancePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Финансы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {FIN_STATS.map((s) => (
          <Card key={s.label} padding="lg">
            <p className="text-secondary text-xs uppercase tracking-wider mb-1">
              {s.label}
            </p>
            <p className="text-2xl font-bold">{s.value}</p>
          </Card>
        ))}
      </div>
      <Card padding="lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Последние транзакции</h2>
          <Button variant="secondary" size="sm">Экспорт</Button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06] text-xs text-secondary uppercase tracking-wider">
              <th className="text-left py-3">ID</th>
              <th className="text-left py-3">Тип</th>
              <th className="text-left py-3">Описание</th>
              <th className="text-right py-3">Сумма</th>
              <th className="text-right py-3">Баланс</th>
              <th className="text-right py-3">Дата</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TRANSACTIONS.map((t) => (
              <tr key={t.id} className="border-b border-white/[0.04] last:border-0">
                <td className="py-3 font-mono text-sm">{t.id}</td>
                <td className="py-3">
                  <Badge variant={TYPE_VARIANT[t.type]}>{t.type}</Badge>
                </td>
                <td className="py-3 text-sm">{t.description}</td>
                <td className={`py-3 text-right font-mono ${t.amount > 0 ? "text-success" : ""}`}>
                  {t.amount > 0 ? "+" : ""}
                  {formatPrice(t.amount)}
                </td>
                <td className="py-3 text-right font-mono">{formatPrice(t.balance)}</td>
                <td className="py-3 text-right text-xs text-secondary">
                  {new Date(t.createdAt).toLocaleString("ru-RU")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
