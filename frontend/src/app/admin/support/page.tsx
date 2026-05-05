import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_TICKETS } from "@/lib/mock-data";

export default function AdminSupportPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Тикеты поддержки</h1>
      <p className="text-secondary mb-6">Очередь обращений</p>
      <div className="space-y-3">
        {MOCK_TICKETS.map((t) => (
          <Card key={t.id} padding="md">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={t.status === "OPEN" ? "info" : t.status === "PENDING" ? "warning" : "success"}>
                {t.status}
              </Badge>
              <Badge variant={t.priority === "HIGH" ? "warning" : "default"}>
                {t.priority}
              </Badge>
              <h3 className="font-semibold flex-1 min-w-[200px]">{t.subject}</h3>
              <span className="text-xs text-secondary">{t.category}</span>
              <Button variant="secondary" size="sm">Назначить</Button>
              <Button size="sm">Ответить</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
