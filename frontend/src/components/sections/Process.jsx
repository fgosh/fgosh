import { Reveal, Eyebrow } from "../Reveal";
import { PROCESS } from "../../lib/data";

export const Process = () => (
  <section className="relative z-10 bg-background py-20 lg:py-28" data-testid="process-section">
    <div className="container-x">
      <Reveal>
        <Eyebrow>Notre méthode</Eyebrow>
        <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
          Une intervention en <span className="text-voltage">6 étapes</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.07}>
            <div className="group relative rounded-2xl border border-zinc-800 bg-card p-7 h-full hover:border-voltage/40 transition-colors duration-300" data-testid={`process-step-${step.n}`}>
              <span className="font-display font-extrabold text-5xl text-zinc-800 group-hover:text-voltage/80 transition-colors duration-300">
                {step.n}
              </span>
              <h3 className="mt-3 font-display font-bold text-xl text-white">{step.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
