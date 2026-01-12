import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple in-memory rate limiter
// Note: In a distributed/serverless environment, this state is local to the container/isolate.
// It works well for basic flood protection but is not strictly synchronized across all instances.
const rateLimitMap = new Map<string, { count: number; startTime: number }>();

// Configuration
const WINDOW_SIZE_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // Limit per window

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith("/api")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
      rateLimitMap.set(ip, { count: 1, startTime: now });
    } else {
      // Check if window has passed
      if (now - record.startTime < WINDOW_SIZE_MS) {
        // Within window, check limit
        if (record.count >= MAX_REQUESTS) {
          return NextResponse.json(
            {
              ok: false,
              error: "Too many requests. Please try again later.",
            },
            { status: 429 }
          );
        }
        // Increment count
        record.count += 1;
      } else {
        // Window expired, reset
        record.startTime = now;
        record.count = 1;
      }
    }
    
    // Cleanup old entries periodically (lazy cleanup on request)
    // To prevent memory leak from infinite unique IPs, we can do a quick check
    if (rateLimitMap.size > 10000) {
        rateLimitMap.clear(); // Nuclear option for safety if under attack
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
