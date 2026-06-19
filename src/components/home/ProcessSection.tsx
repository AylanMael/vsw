import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  Zap,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Analyse",
    desc: "Nous étudions votre activité, vos objectifs, vos clients et vos outils actuels pour identifier les vrais leviers de croissance.",
  },
  {
    icon: Target,
    title: "Stratégie",
    desc: "Nous définissons une solution claire : structure du site, parcours utilisateur, SEO, contenus, fonctionnalités et priorités.",
  },
  {
    icon: Zap,
    title: "Création",
    desc: "Nous concevons une interface moderne, rapide et responsive, avec un développement propre, évolutif et orienté conversion.",
  },
  {
    icon: Rocket,
    title: "Lancement",
    desc: "Nous mettons le projet en ligne, vérifions les points clés, suivons les premières performances et préparons les optimisations.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 md:py-32">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0f172a]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      </div>

      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]"
          >
            <CheckCircle2 className="h-4 w-4" />
            Notre méthode
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
          >
            Une méthode claire pour transformer vos idées en{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
              solutions digitales efficaces
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Chaque projet avance avec une logique simple : comprendre votre
            besoin, construire une stratégie cohérente, développer proprement,
            puis améliorer progressivement les résultats.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne horizontale desktop */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group relative rounded-[1.7rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Numéro */}
                  <div className="absolute right-6 top-6 font-display text-5xl font-bold leading-none text-[#0f172a]/[0.04] transition-colors group-hover:text-[#3b82f6]/10">
                    0{index + 1}
                  </div>

                  {/* Point de timeline */}
                  <div className="relative z-10 mb-7 flex justify-center lg:justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f172a] text-white shadow-xl shadow-slate-900/20 ring-8 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:shadow-blue-500/25">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-[#0f172a]">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-[#3b82f6]/30 via-slate-200 to-transparent" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Étape {index + 1}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bloc réassurance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                Une approche progressive
              </p>

              <h3 className="font-display text-2xl font-bold tracking-tight text-[#0f172a] md:text-3xl">
                Pas de solution générique : chaque projet part de votre activité.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Notre objectif est de construire une solution utile, claire et
                évolutive : un site plus performant, une meilleure visibilité,
                des demandes plus qualifiées ou un outil digital adapté à votre
                fonctionnement.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#0f172a] shadow-sm">
                Analyse avant exécution
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#0f172a] shadow-sm">
                SEO pensé dès la structure
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#0f172a] shadow-sm">
                Amélioration continue après lancement
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Parler de mon projet
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-[#0f172a] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#3b82f6]"
            >
              Voir nos services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}