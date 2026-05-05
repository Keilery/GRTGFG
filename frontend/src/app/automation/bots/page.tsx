"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MOCK_BOTS } from "@/lib/mock-data";
import { Pause, Play, Settings, Trash2, Plus } from "lucide-react";

const STATUS_VARIANT = {
  RUNNING: "success",
  PAUSED: "warning",
  STOPPED: "default",
  ERROR: "error",
} as const;

export default function BotsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Боты</h1>
          <p className="text-secondary">Активные процессы автоматизации</p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>Новый бот</Button>
      </div>

      <div className="space-y-3">
        {MOCK_BOTS.map((b) => (
          <Card key={b.id} padding="md">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-12 h-12 rounded-ios-sm bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-xl">
                🤖
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{b.name}</h3>
                  <Badge variant={STATUS_VARIANT[b.status]}>{b.status}</Badge>
                  <Badge variant="outline">{b.type}</Badge>
                </div>
                <p className="text-xs text-secondary mt-1">
                  Обработано: {b.messagesProcessed.toLocaleString("ru-RU")} сообщений · {b.salesCount} продаж · аптайм {(b.uptime / 3600).toFixed(1)} ч
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" leftIcon={b.status === "RUNNING" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}>
                  {b.status === "RUNNING" ? "Пауза" : "Запуск"}
                </Button>
                <Button variant="secondary" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="w-4 h-4 text-error" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
