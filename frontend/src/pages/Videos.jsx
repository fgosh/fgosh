import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { VideoGallery } from "../components/sections/VideoGallery";
import { CtaBanner } from "../components/sections/CtaBanner";

export default function Videos() {
  return (
    <>
      <Seo
        title="Vidéos de nos interventions — TGF Toulouse Guêpes Frelons"
        description="Découvrez en vidéo nos interventions de destruction de nids de guêpes et de frelons à Toulouse et en Haute-Garonne. Nouvelles vidéos à venir."
        path="/videos"
      />
      <PageHero
        eyebrow="Vidéos"
        title="Nos interventions en"
        highlight="vidéo"
        subtitle="Destruction de nids de guêpes, frelons européens et frelons asiatiques, filmée sur le terrain. De nouvelles vidéos seront ajoutées prochainement."
      />
      <VideoGallery showHeader={false} />
      <CtaBanner />
    </>
  );
}
