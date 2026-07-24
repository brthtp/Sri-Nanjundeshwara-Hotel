import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/SectionHeader";
import legacy from "@/assets/legacy-1968.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/legacy")({
  head: () => ({
    meta: [
      { title: "Our Legacy — Maison Verdé since 1968" },
      { name: "description", content: "The complete story of Maison Verdé — four generations of family, craft, and Michelin-star hospitality since 1968." },
      { property: "og:title", content: "Our Legacy — Maison Verdé" },
      { property: "og:description", content: "Since 1968: the story of Maison Verdé, from a Parisian bistro to a three-star institution." },
    ],
  }),
  component: LegacyPage,
});

const TIMELINE = [
  { year: "1968", title: "Restaurant founded", img: legacy, text: "Antoine and Marguerite Verdé open a twelve-seat bistro on Rue de l'Élégance, cooking Sunday recipes for tired Parisians." },
  { year: "1985", title: "Expansion", img: gal4, text: "The maison acquires the neighbouring townhouse, opening the grand salon and adding a formal wine cellar of 400 references." },
  { year: "2002", title: "Renovation", img: gal1, text: "A quiet reimagining led by architect Étienne Lacombe — emerald and gold interiors that still define the room today." },
  { year: "2020", title: "Modern Fine Dining", img: gal2, text: "Chef Laurent Verdé rewrites the tasting menu around hyper-seasonal European sourcing. Three Michelin stars, four years running." },
  { year: "Today", title: "The family legacy continues", img: hero, text: "Fourth-generation Camille joins as Creative Director. The same table, the same standard, a new century of evenings ahead." },
];

function LegacyPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader eyebrow="Our Legacy" title="Fifty-seven years, one table." subtitle="A single-family maison, unchanged in spirit since 1968." />
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-32 lg:px-10">
        {/* center line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2" />

        <div className="space-y-16 md:space-y-28">
          {TIMELINE.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <div key={t.year} className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* node */}
                <div className="absolute left-6 top-6 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-primary shadow-[0_0_0_6px_oklch(0.74_0.128_84/0.15)] md:left-1/2" />

                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-14 md:ml-0 ${left ? "md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"}`}
                >
                  <p className="font-display text-5xl text-gradient-gold sm:text-6xl">{t.year}</p>
                  <h3 className="mt-3 font-display text-2xl">{t.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: left ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`mt-6 ml-14 overflow-hidden rounded-3xl shadow-luxe md:ml-0 md:mt-0 ${left ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
                >
                  <img src={t.img} alt={t.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-[1500ms] hover:scale-105" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
