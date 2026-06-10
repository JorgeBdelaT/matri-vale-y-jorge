import { cn } from "@/lib/utils.util";

export type DoodleVariant =
  | "branch"
  | "bird"
  | "calendar"
  | "heart-leaf"
  | "flower"
  | "candle"
  | "camera"
  | "dress"
  | "envelope"
  | "music"
  | "gift";

export type DoodlePosition = "tl" | "tr" | "bl" | "br";

const DOODLES: Record<DoodleVariant, React.ReactNode> = {
  branch: (
    <>
      <path d="M16 78 C28 48, 50 24, 78 18 C93 15, 106 22, 104 36 C102 56, 72 62, 50 54 C74 42, 82 28, 72 20" />
      <path d="M22 88 C46 76, 67 74, 95 84" />
      <path d="M40 76 C34 96, 26 105, 18 111" />
      <path d="M50 80 C56 98, 68 107, 84 112" />
    </>
  ),
  bird: (
    <>
      <path d="M30 64 C44 36, 79 38, 92 64 C100 81, 86 98, 62 98 C38 98, 21 82, 30 64Z" />
      <path d="M46 61 C52 52, 70 52, 76 61" />
      <path d="M54 62 C52 73, 68 75, 66 62" />
      <path d="M46 98 L42 110 M78 98 L82 110" />
    </>
  ),
  calendar: (
    <>
      <path d="M34 22 H88 C94 22 98 26 98 32 V92 C98 98 94 102 88 102 H34 C28 102 24 98 24 92 V32 C24 26 28 22 34 22Z" />
      <path d="M38 22 V14 M56 22 V14 M74 22 V14 M92 22 V14" />
      <path d="M38 48 C48 38, 73 38, 84 48" />
      <path d="M42 64 H82 M42 78 H72" />
    </>
  ),
  "heart-leaf": (
    <>
      <path d="M24 68 C22 42, 44 26, 62 42 C75 24, 102 36, 94 62 C86 88, 58 98, 42 102 C34 91, 26 82, 24 68Z" />
      <path d="M38 54 C48 46, 60 46, 70 54" />
      <path d="M36 74 C50 82, 70 82, 84 72" />
    </>
  ),
  flower: (
    <>
      <path d="M34 82 C20 58, 39 32, 62 42 C75 20, 106 36, 94 66 C84 92, 56 100, 40 106" />
      <path d="M29 52 C20 42, 20 30, 30 22 M89 40 C104 34, 112 38, 116 50" />
      <path d="M50 84 C60 74, 70 78, 76 88" />
    </>
  ),
  candle: (
    <>
      <path d="M50 18 C38 40, 44 58, 61 70 C79 58, 84 40, 72 18" />
      <path d="M61 70 V104" />
      <path d="M48 104 H74" />
      <path d="M40 34 H82" />
      <path d="M32 70 C42 78, 54 78, 61 70 C68 78, 82 78, 92 70" />
    </>
  ),
  camera: (
    <>
      <rect x="26" y="34" width="68" height="50" rx="6" />
      <circle cx="60" cy="59" r="13" />
      <path d="M78 34 L86 24 H98 L100 34" />
      <path d="M34 47 H50" />
      <path d="M38 94 C54 84, 72 84, 88 94" />
    </>
  ),
  dress: (
    <>
      <path d="M38 22 C30 34, 32 52, 46 60 C34 70, 30 92, 46 102 C58 92, 58 72, 54 60 C64 50, 66 32, 54 22Z" />
      <path d="M66 22 C58 34, 60 52, 74 60 C62 70, 58 92, 74 102 C86 92, 86 72, 82 60 C92 50, 94 32, 82 22Z" />
      <path d="M43 62 C50 68, 58 68, 65 62" />
    </>
  ),
  envelope: (
    <>
      <path d="M18 42 L60 72 L102 42" />
      <path d="M18 42 H102 V94 H18 Z" />
      <path d="M18 94 L48 66 M102 94 L72 66" />
      <path d="M45 33 C48 24, 60 25, 60 36 C62 25, 76 24, 78 34 C80 48, 61 56, 60 58 C58 56, 42 48, 45 33Z" />
    </>
  ),
  music: (
    <>
      <path d="M40 98 V30 L84 22 V82" />
      <circle cx="32" cy="98" r="13" />
      <circle cx="76" cy="82" r="13" />
      <path d="M40 44 L84 36" />
      <path d="M24 42 C18 32, 20 24, 30 18 M92 50 C104 42, 108 32, 102 22" />
    </>
  ),
  gift: (
    <>
      <path d="M24 54 H96 V102 H24 Z" />
      <path d="M18 42 H102 V56 H18 Z" />
      <path d="M60 42 V102" />
      <path d="M60 42 C48 32, 36 28, 32 36 C28 46, 45 48, 60 42Z" />
      <path d="M60 42 C72 32, 84 28, 88 36 C92 46, 75 48, 60 42Z" />
    </>
  ),
};

const positionClasses: Record<DoodlePosition, string> = {
  tl: "left-[max(18px,6vw)] top-10",
  tr: "right-[max(18px,6vw)] top-[58px] max-[540px]:hidden",
  bl: "left-[max(18px,7vw)] bottom-11 max-[540px]:hidden",
  br: "right-[max(18px,7vw)] bottom-11",
};

interface DoodleProps {
  variant: DoodleVariant;
  position: DoodlePosition;
  rotation?: number;
  className?: string;
}

/**
 * Ilustración decorativa estilo "mano alzada". Siempre oculta para
 * lectores de pantalla.
 */
export function Doodle({ variant, position, rotation = 0, className }: DoodleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-[1] w-[clamp(84px,15vw,170px)] opacity-[0.18] max-[860px]:opacity-[0.12]",
        positionClasses[position],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg
        viewBox="0 0 120 120"
        className="block h-auto w-full overflow-visible fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3] [&_*]:[vector-effect:non-scaling-stroke]"
      >
        {DOODLES[variant]}
      </svg>
    </div>
  );
}
