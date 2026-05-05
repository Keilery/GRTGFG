"use client";

import { useState } from "react";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const filtered = MOCK_LISTINGS.filter((l) =>
    l.title.toLowerCase().includes(q.toLowerCase()) ||
    l.game.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <Card variant="glass" padding="md" className="mb-6">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск по названию, игре, продавцу…"
          leftIcon={<Search className="w-4 h-4" />}
          autoFocus
        />
      </Card>
      <p className="text-sm text-secondary mb-4">
        Результатов: <span className="text-white">{filtered.length}</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((l) => (
          <ProductCard key={l.id} listing={l} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20 text-secondary">
          Ничего не найдено по запросу "{q}"
        </div>
      )}
    </div>
  );
}
