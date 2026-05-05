import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Bot, Plug, Code2, Zap, Activity } from "lucide-react";
import { MOCK_BOTS } from "@/lib/mock-data";

export default function AutomationPage() {
  const running = MOCK_BOTS.filter((b) => b.status === "RUNNING").length;
  const totalSales = MOCK_BOTS.reduce((s, b) => s + b.salesCount, 0);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-6">
        <Badge variant="info" className="mb-3">Автоматизация</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Продавай 24/7 пока ты спишь
        </h1>
        <p className="text-secondary max-w-xl">
          Подключи FunPay, Steam, Playerok и Starvell. Авто-ответы, авто-доставка,
          парсинг цен и аналитика — всё из одной панели.
        </p>
      </GlassPanel>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <Card variant="glass" padding="md">
          <Activity className="w-5 h-5 text-success mb-2" />
          <p className="text-secondary text-xs uppercase tracking-wider">Активные боты</p>
          <p className="text-3xl font-bold">{running} / {MOCK_BOTS.length}</p>
        </Card>
        <Card variant="glass" padding="md">
          <Zap className="w-5 h-5 text-warning mb-2" />
          <p className="text-secondary text-xs uppercase tracking-wider">Продаж сегодня</p>
          <p className="text-3xl font-bold">{totalSales}</p>
        </Card>
        <Card variant="glass" padding="md">
          <Bot className="w-5 h-5 mb-2" />
          <p className="text-secondary text-xs uppercase tracking-wider">Сообщений обработано</p>
          <p className="text-3xl font-bold">
            {MOCK_BOTS.reduce((s, b) => s + b.messagesProcessed, 0).toLocaleString("ru-RU")}
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Link href="/automation/bots">
          <Card variant="glass" padding="lg" hover>
            <Bot className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Боты</h3>
            <p className="text-secondary text-sm">
              Управление активными ботами, мониторинг, логи
            </p>
            <Button variant="secondary" size="sm" className="mt-4">Открыть →</Button>
          </Card>
        </Link>
        <Link href="/automation/integrations">
          <Card variant="glass" padding="lg" hover>
            <Plug className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Интеграции</h3>
            <p className="text-secondary text-sm">
              FunPay, Starvell, Playerok — подключи в один клик
            </p>
            <Button variant="secondary" size="sm" className="mt-4">Открыть →</Button>
          </Card>
        </Link>
        <Link href="/automation/scripts">
          <Card variant="glass" padding="lg" hover>
            <Code2 className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Скрипты</h3>
            <p className="text-secondary text-sm">
              Настрой собственные сценарии автоматизации
            </p>
            <Button variant="secondary" size="sm" className="mt-4">Открыть →</Button>
          </Card>
        </Link>
      </div>
    </div>
  );
}
