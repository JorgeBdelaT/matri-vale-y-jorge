import { COPY, COUPLE, IMAGES } from "@/lib/constants.const";

/** Cierre de la invitación. */
export function SiteFooter() {
  return (
    <footer className="texture relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-burgundy px-[22px] py-24 text-center text-paper">
      {IMAGES.footer && (
        <>
          <div
            aria-hidden="true"
            className="absolute -inset-6 z-0 scale-[1.06] bg-cover bg-top blur-[1px]"
            style={{ backgroundImage: `url(${IMAGES.footer})` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-gradient-to-b from-burgundy/[.68] to-burgundy/[.78]"
          />
        </>
      )}
      <div className="relative z-[2]">
        <p className="mb-8 text-[clamp(0.85rem,1.8vw,1rem)] uppercase tracking-[0.28em] opacity-70">
          Te esperamos!
        </p>
        <p className="font-serif text-[clamp(4rem,10vw,7rem)] font-light italic leading-none tracking-[-0.06em]">
          {COUPLE.displayName}
        </p>
        <p className="mt-3.5 text-[0.78rem] uppercase tracking-[0.18em] opacity-80">
          {COPY.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
