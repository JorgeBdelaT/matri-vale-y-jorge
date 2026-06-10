"use client";

import { motion } from "motion/react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion.hook";
import { cn } from "@/lib/utils.util";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Retraso en segundos antes de iniciar la animación. */
  delay?: number;
}

/**
 * Revela su contenido con un fade-up al entrar en el viewport.
 * Si el usuario prefiere movimiento reducido, muestra el contenido sin animar.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
