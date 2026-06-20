import { motion } from "motion/react";
import {
  SearchCode,
  Compass,
  PenTool,
  Network,
  AreaChart,
} from "lucide-react";

const steps = [
  {
    icon: SearchCode,
    phase: "Phase 1",
    title: "Audit SEO & recherche de mots-clés",
    desc: "Nous analysons votre site, vos pages, vos contenus, votre zone géographique et les recherches utilisées par vos clients potentiels. L’objectif est d’identifier les priorités SEO réalistes selon votre marché.",
    deliverable: "Audit SEO + liste de mots-clés prioritaires",
  },
  {
    icon: Compass,
    phase: "Phase 2",
    title: "Architecture & structure des pages",
    desc: "Nous organisons les pages autour de vos services, de vos zones d’intervention et des intentions de recherche. Une structure claire aide Google et les visiteurs à comprendre votre activité.",
    deliverable: "Plan de site + structure des pages services",
  },
  {
    icon: PenTool,
    phase: "Phase 3",
    title: "Contenus SEO & optimisation on-page",
    desc: "Nous travaillons les titres, les textes, les balises, les liens internes, les appels à l’action et les données structurées lorsque cela est pertinent pour le projet.",
    deliverable: "Contenus optimisés + recommandations techniques",
  },
  {
    icon: Network,
    phase: "Phase 4",
    title: "SEO local & popularité",
    desc: "Nous renforçons la cohérence de votre présence locale : fiche Google Business, informations d’entreprise, pages locales, maillage interne et pistes de notoriété adaptées à votre activité.",
    deliverable: "Optimisations locales + pistes de visibilité",
  },
  {
    icon: AreaChart,
    phase: "Phase 5",
    title: "Suivi & ajustements",
    desc: "Nous suivons les performances avec des outils comme Google Search Console et Analytics afin d’observer les évolutions, repérer les freins et ajuster progressivement la stratégie.",
    deliverable: "Suivi Search Console + bilan périodique",
  },
];

export function SeoMethod() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Méthode SEO
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Une méthode SEO structurée pour améliorer votre visibilité dans le
            temps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Le référencement naturel ne repose pas sur une formule magique. Il
            demande une structure claire, des contenus utiles, une base technique
            propre et un suivi régulier des performances.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl space-y-10 before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-slate-200 md:before:left-1/2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={step.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#3b82f6] bg-white shadow-sm md:left-1/2" />

                {/* Card */}
                <div className="w-full pl-14 md:w-1/2 md:px-8">
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-[#3b82f6]" />

                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                          {step.phase}
                        </span>

                        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-[#0f172a]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600">
                      {step.desc}
                    </p>

                    <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                      <span className="inline-flex w-fit rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                        Livrable
                      </span>

                      <span className="text-sm font-medium leading-6 text-slate-700">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden w-1/2 md:block" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}