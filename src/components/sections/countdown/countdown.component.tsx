"use client";

import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { useCountdown } from "@/hooks/use-countdown.hook";
import { COPY, WEDDING } from "@/lib/constants.const";

const UNITS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
] as const;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

/** Cuenta regresiva en vivo hacia el inicio del matrimonio. */
export function Countdown() {
  const countdown = useCountdown(WEDDING.startDateISO);

  return (
    <Section variant="burgundy" center aria-label="Cuenta regresiva">
      <Doodle variant="flower" position="br" rotation={12} className="opacity-[0.23]" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.countdown.eyebrow}</Eyebrow>
          <SectionTitle>{COPY.countdown.title}</SectionTitle>
          <Lead>
            {countdown?.isPast ? "¡Llegó el gran día!" : COPY.countdown.lead}
          </Lead>
          <div
            className="mx-auto mt-[52px] grid max-w-[800px] grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[540px]:grid-cols-1"
            role="list"
            aria-live="off"
          >
            {UNITS.map(({ key, label }) => (
              <div
                key={key}
                role="listitem"
                className="rounded-[28px] border border-paper/20 bg-paper/10 px-4 py-7"
              >
                <strong className="block font-serif text-[clamp(3rem,8vw,5.2rem)] font-light leading-[0.9] tabular-nums">
                  {countdown ? pad(countdown[key]) : "··"}
                </strong>
                <span className="mt-3 block text-[0.72rem] font-extrabold uppercase tracking-[0.22em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
