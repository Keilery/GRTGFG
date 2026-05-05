import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function StarvellPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <Card variant="glass-strong" padding="lg">
        <h1 className="text-3xl font-bold mb-2">Starvell</h1>
        <p className="text-secondary mb-6">Подключение API Starvell</p>
        <div className="space-y-4">
          <Input label="API Token" placeholder="sv_xxxxxxxxxxxxx" />
          <Input label="Secret Key" placeholder="••••••••" type="password" />
          <Button>Подключить</Button>
        </div>
      </Card>
    </div>
  );
}
