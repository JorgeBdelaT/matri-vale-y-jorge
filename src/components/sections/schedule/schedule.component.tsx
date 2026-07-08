import { Carousel } from "@/components/common/carousel/carousel.component";
import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, TIMELINE, WEDDING } from "@/lib/constants.const";

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
          <Carousel
            mobileOnly
            ariaLabel="Itinerario del evento"
            slideLabelPrefix="Evento"
            desktopGridClassName="grid-cols-5 gap-3.5 max-[860px]:grid-cols-2"
            className="mx-auto mt-[54px] max-w-[920px]"
            slides={TIMELINE.map((item) => (
              <div
                key={item.time}
                className="rounded-[30px] border border-burgundy/15 bg-paper/50 px-[18px] py-[30px]"
              >
                <div aria-hidden="true" className="my-3 text-olive scale-[2.2]">
                  {item.icon}
                </div>
                <div className="font-serif text-[2.5rem] italic text-burgundy">
                  {item.time}
                </div>
                <div className="text-[0.78rem] font-extrabold uppercase leading-normal tracking-[0.15em]">
                  {item.label}
                </div>
              </div>
            ))}
          />
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
