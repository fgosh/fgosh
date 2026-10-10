import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "../Logo";
import { NAV, TEL_HREF, CONTACT } from "../../lib/data";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="hazard-strip h-1.5 w-full fixed top-0 left-0 z-[60]" />
      <header
        className={`fixed top-1.5 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "glass border-b border-zinc-800" : "bg-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="container-x flex items-center justify-between h-16">
          <Link to="/" data-testid="header-home-link">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  data-testid={`nav-${item.path === "/" ? "accueil" : item.path.slice(1)}`}
                  className={`font-mono2 text-[12px] uppercase tracking-wider px-3 py-2 transition-colors duration-200 ${
                    active ? "text-voltage" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={TEL_HREF}
              data-testid="header-call-button"
              className="hidden sm:inline-flex items-center gap-2 bg-voltage text-black font-bold text-sm px-4 py-2.5 rounded-full hover:bg-[#ffc700] transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2.5} />
              {CONTACT.phoneDisplay}
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen((v) => !v)}
              data-testid="mobile-menu-toggle"
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass border-t border-zinc-800 overflow-hidden"
              data-testid="mobile-nav"
            >
              <div className="container-x py-4 flex flex-col">
                {NAV.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-testid={`mobile-nav-${item.path === "/" ? "accueil" : item.path.slice(1)}`}
                    className={`py-3 border-b border-zinc-800/60 font-display font-semibold text-lg ${
                      pathname === item.path ? "text-voltage" : "text-zinc-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={TEL_HREF}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-voltage text-black font-bold px-4 py-3 rounded-full"
                >
                  <Phone size={16} strokeWidth={2.5} /> Appeler le {CONTACT.phoneDisplay}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
