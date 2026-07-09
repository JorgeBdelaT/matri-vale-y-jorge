"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion.hook";
import { cn } from "@/lib/utils.util";

const AUTOPLAY_MS = 3500;

interface CarouselProps {
  /** Contenido de cada diapositiva. */
  slides: React.ReactNode[];
  /** Etiqueta accesible del carrusel. */
  ariaLabel: string;
  /** Prefijo de la etiqueta por diapositiva (p. ej. "Foto", "Evento"). */
  slideLabelPrefix?: string;
  /** Estilo para bandas oscuras (burdeo/oliva). */
  onDark?: boolean;
  /** Avance automático (opt-in). Se desactiva con movimiento reducido. */
  autoplay?: boolean;
  className?: string;
}

/**
 * Carrusel genérico con scroll-snap nativo (swipe táctil, rueda), flechas,
 * puntos y avance automático opcional. Es cíclico infinito: clona la primera y
 * la última diapositiva y reposiciona el scroll en las costuras, de modo que
 * cualquier gesto continúa el bucle en ambas direcciones. Renderiza siempre como
 * carrusel; decidir cuándo usarlo (vs. una cuadrícula) es responsabilidad del
 * consumidor.
 */
export function Carousel({
  slides,
  ariaLabel,
  slideLabelPrefix = "Diapositiva",
  onDark = false,
  autoplay = false,
  className,
}: CarouselProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const count = slides.length;

  // Bucle infinito: solo tiene sentido con más de una diapositiva.
  const cyclic = count > 1;

  // Diapositivas renderizadas: [clon(última), ...reales, clon(primera)]. Los
  // clones extienden el scroll para que el bucle sea continuo en ambos sentidos.
  const rendered = cyclic ? [slides[count - 1], ...slides, slides[0]] : slides;

  // Desplaza a un índice del array renderizado (incluye clones).
  const scrollToRendered = useCallback(
    (k: number, smooth: boolean) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({ left: k * track.clientWidth, behavior: smooth ? "smooth" : "auto" });
    },
    []
  );

  // Avanza/retrocede una diapositiva desde la posición actual del scroll.
  const step = useCallback(
    (dir: 1 | -1) => {
      const track = trackRef.current;
      if (!track || !track.clientWidth) return;
      const k = Math.round(track.scrollLeft / track.clientWidth);
      scrollToRendered(k + dir, !reduced);
    },
    [reduced, scrollToRendered]
  );

  // Salta a una diapositiva real concreta (desde los puntos).
  const goToDot = useCallback(
    (realIndex: number) => {
      scrollToRendered(cyclic ? realIndex + 1 : realIndex, !reduced);
    },
    [cyclic, reduced, scrollToRendered]
  );

  // Al detenerse el scroll: si quedó en un clon, reposiciona al slide real
  // equivalente (instantáneo, invisible) y actualiza el punto activo.
  const settle = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.clientWidth) return;
    const w = track.clientWidth;
    let k = Math.round(track.scrollLeft / w);
    if (cyclic) {
      if (k <= 0) {
        k = count;
        track.scrollLeft = k * w;
      } else if (k >= count + 1) {
        k = 1;
        track.scrollLeft = k * w;
      }
      setActive((((k - 1) % count) + count) % count);
    } else {
      setActive(Math.max(0, Math.min(k, count - 1)));
    }
  }, [count, cyclic]);

  // Coloca el scroll en la primera diapositiva real (tras el clon inicial) en
  // cuanto el track tenga ancho — robusto aunque el consumidor lo monte oculto
  // (display:none) y lo muestre después (p. ej. solo en móvil).
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !cyclic) return;
    let done = false;
    const init = () => {
      if (done || !track.clientWidth) return;
      track.scrollLeft = track.clientWidth;
      setActive(0);
      done = true;
    };
    init();
    const observer = new ResizeObserver(init);
    observer.observe(track);
    return () => observer.disconnect();
  }, [cyclic, count]);

  // Normaliza las costuras cuando el scroll se detiene (swipe, rueda, flechas).
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !cyclic) return;
    let timer: number;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(settle, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      track.removeEventListener("scroll", onScroll);
    };
  }, [cyclic, settle]);

  // El avance automático solo arranca cuando el carrusel entra en el viewport.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Avance automático cíclico: en pausa al interactuar, fuera de vista o con
  // movimiento reducido. Reutiliza `step`, así que continúa el bucle sin cortes.
  useEffect(() => {
    if (!autoplay || !cyclic || reduced || paused || !inView) return;
    const timer = window.setInterval(() => step(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [autoplay, cyclic, inView, paused, reduced, step]);

  if (count === 0) return null;

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full", className)}
      role="group"
      aria-roledescription="carrusel"
      aria-label={ariaLabel}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Track viewport — arrows center on this, not on the dots row below. */}
      <div className="relative">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {rendered.map((slide, k) => {
            const isClone = cyclic && (k === 0 || k === count + 1);
            const realIndex = cyclic ? (((k - 1) % count) + count) % count : k;
            return (
              <li
                key={k}
                className="w-full shrink-0 snap-center basis-full"
                aria-hidden={isClone || undefined}
                aria-roledescription={isClone ? undefined : "diapositiva"}
                aria-label={isClone ? undefined : `${slideLabelPrefix} ${realIndex + 1} de ${count}`}
              >
                {slide}
              </li>
            );
          })}
        </ul>

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label={`${slideLabelPrefix} anterior`}
              onClick={() => step(-1)}
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white shadow-[0_8px_24px_rgba(42,27,27,.22)] backdrop-blur-sm transition-colors hover:bg-black/45"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              aria-label={`${slideLabelPrefix} siguiente`}
              onClick={() => step(1)}
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white shadow-[0_8px_24px_rgba(42,27,27,.22)] backdrop-blur-sm transition-colors hover:bg-black/45"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ›
              </span>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-5 flex justify-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a ${slideLabelPrefix.toLowerCase()} ${index + 1}`}
              aria-current={index === active}
              onClick={() => goToDot(index)}
              className={cn(
                "size-2.5 rounded-full transition-all",
                index === active
                  ? onDark
                    ? "w-6 bg-paper"
                    : "w-6 bg-black/45"
                  : onDark
                    ? "bg-paper/40 hover:bg-paper/70"
                    : "bg-black/25 hover:bg-black/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
