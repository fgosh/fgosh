// Original TGF brand mark — hexagon (honeycomb) + stinger monogram
export const LogoMark = ({ size = 40, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path
      d="M32 9 L51 20 V44 L32 55 L13 44 V20 Z"
      fill="none"
      stroke="#FFE600"
      strokeWidth="3.2"
      strokeLinejoin="round"
    />
    <path
      d="M32 18 C27 18 24 21 24 25 C24 28 26 30 28 31 L26 46 L32 51 L38 46 L36 31 C38 30 40 28 40 25 C40 21 37 18 32 18 Z"
      fill="#FFE600"
    />
    <rect x="25.5" y="33" width="13" height="2.6" fill="#09090b" />
    <rect x="26" y="38" width="12" height="2.6" fill="#09090b" />
  </svg>
);

export const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2.5 ${className}`} data-testid="brand-logo">
    <LogoMark size={38} />
    <div className="leading-none">
      <div className="font-display font-extrabold text-lg tracking-tight text-white">
        TGF
      </div>
      <div className="font-mono2 text-[9px] uppercase tracking-[0.22em] text-zinc-400 mt-0.5">
        Guêpes · Frelons
      </div>
    </div>
  </div>
);
