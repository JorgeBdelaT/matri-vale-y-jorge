import { CtaButton } from "@/components/common/cta-button";
import { Doodle } from "@/components/common/doodle";
import { PhotoPlaceholder } from "@/components/common/photo-placeholder";
import { Reveal } from "@/components/common/reveal";
import { Section, SectionContainer } from "@/components/common/section";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography";
import { COPY, IMAGES, VENUE } from "@/lib/constants";

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
          <PhotoPlaceholder
            src={IMAGES.venue}
            alt={`Fotografía de ${VENUE.name}`}
            onDark
            label={
              <>
                Espacio para foto horizontal del lugar o de ustedes
                <br />
                ideal 16:9
              </>
            }
            className="mx-auto mt-[54px] max-w-[860px]"
          />
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
