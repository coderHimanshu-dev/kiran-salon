export const ADMIN_SESSION_COOKIE = "kiran_admin_session";
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

type AdminSessionPayload = {
  role: "admin";
  exp: number;
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET?.trim() || null;
}

export function getAdminAuthMissingConfig() {
  return [
    ["ADMIN_EMAIL", process.env.ADMIN_EMAIL],
    ["ADMIN_PASSWORD", process.env.ADMIN_PASSWORD],
    ["ADMIN_SESSION_SECRET", process.env.ADMIN_SESSION_SECRET],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);
}

export function isAdminAuthConfigured() {
  return getAdminAuthMissingConfig().length === 0;
}

function base64UrlEncode(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64UrlEncodeString(value: string) {
  return base64UrlEncode(encoder.encode(value));
}

function base64UrlDecodeString(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return decoder.decode(bytes);
}

async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));

  return base64UrlEncode(new Uint8Array(signature));
}

function constantTimeEqual(leftValue: string, rightValue: string) {
  const left = encoder.encode(leftValue);
  const right = encoder.encode(rightValue);
  let mismatch = left.length ^ right.length;
  const length = Math.max(left.length, right.length);

  for (let index = 0; index < length; index += 1) {
    mismatch |= (left[index] ?? 0) ^ (right[index] ?? 0);
  }

  return mismatch === 0;
}

async function digest(value: string) {
  const hash = await crypto.subtle.digest("SHA-256", encoder.encode(value));

  return base64UrlEncode(new Uint8Array(hash));
}

async function constantTimeSecretEqual(input: string, expected: string) {
  const [left, right] = await Promise.all([digest(input), digest(expected)]);

  return constantTimeEqual(left, right);
}

export async function verifyAdminCredentials(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL?.trim();
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedEmail || !expectedPassword) {
    return false;
  }

  const [emailMatches, passwordMatches] = await Promise.all([
    constantTimeSecretEqual(email.trim().toLowerCase(), expectedEmail.toLowerCase()),
    constantTimeSecretEqual(password, expectedPassword),
  ]);

  return emailMatches && passwordMatches;
}

export async function createAdminSessionToken() {
  const secret = getSessionSecret();

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  const payload: AdminSessionPayload = {
    role: "admin",
    exp: Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000,
  };
  const encodedPayload = base64UrlEncodeString(JSON.stringify(payload));
  const signature = await sign(encodedPayload, secret);

  return `${encodedPayload}.${signature}`;
}

export async function verifyAdminSessionToken(token?: string) {
  const secret = getSessionSecret();

  if (!token || !secret) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length !== 2) {
    return false;
  }

  const [encodedPayload, signature] = parts;
  const expectedSignature = await sign(encodedPayload, secret);

  if (!constantTimeEqual(signature, expectedSignature)) {
    return false;
  }

  try {
    const payload = JSON.parse(base64UrlDecodeString(encodedPayload)) as Partial<AdminSessionPayload>;

    return payload.role === "admin" && typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}
