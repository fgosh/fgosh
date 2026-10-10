import { useState } from "react";
import { motion } from "framer-motion";
import { FRANCE_PATH } from "../lib/franceMap";
import { MAP_PINS } from "../lib/data";

export const FranceMap = () => {
  const [hover, setHover] = useState(null);

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square" data-testid="france-map">
      <svg viewBox="0 0 1024 1024" className="w-full h-full drop-shadow-[0_0_40px_rgba(255,230,0,0.08)]">
        <g transform="translate(0,1024) scale(0.1,-0.1)">
          <path d={FRANCE_PATH} fill="#161619" stroke="#3f3f46" strokeWidth="18" />
        </g>
      </svg>

      {/* Occitanie glow */}
      <div
        className="absolute rounded-full bg-voltage/10 blur-2xl pointer-events-none"
        style={{ left: "40%", top: "80%", width: "22%", height: "18%", transform: "translate(-50%,-50%)" }}
      />

      {MAP_PINS.map((pin, i) => (
        <motion.button
          key={pin.city}
          type="button"
          data-testid={`map-pin-${pin.city.toLowerCase().replace(/[^a-z]/g, "-")}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 group"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 300 }}
          onMouseEnter={() => setHover(pin.city)}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover(pin.city)}
          onBlur={() => setHover(null)}
        >
          <span
            className={`absolute rounded-full bg-red-500 ${pin.major ? "pin-ping" : ""}`}
            style={{ width: pin.major ? 14 : 10, height: pin.major ? 14 : 10, left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
          />
          <span
            className="block rounded-full bg-red-500 ring-2 ring-red-500/40 relative z-10 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            style={{ width: pin.major ? 12 : 8, height: pin.major ? 12 : 8 }}
          />
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap bg-black border border-voltage/40 text-voltage font-mono2 text-[10px] uppercase tracking-wider px-2 py-1 transition-opacity duration-200 z-20 ${
              hover === pin.city ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {pin.city}
          </span>
        </motion.button>
      ))}
    </div>
  );
};
