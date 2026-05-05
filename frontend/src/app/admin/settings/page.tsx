import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const SECTIONS = [
  {
    title: "Платформа",
    fields: [
      { label: "Название сайта", defaultValue: "NexusMarket" },
      { label: "Поддержка email", defaultValue: "support@nexusmarket.local" },
      { label: "Telegram канал", defaultValue: "@nexusmarket" },
    ],
  },
  {
    title: "Финансы",
    fields: [
      { label: "Комиссия продавца, %", defaultValue: "5" },
      { label: "Минимальная сумма вывода, ₽", defaultValue: "100" },
      { label: "Комиссия вывода, %", defaultValue: "1" },
    ],
  },
  {
    title: "Модерация",
    fields: [
      { label: "Минимальный рейтинг для авто-публикации", defaultValue: "4.5" },
      { label: "Срок жизни объявления, дней", defaultValue: "30" },
    ],
  },
];

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Настройки сайта</h1>
      <p className="text-secondary mb-6">Глобальные параметры платформы</p>
      <div className="space-y-4">
        {SECTIONS.map((s) => (
          <Card key={s.title} padding="lg">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {s.fields.map((f) => (
                <Input key={f.label} {...f} />
              ))}
            </div>
            <Button className="mt-5">Сохранить</Button>
          </Card>
        ))}
        <Card padding="lg">
          <h2 className="text-xl font-bold mb-4">Режим обслуживания</h2>
          <p className="text-secondary text-sm mb-3">
            Включает заглушку и временно блокирует все действия пользователей.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary">Включить maintenance</Button>
            <Button variant="ghost">Очистить кэш</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
