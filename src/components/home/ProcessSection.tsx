import { motion } from "motion/react";
import { Target, Lightbulb, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Analyse",
    desc: "Nous étudions votre activité, vos objectifs, vos clients et vos outils actuels pour identifier les vrais besoins.",
  },
  {
    icon: Target,
    title: "Stratégie",
    desc: "Nous définissons une solution claire : structure du site, parcours utilisateur, SEO, contenus et fonctionnalités.",
  },
  {
    icon: Zap,
    title: "Création",
    desc: "Nous concevons une interface moderne, rapide et responsive, avec un développement propre et évolutif.",
  },
  {
    icon: Rocket,
    title: "Lancement",
    desc: "Nous mettons le projet en ligne, vérifions les points clés et suivons les premières performances.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50/70 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex rounded-full bg-electric-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-blue"
          >
            Notre méthode
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-bold leading-tight text-navy-900 md:text-5xl"
          >
            Une approche claire pour transformer{" "}
            <span className="text-electric-blue">vos idées en solutions digitales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-navy-900/65 md:text-lg"
          >
            Chaque projet est pensé étape par étape : comprendre votre besoin,
            construire une solution adaptée, développer proprement et améliorer
            progressivement les résultats.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-2xl hover:shadow-electric-blue/10"
              >
                <div className="absolute right-6 top-6 font-display text-5xl font-bold text-navy-900/[0.04]">
                  0{index + 1}
                </div>

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-electric-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-3 font-display text-xl font-bold text-navy-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-navy-900/65">
                  {step.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}