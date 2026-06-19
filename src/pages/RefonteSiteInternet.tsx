import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Eye,
  FileText,
  Gauge,
  Layout,
  Layers,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from "lucide-react";

interface NeedSign {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface Benefit {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface ProcessStep {
  id: string;
  num: string;
  title: string;
  desc: string;
  badge: string;
}

interface Offer {
  id: string;
  title: string;
  desc: string;
  badge?: string;
  recommended?: boolean;
  features: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const needSigns: NeedSign[] = [
  {
    id: "sign-1",
    icon: AlertTriangle,
    title: "Peu de demandes en ligne",
    desc: "Votre site reçoit peut-être des visites, mais il ne génère pas assez d’appels, de formulaires ou de demandes qualifiées.",
  },
  {
    id: "sign-2",
    icon: Layout,
    title: "Identité visuelle vieillissante",
    desc: "Le design, les couleurs, la mise en page ou la structure ne reflètent plus le niveau réel de votre entreprise.",
  },
  {
    id: "sign-3",
    icon: Smartphone,
    title: "Mauvaise expérience mobile",
    desc: "Les boutons sont trop petits, le menu est peu lisible, les pages se décalent ou les formulaires sont difficiles à remplir.",
  },
  {
    id: "sign-4",
    icon: Award,
    title: "Concurrents plus crédibles",
    desc: "Vos concurrents présentent mieux leurs services, leurs avis, leurs preuves de confiance et leurs réalisations.",
  },
  {
    id: "sign-5",
    icon: Eye,
    title: "Visibilité faible sur Google",
    desc: "Vos pages sont mal structurées, trop courtes, peu optimisées ou absentes sur les requêtes importantes de votre activité.",
  },
  {
    id: "sign-6",
    icon: FileText,
    title: "Informations obsolètes",
    desc: "Vos prestations, tarifs, photos, secteurs d’intervention ou messages commerciaux ne correspondent plus à votre activité actuelle.",
  },
];

const benefits: Benefit[] = [
  {
    id: "benefit-1",
    icon: ShieldCheck,
    title: "Image plus professionnelle",
    desc: "Un site modernisé inspire davantage confiance et donne une impression plus sérieuse dès les premières secondes.",
  },
  {
    id: "benefit-2",
    icon: Users,
    title: "Parcours plus clair",
    desc: "Les visiteurs comprennent plus vite vos services, vos avantages et la bonne action à effectuer : appeler, demander un devis ou prendre contact.",
  },
  {
    id: "benefit-3",
    icon: Search,
    title: "Base SEO préservée",
    desc: "Les pages utiles sont identifiées, les anciennes URL sont redirigées proprement et la nouvelle structure est pensée pour Google.",
  },
  {
    id: "benefit-4",
    icon: Gauge,
    title: "Meilleure performance",
    desc: "Le site peut être allégé, mieux structuré, plus rapide sur mobile et plus agréable à utiliser.",
  },
  {
    id: "benefit-5",
    icon: Sparkles,
    title: "Positionnement plus premium",
    desc: "La refonte permet d’aligner votre présence digitale avec la qualité réelle de vos services.",
  },
  {
    id: "benefit-6",
    icon: Layers,
    title: "Base évolutive",
    desc: "Votre site peut ensuite évoluer vers du SEO, des pages locales, un blog, des landing pages ou un espace client.",
  },
];

const processSteps: ProcessStep[] = [
  {
    id: "p-1",
    num: "01",
    title: "Audit du site existant",
    desc: "Analyse du design, de la structure, des pages, des performances, du SEO existant et des points bloquants.",
    badge: "Analyse",
  },
  {
    id: "p-2",
    num: "02",
    title: "Définition des objectifs",
    desc: "Identification des services prioritaires, des clients ciblés, des zones d’intervention et des actions attendues.",
    badge: "Stratégie",
  },
  {
    id: "p-3",
    num: "03",
    title: "Préservation SEO",
    desc: "Repérage des pages importantes, préparation des redirections et protection des contenus qui apportent déjà de la valeur.",
    badge: "SEO",
  },
  {
    id: "p-4",
    num: "04",
    title: "Maquette UX/UI",
    desc: "Création d’une interface moderne, lisible, mobile-first et orientée conversion.",
    badge: "Design",
  },
  {
    id: "p-5",
    num: "05",
    title: "Intégration optimisée",
    desc: "Développement ou reconstruction du site avec une attention portée à la vitesse, à la lisibilité et à la sécurité.",
    badge: "Technique",
  },
  {
    id: "p-6",
    num: "06",
    title: "Mise en ligne contrôlée",
    desc: "Publication du nouveau site, vérification des formulaires, redirections, sitemap, Search Console et éléments essentiels.",
    badge: "Lancement",
  },
];

const sectors = [
  "Artisans & BTP",
  "PME locales",
  "Commerces",
  "Rénovation",
  "Déménagement",
  "Sécurité privée",
  "Formation",
  "Transport",
  "Professions libérales",
  "Services B2B",
  "Réparation",
  "Domiciliation",
];

const offers: Offer[] = [
  {
    id: "off-1",
    title: "Audit de refonte",
    desc: "Pour savoir s’il faut réellement refaire votre site, optimiser l’existant ou préserver certaines pages importantes.",
    features: [
      "Analyse du site existant",
      "Diagnostic design, mobile et conversion",
      "Lecture SEO des pages existantes",
      "Identification des pages à conserver",
      "Plan d’action de refonte priorisé",
    ],
  },
  {
    id: "off-2",
    title: "Refonte image & conversion",
    desc: "Pour moderniser votre site, améliorer la confiance et rendre le parcours utilisateur plus clair.",
    badge: "Accessible",
    features: [
      "Nouveau design responsive",
      "Amélioration du parcours mobile",
      "Mise en avant des preuves de confiance",
      "Formulaires et CTA plus visibles",
      "Redirections des pages principales",
      "Base technique propre et maintenable",
    ],
  },
  {
    id: "off-3",
    title: "Refonte SEO & croissance",
    desc: "Pour reconstruire une présence digitale plus complète avec une structure SEO, des contenus et une logique de conversion.",
    recommended: true,
    badge: "Recommandé",
    features: [
      "Architecture SEO complète",
      "Pages services optimisées",
      "Pages locales selon besoin",
      "Plan de redirection 301",
      "Optimisation technique et mobile",
      "Connexion Search Console et Analytics",
      "Accompagnement post-lancement",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Quelle est la différence entre une refonte et une simple modification ?",
    a: "Une simple modification consiste à changer un texte, une image ou un bloc. Une refonte repense la structure, le design, le parcours utilisateur, le SEO, les contenus et parfois la technologie du site.",
  },
  {
    q: "Est-ce que je risque de perdre mon référencement Google ?",
    a: "Une refonte mal préparée peut faire perdre du trafic. C’est pourquoi nous analysons les pages existantes, préparons les redirections 301 et conservons les contenus ou URL qui ont de la valeur.",
  },
  {
    q: "Peut-on garantir une première position sur Google après refonte ?",
    a: "Non. Aucune agence sérieuse ne peut garantir une position précise sur Google. En revanche, une refonte bien menée permet de créer une base technique, éditoriale et structurelle plus saine pour progresser.",
  },
  {
    q: "Puis-je conserver mon nom de domaine actuel ?",
    a: "Oui. Le nom de domaine peut être conservé. La refonte concerne le site, sa structure, ses contenus et son hébergement si nécessaire.",
  },
  {
    q: "Quelle technologie choisir pour une refonte ?",
    a: "Cela dépend de votre besoin. WordPress est adapté aux sites administrables et orientés contenus. React ou Next.js sont pertinents pour des interfaces plus modernes, rapides ou personnalisées.",
  },
  {
    q: "Combien de temps prend une refonte ?",
    a: "Le délai dépend du nombre de pages, du niveau de design, des contenus, du SEO et des fonctionnalités. Une refonte simple peut être plus rapide qu’un projet complet avec stratégie SEO.",
  },
  {
    q: "Faut-il tout réécrire ?",
    a: "Pas forcément. Les contenus utiles, avis, réalisations, historiques et pages bien positionnées peuvent être conservés, améliorés et mieux structurés.",
  },
];

export function RefonteSiteInternet() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({
    slow: false,
    mobile: false,
    no_leads: false,
    outdated: false,
    unfindable: false,
    incorrect: false,
  });

  useEffect(() => {
    document.title = "Refonte de site internet professionnel | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "VSW Digital accompagne la refonte de sites internet professionnels : design moderne, performance, SEO, mobile, conversion et redirections."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCheckboxChange = (key: string) => {
    setCheckedAnswers((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const numChecked = Object.values(checkedAnswers).filter(Boolean).length;

  const diagnosis =
    numChecked === 0
      ? {
          title: "Site globalement stable",
          text: "Vous ne signalez pas de problème majeur. Un audit reste utile pour vérifier les performances, le SEO et les points d’amélioration possibles.",
          colorClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
          urgency: "Surveillance",
        }
      : numChecked <= 2
        ? {
            title: "Refonte ou optimisation à envisager",
            text: "Votre site présente quelques signes de fatigue. Une optimisation ciblée ou une refonte légère peut suffire selon l’état réel du site.",
            colorClass: "border-amber-200 bg-amber-50 text-amber-700",
            urgency: "À analyser",
          }
        : {
            title: "Refonte probablement pertinente",
            text: "Plusieurs signaux indiquent que votre site peut freiner la confiance, le SEO ou la génération de demandes. Un audit de refonte est recommandé.",
            colorClass: "border-rose-200 bg-rose-50 text-rose-700",
            urgency: "Prioritaire",
          };

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
              Refonte de site internet
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Modernisez votre site pour{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                gagner en crédibilité
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              VSW Digital refond votre site pour améliorer son image, sa
              lisibilité, sa performance mobile, sa structure SEO et sa capacité
              à générer des demandes qualifiées.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Design moderne", "SEO préservé", "Mobile-first"].map((item) => (
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
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Demander un diagnostic
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#notre-methode"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Découvrir la méthode
              </a>
            </div>
          </motion.div>

          {/* Avant / après */}
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
                  <RefreshCw className="h-4 w-4 text-[#3b82f6]" />
                  <span className="text-xs font-semibold text-slate-300">
                    Avant / Après
                  </span>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Interactif
                </span>
              </div>

              <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                {/* Après */}
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-blue-950 p-5 text-left">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
                    <span className="font-bold text-white">
                      Entreprise Moderne
                    </span>
                    <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-400">
                      Optimisé
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      Nouvelle version
                    </span>
                    <h4 className="font-display text-2xl font-bold leading-tight text-white">
                      Une présentation claire, rapide et rassurante
                    </h4>
                    <p className="text-sm leading-6 text-slate-300">
                      Services lisibles, preuves de confiance, boutons visibles
                      et parcours pensé pour convertir.
                    </p>

                    <div className="flex gap-2">
                      <span className="rounded-xl bg-[#3b82f6] px-3 py-2 text-xs font-bold text-white">
                        Demander un devis
                      </span>
                      <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300">
                        Voir les services
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-[10px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-400" />
                      Mobile
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-400" />
                      SEO
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-400" />
                      Confiance
                    </span>
                  </div>
                </div>

                {/* Avant */}
                <div
                  className="absolute inset-y-0 left-0 flex flex-col justify-between overflow-hidden border-r-2 border-white bg-stone-100 p-5 text-left text-slate-800"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="flex items-center justify-between rounded-xl border border-stone-300 bg-stone-200 px-3 py-2 text-[10px]">
                    <span className="font-bold uppercase tracking-wider">
                      Ancien site
                    </span>
                    <span className="rounded-full bg-rose-100 px-2 py-1 font-bold text-rose-600">
                      À revoir
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-lg font-bold leading-tight underline">
                      Bienvenue sur notre site
                    </h4>
                    <p className="text-xs leading-5 text-stone-600">
                      Informations anciennes, design peu lisible, boutons peu
                      visibles, affichage mobile difficile.
                    </p>

                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-[10px] text-rose-700">
                      <AlertTriangle className="mr-1 inline h-3 w-3" />
                      Expérience mobile à améliorer
                    </div>
                  </div>

                  <div className="border-t border-stone-300 pt-3 text-[10px] text-stone-500">
                    Informations obsolètes • formulaire peu visible
                  </div>
                </div>

                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
                  aria-label="Comparer avant et après la refonte"
                />

                <div
                  className="pointer-events-none absolute bottom-0 top-0 z-20 w-0.5 bg-white"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#3b82f6] text-white shadow-xl">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 text-xs text-slate-400">
                <button
                  type="button"
                  onClick={() => setSliderPos(90)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-rose-300 transition-colors hover:bg-white/10"
                >
                  Voir l’ancien
                </button>
                <span>Glissez la barre</span>
                <button
                  type="button"
                  onClick={() => setSliderPos(10)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-blue-300 transition-colors hover:bg-white/10"
                >
                  Voir la refonte
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIAGNOSTIC */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Auto-évaluation
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Votre site actuel freine-t-il votre croissance ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Cochez les signes d’alerte qui correspondent à votre situation
              pour obtenir une première lecture indicative.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="mb-6 font-display text-xl font-bold text-[#0f172a]">
                Signes constatés
              </h3>

              <div className="space-y-3">
                {[
                  {
                    key: "slow",
                    label:
                      "Mon site prend plusieurs secondes à charger sur mobile",
                  },
                  {
                    key: "mobile",
                    label:
                      "Les images, boutons ou menus s’affichent mal sur smartphone",
                  },
                  {
                    key: "no_leads",
                    label:
                      "Je reçois peu de demandes ou de formulaires depuis mon site",
                  },
                  {
                    key: "outdated",
                    label:
                      "Le design ne reflète plus le sérieux de mon entreprise",
                  },
                  {
                    key: "unfindable",
                    label:
                      "Je suis peu visible sur Google sur mes services principaux",
                  },
                  {
                    key: "incorrect",
                    label:
                      "Mes services, tarifs, photos ou informations ne sont plus à jour",
                  },
                ].map((item) => (
                  <label
                    key={item.key}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all ${
                      checkedAnswers[item.key]
                        ? "border-blue-300 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-blue-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checkedAnswers[item.key]}
                      onChange={() => handleCheckboxChange(item.key)}
                      className="mt-1 h-4 w-4 accent-[#3b82f6]"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                Diagnostic indicatif
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-slate-400">
                  Anomalies sélectionnées
                </p>

                <p className="font-display text-5xl font-bold text-white">
                  {numChecked}
                </p>

                <div
                  className={`rounded-2xl border p-5 text-sm leading-7 ${diagnosis.colorClass}`}
                >
                  <div className="mb-2 flex items-center gap-2 font-bold">
                    <AlertTriangle className="h-4 w-4" />
                    <span>
                      {diagnosis.title} — {diagnosis.urgency}
                    </span>
                  </div>
                  <p>{diagnosis.text}</p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white transition-all hover:bg-blue-400"
                >
                  Demander un diagnostic complet
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              Quand refondre ?
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Les signes qu’une refonte devient nécessaire
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Une refonte devient pertinente lorsque le site ne soutient plus
              votre image, votre visibilité ou vos objectifs commerciaux.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {needSigns.map((sign, index) => {
              const Icon = sign.icon;

              return (
                <motion.article
                  key={sign.id}
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
                    {sign.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {sign.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Piliers
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Les fondations d’une refonte réussie
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Une refonte ne consiste pas seulement à changer le design. Elle
              doit préserver le SEO, améliorer le mobile et clarifier le parcours
              de conversion.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Préserver le capital SEO",
                desc: "Identifier les pages importantes, conserver les contenus utiles et préparer les redirections nécessaires.",
                points: [
                  "Plan de redirection 301",
                  "Pages fortes conservées",
                  "Structure SEO améliorée",
                ],
              },
              {
                icon: Gauge,
                title: "Améliorer la vitesse mobile",
                desc: "Alléger les pages, optimiser les images, réduire les éléments inutiles et améliorer le confort de navigation.",
                points: [
                  "Images optimisées",
                  "Code plus propre",
                  "Navigation mobile plus fluide",
                ],
              },
              {
                icon: Users,
                title: "Clarifier la conversion",
                desc: "Rendre les services plus lisibles, renforcer la confiance et simplifier l’accès au contact.",
                points: [
                  "CTA visibles",
                  "Formulaires simplifiés",
                  "Preuves de confiance",
                ],
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#0f172a]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {pillar.desc}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                    {pillar.points.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-slate-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
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
              Ce que votre entreprise peut gagner avec une refonte
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Une refonte bien menée peut améliorer la perception de votre
              entreprise, la lisibilité de vos offres et l’efficacité de vos
              demandes de contact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.id}
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

      {/* METHODE */}
      <section id="notre-methode" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Méthode
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une refonte structurée, sans repartir à l’aveugle
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous avançons étape par étape pour protéger l’existant, moderniser
              l’image et améliorer la performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-4xl font-black text-[#3b82f6]/20">
                    {step.num}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6]">
                    {step.badge}
                  </span>
                </div>

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

      {/* TECHNOLOGIES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Technologie
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              WordPress ou React / Next.js : le choix dépend du besoin
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous ne choisissons pas une technologie par effet de mode. Le choix
              dépend de votre autonomie souhaitée, de votre budget, de vos
              contenus et de vos besoins d’évolution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6]">
                WordPress
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#0f172a]">
                Pour un site administrable et orienté contenu
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                WordPress est adapté si vous voulez modifier facilement vos
                pages, publier des articles ou gérer des contenus avec une
                interface connue.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {[
                  "Administration simple",
                  "Blog et pages SEO",
                  "Bonne solution pour sites vitrines",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                React / Next.js
              </span>

              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Pour une interface plus rapide, moderne et personnalisée
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                React ou Next.js sont pertinents pour une expérience plus
                fluide, un design sur mesure, une meilleure évolutivité ou des
                fonctionnalités plus avancées.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {[
                  "Interface très personnalisée",
                  "Performance et fluidité",
                  "Base évolutive vers application web",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Secteurs
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des refontes adaptées aux métiers de terrain
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Chaque secteur a ses codes : preuve de confiance, devis, téléphone,
            zones d’intervention, avis, réalisations ou formulaires spécifiques.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-white"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Accompagnements
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des niveaux de refonte selon votre besoin réel
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              La refonte peut être légère, visuelle, technique, SEO ou complète.
              L’audit permet de choisir le bon niveau d’intervention.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer, index) => (
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
                {offer.badge && (
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      offer.recommended
                        ? "bg-[#3b82f6] text-white"
                        : "bg-blue-50 text-[#3b82f6]"
                    }`}
                  >
                    {offer.badge}
                  </span>
                )}

                <h3 className="mt-5 font-display text-2xl font-bold text-[#0f172a]">
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
                  Demander un devis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Notre philosophie
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Une refonte utile, pas seulement plus jolie
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Nous cherchons à construire un site plus clair, plus rapide,
                plus fiable et mieux aligné avec vos objectifs commerciaux. Le
                design n’est pas décoratif : il doit guider, rassurer et aider le
                visiteur à passer à l’action.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: TrendingUp,
                    title: "Orientation conversion",
                    desc: "Chaque section doit aider le visiteur à comprendre votre valeur et à vous contacter.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Protection de l’existant",
                    desc: "Nous évitons de supprimer ce qui fonctionne déjà, notamment les pages utiles au SEO.",
                  },
                  {
                    icon: BookOpen,
                    title: "Explications claires",
                    desc: "Vous comprenez les choix techniques sans jargon inutile.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[#0f172a]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <div className="mb-6 flex items-center gap-2 text-blue-300">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Charte VSW Digital
                </span>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Pas de promesse SEO magique",
                    desc: "Nous ne promettons pas une première place garantie. Nous construisons des bases solides.",
                  },
                  {
                    title: "Pas de complexité inutile",
                    desc: "La technologie doit servir le besoin réel, pas impressionner inutilement.",
                  },
                  {
                    title: "Propriété et transparence",
                    desc: "Vous gardez la maîtrise de votre site, de vos accès et de vos contenus.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="border-l border-blue-500 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 font-display font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
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
              Questions fréquentes sur la refonte
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Les réponses aux principales questions avant de moderniser votre
              site internet.
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
            Refonte de site internet
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Votre site mérite-t-il une nouvelle base plus moderne ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre site actuel, vos objectifs et vos difficultés.
            VSW Digital vous aide à déterminer s’il faut optimiser l’existant ou
            lancer une refonte complète.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Demander mon diagnostic de refonte
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}