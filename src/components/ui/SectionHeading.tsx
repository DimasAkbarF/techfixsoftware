import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        "mb-8 max-w-3xl md:mb-10",
        align === "center" && "mx-auto",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-foreground sm:text-3xl md:text-4xl text-balance">
        {title}
      </Heading>
      {description ? (
        <p className="mt-3 max-w-[65ch] text-[17px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 container-page", className)}
    >
      {children}
    </section>
  );
}
