import { ShieldCheck, Clock, FileText, BadgeCheck, MapPin, Leaf } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { WHY } from "../../lib/data";

const ICONS = [Clock, ShieldCheck, FileText, BadgeCheck, MapPin, Leaf];

export const WhyUs = () => (
  <section className="relative z-10 bg-black py-20 lg:py-28" data-testid="why-section">
    <div className="container-x">
      <Reveal>
        <Eyebrow>Pourquoi TGF</Eyebrow>
        <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
          Un service <span className="text-voltage">professionnel</span> et réactif
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px bg-zinc-800 border border-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="bg-background p-7 h-full" data-testid={`why-card-${i}`}>
                <Icon className="text-voltage" size={26} strokeWidth={2} />
                <h3 className="mt-4 font-display font-bold text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
