import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Heart, Trophy, Star } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import gal1 from "@/assets/gallery-1.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import chefImg from "@/assets/chef.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Verdé" },
      { name: "description", content: "Our philosophy, mission, and the values that shape a Michelin-star dining experience at Maison Verdé." },
      { property: "og:title", content: "About — Maison Verdé" },
      { property: "og:description", content: "Philosophy, mission, and craft at Maison Verdé." },
    ],
  }),
  component: About,
});

const owners = [
  { name: "Antoine Verdé", role: "Founder & Patron", img: gal4, bio: "Guardian of the house's founding spirit — hospitality above all.", quote: "A great restaurant remembers you before you arrive." },
  { name: "Camille Verdé", role: "Creative Director", img: gal1, bio: "Third-generation Verdé, shaping the modern voice of the maison.", quote: "Elegance is precision made invisible." },
  { name: "Laurent Verdé", role: "Head Chef", img: chefImg, bio: "Trained by Robuchon and Passard, leading the kitchen since 2011.", quote: "Cook the memory, not the recipe." },
];

const values = [
  { icon: Heart, title: "Our Philosophy", text: "Hospitality is a discipline. Every gesture — from the way we fold a napkin to the tempo of a course — carries intent." },
  { icon: Sparkles, title: "Our Mission", text: "To honour the season, the guest, and the maker. Nothing on the plate arrives by accident." },
  { icon: Trophy, title: "Our Vision", text: "A quiet, timeless standard of European fine dining — extended to a new generation without dilution." },
];

const why = [
  { n: "01", t: "Ingredients sourced within 300 km" },
  { n: "02", t: "One server for every four guests" },
  { n: "03", t: "Menu re-written every eight weeks" },
  { n: "04", t: "Sommelier-led pairings from 900 references" },
];

export default function About() { return <AboutPage />; }

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader eyebrow="Our House" title="A Michelin-star maison built on restraint." subtitle="Four generations of the Verdé family, one uncompromising standard of hospitality." />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="hover-lift rounded-3xl bg-card p-8 shadow-soft"
            >
              <v.icon className="text-primary" size={26} />
              <h3 className="mt-5 font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Why Maison Verdé" title="Details that guests remember." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <motion.div
                key={w.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-primary/25 bg-white/5 p-6 backdrop-blur"
              >
                <p className="font-display text-4xl text-primary">{w.n}</p>
                <p className="mt-3 text-sm text-cream/80">{w.t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="The Family" title="Custodians of the maison" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {owners.map((o, i) => (
              <motion.article
                key={o.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-luxe"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 ring-1 ring-primary transition duration-500 group-hover:opacity-100" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={o.img} alt={o.name} loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-primary">{o.role}</p>
                  <h3 className="mt-1 font-display text-2xl">{o.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{o.bio}</p>
                  <p className="mt-5 border-l-2 border-primary pl-4 font-display text-base italic text-foreground/85">"{o.quote}"</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS + SATISFACTION */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
          <div className="rounded-3xl bg-card p-10 shadow-soft">
            <Trophy className="text-primary" />
            <h3 className="mt-4 font-display text-3xl">Awards & Recognition</h3>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              {["Michelin ⭐⭐⭐ · 2004–2024","World's 50 Best Restaurants · #12","Gault & Millau 19/20","Grand Prix Culinaire · 2022","Relais & Châteaux member since 1994"].map((a) => (
                <li key={a} className="flex items-center gap-3"><span className="h-1 w-6 bg-primary" /> {a}</li>
              ))}
            </ul>
          </div>
          <div className="gradient-emerald rounded-3xl p-10 text-cream shadow-luxe">
            <Star className="text-primary" />
            <h3 className="mt-4 font-display text-3xl">Guest Satisfaction</h3>
            <p className="mt-4 text-cream/80">98% of guests rate their evening as "exceptional". Our concierge team follows up after every visit.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-primary/25 pt-6">
              {[["98%","Exceptional"],["4.9","Avg. rating"],["12k","Reviews"]].map(([n,l]) => (
                <div key={l}>
                  <p className="font-display text-2xl text-primary">{n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/70">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
