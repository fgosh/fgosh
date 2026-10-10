import { Reveal, Eyebrow } from "../Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FAQ } from "../../lib/data";

export const Faq = () => (
  <section className="relative z-10 bg-background py-20 lg:py-28" data-testid="faq-section">
    <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
      <Reveal>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Questions <span className="text-voltage">fréquentes</span>
        </h2>
        <p className="mt-4 text-zinc-400">Tout ce qu'il faut savoir avant notre intervention.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-zinc-800" data-testid={`faq-item-${i}`}>
              <AccordionTrigger className="text-left font-display font-semibold text-white text-base sm:text-lg hover:text-voltage hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
