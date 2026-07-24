import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Guest Reviews — Maison Verdé" },
      { name: "description", content: "What guests, critics and press say about a Michelin-star evening at Maison Verdé." },
      { property: "og:title", content: "Guest Reviews — Maison Verdé" },
      { property: "og:description", content: "Praise from critics, press and long-standing guests." },
    ],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { name: "Élodie Rousseau", role: "Le Figaro", text: "A quiet revolution on the plate — technique in service of memory. Maison Verdé is the standard the rest of Paris is quietly measured against.", rating: 5, avatar: "https://i.pravatar.cc/120?img=47" },
  { name: "James Hollingsworth", role: "Guest since 2016", text: "The most complete dining experience I've had in Europe. Service reads the room like a piece of chamber music.", rating: 5, avatar: "https://i.pravatar.cc/120?img=12" },
  { name: "Priya Narayan", role: "Food & Wine", text: "Every course lands like a small ceremony. Book six months out. Bring someone you love.", rating: 5, avatar: "https://i.pravatar.cc/120?img=32" },
  { name: "Alessandro Conti", role: "Guest", text: "From the amuse-bouche to the mignardises, an evening of complete stillness. Peerless.", rating: 5, avatar: "https://i.pravatar.cc/120?img=15" },
  { name: "Marion Dufour", role: "Gault & Millau", text: "The Verdé family has kept a promise for four generations. This is what a maison should feel like.", rating: 5, avatar: "https://i.pravatar.cc/120?img=45" },
];

function TestimonialsPage() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 5500);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <SectionHeader eyebrow="Kind Words" title="Praise for the house" subtitle="A selection of reviews from guests, critics and long-standing friends of the maison." />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] bg-card p-10 shadow-luxe sm:p-14"
            >
              <Quote className="text-primary" size={40} />
              <p className="mt-6 font-display text-2xl leading-snug text-foreground/90 sm:text-3xl">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center gap-1 text-primary">
                {Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <footer className="mt-6 flex items-center gap-4">
                <img src={r.avatar} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
                <div>
                  <p className="font-display text-lg">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)} className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 hover:bg-primary/10"><ChevronLeft size={18} /></button>
            <div className="flex gap-2">
              {REVIEWS.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-3 bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setI((v) => (v + 1) % REVIEWS.length)} className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 hover:bg-primary/10"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {REVIEWS.slice(0, 3).map((t, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: k * 0.1 }}
              className="hover-lift rounded-3xl bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, m) => <Star key={m} size={13} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-sm text-foreground/85">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
