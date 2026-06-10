import Image from "next/image";

import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  /** Ruta dentro de /public. Si existe, se muestra la foto real. */
  src?: string | null;
  alt?: string;
  /** Texto guía mientras no hay foto. */
  label: React.ReactNode;
  /** Estilo para bandas oscuras (burdeo/oliva). */
  onDark?: boolean;
  className?: string;
}

/**
 * Marco editorial para fotografías. Mientras no exista la foto real,
 * muestra un marco punteado con una etiqueta guía.
 */
export function PhotoPlaceholder({
  src,
  alt = "",
  label,
  onDark = false,
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative grid min-h-[400px] w-full place-items-center overflow-hidden rounded-[34px] border max-[540px]:min-h-[290px]",
        onDark
          ? "border-paper/25 bg-[linear-gradient(145deg,rgba(255,249,238,.12),rgba(255,249,238,.05)),repeating-linear-gradient(45deg,rgba(255,249,238,.12)_0_1px,transparent_1px_12px)] text-paper/80 shadow-[0_24px_70px_rgba(0,0,0,.16)]"
          : "border-burgundy/15 bg-[linear-gradient(145deg,rgba(255,249,238,.88),rgba(232,182,170,.44)),repeating-linear-gradient(45deg,rgba(75,15,24,.08)_0_1px,transparent_1px_12px)] text-burgundy/70 shadow-[0_24px_70px_rgba(42,27,27,.16)]",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className="object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-4 rounded-[24px] border border-dashed",
              onDark ? "border-paper/30" : "border-burgundy/30"
            )}
          />
          <p className="w-[78%] text-center text-[0.72rem] font-extrabold uppercase leading-[1.8] tracking-[0.18em]">
            {label}
          </p>
        </>
      )}
    </div>
  );
}
