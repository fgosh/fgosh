import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, Eyebrow } from "../Reveal";
import { PRICING, TEL_HREF } from "../../lib/data";

export const Pricing = ({ showHeader = true }) => (
  <section className="relative z-10 bg-background py-20 lg:py-28" data-testid="pricing-section">
    <div className="container-x">
      {showHeader && (
        <Reveal>
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            Transparents, <span className="text-voltage">sans surprise</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl">
            Devis gratuit par téléphone. Tarif fixe, tout compris. Intervention garantie.
          </p>
        </Reveal>
      )}

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PRICING.map((tier, i) => (
          <Reveal key={tier.title} delay={i * 0.1}>
            <div
              data-testid={`pricing-card-${i}`}
              className={`relative rounded-2xl p-7 h-full flex flex-col ${
                tier.featured ? "bg-voltage text-black" : "bg-card border border-zinc-800 text-white"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 bg-black text-voltage font-mono2 text-[10px] uppercase tracking-widest px-3 py-1">
                  Le plus courant
                </span>
              )}
              <h3 className={`font-mono2 text-xs uppercase tracking-widest ${tier.featured ? "text-black/70" : "text-zinc-400"}`}>
                {tier.title}
              </h3>
              <div className="mt-3 font-display font-extrabold text-4xl">{tier.price}</div>
              <div className={`text-sm ${tier.featured ? "text-black/70" : "text-zinc-500"}`}>{tier.unit}</div>
              <ul className="mt-6 space-y-3 flex-1">
                {tier.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <Check size={17} className={tier.featured ? "text-black mt-0.5" : "text-voltage mt-0.5"} strokeWidth={3} />
                    <span className={tier.featured ? "text-black/90" : "text-zinc-300"}>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={TEL_HREF}
                data-testid={`pricing-cta-${i}`}
                className={`mt-7 inline-flex items-center justify-center font-bold px-5 py-3.5 rounded-full transition-colors duration-200 ${
                  tier.featured ? "bg-black text-voltage hover:bg-zinc-900" : "bg-voltage text-black hover:bg-[#ffc700]"
                }`}
              >
                Obtenir mon devis
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-zinc-500 text-sm">
          Prise en charge possible par certaines assurances multirisque habitation —{" "}
          <Link to="/contact" className="text-voltage underline underline-offset-4">facture détaillée fournie</Link>.
        </p>
      </Reveal>
    </div>
  </section>
);
