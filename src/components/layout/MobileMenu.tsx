import { Link, useLocation } from "react-router-dom";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Services", path: "/services" },
  { label: "Réalisations", path: "/realisations" },
  { label: "À propos", path: "/a-propos" },
  { label: "Blog", path: "/blog" },
];

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-[60] bg-[#0f172a]/40 backdrop-blur-sm md:hidden"
        >
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="ml-auto flex h-full w-full max-w-sm flex-col overflow-hidden bg-white shadow-2xl"
          >
            {/* Décor subtil */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3b82f6]/15 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-sky-300/20 blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative flex h-20 items-center justify-between border-b border-slate-200 px-6">
              <Link to="/" onClick={onClose} aria-label="Accueil VSW Digital">
                <img
                  src="/images/logo-vsw.webp"
                  alt="VSW Digital"
                  width="770"
                  height="200"
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0f172a] shadow-sm transition-colors hover:bg-slate-50"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Intro */}
            <div className="relative px-6 pt-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#3b82f6]">
                <Sparkles className="h-4 w-4" />
                VSW Digital
              </span>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Sites web, SEO, applications web et automatisation pour PME,
                artisans et entreprises de services.
              </p>
            </div>

            {/* Navigation */}
            <nav className="relative flex flex-col gap-2 px-6 py-8">
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  location.pathname === item.path ||
                  location.pathname.startsWith(`${item.path}/`);

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                        isActive
                          ? "bg-[#0f172a] text-white shadow-lg shadow-slate-900/15"
                          : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-[#0f172a]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? "text-white" : "text-[#3b82f6]"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA bas */}
            <div className="relative mt-auto border-t border-slate-200 px-6 py-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="group flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-blue-500/25 transition-all hover:bg-blue-400"
              >
                <span>Audit gratuit</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                © {new Date().getFullYear()} VSW Digital
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}