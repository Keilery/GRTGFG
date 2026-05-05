"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const OAUTH = [
  { id: "google", label: "Google", emoji: "🇬" },
  { id: "discord", label: "Discord", emoji: "💬" },
  { id: "steam", label: "Steam", emoji: "🎮" },
  { id: "vk", label: "VK", emoji: "🅥" },
];

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <Card variant="glass-strong" padding="lg" className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Вход</h1>
        <p className="text-secondary mb-8">Добро пожаловать обратно</p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => setLoading(false), 1200);
          }}
        >
          <Input
            label="Email"
            placeholder="you@example.com"
            type="email"
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />
          <Input
            label="Пароль"
            placeholder="••••••••"
            type={show ? "text" : "password"}
            leftIcon={<Lock className="w-4 h-4" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="hover:text-white"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            }
            required
          />
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-white/70">
              <input type="checkbox" className="accent-white" />
              Запомнить меня
            </label>
            <Link
              href="/forgot-password"
              className="text-white/70 hover:text-white"
            >
              Забыли пароль?
            </Link>
          </div>
          <Button type="submit" loading={loading} className="w-full">
            Войти
          </Button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/[0.08]" />
          <span className="text-xs text-secondary uppercase tracking-wider">
            или через
          </span>
          <div className="flex-1 h-px bg-white/[0.08]" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {OAUTH.map((o) => (
            <Button key={o.id} variant="secondary" size="sm">
              <span>{o.emoji}</span>
              {o.label}
            </Button>
          ))}
        </div>

        <p className="text-sm text-secondary text-center mt-6">
          Нет аккаунта?{" "}
          <Link href="/register" className="text-white hover:underline">
            Создать
          </Link>
        </p>
      </Card>
    </div>
  );
}
