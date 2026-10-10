import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { FranceMap } from "../FranceMap";
import { CITIES } from "../../lib/data";

export const ZoneTeaser = () => (
  <section id="zone" className="relative z-10 bg-background py-20 lg:py-28" data-testid="zone-teaser">
    <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
      <Reveal>
        <Eyebrow>Zone d'intervention</Eyebrow>
        <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          130+ communes autour de <span className="text-voltage">Toulouse</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-md">
          Nous intervenons sur toute la région toulousaine — Haute-Garonne (31) — ainsi que dans
          le département du Gers (32).
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {CITIES.slice(0, 10).map((c) => (
            <span key={c} className="font-mono2 text-[11px] uppercase tracking-wider text-zinc-300 border border-zinc-800 px-2.5 py-1.5">
              {c}
            </span>
          ))}
          <span className="font-mono2 text-[11px] uppercase tracking-wider text-voltage px-2.5 py-1.5">+120 autres</span>
        </div>
        <Link
          to="/zones-intervention"
          data-testid="zone-teaser-link"
          className="mt-7 inline-flex items-center gap-2 border border-zinc-600 text-white font-bold px-6 py-3.5 rounded-full hover:border-voltage hover:text-voltage transition-colors duration-200"
        >
          Voir toute la zone <ArrowUpRight size={17} />
        </Link>
      </Reveal>

      <Reveal delay={0.15}>
        <FranceMap />
      </Reveal>
    </div>
  </section>
);
