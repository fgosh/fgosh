import { motion } from "framer-motion";

export const Marquee = () => {
  const items = ["GUÊPES", "FRELONS ASIATIQUES", "FRELONS EUROPÉENS", "7J/7", "DEVIS GRATUIT", "CERTIBIOCIDE", "INTERVENTION RAPIDE"];
  const row = [...items, ...items];
  return (
    <div className="relative z-10 overflow-hidden border-y border-zinc-800 bg-black py-5">
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-700">{t}</span>
            <span className="w-2.5 h-2.5 rotate-45 bg-voltage" />
          </div>
        ))}
      </div>
    </div>
  );
};
