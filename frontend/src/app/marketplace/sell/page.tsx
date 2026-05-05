"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { CATEGORIES, GAMES } from "@/lib/constants";
import { Upload } from "lucide-react";

export default function SellPage() {
  const [step, setStep] = useState(1);
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <Card variant="glass-strong" padding="lg">
        <h1 className="text-3xl font-bold mb-2">Создать объявление</h1>
        <p className="text-secondary mb-6">Шаг {step} из 3</p>

        <div className="flex gap-1 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full ${
                s <= step ? "bg-white" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <Input
              label="Название лота"
              placeholder="Например: 10 000 Gold Stormrage US"
              required
            />
            <div>
              <label className="text-xs text-secondary uppercase tracking-wider mb-2 block">
                Игра
              </label>
              <div className="flex flex-wrap gap-2">
                {GAMES.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-full text-sm"
                  >
                    {g.icon} {g.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-secondary uppercase tracking-wider mb-2 block">
                Категория
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-full text-sm"
                  >
                    {c.icon} {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-secondary uppercase tracking-wider mb-2 block">
                Описание
              </label>
              <textarea
                rows={6}
                placeholder="Опишите подробно: что входит, способ доставки, регион…"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-ios-sm px-4 py-3 text-sm outline-none focus:border-white/30 resize-none"
              />
            </div>
            <div>
              <label className="text-xs text-secondary uppercase tracking-wider mb-2 block">
                Изображения (до 8)
              </label>
              <div className="border-2 border-dashed border-white/15 rounded-ios p-8 text-center cursor-pointer hover:border-white/30 transition">
                <Upload className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="text-sm text-secondary">
                  Перетащите файлы или кликните для выбора
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Input
              label="Цена, ₽"
              type="number"
              placeholder="1 990"
              required
            />
            <Input
              label="Срок доставки"
              placeholder="15 минут / 1 час / 1 день"
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-white" />
              Возможен торг
            </label>
            <Card variant="glass-subtle" padding="md">
              <p className="text-xs text-secondary mb-1">Комиссия платформы</p>
              <p className="font-semibold">5% (~99 ₽)</p>
              <p className="text-xs text-secondary mt-2">
                Вы получите: <span className="text-white font-semibold">1 891 ₽</span>
              </p>
            </Card>
          </div>
        )}

        <div className="flex gap-3 mt-8">
          <Button
            variant="secondary"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
          >
            Назад
          </Button>
          <div className="flex-1" />
          {step < 3 ? (
            <Button onClick={() => setStep((s) => Math.min(3, s + 1))}>
              Далее
            </Button>
          ) : (
            <Button>Опубликовать</Button>
          )}
        </div>
      </Card>
    </div>
  );
}
