import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { Avatar } from "@/components/ui/Avatar";

export default function AdminModerationPage() {
  // Pretend first 3 listings are pending moderation
  const pending = MOCK_LISTINGS.slice(0, 3);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Модерация</h1>
      <p className="text-secondary mb-6">
        Очередь объявлений на проверку — {pending.length}
      </p>
      <div className="space-y-3">
        {pending.map((l) => (
          <Card key={l.id} padding="md">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-20 h-20 rounded-ios-sm bg-white/[0.04] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.images[0]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-[200px]">
                <h3 className="font-semibold">{l.title}</h3>
                <div className="flex items-center gap-2 text-xs text-secondary mt-1">
                  <Avatar src={l.seller.avatar} size="xs" />
                  <span>{l.seller.username}</span>
                  <Badge variant="outline">{l.game}</Badge>
                  <Badge variant="warning">PENDING</Badge>
                </div>
              </div>
              <div className="font-bold">{l.price.toLocaleString("ru-RU")} ₽</div>
              <div className="flex gap-2">
                <Button variant="success" size="sm">Одобрить</Button>
                <Button variant="danger" size="sm">Отклонить</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
