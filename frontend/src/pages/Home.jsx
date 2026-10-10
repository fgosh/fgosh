import { Helmet } from "react-helmet-async";
import { Seo } from "../components/Seo";
import { Hero } from "../components/sections/Hero";
import { Marquee } from "../components/sections/Marquee";
import { Services } from "../components/sections/Services";
import { Identification } from "../components/sections/Identification";
import { Process } from "../components/sections/Process";
import { WhyUs } from "../components/sections/WhyUs";
import { Pricing } from "../components/sections/Pricing";
import { Engagements } from "../components/sections/Engagements";
import { VideoGallery } from "../components/sections/VideoGallery";
import { Faq } from "../components/sections/Faq";
import { CtaBanner } from "../components/sections/CtaBanner";
import { ZoneTeaser } from "../components/sections/ZoneTeaser";
import { QuoteForm } from "../components/QuoteForm";
import { Reveal, Eyebrow } from "../components/Reveal";
import { FAQ } from "../lib/data";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Seo
        title="TGF — Destruction nids de guêpes & frelons à Toulouse 7J/7"
        description="Destruction de nids de guêpes, frelons européens et frelons asiatiques à Toulouse, Haute-Garonne (31) et Gers (32). Intervention rapide 7J/7, devis gratuit, agréé Certibiocide."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <Hero />
      <Marquee />
      <Services />
      <Identification />
      <Process />
      <WhyUs />
      <ZoneTeaser />
      <Pricing />
      <VideoGallery />
      <Engagements />
      <Faq />

      <section className="relative z-10 bg-black py-20 lg:py-28" data-testid="home-quote-section">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Demande de <span className="text-voltage">devis gratuit</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-md">
              Décrivez votre problème : nous identifions l'espèce et vous recontactons rapidement
              pour une intervention 7J/7 à Toulouse et sa région.
            </p>
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
