import { Phone, MessageSquare, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal, Eyebrow } from "../components/Reveal";
import { QuoteForm } from "../components/QuoteForm";
import { CtaBanner } from "../components/sections/CtaBanner";
import { CONTACT, TEL_HREF, SMS_HREF } from "../lib/data";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & devis gratuit — TGF Toulouse Guêpes Frelons"
        description="Contactez TGF pour la destruction de votre nid de guêpes ou de frelons à Toulouse, Haute-Garonne (31) et Gers (32). Devis gratuit, intervention 7J/7. Tél 06 20 64 15 11."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Demande de"
        highlight="devis gratuit"
        subtitle="Remplissez le formulaire ou appelez-nous directement. Nous vous recontactons rapidement pour une intervention 7J/7."
      />

      <section className="relative z-10 bg-background py-14 lg:py-20">
        <div className="container-x grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <Reveal>
            <Eyebrow>Coordonnées</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl text-white leading-tight">
              Urgence <span className="text-voltage">7J/7</span>
            </h2>

            <a href={TEL_HREF} data-testid="contact-call" className="mt-8 flex items-center gap-4 rounded-2xl border border-zinc-800 bg-card p-5 hover:border-voltage/50 transition-colors">
              <span className="w-12 h-12 rounded-full bg-voltage text-black flex items-center justify-center shrink-0"><Phone size={20} /></span>
              <span>
                <span className="block font-mono2 text-xs uppercase tracking-widest text-zinc-400">Téléphone</span>
                <span className="block font-display font-bold text-2xl text-white">{CONTACT.phoneDisplay}</span>
              </span>
            </a>

            <a href={SMS_HREF} data-testid="contact-sms" className="mt-4 flex items-center gap-4 rounded-2xl border border-zinc-800 bg-card p-5 hover:border-voltage/50 transition-colors">
              <span className="w-12 h-12 rounded-full bg-zinc-800 text-voltage flex items-center justify-center shrink-0"><MessageSquare size={20} /></span>
              <span>
                <span className="block font-mono2 text-xs uppercase tracking-widest text-zinc-400">SMS d'urgence</span>
                <span className="block font-display font-bold text-lg text-white">Décrivez votre nid par SMS</span>
              </span>
            </a>

            <div className="mt-6 space-y-3 text-zinc-300">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-voltage" /> {CONTACT.zoneShort}</p>
              <p className="flex items-center gap-3"><Clock size={18} className="text-voltage" /> 7 jours sur 7, week-ends et jours fériés</p>
              <p className="flex items-center gap-3"><ShieldCheck size={18} className="text-voltage" /> Agréé Certibiocide · SIRET {CONTACT.siret}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
