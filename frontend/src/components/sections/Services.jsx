import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { SERVICES } from "../../lib/data";

export const Services = () => (
  <section id="services" className="relative z-10 bg-background py-20 lg:py-28" data-testid="services-section">
    <div className="container-x">
      <Reveal>
        <Eyebrow>Nos services</Eyebrow>
        <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
          Tous types de nids, <span className="text-voltage">partout</span> en Haute-Garonne
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1}>
            <Link
              to={s.path}
              data-testid={`service-card-${s.id}`}
              className="group block relative overflow-hidden rounded-2xl border border-zinc-800 bg-card h-full hover:border-voltage/50 transition-colors duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={`Destruction nid ${s.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 font-mono2 text-[10px] uppercase tracking-widest text-voltage bg-black/70 border border-voltage/30 px-2 py-1">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-2xl text-white">{s.name}</h3>
                  <ArrowUpRight className="text-voltage group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block font-mono2 text-xs uppercase tracking-widest text-zinc-300 group-hover:text-voltage transition-colors">
                  En savoir plus
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
