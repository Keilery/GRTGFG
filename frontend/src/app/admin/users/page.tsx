import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { MOCK_USERS } from "@/lib/mock-data";

export default function AdminUsersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Пользователи</h1>
        <Button>Экспорт</Button>
      </div>
      <Card padding="none" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06] text-xs text-secondary uppercase tracking-wider">
                <th className="text-left p-4">Пользователь</th>
                <th className="text-left p-4">Роль</th>
                <th className="text-left p-4">Уровень</th>
                <th className="text-right p-4">Баланс</th>
                <th className="text-right p-4">Сделок</th>
                <th className="text-right p-4">Рейтинг</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_USERS.map((u) => (
                <tr key={u.id} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.04]">
                  <td className="p-4">
                    <Link href={`/profile/${u.username}`} className="flex items-center gap-3">
                      <Avatar src={u.avatar} size="sm" />
                      <div>
                        <p className="font-semibold">{u.username}</p>
                        <p className="text-xs text-secondary">{u.email}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="p-4">
                    <Badge
                      variant={
                        u.role === "ADMIN"
                          ? "error"
                          : u.role === "MODERATOR"
                            ? "warning"
                            : "default"
                      }
                    >
                      {u.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge variant="info">{u.level}</Badge>
                  </td>
                  <td className="p-4 text-right font-mono">{u.balance.toLocaleString("ru-RU")} ₽</td>
                  <td className="p-4 text-right">{u.salesCount}</td>
                  <td className="p-4 text-right">★ {u.rating}</td>
                  <td className="p-4 text-right">
                    <Link href={`/admin/users/${u.id}`}>
                      <Button variant="secondary" size="sm">Открыть</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
