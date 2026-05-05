"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <Card variant="glass-strong" padding="lg" className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Регистрация</h1>
        <p className="text-secondary mb-8">Бесплатно. 30 секунд.</p>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => setLoading(false), 1200);
          }}
        >
          <Input
            label="Никнейм"
            placeholder="ShadowKing"
            leftIcon={<User className="w-4 h-4" />}
            required
          />
          <Input
            label="Email"
            placeholder="you@example.com"
            type="email"
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />
          <Input
            label="Пароль"
            placeholder="Минимум 8 символов"
            type="password"
            leftIcon={<Lock className="w-4 h-4" />}
            required
            minLength={8}
          />
          <Input
            label="Промокод (необязательно)"
            placeholder="WELCOME2026"
          />
          <label className="flex items-start gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              required
              className="accent-white mt-0.5"
            />
            <span>
              Я согласен с{" "}
              <Link href="#" className="text-white hover:underline">
                условиями использования
              </Link>{" "}
              и{" "}
              <Link href="#" className="text-white hover:underline">
                политикой конфиденциальности
              </Link>
            </span>
          </label>
          <Button type="submit" loading={loading} className="w-full">
            Создать аккаунт
          </Button>
        </form>
        <p className="text-sm text-secondary text-center mt-6">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="text-white hover:underline">
            Войти
          </Link>
        </p>
      </Card>
    </div>
  );
}
