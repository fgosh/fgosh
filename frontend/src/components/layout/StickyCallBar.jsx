import { Phone, MessageSquare } from "lucide-react";
import { TEL_HREF, SMS_HREF, CONTACT } from "../../lib/data";

export const StickyCallBar = () => (
  <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-zinc-800 grid grid-cols-2" data-testid="sticky-call-bar">
    <a
      href={TEL_HREF}
      data-testid="sticky-call"
      className="flex items-center justify-center gap-2 py-4 bg-voltage text-black font-bold"
    >
      <Phone size={18} strokeWidth={2.5} /> Appeler
    </a>
    <a
      href={SMS_HREF}
      data-testid="sticky-sms"
      className="flex items-center justify-center gap-2 py-4 text-white font-bold"
    >
      <MessageSquare size={18} strokeWidth={2.5} /> SMS urgence
    </a>
  </div>
);
