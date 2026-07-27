import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Heart, Trophy, Star } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import chefImg from "@/assets/chef.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sri Nanjundeshwara Hotel " },
      { name: "description", content: "Our philosophy, mission, and values that shape the authentic pure vegetarian dining and party hall experience at Sri Nanjundeshwara Hotel ." },
      { property: "og:title", content: "About Us — Sri Nanjundeshwara Hotel " },
      { property: "og:description", content: "Philosophy, mission, and pure culinary craft at Sri Nanjundeshwara Hotel ." },
    ],
  }),
  component: About,
});

const owners = [
  { 
    name: "Nanjundaswamy Rao", 
    role: "Founder & Patriarch", 
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", 
    bio: "Established our founding vision — uncompromising purity and humble hospitality for every guest.", 
    quote: "Good food is cooked with pure devotion and served like family." 
  },
  { 
    name: "Ramesh Nanjundaswamy", 
    role: "Managing Director", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", 
    bio: "Expanding our legacy into modern family dining and state-of-the-art party hall celebrations.", 
    quote: "True luxury is consistency, cleanliness, and authentic taste." 
  },
  { 
    name: "Chef Prakash", 
    role: "Head of Culinary Operations", 
    img: chefImg, 
    bio: "Mastering traditional South Indian spice blends and authentic tiffin recipes since 2005.", 
    quote: "Respect the ingredient, honor the tradition." 
  },
];

const values = [
  { 
    icon: Heart, 
    title: "Our Philosophy", 
    text: "Purity is a sacred commitment. Every dish is crafted without compromise, using fresh farm produce and traditional recipes." 
  },
  { 
    icon: Sparkles, 
    title: "Our Mission", 
    text: "To serve authentic Karnataka flavors that feel like home, while providing pristine party spaces for life's most precious celebrations." 
  },
  { 
    icon: Trophy, 
    title: "Our Vision", 
    text: "To remain Bengaluru's most trusted pure vegetarian destination, bridging generational tastes with timeless hospitality." 
  },
];

const why = [
  { n: "01", t: "100% Pure Vegetarian Kitchen" },
  { n: "02", t: "In-house freshly ground spices daily" },
  { n: "03", t: "Spacious & elegant party hall venues" },
  { n: "04", t: "Decades of trusted family recipes" },
];

export default function About() { return <AboutPage />; }

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader 
          eyebrow="Our House" 
          title="A pure vegetarian institution built on tradition." 
          subtitle="Decades of family dedication, serving an uncompromising standard of South Indian hospitality." 
        />
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
          <SectionHeader eyebrow="Why Sri Nanjundeshwara Hotel " title="Details that guests remember." />
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
          <SectionHeader eyebrow="The Leadership" title="Custodians of our culinary legacy" />
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
            <h3 className="mt-4 font-display text-3xl">Milestones & Recognition</h3>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              {[
                "Top Rated Pure Veg Restaurant in Tumakuru / Bengaluru Highway · 2024",
                "Best Family Event & Party Hall Venue · 2023",
                "Excellence in Traditional South Indian Tiffin & Meals",
                "Recognized for 100% Purity and Kitchen Hygiene",
                "Trusted by Thousands of Families Since 1968"
              ].map((a) => (
                <li key={a} className="flex items-center gap-3"><span className="h-1 w-6 bg-primary shrink-0" /> {a}</li>
              ))}
            </ul>
          </div>
          <div className="gradient-emerald rounded-3xl p-10 text-cream shadow-luxe">
            <Star className="text-primary" />
            <h3 className="mt-4 font-display text-3xl">Guest Satisfaction</h3>
            <p className="mt-4 text-cream/80">98% of our guests rate their dining and party hall experience as exceptional. Our team personally ensures every celebration is memorable.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-primary/25 pt-6">
              {[["98%","Exceptional"],["4.8","Avg. rating"],["1.3k+","Reviews"]].map(([n,l]) => (
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