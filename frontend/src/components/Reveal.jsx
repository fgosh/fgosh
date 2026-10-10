import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children }) => (
  <span className="inline-block font-mono2 text-[11px] uppercase tracking-[0.3em] text-voltage bg-zinc-900/80 px-3 py-1.5 border border-[rgba(255,230,0,0.3)]">
    {children}
  </span>
);
