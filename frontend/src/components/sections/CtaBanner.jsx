import { Phone, MessageSquare } from "lucide-react";
import { Reveal } from "../Reveal";
import { TEL_HREF, SMS_HREF, CONTACT } from "../../lib/data";

export const CtaBanner = () => (
  <section className="relative z-10 bg-voltage py-16 lg:py-20 overflow-hidden" data-testid="cta-banner">
    <div className="container-x relative">
      <Reveal>
        <h2 className="font-display font-extrabold uppercase tracking-tight text-black text-3xl sm:text-4xl lg:text-5xl max-w-2xl leading-[0.95]">
          Un nid de guêpes ou de frelons ?
        </h2>
        <p className="mt-4 text-black/80 text-lg max-w-xl font-medium">
          Appelez-nous maintenant pour une intervention rapide et sécurisée. Devis gratuit, 7J/7.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={TEL_HREF} data-testid="cta-call" className="inline-flex items-center gap-2 bg-black text-voltage font-bold px-6 py-4 rounded-full hover:bg-zinc-900 transition-colors duration-200">
            <Phone size={18} strokeWidth={2.5} /> {CONTACT.phoneDisplay}
          </a>
          <a href={SMS_HREF} data-testid="cta-sms" className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-6 py-4 rounded-full hover:bg-black hover:text-voltage transition-colors duration-200">
            <MessageSquare size={18} strokeWidth={2.5} /> Envoyer un SMS
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
