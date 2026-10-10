import { Moon, TreePine, Home as HomeIcon, Bug } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/Reveal";
import { QuoteForm } from "../components/QuoteForm";
import { CtaBanner } from "../components/sections/CtaBanner";

const FACTS = [
  { icon: Bug, title: "25–35 mm", text: "Grand insecte brun-roux et jaune, au vol bruyant mais moins agressif que la guêpe." },
  { icon: HomeIcon, title: "Combles & charpentes", text: "Les nids se forment souvent dans les greniers, abris de jardin et sous les toits." },
  { icon: TreePine, title: "Troncs creux", text: "On les retrouve aussi dans les arbres creux et les cavités naturelles." },
  { icon: Moon, title: "Actif la nuit", text: "Le frelon européen est attiré par la lumière et vole volontiers au crépuscule." },
];

export default function FrelonsEuropeens() {
  return (
    <>
      <Seo
        title="Destruction de nids de frelons européens à Toulouse — TGF"
        description="Destruction de nids de frelons européens (Vespa crabro) à Toulouse et en Haute-Garonne : combles, charpentes, troncs creux. Intervention rapide 7J/7, devis gratuit."
        path="/frelons-europeens"
      />
      <PageHero
        eyebrow="Frelon européen · Vespa crabro"
        title="Destruction de nids de"
        highlight="frelons européens"
        subtitle="Impressionnant mais moins agressif, le frelon européen niche dans les charpentes, les combles et les troncs. Nous repérons et éliminons le nid en sécurité."
        image="https://images.unsplash.com/photo-1668354510731-3269392ff5b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
      />

      <section className="relative z-10 bg-background py-16 lg:py-24">
        <div className="container-x">
          <Reveal><Eyebrow>Biologie & comportement</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white">Reconnaître le frelon européen</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-zinc-800 bg-card p-6 h-full" data-testid={`fe-fact-${i}`}>
                  <f.icon className="text-voltage" size={26} />
                  <h3 className="mt-4 font-display font-bold text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-zinc-400 text-sm">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-black py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Eyebrow>Intervention</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white leading-tight">
              Intervention de nuit ou au <span className="text-voltage">crépuscule</span>
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              Pour un maximum de sécurité et d'efficacité, la destruction d'un nid de frelons est
              souvent réalisée lorsque la colonie est regroupée. Nous intervenons rapidement, 7J/7,
              avec un traitement raisonné adapté à l'emplacement du nid.
            </p>
            <p className="mt-4 text-zinc-400">Agréé Certibiocide · Intervention garantie.</p>
          </Reveal>
          <Reveal delay={0.1}><QuoteForm compact /></Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
