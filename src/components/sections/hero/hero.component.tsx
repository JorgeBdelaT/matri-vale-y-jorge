import { Doodle } from "@/components/common/doodle/doodle.component";
import { Reveal } from "@/components/common/reveal/reveal.component";
import { DisplayTitle, Eyebrow, Lead } from "@/components/common/typography/typography.component";
import { COPY, COUPLE, IMAGES, WEDDING } from "@/lib/constants.const";

/**
 * Portada con los nombres y la fecha sobre un panel translúcido.
 * Si existe IMAGES.hero, se usa como fondo; si no, un degradado burdeo.
 */
export function Hero() {
  return (
    <section
      aria-label="Portada"
      className="relative isolate grid min-h-[96vh] place-items-center overflow-hidden px-[22px] py-[clamp(76px,10vw,136px)] text-paper max-[540px]:min-h-[86vh]"
      style={
        IMAGES.hero
          ? undefined
          : {
            background:
              "linear-gradient(180deg, rgba(75,15,24,.97), rgba(75,15,24,.88)), radial-gradient(circle at 30% 20%, rgba(232,182,170,.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(104,116,58,.55), transparent 45%), #4b0f18",
          }
      }
    >
      {IMAGES.hero && (
        <>
          {/* Capa 1: blur sobre toda la imagen de fondo */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 z-0 scale-[1.06] bg-cover bg-center blur-[1px]"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          {/* Tinte burdeo nítido encima de la imagen difuminada */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-gradient-to-b from-burgundy/[.68] to-burgundy/[.78]"
          />
        </>
      )}
      <Doodle variant="calendar" position="tr" rotation={9} className="z-[2] opacity-[0.23]" />
      <div className="relative z-[3] mx-auto w-full max-w-[1080px]">
        <Reveal className="mx-auto max-w-[860px]">
          <div className="rounded-[46px] border border-paper/30 bg-burgundy/40 px-6 py-[clamp(36px,6vw,76px)] text-center shadow-[0_30px_90px_rgba(42,27,27,.24)] backdrop-blur-[2px] max-[540px]:rounded-[32px]">
            <Eyebrow>{COPY.hero.eyebrow}</Eyebrow>
            <DisplayTitle>{COUPLE.displayName}</DisplayTitle>
            <p className="mt-6 text-[clamp(.95rem,2vw,1.2rem)] uppercase tracking-[0.22em]">
              {WEDDING.dateLongLabel}
            </p>
            <Lead>{COPY.hero.lead}</Lead>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
