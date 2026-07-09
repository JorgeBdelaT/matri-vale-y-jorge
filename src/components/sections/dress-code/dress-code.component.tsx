import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, DRESS_CODE, type DressCodeSwatch } from "@/lib/constants.const";
import { cn } from "@/lib/utils.util";

/** Muestra de color a evitar. `h-full` la iguala en la cuadrícula. */
function SwatchCard({ swatch }: { swatch: DressCodeSwatch }) {
  return (
    <div
      className={cn(
        "grid h-full min-h-[146px] grid-rows-[1fr_auto] place-items-center overflow-hidden rounded-[28px] px-3 pb-4 pt-1 shadow-[0_20px_60px_rgba(42,27,27,.13)] max-[540px]:shadow-none",
        swatch.className
      )}
    >
      <span aria-hidden="true" className="text-[3.6rem] font-extralight leading-none opacity-25">
        ×
      </span>
      <span className="rounded-full bg-paper/70 px-3 py-[7px] text-[0.72rem] font-black uppercase tracking-[0.18em] text-ink">
        {swatch.label}
      </span>
    </div>
  );
}

/** Código de vestimenta y colores a evitar. */
export function DressCode() {
  return (
    <Section center aria-labelledby="dress-title">
      <Doodle variant="dress" position="br" rotation={-10} className="text-burgundy" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.dressCode.eyebrow}</Eyebrow>
          <SectionTitle id="dress-title">{COPY.dressCode.title}</SectionTitle>
          {DRESS_CODE.leads.map(({ noteBefore, noteEmphasis, noteAfter }, i) => (
            <Lead key={i}>
              {noteBefore}
              <span className="font-bold">{noteEmphasis}</span>
              {noteAfter}
            </Lead>
          ))}
          {/* Cuadrícula: 4 columnas en escritorio, 2×2 en tablet y móvil. */}
          <ul
            className="mx-auto mt-12 grid max-w-[780px] list-none grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[540px]:grid-cols-2"
            aria-label="Colores que se deben evitar"
          >
            {DRESS_CODE.avoid.map((swatch) => (
              <li key={swatch.label} className="h-full">
                <SwatchCard swatch={swatch} />
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
