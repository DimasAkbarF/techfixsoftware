import { AlertTriangle } from "lucide-react";

export function ImportantNotice({ title, items }: { title: string; items: string[] }) {
  return (
    <aside
      aria-label="Pemberitahuan penting"
      className="rounded-lg border border-warning/30 bg-warning/5 p-6"
    >
      <h3 className="flex items-center gap-2 text-base font-semibold text-warning">
        <AlertTriangle className="size-5" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-warning" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}