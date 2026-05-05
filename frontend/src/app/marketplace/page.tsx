import { CategoryNav } from "@/components/marketplace/CategoryNav";
import { FilterPanel } from "@/components/marketplace/FilterPanel";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MOCK_LISTINGS } from "@/lib/mock-data";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function MarketplacePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8">
      <GlassPanel withStripes className="px-6 sm:px-10 py-10 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Маркетплейс</h1>
        <p className="text-secondary">
          {MOCK_LISTINGS.length}+ активных лотов от верифицированных продавцов
        </p>
      </GlassPanel>

      <div className="mb-6">
        <CategoryNav />
      </div>

      <div className="flex gap-6">
        <div className="hidden lg:block w-64 shrink-0">
          <FilterPanel />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-secondary">
              Найдено: <span className="text-white">{MOCK_LISTINGS.length}</span>
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" leftIcon={<SlidersHorizontal className="w-4 h-4" />}>
                Фильтры
              </Button>
              <Button variant="secondary" size="sm" rightIcon={<ChevronDown className="w-4 h-4" />}>
                По релевантности
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {MOCK_LISTINGS.map((l) => (
              <ProductCard key={l.id} listing={l} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="secondary">Показать ещё</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
