import { motion } from "motion/react";
import {
  Layout,
  ShieldCheck,
  Search,
  FileText,
  Zap,
  Layers,
} from "lucide-react";

const benefits = [
  {
    icon: Layout,
    category: "Design",
    title: "Valoriser votre image de marque",
    desc: "Un design moderne, clair et adapté à votre activité pour donner une première impression plus professionnelle.",
    details: [
      "Direction visuelle cohérente",
      "Interface adaptée à votre secteur",
      "Animations discrètes et fluides",
    ],
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: ShieldCheck,
    category: "Confiance",
    title: "Rassurer vos visiteurs",
    desc: "Une présentation plus claire de vos preuves de confiance pour aider vos prospects à passer à l’action.",
    details: [
      "Avis clients mis en valeur",
      "Références et réalisations visibles",
      "Informations de contact accessibles",
    ],
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: Search,
    category: "SEO",
    title: "Construire une base saine pour Google",
    desc: "Une structure technique et éditoriale pensée pour améliorer la lisibilité de votre site par les moteurs de recherche.",
    details: [
      "Balisage HTML sémantique",
      "Structure Hn cohérente",
      "Optimisation SEO locale",
    ],
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    icon: FileText,
    category: "Structure",
    title: "Présenter clairement vos services",
    desc: "Une organisation de pages plus lisible pour expliquer vos prestations, vos zones d’intervention et vos points forts.",
    details: [
      "Pages services dédiées",
      "Parcours utilisateur plus clair",
      "Contenus mieux hiérarchisés",
    ],
    badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    icon: Zap,
    category: "Conversion",
    title: "Faciliter les demandes de contact",
    desc: "Des appels à l’action bien placés pour permettre aux visiteurs intéressés de vous contacter plus facilement.",
    details: [
      "Formulaires simples",
      "Téléphone cliquable",
      "Boutons d’action visibles",
    ],
    badgeColor: "bg-rose-50 text-rose-600 border-rose-100",
  },
  {
    icon: Layers,
    category: "Évolutivité",
    title: "Préparer votre site pour la suite",
    desc: "Une base technique propre et évolutive pour pouvoir ajouter de nouvelles pages, fonctionnalités ou outils plus tard.",
    details: [
      "Code maintenable",
      "Base prête pour évolutions",
      "Connexion possible à des outils métier",
    ],
    badgeColor: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
];

export function CreationBenefits() {
  return (
    <section className="relative border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Bénéfices concrets
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Un site professionnel pensé pour inspirer confiance et générer des demandes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Un bon site ne se limite pas à un joli design. Il doit présenter
            clairement votre activité, rassurer vos visiteurs, faciliter la prise
            de contact et poser une base technique saine pour votre visibilité.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Header card info */}
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#3b82f6] transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200 group-hover:bg-blue-50">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${benefit.badgeColor}`}
                    >
                      {benefit.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a] transition-colors duration-200 group-hover:text-[#3b82f6]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.desc}
                  </p>
                </div>

                {/* Sub features bullet points */}
                <div className="mt-7 border-t border-slate-100 pt-5">
                  <ul className="space-y-3">
                    {benefit.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                        <span>{detail}</span>
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