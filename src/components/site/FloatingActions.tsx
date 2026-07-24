import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, MessageCircle, CalendarHeart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a
        href="https://wa.me/33142688400?text=Hello%20Maison%20Verd%C3%A9%2C%20I%27d%20like%20to%20reserve%20a%20table."
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto grid h-13 w-13 place-items-center rounded-full bg-[oklch(0.62_0.16_150)] p-3 text-white shadow-luxe transition hover:scale-105"
        aria-label="Reserve on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <Link
        to="/book"
        className="pointer-events-auto flex items-center gap-2 rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-[oklch(0.2_0.02_150)] shadow-luxe transition hover:scale-[1.03]"
      >
        <CalendarHeart size={16} /> Book Venue
      </Link>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-primary/40 bg-background/80 text-foreground shadow-soft backdrop-blur"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
