import { motion } from "motion/react";
import {
  Lightbulb,
  Target,
  Settings,
  Code,
  FileText,
  BarChart,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Analyse du besoin",
    desc: "Comprendre votre activité, vos services, votre zone géographique, vos marges et vos objectifs commerciaux.",
  },
  {
    icon: Target,
    number: "02",
    title: "Stratégie de ciblage",
    desc: "Définir les mots-clés, les audiences, les zones, les horaires et le budget de départ selon vos priorités.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Création des campagnes",
    desc: "Structurer les groupes d’annonces, rédiger les annonces et organiser les extensions utiles à la campagne.",
  },
  {
    icon: Code,
    number: "04",
    title: "Suivi des conversions",
    desc: "Mettre en place le suivi des formulaires, appels, clics importants et actions utiles à votre activité.",
  },
  {
    icon: FileText,
    number: "05",
    title: "Pages d’atterrissage",
    desc: "Améliorer les pages de destination pour renforcer la clarté, la confiance et la prise de contact.",
  },
  {
    icon: BarChart,
    number: "06",
    title: "Analyse & ajustements",
    desc: "Analyser les données, identifier les recherches utiles et ajuster progressivement les campagnes.",
  },
];

export function GoogleAdsMethod() {
  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Méthode Google Ads
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Une méthode structurée pour lancer, mesurer et améliorer vos campagnes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Une campagne Google Ads efficace ne repose pas seulement sur un
            budget publicitaire. Elle demande un ciblage précis, des annonces
            cohérentes, une page de destination claire et un suivi des
            conversions fiable.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <span className="pointer-events-none absolute right-6 top-5 font-display text-6xl font-black text-slate-100 transition-colors group-hover:text-blue-50">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#3b82f6] transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#3b82f6]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}