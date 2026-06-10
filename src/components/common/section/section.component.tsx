import { cn } from "@/lib/utils.util";

export type SectionVariant = "paper" | "burgundy" | "olive";

const variantClasses: Record<SectionVariant, string> = {
  paper: "bg-ivory text-ink texture texture-paper",
  burgundy: "bg-burgundy text-paper texture",
  olive: "bg-olive text-paper texture",
};

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  variant?: SectionVariant;
  center?: boolean;
}

/**
 * Banda de página con textura de papel. Aísla su propio stacking context
 * para que las texturas (::before/::after) queden detrás del contenido.
 */
export function Section({
  variant = "paper",
  center = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-[22px] py-[clamp(76px,10vw,136px)] max-[540px]:px-[18px] max-[540px]:py-[72px]",
        variantClasses[variant],
        center && "text-center",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionContainer({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("relative z-[3] mx-auto w-full max-w-[1080px]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
