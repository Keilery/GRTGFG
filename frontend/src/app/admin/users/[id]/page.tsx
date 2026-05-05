import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_USERS } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default function AdminUserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const u = MOCK_USERS.find((x) => x.id === params.id);
  if (!u) notFound();

  return (
    <div>
      <Card padding="lg" className="mb-4">
        <div className="flex flex-wrap items-center gap-6">
          <Avatar src={u!.avatar} size="xl" />
          <div className="flex-1 min-w-[200px]">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {u!.username}
              <Badge variant="info">{u!.level}</Badge>
              <Badge variant={u!.role === "ADMIN" ? "error" : "default"}>
                {u!.role}
              </Badge>
            </h1>
            <p className="text-secondary text-sm">{u!.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Изменить роль</Button>
            <Button variant="danger" size="sm">Заблокировать</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card padding="lg">
          <p className="text-secondary text-xs uppercase tracking-wider mb-2">Баланс</p>
          <p className="text-2xl font-bold">{u!.balance.toLocaleString("ru-RU")} ₽</p>
          <Button variant="secondary" size="sm" className="mt-3">Изменить баланс</Button>
        </Card>
        <Card padding="lg">
          <p className="text-secondary text-xs uppercase tracking-wider mb-2">Активность</p>
          <p>Сделок: <span className="font-semibold">{u!.salesCount}</span></p>
          <p>Рейтинг: <span className="font-semibold">★ {u!.rating}</span></p>
        </Card>
        <Card padding="lg">
          <p className="text-secondary text-xs uppercase tracking-wider mb-2">Аккаунт</p>
          <p>Зарегистрирован: <span className="font-semibold">{new Date(u!.createdAt).toLocaleDateString("ru-RU")}</span></p>
          <p>Верификация: <span className="font-semibold">{u!.verified ? "✓ Да" : "Нет"}</span></p>
        </Card>
      </div>
    </div>
  );
}
