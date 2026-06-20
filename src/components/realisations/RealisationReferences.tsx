import { motion } from "motion/react";
import { 
  Building2, 
  Truck, 
  Cpu, 
  Dumbbell, 
  GraduationCap,
  Globe
} from "lucide-react";

const references = [
  {
    sector: "Rénovation & Bâtiment",
    icon: Building2,
    projects: [
      { name: "erg-renovation.fr", desc: "Site vitrine et présentation de prestations" }
    ]
  },
  {
    sector: "Déménagement & Transport",
    icon: Truck,
    projects: [
      { name: "devisdemenagement-paris.com", desc: "Site axé sur la conversion et les devis" },
      { name: "demenagementduvexin.fr", desc: "Présentation des services de déménagement local" },
      { name: "samydempro.fr", desc: "Présentation des services professionnels" },
      { name: "fmtranslog.fr", desc: "Site de transport et logistique" }
    ]
  },
  {
    sector: "Applications web & Métier",
    icon: Cpu,
    projects: [
      { name: "ccsdom.fr", desc: "Outil de gestion ou portail métier" },
      { name: "ccscompta.fr", desc: "Portail orienté outils de gestion" }
    ]
  },
  {
    sector: "Sport & Fitness",
    icon: Dumbbell,
    projects: [
      { name: "sculptfitcenter.com", desc: "Présentation de centre de remise en forme" }
    ]
  },
  {
    sector: "Formation & Conseil",
    icon: GraduationCap,
    projects: [
      { name: "spconsulting-group.fr", desc: "Site de consultant et formation" }
    ]
  }
];

export function RealisationReferences() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Références & Projets
          </span>
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Quelques réalisations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            VSW Digital accompagne des entreprises de secteurs variés dans la conception de sites vitrines, portails clients ou outils métier.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {references.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0f172a]">
                    {category.sector}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.projects.map((project) => (
                    <div key={project.name} className="group flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-white hover:border-blue-100">
                      <span className="flex items-center gap-2 font-semibold text-[#0f172a] group-hover:text-[#3b82f6]">
                        <Globe className="h-3.5 w-3.5" />
                        {project.name}
                      </span>
                      <p className="text-xs text-slate-600">{project.desc}</p>
                      <a
                        href={`https://${project.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6] underline decoration-transparent transition-all hover:decoration-[#3b82f6]"
                      >
                        Voir le site
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Ces références illustrent différents types de projets accompagnés : sites vitrines, pages orientées conversion, refontes, applications web ou outils métier.
        </p>
      </div>
    </section>
  );
}
