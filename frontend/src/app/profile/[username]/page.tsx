import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { MOCK_LISTINGS, MOCK_USERS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

export default function PublicProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const user = MOCK_USERS.find(
    (u) => u.username.toLowerCase() === params.username.toLowerCase(),
  );
  if (!user) notFound();

  const listings = MOCK_LISTINGS.filter((l) => l.seller.id === user!.id);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-6">
        <div className="flex flex-wrap items-center gap-6">
          <Avatar src={user!.avatar} size="xl" online />
          <div className="flex-1 min-w-[200px]">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold">{user!.username}</h1>
              {user!.verified && <Badge variant="success">✓</Badge>}
              <Badge variant="info">{user!.level}</Badge>
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-warning fill-warning" />
                {user!.rating}
              </span>
              <span>{user!.salesCount} сделок</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button>Написать</Button>
            <Button variant="secondary">В избранное</Button>
          </div>
        </div>
      </GlassPanel>

      <h2 className="text-xl font-bold mb-4">Активные лоты ({listings.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {listings.map((l) => (
          <ProductCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}
