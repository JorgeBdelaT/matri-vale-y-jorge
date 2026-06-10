import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "mb-[18px] text-[0.74rem] font-extrabold uppercase tracking-[0.38em]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

interface SectionTitleProps extends React.ComponentPropsWithoutRef<"h2"> {
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({
  as: Tag = "h2",
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-serif text-[clamp(3.6rem,9vw,7rem)] font-normal italic leading-[0.88] tracking-[-0.045em]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function DisplayTitle({
  as: Tag = "h2",
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-serif text-[clamp(4.7rem,15vw,10rem)] font-light italic leading-[0.82] tracking-[-0.07em]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "mx-auto mt-6 max-w-[720px] text-[clamp(1rem,2vw,1.18rem)] font-light leading-[1.85]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
