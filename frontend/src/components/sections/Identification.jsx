import { Reveal, Eyebrow } from "../Reveal";
import { IDENTIFICATION } from "../../lib/data";

export const Identification = () => (
  <section className="relative z-10 bg-black py-20 lg:py-28" data-testid="identification-section">
    <div className="container-x">
      <Reveal>
        <Eyebrow>Identification</Eyebrow>
        <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
          Reconnaître <span className="text-voltage">l'insecte</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl">
          Guêpe, frelon européen ou frelon asiatique ? Identifiez le nuisible pour mieux réagir — ou envoyez-nous une photo.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {IDENTIFICATION.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1}>
            <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-card h-full" data-testid={`id-card-${i}`}>
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-xl text-white">{item.name}</h3>
                  <span className="font-mono2 text-[9px] uppercase tracking-wider text-red-400 border border-red-500/40 px-2 py-1 whitespace-nowrap">
                    {item.danger}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-voltage rotate-45 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
