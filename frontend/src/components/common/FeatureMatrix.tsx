import Link from "next/link";
import { CheckCircle2, Code2, Radio, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import {
  PLAN_API_ENDPOINTS,
  PLAN_MODULES,
  PLAN_SECURITY_CONTROLS,
  PLAN_TOTAL_FEATURES,
  PLAN_WEBSOCKET_EVENTS,
} from "@/lib/plan-features";

const MODULE_LINKS: Record<string, string> = {
  "module-1": "/marketplace",
  "module-2": "/shop",
  "module-3": "/rental",
  "module-4": "/automation",
  "module-5": "/admin",
  "module-6": "/profile",
  "module-7": "/support",
  "module-8": "/profile/orders",
  "module-9": "/developers",
  "module-10": "/notifications",
  "module-11": "/security",
  "module-12": "/features#ux-ui",
};

export function FeatureMatrix() {
  return (
    <div className="space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="success" className="mb-4">
          Plan A · 552 функции
        </Badge>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Полная карта реализации NexusMarket
            </h1>
            <p className="text-secondary mt-4 max-w-2xl">
              Все функции из Plan A вынесены в навигационную матрицу: 12 модулей,
              552 пункта, ключевые REST endpoints, WebSocket-события и контуры
              безопасности. Production-интеграции представлены mock-first UI и API
              контрактами, готовыми к подключению реальных провайдеров.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Card variant="glass-strong" padding="md">
              <p className="text-4xl font-bold">{PLAN_TOTAL_FEATURES}</p>
              <p className="text-secondary text-xs uppercase tracking-wider">
                функций
              </p>
            </Card>
            <Card variant="glass-strong" padding="md">
              <p className="text-4xl font-bold">{PLAN_MODULES.length}</p>
              <p className="text-secondary text-xs uppercase tracking-wider">
                модулей
              </p>
            </Card>
            <Card variant="glass-strong" padding="md">
              <p className="text-4xl font-bold">{PLAN_API_ENDPOINTS.length}</p>
              <p className="text-secondary text-xs uppercase tracking-wider">
                endpoints
              </p>
            </Card>
            <Card variant="glass-strong" padding="md">
              <p className="text-4xl font-bold">
                {PLAN_WEBSOCKET_EVENTS.client.length +
                  PLAN_WEBSOCKET_EVENTS.server.length}
              </p>
              <p className="text-secondary text-xs uppercase tracking-wider">
                WS событий
              </p>
            </Card>
          </div>
        </div>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PLAN_MODULES.map((module) => (
          <Card
            key={module.id}
            id={module.id === "module-12" ? "ux-ui" : undefined}
            padding="lg"
            hover
            className="flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge variant="outline">Модуль {module.number}</Badge>
                <h2 className="text-xl font-bold mt-3">{module.title}</h2>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{module.features.length}</p>
                <p className="text-secondary text-xs">функций</p>
              </div>
            </div>

            <div className="mt-5 max-h-72 space-y-2 overflow-y-auto pr-1">
              {module.features.map((feature) => (
                <div key={feature.id} className="flex gap-2 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>
                    <span className="text-secondary">#{feature.id}</span>{" "}
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <Link href={MODULE_LINKS[module.id] ?? "/features"} className="mt-6">
              <Button variant="secondary" size="sm" className="w-full">
                Открыть модуль
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card padding="lg" className="lg:col-span-2">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5" /> REST API из плана
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {PLAN_API_ENDPOINTS.map((endpoint) => (
              <div
                key={`${endpoint.method}-${endpoint.path}`}
                className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] p-3"
              >
                <div className="flex items-center gap-2 text-xs">
                  <Badge variant="info">{endpoint.method}</Badge>
                  <span className="text-secondary">{endpoint.group}</span>
                </div>
                <p className="mt-2 font-mono text-sm text-white/90">{endpoint.path}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Radio className="w-5 h-5" /> WebSocket
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">
                Клиент → Сервер
              </p>
              <div className="flex flex-wrap gap-2">
                {PLAN_WEBSOCKET_EVENTS.client.map((event) => (
                  <Badge key={event} variant="outline">
                    {event}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-secondary text-xs uppercase tracking-wider mb-2">
                Сервер → Клиент
              </p>
              <div className="flex flex-wrap gap-2">
                {PLAN_WEBSOCKET_EVENTS.server.map((event) => (
                  <Badge key={event} variant="outline">
                    {event}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card padding="lg">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5" /> Безопасность
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PLAN_SECURITY_CONTROLS.map((control) => (
            <div
              key={control}
              className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white/80"
            >
              {control}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
