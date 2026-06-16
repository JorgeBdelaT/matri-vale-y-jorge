import { CtaButton } from "@/components/common/cta-button/cta-button.component";
import { Doodle } from "@/components/common/doodle/doodle.component";
import { PhotoPlaceholder } from "@/components/common/photo-placeholder/photo-placeholder.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, IMAGES, LINKS } from "@/lib/constants.const";

/** Confirmación de asistencia: abre el formulario de Google. */
export function Rsvp() {
  return (
    <Section variant="burgundy" center aria-labelledby="rsvp-title">
      <Doodle variant="envelope" position="tl" rotation={6} className="opacity-[0.23]" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.rsvp.eyebrow}</Eyebrow>
          <SectionTitle id="rsvp-title">{COPY.rsvp.title}</SectionTitle>
          <Lead>
            {COPY.rsvp.lead.noteBefore}
            <span className="font-bold">{COPY.rsvp.lead.noteEmphasis}</span>
          </Lead>
          <CtaButton variant="light" href={LINKS.rsvpForm}>
            {COPY.rsvp.cta}
          </CtaButton>
          <div
            className="mt-[58px] grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1"
            aria-label="Espacios para fotografías de los novios"
          >
            {IMAGES.rsvpStrip.map((src, index) => (
              <PhotoPlaceholder
                key={index}
                src={src}
                alt={`Fotografía ${index + 1} de Vale y Jorge`}
                onDark
                label={`Foto ${index + 1}`}
                className="min-h-[260px]"
              />
            ))}
          </div>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
