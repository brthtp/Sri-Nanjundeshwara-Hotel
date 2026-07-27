import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Sparkles, Utensils, Star, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import chefImg from "@/assets/chef.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Nanjundeshwara Hotel  — Premium Pure Veg Restaurant & Party Hall" },
      { name: "description", content: "Experience authentic South Indian pure vegetarian dining. Reserve a table or book our elegant party hall at Sri Nanjundeshwara Hotel  for unforgettable celebrations." },
      { property: "og:title", content: "Sri Nanjundeshwara Hotel  — Pure Veg & Party Hall" },
      { property: "og:description", content: "Authentic flavors, uncompromising quality. Book our premium venue or dine with us today." },
    ],
  }),
  component: Home,
});

const featured = [
  { name: "Idli Vada Combo", tag: "Breakfast Classic", price: "₹120", img: dish1 },
  { name: "Grand Royal Thali", tag: "Main Course", price: "₹280", img: dish2 },
  { name: "Ghee Masala Dosa", tag: "Signature", price: "₹180", img: dish3 },
];

const highlights = [
  { icon: Award, title: "100% Pure Vegetarian", desc: "Authentic, sattvic recipes crafted without artificial colors or flavors." },
  { icon: Utensils, title: "Heritage Flavors", desc: "Traditional South Indian culinary secrets, prepared fresh daily." },
  { icon: Sparkles, title: "Premium Party Hall", desc: "Elegant, spacious venues perfect for weddings and family celebrations." },
];

const awards = ["Legacy of Authentic Taste", "Top Rated Pure Veg", "Premium Event Venue", "Thousands of Happy Guests"];

const testimonials = [
  { name: "Priya S.", role: "Local Foodie", text: "The absolute best Ghee Masala Dosa in town. The chutney is divine and the service is always warm.", rating: 5 },
  { name: "Rahul K.", role: "Event Host", text: "Hosted my daughter's naming ceremony in their party hall. Flawless catering and a beautiful, spotless venue.", rating: 5 },
  { name: "Ananya V.", role: "Regular Guest", text: "A true taste of traditional Karnataka meals. Every bite feels like home, prepared with absolute purity.", rating: 5 },
];

const gallery = [gal1, gal2, gal3, gal4];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Sri Nanjundeshwara Hotel  Dining & Event Venue"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.03_150)/0.85] via-[oklch(0.15_0.03_150)/0.6] to-[oklch(0.12_0.02_150)/0.95]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0.1_0.02_150)/0.8)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 text-cream lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-primary"
          >
            <span className="h-px w-10 bg-primary/70" /> Bengaluru · Heritage Dining
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-display text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
          >
            The art of pure vegetarian dining, <span className="italic text-gradient-gold">perfected</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-6 max-w-2xl text-balance text-base text-cream/80 sm:text-lg"
          >
            Authentic South Indian flavors. Uncompromising culinary quality. A celebration of pure, traditional heritage for your family and guests.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/book" className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-[oklch(0.2_0.02_150)] shadow-luxe transition hover:brightness-105">
              Book Party Hall <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:bg-primary/10">
              Explore Menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-primary/20 pt-8"
          >
            {[["100%","Pure Vegetarian"],["Premium","Party Hall Venue"],["Daily","Fresh Ingredients"]].map(([n,l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-gradient-gold">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Our Menu"
            title="Signature dishes from our kitchen"
            subtitle="Every plate represents our commitment to South Indian culinary traditions — crafted with freshly ground spices and pure ingredients."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {featured.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group hover-lift overflow-hidden rounded-3xl bg-card shadow-soft"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                    {d.tag}
                  </span>
                </div>
                <div className="flex items-baseline justify-between p-6">
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <span className="font-display text-primary">{d.price}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-24 sm:py-28">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-primary/25 bg-white/5 p-8 backdrop-blur"
            >
              <h.icon className="text-primary" size={28} />
              <h3 className="mt-6 font-display text-2xl">{h.title}</h3>
              <p className="mt-2 text-sm text-cream/75">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CULINARY TRADITION */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={chefImg} alt="Culinary Experts at Nanjundeshwara" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.03_150)/0.7] to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Our Masters</p>
                <p className="mt-1 font-display text-2xl">Traditional Maestros</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl glass p-5 shadow-luxe sm:block">
              <p className="font-display text-3xl text-gradient-gold">100<span className="text-lg text-foreground/70">%</span></p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pure Vegetarian</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">Our Philosophy</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">"Cook with devotion, serve with love."</h2>
            <p className="mt-6 text-muted-foreground">
              Rooted in the rich culinary heritage of Karnataka, our kitchens are led by masters of pure vegetarian cuisine. Every spice blend is roasted and ground in-house, ensuring that whether you're joining us for a quick tiffin or hosting a grand wedding, the flavor remains uncompromisingly authentic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Farm-Fresh Produce","No Artificial Colors","Traditional Recipes"].map((a) => (
                <span key={a} className="rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-primary">{a}</span>
              ))}
            </div>
            <Link to="/chef" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:gap-3 transition-all">
              Discover our heritage <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="border-y border-border bg-[oklch(0.98_0.005_85)] py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 lg:px-10">
          {awards.map((a) => (
            <span key={a} className="font-display text-lg text-secondary/80 sm:text-xl">{a}</span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Kind Words" title="Praise from our guests" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="hover-lift rounded-3xl bg-card p-8 shadow-soft"
              >
                <Quote className="text-primary" size={26} />
                <p className="mt-4 text-foreground/85">{t.text}</p>
                <div className="mt-6 flex items-center gap-1 text-primary">
                  {Array.from({ length: t.rating }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                </div>
                <footer className="mt-4">
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Our Venue" title="Moments at Nanjundeshwara" />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img src={g} alt="Gallery" loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm text-foreground hover:bg-primary/10">
              View full gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-emerald px-8 py-20 text-center text-cream shadow-luxe sm:px-16">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(" + hero + ")", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="relative">
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary">Reservations & Events</span>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
                Host your next celebration at Sri Nanjundeshwara Hotel .
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/75">
                Our premium party hall is perfect for weddings, birthdays, and corporate events. Contact our team to plan your customized pure veg catering menu.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/book" className="rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-[oklch(0.2_0.02_150)] shadow-luxe">Book Party Hall</Link>
                <Link to="/contact" className="rounded-full border border-primary/50 px-7 py-3.5 text-sm">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}