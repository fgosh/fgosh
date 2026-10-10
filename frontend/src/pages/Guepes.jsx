import { AlertTriangle, Home as HomeIcon, Trees, PanelTop } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/Reveal";
import { QuoteForm } from "../components/QuoteForm";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Pricing } from "../components/sections/Pricing";

const ZONES = [
  { icon: PanelTop, title: "Volets roulants", text: "Les coffres de volets sont un abri fréquent pour les nids de guêpes." },
  { icon: HomeIcon, title: "Sous toiture", text: "Tuiles, débords de toit et combles offrent chaleur et protection." },
  { icon: Trees, title: "Haies & buissons", text: "Nids dissimulés dans la végétation dense du jardin." },
  { icon: AlertTriangle, title: "Nids au sol", text: "Certaines guêpes nichent dans le sol, le long des murets ou talus." },
];

const TIPS = [
  "Ne bouchez jamais l'entrée du nid vous-même.",
  "Éloignez enfants et animaux de la zone.",
  "Ne pulvérisez pas de produit au hasard : cela rend les guêpes agressives.",
  "Fermez les fenêtres proches et gardez vos distances.",
];

export default function Guepes() {
  return (
    <>
      <Seo
        title="Destruction de nids de guêpes à Toulouse (31) — TGF"
        description="Destruction de nids de guêpes à Toulouse et en Haute-Garonne : sous toiture, volets roulants, haies, au sol. Intervention rapide 7J/7, à partir de 95€. Devis gratuit."
        path="/guepes"
      />
      <PageHero
        eyebrow="Guêpes · Vespula"
        title="Destruction de nids de"
        highlight="guêpes"
        subtitle="Nids sous toiture, dans les coffres de volets roulants, les haies ou au sol : nous éliminons tous les types de nids de guêpes en toute sécurité."
        image="/media/guepes.jpg"
      />

      <section className="relative z-10 bg-background py-16 lg:py-24">
        <div className="container-x">
          <Reveal><Eyebrow>Zones à risque</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">Où se cachent les nids</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((z, i) => (
              <Reveal key={z.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-zinc-800 bg-card p-6 h-full" data-testid={`guepes-zone-${i}`}>
                  <z.icon className="text-voltage" size={26} />
                  <h3 className="mt-4 font-display font-bold text-lg text-white">{z.title}</h3>
                  <p className="mt-2 text-zinc-400 text-sm">{z.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-black py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Eyebrow>Sécurité</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white leading-tight">
              Avant notre <span className="text-voltage">arrivée</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {TIPS.map((t) => (
                <li key={t} className="flex items-start gap-3 text-zinc-300">
                  <AlertTriangle size={18} className="text-voltage mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}><QuoteForm compact /></Reveal>
        </div>
      </section>

      <Pricing />
      <CtaBanner />
    </>
  );
}
