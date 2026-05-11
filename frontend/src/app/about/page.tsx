import { Bot, Gamepad2, ShieldCheck, Store } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PLAN_TOTAL_FEATURES } from "@/lib/plan-features";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="info" className="mb-3">About</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">NexusMarket</h1>
        <p className="text-secondary mt-3 max-w-2xl">
          Игровая коммерция в одном продукте: marketplace, official shop, rental,
          automation, escrow, support, developer API and security center with {PLAN_TOTAL_FEATURES} Plan A features.
        </p>
      </GlassPanel>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[{ icon: Store, title: "Marketplace" }, { icon: Gamepad2, title: "Rental" }, { icon: Bot, title: "Automation" }, { icon: ShieldCheck, title: "Escrow" }].map(({ icon: Icon, title }) => (
          <Card key={title} padding="lg" hover><Icon className="w-7 h-7 mb-4" /><h2 className="font-bold">{title}</h2><p className="text-secondary text-sm mt-2">Mock-first production blueprint ready for real integrations.</p></Card>
        ))}
      </div>
    </div>
  );
}
