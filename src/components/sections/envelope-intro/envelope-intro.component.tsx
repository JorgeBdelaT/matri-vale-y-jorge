"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimate } from "motion/react";

import { Doodle } from "@/components/common/doodle/doodle.component";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion.hook";
import { COPY } from "@/lib/constants.const";

// ── Geometry (all relative to the envelope so it scales on any screen) ───────
// Everything is a fraction of the envelope WIDTH so the scene is responsive.
const ENV_RATIO = 0.56; // envelope height / width — wide, flat real-envelope look
const IMG_RATIO = 1939 / 2836; // card image short / long ≈ 0.684

// Card is narrower than the envelope so it sits inside with margins and, once
// out, the full-width flap stays visible behind/beside it.
const CARD_LONG_FRAC = 0.81; // card long side as a fraction of envelope width
const CARD_W_PCT = IMG_RATIO * CARD_LONG_FRAC * 100; // upright element width, % of envW
const CARD_HALF_W_PCT = CARD_W_PCT / 2;
const CARD_H_FRAC = CARD_LONG_FRAC; // upright element height / envW (≈ long side)
const CARD_MT_PCT = -CARD_H_FRAC * 50; // margin-top to vertically center the element
const CARD_HORIZ_H_FRAC = IMG_RATIO * CARD_LONG_FRAC; // horizontal card height / envW

// `y` is a % of the element's own height (= CARD_H_FRAC × envW), so convert
// envelope-width fractions into that basis.
const yPct = (envWFraction: number) => `${-(envWFraction / CARD_H_FRAC) * 100}%`;
// Lift the horizontal card fully clear of the top edge before it rotates.
const Y_OUT = yPct(ENV_RATIO / 2 + CARD_HORIZ_H_FRAC / 2 + 0.06);
// Presented: upright, zoomed, seated in the open envelope (overlaps its lower half).
const FINAL_SCALE = 1.4;
const Y_FINAL = yPct(0.46);

// Flap open angle: leans back from the top edge so the lip reads as an open lid
// flanking the card (kept under 180 to avoid foreshortening the visible ears).
const FLAP_OPEN_DEG = -140;

// z-index layers. The flap stays IN FRONT through its whole swing (so its open
// animation is never hidden), then drops behind the card right as the card
// emerges. Card is behind the pocket while inside, then on top once out.
const Z = { back: 1, flapOpen: 6, card: 10, pocket: 20, flapClosed: 30, cardTop: 40 };

export function EnvelopeIntro() {
  const reduced = usePrefersReducedMotion();
  const [scope, animate] = useAnimate();
  const flapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Play the opening once on mount. Reduced motion skips it — the inline styles
  // already render the presented (final) state.
  useEffect(() => {
    if (reduced) return;
    const flap = flapRef.current;
    const card = cardRef.current;
    if (!flap || !card) return;

    let cancelled = false;
    let flapZTimer: ReturnType<typeof setTimeout>;
    let cardZTimer: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      if (cancelled) return;

      // Flap swings up. Stays at z=30 (flapClosed) while rotating 0°→ -90° so
      // the viewer sees the full opening sweep with the card behind it.
      animate(
        flap,
        { rotateX: FLAP_OPEN_DEG },
        { duration: 0.6, ease: [0, 0, 0.35, 1] }
      );

      const CARD_DELAY = 0.6;
      const MOVE_DUR = 1.6;
      animate(
        card,
        {
          y: ["0%", Y_OUT, Y_OUT, Y_FINAL],
          rotate: [90, 90, 0, 0],
          scale: [1, 1, 1, FINAL_SCALE],
        },
        { duration: MOVE_DUR, delay: CARD_DELAY, ease: [0.22, 0.61, 0.36, 1], times: [0, 0.4, 0.58, 1] }
      );

      // Flap crosses -90° (vertical axis) at ≈296ms: with ease [0,0,0.35,1]
      // over 140°, reaching 90° (64.3% of travel) happens at ~37% of 800ms.
      // After this the flap is "above" the envelope — drop it behind the card.
      flapZTimer = setTimeout(() => {
        if (!cancelled) flap.style.zIndex = String(Z.flapOpen);
      }, 296);

      // Card jumps in front of everything once fully clear of the envelope (40%
      // into MOVE_DUR = Y_OUT reached).
      cardZTimer = setTimeout(() => {
        if (!cancelled) card.style.zIndex = String(Z.cardTop);
      }, (CARD_DELAY + MOVE_DUR * 0.4) * 1000);
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(start);
      clearTimeout(flapZTimer);
      clearTimeout(cardZTimer);
    };
  }, [reduced, animate]);

  return (
    <section
      aria-label="Apertura de invitación"
      className="texture texture-paper relative isolate grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(232,182,170,.5),transparent_34%),radial-gradient(circle_at_86%_78%,rgba(104,116,58,.34),transparent_34%)] bg-ivory px-[22px] py-16 text-burgundy"
    >
      <Doodle variant="branch" position="tl" rotation={-12} />
      <Doodle variant="bird" position="br" rotation={10} />

      {/* ── Envelope scene (sat lower so the presented card lands centered) ── */}
      <div
        ref={scope}
        className="relative w-[min(420px,88vw)] translate-y-[24vh] [perspective:1200px]"
        style={{ aspectRatio: 1 / ENV_RATIO }}
      >
        {/* Back panel — solid body. Square top so it always covers the top
              corners (a rounded top would leak background once the flap lifts). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] rounded-b-[16px] bg-[linear-gradient(160deg,var(--burgundy-2),var(--burgundy))] shadow-[0_24px_60px_rgba(42,27,27,.28)]"
        />

        {/* Invitation card — narrower than the envelope so the flap shows
              behind it once open; transforms tracked per-prop by Motion. */}
        <motion.div
          ref={cardRef}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 origin-center"
          style={{
            width: `${CARD_W_PCT}%`,
            marginLeft: `${-CARD_HALF_W_PCT}%`,
            marginTop: `${CARD_MT_PCT}%`,
            rotate: reduced ? 0 : 90,
            y: reduced ? Y_FINAL : "0%",
            scale: reduced ? FINAL_SCALE : 1,
            zIndex: reduced ? Z.cardTop : Z.card,
          }}
        >
          <Image
            src="/images/invitation-card.jpg"
            width={1939}
            height={2836}
            alt="Tarjeta de invitación de Vale y Jorge"
            priority
            className="h-auto w-full shadow-[0_24px_70px_rgba(42,27,27,.34)]"
          />
        </motion.div>

        {/* Front pocket — V-notch top (apex 48%) sits well above the flap point
              (58%) so the flap overlaps it generously: no hairline see-through. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[20] rounded-b-[16px] bg-[linear-gradient(165deg,var(--burgundy),var(--burgundy-2))] [clip-path:polygon(0_0,50%_48%,100%_0,100%_100%,0_100%)]"
        />

        {/* Flap — inverted triangle, hinged on its fixed top edge; leans open
              and stays visible behind the card. */}
        <motion.div
          ref={flapRef}
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-[58%] origin-top bg-[linear-gradient(180deg,var(--burgundy-3),var(--dusty-rose))] shadow-[0_8px_22px_rgba(42,27,27,.22)] [clip-path:polygon(0_0,100%_0,50%_100%)] [transform-style:preserve-3d]"
          style={{
            rotateX: reduced ? FLAP_OPEN_DEG : 0,
            zIndex: reduced ? Z.flapOpen : Z.flapClosed,
          }}
        />
      </div>

      {/* Scroll cue — fades in once the invitation is presented. */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduced ? 0 : 2.3, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-7 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-1 text-burgundy/70"
      >
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em]">
          {COPY.intro.scrollCue}
        </span>
        <span aria-hidden="true" className="animate-cta-float text-lg leading-none">
          ⌄
        </span>
      </motion.div>
    </section>
  );
}
