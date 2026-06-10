import { CtaButton } from "@/components/common/cta-button/cta-button.component";
import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, LINKS } from "@/lib/constants.const";

/** Playlist colaborativa de Spotify con CTA para agregar canciones. */
export function Playlist() {
  return (
    <Section center aria-labelledby="musica-title">
      <Doodle variant="music" position="tr" rotation={-8} className="text-burgundy" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.playlist.eyebrow}</Eyebrow>
          <SectionTitle id="musica-title">{COPY.playlist.title}</SectionTitle>
          <Lead>{COPY.playlist.lead}</Lead>
          <CtaButton variant="dark" href={LINKS.spotifyPlaylist}>
            {COPY.playlist.cta}
          </CtaButton>
          <div className="mx-auto mt-[46px] w-full max-w-[900px] overflow-hidden rounded-[32px] border border-burgundy/15 shadow-[0_26px_76px_rgba(0,0,0,.18)]">
            <iframe
              title="Playlist de Spotify del matrimonio"
              src={LINKS.spotifyEmbed}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="block h-[390px] w-full border-0 max-[540px]:h-[360px]"
            />
          </div>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
