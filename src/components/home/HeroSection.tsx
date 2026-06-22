import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MousePointerClick, Search, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[100px]" />

        {/* Grid subtil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Colonne texte */}
        <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 shadow-2xl shadow-blue-500/10 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-[#3b82f6]" />
            Agence web, SEO & solutions digitales
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
          >
            Des sites web pensés pour{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                générer des clients
              </span>
              <span className="absolute -bottom-2 left-0 z-0 h-3 w-full rounded-full bg-[#3b82f6]/20 blur-sm" />
            </span>
            , pas seulement pour exister.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0"
          >
            VSW Digital accompagne les PME, artisans, commerçants et entreprises
            de services dans la création de sites performants, le référencement
            SEO, Google Ads et le développement d’outils web sur mesure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-700/30 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-800/40"
            >
              Demander un audit gratuit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/8 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/12"
            >
              Découvrir nos services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-9 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:max-w-3xl"
          >
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur lg:justify-start">
              <CheckCircle2 className="h-4 w-4 text-[#3b82f6]" />
              Sites rapides & responsives
            </div>
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur lg:justify-start">
              <Search className="h-4 w-4 text-[#3b82f6]" />
              SEO pensé dès la création
            </div>
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur lg:justify-start">
              <MousePointerClick className="h-4 w-4 text-[#3b82f6]" />
              Conversion & demandes qualifiées
            </div>
          </motion.div>
        </div>

        {/* Colonne visuelle */}
        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="relative mx-auto hidden w-full max-w-xl lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {/* Barre navigateur */}
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="rounded-full bg-white/8 px-4 py-1 text-xs text-slate-300">
                vsw-digital.fr
              </div>
            </div>

            {/* Mockup dashboard */}
            <div className="rounded-[1.5rem] bg-[#f8fafc] p-5 text-[#0f172a]">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Tableau de bord digital
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    Leads & visibilité
                  </h3>
                </div>
                <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  +38%
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">Demandes</p>
                  <p className="mt-2 text-2xl font-bold">124</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">SEO</p>
                  <p className="mt-2 text-2xl font-bold">82%</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">Conversion</p>
                  <p className="mt-2 text-2xl font-bold">6.4%</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold">Canaux d’acquisition</p>
                  <p className="text-xs text-slate-400">30 derniers jours</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>SEO</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[68%] rounded-full bg-[#3b82f6]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Google Ads</span>
                      <span className="font-medium">51%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[51%] rounded-full bg-[#0f172a]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Formulaires</span>
                      <span className="font-medium">43%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[43%] rounded-full bg-sky-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#0f172a] p-4 text-white">
                  <p className="text-xs text-slate-300">Audit digital</p>
                  <p className="mt-2 text-sm font-semibold">
                    Priorités identifiées
                  </p>
                </div>
                <div className="rounded-2xl bg-[#3b82f6] p-4 text-white">
                  <p className="text-xs text-blue-100">Site web</p>
                  <p className="mt-2 text-sm font-semibold">
                    Optimisé conversion
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Badge flottant */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="absolute -bottom-6 -left-6 rounded-2xl border border-white/12 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-xs text-slate-300">Approche orientée</p>
            <p className="text-lg font-bold text-white">visibilité + leads</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}