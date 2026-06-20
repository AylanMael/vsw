import { motion } from "motion/react";
import {
  Lightbulb,
  Target,
  Palette,
  Zap,
  Search,
  Rocket,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "Cadrage",
    icon: Lightbulb,
    title: "Analyse métier & concurrence",
    desc: "Nous analysons votre activité, vos concurrents, vos services, vos clients cibles et vos objectifs de conversion.",
    bullets: [
      "Analyse de votre positionnement",
      "Observation des concurrents directs",
      "Définition des objectifs du site",
    ],
  },
  {
    number: "02",
    phase: "Structure",
    icon: Target,
    title: "Arborescence & stratégie de contenu",
    desc: "Nous construisons une structure claire pour présenter vos services, vos zones d’intervention et les informations importantes.",
    bullets: [
      "Organisation des pages principales",
      "Structure de maillage interne",
      "Préparation des contenus prioritaires",
    ],
  },
  {
    number: "03",
    phase: "Design",
    icon: Palette,
    title: "Identité visuelle & interface",
    desc: "Nous créons une interface moderne, lisible et adaptée à votre image pour rassurer vos visiteurs et faciliter la navigation.",
    bullets: [
      "Design responsive mobile et desktop",
      "Hiérarchie visuelle claire",
      "Choix des couleurs, typographies et contrastes",
    ],
  },
  {
    number: "04",
    phase: "Développement",
    icon: Zap,
    title: "Intégration propre et responsive",
    desc: "Nous développons le site avec une base technique propre, légère et maintenable, adaptée aux besoins du projet.",
    bullets: [
      "Intégration responsive",
      "HTML sémantique",
      "Code clair et évolutif",
    ],
  },
  {
    number: "05",
    phase: "SEO",
    icon: Search,
    title: "Optimisation technique et SEO de base",
    desc: "Nous intégrons les bonnes pratiques essentielles pour aider les moteurs de recherche à comprendre la structure du site.",
    bullets: [
      "Balises title et meta description",
      "Structure Hn cohérente",
      "Données structurées si pertinentes",
    ],
  },
  {
    number: "06",
    phase: "Lancement",
    icon: Rocket,
    title: "Mise en ligne & accompagnement",
    desc: "Nous préparons la mise en ligne, les vérifications techniques et les outils de suivi nécessaires après lancement.",
    bullets: [
      "Mise en ligne contrôlée",
      "Configuration HTTPS selon hébergement",
      "Connexion possible à Search Console",
    ],
  },
];

export function CreationMethod() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 py-24 md:py-32">
      {/* Visual ambient circles */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-72 w-72 rounded-full bg-[#3b82f6]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Méthode de création
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Une méthode claire pour créer un site solide et évolutif
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            La création d’un site professionnel demande plus qu’un beau design.
            Nous avançons étape par étape : cadrage, structure, design,
            développement, SEO technique et mise en ligne.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Step number */}
                  <span className="pointer-events-none absolute right-6 top-4 select-none font-display text-6xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                    {step.number}
                  </span>

                  {/* Icon + phase */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Phase {step.phase}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a] transition-colors duration-200 group-hover:text-[#3b82f6]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="-mx-8 -mb-8 mt-7 rounded-b-[1.75rem] border-t border-slate-100 bg-slate-50 p-8">
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Livrables & actions
                  </span>

                  <ul className="space-y-3">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-sm leading-6 text-slate-600"
                      >
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#3b82f6]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}