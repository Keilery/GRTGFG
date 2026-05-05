import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const LOGS = [
  { ts: "10:42:18", level: "INFO", source: "auth", text: "User u_1 logged in from 192.168.1.10" },
  { ts: "10:42:01", level: "INFO", source: "order", text: "Order o_1 marked COMPLETED" },
  { ts: "10:41:55", level: "WARN", source: "rate-limit", text: "5 req/sec exceeded by IP 5.61.x.x" },
  { ts: "10:40:11", level: "INFO", source: "bot.funpay", text: "Auto-reply sent to FunPay chat #842" },
  { ts: "10:39:00", level: "ERROR", source: "payment", text: "Stripe webhook: payment_intent.failed evt_xxxxx" },
  { ts: "10:38:02", level: "INFO", source: "moderation", text: "Listing l_1 approved by Admin" },
  { ts: "10:35:00", level: "DEBUG", source: "redis", text: "Cache miss: products:trending (TTL=300s)" },
  { ts: "10:32:21", level: "INFO", source: "search", text: "Index rebuild completed in 2.3s (124k docs)" },
];

const VARIANTS = {
  INFO: "info",
  WARN: "warning",
  ERROR: "error",
  DEBUG: "default",
} as const;

export default function AdminLogsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Логи</h1>
      <Card padding="md" className="font-mono text-xs">
        {LOGS.map((l, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-1.5 border-b border-white/[0.04] last:border-0"
          >
            <span className="text-secondary w-20 shrink-0">{l.ts}</span>
            <Badge variant={VARIANTS[l.level as keyof typeof VARIANTS]}>{l.level}</Badge>
            <span className="text-blue-400 w-32 shrink-0">{l.source}</span>
            <span className="text-white/80 flex-1">{l.text}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
