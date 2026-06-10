"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils.util";

interface CopyCodeProps {
  /** Etiqueta pequeña sobre el código. */
  label: string;
  /** Texto que se copia al portapapeles. */
  code: string;
  /** Pista bajo el código en estado normal. */
  hint: string;
  /** Mensaje de confirmación tras copiar. */
  copiedMessage: string;
  className?: string;
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Tarjeta con un código copiable: cualquier click sobre ella copia el
 * código al portapapeles y muestra una confirmación temporal.
 */
export function CopyCode({
  label,
  code,
  hint,
  copiedMessage,
  className,
}: CopyCodeProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      return; // sin permiso de portapapeles: no mostrar confirmación falsa
    }
    setCopied(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "mx-auto block w-full max-w-[330px] cursor-pointer rounded-[30px] border border-paper/30 bg-paper/10 px-6 py-7 text-center text-inherit transition-[background-color,border-color,scale] duration-300 hover:border-paper/50 hover:bg-paper/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100",
        className
      )}
    >
      <small className="mb-2.5 block text-[0.72rem] font-extrabold uppercase tracking-[0.22em]">
        {label}
      </small>
      <span className="flex items-center justify-center gap-3">
        <strong className="font-serif text-[3.4rem] font-normal leading-none">
          {code}
        </strong>
        {copied ? (
          <CheckIcon className="size-6 shrink-0 text-gold" />
        ) : (
          <CopyIcon className="size-6 shrink-0 opacity-70" />
        )}
      </span>
      <span
        aria-live="polite"
        className={cn(
          "mt-3 block text-[0.72rem] font-extrabold uppercase tracking-[0.22em] transition-colors duration-300",
          copied ? "text-gold" : "opacity-60"
        )}
      >
        {copied ? copiedMessage : hint}
      </span>
    </button>
  );
}
