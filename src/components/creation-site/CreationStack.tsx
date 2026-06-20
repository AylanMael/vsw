import { motion } from "motion/react";
import { Zap, XCircle, CheckCircle2 } from "lucide-react";

const modernStackPoints = [
  {
    title: "Performance plus maîtrisée",
    desc: "Une base React/Vite/Tailwind permet de créer des interfaces légères, rapides et adaptées au mobile lorsque le projet est bien optimisé.",
  },
  {
    title: "Surface technique plus réduite",
    desc: "Un site statique ou semi-statique limite certaines dépendances : pas de tableau d’administration exposé ni de plugins à maintenir en permanence.",
  },
  {
    title: "Maintenance plus prévisible",
    desc: "La structure du code reste claire et versionnée, ce qui facilite les évolutions futures par un développeur qualifié.",
  },
  {
    title: "Design plus libre",
    desc: "L’interface peut être conçue sur mesure, sans dépendre des contraintes d’un thème ou d’un constructeur visuel.",
  },
];

const cmsPoints = [
  {
    title: "Performance variable",
    desc: "Un site WordPress peut être performant, mais il dépend fortement du thème, de l’hébergement, du nombre de plugins et de la qualité de configuration.",
  },
  {
    title: "Maintenance régulière nécessaire",
    desc: "WordPress demande un suivi des mises à jour du cœur, des thèmes, des extensions et des sauvegardes.",
  },
  {
    title: "Dépendance aux extensions",
    desc: "Certaines fonctionnalités reposent sur des plugins tiers, ce qui peut créer des incompatibilités si l’écosystème n’est pas bien suivi.",
  },
  {
    title: "Design parfois contraint",
    desc: "Les builders comme Elementor ou Divi sont pratiques, mais peuvent parfois alourdir le site ou limiter certains choix très personnalisés.",
  },
];

export function CreationStack() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-10 [background-size:24px_24px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Choix technique
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            React, WordPress ou CMS : choisir la bonne base selon le projet
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Il n’existe pas une seule technologie idéale pour tous les cas.
            WordPress reste pertinent pour certains sites administrables. Une
            stack React, Vite et Tailwind devient intéressante lorsqu’on cherche
            plus de liberté, de performance et d’évolutivité technique.
          </p>
        </div>

        {/* Comparison */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Modern stack */}
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-between rounded-[2rem] border border-blue-400/20 bg-white/[0.07] p-8 shadow-2xl shadow-slate-950/20 backdrop-blur"
          >
            <div>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Zap className="h-7 w-7" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                    Stack moderne
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    React / Vite / Tailwind
                  </h3>
                </div>
              </div>

              <p className="mb-8 text-sm leading-7 text-slate-300">
                Une solution adaptée aux sites performants, landing pages,
                interfaces sur mesure, démonstrateurs et applications web qui
                demandent plus de contrôle sur le design et le code.
              </p>

              <div className="space-y-5">
                {modernStackPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* CMS / WordPress */}
          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-xl shadow-slate-950/10"
          >
            <div>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-500/10 text-amber-300">
                  <XCircle className="h-7 w-7" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    CMS traditionnels
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    WordPress & builders
                  </h3>
                </div>
              </div>

              <p className="mb-8 text-sm leading-7 text-slate-300">
                WordPress peut être un très bon choix pour un site administrable
                ou un blog. Il demande simplement une attention particulière sur
                la performance, les extensions, les sauvegardes et la sécurité.
              </p>

              <div className="space-y-5">
                {cmsPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        {/* Stack tags */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            <span className="mr-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Technologies possibles :
            </span>

            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "TypeScript",
              "Firebase si besoin",
              "WordPress si adapté",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-400">
            Le choix technique dépend du besoin réel : autonomie éditoriale,
            performance, budget, maintenance, fonctionnalités, SEO et évolution
            future. VSW Digital vous conseille la solution la plus cohérente, pas
            forcément la plus complexe.
          </p>
        </div>
      </div>
    </section>
  );
}