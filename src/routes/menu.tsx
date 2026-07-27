import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { CATEGORIES, MENU } from "@/data/menu";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Sri Nanjundeshwara Hotel " },
      { name: "description", content: "Explore Sri Nanjundeshwara Hotel 's seasonal tasting menu — starters, mains, seafood, vegetarian, desserts and rare beverages." },
      { property: "og:title", content: "The Menu — Sri Nanjundeshwara Hotel " },
      { property: "og:description", content: "A seasonal Michelin-star menu, updated by Chef Laurent Verdé." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState(CATEGORIES[0]);
  const items = MENU[cat];

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader
          eyebrow="Our Menu"
          title="A seasonal Michelin menu"
          subtitle="Chef Laurent's tasting evolves with the harvest. Each plate is guided by memory, precision, and restraint."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2.5 text-sm transition ${
                cat === c
                  ? "bg-secondary text-secondary-foreground shadow-soft"
                  : "border border-border bg-card text-foreground/70 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((it, i) => (
              <motion.article
                key={it.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group hover-lift overflow-hidden rounded-3xl bg-card shadow-soft"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={it.image} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
                  {it.special && (
                    <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[oklch(0.2_0.02_150)]">
                      <Star size={11} fill="currentColor" /> Chef's Special
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl">{it.name}</h3>
                    <span className="font-display text-lg text-primary">{it.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
