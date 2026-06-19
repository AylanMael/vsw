import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  AlertTriangle,
  ArrowDownCircle,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Cpu,
  FileText,
  Gauge,
  Grid,
  HelpCircle,
  Layout,
  ListFilter,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

interface AuditBenefit {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
}

interface AnalyzedItem {
  id: string;
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  badge: string;
}

interface AuditType {
  title: string;
  badge: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
}

interface OfferOption {
  title: string;
  subtitle: string;
  desc: string;
  ctaText: string;
  features: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const benefits: AuditBenefit[] = [
  {
    title: "Identifier les vrais points faibles",
    desc: "Repérer les freins qui limitent votre visibilité, votre crédibilité ou la génération de demandes qualifiées.",
    icon: AlertTriangle,
  },
  {
    title: "Prioriser les actions utiles",
    desc: "Obtenir une feuille de route claire, classée selon l’impact potentiel et la facilité de mise en œuvre.",
    icon: ListFilter,
  },
  {
    title: "Éviter les dépenses inutiles",
    desc: "Savoir s’il faut optimiser l’existant, corriger quelques blocages, améliorer le SEO ou envisager une refonte.",
    icon: CheckCircle2,
  },
  {
    title: "Améliorer la visibilité Google",
    desc: "Analyser votre structure SEO, vos contenus, vos pages services et vos opportunités de référencement local.",
    icon: Search,
  },
  {
    title: "Renforcer la conversion",
    desc: "Comprendre pourquoi les visiteurs ne passent pas à l’action : formulaire, CTA, confiance, mobile ou clarté de l’offre.",
    icon: Zap,
  },
  {
    title: "Construire un plan d’action",
    desc: "Repartir avec des recommandations concrètes, compréhensibles et exploitables étape par étape.",
    icon: TrendingUp,
  },
];

const analyzedItems: AnalyzedItem[] = [
  {
    id: "site",
    title: "Site internet",
    desc: "Design, structure, clarté de l’offre, navigation, expérience mobile, appels à l’action et crédibilité générale.",
    icon: Layout,
    badge: "UX",
  },
  {
    id: "seo-tech",
    title: "SEO technique",
    desc: "Balises, indexation, structure des titres, sitemap, maillage interne, erreurs d’exploration et lisibilité par Google.",
    icon: Cpu,
    badge: "Google",
  },
  {
    id: "seo-content",
    title: "Contenus SEO",
    desc: "Qualité des textes, intention de recherche, mots-clés, pages services, pages locales et pertinence éditoriale.",
    icon: FileText,
    badge: "Contenu",
  },
  {
    id: "performance",
    title: "Performance web",
    desc: "Vitesse mobile, poids des images, scripts bloquants, stabilité visuelle et ressenti utilisateur.",
    icon: Gauge,
    badge: "Vitesse",
  },
  {
    id: "conversion",
    title: "Conversion",
    desc: "Formulaires, boutons de contact, parcours utilisateur, éléments de réassurance et preuves de confiance.",
    icon: MousePointerClick,
    badge: "Leads",
  },
  {
    id: "ads",
    title: "Google Ads",
    desc: "Structure des campagnes, cohérence des mots-clés, suivi des conversions, pages d’atterrissage et budget.",
    icon: BarChart3,
    badge: "Ads",
  },
  {
    id: "local",
    title: "SEO local",
    desc: "Fiche Google Business Profile, cohérence des informations, avis clients, visibilité Maps et requêtes géolocalisées.",
    icon: Users,
    badge: "Local",
  },
  {
    id: "security",
    title: "Sécurité & maintenance",
    desc: "HTTPS, CMS, plugins, sauvegardes, mises à jour, hébergement et risques techniques visibles.",
    icon: ShieldCheck,
    badge: "Sécurité",
  },
  {
    id: "automation",
    title: "Automatisation",
    desc: "Tâches répétitives, formulaires isolés, saisies manuelles, relances et connexions possibles entre outils.",
    icon: Workflow,
    badge: "Process",
  },
];

const methodSteps = [
  {
    num: "01",
    title: "Compréhension de votre activité",
    desc: "Nous commençons par comprendre vos services, vos clients, vos objectifs, votre zone d’intervention et vos priorités commerciales.",
  },
  {
    num: "02",
    title: "Analyse de votre présence actuelle",
    desc: "Nous examinons votre site, votre structure SEO, votre performance mobile, vos contenus et vos éventuelles campagnes publicitaires.",
  },
  {
    num: "03",
    title: "Détection des freins",
    desc: "Nous identifions les blocages qui limitent votre visibilité, votre crédibilité ou la transformation des visiteurs en demandes.",
  },
  {
    num: "04",
    title: "Repérage des opportunités",
    desc: "Nous listons les axes d’amélioration : nouvelles pages, optimisation SEO, refonte partielle, meilleure conversion ou automatisation.",
  },
  {
    num: "05",
    title: "Priorisation des actions",
    desc: "Chaque recommandation est classée selon son impact potentiel, son urgence et son niveau de complexité.",
  },
  {
    num: "06",
    title: "Restitution claire",
    desc: "Vous obtenez une feuille de route exploitable pour décider sereinement des prochaines actions à mener.",
  },
];

const auditTypes: AuditType[] = [
  {
    title: "Diagnostic express",
    badge: "Première lecture",
    desc: "Pour identifier rapidement les principaux freins visibles d’un site vitrine ou d’une présence digitale locale.",
    icon: Zap,
  },
  {
    title: "Audit SEO",
    badge: "Visibilité Google",
    desc: "Pour analyser la structure, les contenus, les balises, les pages services et les opportunités de référencement.",
    icon: Search,
  },
  {
    title: "Audit de refonte",
    badge: "Avant projet",
    desc: "Pour savoir s’il faut refaire le site, optimiser l’existant ou protéger certaines pages qui fonctionnent déjà.",
    icon: Layout,
  },
  {
    title: "Audit Google Ads",
    badge: "Publicité",
    desc: "Pour vérifier les campagnes, les mots-clés, les annonces, les pages d’atterrissage et le suivi des conversions.",
    icon: BarChart3,
  },
  {
    title: "Audit conversion",
    badge: "Demandes",
    desc: "Pour comprendre pourquoi les visiteurs ne contactent pas l’entreprise malgré du trafic ou de la visibilité.",
    icon: MousePointerClick,
  },
  {
    title: "Audit digital complet",
    badge: "Vision globale",
    desc: "Pour analyser site, SEO, performance, conversion, publicité, outils internes et pistes d’automatisation.",
    icon: Grid,
  },
];

const offers: OfferOption[] = [
  {
    title: "Diagnostic express",
    subtitle: "La première clarté",
    desc: "Idéal pour obtenir rapidement un premier avis structuré sur votre site ou votre visibilité.",
    ctaText: "Demander un diagnostic express",
    features: [
      "Vérification mobile",
      "Lecture des freins SEO visibles",
      "Analyse rapide des CTA et formulaires",
      "Premières recommandations prioritaires",
      "Échange de restitution synthétique",
    ],
  },
  {
    title: "Audit SEO & conversion",
    subtitle: "Visibilité et demandes",
    desc: "Adapté aux entreprises qui veulent comprendre pourquoi leur site ne génère pas assez de contacts.",
    ctaText: "Lancer mon audit SEO & conversion",
    features: [
      "Analyse technique SEO",
      "Lecture des contenus et pages services",
      "Diagnostic de conversion",
      "Analyse des parcours mobile",
      "Plan d’action priorisé",
    ],
  },
  {
    title: "Audit digital complet",
    subtitle: "Vision 360°",
    desc: "Pour obtenir une vision globale de votre présence digitale et de vos leviers d’amélioration.",
    ctaText: "Demander un audit complet",
    features: [
      "Audit site, SEO et performance",
      "Analyse conversion et confiance",
      "Lecture Google Ads si actif",
      "Pistes d’automatisation",
      "Feuille de route stratégique",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Qu’est-ce qu’un audit digital chez VSW Digital ?",
    a: "C’est une analyse structurée de votre présence en ligne : site internet, SEO, performance, conversion, Google Ads, expérience mobile et éventuelles opportunités d’automatisation.",
  },
  {
    q: "Quelle est la différence entre un audit SEO et un audit digital complet ?",
    a: "L’audit SEO se concentre sur votre visibilité Google. L’audit digital complet va plus loin : il analyse aussi l’ergonomie, la conversion, la performance, les campagnes publicitaires, la sécurité et les outils internes.",
  },
  {
    q: "Pourquoi faire un audit avant de refaire mon site ?",
    a: "Parce qu’une refonte sans diagnostic peut supprimer ce qui fonctionne déjà. L’audit permet de savoir s’il faut corriger, optimiser, restructurer ou réellement repartir sur une nouvelle base.",
  },
  {
    q: "L’audit peut-il expliquer pourquoi mon site ne génère pas de demandes ?",
    a: "Oui. Nous analysons le parcours utilisateur, les formulaires, les appels à l’action, la clarté de l’offre, la version mobile, les éléments de confiance et le suivi des conversions.",
  },
  {
    q: "Pouvez-vous analyser ma fiche Google Business Profile ?",
    a: "Oui. Le SEO local fait partie des points analysés lorsque cela est pertinent : fiche Google, avis, cohérence des informations, visibilité Maps et pages locales.",
  },
  {
    q: "Faut-il donner accès à Google Analytics ou Search Console ?",
    a: "Ce n’est pas toujours obligatoire pour commencer, mais ces accès en lecture seule permettent d’obtenir des données plus précises sur le trafic, les conversions et les erreurs d’indexation.",
  },
  {
    q: "Suis-je obligé de commander une prestation après l’audit ?",
    a: "Non. L’audit sert d’abord à vous donner de la clarté. Vous pouvez ensuite mettre en œuvre les recommandations avec VSW Digital, avec votre équipe ou avec un autre prestataire.",
  },
  {
    q: "Combien coûte un audit digital ?",
    a: "Le tarif dépend du périmètre : diagnostic express, audit SEO, audit Google Ads, audit de refonte ou audit complet. Un échange préalable permet de proposer une estimation adaptée.",
  },
];

export function AuditDigital() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [siteScore, setSiteScore] = useState<number>(75);
  const [seoScore, setSeoScore] = useState<number>(60);
  const [perfScore, setPerfScore] = useState<number>(45);
  const [convScore, setConvScore] = useState<number>(55);
  const [activeAnalysisField, setActiveAnalysisField] =
    useState<string>("seo-tech");

  useEffect(() => {
    document.title = "Audit digital, SEO et conversion | VSW Digital";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Audit digital pour site internet, SEO, performance, conversion, Google Ads et automatisation. VSW Digital aide les PME à identifier leurs priorités digitales."
      );
    }
  }, []);

  const overallScore = Math.round(
    (siteScore + seoScore + perfScore + convScore) / 4
  );

  const getScoreVerdict = (score: number) => {
    if (score < 50) {
      return {
        label: "Priorités importantes",
        color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      };
    }

    if (score < 70) {
      return {
        label: "Optimisations recommandées",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      };
    }

    return {
      label: "Base intéressante",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    };
  };

  const currentVerdict = getScoreVerdict(overallScore);
  const selectedItem =
    analyzedItems.find((item) => item.id === activeAnalysisField) ||
    analyzedItems[0];

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
              Audit digital VSW Digital
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Identifiez les priorités de votre{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                présence en ligne
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Votre site ne génère pas assez de demandes ? Votre référencement
              stagne ? Vos campagnes Google Ads manquent de clarté ? L’audit
              digital permet d’identifier les vrais freins avant d’investir dans
              une refonte, du SEO ou de la publicité.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Audit SEO & visibilité",
                "Performance mobile",
                "Conversion & formulaires",
                "Google Ads & tracking",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 backdrop-blur"
                >
                  <Check className="h-4 w-4 text-[#3b82f6]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Demander un audit digital
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#ce-qui-est-analyse"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Voir ce qui est analysé
                <ArrowDownCircle className="h-5 w-5 text-blue-300" />
              </a>
            </div>
          </motion.div>

          {/* Simulateur */}
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
                    Simulateur d’audit
                  </span>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Démo
                </span>
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-300">
                Ajustez les curseurs pour simuler l’état perçu de votre présence
                actuelle. Ce score reste indicatif : seul un audit réel permet de
                confirmer les priorités.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Site & ergonomie",
                    value: siteScore,
                    setter: setSiteScore,
                  },
                  {
                    label: "SEO & visibilité Google",
                    value: seoScore,
                    setter: setSeoScore,
                  },
                  {
                    label: "Performance mobile",
                    value: perfScore,
                    setter: setPerfScore,
                  },
                  {
                    label: "Conversion & formulaires",
                    value: convScore,
                    setter: setConvScore,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/5 bg-[#020617] p-4"
                  >
                    <div className="mb-2 flex justify-between text-xs text-slate-300">
                      <span>{item.label}</span>
                      <span className="font-bold text-[#3b82f6]">
                        {item.value}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={item.value}
                      onChange={(e) => item.setter(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer accent-[#3b82f6]"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[#020617] p-5">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Score estimatif
                </p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="font-display text-4xl font-bold text-white">
                    {overallScore}/100
                  </p>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${currentVerdict.color}`}
                  >
                    {currentVerdict.label}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEME */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                Le dilemme
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Vous sentez que votre présence digitale pourrait mieux
                fonctionner, mais vous ne savez pas par où commencer.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Beaucoup d’entreprises veulent améliorer leur visibilité, refaire
                leur site ou investir dans Google Ads sans disposer d’un
                diagnostic clair. L’audit permet d’éviter les décisions prises à
                l’aveugle.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm leading-7 text-slate-600">
                  Un bon audit ne sert pas à produire un rapport compliqué. Il
                  sert à savoir quoi corriger, dans quel ordre, avec quel niveau
                  de priorité.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                Symptômes fréquents
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Peu de demandes via le formulaire",
                  "Site lent sur mobile",
                  "Pages peu visibles sur Google",
                  "Mauvais suivi des conversions",
                  "Contenu trop court ou trop générique",
                  "Boutons d’appel peu visibles",
                  "Campagnes Ads mal mesurées",
                  "Fiche Google peu optimisée",
                  "Pages services manquantes",
                  "Tâches manuelles répétitives",
                  "Absence de données fiables",
                  "Refonte envisagée sans diagnostic",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Bénéfices
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Un audit digital pour prendre de meilleures décisions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              L’objectif est de donner une vision nette de votre situation
              actuelle pour orienter vos investissements vers les actions les
              plus utiles.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ANALYSE */}
      <section id="ce-qui-est-analyse" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Ce qui est analysé
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une lecture complète de votre présence digitale
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous analysons les éléments qui influencent directement la
              visibilité, la confiance, la performance et la conversion.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {analyzedItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeAnalysisField === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveAnalysisField(item.id)}
                  className={`group rounded-[1.5rem] border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isSelected
                      ? "border-blue-300 bg-blue-50 shadow-blue-500/10"
                      : "border-slate-200 bg-white hover:border-blue-200"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                        isSelected
                          ? "bg-[#3b82f6] text-white"
                          : "bg-slate-50 text-[#3b82f6] ring-1 ring-slate-200"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f172a]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20 md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Zoom sélectionné
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold">
                  {selectedItem.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {selectedItem.desc}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
                <p className="mb-4 text-sm font-semibold text-white">
                  Exemples de points vérifiés :
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Qualité de la structure",
                    "Clarté du parcours utilisateur",
                    "Visibilité des actions importantes",
                    "Cohérence avec vos objectifs",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Méthode
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une démarche claire, utile et exploitable
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              L’audit doit vous aider à décider. Nous privilégions une méthode
              lisible, progressive et orientée action.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodSteps.map((step, index) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <span className="mb-5 block font-display text-4xl font-black text-[#3b82f6]/20">
                  {step.num}
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

      {/* TYPES AUDITS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Formats d’audit
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Un format adapté à votre situation
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Selon votre besoin, l’audit peut être rapide, orienté SEO, centré
              sur la conversion, ou couvrir l’ensemble de votre présence
              digitale.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {auditTypes.map((type, index) => {
              const Icon = type.icon;

              return (
                <motion.article
                  key={type.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3b82f6] ring-1 ring-slate-200">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full bg-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {type.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {type.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Choisir le bon niveau
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des prestations adaptées à votre besoin
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Le périmètre dépend de votre situation : simple diagnostic,
              problème SEO précis ou vision digitale complète.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`rounded-[1.8rem] border p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  index === 1
                    ? "border-blue-200 bg-white shadow-blue-500/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                  {offer.subtitle}
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold text-[#0f172a]">
                  {offer.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {offer.desc}
                </p>

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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes sur l’audit digital
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Voici les réponses aux questions courantes avant de demander un
              diagnostic ou un audit plus complet.
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
            Audit digital
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous voulez savoir ce qui bloque réellement votre présence en ligne ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre site, vos objectifs et vos difficultés
            actuelles. VSW Digital vous aide à identifier les actions les plus
            utiles avant d’investir dans une refonte, du SEO ou de la publicité.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Demander mon audit digital
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}