import { ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";

export const Engagements = () => (
  <section className="relative z-10 bg-black py-20 lg:py-28" data-testid="engagements-section">
    <div className="container-x">
      <div className="relative rounded-3xl border border-voltage/30 overflow-hidden bg-card p-8 sm:p-12">
        <div className="absolute top-0 right-0 w-40 h-full hazard-strip opacity-10" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <ShieldCheck className="text-voltage" size={40} />
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white leading-tight">
              Intervention <span className="text-voltage">garantie</span>
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-md">
              Nous garantissons l'efficacité de notre traitement sur le nid traité. Technicien agréé
              Certibiocide, traitements raisonnés et conformes à la réglementation.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {[
                ["7J/7", "Disponible week-ends & fériés"],
                ["Agréé", "Certibiocide"],
                ["Gratuit", "Devis par téléphone"],
                ["Raisonné", "Traitements ciblés"],
              ].map(([big, small]) => (
                <div key={big} className="border border-zinc-800 bg-background rounded-xl p-5">
                  <div className="font-display font-extrabold text-2xl text-voltage">{big}</div>
                  <div className="text-zinc-400 text-sm mt-1">{small}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
