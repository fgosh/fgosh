import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageSquare, Zap } from "lucide-react";
import { TEL_HREF, SMS_HREF, CONTACT, METRICS } from "../../lib/data";

const LINES = ["Destruction", "de nids de guêpes", "& frelons"];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const overlayO = useTransform(scrollYProgress, [0, 1], [0.78, 0.95]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden" data-testid="hero">
      <motion.img
        src="/media/hero-insect.jpg"
        alt="Gros plan d'une guêpe — intervention TGF à Toulouse"
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div style={{ opacity: overlayO }} className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute top-0 right-0 w-28 h-full hazard-strip opacity-20 hidden md:block" />

      <div className="container-x relative z-10 pb-20 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-voltage text-black font-mono2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 mb-6"
        >
          <Zap size={13} fill="currentColor" /> Intervention rapide 7J/7
        </motion.div>

        <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.92] text-white fluid-h1">
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block whitespace-nowrap"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? <span className="text-voltage">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-xl text-zinc-300 text-base sm:text-lg leading-relaxed"
        >
          À Toulouse, en Haute-Garonne (31) et dans le Gers (32). Devis gratuit,
          traitements raisonnés et intervention garantie. Technicien agréé Certibiocide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href={TEL_HREF} data-testid="hero-call-button" className="inline-flex items-center gap-2 bg-voltage text-black font-bold px-6 py-4 rounded-full hover:bg-[#ffc700] transition-colors duration-200">
            <Phone size={18} strokeWidth={2.5} /> {CONTACT.phoneDisplay}
          </a>
          <a href={SMS_HREF} data-testid="hero-sms-button" className="inline-flex items-center gap-2 border border-zinc-600 text-white font-bold px-6 py-4 rounded-full hover:border-voltage hover:text-voltage transition-colors duration-200">
            <MessageSquare size={18} strokeWidth={2.5} /> Devis par SMS
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 max-w-3xl">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className="bg-black/80 px-4 py-5"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-voltage">{m.value}</div>
              <div className="font-mono2 text-[10px] uppercase tracking-widest text-zinc-400 mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
