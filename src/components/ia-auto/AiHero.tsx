import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Bot,
  Database,
  Sparkles,
  Workflow,
} from "lucide-react";

const aiUseCases = [
  {
    icon: Bot,
    title: "Assistant IA",
    desc: "Aide à orienter les visiteurs vers les bonnes informations.",
  },
  {
    icon: Database,
    title: "Documents",
    desc: "Extraction ou résumé d’informations selon le périmètre.",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    desc: "Tri, qualification et notifications internes.",
  },
];

export function AiHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles className="h-4 w-4" />
            IA & automatisation intelligente
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Intégrez l’IA là où elle apporte{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              un vrai gain métier
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            VSW Digital aide les PME à utiliser l’IA de manière concrète :
            assistants pour site web, tri des demandes, exploitation de contenus,
            lecture de documents et automatisations encadrées avec supervision
            humaine.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Étudier mon besoin IA
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#ai-use-cases"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              Découvrir les cas d’usage
            </a>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            {[
              "Supervision humaine",
              "Réponses encadrées",
              "Données maîtrisées",
              "Intégration progressive",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="relative mx-auto hidden w-full max-w-xl lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-blue-300" />
                <span className="text-xs font-semibold text-slate-300">
                  IA encadrée
                </span>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Exemple
              </span>
            </div>

            <div className="space-y-4">
              {aiUseCases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.12 }}
                    className="rounded-2xl border border-white/10 bg-[#020617]/70 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
              <p className="text-xs leading-6 text-blue-100">
                Exemple visuel : chaque solution IA doit être cadrée selon vos
                données, vos objectifs, vos contraintes et le niveau de
                supervision souhaité.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}