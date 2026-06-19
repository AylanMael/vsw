import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Cloud,
  Layout,
  Megaphone,
  Search,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const serviceCards = [
  {
    icon: Layout,
    label: "Sites web",
    desc: "Vitrine, refonte, landing pages",
  },
  {
    icon: Search,
    label: "SEO",
    desc: "Visibilité Google durable",
  },
  {
    icon: Megaphone,
    label: "Google Ads",
    desc: "Demandes qualifiées rapides",
  },
  {
    icon: Cloud,
    label: "Cloud",
    desc: "Automatisation & données",
  },
  {
    icon: Bot,
    label: "Applications",
    desc: "Outils web sur mesure",
  },
  {
    icon: Wrench,
    label: "Maintenance",
    desc: "Suivi, sécurité, évolution",
  },
];

const benefits = [
  "Stratégie claire",
  "SEO & conversion",
  "Solutions évolutives",
];

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
        >
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 shadow-2xl shadow-blue-500/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#3b82f6]" />
            Services VSW Digital
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
            Des services digitaux pour{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              accélérer votre croissance
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
            VSW Digital accompagne les PME, artisans, commerçants et entreprises
            de services dans la création de sites performants, le référencement
            SEO, Google Ads, les applications web, le cloud et l’automatisation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {benefits.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-[#3b82f6]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/40"
            >
              Demander un audit gratuit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#services-list"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              Explorer nos services
            </a>
          </div>
        </motion.div>

        {/* Visuel */}
        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          className="relative mx-auto hidden w-full max-w-xl lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {/* Barre supérieure */}
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>

              <div className="rounded-full bg-white/8 px-4 py-1 text-xs text-slate-300">
                services.vsw-digital.fr
              </div>
            </div>

            {/* Cartes services */}
            <div className="rounded-[1.5rem] bg-[#f8fafc] p-5 text-[#0f172a]">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Écosystème digital
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    Vos leviers de croissance
                  </h3>
                </div>

                <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  VSW Digital
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {serviceCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#3b82f6]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="font-bold text-[#0f172a]">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-[#0f172a] p-5 text-white">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3b82f6]">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Croissance & acquisition</p>
                    <p className="text-xs text-slate-300">
                      Une approche orientée visibilité, confiance et demandes.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 px-3 py-3">
                    <p className="text-lg font-bold">SEO</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Durable
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-3">
                    <p className="text-lg font-bold">Ads</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Rapide
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-3">
                    <p className="text-lg font-bold">Cloud</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Évolutif
                    </p>
                  </div>
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
            <p className="text-xs text-slate-300">Approche globale</p>
            <p className="text-lg font-bold text-white">web + SEO + cloud</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}