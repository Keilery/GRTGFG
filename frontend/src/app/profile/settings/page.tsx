"use client";

import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const SECTIONS = [
  {
    title: "Профиль",
    fields: [
      { label: "Никнейм", placeholder: "ShadowKing", defaultValue: "ShadowKing" },
      { label: "Email", placeholder: "you@email.com", defaultValue: "shadow@nexus.local" },
      { label: "Биография", placeholder: "Несколько слов о себе…" },
    ],
  },
  {
    title: "Безопасность",
    fields: [
      { label: "Текущий пароль", placeholder: "••••••••", type: "password" },
      { label: "Новый пароль", placeholder: "••••••••", type: "password" },
      { label: "Повтор пароля", placeholder: "••••••••", type: "password" },
    ],
  },
];

const TOGGLES = [
  { id: "notif_email", label: "Уведомления на email", on: true },
  { id: "notif_push", label: "Push-уведомления", on: true },
  { id: "notif_tg", label: "Telegram уведомления", on: false },
  { id: "tfa", label: "Двухфакторная аутентификация (2FA)", on: false },
  { id: "private", label: "Приватный профиль", on: false },
  { id: "sounds", label: "Звуки интерфейса", on: true },
];

export default function ProfileSettingsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <h1 className="text-3xl font-bold mb-2">Настройки</h1>
      <p className="text-secondary mb-6">Управляй своим аккаунтом</p>

      {SECTIONS.map((s) => (
        <Card key={s.title} padding="lg" className="mb-4">
          <h2 className="text-xl font-bold mb-4">{s.title}</h2>
          <div className="space-y-3">
            {s.fields.map((f) => (
              <Input key={f.label} {...f} />
            ))}
          </div>
          <Button className="mt-5">Сохранить</Button>
        </Card>
      ))}

      <Card padding="lg" className="mb-4">
        <h2 className="text-xl font-bold mb-4">Уведомления и приватность</h2>
        <div className="space-y-1">
          {TOGGLES.map((t) => (
            <label
              key={t.id}
              className="flex items-center justify-between p-3 rounded-ios-sm hover:bg-white/[0.04] transition cursor-pointer"
            >
              <span className="text-sm">{t.label}</span>
              <input
                type="checkbox"
                defaultChecked={t.on}
                className="accent-white scale-125"
              />
            </label>
          ))}
        </div>
      </Card>

      <Card padding="lg" className="border-error/20">
        <h2 className="text-xl font-bold mb-2 text-error">Опасная зона</h2>
        <p className="text-sm text-secondary mb-4">
          Удаление аккаунта необратимо. Все объявления, балансы и история будут
          удалены.
        </p>
        <Button variant="danger">Удалить аккаунт</Button>
      </Card>
    </div>
  );
}
