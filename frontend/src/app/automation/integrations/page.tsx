import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const INTEGRATIONS = [
  {
    id: "funpay",
    name: "FunPay",
    desc: "Авто-ответы, парсинг цен, переоценка лотов",
    status: "Подключено",
    color: "success" as const,
    href: "/automation/integrations/funpay",
    icon: "🟢",
  },
  {
    id: "starvell",
    name: "Starvell",
    desc: "Синхронизация лотов, авто-доставка",
    status: "Не подключено",
    color: "default" as const,
    href: "/automation/integrations/starvell",
    icon: "⭐",
  },
  {
    id: "playerok",
    name: "Playerok",
    desc: "Импорт лотов, авто-вывод средств",
    status: "Не подключено",
    color: "default" as const,
    href: "/automation/integrations/playerok",
    icon: "🎮",
  },
  {
    id: "steam",
    name: "Steam",
    desc: "Trade-боты для скинов CS 2 / Dota 2",
    status: "Подключено",
    color: "success" as const,
    href: "#",
    icon: "🎲",
  },
  {
    id: "discord",
    name: "Discord",
    desc: "Уведомления и команды",
    status: "Подключено",
    color: "success" as const,
    href: "#",
    icon: "💬",
  },
  {
    id: "telegram",
    name: "Telegram",
    desc: "Уведомления, ChatBot для покупателей",
    status: "Не подключено",
    color: "default" as const,
    href: "#",
    icon: "✈️",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <h1 className="text-3xl font-bold mb-2">Интеграции</h1>
      <p className="text-secondary mb-8">
        Подключи свои аккаунты на других площадках одним кликом
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {INTEGRATIONS.map((i) => (
          <Card key={i.id} padding="lg" hover>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-ios-sm bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-2xl shrink-0">
                {i.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold flex items-center gap-2">
                  {i.name}
                  <Badge variant={i.color}>{i.status}</Badge>
                </h3>
                <p className="text-sm text-secondary mt-1">{i.desc}</p>
                <div className="mt-4">
                  {i.status === "Подключено" ? (
                    <Button variant="secondary" size="sm">Управлять</Button>
                  ) : (
                    <Link href={i.href}>
                      <Button size="sm">Подключить</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
