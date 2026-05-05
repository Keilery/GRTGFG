import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_TICKETS } from "@/lib/mock-data";
import { Plus } from "lucide-react";

const STATUS = {
  OPEN: "info",
  PENDING: "warning",
  RESOLVED: "success",
  CLOSED: "default",
} as const;

const PRIORITY = {
  LOW: "default",
  MEDIUM: "info",
  HIGH: "warning",
  URGENT: "error",
} as const;

export default function TicketsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Тикеты</h1>
          <p className="text-secondary">Все ваши обращения</p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>Новый тикет</Button>
      </div>
      <div className="space-y-3">
        {MOCK_TICKETS.map((t) => (
          <Link key={t.id} href={`/support/ticket/${t.id}`}>
            <Card padding="md" hover>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={STATUS[t.status]}>{t.status}</Badge>
                <Badge variant={PRIORITY[t.priority]}>{t.priority}</Badge>
                <h3 className="font-semibold flex-1 min-w-[200px]">{t.subject}</h3>
                <span className="text-xs text-secondary">
                  {t.messages} сообщ. · {t.category}
                </span>
                <span className="text-xs text-secondary">
                  {new Date(t.createdAt).toLocaleDateString("ru-RU")}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
