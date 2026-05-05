"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Code2, Plus } from "lucide-react";

const SCRIPTS = [
  {
    id: "s_1",
    name: "Авто-обновление цен WoW Gold",
    trigger: "каждые 30 минут",
    runs: 1248,
    status: "ACTIVE",
  },
  {
    id: "s_2",
    name: "Уведомление в TG о крупных продажах",
    trigger: "при сумме > 10 000 ₽",
    runs: 32,
    status: "ACTIVE",
  },
  {
    id: "s_3",
    name: "Парсинг конкурентов CS2 Skins",
    trigger: "каждые 2 часа",
    runs: 184,
    status: "PAUSED",
  },
];

export default function ScriptsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Скрипты</h1>
          <p className="text-secondary">Кастомные сценарии автоматизации</p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>Новый скрипт</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {SCRIPTS.map((s) => (
          <Card key={s.id} padding="lg" hover>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-ios-sm bg-white/[0.06] flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-xs text-secondary">{s.trigger}</p>
                </div>
              </div>
              <Badge variant={s.status === "ACTIVE" ? "success" : "warning"}>
                {s.status}
              </Badge>
            </div>
            <p className="text-xs text-secondary">
              Запусков: <span className="text-white">{s.runs}</span>
            </p>
            <div className="flex gap-2 mt-3">
              <Button variant="secondary" size="sm">Редактировать</Button>
              <Button variant="ghost" size="sm">
                {s.status === "ACTIVE" ? "Пауза" : "Запуск"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
