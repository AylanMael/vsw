import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { RealisationReferences } from "../components/realisations/RealisationReferences";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Eye,
  FileText,
  GraduationCap,
  Layout,
  Layers,
  Megaphone,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Réalisations web, SEO et applications sur mesure | VSW Digital",
  description:
    "Découvrez les réalisations, démonstrateurs et études de cas de VSW Digital : sites internet, SEO, Google Ads, applications web, espaces clients, cloud et automatisation.",
};

interface Project {
  id: string;
  title: string;
  type: "Démonstrateur" | "Projet type" | "Étude de cas anonymisée" | "Cas d’usage";
  category: string;
  filterCategories: string[];
  url: string;
  description: string;
  probleme: string;
  solution: string;
  benefices: string;
  technologies: string[];
  ctaText: string;
}

interface StepItem {
  id: string;
  num: string;
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Démonstrateur espace client avec dépôt de documents",
    type: "Démonstrateur",
    category: "Application web",
    filterCategories: ["applications-web", "demonstrateurs"],
    url: "/demo-espace-client",
    description:
      "Exemple d’application web permettant aux clients de déposer des documents, suivre leur dossier et recevoir des notifications, avec un portail administrateur.",
    probleme:
      "Les documents sont souvent dispersés entre e-mails, fichiers locaux et suivis manuels.",
    solution:
      "Un espace client, un tableau de bord administrateur, des statuts de traitement et des notifications automatiques.",
    benefices:
      "Meilleure organisation, centralisation des documents, suivi plus clair et expérience client plus professionnelle.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Tailwind CSS",
    ],
    ctaText: "Tester le démonstrateur",
  },
  {
    id: "project-2",
    title: "Site vitrine professionnel pour entreprise de services",
    type: "Projet type",
    category: "Site internet",
    filterCategories: ["sites-internet", "projets-types"],
    url: "/creation-site-internet",
    description:
      "Création d’un site professionnel pour présenter les services, rassurer les visiteurs et générer des demandes de contact.",
    probleme:
      "L’entreprise avait besoin d’une présence claire, crédible et adaptée aux recherches locales.",
    solution:
      "Un site moderne, responsive, structuré par services, avec formulaire de contact, appels à l’action et base SEO.",
    benefices:
      "Image plus professionnelle, meilleure lisibilité de l’offre et parcours de contact plus clair.",
    technologies: ["React", "Tailwind CSS", "SEO technique", "UX conversion"],
    ctaText: "Voir la solution",
  },
  {
    id: "project-3",
    title: "Stratégie SEO locale pour entreprise de services",
    type: "Étude de cas anonymisée",
    category: "SEO",
    filterCategories: ["seo", "etudes-de-cas"],
    url: "/referencement-seo",
    description:
      "Optimisation SEO pour renforcer la visibilité locale d’une entreprise dans un secteur concurrentiel.",
    probleme:
      "Le site avait peu de trafic naturel et manquait de pages locales et de contenus structurés.",
    solution:
      "Optimisation des pages services, création de contenus SEO, maillage interne, structure Hn et suivi Search Console.",
    benefices:
      "Meilleure compréhension du site par Google, contenus plus utiles et trafic organique potentiellement plus qualifié.",
    technologies: [
      "SEO",
      "Search Console",
      "Maillage interne",
      "Pages locales",
      "Données structurées",
    ],
    ctaText: "Découvrir l’approche SEO",
  },
  {
    id: "project-4",
    title: "Landing page Google Ads pour demandes de devis",
    type: "Projet type",
    category: "Google Ads",
    filterCategories: ["google-ads", "projets-types"],
    url: "/google-ads",
    description:
      "Création d’une page de destination pensée pour transformer les clics publicitaires en appels ou demandes de devis.",
    probleme:
      "Les campagnes envoyaient les visiteurs vers une page trop générale, avec peu d’appels à l’action.",
    solution:
      "Une landing page claire, rapide, mobile, orientée conversion, avec formulaire visible, téléphone et suivi des conversions.",
    benefices:
      "Meilleure cohérence entre annonce et page, parcours plus direct et budget publicitaire mieux mesurable.",
    technologies: [
      "Google Ads",
      "Landing page",
      "Tracking conversions",
      "UX conversion",
    ],
    ctaText: "Voir le projet",
  },
  {
    id: "project-5",
    title: "Automatisation de formulaire et notification interne",
    type: "Cas d’usage",
    category: "Cloud & automatisation",
    filterCategories: ["cloud-automatisation", "cas-usages"],
    url: "/cloud-automatisation",
    description:
      "Automatisation d’un formulaire de demande avec enregistrement en base de données, notification interne et suivi du statut.",
    probleme:
      "Les demandes étaient reçues manuellement par e-mail, sans suivi centralisé.",
    solution:
      "Formulaire connecté, stockage dans Firestore, statut de traitement, notification automatique et tableau de suivi.",
    benefices:
      "Moins de pertes d’informations, meilleur suivi et organisation plus claire.",
    technologies: ["Firebase", "Firestore", "Cloud Functions", "Notifications email"],
    ctaText: "Découvrir le cas d’usage",
  },
  {
    id: "project-6",
    title: "Application de gestion documentaire",
    type: "Projet type",
    category: "Application web",
    filterCategories: ["applications-web", "projets-types"],
    url: "/application-web-sur-mesure",
    description:
      "Conception d’un outil permettant de déposer, classer, valider et suivre des documents clients depuis un espace sécurisé.",
    probleme:
      "Les dossiers clients nécessitaient beaucoup d’échanges e-mail et un suivi manuel.",
    solution:
      "Portail client, tableau de bord admin, statuts, gestion documentaire et notifications.",
    benefices:
      "Centralisation, meilleure traçabilité, gain de temps administratif et service client plus professionnel.",
    technologies: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Tailwind CSS",
    ],
    ctaText: "Voir le projet",
  },
  {
    id: "project-7",
    title: "Refonte d’un site professionnel vieillissant",
    type: "Projet type",
    category: "Refonte site internet",
    filterCategories: ["sites-internet", "projets-types"],
    url: "/refonte-site-internet",
    description:
      "Modernisation d’un site existant pour améliorer le design, la lisibilité, le SEO, la vitesse et la conversion.",
    probleme:
      "Le site ne reflétait plus le sérieux de l’entreprise et ne générait pas suffisamment de contacts.",
    solution:
      "Nouvelle architecture, design moderne, contenus retravaillés, optimisation mobile, SEO technique et CTA plus visibles.",
    benefices:
      "Image plus professionnelle, meilleure expérience utilisateur et parcours de contact plus clair.",
    technologies: ["React", "Tailwind CSS", "SEO technique", "Web Performance"],
    ctaText: "Voir le projet",
  },
  {
    id: "project-8",
    title: "Tableau de bord de suivi des leads",
    type: "Démonstrateur",
    category: "Application web / CRM",
    filterCategories: ["applications-web", "demonstrateurs"],
    url: "/application-web-sur-mesure",
    description:
      "Exemple de mini-CRM permettant de suivre les prospects, statuts, sources de contact, relances et demandes commerciales.",
    probleme:
      "Les prospects étaient suivis dans différents fichiers sans vision globale.",
    solution:
      "Un tableau de bord centralisant les leads, les statuts, les sources, les priorités et les prochaines actions.",
    benefices:
      "Meilleur suivi commercial, moins d’oublis et meilleure organisation interne.",
    technologies: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"],
    ctaText: "Découvrir l’approche",
  },
];

const categoryFilters = [
  { id: "all", title: "Tous" },
  { id: "sites-internet", title: "Sites internet" },
  { id: "seo", title: "SEO" },
  { id: "google-ads", title: "Google Ads" },
  { id: "applications-web", title: "Applications web" },
  { id: "cloud-automatisation", title: "Cloud & automatisation" },
  { id: "demonstrateurs", title: "Démonstrateurs" },
  { id: "etudes-de-cas", title: "Études de cas" },
];

const steps: StepItem[] = [
  {
    id: "step-1",
    num: "01",
    title: "Comprendre le besoin réel",
    desc: "Nous analysons vos objectifs, vos utilisateurs, vos contraintes et vos processus avant de proposer une solution.",
  },
  {
    id: "step-2",
    num: "02",
    title: "Identifier les priorités",
    desc: "Nous distinguons les fonctionnalités essentielles des éléments secondaires qui peuvent attendre.",
  },
  {
    id: "step-3",
    num: "03",
    title: "Concevoir une solution claire",
    desc: "Maquettes, parcours utilisateur, structure de l’information et logique de conversion sont cadrés avant développement.",
  },
  {
    id: "step-4",
    num: "04",
    title: "Développer une version utile",
    desc: "Nous privilégions une première version exploitable, testable et évolutive.",
  },
  {
    id: "step-5",
    num: "05",
    title: "Améliorer avec les retours",
    desc: "Une fois le projet utilisé, nous ajustons les contenus, les parcours et les fonctionnalités selon les retours réels.",
  },
];

const resultBenefits = [
  {
    id: "res-1",
    icon: Eye,
    title: "Plus de visibilité",
    desc: "Des sites mieux structurés pour être compris par vos visiteurs et par les moteurs de recherche.",
  },
  {
    id: "res-2",
    icon: TrendingUp,
    title: "Plus de demandes qualifiées",
    desc: "Des parcours plus clairs pour faciliter la prise de contact, l’appel ou la demande de devis.",
  },
  {
    id: "res-3",
    icon: ShieldCheck,
    title: "Une meilleure image",
    desc: "Une présence digitale plus professionnelle pour rassurer prospects, partenaires et clients.",
  },
  {
    id: "res-4",
    icon: Workflow,
    title: "Des processus mieux structurés",
    desc: "Des outils qui centralisent les informations et réduisent les échanges dispersés.",
  },
  {
    id: "res-5",
    icon: Cpu,
    title: "Moins de tâches répétitives",
    desc: "Des automatisations utiles pour limiter les saisies manuelles, relances et oublis.",
  },
  {
    id: "res-6",
    icon: Layers,
    title: "Des outils évolutifs",
    desc: "Des bases techniques capables d’évoluer progressivement avec votre activité.",
  },
];

const techList = [
  {
    id: "tech-1",
    group: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Interfaces responsive"],
  },
  {
    id: "tech-2",
    group: "Backend & cloud",
    items: ["Firebase", "Firestore", "Firebase Storage", "Google Cloud", "APIs"],
  },
  {
    id: "tech-3",
    group: "Marketing & SEO",
    items: ["SEO technique", "Google Ads", "Tracking conversions", "WordPress si adapté"],
  },
];

const sectors = [
  { id: "sec-1", name: "Déménagement", icon: Truck },
  { id: "sec-2", name: "Sécurité privée", icon: ShieldCheck },
  { id: "sec-3", name: "Rénovation", icon: Wrench },
  { id: "sec-4", name: "Domiciliation", icon: Building },
  { id: "sec-5", name: "Cabinet comptable", icon: FileText },
  { id: "sec-6", name: "Formation", icon: GraduationCap },
  { id: "sec-7", name: "Transport", icon: Truck },
  { id: "sec-8", name: "Réparation téléphone", icon: Cpu },
  { id: "sec-9", name: "Commerce local", icon: Layout },
  { id: "sec-10", name: "Laverie", icon: Settings },
  { id: "sec-11", name: "Services B2B", icon: Briefcase },
  { id: "sec-12", name: "BTP", icon: Wrench },
  { id: "sec-13", name: "Nettoyage", icon: Activity },
  { id: "sec-14", name: "Indépendants", icon: Users },
];

const faqs: FaqItem[] = [
  {
    q: "Présentez-vous uniquement des projets clients réels ?",
    a: "Non. Nous distinguons clairement les projets types, les études de cas anonymisées et les démonstrateurs. Cela permet de montrer notre savoir-faire sans exposer les données confidentielles de nos clients.",
  },
  {
    q: "Qu’est-ce qu’un démonstrateur ?",
    a: "Un démonstrateur est un exemple interactif créé pour illustrer une fonctionnalité ou une application possible : espace client, tableau de bord, dépôt de documents ou suivi de dossiers.",
  },
  {
    q: "Peut-on adapter un démonstrateur à mon entreprise ?",
    a: "Oui. Un démonstrateur peut servir de base de réflexion pour créer une solution adaptée à vos processus, vos rôles utilisateurs et vos priorités.",
  },
  {
    q: "Pouvez-vous créer une application similaire pour mon activité ?",
    a: "Oui. Après un cadrage de vos besoins, nous pouvons concevoir une application web sur mesure : espace client, tableau de bord, dépôt de documents, automatisation ou outil interne.",
  },
  {
    q: "Pouvez-vous reprendre ou améliorer un site existant ?",
    a: "Oui. Nous commençons par un audit technique et éditorial pour déterminer s’il vaut mieux optimiser l’existant ou envisager une refonte.",
  },
  {
    q: "Travaillez-vous avec des PME, artisans et entreprises locales ?",
    a: "Oui. VSW Digital s’adresse principalement aux PME, artisans, commerçants et entreprises de services qui veulent une présence digitale plus professionnelle et plus utile.",
  },
  {
    q: "Les projets sont-ils réalisés avec React, Firebase ou WordPress ?",
    a: "Le choix dépend du besoin. React et Firebase sont adaptés aux applications web et espaces clients. WordPress peut être pertinent pour un site administrable orienté contenu.",
  },
  {
    q: "Est-ce que chaque projet inclut le SEO ?",
    a: "Les bases SEO techniques sont prises en compte dès la conception d’un site : structure, performance, balises, mobile et lisibilité. Une stratégie SEO complète fait l’objet d’un accompagnement dédié.",
  },
];

export function Realisations() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title =
      "Réalisations web, SEO et applications sur mesure | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Découvrez les réalisations, démonstrateurs et études de cas de VSW Digital : sites internet, SEO, Google Ads, applications web, espaces clients, cloud et automatisation."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.filterCategories.includes(activeFilter)
        );

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
          >
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 shadow-2xl shadow-blue-500/10 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#3b82f6]" />
              Réalisations & démonstrateurs
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Des projets digitaux pensés pour{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                résoudre de vrais besoins
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Découvrez des exemples de sites internet, stratégies SEO, campagnes
              Google Ads, applications web, espaces clients et automatisations
              que VSW Digital peut concevoir pour les PME.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Discuter de mon projet
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#projects-showcase"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Voir les projets
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-[#3b82f6]" />
                  <span className="text-xs font-semibold text-slate-300">
                    VSW Digital Engine
                  </span>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Actif
                </span>
              </div>

              <div className="space-y-5">
                {[
                  ["Sites web", "Image & conversion", "w-[88%]", "bg-emerald-400"],
                  ["SEO", "Structure & contenus", "w-[76%]", "bg-[#3b82f6]"],
                  ["Applications", "Portails & dashboards", "w-[82%]", "bg-cyan-400"],
                  ["Automatisation", "Workflows utiles", "w-[70%]", "bg-amber-400"],
                  ["Google Ads", "Landing pages & tracking", "w-[74%]", "bg-rose-400"],
                ].map(([title, label, width, color]) => (
                  <div key={title}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-xs">
                      <span className="font-semibold text-slate-300">
                        {title}
                      </span>
                      <span className="text-slate-500">{label}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className={`h-full rounded-full ${width} ${color}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#020617] p-4">
                <p className="text-sm leading-7 text-slate-300">
                  Les indicateurs affichés ici sont illustratifs. Ils servent à
                  représenter les domaines d’intervention de VSW Digital, sans
                  promettre de résultats chiffrés automatiques.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Notre vision
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des réalisations utiles, pas seulement visuelles
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Chaque projet doit répondre à un objectif concret : améliorer
              l’image, générer plus de demandes, rendre l’entreprise visible,
              centraliser les données ou automatiser une tâche répétitive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Layout,
                title: "Améliorer l’image professionnelle",
                desc: "Créer une présence crédible, moderne et rassurante pour vos prospects.",
              },
              {
                icon: Search,
                title: "Renforcer la visibilité Google",
                desc: "Structurer le site et les contenus pour améliorer la compréhension par les moteurs de recherche.",
              },
              {
                icon: Megaphone,
                title: "Générer des demandes",
                desc: "Créer des pages claires, des formulaires visibles et des parcours orientés contact.",
              },
              {
                icon: Cloud,
                title: "Automatiser certaines tâches",
                desc: "Connecter formulaires, bases de données, notifications et outils internes.",
              },
              {
                icon: Database,
                title: "Centraliser les données",
                desc: "Organiser les clients, documents, demandes ou dossiers dans un espace structuré.",
              },
              {
                icon: CheckCircle2,
                title: "Améliorer l’expérience client",
                desc: "Offrir des interfaces plus simples pour déposer, consulter ou suivre une demande.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all group-hover:bg-[#3b82f6] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects-showcase" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Galerie de projets
              </span>

              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Exemples, démonstrateurs et cas d’usage
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Filtrez les exemples selon le type de besoin : site, SEO,
                publicité, application ou automatisation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                    activeFilter === filter.id
                      ? "border-[#3b82f6] bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-200 hover:bg-white"
                  }`}
                >
                  {filter.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ delay: index * 0.03 }}
                  className="group flex flex-col rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      {project.category}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        project.type === "Démonstrateur"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : project.type === "Projet type"
                            ? "border-blue-100 bg-blue-50 text-blue-700"
                            : project.type === "Étude de cas anonymisée"
                              ? "border-purple-100 bg-purple-50 text-purple-700"
                              : "border-amber-200 bg-amber-50 text-amber-700"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="font-display text-2xl font-bold text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div>
                        <span className="text-xs font-bold text-[#0f172a]">
                          Problème :
                        </span>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {project.probleme}
                        </p>
                      </div>

                      <div className="mt-4 border-t border-slate-200 pt-4">
                        <span className="text-xs font-bold text-[#3b82f6]">
                          Solution :
                        </span>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                      <span className="text-xs font-bold text-emerald-700">
                        Bénéfices attendus :
                      </span>
                      <p className="mt-1 text-sm leading-7 text-emerald-800">
                        {project.benefices}
                      </p>
                    </div>

                    <div className="mt-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Technologies :
                      </span>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-7">
                      <Link
                        to={project.url}
                        className="group/link inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3b82f6]"
                      >
                        {project.ctaText}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FEATURED DEMO */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-[#3b82f6]/15 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
        </div>

        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] text-slate-500">
                  demo-espace-client
                </span>
                <div className="w-8" />
              </div>

              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f172a] p-4">
                  <div>
                    <p className="text-xs text-slate-400">
                      Dossier client
                    </p>
                    <h4 className="font-display font-bold text-white">
                      Gestion Transport SAS
                    </h4>
                  </div>
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    En attente
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-3 text-sm font-semibold text-slate-300">
                    Dépôt de justificatifs
                  </p>
                  <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">
                    <FileText className="mx-auto h-10 w-10 text-[#3b82f6]" />
                    <p className="mt-3 text-sm text-slate-400">
                      PDF, JPG, PNG — interface mobile possible
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Historique récent
                  </p>

                  {[
                    "Pièce d’identité validée",
                    "Nouveau dossier créé",
                    "Demande de complément envoyée",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 h-2 w-2 rounded-full ${
                          index === 0
                            ? "bg-emerald-400"
                            : index === 1
                              ? "bg-[#3b82f6]"
                              : "bg-amber-400"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          {item}
                        </p>
                        <p className="text-xs text-slate-500">
                          Événement simulé
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-6 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Solution vedette
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Démonstrateur espace client avec dépôt de documents
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Ce démonstrateur illustre le type d’application métier que VSW
              Digital peut concevoir pour une entreprise qui gère des clients,
              documents, dossiers et statuts de traitement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Espace client",
                "Dépôt de documents",
                "Dashboard admin",
                "Notifications",
                "Gestion de statuts",
                "Architecture cloud",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/demo-espace-client"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-400"
              >
                Voir le démonstrateur
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                Adapter cette solution
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Méthode
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Comment VSW Digital aborde chaque projet
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous suivons un parcours simple pour transformer une idée ou un
              problème métier en solution exploitable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step.id}
                className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <span className="mb-5 block font-display text-4xl font-black text-[#3b82f6]/20">
                  {step.num}
                </span>

                <h3 className="font-display text-lg font-bold text-[#0f172a]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-1 text-slate-400 shadow-sm lg:block">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Résultats recherchés
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des réalisations orientées utilité
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Le succès d’un projet digital ne se mesure pas seulement au design,
              mais à ce qu’il apporte à l’entreprise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resultBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-[#3b82f6]/15 blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Technologies
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">
              Des technologies choisies selon le besoin
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Nous choisissons la technologie selon vos objectifs, votre budget,
              votre besoin d’autonomie et votre évolution future.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {techList.map((tech) => (
              <article
                key={tech.id}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-7"
              >
                <h3 className="border-b border-white/10 pb-4 font-display text-xl font-bold text-blue-300">
                  {tech.group}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-white/10 bg-[#020617] px-3 py-2 text-xs font-semibold text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-slate-400">
            Notre principe : éviter la complexité inutile. Une application cloud
            sur mesure n’a de sens que si elle apporte un vrai gain métier.
          </p>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Secteurs
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des projets adaptés aux métiers de services
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Les besoins ne sont pas les mêmes selon les métiers. Nous adaptons
              les interfaces, les contenus et les parcours à vos utilisateurs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.id}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#3b82f6]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-semibold leading-tight text-slate-700">
                    {sector.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSPARENCE */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-blue-100 bg-blue-50/70 p-8 md:flex-row md:items-center md:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-[#0f172a]">
                Des démonstrateurs clairement distingués des projets clients
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Certains exemples sont des démonstrateurs interactifs ou des cas
                d’usage types développés par VSW Digital. Ils permettent
                d’illustrer notre savoir-faire sans exposer l’identité, les
                données ou les informations confidentielles de clients réels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RealisationReferences />

      {/* FAQ */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-[1.4rem] border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-xl shadow-blue-500/10"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7"
                  >
                    <span className="font-display text-base font-bold leading-snug text-[#0f172a] md:text-lg">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#3b82f6] text-white"
                          : "bg-blue-50 text-[#3b82f6]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-4 md:px-7">
                          <p className="text-sm leading-7 text-slate-600 md:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Votre projet
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous voulez créer un projet digital concret et utile ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre activité, vos objectifs et vos difficultés.
            VSW Digital vous aide à transformer votre besoin en site web,
            application, automatisation ou stratégie digitale claire.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Parler de mon projet
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}