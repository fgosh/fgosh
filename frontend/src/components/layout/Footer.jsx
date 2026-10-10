import { Link } from "react-router-dom";
import { Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { Logo } from "../Logo";
import { NAV, CONTACT, TEL_HREF, SMS_HREF } from "../../lib/data";

export const Footer = () => (
  <footer className="relative z-10 bg-black border-t-2 border-voltage pt-16 pb-28 lg:pb-16" data-testid="site-footer">
    <div className="container-x grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2 max-w-sm">
        <Logo />
        <p className="mt-5 text-zinc-400 text-sm leading-relaxed">
          Destruction de nids de guêpes, frelons européens et frelons asiatiques à Toulouse,
          en Haute-Garonne (31) et dans le Gers (32). Intervention rapide 7J/7, devis gratuit.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono2 uppercase tracking-widest text-voltage border border-[rgba(255,230,0,0.3)] px-3 py-2">
          <ShieldCheck size={15} /> Agréé Certibiocide · SIRET {CONTACT.siret}
        </div>
      </div>

      <div>
        <h4 className="font-mono2 text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Pages</h4>
        <ul className="space-y-2.5">
          {NAV.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-zinc-300 hover:text-voltage transition-colors text-sm"
                data-testid={`footer-link-${item.path === "/" ? "accueil" : item.path.slice(1)}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-mono2 text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Urgence 7J/7</h4>
        <a href={TEL_HREF} data-testid="footer-call" className="flex items-center gap-2 text-white font-display font-bold text-xl hover:text-voltage transition-colors">
          <Phone size={18} /> {CONTACT.phoneDisplay}
        </a>
        <a href={SMS_HREF} data-testid="footer-sms" className="mt-4 inline-flex items-center gap-2 bg-voltage text-black font-bold text-sm px-4 py-2.5 rounded-full hover:bg-[#ffc700] transition-colors">
          <MessageSquare size={15} /> Envoyer un SMS
        </a>
        <p className="mt-5 text-zinc-500 text-xs">{CONTACT.zoneShort}</p>
      </div>
    </div>

    <div className="container-x mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between gap-2 text-zinc-600 text-xs">
      <span>© {new Date().getFullYear()} {CONTACT.name}. Tous droits réservés.</span>
      <span>Traitements raisonnés · Intervention garantie</span>
    </div>
  </footer>
);
