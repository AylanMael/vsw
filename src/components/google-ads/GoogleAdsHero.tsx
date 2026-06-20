import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BarChart, Target, Phone, MousePointer } from "lucide-react";

export function GoogleAdsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-10 [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Google Ads & génération de leads
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Des campagnes Google Ads pensées pour attirer des{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-cyan-300 bg-clip-text text-transparent">
              demandes qualifiées
            </span>
          </h1>

          <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            VSW Digital structure vos campagnes Google Ads pour cibler les bonnes
            recherches, améliorer vos pages d’atterrissage et mieux mesurer les
            appels, formulaires et demandes de devis.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Demander un audit Google Ads
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Parler de mon projet
            </Link>
          </div>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="relative hidden md:block"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#3b82f6]/25 to-transparent blur-2xl" />

          <div className="relative rotate-2 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#020617] p-7">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                    Tableau de suivi
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Campagne Search
                  </h3>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Exemple
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  icon={MousePointer}
                  label="Clics utiles"
                  value="À suivre"
                />

                <MetricCard
                  icon={Phone}
                  label="Appels"
                  value="Mesurés"
                />
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <BarChart className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm text-slate-300">
                    Suivi des conversions :{" "}
                    <span className="font-semibold text-blue-300">
                      formulaires, appels, clics importants
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <Target className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm text-slate-300">
                    Objectif : réduire les dépenses inutiles et mieux cibler les
                    recherches à intention commerciale.
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                <p className="text-xs leading-6 text-blue-100">
                  Les résultats dépendent du secteur, du budget, de la zone
                  ciblée, de la concurrence, des annonces et de la qualité de la
                  page d’atterrissage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MousePointer;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <div className="flex items-center gap-2 text-sm text-slate-300">
        <Icon className="h-5 w-5 text-blue-300" />
        <span>{label}</span>
      </div>

      <p className="mt-3 font-display text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}