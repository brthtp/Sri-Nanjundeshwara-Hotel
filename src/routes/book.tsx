import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book the Venue — Hotel Nanjundeshwara" },
      { name: "description", content: "Reserve a table or private venue at Hotel Nanjundeshwara. Weddings, corporate evenings, and intimate celebrations." },
      { property: "og:title", content: "Book the Venue — Hotel Nanjundeshwara" },
      { property: "og:description", content: "Reserve a table or private venue at Hotel Nanjundeshwara, Paris." },
    ],
  }),
  component: BookPage,
});

const EVENTS = ["Fine Dining Table", "Private Venue", "Wedding", "Corporate Evening", "Anniversary", "Chef's Table"];

function BookPage() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", email:"", event: EVENTS[0], guests: 2, date: "", time: "", notes: "" });

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader eyebrow="Reservations" title="Book the venue" subtitle="Tables and private salons for 2 to 120 guests. Our concierge will confirm within 24 hours." />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <motion.aside
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl gradient-emerald p-8 text-cream shadow-luxe"
        >
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary">Hotel Nanjundeshwara</span>
            <h3 className="mt-4 font-display text-3xl">An evening curated for you.</h3>
            <p className="mt-4 text-cream/80 text-sm">Every reservation is followed by a personal call from our concierge to tailor the menu, seating, and wine pairing.</p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Sommelier consultation included","Complimentary champagne welcome","Priority parking with valet","Late seating for private events"].map((l) => (
                <li key={l} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 text-primary"><Check size={13} /></span>{l}</li>
              ))}
            </ul>
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="grid min-h-[520px] place-items-center rounded-3xl bg-card p-10 text-center shadow-luxe"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full gradient-gold shadow-luxe"
                  >
                    <Sparkles className="text-[oklch(0.2_0.02_150)]" size={30} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-3xl">Merci, {form.name || "cher invité"}.</h3>
                  <p className="mt-3 max-w-md text-muted-foreground">Your request has been received. A member of our concierge will reach out within 24 hours to confirm every detail.</p>
                  <button onClick={() => { setDone(false); setForm({ name:"", phone:"", email:"", event: EVENTS[0], guests: 2, date: "", time: "", notes: "" }); }} className="mt-8 rounded-full border border-primary/40 px-6 py-2.5 text-sm hover:bg-primary/10">
                    New reservation
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={(e) => { e.preventDefault(); setDone(true); }}
                className="rounded-3xl bg-card p-8 shadow-luxe"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name"><input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={input} /></Field>
                  <Field label="Phone Number"><input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className={input} /></Field>
                  <Field label="Email" className="sm:col-span-2"><input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className={input} /></Field>
                  <Field label="Event Type">
                    <select value={form.event} onChange={(e) => setForm({...form, event: e.target.value})} className={input}>
                      {EVENTS.map((e) => <option key={e}>{e}</option>)}
                    </select>
                  </Field>
                  <Field label="Guests"><input required type="number" min={1} max={120} value={form.guests} onChange={(e) => setForm({...form, guests: +e.target.value})} className={input} /></Field>
                  <Field label="Preferred Date"><input required type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className={input} /></Field>
                  <Field label="Preferred Time"><input required type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} className={input} /></Field>
                  <Field label="Additional Notes" className="sm:col-span-2">
                    <textarea rows={4} value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary" />
                  </Field>
                </div>
                <button className="mt-6 w-full rounded-full gradient-gold py-3.5 text-sm font-semibold text-[oklch(0.2_0.02_150)] shadow-soft transition hover:brightness-105">
                  Submit Reservation
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

const input = "w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary transition";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
