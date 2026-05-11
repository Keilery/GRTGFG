import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Bot,
  TrendingUp,
  Users,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { MOCK_LISTINGS, MOCK_GAMES } from "@/lib/mock-data";
import { PLAN_MODULES, PLAN_TOTAL_FEATURES } from "@/lib/plan-features";
import { formatNumber } from "@/lib/utils";

const FEATURES = [
  {
    icon: Shield,
    title: "Гарантия сделки",
    desc: "Деньги замораживаются до подтверждения получения товара",
  },
  {
    icon: Zap,
    title: "Авто-доставка",
    desc: "Цифровые товары приходят моментально через интеграции",
  },
  {
    icon: Bot,
    title: "Автоматизация",
    desc: "Подключи FunPay, Steam, Playerok и продавай 24/7",
  },
  {
    icon: TrendingUp,
    title: "Аналитика",
    desc: "Графики продаж, рейтинг и прогнозы — всё в реальном времени",
  },
];

const STATS = [
  { label: "Активных продавцов", value: 12_400 },
  { label: "Сделок за месяц", value: 84_320 },
  { label: "Поддерживаемых игр", value: 142 },
  { label: "Средний рейтинг", value: 4.92 },
  { label: "Plan A функций", value: PLAN_TOTAL_FEATURES },
  { label: "Модулей платформы", value: PLAN_MODULES.length },
];

export default function HomePage() {
  const featured = MOCK_LISTINGS.slice(0, 8);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* === HERO === */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32">
        <GlassPanel withStripes className="px-6 sm:px-12 py-16 lg:py-24 relative">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Badge variant="info" className="mb-5 mx-auto">
              <Sparkles className="w-3 h-3" /> Plan A · 552 функции · iOS 26 redesign
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
              Маркетплейс
              <br />
              <span className="text-secondary">игровой экономики</span>
            </h1>
            <p className="text-lg text-secondary max-w-xl mx-auto mb-8">
              Покупай, продавай, арендуй игры, управляй ботами, поддержкой,
              API, уведомлениями и безопасностью в World of Warcraft, CS&nbsp;2,
              Dota 2, LoL и сотнях других игр. Безопасно. Быстро. С комиссией от 5%.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/marketplace">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Открыть маркетплейс
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="secondary" leftIcon={<Boxes className="w-4 h-4" />}>
                  Карта Plan A
                </Button>
              </Link>
            </div>
          </div>
        </GlassPanel>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {STATS.map((s) => (
            <Card key={s.label} variant="glass-subtle" padding="md">
              <p className="text-secondary text-xs uppercase tracking-wider">
                {s.label}
              </p>
              <p className="text-2xl lg:text-3xl font-bold mt-1">
                {formatNumber(s.value)}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* === FEATURES === */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Почему NexusMarket</h2>
            <p className="text-secondary mt-1">
              Четыре столпа безопасной игровой коммерции
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <Card key={title} variant="glass" padding="lg" hover>
              <div className="w-12 h-12 rounded-ios-sm bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-secondary">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* === PLAN A COVERAGE === */}
      <section className="mb-20">
        <GlassPanel className="p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
            <div>
              <Badge variant="success" className="mb-3">
                Полное покрытие плана
              </Badge>
              <h2 className="text-3xl font-bold">12 модулей, 552 функции</h2>
              <p className="text-secondary mt-1 max-w-2xl">
                План разложен на видимые страницы, mock-first API контракты,
                WebSocket события, security checklist и dev center.
              </p>
            </div>
            <Link href="/features">
              <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Смотреть матрицу
              </Button>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PLAN_MODULES.slice(0, 8).map((module) => (
              <Card key={module.id} variant="glass-subtle" padding="md">
                <p className="text-secondary text-xs uppercase tracking-wider">
                  Модуль {module.number}
                </p>
                <h3 className="font-semibold mt-1">{module.title}</h3>
                <p className="text-sm text-white/70 mt-2">
                  {module.features.length} функций
                </p>
              </Card>
            ))}
          </div>
        </GlassPanel>
      </section>

      {/* === GAMES === */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Популярные игры</h2>
            <p className="text-secondary mt-1">Тысячи активных лотов</p>
          </div>
          <Link
            href="/marketplace"
            className="text-sm text-white/70 hover:text-white"
          >
            Все игры →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MOCK_GAMES.map((g) => (
            <Link key={g.id} href={`/marketplace/${g.id}`}>
              <Card
                variant="glass"
                padding="none"
                hover
                className="aspect-[4/5] relative overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.cover}
                  alt={g.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-semibold leading-tight">{g.name}</h3>
                  <p className="text-xs text-secondary mt-1">
                    {formatNumber(g.activeListings)} лотов
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* === FEATURED LISTINGS === */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">🔥 Горячие предложения</h2>
            <p className="text-secondary mt-1">
              Лучшие сделки от верифицированных продавцов
            </p>
          </div>
          <Link
            href="/marketplace"
            className="text-sm text-white/70 hover:text-white"
          >
            Все →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((l) => (
            <ProductCard key={l.id} listing={l} />
          ))}
        </div>
      </section>

      {/* === CTA === */}
      <section className="mb-12">
        <GlassPanel withStripes className="px-6 sm:px-12 py-16 text-center">
          <Users className="w-12 h-12 mx-auto mb-5 opacity-80" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Готов начать продавать?
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-6">
            Регистрация занимает 30 секунд. Первая сделка без комиссии.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register">
              <Button size="lg">Создать аккаунт</Button>
            </Link>
            <Link href="/marketplace/sell">
              <Button size="lg" variant="secondary">
                Разместить объявление
              </Button>
            </Link>
          </div>
        </GlassPanel>
      </section>
    </div>
  );
}
