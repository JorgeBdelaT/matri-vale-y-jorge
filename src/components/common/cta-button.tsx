import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CtaVariant = "light" | "dark" | "outline";

const variantClasses: Record<CtaVariant, string> = {
  light: "border-paper bg-paper text-burgundy hover:bg-paper",
  dark: "border-burgundy bg-burgundy text-paper hover:bg-burgundy",
  outline: "border-current bg-transparent text-current hover:bg-transparent",
};

interface CtaButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: CtaVariant;
  href: string;
}

/**
 * Botón-enlace tipo píldora para llamados a la acción externos
 * (formulario, mapa, playlist, lista de novios).
 */
export function CtaButton({
  variant = "dark",
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "mt-[34px] inline-flex h-auto min-h-[52px] gap-2.5 rounded-full border px-[30px] py-4 text-[0.76rem] font-extrabold uppercase tracking-[0.18em] no-underline transition-[transform,background-color,color,border-color] duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        variantClasses[variant],
        className
      )}
    >
      <a target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    </Button>
  );
}
