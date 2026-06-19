import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Database,
  FileCheck,
  FileText,
  Layers,
  Lock,
  Server,
  Settings,
  Sparkles,
  Users,
  Workflow,
  AlertTriangle,
} from "lucide-react";

type TabKey = "docs" | "workflow" | "analytics";

interface BeforeAfterItem {
  before: {
    title: string;
    desc: string;
  };
  after: {
    title: string;
    desc: string;
  };
}

interface CardItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface AppTypeItem {
  icon: ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  desc: string;
  useCase: string;
}

interface MethodStep {
  step: string;
  title: string;
  desc: string;
}

interface StackItem {
  name: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const problemsBeforeAfter: BeforeAfterItem[] = [
  {
    before: {
      title: "Fichiers Excel et e-mails dispersés",
      desc: "Les informations clients, documents, suivis et tâches sont répartis entre plusieurs fichiers, ce qui augmente les oublis et les ressaisies.",
    },
    after: {
      title: "Données centralisées",
      desc: "Vos informations importantes sont regroupées dans un espace unique, accessible selon les rôles de chaque utilisateur.",
    },
  },
  {
    before: {
      title: "Documents sensibles envoyés par e-mail",
      desc: "Les clients transmettent parfois des pièces importantes par e-mail, avec un suivi difficile et un risque de perte d’information.",
    },
    after: {
      title: "Portail client sécurisé",
      desc: "Les clients déposent leurs documents dans un espace privé, avec un suivi clair du statut : reçu, en attente, validé ou à compléter.",
    },
  },
  {
    before: {
      title: "Tâches répétitives manuelles",
      desc: "Relances, confirmations, exports, notifications ou génération de documents prennent du temps à vos équipes.",
    },
    after: {
      title: "Automatisations utiles",
      desc: "Certaines actions peuvent être déclenchées automatiquement : notification, relance, changement de statut ou génération de document.",
    },
  },
  {
    before: {
      title: "Logiciels trop rigides",
      desc: "Les outils du marché sont parfois trop complexes, trop coûteux ou mal adaptés à votre manière réelle de travailler.",
    },
    after: {
      title: "Outil métier sur mesure",
      desc: "L’interface est pensée autour de vos processus : les écrans, les boutons et les rôles correspondent à votre organisation.",
    },
  },
];

const benefits: CardItem[] = [
  {
    icon: Database,
    title: "Centralisation des données",
    desc: "Regroupez vos clients, documents, demandes, statuts, contrats ou dossiers dans un outil clair et structuré.",
  },
  {
    icon: Users,
    title: "Suivi opérationnel",
    desc: "Visualisez l’état d’avancement des dossiers, assignez des tâches et facilitez le suivi interne.",
  },
  {
    icon: Bot,
    title: "Automatisation progressive",
    desc: "Automatisez les relances, notifications, confirmations, exports ou traitements récurrents selon vos besoins.",
  },
  {
    icon: Lock,
    title: "Accès sécurisés",
    desc: "Mettez en place des rôles utilisateurs pour limiter l’accès aux données selon les profils : admin, client, équipe ou manager.",
  },
  {
    icon: Layers,
    title: "Image professionnelle",
    desc: "Offrez à vos clients un espace moderne pour suivre leurs demandes, déposer des documents ou consulter leur dossier.",
  },
  {
    icon: Workflow,
    title: "Évolutivité",
    desc: "Commencez par une première version utile, puis ajoutez progressivement de nouveaux modules selon vos priorités.",
  },
];

const appTypes: AppTypeItem[] = [
  {
    icon: Users,
    tag: "Portail client",
    title: "Espace client & dépôt sécurisé",
    desc: "Un espace privé où vos clients peuvent déposer des documents, suivre un dossier, compléter un formulaire ou consulter des informations.",
    useCase: "Idéal pour : cabinets comptables, domiciliation, services B2B, formations, gestion administrative.",
  },
  {
    icon: BarChart3,
    tag: "Pilotage",
    title: "Tableau de bord métier",
    desc: "Des indicateurs clairs pour suivre vos clients, demandes, documents, paiements, interventions ou performances commerciales.",
    useCase: "Idéal pour : dirigeants, équipes commerciales, responsables opérationnels.",
  },
  {
    icon: Settings,
    tag: "Gestion interne",
    title: "Outil de suivi opérationnel",
    desc: "Un outil pour organiser vos tâches, suivre vos équipes, gérer des interventions, des dossiers ou des étapes de validation.",
    useCase: "Idéal pour : BTP, déménagement, sécurité privée, maintenance, services terrain.",
  },
  {
    icon: Bot,
    tag: "Automatisation",
    title: "Workflows & connexions API",
    desc: "Connexion entre vos formulaires, bases de données, emails, SMS, paiements, documents ou outils existants.",
    useCase: "Idéal pour : sociétés de services, plateformes, SaaS métier, automatisation administrative.",
  },
];

const methodSteps: MethodStep[] = [
  {
    step: "01",
    title: "Audit métier",
    desc: "Nous analysons votre manière de travailler : fichiers utilisés, tâches répétitives, données importantes et points de blocage.",
  },
  {
    step: "02",
    title: "Définition du MVP",
    desc: "Nous identifions la première version utile de l’application, avec les fonctionnalités prioritaires à développer en premier.",
  },
  {
    step: "03",
    title: "Maquette fonctionnelle",
    desc: "Vous visualisez les écrans avant le développement : parcours utilisateur, formulaires, tableaux, statuts et rôles.",
  },
  {
    step: "04",
    title: "Développement",
    desc: "Nous développons l’application avec une architecture moderne, responsive et adaptée aux usages bureau, tablette et mobile.",
  },
  {
    step: "05",
    title: "Sécurité & accès",
    desc: "Nous configurons les rôles, les règles d’accès, l’authentification et les bonnes pratiques de protection des données.",
  },
  {
    step: "06",
    title: "Mise en ligne & évolution",
    desc: "Nous lançons l’outil, formons les utilisateurs et faisons évoluer l’application selon les retours du terrain.",
  },
];

const stackTechnologies: StackItem[] = [
  {
    name: "React & Next.js",
    desc: "Pour créer des interfaces modernes, rapides, responsives et adaptées aux applications web évolutives.",
  },
  {
    name: "Firebase",
    desc: "Pour l’authentification, la base de données, le stockage de documents et les notifications liées aux actions utilisateurs.",
  },
  {
    name: "Google Cloud",
    desc: "Pour structurer des traitements cloud, automatiser certains flux et faire évoluer progressivement l’architecture.",
  },
  {
    name: "APIs & outils externes",
    desc: "Pour connecter l’application à Stripe, emails, SMS, outils métier, CRM ou services de génération de documents.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Quelle est la différence entre un site internet et une application web ?",
    a: "Un site internet présente votre activité et génère des contacts. Une application web permet d’interagir avec des données : espace client, tableau de bord, dépôt de documents, suivi de dossier, gestion interne ou automatisation.",
  },
  {
    q: "Qu’est-ce qu’un MVP ?",
    a: "Un MVP est une première version utile de votre application. L’objectif est de développer d’abord les fonctionnalités essentielles, puis d’améliorer l’outil progressivement avec les retours réels des utilisateurs.",
  },
  {
    q: "Puis-je commencer avec une petite version ?",
    a: "Oui, c’est même souvent la meilleure approche. Vous pouvez commencer avec un module simple : dépôt de documents, suivi client, tableau de bord ou formulaire avancé, puis faire évoluer l’application.",
  },
  {
    q: "Combien coûte une application web sur mesure ?",
    a: "Le budget dépend du nombre d’écrans, des rôles utilisateurs, des automatisations, du stockage, des intégrations externes et du niveau de design. Une analyse permet d’estimer précisément le périmètre.",
  },
  {
    q: "L’application sera-t-elle utilisable sur mobile ?",
    a: "Oui. Les interfaces sont pensées pour fonctionner sur ordinateur, tablette et smartphone, surtout si vos équipes ou clients doivent utiliser l’outil en déplacement.",
  },
  {
    q: "Est-ce que mes données seront protégées ?",
    a: "Nous mettons en place des règles d’accès, une authentification, une séparation des rôles et de bonnes pratiques de sécurité. Le niveau de protection est défini selon la nature des données traitées.",
  },
];

export function ApplicationsWeb() {
  const [activeTab, setActiveTab] = useState<TabKey>("docs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [estimatedUsers, setEstimatedUsers] = useState<number>(5);
  const [hasClientPortal, setHasClientPortal] = useState<boolean>(true);
  const [needAutomatisation, setNeedAutomatisation] = useState<boolean>(true);

  const estimatedDelay =
    hasClientPortal && needAutomatisation
      ? "6 à 8 semaines"
      : hasClientPortal || needAutomatisation
        ? "4 à 6 semaines"
        : "3 à 5 semaines";

  useEffect(() => {
    document.title =
      "Application web sur mesure, portail client et automatisation | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "VSW Digital conçoit des applications web sur mesure, portails clients, tableaux de bord et outils métier pour PME, avec React, Firebase et Google Cloud."
      );
    }
  }, []);

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
              Applications web sur mesure
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Des outils métier pour{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                digitaliser votre activité
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              VSW Digital conçoit des portails clients, tableaux de bord,
              espaces de dépôt de documents, outils internes et automatisations
              pour simplifier votre organisation.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Portail client", "Tableau de bord", "Automatisation", "Dépôt sécurisé"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur"
                  >
                    <Check className="h-4 w-4 text-[#3b82f6]" />
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/40"
              >
                Estimer mon application
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Découvrir les cas d’usage
              </a>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>

                <div className="flex items-center gap-1 rounded-full bg-white/8 px-4 py-1 text-xs text-slate-300">
                  <Lock className="h-3 w-3 text-emerald-400" />
                  Accès sécurisé
                </div>
              </div>

              <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/5 bg-[#020617] p-1.5">
                {[
                  { key: "docs" as const, label: "Documents", icon: FileText },
                  { key: "workflow" as const, label: "Workflow", icon: CheckCircle2 },
                  { key: "analytics" as const, label: "Pilotage", icon: BarChart3 },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.key;

                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-[#3b82f6] text-white"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[230px]">
                <AnimatePresence mode="wait">
                  {activeTab === "docs" && (
                    <motion.div
                      key="docs"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-4"
                    >
                      <div className="rounded-2xl border border-white/5 bg-[#020617] p-4">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          <span>Dépôt de pièces</span>
                          <span className="text-emerald-400">
                            En attente de validation
                          </span>
                        </div>

                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3 text-xs">
                            <span className="flex items-center gap-2 text-slate-200">
                              <FileText className="h-4 w-4 text-[#3b82f6]" />
                              justificatif-client.pdf
                            </span>
                            <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                              Reçu
                            </span>
                          </div>

                          <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3 text-xs">
                            <span className="flex items-center gap-2 text-slate-200">
                              <FileCheck className="h-4 w-4 text-emerald-400" />
                              contrat-signe.pdf
                            </span>
                            <span className="text-[10px] text-slate-400">
                              Validé
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-cyan-400" />
                          <div>
                            <p className="text-xs text-slate-400">
                              Dernière activité
                            </p>
                            <p className="text-sm font-semibold text-white">
                              Client connecté récemment
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "workflow" && (
                    <motion.div
                      key="workflow"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-3"
                    >
                      {[
                        {
                          title: "Demande reçue",
                          desc: "Formulaire client complété",
                          status: "Validé",
                        },
                        {
                          title: "Traitement interne",
                          desc: "Assigné à un collaborateur",
                          status: "En cours",
                        },
                        {
                          title: "Notification client",
                          desc: "Message envoyé automatiquement",
                          status: "Planifié",
                        },
                      ].map((item, index) => (
                        <div
                          key={item.title}
                          className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#020617] p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold ${
                                index === 0
                                  ? "bg-emerald-400/10 text-emerald-400"
                                  : index === 1
                                    ? "bg-blue-400/10 text-blue-300"
                                    : "bg-slate-700 text-slate-300"
                              }`}
                            >
                              {index === 0 ? "✓" : index === 1 ? "→" : <Clock className="h-4 w-4" />}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-slate-400">
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold text-slate-300">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "analytics" && (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/5 bg-[#020617] p-4">
                          <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                            Dossiers
                          </span>
                          <span className="mt-1 block text-2xl font-bold text-white">
                            128
                          </span>
                          <span className="text-xs text-emerald-400">
                            Suivi centralisé
                          </span>
                        </div>

                        <div className="rounded-2xl border border-white/5 bg-[#020617] p-4">
                          <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                            Actions
                          </span>
                          <span className="mt-1 block text-2xl font-bold text-white">
                            42
                          </span>
                          <span className="text-xs text-cyan-400">
                            Automatisées
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/5 bg-[#020617] p-4">
                        <div className="mb-2 flex justify-between text-xs text-slate-400">
                          <span>Avancement des traitements</span>
                          <span className="font-semibold text-white">74%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-[#3b82f6] to-cyan-400" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRIP */}
      <section className="border-y border-white/5 bg-[#020617] py-6 text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["React / Next.js", "Interfaces modernes"],
              ["Firebase", "Auth & données"],
              ["Google Cloud", "Automatisation"],
              ["RGPD", "Bonnes pratiques"],
            ].map(([title, desc]) => (
              <div key={title}>
                <p className="font-display text-2xl font-black text-white">
                  {title}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANT APRES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              L’enjeu réel
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Pourquoi remplacer vos processus manuels par un outil sur mesure ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              De nombreuses entreprises perdent du temps parce que leurs données,
              documents et suivis sont dispersés dans trop d’outils différents.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-rose-100 bg-rose-50/50 p-8">
              <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-bold text-[#0f172a]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  ✕
                </span>
                Avant
              </h3>

              <div className="space-y-6">
                {problemsBeforeAfter.map((item) => (
                  <div
                    key={item.before.title}
                    className="border-b border-rose-100 pb-5 last:border-0 last:pb-0"
                  >
                    <h4 className="flex items-center gap-2 font-bold text-[#0f172a]">
                      <AlertTriangle className="h-4 w-4 text-rose-500" />
                      {item.before.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.before.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-400/10 blur-3xl" />

              <h3 className="relative mb-8 flex items-center gap-3 font-display text-2xl font-bold text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-[#0f172a]">
                  ✓
                </span>
                Après
              </h3>

              <div className="relative space-y-6">
                {problemsBeforeAfter.map((item) => (
                  <div
                    key={item.after.title}
                    className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <h4 className="flex items-center gap-2 font-bold text-white">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                      {item.after.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.after.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Bénéfices métier
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des outils pensés pour votre organisation réelle
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              L’objectif n’est pas d’ajouter un logiciel de plus, mais de créer
              un outil réellement utile pour vos équipes et vos clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all group-hover:bg-[#3b82f6] group-hover:text-white">
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

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/15 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Types d’applications
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Quel type de solution pouvons-nous construire ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Du portail client simple à l’outil métier plus avancé, nous
              adaptons le périmètre à votre priorité du moment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {appTypes.map((app, index) => {
              const Icon = app.icon;

              return (
                <motion.article
                  key={app.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/[0.09]"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 ring-1 ring-white/10">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full border border-cyan-400/10 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {app.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {app.desc}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">
                    {app.useCase}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODE MVP */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Méthode MVP
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Commencer simple, tester vite, faire évoluer intelligemment
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Plutôt que de tout développer d’un coup, nous privilégions une
              première version utile, testable et évolutive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodSteps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <span className="mb-5 block font-display text-4xl font-black text-[#3b82f6]/20">
                  {step.step}
                </span>

                <h3 className="font-display text-xl font-bold text-[#0f172a]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Architecture & cloud
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des technologies modernes pour des outils évolutifs
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              La stack est choisie selon les besoins du projet : performance,
              sécurité, simplicité d’usage, évolutivité et budget.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stackTechnologies.map((tech, index) => (
              <article
                key={tech.name}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#3b82f6] ring-1 ring-slate-200">
                  <Server className="h-5 w-5" />
                </div>

                <h3 className="font-display text-lg font-bold text-[#0f172a]">
                  {tech.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {tech.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATEUR */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-[#3b82f6]/15 blur-[90px]" />
        </div>

        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 rounded-[2.5rem] border border-white/10 bg-[#020617] p-8 shadow-2xl shadow-slate-950/30 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Estimation rapide
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-4xl">
                Simulez la structure de votre application
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
                Cet estimateur donne une première idée du niveau de complexité.
                Une estimation réelle nécessite toujours un cadrage précis.
              </p>

              <div className="mt-8 space-y-6 border-t border-white/10 pt-6">
                <div>
                  <div className="mb-3 flex justify-between gap-4 text-sm">
                    <span className="text-slate-300">
                      Nombre d’utilisateurs internes :
                    </span>
                    <span className="font-bold text-emerald-400">
                      {estimatedUsers}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={estimatedUsers}
                    onChange={(e) => setEstimatedUsers(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-[#3b82f6]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                    <input
                      type="checkbox"
                      checked={hasClientPortal}
                      onChange={() => setHasClientPortal(!hasClientPortal)}
                      className="h-4 w-4 accent-[#3b82f6]"
                    />
                    <div>
                      <p className="text-sm font-bold text-white">
                        Espace client
                      </p>
                      <p className="text-xs text-slate-400">
                        Dépôt, suivi, documents
                      </p>
                    </div>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                    <input
                      type="checkbox"
                      checked={needAutomatisation}
                      onChange={() =>
                        setNeedAutomatisation(!needAutomatisation)
                      }
                      className="h-4 w-4 accent-[#3b82f6]"
                    />
                    <div>
                      <p className="text-sm font-bold text-white">
                        Automatisation
                      </p>
                      <p className="text-xs text-slate-400">
                        Emails, statuts, documents
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center">
              <Sparkles className="mx-auto h-10 w-10 text-cyan-300" />

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Délai indicatif MVP
              </p>

              <p className="mt-2 font-display text-4xl font-bold text-white">
                {estimatedDelay}
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-left text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Première version utile et testable
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Évolution progressive possible
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Cadrage nécessaire avant devis
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:bg-blue-400"
              >
                Valider mon estimation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes sur les applications web
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Les réponses essentielles avant de lancer un portail client, un
              tableau de bord ou un outil métier.
            </p>
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
            Projet d’application web
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous avez une idée d’application métier ou de portail client ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous vos fichiers actuels, vos tâches répétitives et vos
            objectifs. Nous vous aidons à définir une première version claire,
            utile et réaliste.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Parler de mon application
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}