export function ProcessTimeline({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <li key={index} className="relative flex gap-4 pb-6 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-border"
              aria-hidden="true"
            />
          ) : null}
          <span
            className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <p className="pt-1.5 text-sm leading-relaxed text-foreground md:text-base">
            {step}
          </p>
        </li>
      ))}
    </ol>
  );
}