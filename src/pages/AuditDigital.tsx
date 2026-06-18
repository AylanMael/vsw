import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  AlertTriangle, 
  TrendingUp, 
  Smartphone, 
  Wrench, 
  Search, 
  FileText, 
  Layout, 
  Settings, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Activity, 
  Clock, 
  ArrowUpRight, 
  Zap, 
  ShieldCheck, 
  Check, 
  Building, 
  Users,
  Grid,
  RefreshCw,
  Gauge,
  HelpCircle,
  Eye,
  AlertOctagon,
  Award,
  Database,
  Lock,
  Server,
  Code,
  AlertCircle,
  MessageSquare,
  CheckCircle2,
  ListFilter,
  ArrowDownCircle,
  BarChart3,
  MousePointerClick,
  MonitorPlay,
  Share2,
  Workflow,
  HelpCircle as HelpIcon
} from 'lucide-react';

interface AuditBenefit {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

interface AnalyzedItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  badge: string;
}

interface AuditType {
  title: string;
  badge: string;
  desc: string;
  icon: React.ComponentType<any>;
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

// 1. Benefits data
const benefits: AuditBenefit[] = [
  {
    title: "Identifier les vrais points faibles",
    desc: "Mettre le doigt avec précision sur les freins invisibles qui bloquent vos visites ou sabotent la confiance de vos prospects.",
    icon: AlertOctagon
  },
  {
    title: "Prioriser les actions utiles",
    desc: "Ne vous éparpillez plus. Obtenez une feuille de route claire classée par ordre d'impact et de facilité de mise en œuvre.",
    icon: ListFilter
  },
  {
    title: "Éviter les dépenses inutiles",
    desc: "Ne financez pas une refonte complète ou des campagnes de pub onéreuses si le blocage réside dans un simple formulaire défectueux.",
    icon: CheckCircle2
  },
  {
    title: "Améliorer la visibilité Google",
    desc: "Analysez votre positionnement naturel pour capter des requêtes géolocalisées à forte valeur ajoutée commerciale.",
    icon: Search
  },
  {
    title: "Renforcer la conversion du site",
    desc: "Transformez vos visiteurs passifs en appels téléphoniques ou demandes de devis grâce à une ergonomie retravaillée.",
    icon: Zap
  },
  {
    title: "Construire un plan d'action clair",
    desc: "Bénéficiez d'une vision stratégique à court et moyen terme, vulgarisée et sans charabia technique opaque.",
    icon: TrendingUp
  }
];

// 2. What is analyzed grid
const analyzedItems: AnalyzedItem[] = [
  {
    id: "site",
    title: "Site internet",
    desc: "Design, structure, clarté des services, navigation, expérience mobile, pertinence des appels à l'action et crédibilité globale face à vos prospects.",
    icon: Layout,
    badge: "Ergonomie"
  },
  {
    id: "seo-tech",
    title: "SEO technique",
    desc: "Indexation, balises indispensables, structure Hn des titres, fichier sitemap, maillage interne, erreurs d'exploration et compréhension globale par les robots de Google.",
    icon: Cpu,
    badge: "Google"
  },
  {
    id: "seo-content",
    title: "Contenus SEO",
    desc: "Qualité rédactionnelle des textes, ciblage des bons mots-clés, pages de services dédiées, pages locales, pertinence du blog et adéquation avec l'intention de recherche.",
    icon: FileText,
    badge: "Rédaction"
  },
  {
    id: "seo-local",
    title: "SEO local",
    desc: "Optimisation de votre fiche Google Business Profile, cohérence des informations sur le web, avis clients, visibilité locale sur Google Maps et requêtes géolocalisées.",
    icon: Building,
    badge: "Proximité"
  },
  {
    id: "performance",
    title: "Performance web",
    desc: "Vitesse de chargement sur réseau mobile, poids des images, stabilité visuelle des blocs (Core Web Vitals) et optimisation technique serveur.",
    icon: Gauge,
    badge: "Vitesse"
  },
  {
    id: "conversion",
    title: "Conversion",
    desc: "Efficacité des formulaires, visibilité des boutons de contact, parcours utilisateur sans friction, éléments de réassurance, preuves de confiance et parcours client.",
    icon: MousePointerClick,
    badge: "Ventes"
  },
  {
    id: "google-ads",
    title: "Google Ads",
    desc: "Structure de vos campagnes actives, mots-clés achetés vs négatifs, pertinence des annonces, dépenses inutiles, ciblage et suivi réel du coût par conversion.",
    icon: BarChart3,
    badge: "Publicité"
  },
  {
    id: "competition",
    title: "Présence concurrentielle",
    desc: "Analyse des concurrents visibles sur Google dans votre secteur (Paris, Val-de-Marne...), structure de leurs pages, messages clés et positionnement.",
    icon: Users,
    badge: "Marché"
  },
  {
    id: "security",
    title: "Maintenance & Sécurité",
    desc: "Certificat HTTPS, version du code (CMS WordPress), risques de piratage, conformité des plugins tiers, intégrité d'hébergement et sauvegarde.",
    icon: ShieldCheck,
    badge: "Sûreté"
  },
  {
    id: "automation",
    title: "Automatisation & Outils",
    desc: "Identification des tâches répétitives, saisies manuelles fastidieuses, formulaires isolés, et opportunités de lier vos outils métiers (CRM, mails).",
    icon: Workflow,
    badge: "Efficacité"
  }
];

// 3. Recommended steps
const methodSteps = [
  {
    num: "01",
    title: "Compréhension active de votre métier",
    desc: "Nous analysons votre secteur d'activité, votre clientèle cible, vos zones de chalandise prioritaires (Paris, Val-de-Marne, Île-de-France) et vos objectifs précis de croissance."
  },
  {
    num: "02",
    title: "Examen complet de votre présence",
    desc: "Nos experts examinent votre site web, sa vitesse mobile, la qualité de sa structure sémantique et l'historique de votre visibilité actuelle."
  },
  {
    num: "03",
    title: "Détection objective des freins",
    desc: "Nous démasquons les points de friction qui coûtent cher : formulaires trop longs, lenteurs mobiles, balises manquantes ou campagnes de pub mal ciblées."
  },
  {
    num: "04",
    title: "Cartographie des opportunités",
    desc: "Nous listons les gisements de croissance inexploités : mots-clés locaux à fort volume, pages services manquantes, réglages d'ergonomie simples ou automatisations."
  },
  {
    num: "05",
    title: "Hiérarchisation pragmatique des correctifs",
    desc: "Nous classons chaque recommandation selon un ratio simple : impact économique généré / simplicité et coût de déploiement technique."
  },
  {
    num: "06",
    title: "Restitution de la feuille de route",
    desc: "Nous vous livrons notre plan d'action vulgarisé, étape par étape, afin que vous puissiez décider des chantiers prioritaires à mener sereinement."
  }
];

// 4. Types of audits
const auditTypes: AuditType[] = [
  {
    title: "Audit express",
    badge: "Idéal TPE & Artisans",
    desc: "Pour obtenir en quelques jours un retour clair sur les points bloquants majeurs d'un site vitrine local et vos premières opportunités SEO locales.",
    icon: Zap
  },
  {
    title: "Audit SEO",
    badge: "Focus Visibilité Google",
    desc: "Idéal si votre site stagne en page 2 ou 3. Analyse en profondeur de la structure technique, du contenu sémantique, du SEO local et des backlinks.",
    icon: Search
  },
  {
    title: "Audit de refonte",
    badge: "Préparation de Projet",
    desc: "Aide à la décision capitale avant de payer un nouveau site. Faut-il simplement optimiser l'existant ou repartir à zéro ? Nous protégeons votre SEO historique.",
    icon: Layout
  },
  {
    title: "Audit Google Ads",
    badge: "Chasse au gaspillage",
    desc: "Pour les entreprises qui dépensent en publicité mais ne voient pas de retours. Analyse du ciblage, de la landing page, du score de qualité et du tracking de leads.",
    icon: BarChart3
  },
  {
    title: "Audit conversion (UX)",
    badge: "Plus de Leads",
    desc: "Vous avez du trafic mais personne ne vous contacte ? Analyse complète de la confiance, de l'ergonomie mobile, de l'appel à l'action et des formulaires.",
    icon: MousePointerClick
  },
  {
    title: "Audit digital complet",
    badge: "La Totale Stratégique",
    desc: "Une radiographie globale à 360° : site internet, référencement, performances, e-réputation, réseaux, automatisations possibles et outils métiers.",
    icon: Grid
  }
];

// 5. Offers Indicatives
const offers: OfferOption[] = [
  {
    title: "Diagnostic Express",
    subtitle: "La clarté rapide",
    desc: "Idéal pour les artisans, commerçants locaux et dirigeants de TPE souhaitant lever le doute sur les bugs de leur site.",
    ctaText: "Demander un diagnostic express",
    features: [
      "Vérification de l'expérience mobile",
      "Détection des principaux freins SEO visibles",
      "Analyse de l'efficacité du formulaire",
      "Mesure de la vitesse de chargement de base",
      "Échange de restitution de 30 min par téléphone"
    ]
  },
  {
    title: "Audit SEO & Conversion",
    subtitle: "Croissance & Visibilité",
    desc: "Parfait pour les PME et entreprises de services désirant transformer leur site internet en une véritable machine à leads.",
    ctaText: "Lancer mon audit SEO & Conversion",
    features: [
      "Analyse de structure technique (balises, indexation)",
      "Audit sémantique et des contenus clés de vos services",
      "Diagnostic complet du référencement local (Maps)",
      "Étude de l'expérience utilisateur et points de friction",
      "Plan d'action prioritaire et document à conserver"
    ]
  },
  {
    title: "Audit Digital Complet",
    subtitle: "Vision 360° & Automatisation",
    desc: "Destiné aux entreprises en développement souhaitant harmoniser leur écosystème en ligne, automatiser et optimiser de A à Z.",
    ctaText: "Solliciter l'audit complet personnalisé",
    features: [
      "Analyse exhaustive (Site, Référencement, Securité)",
      "Audit des campagnes Google Ads si actives",
      "Diagnostic de performance de vos concurrents directs",
      "Cartographie des automatisations et des gains de temps",
      "Document stratégique détaillé + Réunion de restitution"
    ]
  }
];

// 6. FAQs
const faqs: FaqItem[] = [
  {
    q: "Qu'est-ce qu'un audit digital chez VSW Digital ?",
    a: "C'est une analyse approfondie et objective de votre visibilité sur le web et de la technicité de votre site. Nous ne nous contentons pas d'utiliser des outils de scan automatique qui fournissent des rapports génériques imbitables. Un développeur senior et un consultant SEO se penchent manuellement sur vos pages, étudient l'expérience de vos utilisateurs, testent vos formulaires et analysent la stratégie de vos concurrents locaux pour vous livrer des recommandations concrètes et compréhensibles."
  },
  {
    q: "Quelle est la différence entre un audit SEO et un audit digital complet ?",
    a: "L'audit SEO se concentre exclusivement sur les facteurs qui régissent votre visibilité dans les moteurs de recherche (mots-clés, balises, qualité de rédaction, liens externes, Google Maps). L'audit digital englobe une vision bien plus large à 3605 : il évalue aussi l'ergonomie globale (UX), la conversion, le tracking publicitaire (Google Ads), la sécurité, l'hébergement, ainsi que vos opportunités d'automatisation des tâches répétitives avec vos outils métiers."
  },
  {
    q: "Pourquoi devrais-je faire un audit avant de refaire mon site internet ?",
    a: "Une refonte à l'aveugle est un risque majeur. Parfois, le site existant a d'excellentes bases mais convertit mal à cause de boutons invisibles. Si vous refaites tout sans comprendre, vous risquez d'effacer ce qui fonctionnait déjà, d'endommager gravement votre référencement naturel historique chez Google (perte de positions précieuses) ou de dépenser un budget conséquent pour les mauvaises raisons. L'audit d'avant-refonte pose des fondations rationnelles."
  },
  {
    q: "L'audit permet-il de savoir pourquoi mon site ne génère pas de demandes de devis ?",
    a: "Absolument. C'est l'un de nos objectifs essentiels. Nous analysons le parcours d'un utilisateur de son arrivée sur le site jusqu'à sa tentative de vous contacter. Nous décelons si vos formulaires présentent des freins (trop de champs, requêtes techniques qui échouent, Absence de version mobile lisible, manque d'atouts de réassurance ou de preuves de confiance locales)."
  },
  {
    q: "Pouvez-vous analyser mon référencement local et ma fiche Google Maps ?",
    a: "Oui, tout à fait. Pour les artisans, commerces et PME de proximité, l'audit du SEO local est primordial. Nous analysons le ciblage géographique de vos mots-clés, la cohérence de vos adresses et téléphones sur le web, la configuration et l'optimisation de votre fiche Google Business Profile, ainsi que votre réputation en ligne à travers vos avis clients."
  },
  {
    q: "Pouvez-vous analyser l'efficacité de mes campagnes Google Ads actuelles ?",
    a: "Oui, si vous possédez déjà des campagnes publicitaires actives, nous pouvons réaliser un audit Google Ads. Nous analyserons les requêtes de recherche réelles qui consomment votre budget (pour exclure celles qui ne sont pas qualifiées), la mise en place de vos mots-clés négatifs, la pertinence de vos annonces face à vos concurrents et la qualité de vos pages d'atterrissage (Landing Pages)."
  },
  {
    q: "Ai-je besoin de vous donner accès à Google Analytics ou Google Search Console ?",
    a: "Ce n'est pas obligatoire pour débuter, car nos outils externes de pointe nous permettent de réaliser une part importante de l'audit. Cependant, l'accès à ces outils (temporaire et hautement sécurisé) nous apporte des données réelles fondamentales (comme le comportement précis de vos vrais visiteurs ou les erreurs d'indexation signalées par Google). Nous vous expliquons pas à pas comment nous ajouter en lecture seule sans aucune divulgation de mot de passe."
  },
  {
    q: "Est-ce que l'audit m'oblige à commander d'autres prestations chez vous ensuite ?",
    a: "Pas du tout. Notre audit digital vous appartient entièrement. Les livrables et la feuille de route sont structurés de manière à pouvoir être confiés à n'importe quel développeur ou agence partenaire, ou mis en œuvre par vos soins si vous disposez de compétences en interne. Notre objectif est de vous apporter la clarté stratégique d'un consultant de confiance."
  },
  {
    q: "Combien coûte un audit digital ?",
    a: "Nous n'appliquons pas de tarification unique car les besoins diffèrent grandement d'une structure locale à un e-commerce national. Nous proposons ainsi un premier diagnostic express d'alignement, puis des audits approfondis taillés sur-mesure sur devis. Notre préoccupation est toujours d'aligner le coût de l'audit avec le potentiel de gain ou d'économie identifiés chez vous."
  },
  {
    q: "Combien de temps faut-il pour réaliser l'audit ?",
    a: "Un diagnostic express est généralement restitué sous 3 à 5 jours ouvrés. Pour un audit digital complet ou un audit d'avant-refonte approfondi, le délai s'étend de 10 à 15 jours selon la complexité technique du site et le nombre d'outils métiers à analyser."
  },
  {
    q: "L'audit garantit-il une première position sur Google ?",
    a: "Soyons totalement intègres : personne ne peut garantir une première position sur Google de manière absolue, car les algorithmes de Google changent régulièrement et dépendent de la concurrence. En revanche, nous garantissons l'identification rigoureuse et factuelle de chaque barrière qui empêche aujourd'hui votre site de grimper, et nous vous apportons les meilleures techniques SEO blanches recommandées pour y parvenir sereinement."
  },
  {
    q: "Pouvez-vous ensuite mettre en place les recommandations de l'audit ?",
    a: "Oui ! C'est la suite logique que choisissent plus de 80% de nos clients. Qu'il s'agisse d'optimiser le code de votre site, de réécrire vos contenus de services, d'accélérer la vitesse sur mobile, de restructurer vos campagnes Google Ads ou d'automatiser des workflows de contact, notre équipe de développeurs et de spécialistes SEO s'en charge avec réactivité."
  }
];

export function AuditDigital() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Diagnostic Simulator State
  const [siteScore, setSiteScore] = useState<number>(75);
  const [seoScore, setSeoScore] = useState<number>(60);
  const [perfScore, setPerfScore] = useState<number>(45);
  const [convScore, setConvScore] = useState<number>(55);
  const [activeAnalysisField, setActiveAnalysisField] = useState<string>("seo-tech");

  useEffect(() => {
    document.title = "Audit digital pour site web, SEO et visibilité | VSW Digital";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const overallScore = Math.round((siteScore + seoScore + perfScore + convScore) / 4);

  const getScoreVerdict = (score: number) => {
    if (score < 50) return { label: "Performance Critique", color: "text-rose-500 bg-rose-500/10 border-rose-500/20" };
    if (score < 70) return { label: "Optimisations requises", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" };
    return { label: "Bonne santé", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" };
  };

  const currentVerdict = getScoreVerdict(overallScore);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-navy-900 font-sans antialiased selection:bg-electric-blue selection:text-white">
      
      {/* 1. HERO SECTION - Premium Bleu Nuit deep canvas */}
      <section className="relative pt-28 pb-32 bg-navy-900 text-white overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-electric-blue/15 blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-modern-purple/10 blur-[150px] translate-y-1/2" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] opacity-25" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-left">
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-wider uppercase text-electric-blue">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnostic Préliminaire Offert</span>
            </span>
            <span className="text-white/30 text-xs hidden md:inline">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5 font-mono">
              ⚡ Pas de charabia technique
            </span>
            <span className="text-white/30 text-xs hidden md:inline">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5 font-mono">
              🎯 Aide strategique PME
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and intro copy with natural SEO integration */}
            <div className="lg:col-span-7 space-y-6">
              <h1 id="audit-main-h1" className="text-4xl md:text-5.5xl font-display font-bold tracking-tight leading-[1.1] text-white">
                Audit digital pour identifier les priorités de votre présence en ligne
              </h1>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Votre site ne génère pas assez de demandes ? Votre référencement stagne ? Vos campagnes publicitaires coûtent cher ? 
                <strong className="text-white font-medium"> VSW Digital réalise un audit digital rigoureux</strong> de votre site internet pour identifier vos points faibles réels, les opportunités inexploitées et les actions prioritaires à mener. Évitez les dépenses inutiles de refonte globale avant d’obtenir un vrai diagnostic stratégique.
              </p>

              {/* Grid of micro highlights of the audit */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-electric-blue/10 text-electric-blue mt-0.5 border border-electric-blue/20 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-white leading-tight">Audit SEO & Visibilité Google</span>
                    <span className="text-[10px] text-slate-400">Pour capter les recherches locales PME</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-electric-blue/10 text-electric-blue mt-0.5 border border-electric-blue/20 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-white leading-tight">Audit Performance & Cache</span>
                    <span className="text-[10px] text-slate-400">Fluidité de votre site internet mobile</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-electric-blue/10 text-electric-blue mt-0.5 border border-electric-blue/20 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-white leading-tight">Audit Conversion d'Audience</span>
                    <span className="text-[10px] text-slate-400">Transformer le trafic passif en contacts</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-electric-blue/10 text-electric-blue mt-0.5 border border-electric-blue/20 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-white leading-tight">Échanges avec experts de proximité</span>
                    <span className="text-[10px] text-slate-400">Val-de-Marne & Paris Ile-de-France</span>
                  </div>
                </div>
              </div>

              {/* Local SEO geographical anchor embedded in copy naturally */}
              <p className="text-slate-400 text-xs font-light tracking-wide max-w-2xl">
                Que vous soyez un artisan à Créteil, un commerçant de quartier dans le Val-de-Marne, ou une société de services à Paris, nos consultants analysent vos leviers d'acquisition locaux spécifiques pour accroître votre business.
              </p>

              {/* Action drivers */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  id="cta-hero-audit-demander"
                  className="px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Demander un audit digital</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#ce-qui-est-analyse" 
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-755 border border-slate-700 text-slate-200 rounded-xl font-bold tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Voir ce qui est analysé</span>
                  <ArrowDownCircle className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Premium Interactive Diagnostic Board Mockup */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md max-w-md mx-auto relative overflow-hidden text-left">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-electric-blue animate-pulse" />
                    <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Simulateur d'Audit VSW</span>
                  </div>
                  <span className="text-[9px] font-mono text-electric-blue bg-electric-blue/10 border border-electric-blue/30 px-2.5 py-0.5 rounded-full font-bold">
                    ESTIMATION LIVE
                  </span>
                </div>

                <p className="text-slate-400 text-[11px] leading-relaxed mb-4">
                  Ajustez les curseurs ci-dessous pour simuler l'état approximatif actuel de votre présence en ligne et observer les opportunités de croissance :
                </p>

                {/* Score slider parameters */}
                <div className="space-y-3">
                  {/* Site Slider */}
                  <div className="space-y-1 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
                    <div className="flex justify-between items-center text-[11px] text-slate-300">
                      <span className="font-medium">Ergonomie générale & Site internet</span>
                      <span className="font-mono text-electric-blue font-bold">{siteScore}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="100" 
                      value={siteScore} 
                      onChange={(e) => setSiteScore(Number(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  {/* SEO Slider */}
                  <div className="space-y-1 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
                    <div className="flex justify-between items-center text-[11px] text-slate-300">
                      <span className="font-medium">Référencement SEO & Visibilité Google</span>
                      <span className="font-mono text-electric-blue font-bold">{seoScore}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="100" 
                      value={seoScore} 
                      onChange={(e) => setSeoScore(Number(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  {/* Perf Slider */}
                  <div className="space-y-1 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
                    <div className="flex justify-between items-center text-[11px] text-slate-300">
                      <span className="font-medium">Vitesse mobile & Performance</span>
                      <span className="font-mono text-electric-blue font-bold">{perfScore}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="100" 
                      value={perfScore} 
                      onChange={(e) => setPerfScore(Number(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  {/* Conv Slider */}
                  <div className="space-y-1 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
                    <div className="flex justify-between items-center text-[11px] text-slate-300">
                      <span className="font-medium">Formulaires & Conversion clients</span>
                      <span className="font-mono text-electric-blue font-bold">{convScore}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="100" 
                      value={convScore} 
                      onChange={(e) => setConvScore(Number(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>
                </div>

                {/* Score Result Frame */}
                <div className="mt-5 p-4 bg-slate-950 border border-slate-800/90 rounded-2xl flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono">Score de Santé Estimatif</span>
                    <span className="block text-2xl font-bold text-white mt-0.5">{overallScore} / 100</span>
                    <span className={`inline-block text-[9px] font-mono font-bold uppercase rounded px-2 py-0.5 mt-1 border ${currentVerdict.color}`}>
                      {currentVerdict.label}
                    </span>
                  </div>

                  <div className="text-right space-y-1 max-w-[180px]">
                    <span className="block text-[10px] text-slate-300 font-bold font-mono">Diagnostic Prioritaire :</span>
                    <span className="text-[10px] text-slate-450 leading-tight block">
                      {overallScore >= 75 
                        ? "Stabiliser en optimisant vos tunnels d'acquisition Ads." 
                        : "Vos canaux d'appels fuient. Effectuez des audits correctifs urgents."
                      }
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-2 text-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-1.5 text-xs text-electric-blue hover:text-white font-medium transition-all"
                  >
                    <span>Vérifier en détail gratuitement avec un de nos experts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION PROBLÈME - Focus on typical bottlenecks & commercial empathy */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro text info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full inline-block">
                Le Dilemme des Dirigeants
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Vous sentez que votre présence digitale pourrait mieux fonctionner, mais par où commencer ?
              </h2>
              <div className="h-1 w-16 bg-rose-500 rounded-full" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Beaucoup de dirigeants d’entreprises, d’artisans et de commerçants souhaitent améliorer leur visibilité locale ou nationale, envisagent de refaire entièrement leur site web ou de dépenser d’importants budgets sur Google Ads. Cependant, ils le font souvent sans de véritables indicateurs factuels.
              </p>
              <p className="text-slate-655 text-sm leading-relaxed font-light">
                Résultat ? Vous dépensez des ressources précieuses sur de mauvaises cibles techniques, alors qu'un simple audit de visibilité Google ou un diagnostic de performance site ciblé permettrait d'injecter l'effort exactement au bon endroit.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 p-4.5 rounded-2xl">
                <p className="text-xs text-slate-550 italic">
                  "Agir sans faire d'audit de départ, c'est comme soigner une maladie sans faire d'analyse sanguine de contrôle. On pallie les symptômes au hasard, sans traiter la véritable cause."
                </p>
                <span className="block font-bold text-xs text-slate-800 mt-2 font-display text-right">— L'équipe Conseil, VSW Digital</span>
              </div>
            </div>

            {/* Right: Grid of frequent pain points */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200/80 rounded-[2rem] p-6 md:p-8">
                <span className="block font-mono text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-6">
                  ⚠️ Les symptômes fréquents d'une présence sous-optimisée :
                </span>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "un site internet peu visible sur vos services clés",
                    "très peu de demandes de devis via les formulaires",
                    "un trafic faible ou mal qualifié",
                    "un mauvais positionnement Google sur vos requêtes géolocalisées",
                    "des pages d'atterrissage lentes et mal structurées",
                    "une rédaction de contenu insuffisante ou hors cible",
                    "un formulaire de contact complexe ou inefficace",
                    "des campagnes Google Ads mal suivies ou budgétivores",
                    "l'absence totale de stratégie locale Maps structurée",
                    "des outils clients dispersés et déconnectés",
                    "des tâches manuelles répétitives à faible valeur",
                    "aucune mesure réelle des conversions obtenues"
                  ].map((errItem, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                      <div className="p-0.5 rounded-full bg-rose-50 border border-rose-100 mt-0.5 shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-700 leading-tight">{errItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SECTION BÉNÉFICES - Why an audit matters strategically */}
      <section className="py-24 bg-slate-100 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-white border border-slate-200 px-3.5 py-1 rounded-full inline-block">
              Des Bénéfices Directs pour votre PME
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Un audit digital pour prendre de meilleures décisions stratégiques
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Notre objectif est simple : vous donner une visibilité nette sur votre situation actuelle afin de guider vos investissements numériques vers le meilleur retour sur investissement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6.5">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-2xl p-6.5 hover:shadow-xl hover:border-slate-300 transition-all group duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-900 border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base font-display transition-colors leading-tight">{b.title}</h3>
                      <p className="text-slate-550 text-xs leading-relaxed font-sans mt-2.5 font-light">{b.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION WHAT IS ANALYZED - Modular detail overview */}
      <section id="ce-qui-est-analyse" className="py-24 bg-white border-b border-slate-200/50 scroll-mt-6">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Notre Périmètre d'Expertises
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Ce que VSW Digital peut analyser précisément dans votre audit
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Nous couvrons l'ensemble du spectre de votre empreinte digitale pour assurer une cohérence d'ingénierie et de conversion. Activez le détail de chaque carte ci-dessous pour voir nos leviers :
            </p>
          </div>

          {/* Interactive tabs showing the detail list or clean grids */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyzedItems.map((item) => {
              const Icon = item.icon;
              const isSelected = activeAnalysisField === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => setActiveAnalysisField(item.id)}
                  className={`text-left rounded-2xl p-6.5 border transition-all duration-300 flex flex-col justify-between h-full bg-white relative hover:shadow-lg ${
                    isSelected 
                      ? 'border-electric-blue ring-1 ring-electric-blue shadow-lg' 
                      : 'border-slate-200 border-dashed hover:border-slate-355'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center w-full">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs ${
                        isSelected ? 'bg-electric-blue text-white' : 'bg-slate-50 text-slate-800 border border-slate-100'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-slate-500">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 text-base font-display flex items-center gap-1.5">
                        <span>{item.title}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />}
                      </h3>
                      <p className="text-slate-550 text-xs leading-relaxed font-sans font-light">{item.desc}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>{isSelected ? "👉 SECTEUR ACTIF SÉLECTIONNÉ" : "🔍 SÉLECTIONNER POUR VOIR LE PILIER"}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-45 text-electric-blue' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Educational panel that reveals what we do upon chosen tab focus */}
          <div className="bg-[#0f172a] text-white rounded-[2rem] p-6 md:p-10 mt-10 border border-slate-850 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/10 blur-[60px] rounded-full" />
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 space-y-2">
                <span className="text-[10px] font-mono font-bold text-electric-blue uppercase tracking-wider block">Zone de Zoom interactif :</span>
                {(() => {
                  const curr = analyzedItems.find(i => i.id === activeAnalysisField) || analyzedItems[0];
                  return (
                    <>
                      <h4 className="text-xl font-display font-medium">{curr.title}</h4>
                      <p className="text-slate-400 text-xs font-sans font-light">
                        Voici comment nous agissons concrètement sur l'aspect technique et marketing lors de l'audit de ce pilier.
                      </p>
                    </>
                  );
                })()}
              </div>

              <div className="md:col-span-8 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                {activeAnalysisField === "site" && (
                  <div className="space-y-3.5 text-xs text-slate-350">
                    <p className="font-bold text-[13px] text-white">⭐ Diagnostic d'Ergonomie de Site Vitrine ou E-commerce :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Test d'affichage sur écrans mobiles tiers (iPhones, Androids)</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Hiérarchie visuelle pour guider l'action</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Positionnement des boutons d'appels directs</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Analyse des éléments de preuve sociale et d'avis clients</span></li>
                    </ul>
                  </div>
                )}
                {activeAnalysisField === "seo-tech" && (
                  <div className="space-y-3.5 text-xs text-slate-355">
                    <p className="font-bold text-[13px] text-white">⭐ Diagnostic SEO Technique & Exploration Googlebot :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Vérification des fichiers de sitemap XML et rachat d'URL</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Analyse des balises H1, H2, H3 et doublons sémantiques</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Détection des erreurs de redirection indésirables (404, 301)</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Contrôle de l'indexabilité globale via Search Console</span></li>
                    </ul>
                  </div>
                )}
                {activeAnalysisField === "seo-content" && (
                  <div className="space-y-3.5 text-xs text-slate-355">
                    <p className="font-bold text-[13px] text-white">⭐ Évaluation de la Richesse Sémantique et Rédactionnelle :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Ciblage de l'intention réelle de vos acheteurs</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Analyse de densité des mots-clés sans sur-optimisation</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Rédaction de textes explicatifs pour vos fiches techniques</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Maillage pour lier pertinemment vos pages services</span></li>
                    </ul>
                  </div>
                )}
                {activeAnalysisField === "seo-local" && (
                  <div className="space-y-3.5 text-xs text-slate-355">
                    <p className="font-bold text-[13px] text-white">⭐ Diagnostic Référencement Local (Maps & Fiches Google) :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Cohérence absolue Nom-Adresse-Téléphone (données NAP)</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Sélection de la catégorie principale de votre fiche Maps</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Répartition des avis locaux et suggestions de réponses</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Analyse de présence sur la banlieue d'activité cible</span></li>
                    </ul>
                  </div>
                )}
                {activeAnalysisField === "performance" && (
                  <div className="space-y-3.5 text-xs text-slate-355">
                    <p className="font-bold text-[13px] text-white">⭐ Mesure Objective de la Performance & Clapet de Vitesse :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Analyse de vitesse mobile sur de vrais réseaux 4G/5G</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Pression et poids de vos illustrations et images</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Optimisation des scripts JS tiers qui bloquent l'affichage</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Revue de la latence serveur (TTFB)</span></li>
                    </ul>
                  </div>
                )}
                {activeAnalysisField === "conversion" && (
                  <div className="space-y-3.5 text-xs text-slate-355">
                    <p className="font-bold text-[13px] text-white">⭐ Analyse des gisements de conversion de prospects :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Parcours utilisateur fluide vers l'appel téléphonique</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Mise en valeur psychologique des avis authentiques</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Allègement des champs inutiles du formulaire</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Pertinence des popups et outils de réassurance</span></li>
                    </ul>
                  </div>
                )}
                {/* Fallback support for others */}
                {!["site", "seo-tech", "seo-content", "seo-local", "performance", "conversion"].includes(activeAnalysisField) && (
                  <div className="space-y-3.5 text-xs text-slate-355">
                    <p className="font-bold text-[13px] text-white">⭐ Revue d'environnement et de cohérence digitale :</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Détection des fuites de budgets et dépenses inutiles</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Positionnement face aux leaders locaux du Val-de-Marne</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Audit de sécurité des extensions WordPress obsolètes</span></li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" /><span>Opportunités de connexions d'APIs automatiques</span></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION MÉTHODE - Detailed Step list */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-white border border-slate-250 px-3.5 py-1 rounded-full inline-block">
              Notre Démarche Transparente
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Notre méthode pour réaliser un audit digital utile et exploitable
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Chez VSW Digital, nous réfutons les rapports inexploitables générés automatiquement par des robots. Nous suivons une méthodologie rigoureuse, façonnée pour les réalités d’une PME.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-4xl md:text-5xl font-mono font-bold text-slate-100 select-none">
                  {step.num}
                </div>
                
                <div className="space-y-4 relative z-10">
                  <span className="w-8 h-8 rounded-lg bg-electric-blue/10 text-electric-blue flex items-center justify-center font-mono text-xs font-bold">
                    {step.num}
                  </span>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 font-display text-base leading-tight">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECTION TYPES OF AUDITS - Variety adapted to clients */}
      <section className="py-24 bg-white border-b border-slate-200/30">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Des Analyses selon votre Contexte
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Un format d'audit digital adapté à votre situation
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Parce qu'une jeune entreprise n'a pas les mêmes enjeux qu'une industrie en recherche d'automatisation des flux ou qu'une campagne Google Ads de grande envergure, nous varions le curseur analytique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6.5">
            {auditTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-xs">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                        {type.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 font-display text-base">{type.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-sans font-light">{type.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. SECTION LIVRABLES - Concrete material they retrieve */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/70">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-white border border-slate-250 px-3.5 py-1 rounded-full inline-block">
                Ce que vous possédez ensuite
              </span>
              <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-sharp">
                Ce que vous obtenez concrètement après l'audit
              </h2>
              <div className="h-1 w-16 bg-electric-blue rounded-full" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                À l’issue de notre travail d'analyse, nous ne vous abandonnons pas face à une pile de données brutes incompréhensibles. Nous vous transmettons un socle complet et exploitable de documents fondamentaux.
              </p>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-xs text-slate-550 leading-relaxed font-light">
                  <strong className="text-slate-950 font-semibold block mb-1">💡 Notre philosophie d'action :</strong>
                  "L’objectif n’est pas de produire un rapport compliqué de 150 pages destiné à rester au fond d’un tiroir, mais une feuille de route claire, vulgarisée, priorisée et exploitable immédiatement par n'importe quel développeur."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0f172a] text-white p-6 md:p-8 rounded-[2rem] border border-slate-800 shadow-xl space-y-4">
                <span className="block font-mono text-[9px] font-bold text-electric-blue uppercase tracking-wider">
                  📂 Le dossier de livrables VSW Digital comprend :
                </span>

                <ul className="space-y-3.5">
                  {[
                    "un diagnostic clair et hiérarchisé de votre situation technique actuelle",
                    "la liste factuelle de chaque point faible et bug à corriger d'urgence",
                    "la liste de vos opportunités de visibilité naturelle inexploitées",
                    "des recommandations prioritaires vulgarisées pour votre chef de projet",
                    "un plan d’action par étapes logiques de déploiement",
                    "des suggestions de nouvelles pages sémantiques Google à créer",
                    "des recommandations objectives de refonte (ou de simple ajustement)",
                    "des recommandations correctives de ciblage Google Ads si nécessaire",
                    "des recommandations techniques serveur (Performances, HTTPS, PHP)",
                    "des pistes concrètes d’automatisation de formulaires évitant la saisie manuelle",
                    "une estimation des efforts et budgets à court, moyen et long terme"
                  ].map((livItem, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-300">
                      <div className="p-0.5 rounded-full bg-electric-blue/20 mt-0.5 shrink-0 text-electric-blue">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{livItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SECTION EXEMPLES DE RECOMMANDATIONS - Real examples grid */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Exemples Concrets
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Exemples de recommandations proposées après un audit digital
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Pour vous donner une idée plus claire, voici le genre d’améliorations concrètes que nous sommes régulièrement amenés à préconiser et à déployer de manière autonome :
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Créer une page service plus complète", desc: "Pour mieux capter les intentions d'achat directes de l'internaute sur Google." },
              { title: "Ajouter des boutons de contact plus visibles", desc: "Placer un bouton d'appel collé en bas de l'écran tactile mobile." },
              { title: "Compresser l’intégralité des images lourdes", desc: "Passer au format moderne WebP pour diviser par 3 le temps de chargement." },
              { title: "Redonner du poids aux balises de structures", desc: "Corriger l'absence ou la duplication de la balise titre H1." },
              { title: "Déployer des pages géolocalisées spécifiques", desc: "Pages dédiées d'interventions locales (ex: Créteil, Saint-Maur)." },
              { title: "Revisiter votre fiche Google Maps Pro", desc: "Intégrer vos termes clés les plus recherchés dans la fiche." },
              { title: "Mettre sous observation les formulaires", desc: "Brancher des tests de validation d'envois automatiques." },
              { title: "Créer un tunnel d'atterrissage Ads dédié", desc: "Une Landing Page épurée de 100% de distractions extérieures." },
              { title: "Éradiquer les erreurs 404 Google Console", desc: "Faire des redirections d'anciennes pages cassées." },
              { title: "Simplifier grandement le formulaire", desc: "Réduire à 3 questions l'estimation d'un devis." },
              { title: "Injecter des preuves de réassurance", desc: "Planches de chantiers finis, décennale active, avis certifiés." },
              { title: "Lier CRM et réception de mails de prospects", desc: "Branchements d'automatisations simples de sauvegarde." }
            ].map((rec, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-350 hover:bg-white transition-all">
                <h4 className="font-bold text-slate-900 text-xs font-display flex gap-2 items-start leading-snug">
                  <span className="text-electric-blue font-mono font-bold shrink-0">#{idx + 1}</span>
                  <span>{rec.title}</span>
                </h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-sans font-light mt-2">{rec.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. SECTION POUR QUI - Target audience split */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-white border border-slate-250 px-3.5 py-1 rounded-full inline-block">
                Secteurs Accompagnés
              </span>
              <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-sharp">
                À qui s’adresse concrètement l’audit digital ?
              </h2>
              <div className="h-1 w-16 bg-electric-blue rounded-full" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Notre structure est modulaire. Nous réalisons l'audit numérique pour des typologies multiples de professionnels de l'Île-de-France, allant de l'artisan individuel de proximité aux PME plus structurées.
              </p>
              <p className="text-slate-550 text-xs leading-relaxed font-light">
                <span className="text-slate-900 font-bold block mb-1">💡 Notre expertise s'adresse particulièrement à vous si :</span>
                Vous avez déjà investi dans un outil ou un site internet, mais que vous constatez un rendement décevant (peu de trafic, fiches Google Maps stagnantes, absence de clarté commerciale ou coûts marketing Google Ads excessifs).
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "PME régionales",
                    "Artisans locaux",
                    "Commerçants de quartier",
                    "Indépendants",
                    "Sociétés de services",
                    "Entreprises de rénovation",
                    "Sociétés de déménagement",
                    "Sécurité privée",
                    "Centres de formation",
                    "Cabinets comptables",
                    "Administratif & Droit",
                    "Entreprises de transport",
                    "Réparateurs de téléphones",
                    "Dossiers de domiciliation",
                    "Prestataires B2B"
                  ].map((secItem, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-center flex items-center justify-center min-h-[50px] hover:border-blue-200 transition-colors">
                      <span className="text-xs font-semibold text-slate-700 font-display leading-tight">{secItem}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-[11px] font-mono text-slate-400">
                    🛠️ Nous calibrons nos analyses de diagnostic en fonction des contraintes propres à chaque domaine.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. SECTION AUDIT AVANT INVESTISSEMENT - Cost prevention argument */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full inline-block">
              Gestion de Budget Intelligente
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Pourquoi faire un audit avant d'investir dans un nouveau site, du SEO ou Google Ads ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              L'échec d'un projet web provient presque toujours de mauvaises décisions de départ. Diagnostiquer permet d'isoler le levier le plus puissant pour votre budget disponible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mieux comprendre les priorités réelles", desc: "Identifier exactement l'origine du goulot d'étranglement de vos ventes." },
              { title: "Choisir le levier optimal", desc: "Trancher objectivement entre une refonte complète de site, un plan d'actions SEO long terme ou du Google Ads immédiat." },
              { title: "Éviter de refaire ce qui fonctionne", desc: "Pourquoi dépenser 5000€ pour un site complet quand seul le formulaire et 2 pages de services sont défectueux ?" },
              { title: "Préserver vos pages de référencement", desc: "Protéger et conserver les URL solides qui vous amènent déjà du trafic organique." },
              { title: "Mieux allouer vos budgets", desc: "Maximiser l'impact de chaque euro investi en réglant d'abord les bugs évidents du site." },
              { title: "Stratégie de croissance progressive", desc: "Élaborer un calendrier d'actions réaliste sans asphyxier la trésorerie de votre entreprise." },
              { title: "Mesurer ce qui compte vraiment", desc: "Mettre en place des sondes de conversion transparentes pour savoir exactement d'où vient chaque lead." },
              { title: "Décisions basées sur la donnée", desc: "Sortez du flou artistique et des opinions arbitraires des agences web traditionnelles." }
            ].map((investObj, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5.5 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-6 h-6 rounded bg-rose-50 border border-rose-100/60 text-rose-500 font-mono text-[10px] font-bold flex items-center justify-center">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <h4 className="font-bold text-slate-900 font-display text-xs leading-snug">{investObj.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-sans font-light">{investObj.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. SECTION OUTILS ET ANALYSES - Trust & reality disclaimer */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-white border border-slate-250 px-3.5 py-1 rounded-full inline-block">
                Outils de pointe & transparence
              </span>
              <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-sharp">
                Des analyses concrètes basées sur des faits, pas seulement des impressions
              </h2>
              <div className="h-1 w-16 bg-electric-blue rounded-full" />
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Nous nous appuyons sur une suite d'instruments professionnels de benchmark (Google Lighthouse, Search Console, analyseurs sémantiques avancés) pour asseoir nos diagnostics.
              </p>

              {/* Strict compliance disclaimer message requested */}
              <div className="bg-amber-50 border border-amber-200/80 p-5 rounded-2xl flex gap-3">
                <div className="p-1 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-xs font-display">Clause de Transparence & Accès</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-light mt-1">
                    Nous n'accédons à aucun de vos outils privés (Search Console, Analytics, espaces administratifs) sans votre accord formel en direct. S'ils ne sont pas configurés ou si vous préférez procéder autrement, nous réalisons l'intégralité de notre audit via des outils d'observations externes et des simulations de robots. C'est l'assurance pour vous d'un traitement éthique sans divulgation technique à risque.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-xs">
                <span className="block font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                  📈 Les vecteurs réels d'observation :
                </span>

                <div className="grid sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Données réelles Google Search Console</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Google Analytics si configuré</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Analyse des pages réellement indexées</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Exploration des mots-clés performants</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Benchmark des leaders du marché</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Tests de performance mobile réels</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Analyse ergonomique de l'UX responsive</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Analyse de réassurance des formulaires</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Revue des Landing Pages de campagne</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Analyse de structure SEO globale</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Criblage sémantique de contenu</span></div>
                  <div className="flex gap-2 items-center"><Check className="w-3.5 h-3.5 text-emerald-550 shrink-0" /><span>Santé de la fiche Google My Business</span></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 12. SECTION OFFRES INDICATIVES - Standard grid with Sur Devis branding */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Nos Formules de Diagnostic
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Des formats d'audits adaptés à l'ambition de votre entreprise
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Nous n'appliquons pas de tarification rigide ou déconnectée de la taille de votre PME. Tous nos audits approfondis sont précédés d'un cadrage gratuit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offers.map((off, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6.5 md:p-8 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-lg relative overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="space-y-1.5 pb-4 border-b border-slate-200">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{off.subtitle}</span>
                    <h3 className="text-xl font-display font-semibold text-slate-900">{off.title}</h3>
                    <p className="text-xs text-slate-550 leading-relaxed font-light">{off.desc}</p>
                  </div>

                  {/* Pricing tag custom message */}
                  <div className="py-1">
                    <span className="block text-2xl font-bold text-navy-900 font-display">Sur Devis / Gratuit</span>
                    <span className="text-[10px] text-slate-450 font-mono">Cadrage & Alignement offert</span>
                  </div>

                  {/* Checklist of inclusions */}
                  <ul className="space-y-3">
                    {off.features.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-2 items-start text-[11.5px] text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 bg-emerald-100/50 p-0.5 rounded-full shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="w-full inline-block px-6 py-3 bg-navy-900 hover:bg-electric-blue text-white rounded-xl text-center font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    {off.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. SECTION WHY CONFIG - Credentials PME proximity */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-white border border-slate-250 px-3.5 py-1 rounded-full inline-block">
              Proximité & Expertise Val-de-Marne
            </span>
            <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Pourquoi confier votre audit digital à VSW Digital ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Parce que nous ne sommes pas une grosse plateforme nationale déshumanisée, mais un partenaire d'Île-de-France soucieux du développement économique du tissu d'artisans et PME locaux.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vision stratégique globale", desc: "Une analyse complète de votre site web, SEO, campagnes publicitaires Google Ads, expérience utilisateur, cloud et automatisation." },
              { title: "Double compétence de pointe", desc: "Nous maîtrisons l'ingénierie technique (code propre, serveurs) à l'égal du marketing à la conversion." },
              { title: "Pratique quotidienne des PME", desc: "Nous connaissons les réels blocages d'un artisan local ou d'un commerce de proximité en Île-de-France." },
              { title: "Transformation concrète", desc: "Nous transmettons des recommandations d'actions réalistes plutôt que des graphiques indigestes." },
              { title: "Esprit clair, sans jargon", desc: "Chaque terme technique est décrypté avec pédagogie pour vous permettre de décider librement." },
              { title: "Hiérarchisation pragmatique", desc: "Nous vous disons quelle action générera le plus de leads pour le moindre effort budgétaire." },
              { title: "Forte expertise locale", desc: "Nous maîtrisons la géolocalisation des requêtes sur Paris et le Val-de-Marne (94)." },
              { title: "Accompagnement de continuité", desc: "Nous mettons en œuvre les recommandations si vous souhaitez nous déléguer le développement." }
            ].map((recom, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <Award className="w-5 h-5 text-electric-blue" />
                  <h4 className="font-bold text-slate-900 font-display text-xs leading-snug">{recom.title}</h4>
                  <p className="text-slate-550 text-[11px] leading-relaxed font-sans font-light">{recom.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 14. SECTION FAQ - Sincere responses with toggling logic */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-4xl text-left">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-electric-blue uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Foire Aux Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Des réponses honnêtes et claires à toutes vos questions sur l’audit
            </h2>
            <p className="text-slate-550 text-xs md:text-sm font-light max-w-xl mx-auto">
              Retrouvez l'esprit pragmatique de nos réponses d'experts pour éclairer votre démarche numérique.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200/80 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-4.5 text-left text-slate-900 hover:bg-slate-100 transition-colors font-semibold text-xs md:text-sm font-display"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-electric-blue shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  
                  {isOpen && (
                    <div className="p-4.5 bg-white border-t border-slate-200 text-[11.5px] leading-relaxed text-slate-600 font-sans font-light whitespace-pre-line border-dashed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 15. SECTION FINAL CTA */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden border-t border-navy-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-electric-blue/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-modern-purple/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-electric-blue px-3.5 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider">
            🤝 On fait le point ?
          </span>
          
          <h2 className="text-3xl md:text-4.2xl font-display font-bold tracking-tight text-white leading-tight">
            Vous voulez savoir exactement ce qui bloque votre présence digitale ?
          </h2>
          
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Demandez un audit digital de votre site internet et de votre visibilité SEO en quelques clics. VSW Digital vous aide à identifier vos priorités pour optimiser durablement votre image, votre référencement, vos conversions de clients et votre stratégie publicitaire en Île-de-France.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Demander mon audit digital
            </Link>
            
            <a 
              href="mailto:vsw.contact@gmail.com" 
              className="px-8 py-4 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl font-bold tracking-wide transition-all duration-300 text-center"
            >
              Écrire à vsw.contact@gmail.com
            </a>
          </div>

          <p className="text-slate-500 font-mono text-[11px] mt-6">
             Raccrochez vos outils (Maps, Analytics) : Nous diagnostiquons vos indicateurs en direct.
          </p>
        </div>
      </section>

    </div>
  );
}
