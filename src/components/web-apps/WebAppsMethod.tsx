import { motion } from "motion/react";
import {
  Lightbulb,
  Target,
  Palette,
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Analyse du besoin",
    desc: "Comprendre vos processus, vos utilisateurs, vos contraintes métier et les objectifs prioritaires de l’application.",
  },
  {
    icon: Target,
    number: "02",
    title: "Cadrage fonctionnel",
    desc: "Définir les fonctionnalités essentielles, les rôles utilisateurs, les données à gérer et les premières priorités.",
  },
  {
    icon: Palette,
    number: "03",
    title: "UX/UI & parcours",
    desc: "Concevoir une interface claire, intuitive et adaptée aux usages réels de vos équipes ou de vos clients.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Développement",
    desc: "Créer une base technique propre, maintenable et évolutive selon le périmètre validé du projet.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Tests & vérifications",
    desc: "Tester les formulaires, les rôles, les accès, les scénarios principaux et les bonnes pratiques de sécurité.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Mise en ligne & suivi",
    desc: "Déployer l’application, accompagner la prise en main et prévoir les évolutions utiles après les premiers retours.",
  },
];

export function WebAppsMethod() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Méthode de création
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Une méthode progressive pour créer une application utile et maîtrisée
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Une application web sur mesure doit partir d’un besoin métier clair.
            L’objectif est de construire une première version solide, puis de
            l’améliorer progressivement selon les usages réels.
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
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <span className="pointer-events-none absolute right-6 top-5 font-display text-6xl font-black text-slate-100 transition-colors group-hover:text-blue-50">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6] transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
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