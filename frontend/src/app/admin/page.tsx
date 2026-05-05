import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  Wallet,
  AlertTriangle,
  Activity,
} from "lucide-react";

const STATS = [
  { label: "Активных пользователей", value: "12 482", icon: Users, change: "+8.2%", up: true },
  { label: "Заказов сегодня", value: "342", icon: ShoppingBag, change: "+12%", up: true },
  { label: "Оборот за месяц", value: "8.4M ₽", icon: Wallet, change: "+18%", up: true },
  { label: "Открытых тикетов", value: "23", icon: AlertTriangle, change: "-4", up: false, warn: true },
];

const ACTIVITY = [
  { time: "10:42", text: "Пользователь @ShadowKing продал AWP | Asiimov за 7 800 ₽" },
  { time: "10:38", text: "Новый тикет: Не пришёл код Steam Wallet" },
  { time: "10:31", text: "Бот FunPay — обработано 12 сообщений" },
  { time: "10:24", text: "Модерация: одобрено 3 объявления, отклонено 1" },
  { time: "10:11", text: "Пополнение баланса +5 000 ₽ (карта)" },
  { time: "09:55", text: "Новая регистрация: @CrimsonKnight" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <GlassPanel withStripes className="px-6 sm:px-10 py-8 mb-6">
        <Badge variant="info" className="mb-2">Дашборд</Badge>
        <h1 className="text-3xl font-bold">Добро пожаловать, Admin</h1>
        <p className="text-secondary mt-1">Сводка по платформе на сегодня</p>
      </GlassPanel>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {STATS.map(({ label, value, icon: Icon, change, up, warn }) => (
          <Card key={label} padding="lg">
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-ios-sm flex items-center justify-center ${
                  warn ? "bg-warning/15 text-warning" : "bg-white/[0.06]"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <Badge variant={up ? "success" : "warning"}>{change}</Badge>
            </div>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-secondary text-xs uppercase tracking-wider mt-1">
              {label}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card padding="lg" className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Оборот за неделю
          </h2>
          {/* Simple SVG sparkline */}
          <svg viewBox="0 0 400 100" className="w-full h-32">
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 60 L 60 50 L 120 70 L 180 30 L 240 40 L 300 20 L 360 25 L 400 15 L 400 100 L 0 100 Z"
              fill="url(#grad)"
            />
            <path
              d="M 0 60 L 60 50 L 120 70 L 180 30 L 240 40 L 300 20 L 360 25 L 400 15"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className="grid grid-cols-7 mt-2 text-[10px] text-secondary text-center">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" /> Последние события
          </h2>
          <div className="space-y-3">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <span className="text-xs text-secondary w-10 shrink-0">{a.time}</span>
                <p className="text-white/80">{a.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
