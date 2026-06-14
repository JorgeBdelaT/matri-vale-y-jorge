import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, DRESS_CODE } from "@/lib/constants.const";
import { cn } from "@/lib/utils.util";

/** Código de vestimenta y colores a evitar. */
export function DressCode() {
  return (
    <Section center aria-labelledby="dress-title">
      <Doodle variant="dress" position="br" rotation={-10} className="text-burgundy" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.dressCode.eyebrow}</Eyebrow>
          <SectionTitle id="dress-title">{COPY.dressCode.title}</SectionTitle>
          <Lead>
            {DRESS_CODE.noteBefore}
            <span className="font-bold">{DRESS_CODE.noteEmphasis}</span>
            {DRESS_CODE.noteAfter}
          </Lead>
          <ul
            className="mx-auto mt-12 grid max-w-[780px] list-none grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[540px]:grid-cols-1"
            aria-label="Colores que se deben evitar"
          >
            {DRESS_CODE.avoid.map((swatch) => (
              <li
                key={swatch.label}
                className={cn(
                  "grid min-h-[146px] grid-rows-[1fr_auto] place-items-center overflow-hidden rounded-[28px] px-3 pb-4 pt-1 shadow-[0_20px_60px_rgba(42,27,27,.13)]",
                  swatch.className
                )}
              >
                <span
                  aria-hidden="true"
                  className="text-[3.6rem] font-extralight leading-none opacity-25"
                >
                  ×
                </span>
                <span className="rounded-full bg-paper/70 px-3 py-[7px] text-[0.72rem] font-black uppercase tracking-[0.18em] text-ink">
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
