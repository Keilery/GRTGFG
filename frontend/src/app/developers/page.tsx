import { Code2, KeyRound, Layers3, RotateCcw, ShieldCheck, Webhook } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PLAN_API_ENDPOINTS, PLAN_WEBSOCKET_EVENTS } from "@/lib/plan-features";

const SDK_CARDS = [
  { title: "REST API v1", text: "Cursor pagination, filters, sorting, idempotency keys and standard error codes." },
  { title: "GraphQL", text: "Single endpoint for dashboard widgets, storefront queries and partner apps." },
  { title: "JavaScript SDK", text: "Typed helpers for auth, listings, orders, webhooks and sandbox data." },
  { title: "Python SDK", text: "Server automation package for repricing, exports and bot orchestration." },
  { title: "OAuth2 apps", text: "Third-party app store with scopes, consent screens and deprecation warnings." },
  { title: "Sandbox", text: "Safe testing workspace with mock payments, webhook replay and sample payloads." },
];

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="info" className="mb-3">API и разработчики</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Developer center</h1>
        <p className="text-secondary mt-3 max-w-2xl">
          REST, GraphQL, WebSocket, webhooks, SDK, OAuth2 и sandbox из Plan A
          собраны в единую витрину контрактов для партнёров NexusMarket.
        </p>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {SDK_CARDS.map((card) => (
          <Card key={card.title} padding="lg" hover>
            <Code2 className="w-7 h-7 mb-4" />
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-secondary text-sm mt-2">{card.text}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Card padding="lg">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Layers3 className="w-5 h-5" /> Endpoint map
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {PLAN_API_ENDPOINTS.map((endpoint) => (
              <div key={`${endpoint.method}-${endpoint.path}`} className="rounded-ios-sm bg-white/[0.03] border border-white/[0.08] p-3">
                <Badge variant="outline">{endpoint.method}</Badge>
                <p className="font-mono text-sm mt-2">{endpoint.path}</p>
                <p className="text-secondary text-xs mt-1">{endpoint.group}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Webhook className="w-5 h-5" /> Realtime & webhooks
          </h2>
          <div className="space-y-4 text-sm text-white/80">
            <div className="rounded-ios-sm bg-white/[0.03] border border-white/[0.08] p-3">
              <KeyRound className="w-4 h-4 mb-2" /> API keys with scopes, HMAC signing and usage dashboard.
            </div>
            <div className="rounded-ios-sm bg-white/[0.03] border border-white/[0.08] p-3">
              <RotateCcw className="w-4 h-4 mb-2" /> Webhook retry logic with replay, batch operations and idempotency.
            </div>
            <div className="rounded-ios-sm bg-white/[0.03] border border-white/[0.08] p-3">
              <ShieldCheck className="w-4 h-4 mb-2" /> CORS, versioning, metrics and health checks ready for monitoring.
            </div>
            <div className="flex flex-wrap gap-2">
              {[...PLAN_WEBSOCKET_EVENTS.client, ...PLAN_WEBSOCKET_EVENTS.server].map((event) => (
                <Badge key={event} variant="info">{event}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
