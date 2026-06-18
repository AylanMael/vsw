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
  HardDrive,
  Code,
  AlertCircle,
  Signal,
  MessageSquare,
  LifeBuoy,
  XCircle,
  CheckCircle2,
  ListFilter
} from 'lucide-react';

interface Prestation {
  title: string;
  desc: string;
  icon: any;
  badge?: string;
}

interface MaintenanceOffer {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  recommended?: boolean;
  features: string[];
  ctaText: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const unmaintainedRisks = [
  {
    title: "Ralentissement progressif",
    desc: "L'accumulation d'historique, de bases de données fragmentées et de caches périmés ralentit le chargement sur mobile, faisant fuir vos visiteurs.",
    severity: "Critique pour vos ventes",
    icon: AlertOctagon
  },
  {
    title: "Extensions obsolètes",
    desc: "Les modules non mis à jour créent des incompatibilités. À tout moment, un panier d'achat ou un bouton d'appel peut cesser de fonctionner.",
    severity: "Risque fonctionnel permanent",
    icon: Settings
  },
  {
    title: "Failles & Vulnérabilités",
    desc: "Les robots et pirates scannent le web à la recherche de versions de code obsolètes pour injecter des spams ou voler des données.",
    severity: "Menace de piratage élevée",
    icon: Lock
  },
  {
    title: "Données non sauvegardées",
    desc: "Sans backup redondant externalisé, une simple erreur de manipulation ou un crash d'hébergeur peut anéantir des mois de travail.",
    severity: "Perte définitive possible",
    icon: HardDrive
  },
  {
    title: "Bugs inopinés invisibles",
    desc: "Une mise au point de serveur ou un script hébergé qui expire peut détruire la mise en page sans que vous ne soyez notifié.",
    severity: "Image de marque dégradée",
    icon: Wrench
  },
  {
    title: "Formulaires de contact muets",
    desc: "Les protocoles d'envoi de mails durcissent régulièrement. Sans correction active, vos formulaires cessent d'envoyer vos devis.",
    severity: "Prospects perdus en silence",
    icon: MessageSquare
  }
];

const benefits = [
  {
    id: 'b-1',
    title: "Sérénité d'esprit totale",
    desc: "Plus besoin de surveiller des consoles techniques compliquées ou de craindre un crash. VSW Digital gère l'arrière-boutique pour vous.",
    icon: ShieldCheck
  },
  {
    id: 'b-2',
    title: "Zéro interruption d'activité",
    desc: "Nous veillons à la disponibilité constante de vos pages pour que chaque prospect puisse vous joindre à tout moment, jour et nuit.",
    icon: Activity
  },
  {
    id: 'b-3',
    title: "Sauvegardes étanches",
    desc: "Vos données vitales sont copiées de manière automatisée hors-site. Un vrai airbag réversible en cas de fausse manipulation.",
    icon: Database
  },
  {
    id: 'b-4',
    title: "Maintien de la performance",
    desc: "Les optimisations continues garantissent un temps de chargement éclair, apprécié de vos visiteurs et valorisé par Google.",
    icon: Gauge
  },
  {
    id: 'b-5',
    title: "Support ultra-prioritaire",
    desc: "Un bug graphique ? Une question urgente ? Vous disposez d’une ligne directe de développeurs pour réparer sous de courts délais.",
    icon: Wrench
  },
  {
    id: 'b-6',
    title: "Amélioration continue",
    desc: "Faites évoluer votre site de manière incrémentale : modification de tarifs, ajout de chantiers, mise à jour d'horaires.",
    icon: RefreshCw
  }
];

const prestations: Prestation[] = [
  {
    title: "Mises à jour sécurisées",
    desc: "Suivi contrôlé et manuel du cœur du CMS (WordPress) et de ses dépendances pour prévenir tout crash technique ou dysfonctionnement.",
    icon: RefreshCw,
    badge: "Indispensable"
  },
  {
    title: "Sauvegardes externalisées",
    desc: "Planification automatique et stockage chiffré sur des serveurs distincts de votre hébergeur pour une reprise d'activité rapide.",
    icon: Database,
    badge: "Sécurité"
  },
  {
    title: "Protection & Firewall",
    desc: "Configuration de pare-feux, blocage d'adresses IP suspectes et renforcement des barrières techniques pour décourager les robots.",
    icon: Lock,
    badge: "Sécurité"
  },
  {
    title: "Résolution d'anomalies",
    desc: "Diagnostics réguliers et réparations rapides des boutons défectueux, liens morts (erreurs 404) ou déformations mobiles.",
    icon: AlertCircle,
    badge: "Stabilité"
  },
  {
    title: "Nettoyage & Cache",
    desc: "Nettoyage mensuel de la base de données, suppression des fichiers caches transitoires volumineux et compression d'images.",
    icon: Gauge,
    badge: "Vitesse"
  },
  {
    title: "Supervision Serveur & SSL",
    desc: "Ajustement de la puissance d'hébergement, surveillance de la validité du certificat de sécurité HTTPS pour rassurer vos clients.",
    icon: Server,
    badge: "Technique"
  },
  {
    title: "Modifications de contenus",
    desc: "Ajout de coordonnées, mise à jour légale, insertion d'avis clients ou mise à jour de votre grille tarifaire au fil de l'eau.",
    icon: FileText,
    badge: "Flexibilité"
  },
  {
    title: "Suivi d'audience & SEO",
    desc: "Relecture continue de la Search Console Google pour éviter les pénalités d'indexation invisibles.",
    icon: Search,
    badge: "Visibilité"
  }
];

const supportedSites = [
  {
    title: "Sites WordPress & WooCommerce",
    desc: "Le CMS leader mondial. Nécessite une surveillance rigoureuse des plug-ins pour bloquer les failles publiques très recherchées.",
    icon: Settings
  },
  {
    title: "React / Next.js / TypeScript",
    desc: "Architectures modernes codées sur-mesure requérant une attention d'ingénierie sur les paquets de code npm et l'intégrité d'APIs.",
    icon: Code
  },
  {
    title: "Sites Vitrines (Artisans & PME)",
    desc: "Votre premier canal de crédibilité locale. Doit afficher une fluidité irréprochable et un cadenas de sécurité actif en continu.",
    icon: Layout
  },
  {
    title: "Landing Pages de Campagnes",
    desc: "S'assurer que chaque euro investi sur Google Ads ou Facebook mène à un formulaire d'acquisition réactif, sans bug d'envoi.",
    icon: Zap
  },
  {
    title: "E-shop & Catalogues",
    desc: "Garantir un parcours utilisateur fluide de la sélection de service jusqu'à l'écran de paiement sécurisé.",
    icon: Database
  },
  {
    title: "Projets connectés (Firebase / Cloud)",
    desc: "Supervision des flux de données, de la bande passante consommée et des seuils d'alertes des services de stockage.",
    icon: Server
  }
];

const wpFocusPoints = [
  "Mises à jour contrôlées de WordPress (après relecture préventive de compatibilité)",
  "Audits de sécurité réguliers contre les injections de scripts malveillants",
  "Remplacement ou nettoyage des extensions trop lourdes qui ralentissent le temps de réaction",
  "Automatisation de sauvegardes redondantes (historique sur 30 jours)",
  "Installation de captchas discrets et filtres antispam de formulaires",
  "Masquage astucieux des adresses d'administration classique (wp-admin)",
  "Optimisation de la base SQL pour réduire l'encombrement des révisions d'articles"
];

const methodSteps = [
  {
    step: "01",
    title: "Audit de Santé Initial",
    desc: "Nous analysons l'état de votre site (rapidité, sécurité, plugins, hébergement) pour identifier immédiatement les corrections urgentes à mener de manière transparente."
  },
  {
    step: "02",
    title: "Airbag & Sauvegardes",
    desc: "Avant d'appliquer la moindre mise à jour, nous installons un système de sauvegarde automatisé externalisé pour parer à tout incident éventuel."
  },
  {
    step: "03",
    title: "Remise à Niveau Immédiate",
    desc: "Nous appliquons les optimisations prioritaires : correction des bugs graphiques notables, fermeture des failles identifiées et relance de vos formulaires bloqués."
  },
  {
    step: "04",
    title: "Activation du Monitoring",
    desc: "Nous déployons des sondes de disponibilité actives pour être alertés dans la minute en cas d'indisponibilité, de ralentissement ou de piratage."
  },
  {
    step: "05",
    title: "Entretien Continu Mensuel",
    desc: "Mises à jour planifiées, vérification des processus de paiement/contact, nettoyage régulier des bases SQL et ajustements d'affichage."
  },
  {
    step: "06",
    title: "Assistance & Évolution",
    desc: "Besoin de mettre à jour un tarif, d'ajouter une actualité, ou d'un conseil ? Notre équipe réactive intègre vos demandes d'évolutions incluses."
  }
];

// Re-engineered offers focusing on subscription pricing and high readability
const offers: MaintenanceOffer[] = [
  {
    id: "m-essential",
    title: "Abonnement Essentiel",
    desc: "La formule de sécurité fondamentale pour les sites vitrines d'artisans, indépendants et TPE locales souhaitant déléguer l'inquiétude technique de base.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    badge: "Sérénité Basique",
    features: [
      "Mises à jour manuelles mensuelles",
      "Sauvegarde hebdomadaire externalisée",
      "Protection pare-feu & anti-force brute",
      "Surveillance certificat SSL actif",
      "Restauration prioritaire incluse en cas d'anomalie",
      "Support technique par e-mail (réponse sous 48h)"
    ],
    ctaText: "Sécuriser mon site vitrine"
  },
  {
    id: "m-pro",
    title: "Abonnement Professionnel",
    desc: "La formule la plus plébiscitée par les PME, cabinets de services, et professions libérales dont le site internet est un canal de vente indispensable.",
    monthlyPrice: 119,
    yearlyPrice: 99,
    badge: "Le Choix Préféré des PME",
    recommended: true,
    features: [
      "Mises à jour hebdomadaires contrôlées",
      "Sauvegarde quotidienne externalisée",
      "Monitoring actif de disponibilité (24h/24, 7j/7)",
      "Correction garantie des dysfonctionnements de formulaires",
      "Nettoyage manuel du cache & optimisation de vitesse",
      "1 heure mensuelle d'ajustements de contenus (textes & visuels)",
      "Support téléphonique & e-mail prioritaire (réponse sous 24h)"
    ],
    ctaText: "Choisir la formule Professionnelle"
  },
  {
    id: "m-premium",
    title: "Abonnement Premium & Évolution",
    desc: "Pour les marques exigeantes, e-commerces actifs ou applications sur-mesure nécessitant réactivité continue, sécurité renforcée et croissance.",
    monthlyPrice: 249,
    yearlyPrice: 199,
    badge: "Performance & Évolutions incl.",
    features: [
      "Suivi technique proactif en continu",
      "Sauvegarde quotidienne multi-zones redondée",
      "Monitoring de sécurité haute fréquence & patchs urgents",
      "Surveillance SEO (correction des nouvelles erreurs 404 Google)",
      "3 heures mensuelles d'évolutions et développement incluses",
      "Rapport mensuel vulgarisé de statistiques d'audience",
      "Ligne directe & canal de communication dédié (Slack ou téléphone)"
    ],
    ctaText: "Activer le suivi Premium"
  }
];

const faqs: FaqItem[] = [
  {
    q: "Ce type d’abonnement de maintenance est-il avec ou sans engagement ?",
    a: "Tous nos abonnements de maintenance chez VSW Digital sont strictement d'esprit 'sans engagement'. Nous croyons en la qualité de notre suivi technique de proximité. Vous pouvez suspendre ou résilier votre abonnement à tout moment par simple e-mail, sans frais de sortie ni justification nécessaire. Nous vous remettons alors l'intégralité des accès d'administration à jour."
  },
  {
    q: "Quelle différence entre mon hébergeur actuel et votre service ?",
    a: "Votre hébergeur (type o2switch, OVH, Hostinger) fournit simplement la 'maison' (l'espace serveur et d'alimentation du site). Il ne surveille pas si votre code WordPress est à jour, si vos extensions sont vulnérables à des attaques, si vos formulaires buggent ou si des liens sont cassés. Nous sommes comme les artisans spécialisés qui réparent, entretiennent, configurent et font évoluer l'habitation pour que tout fonctionne à la perfection."
  },
  {
    q: "Pouvez-vous garantir une invulnérabilité ou sécurité absolue de mon site ?",
    a: "Soyons honnêtes et transparents : la sécurité à 100% n'existe pas en informatique, et quiconque prétend le contraire manque d'honnêteté. En revanche, notre maintenance proactive referme 95% des failles couramment exploitées par les pirates (mises à jour immédiates des extensions faillibles, pare-feu intelligent). Surtout, notre véritable force réside dans la résilience : grâce à nos sauvegardes externalisées quotidiennes, si un piratage survenait, nous restaurons une version impeccable et assainie de votre site en moins de 4 heures sans frais."
  },
  {
    q: "Mon site n'a pas été construit par VSW Digital. Pouvez-vous le maintenir ?",
    a: "Tout à fait. C'est le cas de près de la moitié des sites que nous accompagnons. Nous réalisons un audit initial rigoureux de l'état actuel de votre code afin d'administrer une mise à niveau préventive des extensions, nettoyer ce qui est obsolete et installer sereinement nos outils de monitoring."
  },
  {
    q: "Que contiennent vos heures d'évolutions de contenus incluses ?",
    a: "Selon l'abonnement choisi (Pro ou Premium), vous profitez de crédits de temps mensuels d'ajustements de contenus récurrents. Vous nous envoyez simplement vos modifications (remplacement d'un numéro, mise en avant d'une promotion ou photo, mise en ligne d'un nouvel article rédigé, correction d'un horaire...) et nos développeurs s'en chargent sous 24 à 48h. C'est l'assurance pour vous d'un site toujours vivant sans y consacrer de temps."
  },
  {
    q: "Le temps de chargement des pages sur mobile va-t-il vraiment s'améliorer ?",
    a: "Oui. En nettoyant les extensions gourmandes inutiles, en compressant vos illustrations lourdes téléchargées directement et en régulant le cache de votre hébergeur, nous optimisons de manière mesurable vos 'Core Web Vitals'. Un site rapide améliore à la fois le taux d'appel de vos clients et votre classement SEO sur Google."
  }
];

export function MaintenanceSiteInternet() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSystemTab, setActiveSystemTab] = useState<'healthy' | 'at-risk'>('healthy');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState({
    tech: '',
    traffic: '',
    needs: ''
  });
  const [quizResult, setQuizResult] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Abonnement Maintenance site internet, sécurité & hébergement | VSW Digital";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const selectAnswer = (field: 'tech' | 'traffic' | 'needs', value: string) => {
    const updated = { ...quizAnswers, [field]: value };
    setQuizAnswers(updated);
    
    if (field === 'tech') {
      setQuizStep(2);
    } else if (field === 'traffic') {
      setQuizStep(3);
    } else if (field === 'needs') {
      // Calculate Recommendation
      calculateRecommendation(updated);
      setQuizStep(4);
    }
  };

  const calculateRecommendation = (ans: typeof quizAnswers) => {
    if (ans.tech === 'wordpress' || ans.tech === 'je_ne_sais_pas') {
      if (ans.traffic === 'high' || ans.needs === 'evolution') {
        setQuizResult('m-premium');
      } else if (ans.traffic === 'medium' || ans.needs === 'occasional') {
        setQuizResult('m-pro');
      } else {
        setQuizResult('m-essential');
      }
    } else if (ans.tech === 'react_next') {
      if (ans.traffic === 'high' || ans.needs === 'evolution') {
        setQuizResult('m-premium');
      } else {
        setQuizResult('m-pro'); // custom stack starts at pro level due to compilation and script needs
      }
    } else {
      if (ans.needs === 'evolution') {
        setQuizResult('m-pro');
      } else {
        setQuizResult('m-essential');
      }
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({ tech: '', traffic: '', needs: '' });
    setQuizResult(null);
    setQuizStep(1);
  };

  const getRecommendedPlanObj = () => {
    return offers.find(o => o.id === quizResult) || offers[1];
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfe] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - Premium twilight dashboard & reassurance badges */}
      <section className="relative pt-24 pb-32 bg-[#090d1a] text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px] translate-y-1/2" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] opacity-40" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-left">
          
          {/* Trust badges below the navbar region */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-[11px] font-semibold tracking-wider uppercase text-blue-400">
              <Sparkles className="w-3 h-3" />
              <span>Abonnements de Proximité</span>
            </span>
            <span className="text-slate-450 text-xs hidden md:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-350 bg-slate-900/40 px-3 py-1 rounded-full border border-slate-800/60 font-mono">
              🛡️ Résiliation en 1 clic
            </span>
            <span className="text-slate-450 text-xs hidden md:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-350 bg-slate-900/40 px-3 py-1 rounded-full border border-slate-800/60 font-mono">
              ⚡ Début d'intervention en 24h
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 id="main-h1" className="text-4xl md:text-5.55xl lg:text-5xl xl:text-5.5xl font-display font-bold tracking-tight leading-[1.12] text-white max-w-3xl">
                Maintenance de site internet pour garder un site fiable, sécurisé et performant
              </h1>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Un site professionnel ne doit jamais être laissé à l'abandon. Déléguez la surveillance technique quotidienne, les sauvegardes externalisées fiables et les petites modifications de contenu à nos développeurs chevronnés, grâce à nos abonnements mensuels sans engagement de durée.
              </p>

              {/* Direct value proof tags */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2 pb-2">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-white leading-tight">Sauvegarde Déportée</span>
                    <span className="text-[10px] text-slate-400">Backups quotidiens préservés</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-white leading-tight">Optimisation Core Vitals</span>
                    <span className="text-[10px] text-slate-400">Vitesse mobile sous surveillance</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-white leading-tight">Expertise Mutuelle</span>
                    <span className="text-[10px] text-slate-400">Pour WordPress & NextJS</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#plans-tarifs" 
                  id="cta-maintenance-hero"
                  className="px-8 py-4.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 flex items-center justify-center gap-2"
                >
                  <span>Découvrir nos abonnements mensuels</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#simulateur-besoins" 
                  className="px-8 py-4.5 bg-slate-850 hover:bg-slate-800 border border-slate-700/80 text-slate-200 rounded-xl font-bold tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <span>Quel plan choisir ? (Formulaire)</span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                </a>
              </div>
              
              <p className="text-slate-500 text-[11px] font-mono">
                🔍 Diagnostic initial GRATUIT avant de débuter l'abonnement
              </p>
            </div>

            {/* Right Column - Premium Vigilance Panel simulation (Interactive) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md max-w-md mx-auto relative overflow-hidden text-left">
                
                {/* Visual Status Indicator Top */}
                <div className="flex items-center justify-between gap-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                    <h4 className="text-white font-mono font-bold text-[10px] uppercase tracking-wider">Console de Vigilance Régionale</h4>
                  </div>
                  <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-605/30 px-2 py-0.5 rounded font-mono font-bold">
                    ACTIVE 24/7
                  </span>
                </div>

                {/* Simulated interactive tabs to visualize "Protected" vs "At Risk" states */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-950 p-1.5 rounded-xl">
                  <button 
                    onClick={() => setActiveSystemTab('healthy')}
                    className={`px-3 py-2 text-[10px] font-mono rounded-lg transition-all duration-300 ${
                      activeSystemTab === 'healthy' 
                        ? 'bg-emerald-600 text-white font-bold shadow-md' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                    }`}
                  >
                    🟢 SAIN (SUIVI PAR VSW)
                  </button>
                  <button 
                    onClick={() => setActiveSystemTab('at-risk')}
                    className={`px-3 py-2 text-[10px] font-mono rounded-lg transition-all duration-300 ${
                      activeSystemTab === 'at-risk' 
                        ? 'bg-rose-950 text-rose-350 border border-rose-900/30 font-bold' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                    }`}
                  >
                    🔴 À L'ABANDON (SANS SUIVI)
                  </button>
                </div>

                {/* Action-Oriented System Data Feedback */}
                {activeSystemTab === 'healthy' ? (
                  <div className="space-y-3.5">
                    
                    {/* Element 1: Uptime Metric */}
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-white text-xs font-bold leading-tight">Disponibilité réseau</span>
                          <span className="block text-[10px] text-slate-400">Ping régulier actif 1min</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 bg-emerald-500/10 rounded">
                        99.98% SAIN
                      </span>
                    </div>

                    {/* Element 2: Save state */}
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-white text-xs font-bold leading-tight">Sauvegardes chiffrées</span>
                          <span className="block text-[10px] text-slate-400">Stockage déporté Cloud d'urgence</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-blue-400 font-bold px-2 py-0.5 bg-blue-500/10 rounded">
                        QUOTIDIEN OK
                      </span>
                    </div>

                    {/* Element 3: Speed index */}
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <Gauge className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-white text-xs font-bold leading-tight">Temps de réponse mobile</span>
                          <span className="block text-[10px] text-slate-400">Cache expiré purgé automatiquement</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 bg-emerald-500/10 rounded">
                        0.4s (EXCELLENT)
                      </span>
                    </div>

                    {/* Element 4: Plug-in & Code compliance */}
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-white text-xs font-bold leading-tight">Failles de plugins WordPress</span>
                          <span className="block text-[10px] text-slate-400">Scans quotidiens menés</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-450 font-bold px-2 py-0.5 bg-emerald-500/10 rounded">
                        0 MENACES
                      </span>
                    </div>

                  </div>
                ) : (
                  <div className="space-y-3.5">
                    
                    {/* Element 1: Down detection vulnerability */}
                    <div className="p-3 bg-rose-950/25 border border-rose-950/40 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                          <AlertOctagon className="w-4 h-4 animate-bounce" />
                        </div>
                        <div>
                          <span className="block text-rose-300 text-xs font-bold leading-tight">Aucune sonde de crash</span>
                          <span className="block text-[10px] text-rose-200">En cas de bug, vous l'apprendrez de vos clients</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-rose-400 font-bold px-2 py-0.5 bg-rose-500/20 rounded">
                        CRITIQUE
                      </span>
                    </div>

                    {/* Element 2: Save vulnerability */}
                    <div className="p-3 bg-rose-950/25 border border-rose-950/40 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-rose-300 text-xs font-bold leading-tight">Pas de sauvegarde hors hébergeur</span>
                          <span className="block text-[10px] text-rose-200">Aucun backup n'est externalisé</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-rose-450 font-bold px-2 py-0.5 bg-rose-500/20 rounded">
                        CRASH DANGER
                      </span>
                    </div>

                    {/* Element 3: Performance issues */}
                    <div className="p-3 bg-rose-950/25 border border-rose-950/40 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-450 flex items-center justify-center shrink-0">
                          <Gauge className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-rose-300 text-xs font-bold leading-tight">Temps de chargement mobile : 4.8s</span>
                          <span className="block text-[10px] text-rose-200">Images lourdes et cache saturé</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-rose-400 font-bold px-2 py-0.5 bg-rose-500/20 rounded">
                        SEO PÉNALISÉ
                      </span>
                    </div>

                    {/* Element 4: Plug-in outdated warning */}
                    <div className="p-3 bg-rose-950/25 border border-rose-950/40 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                          <Settings className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-rose-300 text-xs font-bold leading-tight">Module WordPress obsolète</span>
                          <span className="block text-[10px] text-rose-200">14 paquets à risque scan mondial</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-rose-400 font-bold px-2 py-0.5 bg-rose-500/20 rounded">
                        14 VULNÉRABILITÉS
                      </span>
                    </div>

                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <p className="text-slate-400 text-xs font-mono">
                    {activeSystemTab === 'healthy' 
                      ? "✨ Votre site reste performant, à jour et digne de confiance." 
                      : "🚨 Risque fort de rupture transactionnelle ou d'affichage."
                    }
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CRITICAL RISKS SECTION - Modern Bento cluster layout for commercial impact */}
      <section className="py-28 bg-[#fafbfe] border-b border-slate-200/60">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full inline-block">
              Analyse objective du risque
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Un site laissé sans surveillance accumule l'obsolescence et fragilise vos ventes
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              N'attendez pas l'écran rouge d'exclusion de Google ou un message alarmé d'un visiteur pour agir. Les dysfonctionnements d'un hébergement non géré sont sournois, invisibles en journée, mais désastreux pour votre image professionnelle régionale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unmaintainedRisks.map((risk, idx) => {
              const Icon = risk.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-2xl p-6.5 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100/50 text-slate-800 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 font-display text-base leading-snug">{risk.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-sans mt-2">{risk.desc}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded">{risk.severity}</span>
                    <span className="text-slate-400">IMPACT DIRECT</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sincere Case study display card */}
          <div className="bg-[#0c1223] text-white rounded-[2rem] p-8 md:p-12 mt-12 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[80px] rounded-full" />
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-2.5 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold uppercase tracking-wider text-[10px] rounded inline-block font-mono">
                Cas d'étude PME locale
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight">
                Le syndrome du site "créé et oublié" : Un scénario hélas trop classique.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Un artisan spécialisé dans le BTP diffuse une campagne publicitaire payante à 300€/mois pour acquérir de nouveaux prospects. Un jour, en raison du changement invisible de la version PHP chez son hébergeur, l'extension gérant les formulaires de de devis plante et n'envoie plus rien. Ne recevant plus de notifications, l'artisan pense simplement que le marché est calme. <strong>Résultat :</strong> Une perte financière directe et 8 formulaires de contact restés figés sur le serveur pendant plus d'un mois.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">Notre protocole d'airbag :</h4>
              <ul className="space-y-3 text-[12px] text-slate-300">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-500/10 rounded-full p-0.5" />
                  <span>Sonde active qui teste l'affichage de vos formulaires</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-500/10 rounded-full p-0.5" />
                  <span>Mesure de rapidité quotidienne pour éviter le rejet Google</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-500/10 rounded-full p-0.5" />
                  <span>Intervention sous 4 heures si un test de contact échoue</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE BENEFITS SECTION - Elevating credentials and reassurance */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              La tranquillité au quotidien
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Pourquoi nous confier la clé de votre santé numérique ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              La technique de votre site ne devrait plus jamais consister en une surcharge mentale. Reprenez votre focus métier en déléguant à des techniciens réactifs d'Île-de-France.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.id} 
                  className="bg-slate-50/70 border border-slate-150 rounded-2xl p-6.5 md:p-8 hover:border-blue-300 hover:bg-white transition-all flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/55 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 font-display text-base leading-tight">{benefit.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-light">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PRESTATIONS DETAIL - Action-focused list items */}
      <section id="nos-prestations" className="py-28 bg-[#fafbfe] border-b border-slate-200/50 scroll-mt-6">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Notre panel d'actions
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              L'intégralité des actions techniques indispensables, packagée sans surprise
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Que ce soit pour soigner le référencement naturel, accélérer l'allègement de votre page d'accueil ou restructurer un paramètre TLS, nous menons chaque intervention avec soin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prestations.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/85 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/40 text-blue-600 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        {p.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm font-display leading-tight">{p.title}</h3>
                      <p className="text-slate-500 text-[11.5px] leading-relaxed font-sans mt-2.5 font-light">{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CONFIGURATOR STEPPER - Direct subscription target helper */}
      <section id="simulateur-besoins" className="py-28 bg-white border-b border-slate-100 scroll-mt-6">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Simulateur Intelligent
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Quel abonnement de maintenance correspond à votre entreprise ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Répondez à 3 questions simples pour cibler la formule de maintenance la plus rationnelle selon votre configuration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/5 blur-xl rounded-full" />
            
            {/* Step indicators */}
            <div className="flex items-center gap-1.5 mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                    quizStep >= step ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Technology selection */}
            {quizStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-blue-600 text-xs font-bold uppercase">Question 01 sur 03</span>
                  <h3 className="text-xl font-display font-medium text-slate-900">Quelle est la technologie actuelle de votre site ?</h3>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { key: 'wordpress', label: 'WordPress / Webmaster classique', desc: 'Gestion par plugins tiers' },
                    { key: 'react_next', label: 'Projet Custom (Next.js / React / TypeScript)', desc: 'Framework codé, besoin de développeur' },
                    { key: 'je_ne_sais_pas', label: 'Autre site ou "Je ne sais pas"', desc: 'Nous mènerons un audit préalable gratuit' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectAnswer('tech', opt.key)}
                      className="bg-white border border-slate-200 hover:border-blue-500 hover:shadow p-5 text-left rounded-xl transition-all h-full flex flex-col justify-between"
                    >
                      <strong className="text-slate-900 text-xs font-display block mb-1">{opt.label}</strong>
                      <span className="text-[10px] text-slate-550 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Traffic selection */}
            {quizStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-blue-600 text-xs font-bold uppercase">Question 02 sur 03</span>
                  <h3 className="text-xl font-display font-medium text-slate-900">Quel est le volume de trafic mensuel estimé ?</h3>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { key: 'low', label: 'Moins de 1000 visites', desc: 'Activités locales, artisans, TPE' },
                    { key: 'medium', label: '1000 à 10 000 visites', desc: 'PME en croissance, budgets Google Ads actifs' },
                    { key: 'high', label: 'Plus de 10 000 visites', desc: 'E-commerce dynamique, forte audience' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectAnswer('traffic', opt.key)}
                      className="bg-white border border-slate-200 hover:border-blue-500 hover:shadow p-5 text-left rounded-xl transition-all h-full flex flex-col justify-between"
                    >
                      <strong className="text-slate-900 text-xs font-display block mb-1">{opt.label}</strong>
                      <span className="text-[10px] text-slate-550 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setQuizStep(1)} 
                  className="text-xs text-slate-450 hover:text-slate-600 block pt-2 underline"
                >
                  ← Retour à la question précédente
                </button>
              </div>
            )}

            {/* Step 3: Needs selection */}
            {quizStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-blue-600 text-xs font-bold uppercase">Question 03 sur 03</span>
                  <h3 className="text-xl font-display font-medium text-slate-900">De quel niveau de modification de contenu avez-vous besoin ?</h3>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { key: 'technical_only', label: 'Aucun - juste la sécurité technique', desc: 'Mises à jour manuelles, backups, monitoring' },
                    { key: 'occasional', label: 'Petit ajustement ponctuel', desc: 'Textes, fiches, tarifs, 1h par mois incluse' },
                    { key: 'evolution', label: 'Évolutions d\'offres régulières', desc: 'Développements fréquents, 3h par mois incluses' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectAnswer('needs', opt.key)}
                      className="bg-white border border-slate-200 hover:border-blue-500 hover:shadow p-5 text-left rounded-xl transition-all h-full flex flex-col justify-between"
                    >
                      <strong className="text-slate-900 text-xs font-display block mb-1">{opt.label}</strong>
                      <span className="text-[10px] text-slate-550 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setQuizStep(2)} 
                  className="text-xs text-slate-450 hover:text-slate-600 block pt-2 underline"
                >
                  ← Retour à la question précédente
                </button>
              </div>
            )}

            {/* Step 4: Results */}
            {quizStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-emerald-600 text-xs font-bold uppercase tracking-wider block bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded inline-block">
                    Diagnostic complété avec succès !
                  </span>
                  <h3 className="text-2xl font-display font-medium text-slate-900">Formule recommandée : {getRecommendedPlanObj().title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
                    Au vu de votre équipement ({quizAnswers.tech === 'react_next' ? 'Code React Moderne' : quizAnswers.tech === 'wordpress' ? 'CMS WordPress' : 'Site Standard'}), de votre trafic de proximité et de votre besoin ({quizAnswers.needs === 'technical_only' ? 'Suivi technique pur' : 'Suivi technique & évolutions incluses'}), cette formule vous correspond parfaitement.
                  </p>
                </div>

                {/* Simulated recommended offer preview inside the quiz box */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 text-left relative overflow-hidden flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase">
                      Recommandation d'expert VSW Digital
                    </span>
                    <h4 className="font-bold text-slate-900 text-base">{getRecommendedPlanObj().title}</h4>
                    <p className="text-[11px] text-slate-550 font-sans max-w-sm">{getRecommendedPlanObj().desc}</p>
                  </div>
                  
                  <div className="text-left sm:text-right shrink-0">
                    <span className="block text-[10px] text-slate-400 font-mono">TARIF PAR MOIS HT :</span>
                    <span className="block text-xl font-bold text-slate-900">{getRecommendedPlanObj().monthlyPrice} € / mois</span>
                    <span className="block text-[10px] text-slate-400">Sans engagement, résiliation en ligne</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    to="/contact"
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <span>Souscrire à cet abonnement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button 
                    onClick={resetQuiz} 
                    className="px-6 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-xs tracking-wider transition-all duration-300"
                  >
                    Recommencer le diagnostic
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 6. TECHNOLOGY & STACK MATRIX - Direct details, no jargon */}
      <section className="py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Compatibilité Multilingues
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Une expertise étendue sur WordPress, Next.js et de multiples architectures
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Quel que soit l'outil de création initial choisi par votre précédent prestataire, nous reprenons l'administration de votre code sans douleur pour le restructurer en lieu sûr.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedSites.map((site, index) => {
              const Icon = site.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-4 hover:border-blue-400 hover:shadow shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">{site.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">{site.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Sectors list grid */}
          <div className="mt-16 text-center space-y-4 max-w-4xl mx-auto">
            <span className="text-[10px] font-mono text-slate-450 tracking-wider uppercase block">
              Secteurs déjà sous maintenance active par VSW Digital :
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Art artisans', 'Établissements BTP', 'PME industrielles', 'Services comptables', 'Sociétés de sécurité', 
                'Cabinets juridiques', 'Sociétés de logistique', 'Acteurs du e-commerce', 'Organismes de formation', 
                'Professions libérales', 'Écoles privées', 'Hôtels & Restauration'
              ].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 text-slate-650 text-xs rounded-full font-medium shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FOCUS WORDPRESS MAINTENANCE SPECIALTY */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-600 font-bold uppercase tracking-wider text-[10px] rounded inline-block font-mono">
                Intervention Spécialiste WordPress
              </span>
              
              <h2 className="text-3xl md:text-[2.25rem] font-display font-medium tracking-tight text-slate-900 leading-tight">
                WordPress : Gérer les failles courantes sans dégrader vos plugins
              </h2>
              
              <p className="text-slate-650 leading-relaxed font-sans text-sm md:text-base font-light">
                WordPress propulse plus de 40% des sites mondiaux. Mais cette popularité en fait la cible première d'infiltrations de robots. Notre équipe contrôle manuellement la conformité de chaque module (Elementor, Divi, WooCommerce...) et n'exécute jamais de mises à jour automatiques à l'aveugle, évitant drastiquement les surprises après mise en production.
              </p>

              <div className="space-y-3 pt-2">
                {wpFocusPoints.map((point, index) => (
                  <div key={index} className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 bg-emerald-50 rounded-full p-0.5 border border-emerald-100" />
                    <span className="text-slate-700 text-xs md:text-sm font-sans font-light">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Visual Credential Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#0c1223] text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden text-left border border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[40px] rounded-full" />
                
                <h3 className="font-display font-bold text-white text-base">Le nettoyage de mauvais prestataires</h3>
                <p className="text-slate-350 text-xs leading-relaxed font-sans font-light">
                  Votre hébergement est encombré ? Votre ancien webmaster est injoignable et vous souffrez d’extensions superflues lentes ? Nous récupérons proprement vos accès existants administrateurs, nettoyons les codes périmés restants et vous restituons un site fluide, débarrassé des dépendances inutiles qui l'alourdissent.
                </p>

                <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-550 font-mono">
                  <span>CLEANUP WP PLATFORM</span>
                  <span className="text-blue-400">VSW DIGITAL ENGINEERING</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. EXPERT SERVER TRANSIT (Hosting alternatives) */}
      <section className="py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Puissance & Hébergement
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Un hébergeur performant réduit la fuite de vos prospects
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              La rapidité dépend à 50% de la configuration sous-jacente du serveur de distribution (DNS, CDN, TTFB initial). Nous gérons la liaison optimale de votre espace selon vos réelles contraintes techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Hébergement Cloud / VPS", desc: "Configuration de la mémoire virtuelle RAM allouée à la volée." },
              { name: "Certificat SSL", desc: "Ajustement TLS constant pour garder le cadenas vert valide." },
              { name: "Compression statique Gzip", desc: "Optimisation de l'allègement de bande passante." },
              { name: "Liaisons CDN Intelligentes", desc: "Distribution géographique rapide des pages en France." },
              { name: "Indépendance Éthique", desc: "Conseils techniques objectifs sur le choix (OVH, o2switch, Firebase)." }
            ].map((opt, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-blue-600 font-mono block">SERVEUR COMPLIANCE 0{idx + 1}</span>
                  <h4 className="font-bold text-slate-900 font-display text-[13.5px] leading-tight">{opt.name}</h4>
                  <p className="text-slate-500 text-[10.5px] leading-relaxed font-sans font-light">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50/50 border border-blue-150/80 rounded-2xl p-6.5 text-center max-w-2xl mx-auto font-sans text-xs text-blue-900 leading-relaxed">
            💡 <strong>Pas de parti pris hébergeur :</strong> Nous recommandons l'espace d'hébergement le plus pertinent (o2switch / OVH pour WordPress, Vercel / Netlify pour NextJS, Google Cloud / Firebase pour les gros volumes de données) pour optimiser vos frais de serveurs.
          </div>

        </div>
      </section>

      {/* 9. ONBOARDING STRATEGY & STEPS TIMELINE */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Rigueur d'exécution
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Notre méthode d'onboarding : de l'audit initial au suivi serein
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Nous n'appliquons aucun changement à l'aveugle. Nous ordonnons une suite logique structurée pour un atterrissage en toute sûreté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodSteps.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/50 border border-slate-180 rounded-2xl p-6 md:p-8 relative shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-4xl font-black text-blue-100 block leading-none">{m.step}</span>
                    <span className="text-[9px] text-slate-400 font-mono tracking-widest font-bold">PROTOCOLE VSW</span>
                  </div>
                  <h3 className="font-bold text-slate-900 font-display text-base leading-tight">{m.title}</h3>
                  <p className="text-slate-600 text-[11.5px] leading-relaxed font-sans font-light mb-0">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. PRODUCTIZED PLANS & MONTHLY SUBSCRIPTION PRICING SECTION */}
      <section id="plans-tarifs" className="py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Budgetisation Simple & Claire
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Des abonnements de maintenance mensualisés, sans engagement de durée
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Bénéficiez de la transparence totale d'un accompagnement packagé de proximité. Ajustez ou stoppez votre formule par simple e-mail d'un mois sur l'autre.
            </p>

            {/* Interactive Monthly vs Annual billing toggle */}
            <div className="pt-6 flex justify-center">
              <div className="bg-slate-200/60 p-1.5 rounded-2xl flex items-center gap-1.5 border border-slate-300/40">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-slate-905 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Mensuel (Flexibilité)
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                    billingCycle === 'yearly'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Annuel / 2 mois offerts</span>
                  <span className="text-[9px] bg-amber-400 text-slate-950 font-mono font-black px-1.5 py-0.5 rounded uppercase">
                    PROMO
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {offers.map((offer) => (
              <div 
                key={offer.id} 
                className={`rounded-[2rem] p-6.5 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  offer.recommended 
                    ? 'bg-slate-900 text-white border-2 border-blue-600 shadow-xl scale-102 lg:scale-105 z-10' 
                    : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-900 shadow-sm'
                }`}
              >
                {/* Visual Popular Seal */}
                {offer.recommended && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-mono uppercase font-black px-3.5 py-1 rounded-full whitespace-nowrap">
                    ⭐ LE PLUS POPULAIR POUR LES DIRECTEURS DE PME
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex justify-between items-start gap-1">
                    <div>
                      <h3 className="font-bold text-xl font-display leading-tight">{offer.title}</h3>
                      <p className={`text-[11.5px] mt-1.5 leading-relaxed font-sans ${offer.recommended ? 'text-slate-350 font-light' : 'text-slate-550 font-light'}`}>
                        {offer.desc}
                      </p>
                    </div>
                    {offer.badge && (
                      <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-wider shrink-0 whitespace-nowrap ${
                        offer.recommended ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {offer.badge}
                      </span>
                    )}
                  </div>

                  {/* Pricing segment */}
                  <div className="pt-2 pb-2 border-t border-b border-dashed border-slate-700/25">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-medium font-bold text-slate-900">
                        {billingCycle === 'monthly' ? offer.monthlyPrice : offer.yearlyPrice} €
                      </span>
                      <span className={`text-xs ${offer.recommended ? 'text-slate-400' : 'text-slate-500'} font-sans`}>
                        / mois (HT)
                      </span>
                    </div>
                    <span className={`block text-[10.5px] mt-1 font-mono ${offer.recommended ? 'text-blue-400' : 'text-blue-600'}`}>
                      {billingCycle === 'yearly' 
                        ? `Soit ${offer.yearlyPrice * 12} € facturés par an (2 mois offerts)` 
                        : "Sans engagement récurrent"
                      }
                    </span>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-3 pt-2">
                    {offer.features.map((feat, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-500/10 rounded-full p-0.5 border border-emerald-500/25" />
                        <span className={`text-[11px] leading-snug font-sans font-light ${offer.recommended ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-700/20 text-center space-y-3">
                  <Link 
                    to="/contact" 
                    id={`cta-contact-plan-${offer.id}`}
                    className={`w-full text-center block px-6 py-4 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 uppercase shadow ${
                      offer.recommended 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-[1.01]' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white hover:scale-[1.01]'
                    }`}
                  >
                    {offer.ctaText}
                  </Link>
                  <span className={`block text-[10px] font-mono uppercase tracking-widest ${offer.recommended ? 'text-slate-400' : 'text-slate-500'}`}>
                    🚀 ACTIVATION EN 24 H CHRONO
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center space-y-4 font-sans text-xs text-slate-500 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm">
            <p className="font-light">
              ℹ️ <strong>Pour les architectures complexes</strong> : Pour les sites marchands volumineux (WooCommerce de plus de 500 articles ou plateformes d'API sur-mesure complexes), nous configurons un bilan d'onboarding spécifique et un devis d'accompagnement sur-mesure pour couvrir spécifiquement vos besoins de base de données.
            </p>
          </div>

        </div>
      </section>

      {/* 11. SINCERE & HONEST SECURITY PROTOCOL SECTION (Builds high trust) */}
      <section className="py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-600 font-bold uppercase tracking-wider text-[10px] rounded inline-block font-mono">
                La réalité de la Sûreté Web
              </span>
              
              <h2 className="text-3xl md:text-3.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                La réalité de la sécurité informatique : la résilience organisée face aux attaques
              </h2>
              
              <p className="text-slate-650 leading-relaxed font-sans text-xs md:text-sm font-light">
                Aucune entreprise dans le monde ne peut décemment faire la promesse d'une sécurité absolue contre le piratage. En informatique de réseau, le risque zéro n'existe pas. Cependant, l'immense majorité des failles découle d'un simple manque d'hygiène de base (vieux pluginElementor non corrigé, version de serveur obsolète depuis 12 mois).
              </p>

              <p className="text-slate-650 leading-relaxed font-sans text-xs md:text-sm font-light">
                <strong>Notre engagement éthique :</strong> Réduire de l'ordre de 95% l'exposition de votre vitrine web aux portes d'accès triviales recherchées par les robots. Et surtout, structurer un backup externalisé réversible pour restaurer proprement et gratuitement votre site en moins de 4h s'il venait à subir une attaque isolée.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Firewall actif", desc: "Blocage préliminaire des adresses de robots suspicieuses." },
                  { title: "Reprise post-incident", desc: "Restauration propre et d'urgence menée par nos soins." },
                  { title: "Sauvegardes étanches", desc: "Copie isolée géographiquement des données serveur." },
                  { title: "Zéro obsolescence", desc: "Veille bimensuelle de la validité de chaque script." }
                ].map((sec, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-1">
                    <strong className="text-slate-900 text-xs font-display flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      {sec.title}
                    </strong>
                    <p className="text-slate-500 text-[10px] leading-relaxed font-sans font-light">{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right container visual graphic */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b0f19] text-white rounded-[2rem] p-8 md:p-10 space-y-6 relative overflow-hidden border border-slate-900 text-left">
                <div className="absolute top-0 right-0 p-4 opacity-15">
                  <ShieldCheck className="w-20 h-20 text-blue-500" />
                </div>
                
                <h3 className="font-display font-medium text-white text-base">Le Plan de Reprise d'Activité (PRA) inclus</h3>
                <p className="text-slate-350 text-xs leading-relaxed font-sans font-light">
                  En qualité de titulaire d'un contrat de maintenance VSW Digital, vous disposez sans frais supplémentaires de notre garantie d'intervention d'urgence suite à une attaque. Nous prenons l'entière charge du diagnostic initial, du nettoyage des tables SQL injectées, et de la réimplantation propre à partir de notre sauvegarde externe préservée hors-site.
                </p>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-blue-900/40 text-[11px] text-blue-350 leading-relaxed font-mono space-y-2">
                  <span className="text-rose-450 block font-bold">⚠️ RAPPEL DE SÉCURITÉ :</span>
                  <span>Plus un site attend pour subir sa première mise à jour technique globale, plus le risque d'incompatibilité violente (ou conflit de base) augmente lors du premier déploiement préventif.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. SEARCH COGNITIVE / SEO ADVANTAGE */}
      <section className="py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Intégrité de Référencement
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Un site internet sain conserve plus facilement ses classements Google
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Les robots d'indexation de Google parcourent régulièrement vos fichiers sources pour évaluer la vitesse de rendu et les rapports de compatibilité mobile. Un site négligé perd ses acquis locaux durement gagnés face à la concurrence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Nettoyage des redirections", desc: "Détecter et corriger les liens brisés générant de frustrantes pages blanches d'erreur 404.", icon: Search },
              { title: "Mise à jour du Sitemap", desc: "Transmettre proprement la structure de vos nouvelles pages de manière fluide aux robots.", icon: FileText },
              { title: "Surveillance Search Console", desc: "Identifier immédiatement les alertes d'affichage mobile éditées par Google à la source.", icon: Smartphone },
              { title: "Optimisation de structure", desc: "Garder un balisage HTML irréprochable exempt d'erreurs de scripts bloquants.", icon: Wrench }
            ].map((el, i) => {
              const Icon = el.icon;
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6.5 hover:border-blue-400 transition-colors">
                  <span className="text-[10px] font-mono text-blue-600 font-bold block mb-3 uppercase tracking-wider">SEO PILLAR 0{i + 1}</span>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-slate-700" />
                    <h3 className="font-bold text-slate-900 font-display text-sm leading-tight">{el.title}</h3>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-sans font-light">{el.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 13. SINCERE FAQ SECTION WITH ACCORDION AND INTUITION FOR SME DIRECTORS */}
      <section className="py-28 bg-[#fafbfe] border-b border-slate-200/50 scroll-mt-6">
        <div className="container mx-auto px-6 max-w-7xl text-left">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block">
              Renseignements techniques simples
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Foire Aux Questions : Comprendre le suivi serein sans jargon obscur
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Prenez des décisions éclairées. Nous répondons aux questions courantes reçues de la part de dirigeants d'entreprises locales.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                  style={{ borderColor: isOpen ? '#3b82f6' : '#e2e8f0' }}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-950 text-sm md:text-base gap-4 transition-colors hover:bg-slate-50/50"
                  >
                    <span>{item.q}</span>
                    <span className="shrink-0 text-slate-500">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 text-xs md:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. CTA FINAL - High-converting subscription closing */}
      <section className="relative py-28 bg-[#090d1a] text-white overflow-hidden text-center border-t border-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-600/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-8 text-center">
          
          <span className="px-3.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider text-[10px] rounded-full inline-block font-mono">
            Diagnostic & Audit technique d'entrée offert
          </span>
          
          <h2 className="text-3xl md:text-4.5xl font-display font-bold text-white max-w-2xl mx-auto leading-tight">
            Offrez à votre entreprise locale l'assurance de sécurité qu'elle mérite
          </h2>
          
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Demandez un diagnostic gratuit complet de l'état actuel de votre site. Nos experts analyseront d'éventuels ralentissements, formulaires cassés ou failles de sécurité, et vous remettront notre plan de recommandations sans le moindre engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link 
              to="/contact" 
              id="cta-final-maintenance"
              className="px-8 py-4 bg-blue-650 hover:bg-blue-600 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl shadow-blue-500/15 hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Demander mon audit gratuit de rentrée</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-900 text-center max-w-md mx-auto">
            <p className="text-slate-500 font-mono text-[9px] tracking-widest uppercase">
              🛡️ ABONNEMENT RÉSILIABLE PAR UN SIMPLE EMAIL EN 24H • ACCOMPAGNEMENT DE TOUT SITE SÉCURISÉ
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
