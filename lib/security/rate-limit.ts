const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(identifier: string, maxRequests = 10, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count += 1;
  return true;
}
