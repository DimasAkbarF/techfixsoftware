import { CheckCircle2 } from "lucide-react";

export function PreparationChecklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
          <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}