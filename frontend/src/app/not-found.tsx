import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-20">
      <GlassPanel withStripes className="px-8 py-20 text-center">
        <p className="text-7xl font-bold opacity-20 mb-4">404</p>
        <h1 className="text-3xl font-bold mb-3">Страница не найдена</h1>
        <p className="text-secondary mb-8">
          Возможно, страница была удалена или вы перешли по неправильной ссылке.
        </p>
        <Link href="/">
          <Button>На главную</Button>
        </Link>
      </GlassPanel>
    </div>
  );
}
