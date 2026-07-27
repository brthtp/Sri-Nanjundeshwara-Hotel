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
      { title: "Our Culinary Heritage — Sri Nanjundeshwara Hotel " },
      { name: "description", content: "Discover the culinary mastery behind Sri Nanjundeshwara Hotel  — preserving authentic South Indian pure veg traditions and flavors for decades." },
      { property: "og:title", content: "Our Culinary Heritage — Sri Nanjundeshwara Hotel " },
      { property: "og:description", content: "Meet the masters behind our authentic vegetarian cuisine." },
    ],
  }),
  component: ChefPage,
});

const SIG = [
  { name: "Nanjundeshwara Ghee Masala Dosa", img: dish3 },
  { name: "Grand Royal Thali", img: dish2 },
  { name: "Idli Vada Combo", img: dish1 },
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
              <img src={chefImg} alt="Our Master Chefs" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass p-5 shadow-luxe sm:block">
              <Award className="text-primary" />
              <p className="mt-2 font-display text-lg">100% Pure Veg</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-primary">The Kitchen</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">Mastering Tradition</h1>
            <p className="mt-6 text-muted-foreground">
              Rooted in the rich culinary heritage of Karnataka, our kitchen is led by traditional maestros of pure vegetarian cuisine. Every spice blend is roasted and ground in-house, and every dish is prepared with the same devotion that has delighted families for years. For us, cooking is not just a service—it is a sacred philosophy of pure, sattvic food.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[["100%","Pure Vegetarian"],["1000s","Of Happy Guests"],["1","Uncompromising Standard"]].map(([n,l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-gradient-gold">{n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl">Our Distinctions</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Authentic Udupi & Karavali Flavors",
                  "Premium Party Hall & Catering Excellence",
                  "Farm-Fresh Ingredients Sourced Daily",
                  "Zero Artificial Colors or Preservatives"
                ].map((a) => (
                  <li key={a} className="flex items-center gap-3"><Star size={14} className="text-primary" /> {a}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Signature Dishes" title="Flavors that define our house" />
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