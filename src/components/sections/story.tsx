import { Doodle } from "@/components/common/doodle";
import { PhotoPlaceholder } from "@/components/common/photo-placeholder";
import { Reveal } from "@/components/common/reveal";
import { Section, SectionContainer } from "@/components/common/section";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography";
import { COPY, IMAGES } from "@/lib/constants";

/** "Nuestra historia": collage de fotos + bajada personal. */
export function Story() {
  return (
    <Section aria-labelledby="historia-title">
      <Doodle variant="heart-leaf" position="tl" rotation={-8} className="text-burgundy" />
      <SectionContainer>
        <Reveal className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(28px,5vw,70px)] text-left max-[860px]:grid-cols-1 max-[860px]:text-center">
          <div
            className="relative min-h-[540px] max-[860px]:min-h-[440px]"
            aria-label="Espacios para fotografías de Vale y Jorge"
          >
            <PhotoPlaceholder
              src={IMAGES.storyLarge}
              alt="Vale y Jorge"
              label={
                <>
                  Foto vertical de ustedes
                  <br />
                  ideal 4:5
                </>
              }
              className="absolute left-0 top-[34px] h-[430px] min-h-0 w-[73%] -rotate-[2.5deg] max-[860px]:h-[340px] max-[860px]:w-[78%]"
            />
            <PhotoPlaceholder
              src={IMAGES.storySmall}
              alt="Detalle de Vale y Jorge"
              label={
                <>
                  Detalle o foto espontánea
                  <br />
                  ideal 3:4
                </>
              }
              className="absolute bottom-0 right-0 h-[300px] min-h-0 w-[48%] rotate-[4deg] bg-[linear-gradient(145deg,rgba(104,116,58,.34),rgba(255,249,238,.86)),repeating-linear-gradient(-45deg,rgba(75,15,24,.08)_0_1px,transparent_1px_12px)] max-[860px]:h-[230px] max-[860px]:w-[54%]"
            />
          </div>
          <div>
            <Eyebrow>{COPY.story.eyebrow}</Eyebrow>
            <SectionTitle id="historia-title">{COPY.story.title}</SectionTitle>
            <Lead className="mx-0 max-[860px]:mx-auto">{COPY.story.lead}</Lead>
          </div>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
