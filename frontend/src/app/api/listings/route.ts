import { NextResponse } from "next/server";
import { MOCK_LISTINGS } from "@/lib/mock-data";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const game = searchParams.get("game");
  const category = searchParams.get("category");
  const q = searchParams.get("q");

  let result = MOCK_LISTINGS;
  if (game) result = result.filter((l) => l.game === game);
  if (category) result = result.filter((l) => l.category === category);
  if (q) {
    const lq = q.toLowerCase();
    result = result.filter((l) => l.title.toLowerCase().includes(lq));
  }

  return NextResponse.json({ data: result, total: result.length });
}
