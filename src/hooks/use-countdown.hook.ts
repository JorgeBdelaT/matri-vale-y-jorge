"use client";

import { useSyncExternalStore } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function subscribe(onStoreChange: () => void) {
  const id = setInterval(onStoreChange, 1000);
  return () => clearInterval(id);
}

/**
 * Cuenta regresiva en vivo hacia `targetISO`. Devuelve `null` durante el
 * render del servidor y la hidratación (el servidor no conoce la hora del
 * visitante), y luego se actualiza cada segundo.
 */
export function useCountdown(targetISO: string): CountdownParts | null {
  const targetMs = new Date(targetISO).getTime();

  const secondsLeft = useSyncExternalStore<number | null>(
    subscribe,
    () => Math.max(0, Math.floor((targetMs - Date.now()) / 1000)),
    () => null
  );

  if (secondsLeft === null) {
    return null;
  }

  return {
    days: Math.floor(secondsLeft / 86_400),
    hours: Math.floor((secondsLeft % 86_400) / 3_600),
    minutes: Math.floor((secondsLeft % 3_600) / 60),
    seconds: secondsLeft % 60,
    isPast: secondsLeft <= 0,
  };
}
