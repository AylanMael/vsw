import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Code2,
  Cloud,
  Database,
  Search,
  ShieldCheck,
  Workflow,
  LayoutDashboard,
  Server,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const technologies = [
  {
    name: "React & Next.js",
    category: "frontend",
    desc: "Création d’interfaces modernes, rapides, responsives et adaptées aux sites vitrines comme aux applications web.",
  },
  {
    name: "WordPress",
    category: "cms",
    desc: "Sites administrables, blogs, contenus SEO et solutions flexibles pour les entreprises qui veulent gérer leurs pages.",
  },
  {
    name: "Firebase",
    category: "cloud",
    desc: "Authentification, base de données, stockage de documents, formulaires avancés et applications web rapides à déployer.",
  },
  {
    name: "Google Cloud",
    category: "cloud",
    desc: "Solutions cloud évolutives pour automatiser, connecter des services et structurer les données métier.",
  },
  {
    name: "Node.js",
    category: "backend",
    desc: "Création d’API, traitements serveur, logique métier et connexions entre vos outils digitaux.",
  },
  {
    name: "Firestore & bases de données",
    category: "database",
    desc: "Organisation des données clients, documents, demandes, tableaux de bord et espaces connectés.",
  },
  {
    name: "SEO technique",
    category: "seo",
    desc: "Structure, performance, balises, maillage interne et bonnes pratiques pour améliorer la visibilité Google.",
  },
  {
    name: "Analytics & tracking",
    category: "analytics",
    desc: "Suivi des formulaires, appels, clics importants, sources de trafic et conversions utiles.",
  },
  {
    name: "Sécurité & accès",
    category: "security",
    desc: "Gestion des rôles, authentification, règles d’accès et bonnes pratiques pour protéger les données.",
  },
  {
    name: "Automatisation",
    category: "automation",
    desc: "Notifications, workflows, emails, traitement de formulaires et connexions entre outils métier.",
  },
];

const categoryIcons = {
  frontend: Code2,
  cms: LayoutDashboard,
  cloud: Cloud,
  backend: Server,
  database: Database,
  seo: Search,
  analytics: BarChart3,
  security: ShieldCheck,
  automation: Workflow,
};

export function TechnologiesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-24 text-[#0f172a] md:py-32">
      {/* Background clair premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 translate-y-1/3 rounded-full bg-sky-300/20 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />
      </div>

      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6] shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-[#3b82f6]" />
            Stack moderne & performante
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
          >
            Des technologies solides pour créer vos{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
              solutions sur mesure
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            VSW Digital sélectionne et assemble des outils modernes et robustes.
            L’objectif est d’assurer la rapidité de vos pages, la sécurité de
            vos données et l’évolutivité de votre activité.
          </motion.p>
        </div>

        {/* Grille des technos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon =
              categoryIcons[tech.category as keyof typeof categoryIcons] ||
              Code2;

            return (
              <motion.article
                key={tech.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3b82f6]/0 blur-2xl transition-all duration-300 group-hover:bg-[#3b82f6]/10" />

                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mb-2 font-display text-lg font-bold tracking-tight text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                  {tech.name}
                </h3>

                <p className="relative text-sm leading-7 text-slate-600">
                  {tech.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-16 text-center"
        >
          <Link
            to="/application-web-sur-mesure"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/35"
          >
            Découvrir nos applications web sur mesure
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}