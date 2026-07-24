import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/legacy", label: "Legacy" },
  { to: "/gallery", label: "Gallery" },
  { to: "/chef", label: "Chef" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 transition-all duration-500",
          scrolled
            ? "glass rounded-full border border-primary/20 py-2 shadow-soft mx-3 lg:mx-auto"
            : "py-3",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/book"
            className="hidden rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-[oklch(0.2_0.02_150)] shadow-soft transition hover:brightness-105 md:inline-flex"
          >
            Book Venue
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="mx-4 mt-2 rounded-3xl border border-primary/20 bg-background/95 p-6 shadow-luxe backdrop-blur">
              <nav className="flex flex-col divide-y divide-border/60">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="py-3 font-display text-lg"
                    activeProps={{ className: "text-primary" }}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <Link
                to="/book"
                className="mt-4 block rounded-full gradient-gold py-3 text-center text-sm font-semibold text-[oklch(0.2_0.02_150)]"
              >
                Book Venue
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
