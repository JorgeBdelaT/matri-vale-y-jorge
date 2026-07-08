"use client";

import { useSyncExternalStore } from "react";

/**
 * `true` si la media query coincide. En el servidor asume `false` y se corrige
 * al hidratar (mismo patrón que `usePrefersReducedMotion`).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
