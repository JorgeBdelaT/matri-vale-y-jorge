import { CopyCode } from "@/components/common/copy-code/copy-code.component";
import { CtaButton } from "@/components/common/cta-button/cta-button.component";
import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { Section, SectionContainer } from "@/components/common/section/section.component";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography/typography.component";
import { COPY, GIFT_LIST, LINKS } from "@/lib/constants.const";

/** Lista de novios con el código y enlace a la tienda. */
export function GiftList() {
  return (
    <Section variant="olive" center aria-labelledby="regalos-title">
      <Doodle variant="gift" position="tl" rotation={-12} scale={0.85} className="opacity-[0.23]" />
      <Doodle variant="gift" position="tr" rotation={14} scale={1.1} className="opacity-[0.23]" />
      <Doodle variant="gift" position="bl" rotation={9} scale={0.95} className="opacity-[0.23]" />
      <Doodle variant="gift" position="br" rotation={-8} scale={1.15} className="opacity-[0.23]" />
      <Doodle
        variant="gift"
        position="tl"
        rotation={20}
        scale={0.7}
        className="left-[max(18px,38vw)] top-[clamp(14px,7vw,48px)] opacity-[0.23]"
      />
      <Doodle
        variant="gift"
        position="br"
        rotation={-18}
        scale={0.75}
        className="bottom-auto right-[max(18px,40vw)] top-[clamp(14px,7vw,48px)] opacity-[0.23]"
      />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.gifts.eyebrow}</Eyebrow>
          <SectionTitle id="regalos-title">{COPY.gifts.title}</SectionTitle>
          <Lead>{COPY.gifts.lead}</Lead>
          <CopyCode
            label={COPY.gifts.codeLabel}
            code={GIFT_LIST.code}
            hint={COPY.gifts.copyHint}
            copiedMessage={COPY.gifts.copiedMessage}
            className="mt-10"
          />
          <CtaButton variant="light" href={LINKS.giftList}>
            {COPY.gifts.cta}
          </CtaButton>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
