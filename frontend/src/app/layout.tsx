import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

export const metadata: Metadata = {
  title: "NexusMarket — маркетплейс игровых предметов",
  description:
    "Безопасный маркетплейс для торговли игровыми предметами, услугами, аккаунтами и автоматизации.",
  metadataBase: new URL("https://nexusmarket.local"),
  openGraph: {
    title: "NexusMarket",
    description: "Маркетплейс игровых предметов и автоматизации.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className="noise">
        <Header />
        <main className="min-h-screen pb-24 lg:pb-12">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
