"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <Card variant="glass-strong" padding="lg" className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Сброс пароля</h1>
        <p className="text-secondary mb-8">
          Введите email — пришлём ссылку для восстановления.
        </p>
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-success/15 border border-success/20 flex items-center justify-center text-3xl mx-auto mb-4">
              ✉️
            </div>
            <h2 className="text-lg font-semibold mb-2">Письмо отправлено</h2>
            <p className="text-sm text-secondary">
              Проверьте папку «Входящие» (и спам).
            </p>
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              leftIcon={<Mail className="w-4 h-4" />}
              required
            />
            <Button type="submit" className="w-full">
              Отправить ссылку
            </Button>
          </form>
        )}
        <p className="text-sm text-secondary text-center mt-6">
          <Link href="/login" className="text-white hover:underline">
            ← Назад к входу
          </Link>
        </p>
      </Card>
    </div>
  );
}
