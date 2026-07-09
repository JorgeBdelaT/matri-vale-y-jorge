import { Button } from "@/components/ui/button/button.component";
import { cn } from "@/lib/utils.util";

export type CtaVariant = "light" | "dark" | "outline";
export type CtaSize = "md" | "sm";

const variantClasses: Record<CtaVariant, string> = {
  light:
    "border-paper bg-paper text-burgundy shadow-[0_14px_40px_rgba(0,0,0,.28)] hover:bg-paper hover:shadow-[0_20px_50px_rgba(0,0,0,.36)]",
  dark: "border-burgundy bg-burgundy text-paper shadow-[0_14px_40px_rgba(75,15,24,.32)] hover:bg-burgundy hover:shadow-[0_20px_50px_rgba(75,15,24,.42)]",
  outline: "border-current bg-transparent text-current hover:bg-transparent",
};

const sizeClasses: Record<CtaSize, string> = {
  md: "min-h-[60px] px-10 py-[18px] text-[0.85rem]",
  sm: "min-h-[46px] px-7 py-3 text-[0.72rem]",
};

interface CtaButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: CtaVariant;
  size?: CtaSize;
  href: string;
}

/**
 * Botón-enlace tipo píldora para llamados a la acción externos
 * (formulario, mapa, playlist, lista de novios).
 */
export function CtaButton({
  variant = "dark",
  size = "md",
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "mt-[34px] inline-flex h-auto animate-cta-float gap-2.5 rounded-full border font-extrabold uppercase tracking-[0.18em] no-underline transition-[background-color,color,border-color,box-shadow,scale] duration-300 ease-out hover:scale-105 active:scale-95 active:duration-100 motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
        sizeClasses[size],
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
