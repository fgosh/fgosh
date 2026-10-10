import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/Reveal";
import { FranceMap } from "../components/FranceMap";
import { CtaBanner } from "../components/sections/CtaBanner";
import { CITIES, MAP_PINS } from "../lib/data";

const PINNED = new Set(MAP_PINS.map((p) => p.city));

export default function Zones() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CITIES;
    return CITIES.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Seo
        title="Zones d'intervention — Toulouse, Haute-Garonne (31) & Gers (32) | TGF"
        description="Plus de 130 communes desservies autour de Toulouse en Haute-Garonne (31) et dans le Gers (32). Recherchez votre ville et contactez TGF pour une intervention rapide 7J/7."
        path="/zones-intervention"
      />
      <PageHero
        eyebrow="Zones d'intervention"
        title="Plus de 130 communes autour de"
        highlight="Toulouse"
        subtitle="Nous intervenons sur toute la région toulousaine (Haute-Garonne 31) ainsi que dans le département du Gers (32)."
      />

      <section className="relative z-10 bg-background py-12 lg:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-3xl border border-zinc-800 bg-card p-6 sm:p-10">
              <FranceMap selected={selected} onSelect={setSelected} />
            </div>
            <p className="mt-4 text-center text-zinc-500 font-mono2 text-xs uppercase tracking-widest">
              <MapPin size={13} className="inline text-red-500 mr-1" /> Épingles rouges = communes desservies ·
              <MapPin size={13} className="inline text-green-500 mx-1" /> ville sélectionnée
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Recherche</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white leading-tight">
              Votre ville est-elle <span className="text-voltage">couverte</span> ?
            </h2>
            <p className="mt-3 text-zinc-400 text-sm">
              Cliquez sur une ville : si elle figure sur la carte, son épingle passe au vert.
            </p>
            <div className="mt-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input
                data-testid="zone-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une ville ou un code postal..."
                className="w-full bg-zinc-900/80 border border-zinc-700 focus:border-voltage focus:ring-1 focus:ring-voltage outline-none rounded-full pl-12 pr-4 py-3.5 text-white placeholder:text-zinc-500 transition-colors"
              />
            </div>
            <div className="mt-6 max-h-80 overflow-y-auto pr-2 flex flex-wrap gap-2" data-testid="zone-city-list">
              {filtered.length === 0 ? (
                <p className="text-zinc-400 text-sm">
                  Ville non listée ? Appelez-nous, nous couvrons peut-être votre secteur.
                </p>
              ) : (
                filtered.map((c) => {
                  const isSel = selected === c;
                  const hasPin = PINNED.has(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      data-testid={`zone-city-${c.toLowerCase().replace(/[^a-z]/g, "-")}`}
                      onClick={() => setSelected(isSel ? null : c)}
                      className={`inline-flex items-center gap-1.5 font-mono2 text-[11px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${
                        isSel
                          ? "border-green-500 text-green-400 bg-green-500/10"
                          : "border-zinc-800 text-zinc-300 hover:border-voltage/50"
                      }`}
                    >
                      {hasPin && <span className={`w-1.5 h-1.5 rounded-full ${isSel ? "bg-green-500" : "bg-red-500"}`} />}
                      {c}
                    </button>
                  );
                })
              )}
            </div>
            <p className="mt-4 text-zinc-500 text-sm">{filtered.length} commune(s) affichée(s)</p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
