import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import chefImg from "@/assets/chef.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

export const Route = createFileRoute("/chef")({
  head: () => ({
    meta: [
      { title: "Chef Laurent Verdé — Maison Verdé" },
      { name: "description", content: "Meet Chef Laurent Verdé — trained by Robuchon and Passard, leading Maison Verdé's three-star kitchen since 2011." },
      { property: "og:title", content: "Chef Laurent Verdé — Maison Verdé" },
      { property: "og:description", content: "Meet the head chef and see his signature dishes." },
    ],
  }),
  component: ChefPage,
});

const SIG = [
  { name: "Diver Scallops", img: dish1 },
  { name: "Wagyu A5", img: dish2 },
  { name: "Chocolate Verdé", img: dish3 },
];

function ChefPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={chefImg} alt="Chef Laurent Verdé" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass p-5 shadow-luxe sm:block">
              <Award className="text-primary" />
              <p className="mt-2 font-display text-lg">3⭐ Michelin</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary">Head Chef</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">Laurent Verdé</h1>
            <p className="mt-6 text-muted-foreground">
              Third-generation Verdé and third-generation cook. Laurent trained at L'Atelier de Joël Robuchon and Arpège under Alain Passard, before returning to lead the family kitchen in 2011. His food is quiet, exact, and generous — a philosophy of restraint.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[["32","Years cooking"],["2011","Head chef since"],["3","Michelin stars"]].map(([n,l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-gradient-gold">{n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl">Distinctions</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Meilleur Ouvrier de France · 2009","Bocuse d'Or Finalist · 2013","Michelin ⭐⭐⭐ · since 2020","Chef of the Year — Le Chef Magazine, 2023"].map((a) => (
                  <li key={a} className="flex items-center gap-3"><Star size={14} className="text-primary" /> {a}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Signature Dishes" title="Plates that define the house" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SIG.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-primary/25 bg-white/5 backdrop-blur"
              >
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" className="aspect-square w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <p className="font-display text-xl">{s.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
