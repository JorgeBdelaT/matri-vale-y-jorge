"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query.hook";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion.hook";
import { cn } from "@/lib/utils.util";

const AUTOPLAY_MS = 5000;
/** Coincide con la convención `max-[540px]` del resto del sitio. */
const MOBILE_QUERY = "(max-width: 540px)";

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
  /**
   * Si es `true`, el comportamiento de carrusel solo aplica en móvil; en
   * pantallas mayores las diapositivas se muestran en cuadrícula.
   */
  mobileOnly?: boolean;
  /** Clases de la cuadrícula de escritorio cuando `mobileOnly`. */
  desktopGridClassName?: string;
  className?: string;
}

/**
 * Carrusel genérico con scroll-snap nativo (swipe táctil), flechas, puntos y
 * avance automático opcional. Acepta diapositivas arbitrarias. En modo
 * `mobileOnly` se comporta como carrusel en móvil y como cuadrícula en escritorio.
 */
export function Carousel({
  slides,
  ariaLabel,
  slideLabelPrefix = "Diapositiva",
  onDark = false,
  autoplay = false,
  mobileOnly = false,
  desktopGridClassName,
  className,
}: CarouselProps) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const trackRef = useRef<HTMLUListElement>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  // En modo mobileOnly el carrusel solo se activa bajo el breakpoint móvil.
  const asCarousel = !mobileOnly || isMobile;

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const slide = slideRefs.current[index];
      if (!track || !slide) return;
      track.scrollTo({
        left: slide.offsetLeft,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [reduced]
  );

  // Sigue la diapositiva centrada para mantener puntos/aria sincronizados.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !asCarousel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target as HTMLLIElement);
            if (index !== -1) setActive(index);
          }
        }
      },
      { root: track, threshold: 0.6 }
    );
    for (const slide of slideRefs.current) {
      if (slide) observer.observe(slide);
    }
    return () => observer.disconnect();
  }, [asCarousel, count]);

  // Avance automático, en pausa al interactuar y con movimiento reducido/cuadrícula.
  useEffect(() => {
    if (!autoplay || !asCarousel || reduced || paused || count <= 1) return;
    const timer = window.setInterval(() => {
      goTo((active + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [active, asCarousel, autoplay, count, goTo, paused, reduced]);

  if (count === 0) return null;

  return (
    <div
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
          className={cn(
            asCarousel
              ? "flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : cn("grid overflow-visible", desktopGridClassName)
          )}
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className={cn(asCarousel && "w-full shrink-0 snap-center basis-full")}
              aria-roledescription="diapositiva"
              aria-label={`${slideLabelPrefix} ${index + 1} de ${count}`}
            >
              {slide}
            </li>
          ))}
        </ul>

        {asCarousel && count > 1 && (
          <>
            <button
              type="button"
              aria-label={`${slideLabelPrefix} anterior`}
              onClick={() => goTo((active - 1 + count) % count)}
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white shadow-[0_8px_24px_rgba(42,27,27,.22)] backdrop-blur-sm transition-colors hover:bg-black/45"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              aria-label={`${slideLabelPrefix} siguiente`}
              onClick={() => goTo((active + 1) % count)}
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white shadow-[0_8px_24px_rgba(42,27,27,.22)] backdrop-blur-sm transition-colors hover:bg-black/45"
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                ›
              </span>
            </button>
          </>
        )}
      </div>

      {asCarousel && count > 1 && (
        <div className="mt-5 flex justify-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a ${slideLabelPrefix.toLowerCase()} ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
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
