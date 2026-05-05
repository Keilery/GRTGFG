"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function VerifyPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <Card variant="glass-strong" padding="lg" className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-3xl mx-auto mb-4">
          🔐
        </div>
        <h1 className="text-2xl font-bold mb-2">Подтверждение email</h1>
        <p className="text-secondary mb-8">
          Введите 6-значный код из письма
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {code.map((digit, i) => (
            <input
              key={i}
              maxLength={1}
              value={digit}
              inputMode="numeric"
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                setCode((c) => c.map((x, j) => (j === i ? v : x)));
              }}
              className="w-12 h-14 text-center text-xl font-bold bg-white/[0.04] border border-white/[0.08] rounded-ios-sm outline-none focus:border-white/30"
            />
          ))}
        </div>
        <Button className="w-full">Подтвердить</Button>
        <p className="text-sm text-secondary mt-4">
          Не получили код? <button className="text-white hover:underline">Отправить снова</button>
        </p>
      </Card>
    </div>
  );
}
