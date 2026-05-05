import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_TICKETS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Send } from "lucide-react";

export default function TicketDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const ticket = MOCK_TICKETS.find((t) => t.id === params.id);
  if (!ticket) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <Card padding="lg" className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="info">{ticket!.status}</Badge>
          <Badge variant="warning">{ticket!.priority}</Badge>
          <Badge variant="outline">{ticket!.category}</Badge>
        </div>
        <h1 className="text-2xl font-bold">{ticket!.subject}</h1>
        <p className="text-secondary text-sm mt-1">
          Создан: {new Date(ticket!.createdAt).toLocaleString("ru-RU")}
        </p>
      </Card>

      <div className="space-y-3 mb-4">
        <div className="flex gap-3">
          <Avatar src="https://avatars.githubusercontent.com/u/1?v=4" size="md" />
          <Card padding="md" className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">Вы</span>
              <span className="text-xs text-secondary">5 мая, 11:00</span>
            </div>
            <p className="text-sm">
              Купил Steam Wallet, оплата прошла, но код не пришёл. Заказ #o_3.
            </p>
          </Card>
        </div>
        <div className="flex gap-3 flex-row-reverse">
          <Avatar src="https://avatars.githubusercontent.com/u/3?v=4" size="md" />
          <Card padding="md" className="flex-1 bg-white/[0.04]">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">Поддержка · Анна</span>
              <span className="text-xs text-secondary">5 мая, 11:03</span>
            </div>
            <p className="text-sm">
              Здравствуйте! Уже проверяем заказ. Ответ будет в течение 10 минут.
            </p>
          </Card>
        </div>
      </div>

      <Card padding="md">
        <textarea
          rows={4}
          placeholder="Напишите сообщение…"
          className="w-full bg-transparent outline-none resize-none text-sm"
        />
        <div className="flex justify-end mt-3">
          <Button leftIcon={<Send className="w-4 h-4" />}>Отправить</Button>
        </div>
      </Card>
    </div>
  );
}
