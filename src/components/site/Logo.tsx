import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-cream" : "text-foreground";
  return (
    <Link to="/" className={`group flex items-center gap-2 ${color}`}>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/60">
        <span className="font-display text-lg text-gradient-gold">HN</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-wide">Hotel Nanjundeshwara</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Est. 1968</span>
      </span>
    </Link>
  );
}
