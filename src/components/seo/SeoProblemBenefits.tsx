import {
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    label: "Visibilité",
    title: "Peu de trafic naturel",
    desc: "Votre site existe, mais il attire peu de visiteurs depuis Google. Sans stratégie SEO claire, il peut rester difficile à trouver par vos futurs clients.",
    color: "border-red-100 bg-red-50 text-red-600",
  },
  {
    label: "Indexation",
    title: "Pages mal comprises ou peu visibles",
    desc: "Certaines pages importantes peuvent être mal structurées, peu optimisées ou insuffisamment reliées entre elles, ce qui limite leur visibilité.",
    color: "border-orange-100 bg-orange-50 text-orange-600",
  },
  {
    label: "Mots-clés",
    title: "Absence de stratégie de recherche",
    desc: "Sans étude des mots-clés, le site risque de cibler des termes trop génériques, trop concurrentiels ou éloignés des recherches réelles des clients.",
    color: "border-amber-100 bg-amber-50 text-amber-600",
  },
  {
    label: "Technique",
    title: "Base technique perfectible",
    desc: "Vitesse mobile, structure des titres, maillage interne, balises et données structurées peuvent freiner la compréhension du site par Google.",
    color: "border-yellow-100 bg-yellow-50 text-yellow-600",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    category: "Visibilité",
    title: "Une présence mieux ciblée",
    desc: "Travailler les pages et les contenus pour répondre aux recherches réellement utiles à votre activité.",
    details: [
      "Mots-clés liés à vos services",
      "Pages mieux structurées",
      "Contenus alignés avec les intentions",
    ],
    badgeColor: "border-blue-100 bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    category: "Contact",
    title: "Des visiteurs plus qualifiés",
    desc: "Attirer des internautes qui cherchent déjà une information, un service ou un prestataire dans votre secteur.",
    details: [
      "Pages orientées besoin client",
      "Appels à l’action clairs",
      "Parcours de contact facilité",
    ],
    badgeColor: "border-emerald-100 bg-emerald-50 text-emerald-600",
  },
  {
    icon: Zap,
    category: "Long terme",
    title: "Un levier durable",
    desc: "Construire progressivement un actif digital qui peut continuer à générer de la visibilité dans le temps.",
    details: [
      "Contenus réutilisables",
      "Structure évolutive",
      "Suivi régulier des performances",
    ],
    badgeColor: "border-purple-100 bg-purple-50 text-purple-600",
  },
  {
    icon: ShieldCheck,
    category: "Confiance",
    title: "Une image plus crédible",
    desc: "Un site bien structuré, clair et cohérent peut renforcer la confiance des visiteurs avant la prise de contact.",
    details: [
      "Fiche Google Business cohérente",
      "Preuves de confiance valorisées",
      "Informations locales claires",
    ],
    badgeColor: "border-amber-100 bg-amber-50 text-amber-600",
  },
];

export function SeoProblemSection() {
  return (
    <section className="relative border-b border-slate-100 bg-slate-50 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="space-y-6 text-left lg:col-span-5">
            <span className="inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Diagnostic SEO
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Votre site existe, mais est-il suffisamment visible ?
            </h2>

            <p className="text-base leading-8 text-slate-600">
              Un site internet peut être bien présenté sans être réellement
              visible sur Google. Le SEO permet de travailler la structure, les
              contenus et les signaux de confiance pour faciliter la découverte
              de vos services.
            </p>

            <p className="text-sm leading-7 text-slate-500">
              L’objectif n’est pas de promettre une première position, mais
              d’identifier les freins actuels et de mettre en place une méthode
              progressive pour améliorer votre visibilité.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {problems.map((problem, index) => (
              <motion.article
                key={problem.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${problem.color}`}
                    >
                      {problem.label}
                    </span>

                    <AlertCircle className="h-4 w-4 text-red-400" />
                  </div>

                  <h3 className="font-display text-base font-bold text-[#0f172a]">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {problem.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeoBenefitsSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Bénéfices SEO
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Le SEO : un levier de visibilité à construire dans le temps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Le référencement naturel demande du temps, de la méthode et un suivi
            régulier. Bien travaillé, il peut renforcer la visibilité de vos
            services, améliorer la qualité du trafic et soutenir vos demandes de
            contact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#3b82f6] transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${benefit.badgeColor}`}
                    >
                      {benefit.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#3b82f6]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {benefit.desc}
                  </p>
                </div>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <ul className="space-y-3">
                    {benefit.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-xs font-medium leading-6 text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
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