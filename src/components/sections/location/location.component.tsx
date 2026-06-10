import { CtaButton } from "@/components/common/cta-button/cta-button.component";
import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, VENUE } from "@/lib/constants.const";

/** Ubicación del evento con enlace y mapa embebido de Google Maps. */
export function Location() {
  return (
    <Section variant="olive" center aria-labelledby="ubicacion-title">
      <Doodle variant="camera" position="tl" rotation={-7} className="opacity-[0.23]" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.location.eyebrow}</Eyebrow>
          <SectionTitle id="ubicacion-title">{VENUE.name}</SectionTitle>
          <Lead>{VENUE.address}.</Lead>
          <CtaButton variant="light" href={VENUE.mapsUrl}>
            {COPY.location.cta}
          </CtaButton>
          <div className="mx-auto mt-[46px] w-full max-w-[900px] overflow-hidden rounded-[32px] border border-paper/25 bg-paper/15 shadow-[0_26px_76px_rgba(0,0,0,.18)]">
            <iframe
              title={`Mapa de ${VENUE.name}`}
              src={VENUE.mapsEmbedUrl}
              loading="lazy"
              className="block h-[450px] w-full border-0 max-[540px]:h-[350px]"
            />
          </div>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
