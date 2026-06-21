import { motion } from "motion/react";
import {
  Database,
  Server,
  Cpu,
  Cloud,
  Globe,
} from "lucide-react";

const techs = [
  {
    icon: Globe,
    title: "React / Vite",
    desc: "Interfaces web modernes, rapides à faire évoluer et adaptées au mobile.",
  },
  {
    icon: Database,
    title: "Firebase / Firestore",
    desc: "Stockage structuré des données, suivi des statuts et logique temps réel selon le besoin.",
  },
  {
    icon: Cloud,
    title: "Google Cloud / AWS",
    desc: "Services cloud choisis selon le projet, le budget et les contraintes techniques.",
  },
  {
    icon: Server,
    title: "API / Serverless",
    desc: "Fonctions backend, automatisations, webhooks et connexions avec des outils externes.",
  },
  {
    icon: Cpu,
    title: "Règles d’accès",
    desc: "Gestion des rôles, permissions et bonnes pratiques pour limiter les accès non autorisés.",
  },
];

export function CloudTechs() {
  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Technologies cloud
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des technologies choisies selon votre besoin métier
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            L’objectif n’est pas d’empiler les outils, mais de choisir une base
            technique claire pour connecter vos données, vos formulaires, vos
            notifications et vos processus internes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {techs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.article
                key={tech.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#3b82f6] transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="font-display text-base font-bold text-[#0f172a]">
                  {tech.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {tech.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Note */}
        <div className="mx-auto mt-12 max-w-4xl rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm leading-7 text-slate-600">
            La stack technique est définie après analyse du besoin : certaines
            automatisations peuvent rester simples, tandis que d’autres
            nécessitent une architecture plus complète avec API, rôles,
            stockage, notifications ou fonctions backend.
          </p>
        </div>
      </div>
    </section>
  );
}