import { motion } from "motion/react";
import {
  RefreshCcw,
  Database,
  Users,
  Lock,
  BarChart,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: RefreshCcw,
    title: "Réduction des tâches répétitives",
    desc: "Automatiser certaines actions simples : notifications, relances, formulaires, statuts ou transferts de données.",
  },
  {
    icon: Database,
    title: "Centralisation des données",
    desc: "Regrouper vos informations importantes dans un espace structuré plutôt que de les disperser entre fichiers, emails et outils séparés.",
  },
  {
    icon: Users,
    title: "Suivi client & demandes",
    desc: "Mieux suivre vos prospects, clients, demandes de devis, dossiers ou échanges avec une organisation plus claire.",
  },
  {
    icon: Lock,
    title: "Accès par rôles",
    desc: "Prévoir des accès différenciés selon les profils : administrateur, équipe interne, client ou utilisateur spécifique.",
  },
  {
    icon: BarChart,
    title: "Pilotage métier",
    desc: "Mettre en place des tableaux de bord pour visualiser les informations utiles à votre activité et suivre les statuts importants.",
  },
  {
    icon: Zap,
    title: "Solutions évolutives",
    desc: "Commencer avec une première version utile, puis ajouter progressivement de nouvelles fonctionnalités selon vos besoins.",
  },
];

export function CloudBenefits() {
  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Bénéfices cloud & automatisation
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des outils cloud pour mieux organiser, suivre et automatiser
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Le cloud permet de connecter vos formulaires, données, fichiers,
            notifications et tableaux de bord afin de simplifier certaines
            opérations du quotidien.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6] transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-8 w-8" />
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
      </div>
    </section>
  );
}