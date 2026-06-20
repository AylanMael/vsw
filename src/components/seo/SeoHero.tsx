import { Search, TrendingUp, MapPin, Check } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const mockSearches = [
  {
    keyword: "artisan charpentier bordeaux",
    title: "Charpentier à Bordeaux | Charpente, couverture et rénovation",
    url: "https://www.exemple-charpente.fr",
    desc: "Entreprise locale spécialisée en charpente bois, couverture et rénovation. Présentation des services, zone d’intervention et demande de devis.",
    badge: "Exemple SEO local",
  },
  {
    keyword: "cabinet comptable nantes",
    title: "Cabinet comptable à Nantes | Accompagnement PME et indépendants",
    url: "https://www.exemple-comptable.fr",
    desc: "Accompagnement comptable pour créateurs d’entreprise, artisans et PME. Services, expertise, contact et prise de rendez-vous.",
    badge: "Exemple B2B",
  },
  {
    keyword: "installateur pompe à chaleur lyon",
    title: "Installation pompe à chaleur à Lyon | Étude et devis",
    url: "https://www.exemple-chauffage.fr",
    desc: "Installation, entretien et remplacement de pompes à chaleur. Page structurée pour répondre aux recherches locales des particuliers.",
    badge: "Exemple service local",
  },
];

const seoPoints = [
  "Structure SEO claire",
  "Pages services optimisées",
  "SEO local et contenus ciblés",
  "Suivi des performances",
];

export function SeoHero() {
  const [selectedSearch, setSelectedSearch] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const targetText = mockSearches[selectedSearch].keyword;

    setTypingText("");
    setIsTyping(true);

    let index = 0;

    const interval = window.setInterval(() => {
      if (index < targetText.length) {
        setTypingText((currentText) => currentText + targetText.charAt(index));
        index += 1;
      } else {
        window.clearInterval(interval);
        setIsTyping(false);
      }
    }, 45);

    return () => window.clearInterval(interval);
  }, [selectedSearch]);

  const currentSearch = mockSearches[selectedSearch];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.04] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute -left-[10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#3b82f6]/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left */}
          <div className="text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2"
            >
              <TrendingUp className="h-4 w-4 text-blue-300" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Référencement naturel & SEO local
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="font-display text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
            >
              Améliorez la visibilité de votre PME sur{" "}
              <span className="relative inline-block text-[#3b82f6]">
                Google
                <span className="absolute bottom-1 left-0 h-1 w-full bg-blue-400/25" />
              </span>{" "}
              avec une stratégie SEO claire
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
            >
              VSW Digital vous aide à structurer votre site, vos contenus et vos
              pages locales pour mieux répondre aux recherches de vos futurs
              clients. L’objectif : construire une visibilité durable, mesurable
              et cohérente avec votre activité.
            </motion.p>

            {/* Points */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-8 grid gap-3 text-sm font-medium text-slate-200 sm:grid-cols-2"
            >
              {seoPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-1 text-emerald-300">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/contact?subject=audit-seo"
                id="cta-seo-hero-audit"
                className="inline-flex items-center justify-center rounded-2xl bg-[#3b82f6] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Demander un audit SEO
              </Link>

              <a
                href="#seo-estimator"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Estimer mon projet
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 text-[#0f172a] shadow-2xl shadow-slate-950/30"
            >
              {/* Header mockup */}
              <div className="mb-5 border-b border-slate-100 pb-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="select-none font-sans text-lg font-extrabold tracking-tight">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Simulation
                  </span>
                </div>

                {/* Search bar */}
                <div className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                  <Search className="h-4 w-4 shrink-0 text-slate-400" />

                  <div className="flex min-h-[16px] items-center font-mono text-xs font-medium text-[#0f172a]">
                    {typingText}
                    {isTyping && (
                      <span className="ml-0.5 h-3.5 w-1 animate-pulse bg-[#3b82f6]" />
                    )}
                  </div>
                </div>

                {/* Selectors */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {mockSearches.map((search, index) => (
                    <button
                      key={search.keyword}
                      type="button"
                      id={`serp-selector-${index}`}
                      onClick={() => setSelectedSearch(index)}
                      className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold transition-all ${
                        selectedSearch === index
                          ? "border-[#3b82f6] bg-blue-50 text-[#3b82f6]"
                          : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-[#3b82f6]"
                      }`}
                    >
                      {index === 0
                        ? "Artisan"
                        : index === 1
                          ? "B2B"
                          : "Service local"}
                    </button>
                  ))}
                </div>
              </div>

              {/* SERP result */}
              <div className="space-y-4">
                <div className="relative rounded-2xl border border-blue-100 bg-blue-50/40 p-4 shadow-sm">
                  <div className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
                    {currentSearch.badge}
                  </div>

                  <div className="mb-2 flex items-center gap-2 pr-24">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f172a] text-[9px] font-bold text-white">
                      VSW
                    </div>

                    <div className="min-w-0">
                      <span className="block truncate text-[10px] font-medium text-slate-500">
                        {currentSearch.url}
                      </span>
                      <span className="block text-[8px] uppercase tracking-wider text-slate-400">
                        Résultat organique simulé
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-2 text-sm font-semibold leading-snug text-blue-800">
                    {currentSearch.title}
                  </h3>

                  <p className="mb-4 text-xs leading-6 text-slate-600">
                    {currentSearch.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 border-t border-blue-100 pt-3 text-[10px] font-semibold text-blue-800">
                    <span>Services</span>
                    <span>Demande de devis</span>
                  </div>
                </div>

                {/* Local pack */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-red-500" />
                    <span className="text-[11px] font-semibold text-[#0f172a]">
                      Fiche Google Business à optimiser
                    </span>
                  </div>

                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    Local SEO
                  </span>
                </div>

                <p className="rounded-xl border border-amber-100 bg-amber-50 p-3 text-[11px] leading-5 text-amber-900">
                  Cette simulation illustre une structure SEO possible. Elle ne
                  représente pas une promesse de positionnement.
                </p>
              </div>
            </motion.div>

            <div className="absolute -inset-4 -z-10 rounded-full bg-[#3b82f6]/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}