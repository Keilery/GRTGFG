import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_RENTALS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

export default function RentalPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-8">
        <Badge variant="info" className="mb-3">Аренда игр</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Поиграй в любую игру дёшево
        </h1>
        <p className="text-secondary max-w-xl">
          Аренда игровых аккаунтов на день / неделю / месяц. Anti-VAC, анти-бан,
          мгновенная активация.
        </p>
      </GlassPanel>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_RENTALS.map((g) => (
          <Card key={g.id} variant="glass" padding="none" hover className="overflow-hidden">
            <div className="relative aspect-[16/10] bg-white/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.cover} alt={g.gameName} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3">
                <Badge variant={g.isAvailable ? "success" : "error"}>
                  {g.isAvailable ? "Доступно" : "Все слоты заняты"}
                </Badge>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold mb-3">{g.gameName}</h3>
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div className="bg-white/[0.04] rounded-ios-sm p-2">
                  <p className="text-[10px] text-secondary uppercase">День</p>
                  <p className="font-bold text-sm">{formatPrice(g.pricePerDay)}</p>
                </div>
                <div className="bg-white/[0.04] rounded-ios-sm p-2">
                  <p className="text-[10px] text-secondary uppercase">Неделя</p>
                  <p className="font-bold text-sm">{formatPrice(g.pricePerWeek)}</p>
                </div>
                <div className="bg-white/[0.04] rounded-ios-sm p-2">
                  <p className="text-[10px] text-secondary uppercase">Месяц</p>
                  <p className="font-bold text-sm">{formatPrice(g.pricePerMonth)}</p>
                </div>
              </div>
              <Link href={`/rental/${g.gameId}`}>
                <Button className="w-full" disabled={!g.isAvailable}>
                  {g.isAvailable ? "Арендовать" : "Не доступно"}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          { num: "01", t: "Выберите игру", d: "Из каталога 200+ хитов" },
          { num: "02", t: "Выберите тариф", d: "День, неделя или месяц" },
          { num: "03", t: "Играйте", d: "Логин и пароль придут моментально" },
        ].map((s) => (
          <Card key={s.num} padding="lg">
            <p className="text-4xl font-bold opacity-30">{s.num}</p>
            <h4 className="text-lg font-bold mt-2">{s.t}</h4>
            <p className="text-secondary text-sm mt-1">{s.d}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
