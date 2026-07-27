import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import hero from "@/assets/hero.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sri Nanjundeshwara Hotel " },
      { name: "description", content: "A visual journey through Sri Nanjundeshwara Hotel  — interiors, signature dishes, private dining, terrace and events." },
      { property: "og:title", content: "Gallery — Sri Nanjundeshwara Hotel " },
      { property: "og:description", content: "Interiors, dishes and private dining at Sri Nanjundeshwara Hotel ." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: hero, tag: "Interior" },
  { src: dish1, tag: "Signature" },
  { src: gal1, tag: "Private Dining" },
  { src: dish2, tag: "Signature" },
  { src: gal2, tag: "Terrace" },
  { src: gal3, tag: "Sommelier" },
  { src: dish3, tag: "Dessert" },
  { src: gal4, tag: "Grand Salon" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader eyebrow="La Galerie" title="A visual tour of the maison" subtitle="Interiors, plates, private dining, and evenings under Parisian lights." />

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4">
          {IMAGES.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              onClick={() => setOpen(i)}
              className="group mb-4 block w-full overflow-hidden rounded-2xl bg-card shadow-soft"
            >
              <div className="relative">
                <img src={img.src} alt={img.tag} loading="lazy" className="w-full transition duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary opacity-0 transition group-hover:opacity-100">
                  {img.tag}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4 backdrop-blur"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-primary/50 text-cream"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={IMAGES[open].src}
              alt=""
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-luxe"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
