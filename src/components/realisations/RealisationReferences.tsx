import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Dumbbell,
  FileText,
  GraduationCap,
  Laptop,
  Paintbrush,
  Truck,
} from "lucide-react";

type ReferenceCategory =
  | "Rénovation"
  | "Déménagement & transport"
  | "Applications web"
  | "Sport & fitness"
  | "Formation & conseil";

interface ReferenceItem {
  domain: string;
  url: string;
  category: ReferenceCategory;
  description: string;
  icon: typeof Laptop;
}

const references: ReferenceItem[] = [
  {
    domain: "erg-renovation.fr",
    url: "https://erg-renovation.fr",
    category: "Rénovation",
    description:
      "Site vitrine professionnel pour présenter une activité de rénovation, structurer les services et faciliter la prise de contact.",
    icon: Paintbrush,
  },
  {
    domain: "devisdemenagement-paris.com",
    url: "https://devisdemenagement-paris.com",
    category: "Déménagement & transport",
    description:
      "Site orienté demande de devis pour le déménagement, avec une approche centrée sur la conversion et le référencement local.",
    icon: Truck,
  },
  {
    domain: "demenagementduvexin.fr",
    url: "https://demenagementduvexin.fr",
    category: "Déménagement & transport",
    description:
      "Site professionnel pour une entreprise de déménagement, pensé pour valoriser les services et renforcer la présence locale.",
    icon: Truck,
  },
  {
    domain: "samydempro.fr",
    url: "https://samydempro.fr",
    category: "Déménagement & transport",
    description:
      "Présence web dédiée au déménagement, avec mise en avant des prestations, zones d’intervention et demandes de contact.",
    icon: Truck,
  },
  {
    domain: "fmtranslog.fr",
    url: "https://fmtranslog.fr",
    category: "Déménagement & transport",
    description:
      "Site pour une activité de transport et logistique, conçu pour présenter clairement les services et rassurer les prospects.",
    icon: Truck,
  },
  {
    domain: "ccsdom.fr",
    url: "https://ccsdom.fr",
    category: "Applications web",
    description:
      "Projet d’application web autour de la domiciliation d’entreprise, avec logique d’espace client, dossiers et gestion documentaire.",
    icon: Laptop,
  },
  {
    domain: "ccscompta.fr",
    url: "https://ccscompta.fr",
    category: "Applications web",
    description:
      "Projet digital lié à la gestion comptable et documentaire, orienté dépôt de pièces, suivi et automatisation métier.",
    icon: FileText,
  },
  {
    domain: "sculptfitcenter.com",
    url: "https://sculptfitcenter.com",
    category: "Sport & fitness",
    description:
      "Site vitrine pour une activité sport et fitness, pensé pour présenter l’offre, l’image du centre et les informations clés.",
    icon: Dumbbell,
  },
  {
    domain: "spconsulting.fr",
    url: "https://spconsulting.fr",
    category: "Formation & conseil",
    description:
      "Site professionnel pour une activité de formation et conseil, avec présentation des services, crédibilité et prise de contact.",
    icon: GraduationCap,
  },
];

const categoryStyles: Record<ReferenceCategory, string> = {
  Rénovation: "border-orange-100 bg-orange-50 text-orange-700",
  "Déménagement & transport": "border-blue-100 bg-blue-50 text-blue-700",
  "Applications web": "border-emerald-100 bg-emerald-50 text-emerald-700",
  "Sport & fitness": "border-purple-100 bg-purple-50 text-purple-700",
  "Formation & conseil": "border-amber-100 bg-amber-50 text-amber-700",
};

const sectors = [
  {
    icon: Building2,
    label: "Sites vitrines",
  },
  {
    icon: Truck,
    label: "Déménagement & transport",
  },
  {
    icon: Laptop,
    label: "Applications web",
  },
  {
    icon: GraduationCap,
    label: "Formation & conseil",
  },
];

export function RealisationReferences() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#3b82f6]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Quelques références
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des projets réalisés dans plusieurs secteurs d’activité
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Ces références illustrent différents types de projets accompagnés :
            sites vitrines, pages orientées conversion, refontes, applications
            web, outils métier et présences digitales sectorielles.
          </p>
        </div>

        {/* Sector summary */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3b82f6] ring-1 ring-slate-200">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-sm font-bold text-[#0f172a]">
                  {sector.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* References grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {references.map((reference, index) => {
            const Icon = reference.icon;

            return (
              <motion.article
                key={reference.domain}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6] transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      categoryStyles[reference.category]
                    }`}
                  >
                    {reference.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#3b82f6]">
                  {reference.domain}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {reference.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] transition-colors hover:text-blue-700"
                  >
                    Voir le site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Note */}
        <div className="mx-auto mt-12 max-w-4xl rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm leading-7 text-slate-600">
            Cette sélection présente quelques références représentatives. Les
            projets peuvent varier selon le périmètre : création de site,
            optimisation SEO, refonte, application web, automatisation ou
            accompagnement digital.
          </p>
        </div>
      </div>
    </section>
  );
}