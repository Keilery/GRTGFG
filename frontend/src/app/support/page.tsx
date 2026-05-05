import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { HelpCircle, MessageSquare, Ticket, Mail } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Поддержка</h1>
        <p className="text-secondary max-w-md mx-auto">
          Среднее время ответа: <span className="text-success">3 минуты</span>.
          Решаем 96% обращений с первого касания.
        </p>
      </GlassPanel>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/support/faq">
          <Card padding="lg" hover className="h-full">
            <HelpCircle className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-1">FAQ</h3>
            <p className="text-secondary text-sm">Часто задаваемые вопросы</p>
          </Card>
        </Link>
        <Link href="/support/chat">
          <Card padding="lg" hover className="h-full">
            <MessageSquare className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-1">Live chat</h3>
            <p className="text-secondary text-sm">Онлайн-оператор 24/7</p>
          </Card>
        </Link>
        <Link href="/support/ticket">
          <Card padding="lg" hover className="h-full">
            <Ticket className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-1">Тикеты</h3>
            <p className="text-secondary text-sm">Создать обращение</p>
          </Card>
        </Link>
        <a href="mailto:support@nexusmarket.local">
          <Card padding="lg" hover className="h-full">
            <Mail className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-secondary text-sm">support@nexusmarket.local</p>
          </Card>
        </a>
      </div>

      <Card padding="lg" className="mt-8">
        <h2 className="text-xl font-bold mb-4">Срочно нужна помощь?</h2>
        <p className="text-secondary mb-4">
          Открой live-чат — оператор подключится в течение 1 минуты.
        </p>
        <Link href="/support/chat">
          <Button>Начать чат</Button>
        </Link>
      </Card>
    </div>
  );
}
