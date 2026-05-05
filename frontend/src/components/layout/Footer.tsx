import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] py-10 text-sm text-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-bold text-white text-lg mb-3">
            <span className="w-8 h-8 rounded-ios-sm bg-white/10 flex items-center justify-center border border-white/15">
              ⬢
            </span>
            {APP_NAME}
          </div>
          <p className="max-w-xs">
            Безопасный маркетплейс игровых предметов, услуг и автоматизации.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Платформа</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/marketplace">Маркетплейс</Link>
            </li>
            <li>
              <Link href="/shop">Магазин</Link>
            </li>
            <li>
              <Link href="/automation">Автоматизация</Link>
            </li>
            <li>
              <Link href="/rental">Аренда игр</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Помощь</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/support/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/support/ticket">Тикеты</Link>
            </li>
            <li>
              <Link href="/support/chat">Live chat</Link>
            </li>
            <li>
              <Link href="/support">Контакты</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Юридическое</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#">Условия использования</Link>
            </li>
            <li>
              <Link href="#">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="#">Cookie</Link>
            </li>
            <li>
              <Link href="#">Гарантия сделки</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 pt-6 border-t border-white/[0.04] flex justify-between flex-wrap gap-2 text-xs">
        <span>© 2026 {APP_NAME}. Все права защищены.</span>
        <span>v0.1.0 — MVP</span>
      </div>
    </footer>
  );
}
