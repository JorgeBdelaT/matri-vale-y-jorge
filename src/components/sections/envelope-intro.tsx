"use client";

import { motion } from "motion/react";

import { Doodle } from "@/components/common/doodle";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { COPY, COUPLE, VENUE, WEDDING } from "@/lib/constants";

/**
 * Apertura de la invitación: la solapa del sobre se abre con perspectiva,
 * cae detrás de la tarjeta y la tarjeta sube hasta quedar a la vista,
 * apenas guardada en el sobre.
 *
 * Capas (z): solapa cerrada 40 → abierta 25 · sobre 20 · tarjeta 15.
 * La tarjeta queda detrás del frente del sobre para el efecto "guardada".
 */
export function EnvelopeIntro() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-label="Apertura de invitación"
      className="texture texture-paper relative isolate grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(232,182,170,.5),transparent_34%),radial-gradient(circle_at_86%_78%,rgba(104,116,58,.34),transparent_34%)] bg-ivory px-[22px] py-16 text-burgundy"
    >
      <Doodle variant="branch" position="tl" rotation={-12} />
      <Doodle variant="bird" position="br" rotation={10} />

      <motion.div
        className="relative h-[640px] w-[min(420px,88vw)] [perspective:1200px]"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Solapa del sobre */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[240px] h-[200px] origin-bottom bg-burgundy-3 shadow-[0_20px_60px_rgba(42,27,27,.2)] [clip-path:polygon(0_100%,50%_0,100%_100%)]"
          initial={
            prefersReducedMotion
              ? { rotateX: 178, zIndex: 25 }
              : { rotateX: 0, zIndex: 40 }
          }
          animate={{ rotateX: 178, zIndex: prefersReducedMotion ? 25 : [40, 40, 25] }}
          transition={{
            rotateX: { duration: 1.4, delay: 0.2, ease: "easeInOut" },
            zIndex: { duration: 1.4, delay: 0.2, times: [0, 0.5, 0.51] },
          }}
        />

        {/* Tarjeta de invitación (z-15: queda detrás del frente del sobre) */}
        <motion.article
          className="absolute inset-x-0 top-[10px] z-[15] mx-auto grid min-h-[380px] w-[78%] content-center rounded-[30px] border border-burgundy/15 bg-paper px-6 pb-14 pt-10 text-center shadow-[0_30px_90px_rgba(42,27,27,.24)] before:pointer-events-none before:absolute before:inset-3 before:rounded-[24px] before:border before:border-burgundy/15"
          initial={prefersReducedMotion ? false : { y: 170, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 1.6, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] },
            opacity: { duration: 0.6, delay: 0.9, ease: "easeOut" },
          }}
        >
          <p className="mb-4 text-[0.74rem] font-extrabold uppercase tracking-[0.38em]">
            {COPY.intro.eyebrow}
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mb-4 grid size-[72px] place-items-center rounded-full border border-burgundy/20 font-serif text-[1.4rem] italic text-olive"
          >
            {COUPLE.monogram}
          </div>
          <h1 className="font-serif text-[clamp(3rem,10vw,4.5rem)] font-normal italic leading-[0.82] tracking-[-0.06em]">
            {COUPLE.bride}
            <br />& {COUPLE.groom}
          </h1>
          <p className="mt-6 text-[0.82rem] uppercase tracking-[0.24em]">
            {WEDDING.dateLabel}
          </p>
          <p className="mt-3 text-[0.9rem] text-olive">{VENUE.shortLabel}</p>
        </motion.article>

        {/* Cuerpo del sobre */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-20 h-[240px] overflow-hidden rounded-b-[30px] rounded-t-[10px] bg-[linear-gradient(145deg,var(--burgundy-2),var(--burgundy))] shadow-[0_30px_90px_rgba(42,27,27,.24)] before:absolute before:inset-0 before:bg-[linear-gradient(145deg,transparent_49%,rgba(255,255,255,.08)_50%,transparent_51%)] after:absolute after:inset-0 after:-scale-x-100 after:bg-[linear-gradient(145deg,transparent_49%,rgba(255,255,255,.08)_50%,transparent_51%)]"
        />
      </motion.div>

      <motion.p
        className="absolute bottom-[26px] left-1/2 -translate-x-1/2 text-[0.72rem] font-extrabold uppercase tracking-[0.3em] text-burgundy/70"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        {COPY.intro.scrollCue}
      </motion.p>
    </section>
  );
}
