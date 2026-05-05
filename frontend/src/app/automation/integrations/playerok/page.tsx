import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function PlayerokPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <Card variant="glass-strong" padding="lg">
        <h1 className="text-3xl font-bold mb-2">Playerok</h1>
        <p className="text-secondary mb-6">Подключение Playerok</p>
        <div className="space-y-4">
          <Input label="Email" placeholder="you@playerok" />
          <Input label="Пароль" placeholder="••••••" type="password" />
          <Input label="2FA код (если включён)" placeholder="123 456" />
          <Button>Подключить</Button>
        </div>
      </Card>
    </div>
  );
}
