import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignCls}`}
    >
      {eyebrow && (
        <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-primary">
          <span className="h-px w-8 bg-primary/60" /> {eyebrow} <span className="h-px w-8 bg-primary/60" />
        </span>
      )}
      <h2 className="text-balance font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
