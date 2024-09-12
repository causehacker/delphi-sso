import { loginUser } from "@/lib/api/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    const token = await loginUser(email);
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
