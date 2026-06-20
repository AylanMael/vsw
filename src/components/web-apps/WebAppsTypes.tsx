import { motion } from "motion/react";
import {
  Users,
  BarChart,
  FileText,
  Target,
  Settings,
  Calculator,
} from "lucide-react";

const types = [
  {
    icon: Users,
    title: "Espace client",
    desc: "Portail privé pour suivre les dossiers, documents, messages ou demandes.",
  },
  {
    icon: BarChart,
    title: "Tableau de bord métier",
    desc: "Vue synthétique des informations importantes pour piloter votre activité.",
  },
  {
    icon: FileText,
    title: "Gestion documentaire",
    desc: "Dépôt, classement, consultation et suivi des documents selon les profils.",
  },
  {
    icon: Target,
    title: "Gestion de leads / CRM",
    desc: "Suivi des prospects, statuts, relances, sources et demandes entrantes.",
  },
  {
    icon: Settings,
    title: "Portail administrateur",
    desc: "Interface interne pour gérer les utilisateurs, contenus, dossiers ou paramètres.",
  },
  {
    icon: Calculator,
    title: "Outils de devis",
    desc: "Formulaires, simulateurs ou génération de devis selon vos règles métier.",
  },
];

export function WebAppsTypes() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Solutions possibles
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Des outils web adaptés à vos vrais besoins métier
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Chaque application peut être conçue autour de vos processus :
            gestion de clients, documents, demandes, devis, tableaux de bord ou
            espaces privés.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type, index) => {
            const Icon = type.icon;

            return (
              <motion.article
                key={type.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                  {type.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {type.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}