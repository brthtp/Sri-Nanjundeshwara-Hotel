import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Verdé" },
      { name: "description", content: "Find Maison Verdé in Paris. Address, phone, email, business hours and reservation concierge." },
      { property: "og:title", content: "Contact — Maison Verdé" },
      { property: "og:description", content: "Visit us in Paris. Reservations, hours, and directions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <SectionHeader eyebrow="Contact" title="Visit the maison" subtitle="A concierge is available seven days a week to assist with reservations, private events, and press." />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-2 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4">
          {[
            { icon: MapPin, title: "Address", value: "12 Rue de l'Élégance · Paris 75008" },
            { icon: Phone, title: "Reservations", value: "+33 (0)1 42 68 84 00" },
            { icon: Mail, title: "Concierge", value: "reservations@maisonverde.com" },
            { icon: Clock, title: "Hours", value: "Tue – Sat · 19:00 – 23:30 · Closed Sun & Mon" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-gold text-[oklch(0.2_0.02_150)]">
                <c.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.25em] text-primary">{c.title}</p>
                <p className="mt-1 font-display text-lg">{c.value}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-secondary hover:bg-secondary hover:text-secondary-foreground transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Message received — our concierge will reply within 24h."); }}
          className="rounded-3xl bg-card p-8 shadow-luxe"
        >
          <h3 className="font-display text-2xl">Write to the concierge</h3>
          <div className="mt-6 space-y-4">
            <input required placeholder="Your name" className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary" />
            <input placeholder="Subject" className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary" />
            <textarea required rows={5} placeholder="Message" className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary" />
            <button className="w-full rounded-full gradient-gold py-3 text-sm font-semibold text-[oklch(0.2_0.02_150)] shadow-soft transition hover:brightness-105">
              {sent ? "Message sent" : "Send message"}
            </button>
          </div>
        </motion.form>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-border shadow-luxe">
            <iframe
              title="Maison Verdé location"
              src="https://www.google.com/maps?q=Champs+%C3%89lys%C3%A9es+Paris&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
