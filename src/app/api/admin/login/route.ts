import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE_SECONDS,
  createAdminSessionToken,
  getAdminAuthMissingConfig,
  isAdminAuthConfigured,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      {
        message: `Admin authentication is not configured. Missing: ${getAdminAuthMissingConfig().join(", ")}`,
      },
      { status: 503 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid login request." }, { status: 400 });
  }

  const { email, password } = body as { email?: unknown; password?: unknown };

  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
  }

  const isValid = await verifyAdminCredentials(email, password);

  if (!isValid) {
    return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: await createAdminSessionToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });

  return response;
}
