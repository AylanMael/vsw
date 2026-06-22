import { motion } from "motion/react";
import {
  CheckCircle2,
  Clock,
  Users,
  Repeat,
  BookOpen,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Traitement plus rapide des demandes",
    desc: "L’IA peut aider à résumer, classer ou orienter certaines demandes entrantes pour faciliter leur traitement.",
  },
  {
    icon: Users,
    title: "Meilleure qualification des prospects",
    desc: "Identifier plus clairement le type de besoin, le niveau d’urgence, le service concerné ou les informations manquantes.",
  },
  {
    icon: Repeat,
    title: "Réduction des tâches répétitives",
    desc: "Automatiser certaines actions simples : réponses brouillons, tri, extraction d’informations ou notifications internes.",
  },
  {
    icon: BookOpen,
    title: "Exploitation de vos contenus",
    desc: "Transformer vos FAQ, pages, documents ou procédures en base utile pour assister vos visiteurs ou votre équipe.",
  },
  {
    icon: ShieldCheck,
    title: "Supervision humaine conservée",
    desc: "L’IA reste un outil d’aide. Les réponses, décisions ou traitements sensibles peuvent être encadrés et validés humainement.",
  },
  {
    icon: BarChart3,
    title: "Organisation plus claire",
    desc: "Structurer les demandes, les documents et les informations pour mieux suivre les dossiers et les priorités.",
  },
];

export function AiBenefits() {
  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Bénéfices IA
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Pourquoi intégrer l’IA dans votre activité ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            L’IA peut aider les PME à mieux traiter les demandes, exploiter leurs
            contenus, organiser leurs informations et réduire certaines tâches
            répétitives, tout en gardant une supervision humaine.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#3b82f6] transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#3b82f6]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {benefit.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Note */}
        <div className="mx-auto mt-12 max-w-4xl rounded-[1.75rem] border border-blue-100 bg-blue-50/70 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#3b82f6] text-white">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <p className="text-sm leading-7 text-slate-700">
              L’IA doit être intégrée avec méthode : qualité des données,
              périmètre clair, réponses encadrées, tests et supervision humaine.
              L’objectif n’est pas de tout automatiser, mais d’apporter une aide
              concrète là où elle a du sens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}