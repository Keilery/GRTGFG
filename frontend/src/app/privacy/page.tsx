import { Database, EyeOff, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";

const PRIVACY = [
  { icon: Database, title: "Данные", text: "Профиль, KYC status, заказы, кошелёк, сообщения, device sessions and audit events." },
  { icon: LockKeyhole, title: "Защита", text: "AES-256, secure cookies, scoped tokens, secret vault and encrypted provider credentials." },
  { icon: EyeOff, title: "Контроль", text: "Export, delete, consent settings, notification preferences and ad personalization opt-out." },
  { icon: KeyRound, title: "Доступ", text: "OAuth apps, API keys, scopes, webhook signing and session revocation." },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="success" className="mb-3">Privacy center</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Политика конфиденциальности</h1>
        <p className="text-secondary mt-3 max-w-2xl">
          Privacy dashboard покрывает GDPR-style exports, cookies, device logs,
          provider credentials, notification consent and security alerts.
        </p>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {PRIVACY.map(({ icon: Icon, title, text }) => (
          <Card key={title} padding="lg" hover>
            <Icon className="w-7 h-7 mb-4" />
            <h2 className="font-bold">{title}</h2>
            <p className="text-secondary text-sm mt-2">{text}</p>
          </Card>
        ))}
      </div>

      <Card id="cookies" padding="lg">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><ShieldCheck className="w-5 h-5" /> Cookies</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Strictly necessary", "Analytics", "Marketing"].map((item) => (
            <div key={item} className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="font-semibold">{item}</p>
              <p className="text-secondary text-sm mt-2">Consent state, retention period and vendor list controls.</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
