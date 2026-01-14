"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/ga";

export function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const search = searchParams?.toString();
    const url = pathname + (search ? `?${search}` : "");

    if (lastUrlRef.current === url) return;
    lastUrlRef.current = url;

    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
