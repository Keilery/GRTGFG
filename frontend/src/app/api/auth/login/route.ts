import { NextResponse } from "next/server";
import { MOCK_USERS } from "@/lib/mock-data";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const user = MOCK_USERS.find((u) => u.email === email);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }
    return NextResponse.json({
      token: "mock_token_" + Math.random().toString(36).slice(2),
      user,
    });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
