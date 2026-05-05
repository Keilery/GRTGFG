import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MOCK_LISTINGS, MOCK_REVIEWS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { CheckCircle2, Clock, MessageSquare, Shield, Star } from "lucide-react";
import { notFound } from "next/navigation";

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = MOCK_LISTINGS.find((l) => l.id === params.id);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card variant="glass" padding="none" className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item!.images[0]}
            alt={item!.title}
            className="w-full aspect-[16/10] object-cover"
          />
        </Card>

        <Card padding="lg">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="info">{item!.game}</Badge>
            <Badge variant="outline">{item!.category}</Badge>
            {item!.isHot && <Badge variant="hot">🔥 Hot</Badge>}
          </div>
          <h1 className="text-3xl font-bold mb-3">{item!.title}</h1>
          <div className="flex items-center gap-4 text-sm text-secondary">
            <span className="inline-flex items-center gap-1">
              <Star className="w-4 h-4 text-warning fill-warning" />
              <span className="text-white">{item!.rating}</span>
              <span>({item!.reviews} отзывов)</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" /> {item!.deliveryTime}
            </span>
          </div>

          <div className="mt-6 prose prose-invert max-w-none text-sm text-white/80 leading-relaxed">
            <p>
              Профессиональная сделка от верифицированного продавца. Гарантия
              качества, безопасная доставка через систему эскроу. После оплаты
              продавец получает уведомление и связывается с вами в течение 5
              минут.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-4">
              <li>Доставка: {item!.deliveryTime}</li>
              <li>Способ передачи: trade / mail</li>
              <li>Регион: EU/RU/CIS</li>
              <li>Гарантия: 24 часа после получения</li>
            </ul>
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-xl font-bold mb-4">
            Отзывы ({MOCK_REVIEWS.length})
          </h2>
          <div className="space-y-4">
            {MOCK_REVIEWS.map((r) => (
              <div
                key={r.id}
                className="flex gap-3 pb-4 border-b border-white/[0.06] last:border-0"
              >
                <Avatar src={r.avatar} size="md" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{r.authorName}</span>
                    <span className="text-xs text-secondary">
                      {new Date(r.createdAt).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                  <div className="flex gap-0.5 my-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < r.rating ? "text-warning fill-warning" : "text-white/15"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-4 lg:sticky lg:top-20 self-start">
        <Card variant="glass-strong" padding="lg">
          <p className="text-secondary text-sm">Цена</p>
          <p className="text-4xl font-bold mb-4">{formatPrice(item!.price)}</p>
          <Button className="w-full mb-2" size="lg">
            Купить сейчас
          </Button>
          <Button variant="secondary" className="w-full" leftIcon={<MessageSquare className="w-4 h-4" />}>
            Написать продавцу
          </Button>
          <ul className="text-sm space-y-2 mt-5 pt-5 border-t border-white/[0.06]">
            <li className="flex items-center gap-2 text-success">
              <Shield className="w-4 h-4" /> Гарантия сделки
            </li>
            <li className="flex items-center gap-2 text-success">
              <CheckCircle2 className="w-4 h-4" /> Безопасная оплата
            </li>
            <li className="flex items-center gap-2 text-success">
              <Clock className="w-4 h-4" /> Быстрая доставка
            </li>
          </ul>
        </Card>

        <Card padding="lg">
          <p className="text-xs text-secondary uppercase tracking-wider mb-3">
            Продавец
          </p>
          <div className="flex gap-3 items-center">
            <Avatar src={item!.seller.avatar} size="lg" online />
            <div>
              <p className="font-semibold">{item!.seller.username}</p>
              <p className="text-xs text-secondary">
                {item!.seller.salesCount} сделок · {item!.seller.level}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="bg-white/[0.04] rounded-ios-sm p-2">
              <p className="font-bold">{item!.seller.rating}</p>
              <p className="text-[10px] text-secondary uppercase">Рейтинг</p>
            </div>
            <div className="bg-white/[0.04] rounded-ios-sm p-2">
              <p className="font-bold">99%</p>
              <p className="text-[10px] text-secondary uppercase">Успех</p>
            </div>
            <div className="bg-white/[0.04] rounded-ios-sm p-2">
              <p className="font-bold">2 г.</p>
              <p className="text-[10px] text-secondary uppercase">На сайте</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
