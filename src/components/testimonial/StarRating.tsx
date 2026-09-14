import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} dari 5 bintang`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}