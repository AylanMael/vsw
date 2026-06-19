import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code,
  Database,
  FileText,
  Gauge,
  HardDrive,
  Layout,
  Lock,
  MessageSquare,
  RefreshCw,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

interface RiskItem {
  title: string;
  desc: string;
  severity: string;
  icon: ComponentType<{ className?: string }>;
}

interface BenefitItem {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
}

interface PrestationItem {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  badge: string;
}

interface SupportedSite {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
}

interface MaintenanceOffer {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge: string;
  recommended?: boolean;
  features: string[];
  ctaText: string;
}

interface FaqItem {
  q: string;
  a: string;
}

type SystemTab = "healthy" | "at-risk";
type BillingCycle = "monthly" | "yearly";
type QuizStep = 1 | 2 | 3 | 4;

const risks: RiskItem[] = [
  {
    title: "Ralentissement progressif",
    desc: "Un site non entretenu peut devenir plus lent avec le temps : images lourdes, cache mal configuré, scripts inutiles ou base de données encombrée.",
    severity: "Performance",
    icon: Gauge,
  },
  {
    title: "Extensions obsolètes",
    desc: "Sur WordPress, les extensions non mises à jour peuvent provoquer des bugs, des incompatibilités ou des failles de sécurité connues.",
    severity: "Stabilité",
    icon: Settings,
  },
  {
    title: "Failles de sécurité",
    desc: "Un CMS, un thème ou un plugin non maintenu augmente les risques d’intrusion, de spam ou de dégradation du site.",
    severity: "Sécurité",
    icon: Lock,
  },
  {
    title: "Sauvegardes absentes",
    desc: "Sans sauvegarde fiable, une erreur de manipulation, une mise à jour ratée ou un incident serveur peut devenir difficile à corriger.",
    severity: "Continuité",
    icon: HardDrive,
  },
  {
    title: "Bugs invisibles",
    desc: "Un formulaire, un bouton, une mise en page mobile ou un script peut cesser de fonctionner sans que vous vous en rendiez compte immédiatement.",
    severity: "Expérience",
    icon: Wrench,
  },
  {
    title: "Formulaires non reçus",
    desc: "Les problèmes d’envoi d’e-mails sont fréquents : sans surveillance, vous pouvez perdre des demandes sans le savoir.",
    severity: "Prospects",
    icon: MessageSquare,
  },
];

const benefits: BenefitItem[] = [
  {
    title: "Sérénité technique",
    desc: "Vous déléguez la surveillance, les mises à jour, les sauvegardes et les petites corrections à un interlocuteur technique.",
    icon: ShieldCheck,
  },
  {
    title: "Site plus fiable",
    desc: "Les points critiques sont vérifiés régulièrement pour limiter les interruptions, bugs ou dysfonctionnements visibles.",
    icon: Activity,
  },
  {
    title: "Sauvegardes régulières",
    desc: "Des sauvegardes planifiées permettent de restaurer le site plus facilement en cas de problème.",
    icon: Database,
  },
  {
    title: "Performance suivie",
    desc: "La vitesse, le poids des pages et certains éléments techniques peuvent être améliorés progressivement.",
    icon: Gauge,
  },
  {
    title: "Support réactif",
    desc: "Vous disposez d’un accompagnement pour corriger un souci, poser une question ou demander une petite évolution.",
    icon: Wrench,
  },
  {
    title: "Évolution continue",
    desc: "Votre site reste vivant : textes, horaires, tarifs, photos, pages, articles ou éléments de réassurance peuvent évoluer.",
    icon: RefreshCw,
  },
];

const prestations: PrestationItem[] = [
  {
    title: "Mises à jour contrôlées",
    desc: "Suivi du CMS, des thèmes, extensions ou dépendances, avec prudence pour éviter les incompatibilités.",
    icon: RefreshCw,
    badge: "Indispensable",
  },
  {
    title: "Sauvegardes externalisées",
    desc: "Mise en place de sauvegardes régulières pour sécuriser vos contenus, fichiers et données importantes.",
    icon: Database,
    badge: "Sécurité",
  },
  {
    title: "Protection & durcissement",
    desc: "Renforcement des accès, limitation des tentatives abusives, configuration de protections et bonnes pratiques.",
    icon: Lock,
    badge: "Protection",
  },
  {
    title: "Correction d’anomalies",
    desc: "Diagnostic et correction des bugs visibles : liens cassés, erreurs 404, formulaires, affichage mobile ou petits défauts.",
    icon: AlertTriangle,
    badge: "Stabilité",
  },
  {
    title: "Nettoyage & cache",
    desc: "Optimisation du cache, nettoyage des éléments inutiles et amélioration progressive du temps de chargement.",
    icon: Gauge,
    badge: "Vitesse",
  },
  {
    title: "SSL & hébergement",
    desc: "Vérification du certificat HTTPS, de la configuration serveur et des éléments techniques liés à l’hébergement.",
    icon: Server,
    badge: "Technique",
  },
  {
    title: "Modifications de contenus",
    desc: "Ajout ou correction de textes, photos, horaires, tarifs, avis clients, pages ou informations importantes.",
    icon: FileText,
    badge: "Contenu",
  },
  {
    title: "Suivi SEO technique",
    desc: "Surveillance de certaines erreurs d’indexation, liens cassés, redirections et éléments techniques visibles par Google.",
    icon: Search,
    badge: "SEO",
  },
];

const supportedSites: SupportedSite[] = [
  {
    title: "WordPress & WooCommerce",
    desc: "Sites vitrines, blogs, catalogues ou boutiques nécessitant un suivi régulier des thèmes, extensions et sauvegardes.",
    icon: Settings,
  },
  {
    title: "React / Next.js / TypeScript",
    desc: "Sites et applications modernes avec dépendances, déploiement, build, API ou hébergement plus technique.",
    icon: Code,
  },
  {
    title: "Sites vitrines PME",
    desc: "Sites professionnels servant à présenter vos services, générer des demandes et rassurer vos prospects.",
    icon: Layout,
  },
  {
    title: "Landing pages",
    desc: "Pages utilisées pour Google Ads, SEO ou campagnes marketing, avec besoin de disponibilité et de conversion.",
    icon: Zap,
  },
  {
    title: "Projets connectés",
    desc: "Sites reliés à Firebase, formulaires avancés, stockage cloud, API ou automatisations.",
    icon: Server,
  },
];

const methodSteps = [
  {
    step: "01",
    title: "Audit initial",
    desc: "Nous analysons l’état du site : technologie, mises à jour, sauvegardes, sécurité, performance et points sensibles.",
  },
  {
    step: "02",
    title: "Sauvegarde de sécurité",
    desc: "Avant toute intervention, nous sécurisons une copie du site pour pouvoir revenir en arrière en cas d’anomalie.",
  },
  {
    step: "03",
    title: "Remise à niveau",
    desc: "Nous traitons les urgences : mises à jour critiques, formulaires, bugs visibles, SSL, sauvegardes ou sécurité.",
  },
  {
    step: "04",
    title: "Mise sous surveillance",
    desc: "Nous configurons les vérifications nécessaires selon votre formule : disponibilité, sauvegardes, sécurité, formulaires ou SEO.",
  },
  {
    step: "05",
    title: "Entretien régulier",
    desc: "Nous réalisons les actions planifiées : mises à jour, nettoyage, contrôle, petites corrections et suivi technique.",
  },
  {
    step: "06",
    title: "Évolution continue",
    desc: "Votre site peut évoluer avec vos besoins : contenus, pages, visuels, SEO, formulaires ou nouvelles fonctionnalités.",
  },
];

const offers: MaintenanceOffer[] = [
  {
    id: "essential",
    title: "Essentiel",
    desc: "Pour les sites vitrines simples qui ont besoin d’une base de sécurité, de sauvegardes et d’un suivi technique régulier.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    badge: "Base sécurité",
    features: [
      "Mises à jour mensuelles contrôlées",
      "Sauvegarde régulière externalisée",
      "Vérification SSL et disponibilité",
      "Protection anti-spam de base",
      "Contrôle des formulaires principaux",
      "Support par e-mail",
    ],
    ctaText: "Choisir Essentiel",
  },
  {
    id: "pro",
    title: "Professionnel",
    desc: "Pour les PME dont le site est un vrai canal commercial et qui souhaitent un suivi plus complet.",
    monthlyPrice: 119,
    yearlyPrice: 99,
    badge: "Recommandé PME",
    recommended: true,
    features: [
      "Mises à jour contrôlées plus fréquentes",
      "Sauvegardes régulières renforcées",
      "Surveillance de disponibilité",
      "Contrôle des formulaires et CTA",
      "Optimisation légère de performance",
      "1h mensuelle d’ajustements de contenus",
      "Support prioritaire par e-mail ou téléphone",
    ],
    ctaText: "Choisir Professionnel",
  },
  {
    id: "premium",
    title: "Premium & Évolution",
    desc: "Pour les sites plus sensibles, e-commerce, applications ou projets nécessitant un accompagnement plus actif.",
    monthlyPrice: 249,
    yearlyPrice: 199,
    badge: "Suivi avancé",
    features: [
      "Suivi technique renforcé",
      "Sauvegardes fréquentes et vérifiées",
      "Surveillance sécurité plus poussée",
      "Suivi SEO technique de base",
      "3h mensuelles d’évolutions incluses",
      "Rapport mensuel synthétique",
      "Canal de communication dédié selon besoin",
    ],
    ctaText: "Choisir Premium",
  },
];

const faqs: FaqItem[] = [
  {
    q: "L’abonnement de maintenance est-il avec engagement ?",
    a: "Les formules peuvent être proposées sans engagement long. Les modalités précises sont définies dans le devis ou le contrat, avec une volonté de rester simple et transparent.",
  },
  {
    q: "Quelle différence entre l’hébergeur et la maintenance VSW Digital ?",
    a: "L’hébergeur fournit l’espace serveur. La maintenance concerne le suivi du site lui-même : mises à jour, sécurité, sauvegardes, formulaires, performance, contenus et corrections.",
  },
  {
    q: "Pouvez-vous garantir une sécurité absolue ?",
    a: "Non, aucune sécurité absolue n’existe en informatique. En revanche, une maintenance sérieuse réduit fortement les risques courants et améliore la capacité de réaction en cas de problème.",
  },
  {
    q: "Pouvez-vous maintenir un site que vous n’avez pas créé ?",
    a: "Oui, après un audit initial. Cela permet de vérifier la technologie, les accès, les extensions, l’hébergement, les sauvegardes et l’état général du site.",
  },
  {
    q: "Les modifications de contenus sont-elles incluses ?",
    a: "Selon la formule, un temps mensuel peut être inclus pour de petites modifications : textes, horaires, photos, tarifs, articles ou ajustements simples.",
  },
  {
    q: "La maintenance peut-elle améliorer la vitesse du site ?",
    a: "Oui, dans une certaine mesure. Le nettoyage, le cache, la compression d’images et la réduction d’éléments inutiles peuvent améliorer le temps de chargement.",
  },
];

export function MaintenanceSiteInternet() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSystemTab, setActiveSystemTab] = useState<SystemTab>("healthy");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [quizStep, setQuizStep] = useState<QuizStep>(1);
  const [quizAnswers, setQuizAnswers] = useState({
    tech: "",
    traffic: "",
    needs: "",
  });
  const [quizResult, setQuizResult] = useState<string | null>(null);

  useEffect(() => {
    document.title =
      "Maintenance site internet, sécurité et sauvegardes | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "VSW Digital propose la maintenance de sites internet WordPress, React et Next.js : mises à jour, sauvegardes, sécurité, performance, support et évolutions."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selectAnswer = (
    field: "tech" | "traffic" | "needs",
    value: string
  ) => {
    const updated = { ...quizAnswers, [field]: value };
    setQuizAnswers(updated);

    if (field === "tech") {
      setQuizStep(2);
    }

    if (field === "traffic") {
      setQuizStep(3);
    }

    if (field === "needs") {
      calculateRecommendation(updated);
      setQuizStep(4);
    }
  };

  const calculateRecommendation = (answers: typeof quizAnswers) => {
    if (answers.needs === "evolution" || answers.traffic === "high") {
      setQuizResult("premium");
      return;
    }

    if (
      answers.tech === "react_next" ||
      answers.traffic === "medium" ||
      answers.needs === "occasional"
    ) {
      setQuizResult("pro");
      return;
    }

    setQuizResult("essential");
  };

  const resetQuiz = () => {
    setQuizAnswers({ tech: "", traffic: "", needs: "" });
    setQuizResult(null);
    setQuizStep(1);
  };

  const recommendedOffer =
    offers.find((offer) => offer.id === quizResult) || offers[1];

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
              Maintenance site internet
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Gardez un site{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                fiable, sécurisé et performant
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              VSW Digital assure la maintenance de votre site : mises à jour,
              sauvegardes, sécurité, performance, petites corrections et
              évolutions de contenus.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Sauvegardes", "Sécurité", "Évolutions"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 backdrop-blur"
                >
                  <Check className="h-4 w-4 text-[#3b82f6]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#plans-tarifs"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Voir les formules
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#simulateur-besoins"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Quel plan choisir ?
              </a>
            </div>
          </motion.div>

          {/* Console visuelle */}
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
                  <Activity className="h-4 w-4 text-[#3b82f6]" />
                  <span className="text-xs font-semibold text-slate-300">
                    Console de suivi
                  </span>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Démo
                </span>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl border border-white/5 bg-[#020617] p-1.5">
                <button
                  type="button"
                  onClick={() => setActiveSystemTab("healthy")}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                    activeSystemTab === "healthy"
                      ? "bg-emerald-500 text-[#020617]"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Suivi actif
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSystemTab("at-risk")}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                    activeSystemTab === "at-risk"
                      ? "bg-rose-500 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Sans suivi
                </button>
              </div>

              <div className="space-y-3">
                {(activeSystemTab === "healthy"
                  ? [
                      ["Disponibilité", "Surveillance configurée", "OK"],
                      ["Sauvegardes", "Dernière copie vérifiée", "OK"],
                      ["Performance", "Cache et images suivis", "Stable"],
                      ["Sécurité", "Mises à jour contrôlées", "Suivi"],
                    ]
                  : [
                      ["Disponibilité", "Aucune alerte configurée", "Risque"],
                      ["Sauvegardes", "Fréquence non vérifiée", "À vérifier"],
                      ["Performance", "Images et cache non suivis", "Lent"],
                      ["Sécurité", "Extensions potentiellement obsolètes", "Attention"],
                    ]
                ).map(([title, desc, status]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#020617] p-4"
                  >
                    <div>
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="text-xs text-slate-400">{desc}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        activeSystemTab === "healthy"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-rose-400/10 text-rose-400"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RISQUES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              Risques courants
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Un site non maintenu devient progressivement fragile
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              La plupart des problèmes arrivent discrètement : lenteur, bug de
              formulaire, plugin obsolète, erreur de mise à jour ou absence de
              sauvegarde exploitable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((risk, index) => {
              const Icon = risk.icon;

              return (
                <motion.article
                  key={risk.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {risk.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {risk.desc}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-500">
                      {risk.severity}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFICES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Bénéfices
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une maintenance pour préserver votre site et votre image
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              La maintenance permet de limiter les risques, d’améliorer la
              fiabilité et de garder un site vivant, propre et professionnel.
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
                  transition={{ delay: index * 0.04 }}
                  className="group rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all group-hover:bg-[#3b82f6] group-hover:text-white">
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

      {/* PRESTATIONS */}
      <section id="nos-prestations" className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Prestations incluses
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Les actions techniques essentielles pour garder un site propre
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Selon la formule choisie, nous intervenons sur les points
              nécessaires pour assurer le suivi technique, la sécurité et les
              évolutions courantes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prestations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f172a]">
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

      {/* SIMULATEUR */}
      <section id="simulateur-besoins" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Simulateur
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Quel abonnement correspond à votre site ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Répondez à trois questions pour obtenir une recommandation
              indicative. Le choix final sera confirmé après audit initial.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-900/5 md:p-10">
            <div className="mb-8 flex gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full ${
                    quizStep >= step ? "bg-[#3b82f6]" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>

            {quizStep === 1 && (
              <QuizStepBlock
                label="Question 1 sur 3"
                title="Quelle est la technologie actuelle de votre site ?"
                options={[
                  {
                    key: "wordpress",
                    label: "WordPress / WooCommerce",
                    desc: "Site géré avec CMS, thème ou extensions.",
                  },
                  {
                    key: "react_next",
                    label: "React / Next.js",
                    desc: "Site ou application développée sur mesure.",
                  },
                  {
                    key: "unknown",
                    label: "Je ne sais pas",
                    desc: "Nous vérifierons la technologie lors de l’audit.",
                  },
                ]}
                onSelect={(value) => selectAnswer("tech", value)}
              />
            )}

            {quizStep === 2 && (
              <QuizStepBlock
                label="Question 2 sur 3"
                title="Quel est le niveau d’activité du site ?"
                options={[
                  {
                    key: "low",
                    label: "Site vitrine simple",
                    desc: "Peu de pages et trafic modéré.",
                  },
                  {
                    key: "medium",
                    label: "Site commercial actif",
                    desc: "Demandes régulières, SEO ou Ads.",
                  },
                  {
                    key: "high",
                    label: "Site sensible ou très actif",
                    desc: "E-commerce, espace client ou fort trafic.",
                  },
                ]}
                onSelect={(value) => selectAnswer("traffic", value)}
                onBack={() => setQuizStep(1)}
              />
            )}

            {quizStep === 3 && (
              <QuizStepBlock
                label="Question 3 sur 3"
                title="Quel niveau d’évolution souhaitez-vous ?"
                options={[
                  {
                    key: "technical_only",
                    label: "Sécurité technique uniquement",
                    desc: "Mises à jour, sauvegardes, surveillance.",
                  },
                  {
                    key: "occasional",
                    label: "Petites modifications ponctuelles",
                    desc: "Textes, images, horaires, tarifs.",
                  },
                  {
                    key: "evolution",
                    label: "Évolutions régulières",
                    desc: "Pages, fonctionnalités, SEO, améliorations.",
                  },
                ]}
                onSelect={(value) => selectAnswer("needs", value)}
                onBack={() => setQuizStep(2)}
              />
            )}

            {quizStep === 4 && (
              <div>
                <span className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Recommandation indicative
                </span>

                <h3 className="mt-5 font-display text-3xl font-bold text-[#0f172a]">
                  {recommendedOffer.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                  Selon vos réponses, cette formule semble la plus adaptée. Un
                  audit initial permettra de confirmer le périmètre exact.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">À partir de</p>
                  <p className="mt-1 font-display text-4xl font-bold text-[#0f172a]">
                    {recommendedOffer.monthlyPrice} €{" "}
                    <span className="text-base font-medium text-slate-500">
                      / mois HT
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {recommendedOffer.desc}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white transition-all hover:bg-blue-400"
                  >
                    Demander cette formule
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition-all hover:bg-slate-50"
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPATIBILITE */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Technologies maintenues
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              WordPress, React, Next.js et projets connectés
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous adaptons la maintenance à la technologie utilisée et au rôle
              réel de votre site dans votre activité.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {supportedSites.map((site, index) => {
              const Icon = site.icon;

              return (
                <motion.article
                  key={site.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f172a]">
                    {site.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {site.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Méthode
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une prise en charge progressive et sécurisée
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous ne modifions pas un site à l’aveugle. Chaque intervention
              commence par une vérification et une sauvegarde.
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
                className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
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

      {/* OFFRES */}
      <section id="plans-tarifs" className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Abonnements
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des formules de maintenance claires et évolutives
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Les tarifs ci-dessous servent de base indicative. Chaque site est
              vérifié avant validation de la formule.
            </p>

            <div className="mt-8 inline-flex rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[#0f172a] text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Mensuel
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                  billingCycle === "yearly"
                    ? "bg-[#0f172a] text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Annuel
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer, index) => {
              const price =
                billingCycle === "monthly"
                  ? offer.monthlyPrice
                  : offer.yearlyPrice;

              return (
                <motion.article
                  key={offer.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`relative rounded-[1.8rem] border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl ${
                    offer.recommended
                      ? "border-blue-200 shadow-blue-500/10"
                      : "border-slate-200"
                  }`}
                >
                  {offer.recommended && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#3b82f6] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Recommandé
                    </span>
                  )}

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6]">
                    {offer.badge}
                  </span>

                  <h3 className="mt-5 font-display text-2xl font-bold text-[#0f172a]">
                    {offer.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {offer.desc}
                  </p>

                  <div className="mt-6">
                    <span className="font-display text-5xl font-bold text-[#0f172a]">
                      {price}€
                    </span>
                    <span className="ml-2 text-sm text-slate-500">
                      / mois HT
                    </span>
                  </div>

                  {billingCycle === "yearly" && (
                    <p className="mt-2 text-sm text-emerald-600">
                      Tarif indicatif en paiement annuel
                    </p>
                  )}

                  <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                    {offer.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                        <span className="text-sm leading-6 text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white transition-all hover:bg-blue-400"
                  >
                    {offer.ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes sur la maintenance
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Les réponses aux questions courantes avant de confier la
              maintenance de votre site.
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
            Maintenance site internet
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous voulez garder votre site fiable, rapide et sécurisé ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre site, sa technologie et vos besoins. VSW
            Digital vous aide à choisir une formule de maintenance adaptée.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Demander un diagnostic maintenance
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuizStepBlock({
  label,
  title,
  options,
  onSelect,
  onBack,
}: {
  label: string;
  title: string;
  options: { key: string; label: string; desc: string }[];
  onSelect: (value: string) => void;
  onBack?: () => void;
}) {
  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
        {label}
      </span>

      <h3 className="mt-3 font-display text-2xl font-bold text-[#0f172a]">
        {title}
      </h3>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => onSelect(option.key)}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <strong className="block font-display text-sm text-[#0f172a]">
              {option.label}
            </strong>
            <span className="mt-2 block text-sm leading-6 text-slate-600">
              {option.desc}
            </span>
          </button>
        ))}
      </div>

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-6 text-sm font-semibold text-slate-500 transition-colors hover:text-[#3b82f6]"
        >
          ← Retour
        </button>
      )}
    </div>
  );
}