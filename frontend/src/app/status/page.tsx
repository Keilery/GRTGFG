import { Activity, Bot, CheckCircle2, Database, Server } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";

const SERVICES = [
  { icon: Server, name: "Marketplace API", status: "operational", uptime: "99.98%" },
  { icon: Database, name: "PostgreSQL / Prisma", status: "operational", uptime: "99.99%" },
  { icon: Bot, name: "Automation workers", status: "degraded", uptime: "99.72%" },
  { icon: Activity, name: "WebSocket gateway", status: "operational", uptime: "99.95%" },
];

export default function StatusPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="success" className="mb-3"><CheckCircle2 className="w-3 h-3" /> Live status</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Статус платформы</h1>
        <p className="text-secondary mt-3 max-w-2xl">SLA, incidents, uptime, maintenance windows and realtime service health.</p>
      </GlassPanel>
      <div className="grid gap-4 md:grid-cols-2">
        {SERVICES.map(({ icon: Icon, name, status, uptime }) => (
          <Card key={name} padding="lg" hover>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3"><Icon className="w-6 h-6" /><h2 className="font-bold">{name}</h2></div>
              <Badge variant={status === "operational" ? "success" : "warning"}>{status}</Badge>
            </div>
            <p className="text-secondary text-sm mt-4">Uptime 30d: {uptime}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
