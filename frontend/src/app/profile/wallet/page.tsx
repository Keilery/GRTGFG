import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_TRANSACTIONS, MOCK_USERS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { ArrowDownToLine, ArrowUpFromLine, Plus } from "lucide-react";

const me = MOCK_USERS[0];

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

export default function WalletPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-6">
        <p className="text-secondary text-sm mb-2">Баланс</p>
        <p className="text-5xl font-bold mb-6">{formatPrice(me.balance)}</p>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<Plus className="w-4 h-4" />}>Пополнить</Button>
          <Button variant="secondary" leftIcon={<ArrowUpFromLine className="w-4 h-4" />}>
            Вывести
          </Button>
        </div>
      </GlassPanel>

      <Card padding="lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Транзакции</h2>
          <Button variant="secondary" size="sm">Экспорт CSV</Button>
        </div>
        <div className="space-y-2">
          {MOCK_TRANSACTIONS.map((t) => {
            const isIncome = t.amount > 0;
            return (
              <div
                key={t.id}
                className="flex items-center gap-3 p-3 rounded-ios-sm hover:bg-white/[0.04] transition"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    isIncome ? "bg-success/15 text-success" : "bg-white/10"
                  }`}
                >
                  {isIncome ? (
                    <ArrowDownToLine className="w-4 h-4" />
                  ) : (
                    <ArrowUpFromLine className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{t.description}</p>
                  <p className="text-xs text-secondary">
                    {new Date(t.createdAt).toLocaleString("ru-RU")}
                  </p>
                </div>
                <Badge variant={TYPE_VARIANT[t.type]}>{t.type}</Badge>
                <p
                  className={`font-bold ${
                    isIncome ? "text-success" : "text-white"
                  }`}
                >
                  {isIncome ? "+" : ""}
                  {formatPrice(t.amount)}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
