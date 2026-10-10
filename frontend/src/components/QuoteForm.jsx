import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INSECTS = ["Guêpes", "Frelon européen", "Frelon asiatique", "Je ne sais pas"];

export const QuoteForm = ({ compact = false }) => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", zip: "", insect: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Merci de renseigner votre nom, téléphone et la description.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/quotes`, form);
      setDone(true);
      toast.success("Demande envoyée ! Nous vous rappelons rapidement.");
      setForm({ name: "", phone: "", city: "", zip: "", insect: "", message: "" });
    } catch (err) {
      toast.error("Une erreur est survenue. Appelez-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-zinc-900/80 border border-zinc-700 focus:border-voltage focus:ring-1 focus:ring-voltage outline-none rounded-md px-4 py-3 text-white placeholder:text-zinc-500 transition-colors duration-200";

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass border border-voltage/40 rounded-2xl p-8 text-center"
        data-testid="quote-success"
      >
        <CheckCircle2 className="mx-auto text-voltage mb-4" size={48} />
        <h3 className="font-display font-bold text-2xl text-white mb-2">Demande reçue</h3>
        <p className="text-zinc-400">Merci. Nous vous recontactons dans les meilleurs délais pour votre devis gratuit.</p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 font-mono2 text-xs uppercase tracking-widest text-voltage underline underline-offset-4"
          data-testid="quote-reset"
        >
          Envoyer une autre demande
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="glass border border-zinc-800 rounded-2xl p-6 sm:p-8" data-testid="quote-form">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="block text-xs font-mono2 uppercase tracking-widest text-zinc-400 mb-1.5">Nom *</label>
          <input data-testid="quote-name" className={inputCls} value={form.name} onChange={update("name")} placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-xs font-mono2 uppercase tracking-widest text-zinc-400 mb-1.5">Téléphone *</label>
          <input data-testid="quote-phone" className={inputCls} value={form.phone} onChange={update("phone")} placeholder="06 ..." />
        </div>
        <div>
          <label className="block text-xs font-mono2 uppercase tracking-widest text-zinc-400 mb-1.5">Ville</label>
          <input data-testid="quote-city" className={inputCls} value={form.city} onChange={update("city")} placeholder="Toulouse" />
        </div>
        <div>
          <label className="block text-xs font-mono2 uppercase tracking-widest text-zinc-400 mb-1.5">Code postal</label>
          <input data-testid="quote-zip" className={inputCls} value={form.zip} onChange={update("zip")} placeholder="31000" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-mono2 uppercase tracking-widest text-zinc-400 mb-1.5">Type de nuisible</label>
        <div className="flex flex-wrap gap-2">
          {INSECTS.map((ins) => (
            <button
              type="button"
              key={ins}
              data-testid={`quote-insect-${ins.toLowerCase().replace(/[^a-z]/g, "-")}`}
              onClick={() => setForm((f) => ({ ...f, insect: ins }))}
              className={`px-3.5 py-2 rounded-full text-sm border transition-colors duration-200 ${
                form.insect === ins ? "bg-voltage text-black border-voltage font-semibold" : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
              }`}
            >
              {ins}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-mono2 uppercase tracking-widest text-zinc-400 mb-1.5">Description du problème *</label>
        <textarea data-testid="quote-message" rows={4} className={inputCls} value={form.message} onChange={update("message")} placeholder="Emplacement du nid, hauteur, taille..." />
      </div>

      <button
        type="submit"
        disabled={loading}
        data-testid="quote-submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-voltage text-black font-bold text-base px-6 py-4 rounded-full hover:bg-[#ffc700] transition-colors duration-200 disabled:opacity-60"
      >
        {loading ? "Envoi..." : <>Demander mon devis gratuit <Send size={17} strokeWidth={2.5} /></>}
      </button>
    </form>
  );
};
