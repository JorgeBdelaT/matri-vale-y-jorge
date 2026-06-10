import { CtaButton } from "@/components/common/cta-button";
import { Doodle } from "@/components/common/doodle";
import { Reveal } from "@/components/common/reveal";
import { Section, SectionContainer } from "@/components/common/section";
import { Eyebrow, Lead, SectionTitle } from "@/components/common/typography";
import { COPY, GIFT_LIST, LINKS } from "@/lib/constants";

/** Lista de novios con el código y enlace a la tienda. */
export function GiftList() {
  return (
    <Section variant="olive" center aria-labelledby="regalos-title">
      <Doodle variant="gift" position="br" rotation={8} className="opacity-[0.23]" />
      <SectionContainer>
        <Reveal>
          <Eyebrow>{COPY.gifts.eyebrow}</Eyebrow>
          <SectionTitle id="regalos-title">{COPY.gifts.title}</SectionTitle>
          <Lead>{COPY.gifts.lead}</Lead>
          <div className="mx-auto mt-10 w-full max-w-[330px] rounded-[30px] border border-paper/30 bg-paper/10 px-6 py-7">
            <small className="mb-2.5 block text-[0.72rem] font-extrabold uppercase tracking-[0.22em]">
              {COPY.gifts.codeLabel}
            </small>
            <strong className="font-serif text-[3.4rem] font-normal">
              {GIFT_LIST.code}
            </strong>
          </div>
          <CtaButton variant="light" href={LINKS.giftList}>
            {COPY.gifts.cta}
          </CtaButton>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}
