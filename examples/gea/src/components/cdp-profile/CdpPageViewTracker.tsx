"use client";

import { JSX, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { recordPageView, recordVisitOnce } from "lib/cdp/cdp-session-tracker";

export function CdpPageViewTracker(): JSX.Element | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    recordVisitOnce();
  }, []);

  useEffect(() => {
    recordPageView(pathname || "/", search);
  }, [pathname, search]);

  return null;
}
