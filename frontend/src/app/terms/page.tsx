import { FileCheck, Scale, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";

const TERMS = [
  "Escrow удерживает оплату до подтверждения доставки или решения арбитража.",
  "Продавцы обязаны поддерживать актуальные остатки, сроки доставки и правила возврата.",
  "Запрещены внешние платежи, обман, malware, stolen accounts и обход игровых правил.",
  "Платформа может ограничивать аккаунты при подозрении на fraud, chargeback или spam.",
  "API и automation используются только с разрешёнными scopes и audit logging.",
  "Dispute SLA, partial refund и гарантия сделки применяются ко всем заказам Plan A.",
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="outline" className="mb-3">Юридическое</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Условия использования</h1>
        <p className="text-secondary mt-3 max-w-2xl">
          Демонстрационный legal center для marketplace, official shop, rental,
          automation, developer API и support workflows.
        </p>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-3">
        <Card padding="lg"><Scale className="w-7 h-7 mb-4" /><h2 className="font-bold">Арбитраж</h2><p className="text-secondary text-sm mt-2">Evidence timeline, mediator tools, refund matrix and audit trail.</p></Card>
        <Card padding="lg"><ShieldCheck className="w-7 h-7 mb-4" /><h2 className="font-bold">Гарантия</h2><p className="text-secondary text-sm mt-2">Escrow, auto-confirm timers, dispute lock and seller reserve.</p></Card>
        <Card padding="lg"><FileCheck className="w-7 h-7 mb-4" /><h2 className="font-bold">Compliance</h2><p className="text-secondary text-sm mt-2">KYC, AML flags, sanctions checks and Terms version history.</p></Card>
      </div>

      <Card padding="lg">
        <h2 className="text-xl font-bold mb-4">Ключевые правила</h2>
        <div className="space-y-3">
          {TERMS.map((term) => (
            <div key={term} className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] p-4 text-white/80">
              {term}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
