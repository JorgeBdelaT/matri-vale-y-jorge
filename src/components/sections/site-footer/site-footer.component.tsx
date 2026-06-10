import { COPY, COUPLE } from "@/lib/constants.const";

/** Cierre de la invitación. */
export function SiteFooter() {
  return (
    <footer className="texture relative isolate overflow-hidden bg-burgundy px-[22px] py-[90px] text-center text-paper">
      <p className="font-serif text-[clamp(4rem,10vw,7rem)] font-light italic leading-none tracking-[-0.06em]">
        {COUPLE.displayName}
      </p>
      <p className="mt-3.5 text-[0.78rem] uppercase tracking-[0.18em] opacity-80">
        {COPY.footer.tagline}
      </p>
    </footer>
  );
}
