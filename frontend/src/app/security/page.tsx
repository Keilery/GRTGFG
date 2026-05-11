import { Fingerprint, KeyRound, LockKeyhole, Radar, ShieldCheck, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PLAN_SECURITY_CONTROLS } from "@/lib/plan-features";

const SECURITY_STACK = [
  { icon: KeyRound, title: "JWT + refresh rotation", text: "Access tokens, secure cookies, trusted devices and forced logout." },
  { icon: Smartphone, title: "2FA / OAuth2", text: "TOTP, SMS and Google, Discord, Steam, VK account linking." },
  { icon: Radar, title: "Anti-fraud", text: "Rate limits, brute-force protection, geo checks, autoban and KYC." },
  { icon: Fingerprint, title: "Device intelligence", text: "Device fingerprinting, new device alerts and IP whitelist rules." },
  { icon: LockKeyhole, title: "Data protection", text: "AES-256 at-rest encryption, HSTS, CSP, CSRF and XSS hardening." },
  { icon: ShieldCheck, title: "Audit trail", text: "Security logs, admin action audit, malware scan hooks and reports." },
];

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="success" className="mb-3">Безопасность</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Security command center</h1>
        <p className="text-secondary mt-3 max-w-2xl">
          Все защитные механики из Plan A отображены как операционная панель:
          токены, 2FA, антифрод, KYC, CSP, HSTS, Turnstile, audit logs и sandbox.
        </p>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {SECURITY_STACK.map(({ icon: Icon, title, text }) => (
          <Card key={title} padding="lg" hover>
            <Icon className="w-7 h-7 mb-4" />
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-secondary text-sm mt-2">{text}</p>
          </Card>
        ))}
      </div>

      <Card padding="lg">
        <h2 className="text-xl font-bold mb-4">Контрольный список Plan A</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PLAN_SECURITY_CONTROLS.map((control) => (
            <div key={control} className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] p-3 text-sm text-white/80">
              {control}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
