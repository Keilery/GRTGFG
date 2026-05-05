import { NextResponse } from "next/server";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: MOCK_PRODUCTS });
}
