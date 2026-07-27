import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Guest Reviews & Praise — Sri Nanjundeshwara Hotel " },
      { name: "description", content: "Read what our guests say about our authentic South Indian pure vegetarian delicacies and party hall event experiences at Sri Nanjundeshwara Hotel ." },
      { property: "og:title", content: "Guest Reviews — Sri Nanjundeshwara Hotel " },
      { property: "og:description", content: "Praise from food lovers, families, and event hosts." },
    ],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { 
    name: "Priya Sundaram", 
    role: "Local Foodie", 
    text: "The Nanjundeshwara Ghee Masala Dosa is unmatched. Crisp, golden, and served with rich coconut chutney and piping hot sambar. My absolute go-to breakfast spot every weekend!", 
    rating: 5, 
    avatar: "https://i.pravatar.cc/120?img=32" 
  },
  { 
    name: "Rajesh Kumar", 
    role: "Family Event Host", 
    text: "We hosted our parents' 50th wedding anniversary in their Party Hall. The management handled everything flawlessly, and the pure veg Grand Thali impressed every single guest.", 
    rating: 5, 
    avatar: "https://i.pravatar.cc/120?img=12" 
  },
  { 
    name: "Ananya Venkatesh", 
    role: "Regular Guest", 
    text: "Authentic Karnataka flavors prepared with pure ghee and utmost hygiene. Ending the meal with their Degree Filter Coffee is pure bliss!", 
    rating: 5, 
    avatar: "https://i.pravatar.cc/120?img=47" 
  },
  { 
    name: "Suresh Babu", 
    role: "Corporate Event Organizer", 
    text: "Booked the venue for a company celebration lunch. Excellent hall ambiance, spacious seating, prompt service, and incredible South Indian catering.", 
    rating: 5, 
    avatar: "https://i.pravatar.cc/120?img=15" 
  },
  { 
    name: "Meenakshi R.", 
    role: "Weekend Diner", 
    text: "The best place in town for traditional tiffin and meals. Generous portions, spotless cleanliness, and warm, humble hospitality that makes you feel at home.", 
    rating: 5, 
    avatar: "https://i.pravatar.cc/120?img=45" 
  },
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
        <SectionHeader 
          eyebrow="Kind Words" 
          title="Praise from our guests" 
          subtitle="A selection of reviews from daily diners, families, and event hosts who celebrate with us." 
        />

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
                <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
                <div>
                  <p className="font-display text-lg">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <button 
              onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)} 
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 hover:bg-primary/10"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, k) => (
                <button 
                  key={k} 
                  onClick={() => setI(k)} 
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-3 bg-border"}`} 
                  aria-label={`Go to slide ${k + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={() => setI((v) => (v + 1) % REVIEWS.length)} 
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 hover:bg-primary/10"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
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
                <img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
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