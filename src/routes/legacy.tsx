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
      { title: "Our Legacy — Hotel Nanjundeshwara since 1968" },
      { name: "description", content: "The story of Hotel Nanjundeshwara — over five decades of authentic South Indian pure vegetarian culinary heritage and memorable celebrations." },
      { property: "og:title", content: "Our Legacy — Hotel Nanjundeshwara" },
      { property: "og:description", content: "Since 1968: The journey of Hotel Nanjundeshwara from a humble tiffin room to a beloved pure veg institution and party hall venue." },
    ],
  }),
  component: LegacyPage,
});

const TIMELINE = [
  { 
    year: "1968", 
    title: "Humble Beginnings", 
    img: legacy, 
    text: "Founded as a modest pure-vegetarian tiffin room serving steaming hot idlis, golden dosas, and aromatic filter coffee to local neighborhood patrons." 
  },
  { 
    year: "1985", 
    title: "Expanding the Kitchen", 
    img: gal4, 
    text: "Expanded the main dining hall to introduce our iconic South Indian Grand Thali meal, crafted daily with freshly ground spices and pure ghee." 
  },
  { 
    year: "2002", 
    title: "Modern Family Dining", 
    img: gal1, 
    text: "Underwent a comprehensive interior transformation to create a warm, comfortable dining space for families while upholding traditional kitchen ethics." 
  },
  { 
    year: "2020", 
    title: "The Grand Party Hall", 
    img: gal2, 
    text: "Inaugurated a state-of-the-art banquet venue complete with customizable pure-veg catering for weddings, naming ceremonies, and corporate events." 
  },
  { 
    year: "Today", 
    title: "A Living Culinary Tradition", 
    img: hero, 
    text: "Driven by generations of culinary passion, we continue serving thousands of guests daily with uncompromising purity, rich taste, and humble hospitality." 
  },
];

function LegacyPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader 
          eyebrow="Our Legacy" 
          title="Over five decades, one timeless taste." 
          subtitle="A cherished pure vegetarian institution, serving authentic flavors with devotion since 1968." 
        />
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