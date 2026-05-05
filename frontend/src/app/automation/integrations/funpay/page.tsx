import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function FunPayIntegrationPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <Card variant="glass-strong" padding="lg">
        <Badge variant="success" className="mb-3">Подключено</Badge>
        <h1 className="text-3xl font-bold mb-2">FunPay</h1>
        <p className="text-secondary mb-6">Настройка автоматизации FunPay</p>
        <div className="space-y-4">
          <Input label="golden_key (Cookie)" placeholder="••••••••••••••••" type="password" defaultValue="****" />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Минимальная цена" type="number" defaultValue={50} />
            <Input label="Шаг переоценки" type="number" defaultValue={5} />
          </div>
          <label className="flex items-center justify-between p-4 bg-white/[0.04] rounded-ios-sm border border-white/[0.08]">
            <div>
              <p className="font-semibold text-sm">Авто-ответ</p>
              <p className="text-xs text-secondary">Отвечать на новые сообщения</p>
            </div>
            <input type="checkbox" defaultChecked className="accent-white scale-125" />
          </label>
          <label className="flex items-center justify-between p-4 bg-white/[0.04] rounded-ios-sm border border-white/[0.08]">
            <div>
              <p className="font-semibold text-sm">Авто-доставка</p>
              <p className="text-xs text-secondary">Отправлять товар после оплаты</p>
            </div>
            <input type="checkbox" defaultChecked className="accent-white scale-125" />
          </label>
          <label className="flex items-center justify-between p-4 bg-white/[0.04] rounded-ios-sm border border-white/[0.08]">
            <div>
              <p className="font-semibold text-sm">Авто-переоценка</p>
              <p className="text-xs text-secondary">Подстраивать цены под топ-1</p>
            </div>
            <input type="checkbox" className="accent-white scale-125" />
          </label>
          <div className="flex gap-2 pt-3">
            <Button>Сохранить</Button>
            <Button variant="secondary">Отключить</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
