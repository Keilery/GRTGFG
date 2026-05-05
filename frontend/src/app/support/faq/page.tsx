"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { MOCK_FAQ } from "@/lib/mock-data";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <h1 className="text-3xl font-bold mb-2">Частые вопросы</h1>
      <p className="text-secondary mb-8">
        Самые популярные вопросы и ответы команды поддержки
      </p>
      <div className="space-y-3">
        {MOCK_FAQ.map((item, i) => (
          <Card key={i} padding="none">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold pr-3">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-white/80 leading-relaxed border-t border-white/[0.06] pt-4">
                {item.a}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
