import { Card } from "@/components/ui/Card";

const ANALYTICS = [
  {
    title: "Посетители за 24 ч",
    main: "48 213",
    sub: "+12.4% к вчера",
    sub2: "Уникальных: 31 042",
  },
  {
    title: "Конверсия",
    main: "3.42%",
    sub: "посетитель → покупатель",
    sub2: "AOV: 2 130 ₽",
  },
  {
    title: "Топ-страны",
    main: "RU 64% / KZ 14%",
    sub: "BY 8%, UA 6%, прочие 8%",
    sub2: "TLS 1.3 в 99.8% запросов",
  },
];

export default function AdminAnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Аналитика</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {ANALYTICS.map((a) => (
          <Card key={a.title} padding="lg">
            <p className="text-secondary text-xs uppercase tracking-wider mb-2">
              {a.title}
            </p>
            <p className="text-3xl font-bold">{a.main}</p>
            <p className="text-success text-xs mt-1">{a.sub}</p>
            <p className="text-secondary text-xs mt-1">{a.sub2}</p>
          </Card>
        ))}
      </div>
      <Card padding="lg" className="mb-6">
        <h2 className="text-xl font-bold mb-4">Распределение по играм</h2>
        <div className="space-y-3">
          {[
            { game: "Counter-Strike 2", pct: 42 },
            { game: "World of Warcraft", pct: 18 },
            { game: "Dota 2", pct: 12 },
            { game: "League of Legends", pct: 10 },
            { game: "Valorant", pct: 9 },
            { game: "Прочие", pct: 9 },
          ].map((g) => (
            <div key={g.game}>
              <div className="flex justify-between text-sm mb-1">
                <span>{g.game}</span>
                <span className="text-secondary">{g.pct}%</span>
              </div>
              <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-white"
                  style={{ width: `${g.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
