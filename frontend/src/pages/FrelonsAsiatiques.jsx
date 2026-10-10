import { AlertOctagon, Flag, ArrowUp, ShieldAlert } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/Reveal";
import { QuoteForm } from "../components/QuoteForm";
import { CtaBanner } from "../components/sections/CtaBanner";

const POINTS = [
  { icon: AlertOctagon, title: "Espèce invasive", text: "Vespa velutina est classée espèce exotique envahissante, très présente en Occitanie." },
  { icon: ArrowUp, title: "Nids en hauteur", text: "Gros nids sphériques installés en hauteur dans les arbres, sous les toits ou les abris." },
  { icon: Flag, title: "Signalement", text: "La destruction est fortement recommandée par les autorités et coordonnée régionalement." },
  { icon: ShieldAlert, title: "Danger", text: "Menace pour les abeilles et risque en cas de dérangement du nid : ne jamais s'en approcher." },
];

export default function FrelonsAsiatiques() {
  return (
    <>
      <Seo
        title="Destruction de nids de frelons asiatiques à Toulouse — TGF"
        description="Destruction de nids de frelons asiatiques (Vespa velutina) à Toulouse et en Haute-Garonne. Nids en hauteur, espèce invasive. Intervention rapide 7J/7, devis gratuit."
        path="/frelons-asiatiques"
      />
      <PageHero
        eyebrow="Frelon asiatique · Vespa velutina"
        title="Destruction de nids de"
        highlight="frelons asiatiques"
        subtitle="Espèce invasive aux nids sphériques installés en hauteur. Notre technicien agréé Certibiocide intervient avec le matériel adapté, en toute sécurité."
        image="https://images.unsplash.com/photo-1734816831569-2107bdef9e22?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
      />

      <section className="relative z-10 bg-background py-16 lg:py-24">
        <div className="container-x">
          <Reveal><Eyebrow>Danger & diagnostic</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">Ce qu'il faut savoir</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-zinc-800 bg-card p-6 h-full" data-testid={`fa-point-${i}`}>
                  <p.icon className="text-red-500" size={26} />
                  <h3 className="mt-4 font-display font-bold text-lg text-white">{p.title}</h3>
                  <p className="mt-2 text-zinc-400 text-sm">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-black py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Eyebrow>Protocole</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white leading-tight">
              Destruction en <span className="text-voltage">hauteur</span>
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              Les nids de frelons asiatiques se trouvent souvent à plusieurs mètres de hauteur.
              Nous utilisons perche télescopique et matériel spécifique pour neutraliser la colonie,
              puis retirer ou traiter le nid. Tarif sur devis gratuit selon la hauteur et l'accès.
            </p>
            <p className="mt-4 text-zinc-400">Intervention rapide 7J/7 · Traitements raisonnés.</p>
          </Reveal>
          <Reveal delay={0.1}><QuoteForm compact /></Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
