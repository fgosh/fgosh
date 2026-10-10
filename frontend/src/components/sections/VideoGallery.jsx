import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Film } from "lucide-react";
import { Reveal, Eyebrow } from "../Reveal";
import { VIDEOS } from "../../lib/data";

export const VideoGallery = ({ showHeader = true }) => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative z-10 bg-black py-20 lg:py-28" data-testid="video-section">
      <div className="container-x">
        {showHeader && (
          <Reveal>
            <Eyebrow>Nos interventions</Eyebrow>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
              Vidéos de nos <span className="text-voltage">interventions</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl">
              Découvrez nos interventions réelles en vidéo. De nouvelles vidéos arrivent très prochainement.
            </p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((v, i) => {
            const hasVideo = Boolean(v.youtubeId);
            return (
              <Reveal key={i} delay={i * 0.08}>
                <button
                  type="button"
                  data-testid={`video-card-${i}`}
                  onClick={() => hasVideo && setActive(v)}
                  className="group relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-card hover:border-voltage/50 transition-colors duration-300"
                >
                  {hasVideo ? (
                    <img
                      src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full hazard-strip opacity-[0.12]" />
                  )}
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="w-12 h-12 rounded-full bg-voltage text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {hasVideo ? <Play size={20} fill="currentColor" /> : <Film size={20} />}
                    </span>
                    {!hasVideo && (
                      <span className="font-mono2 text-[10px] uppercase tracking-widest text-voltage">Bientôt disponible</span>
                    )}
                  </div>
                  <span className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-left text-white text-sm font-semibold">
                    {v.title}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
            data-testid="video-modal"
          >
            <button className="absolute top-5 right-5 text-white" onClick={() => setActive(null)} data-testid="video-modal-close">
              <X size={30} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                title={active.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
