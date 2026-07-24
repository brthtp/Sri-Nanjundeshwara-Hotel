import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.18_0.03_155)] text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm text-cream/70">
            A timeless Michelin-star destination — European craft, seasonal ingredients, unforgettable evenings.
          </p>
          <div className="flex gap-3 pt-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary/40 text-primary transition hover:bg-primary hover:text-[oklch(0.2_0.02_150)]"
                aria-label="Social"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {[["Menu","/menu"],["About","/about"],["Our Legacy","/legacy"],["Gallery","/gallery"],["Head Chef","/chef"]].map(([l,h]) => (
              <li key={h}><Link to={h} className="hover:text-primary">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Visit</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>12 Rue de l'Élégance</li>
            <li>Paris, 75008</li>
            <li>+33 (0)1 42 68 84 00</li>
            <li>reservations@maisonverde.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">La Gazette</h4>
          <p className="mt-4 text-sm text-cream/70">
            Chef's letters, seasonal menus, and private evenings — delivered monthly.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-full border border-primary/40">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-cream/50"
            />
            <button className="gradient-gold px-5 text-sm font-semibold text-[oklch(0.2_0.02_150)]">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/60 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Maison Verdé. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase text-primary/80">Est. MCMLXVIII</p>
        </div>
      </div>
    </footer>
  );
}
