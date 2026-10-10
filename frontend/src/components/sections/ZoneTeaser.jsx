import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { FranceMap } from "../FranceMap";
import { MAP_PINS } from "../../lib/data";

export const ZoneTeaser = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="zone" className="relative z-10 bg-background py-20 lg:py-28" data-testid="zone-teaser">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Zone d'intervention</Eyebrow>
          <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            130+ communes autour de <span className="text-voltage">Toulouse</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-md">
            Nous intervenons sur toute la région toulousaine — Haute-Garonne (31) — ainsi que dans
            le département du Gers (32). Cliquez sur une ville : son épingle passe au vert.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {MAP_PINS.map((p) => {
              const isSel = selected === p.city;
              return (
                <button
                  key={p.city}
                  type="button"
                  data-testid={`zone-teaser-city-${p.city.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  onClick={() => setSelected(isSel ? null : p.city)}
                  className={`inline-flex items-center gap-1.5 font-mono2 text-[11px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${
                    isSel
                      ? "border-green-500 text-green-400 bg-green-500/10"
                      : "border-zinc-800 text-zinc-300 hover:border-voltage/50"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSel ? "bg-green-500" : "bg-red-500"}`} />
                  {p.city}
                </button>
              );
            })}
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
          <FranceMap selected={selected} onSelect={setSelected} />
        </Reveal>
      </div>
    </section>
  );
};
