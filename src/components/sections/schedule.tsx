import { Doodle } from "@/components/common/doodle";
import { Reveal } from "@/components/common/reveal";
import { Section, SectionContainer } from "@/components/common/section";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography";
import { COPY, TIMELINE, WEDDING } from "@/lib/constants";

/** Fecha, horario e itinerario del evento. */
export function Schedule() {
  return (
    <Section center aria-labelledby="fecha-title">
      <Doodle variant="candle" position="tr" rotation={8} className="text-burgundy" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.schedule.eyebrow}</Eyebrow>
          <SectionTitle id="fecha-title">{COPY.schedule.title}</SectionTitle>
          <Lead>
            {WEDDING.dateLongLabel}, {WEDDING.timeLabel}.
          </Lead>
          <ol
            className="mx-auto mt-[54px] grid max-w-[920px] list-none grid-cols-4 gap-3.5 max-[860px]:grid-cols-2 max-[540px]:grid-cols-1"
            aria-label="Itinerario del evento"
          >
            {TIMELINE.map((item) => (
              <li
                key={item.time}
                className="rounded-[30px] border border-burgundy/15 bg-paper/50 px-[18px] py-[30px]"
              >
                <div className="font-serif text-[2.5rem] italic text-burgundy">
                  {item.time}
                </div>
                <div aria-hidden="true" className="my-3 text-olive">
                  {item.icon}
                </div>
                <div className="text-[0.78rem] font-extrabold uppercase leading-normal tracking-[0.15em]">
                  {item.label}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
