import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Eyebrow } from "./Reveal";
import { TEL_HREF, CONTACT } from "../lib/data";

export const PageHero = ({ eyebrow, title, highlight, subtitle, image }) => (
  <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden" data-testid="page-hero">
    {image && (
      <>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </>
    )}
    <div className="absolute top-0 right-0 w-24 h-full hazard-strip opacity-10 hidden md:block" />
    <div className="container-x relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-display font-extrabold uppercase tracking-tight text-white fluid-page max-w-full">
          {title} {highlight && <span className="text-voltage">{highlight}</span>}
        </h1>
        {subtitle && <p className="mt-5 text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        <a
          href={TEL_HREF}
          data-testid="pagehero-call"
          className="mt-7 inline-flex items-center gap-2 bg-voltage text-black font-bold px-6 py-3.5 rounded-full hover:bg-[#ffc700] transition-colors duration-200"
        >
          <Phone size={17} strokeWidth={2.5} /> {CONTACT.phoneDisplay}
        </a>
      </motion.div>
    </div>
  </section>
);
