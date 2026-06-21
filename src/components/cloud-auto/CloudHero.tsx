import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Zap,
  RefreshCcw,
  Bell,
  Workflow,
} from "lucide-react";

export function CloudHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute -left-[10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#3b82f6]/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Cloud & automatisation
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Automatisez vos processus avec des{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-cyan-300 bg-clip-text text-transparent">
              solutions cloud utiles
            </span>
          </h1>

          <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            VSW Digital aide les PME, artisans et entreprises de services à
            connecter leurs formulaires, données, notifications et outils métier
            pour mieux organiser leur activité.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              <span>Parler de mon automatisation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Découvrir les solutions
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
              {/* Header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <Workflow className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                      Exemple de workflow
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      Formulaire connecté
                    </h3>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Actif
                </span>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-2 gap-4">
                <FlowCard
                  icon={Database}
                  eyebrow="Entrée"
                  title="Formulaire"
                />

                <FlowCard
                  icon={Zap}
                  eyebrow="Traitement"
                  title="Firestore"
                />
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <RefreshCcw className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm text-slate-300">
                    Statut mis à jour automatiquement selon le scénario prévu.
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <Bell className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm text-slate-300">
                    Notification envoyée à l’équipe ou au client selon le besoin.
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                <p className="text-xs leading-6 text-blue-100">
                  Exemple visuel : le workflow final dépend des outils à
                  connecter, des règles métier et du niveau d’automatisation
                  souhaité.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FlowCard({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Database;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <p className="mb-2 text-xs text-slate-500">{eyebrow}</p>

      <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
        <Icon className="h-5 w-5 text-blue-300" />
        <span>{title}</span>
      </div>
    </div>
  );
}