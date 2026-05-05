import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";
import type { Listing } from "@/types";
import { Star, Clock } from "lucide-react";

export function ProductCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/marketplace/item/${listing.id}`}>
      <Card variant="glass" padding="none" hover className="h-full flex flex-col">
        <div className="relative aspect-[4/3] bg-white/[0.04] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-1.5">
            {listing.isHot && <Badge variant="hot">🔥 Hot</Badge>}
            <Badge variant="outline" className="bg-black/50 backdrop-blur-md">
              {listing.game}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge variant="default" className="bg-black/60 backdrop-blur-md">
              <Clock className="w-3 h-3" /> {listing.deliveryTime}
            </Badge>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3 flex-1">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2 min-h-[2.6rem]">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-secondary">
            <Star className="w-3 h-3 text-warning fill-warning" />
            <span className="text-white">{listing.rating}</span>
            <span>·</span>
            <span>{listing.reviews} отзывов</span>
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Avatar src={listing.seller.avatar} size="xs" />
            <span className="text-xs text-secondary truncate">
              {listing.seller.username}
            </span>
            {listing.seller.verified && (
              <Badge variant="success" className="ml-auto">
                ✓
              </Badge>
            )}
          </div>
          <div className="flex justify-between items-end pt-3 border-t border-white/[0.06]">
            <span className="text-xs text-secondary">от</span>
            <span className="text-lg font-bold">
              {formatPrice(listing.price)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
