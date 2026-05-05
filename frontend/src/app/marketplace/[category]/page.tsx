import { ProductCard } from "@/components/marketplace/ProductCard";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { CATEGORIES } from "@/lib/constants";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = CATEGORIES.find((c) => c.id === params.category);
  if (!category) {
    // Allow ID like a game id (e.g. "wow") — fall back to listings filtered by game name.
    const filtered = MOCK_LISTINGS.filter(
      (l) =>
        l.game.toLowerCase().includes(params.category.toLowerCase()) ||
        l.category.toLowerCase().includes(params.category.toLowerCase()),
    );
    if (filtered.length === 0) return notFound();
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
        <GlassPanel className="px-6 sm:px-10 py-8 mb-6">
          <h1 className="text-3xl font-bold capitalize">{params.category}</h1>
          <p className="text-secondary mt-1">{filtered.length} лотов</p>
        </GlassPanel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((l) => (
            <ProductCard key={l.id} listing={l} />
          ))}
        </div>
      </div>
    );
  }

  const filtered = MOCK_LISTINGS.filter(
    (l) => l.category === category.name,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-8 mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <span className="text-4xl">{category.icon}</span>
          {category.name}
        </h1>
        <p className="text-secondary mt-1">
          {filtered.length} лотов в категории
        </p>
      </GlassPanel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((l) => <ProductCard key={l.id} listing={l} />)
        ) : (
          <p className="col-span-full text-center text-secondary py-12">
            Лоты не найдены. Будь первым — создай объявление.
          </p>
        )}
      </div>
    </div>
  );
}
