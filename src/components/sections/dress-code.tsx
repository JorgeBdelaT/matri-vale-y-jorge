import { Doodle } from "@/components/common/doodle";
import { Reveal } from "@/components/common/reveal";
import { Section, SectionContainer } from "@/components/common/section";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography";
import { COPY, DRESS_CODE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Código de vestimenta y colores a evitar. */
export function DressCode() {
  return (
    <Section center aria-labelledby="dress-title">
      <Doodle variant="dress" position="br" rotation={-10} className="text-burgundy" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.dressCode.eyebrow}</Eyebrow>
          <SectionTitle id="dress-title">{COPY.dressCode.title}</SectionTitle>
          <Lead>{DRESS_CODE.note}</Lead>
          <ul
            className="mx-auto mt-12 grid max-w-[780px] list-none grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[540px]:grid-cols-1"
            aria-label="Colores que se deben evitar"
          >
            {DRESS_CODE.avoid.map((swatch) => (
              <li
                key={swatch.label}
                className={cn(
                  "relative grid min-h-[146px] place-items-center overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(42,27,27,.13)]",
                  "after:absolute after:inset-0 after:grid after:place-items-center after:text-[5.5rem] after:font-extralight after:opacity-20 after:content-['×']",
                  swatch.className
                )}
              >
                <span className="relative z-[2] rounded-full bg-paper/70 px-3 py-[7px] text-[0.72rem] font-black uppercase tracking-[0.18em] text-ink">
                  {swatch.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
