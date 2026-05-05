import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { MOCK_LISTINGS, MOCK_USERS } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";
import { Calendar, ShoppingBag, Star, TrendingUp } from "lucide-react";

const me = MOCK_USERS[0];

export default function ProfilePage() {
  const myListings = MOCK_LISTINGS.filter((l) => l.seller.id === me.id);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-6">
        <div className="flex flex-wrap items-center gap-6">
          <Avatar src={me.avatar} size="xl" online />
          <div className="flex-1 min-w-[200px]">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">{me.username}</h1>
              {me.verified && <Badge variant="success">✓ Verified</Badge>}
              <Badge variant="info">{me.level}</Badge>
            </div>
            <p className="text-secondary text-sm">{me.email}</p>
            <p className="text-xs text-secondary mt-1 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              На NexusMarket с {new Date(me.createdAt).toLocaleDateString("ru-RU", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </GlassPanel>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <Card padding="md" variant="glass-subtle">
          <Star className="w-5 h-5 text-warning mb-2" />
          <p className="text-secondary text-xs uppercase tracking-wider">Рейтинг</p>
          <p className="text-2xl font-bold">{me.rating}</p>
        </Card>
        <Card padding="md" variant="glass-subtle">
          <ShoppingBag className="w-5 h-5 mb-2" />
          <p className="text-secondary text-xs uppercase tracking-wider">Сделок</p>
          <p className="text-2xl font-bold">{me.salesCount}</p>
        </Card>
        <Card padding="md" variant="glass-subtle">
          <TrendingUp className="w-5 h-5 text-success mb-2" />
          <p className="text-secondary text-xs uppercase tracking-wider">Продаж в мес.</p>
          <p className="text-2xl font-bold">42</p>
        </Card>
        <Card padding="md" variant="glass-subtle">
          <p className="text-secondary text-xs uppercase tracking-wider">Баланс</p>
          <p className="text-2xl font-bold">
            {formatNumber(me.balance)} ₽
          </p>
        </Card>
      </div>

      <h2 className="text-xl font-bold mb-4">Активные объявления</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {myListings.map((l) => (
          <ProductCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}
