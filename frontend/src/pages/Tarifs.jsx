import { ShieldCheck, FileText, PhoneCall } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/Reveal";
import { Pricing } from "../components/sections/Pricing";
import { CtaBanner } from "../components/sections/CtaBanner";

const INCLUDED = [
  { icon: PhoneCall, title: "Devis gratuit", text: "Estimation claire par téléphone avant toute intervention." },
  { icon: ShieldCheck, title: "Intervention garantie", text: "Nous garantissons l'efficacité du traitement sur le nid traité." },
  { icon: FileText, title: "Facture détaillée", text: "Remise d'une facture transmissible à votre assurance habitation." },
];

export default function Tarifs() {
  return (
    <>
      <Seo
        title="Tarifs destruction nid de guêpes & frelons à Toulouse — TGF"
        description="Tarifs transparents : à partir de 95€ pour un nid de 0 à 25 mètres. Invasion et grande hauteur sur devis gratuit. Intervention garantie 7J/7 à Toulouse et sa région."
        path="/tarifs"
      />
      <PageHero
        eyebrow="Tarifs"
        title="Des prix clairs,"
        highlight="sans surprise"
        subtitle="Tarif fixe, tout compris, communiqué avant l'intervention. À partir de 95€ pour un nid de 0 à 25 mètres."
      />

      <Pricing showHeader={false} />

      <section className="relative z-10 bg-black py-16 lg:py-24">
        <div className="container-x">
          <Reveal><Eyebrow>Inclus dans nos prestations</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">Ce qui est compris</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {INCLUDED.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-zinc-800 bg-card p-7 h-full" data-testid={`tarif-inclus-${i}`}>
                  <it.icon className="text-voltage" size={26} />
                  <h3 className="mt-4 font-display font-bold text-xl text-white">{it.title}</h3>
                  <p className="mt-2 text-zinc-400 text-sm">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-zinc-400 max-w-2xl">
              Les traitements de type « invasion de guêpes » en toiture ou en terrasse, ainsi que les
              nids de frelons asiatiques en grande hauteur, font l'objet d'un devis gratuit personnalisé
              par téléphone.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
