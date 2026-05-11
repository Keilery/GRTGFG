import { Gift, Link2, LineChart, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";

const FEATURES = [
  { icon: Link2, title: "Referral links", text: "UTM builder, deeplinks, promo codes and fraud-resistant attribution." },
  { icon: Users, title: "Partner tiers", text: "Bronze to platinum commissions with seller and streamer programs." },
  { icon: Gift, title: "Rewards", text: "Cashback, gift certificates, seasonal campaigns and friend invites." },
  { icon: LineChart, title: "Analytics", text: "Clicks, conversion, GMV, payouts, hold periods and cohort dashboards." },
];

export default function AffiliatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="info" className="mb-3">Growth</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Партнёрская программа</h1>
        <p className="text-secondary mt-3 max-w-2xl">Referral marketplace, loyalty levels, creator storefronts and payout controls.</p>
      </GlassPanel>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <Card key={title} padding="lg" hover><Icon className="w-7 h-7 mb-4" /><h2 className="font-bold">{title}</h2><p className="text-secondary text-sm mt-2">{text}</p></Card>
        ))}
      </div>
    </div>
  );
}
