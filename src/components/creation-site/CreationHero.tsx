import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Check, Star } from "lucide-react";

export function CreationHero() {
  const [speedScore, setSpeedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;

      const interval = setInterval(() => {
        if (current < 92) {
          current += 1;
          setSpeedScore(current);
        } else {
          clearInterval(interval);
        }
      }, 15);

      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/70 via-white to-white py-24 md:py-32">
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
            >
              <Zap className="h-4 w-4 text-[#3b82f6]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Création de site internet
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#0f172a] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Création de sites internet pensés pour{" "}
              <span className="relative inline-block text-[#3b82f6]">
                inspirer confiance
                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-blue-100" />
              </span>{" "}
              et générer des demandes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              VSW Digital conçoit des sites modernes, rapides, lisibles sur
              mobile et structurés pour présenter clairement vos services,
              rassurer vos visiteurs et faciliter la prise de contact.
            </motion.p>

            {/* Reassurance points */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 grid gap-4 text-sm font-medium text-[#0f172a] sm:grid-cols-2"
            >
              {[
                "Structure responsive mobile et desktop",
                "Base SEO technique propre",
                "Site livré avec accès aux fichiers prévus",
                "HTTPS selon l’hébergement choisi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-1.5 text-emerald-500">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/contact"
                id="cta-hero-contact"
                className="group inline-flex items-center justify-center rounded-2xl bg-[#0f172a] px-8 py-4 font-semibold text-white shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-[#3b82f6]"
              >
                Parler de mon projet
              </Link>

              <a
                href="#estimator"
                id="cta-hero-estimator"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-[#0f172a] shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
              >
                Estimer mon budget
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center"
            >
              <div className="flex -space-x-2">
                {["PME", "SEO", "UX", "+"].map((item) => (
                  <div
                    key={item}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0f172a] text-[10px] font-bold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-1 flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs leading-6 text-slate-500">
                  Une approche pensée pour les PME, artisans et entreprises de
                  services qui veulent une présence plus professionnelle.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Performance simulator */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a] p-6 text-white shadow-2xl shadow-slate-900/25"
            >
              {/* Browser header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>

                <div className="w-44 truncate rounded bg-white/5 px-3 py-1 text-center text-[10px] text-white/50">
                  audit-performance-site
                </div>

                <div className="w-4" />
              </div>

              <div className="mb-6 flex items-center gap-2">
                <div className="h-6 w-1 rounded bg-[#3b82f6]" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Simulation performance
                </h4>
              </div>

              {/* Radial Meter */}
              <div className="relative mb-6 flex flex-col items-center justify-center py-4">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <svg className="h-full w-full -rotate-90 transform">
                    <circle
                      cx="80"
                      cy="80"
                      r="68"
                      className="fill-none stroke-white/10"
                      strokeWidth="10"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="68"
                      className="fill-none stroke-emerald-500 transition-all duration-300"
                      strokeWidth="10"
                      strokeDasharray="427"
                      strokeDashoffset={427 - (427 * speedScore) / 100}
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute flex flex-col items-center">
                    <span className="font-display text-5xl font-bold text-emerald-400">
                      {speedScore}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      Score indicatif
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub Scores */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                {[
                  ["Mobile", "Prioritaire"],
                  ["SEO", "Base saine"],
                  ["UX", "Lisible"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="font-display text-lg font-bold text-emerald-400">
                      {value}
                    </div>
                    <div className="mt-1 text-[9px] uppercase tracking-wide text-white/50">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/80">
                {[
                  ["Chargement", "Optimisé selon projet"],
                  ["Structure", "HTML sémantique"],
                  ["Affichage", "Responsive"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[11px]">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{label}</span>
                    </div>
                    <span className="text-right font-semibold text-emerald-400">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-[35%] rounded-l-full bg-emerald-500 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-lg">
                Exemple indicatif
              </div>
            </motion.div>

            <div className="absolute -inset-4 -z-10 rounded-full bg-[#3b82f6]/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}