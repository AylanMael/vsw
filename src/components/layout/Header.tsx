import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = [
  { label: "Services", path: "/services" },
  { label: "Réalisations", path: "/realisations" },
  { label: "À propos", path: "/a-propos" },
  { label: "Blog", path: "/blog" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Retour à l’accueil VSW Digital"
            className="group flex items-center select-none"
          >
            <img
              src="/images/logo-vsw.webp"
              alt="VSW Digital"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-10"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-1 rounded-2xl border border-slate-200/70 bg-white/70 p-1 shadow-sm backdrop-blur md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(`${item.path}/`);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-xl px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive
                      ? "bg-[#0f172a] text-white shadow-md shadow-slate-900/10"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0f172a]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden items-center md:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/30 active:translate-y-0"
            >
              <span>Audit gratuit</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bouton mobile */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0f172a] shadow-sm transition-colors hover:bg-slate-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}