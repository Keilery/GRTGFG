import { Bell, Mail, MessageCircle, Moon, Send, Smartphone, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";

const CHANNELS = [
  { icon: Bell, title: "In-app", text: "Bell center, read/unread, filters, grouped announcements and action buttons." },
  { icon: Mail, title: "Email", text: "Order, login, review, payout and promo email templates with quiet hours." },
  { icon: MessageCircle, title: "Telegram / Discord", text: "Bot API, webhooks, channel settings and support community links." },
  { icon: Smartphone, title: "Push / SMS", text: "Browser push, mobile vibration and SMS fallback for critical security events." },
];

export default function NotificationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 space-y-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10">
        <Badge variant="info" className="mb-3">Уведомления и коммуникации</Badge>
        <h1 className="text-3xl sm:text-5xl font-bold">Центр уведомлений</h1>
        <p className="text-secondary mt-3 max-w-2xl">
          Push, email, Telegram, Discord, SMS, in-app центр, typing indicator,
          read receipts и системные объявления собраны в одной панели.
        </p>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {CHANNELS.map(({ icon: Icon, title, text }) => (
          <Card key={title} padding="lg" hover>
            <Icon className="w-7 h-7 mb-4" />
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-secondary text-sm mt-2">{text}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card padding="lg">
          <h2 className="text-xl font-bold mb-4">Live feed</h2>
          <div className="space-y-3">
            {MOCK_NOTIFICATIONS.map((notification) => (
              <div key={notification.id} className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant={notification.isRead ? "outline" : "success"}>{notification.type}</Badge>
                  <span className="text-secondary text-xs">{notification.isRead ? "Прочитано" : "Новое"}</span>
                </div>
                <h3 className="font-semibold mt-3">{notification.title}</h3>
                <p className="text-secondary text-sm mt-1">{notification.body}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card padding="lg">
          <h2 className="text-xl font-bold mb-4">Настройки каналов</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Новый заказ", "Сообщение в чате", "Диспут", "Выплата", "Новый отзыв", "Окончание аренды", "Бан / ограничение", "Промоакция"].map((setting) => (
              <div key={setting} className="rounded-ios-sm border border-white/[0.08] bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{setting}</span>
                  <span className="h-6 w-11 rounded-full bg-success/30 border border-success/40 p-0.5">
                    <span className="block h-5 w-5 rounded-full bg-success ml-auto" />
                  </span>
                </div>
                <div className="mt-3 flex gap-2 text-secondary">
                  <Send className="w-4 h-4" />
                  <Volume2 className="w-4 h-4" />
                  <Moon className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
