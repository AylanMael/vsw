import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
  BookOpen,
  ThumbsUp,
  Star,
  Terminal,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface NeedSign {
  id: string;
  icon: any;
  title: string;
  desc: string;
}

interface Benefit {
  id: string;
  icon: any;
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

// Signs list adapted for small businesses & physical/B2B services
const needSigns: NeedSign[] = [
  {
    id: 'sign-1',
    icon: AlertTriangle,
    title: 'Absence de demandes en ligne',
    desc: 'Malgré les visites de clients potentiels, votre téléphone ne sonne presque jamais et votre messagerie reste vide.'
  },
  {
    id: 'sign-2',
    icon: Layout,
    title: 'Identité visuelle obsolète',
    desc: 'La mise en page a vieilli. L’écriture, les couleurs et les graphismes datent d’une autre époque d’Internet.'
  },
  {
    id: 'sign-3',
    icon: Smartphone,
    title: 'Affichage laborieux sur mobile',
    desc: 'Les boutons sont trop petits, les pages se décalent et le menu est quasiment impossible à utiliser avec un doigt.'
  },
  {
    id: 'sign-4',
    icon: Award,
    title: 'Vos rivaux paraissent plus récents',
    desc: 'Leurs sites inspirent confiance instantanément avec des designs clairs, captant les meilleures parts de votre marché local.'
  },
  {
    id: 'sign-5',
    icon: Eye,
    title: 'Invisibilité complète sur Google',
    desc: 'Si vous tapez votre métier suivi de votre secteur géographique, vous n’apparaissez pas dans les premiers résultats.'
  },
  {
    id: 'sign-6',
    icon: FileText,
    title: 'Informations obsolètes',
    desc: 'Vos tarifs, vos prestations actuelles, vos photos ou votre secteur d’intervention ne correspondent plus à la réalité.'
  },
  {
    id: 'sign-7',
    icon: Settings,
    title: 'Complexité de modification',
    desc: 'Vous dépendez de technologies obsolètes où la moindre correction de texte risque de dérégler tout l’affichage.'
  },
  {
    id: 'sign-8',
    icon: TrendingUp,
    title: 'Gaspillage publicitaire Google Ads',
    desc: 'Le trafic payé s’évapore car la page sur laquelle atterrissent les internautes ne charge pas assez vite (fuite de budget).'
  }
];

const benefits: Benefit[] = [
  {
    id: 'benefit-1',
    icon: ShieldCheck,
    title: 'Mise en confiance absolue',
    desc: 'Un design moderne et certifié rassure immédiatement le prospect exigeant dès les 3 premières secondes de navigation.'
  },
  {
    id: 'benefit-2',
    icon: Users,
    title: 'Taux de contact décuplé',
    desc: 'Des appels à l’action clairs, des numéros cliquables sur smartphone et un formulaire conçu pour éliminer l’effort.'
  },
  {
    id: 'benefit-3',
    icon: Search,
    title: 'Préservation & Relance du SEO',
    desc: 'Conservez vos ancrages historiques sémantiques forts tout en actualisant les balises Hn exigées par les robots Google.'
  },
  {
    id: 'benefit-4',
    icon: Gauge,
    title: 'Vitesse de chargement fulgurante',
    desc: 'En réduisant le poids technique d’anciennes structures, le site s’affiche en moins de 1.5s, éradiquant les rebonds.'
  },
  {
    id: 'benefit-5',
    icon: Sparkles,
    title: 'Image de marque premium',
    desc: 'Alignez la qualité de votre présence Web sur celle de votre savoir-faire technique déployé sur le terrain.'
  },
  {
    id: 'benefit-6',
    icon: Layers,
    title: 'Robustesse & Évolutivité',
    desc: 'Bâtissez une base technique modulaire à l’épreuve du temps, prête à accueillir un blog SEO ou un espace client sécurisé.'
  }
];

const processSteps: ProcessStep[] = [
  {
    id: 'p-1',
    num: '01',
    title: 'Audit & Diagnostic complet',
    desc: 'Analyse approfondie de votre site actuel, de ses performances réelles, de sa sémantique et de ses positions organiques.',
    badge: 'Analyse'
  },
  {
    id: 'p-2',
    num: '02',
    title: 'Cartographie des objectifs',
    desc: 'Définition claire des clients cibles indispensables à votre rentabilité commerciale et hiérarchisation des prestations clés.',
    badge: 'Stratégie'
  },
  {
    id: 'p-3',
    num: '03',
    title: 'Sauvegarde du Capital SEO',
    desc: 'Identification rigoureuse des URLs bien positionnées pour orchestrer un plan de redirection 301 strict et préserver vos acquis.',
    badge: 'Sécurité'
  },
  {
    id: 'p-4',
    num: '04',
    title: 'Maquette UX/UI Moderne',
    desc: 'Création d’un design clair et épuré avec une ergonomie pensée d’abord pour le téléphone (Mobile-First) et la captation de leads.',
    badge: 'Design'
  },
  {
    id: 'p-5',
    num: '05',
    title: 'Optimisation & Performance',
    desc: 'Intégration optimisée en code propre : compactions d’images, élimination des scripts bloquants et temps d’affichage ultra bas.',
    badge: 'Technique'
  },
  {
    id: 'p-6',
    num: '06',
    title: 'Mise en ligne & Mappage 301',
    desc: 'Bascule fluide sans interruption de service, déclaration Search Console et transmission rapide du nouveau sitemap à Google.',
    badge: 'Lancement'
  }
];

const sectors = [
  'Artisans & BTP', 'PME régionales', 'Commerces locaux', 'Entreprises de rénovation',
  'Sociétés de déménagement', 'Services de sécurité privée', 'Cabinets de conseil',
  'Organismes de formation', 'Services aux entreprises', 'Transport & Logistique',
  'Professions libérales', 'Services de nettoyage', 'Coopératives & Industries locales'
];

const offers: Offer[] = [
  {
    id: 'off-1',
    title: 'Audit de Refonte Technique',
    desc: 'L’analyse indispensable pour faire le tri entre le capital immatériel à sauvegarder et les freins sémantiques ou techniques à éradiquer d’urgence.',
    features: [
      'Diagnostic complet de vitesse (Core Web Vitals)',
      'Détection des freins à l’indexation mobile',
      'Audit sémantique et cartographie des pages fortes',
      'Analyse sectorielle de votre concurrence directe',
      'Livrable avec plan d’attaque stratégique'
    ]
  },
  {
    id: 'off-2',
    title: 'Refonte Essentielle Image',
    desc: 'Redessiner entièrement votre univers de marque pour lui donner un aspect rassurant, moderne et haut de gamme, parfaitement optimisé pour une conversion directe.',
    recommended: false,
    badge: 'Le plus accessible',
    features: [
      'Nouveau design premium responsive (Mobile-First)',
      'Intégration de vos preuves de confiance (avis, agréments)',
      'Formulaires sécurisés d’appels de devis fluides',
      'Optimisation des boutons d’appel et de géolocalisation',
      'Redirection 301 de vos pages existantes principales',
      'Panneau d’administration simple et robuste'
    ]
  },
  {
    id: 'off-3',
    title: 'Refonte Intégrale SEO & Conversion',
    desc: 'L’arme absolue des PME ambitieuses. Nous repensons l’architecture, réécrivons les arguments commerciaux, et structurons tout le code pour drainer des leads quotidiennement.',
    recommended: true,
    badge: 'Performance Maximale',
    features: [
      'Stratégie complète d’architecture sémantique (Hn)',
      'Rédaction de pages de services spécifiques géolocalisées',
      'Optimisation technique de vitesse ultra-poussée (< 1.2s)',
      'Sauvegarde avancée de 100% de votre historique Google',
      'Données structurées Schema.org pour le SEO local',
      'Raccordement d’outils de suivi (Google Search Console & Analytics)',
      'Garantie et support post-lancement de 30 jours'
    ]
  }
];

const faqs: FaqItem[] = [
  {
    q: "Qu’est-ce qui différencie une refonte d’une simple correction de site ?",
    a: "Changer un texte ou une photo est une simple modification. Une refonte est une opération structurelle : on repense le parcours utilisateur, on assainit le code source souvent encombré de vieux modules, et on réorganise les pages pour que le site réponde aux critères modernes de Google et aux habitudes de lecture rapides sur téléphone."
  },
  {
    q: "Ma visibilité Google va-t-elle s’effondrer au moment de la refonte ?",
    a: "C’est le danger majeur si la refonte est confiée à un débutant. Chez VSW Digital, nous appliquons un protocole rigoureux de redirection pour s'assurer que l'intégralité de vos positions fortes soit retenue : nous répertorions systématiquement vos anciennes adresses de pages (URLs) et indiquons à Google, via une instruction technique inviolable (redirection 301), où se trouve la nouvelle page modernisée. Vos acquis sémantiques historiques sont préservés."
  },
  {
    q: "Pouvez-vous garantir une première page ou une première position sur Google ?",
    a: "Toute agence prétendant vous garantir une position magique ou le premier rang national sur un mot-clé précis cherche à vous séduire avec des arguments trompeurs. L'algorithme de Google change constamment et nul ne le possède. En revanche, nous garantissons l'application de la totalité des bonnes pratiques exigées par Google : un site ultra-rapide, une sémantique de balises Hn irréprochable, une ergonomie mobile parfaite, et un maillage interne logique. Ce sont ces fondations techniques épurées qui mènent naturellement à une hausse durable de vos positions locales."
  },
  {
    q: "Peut-on conserver notre nom de domaine actuel ?",
    a: "Absolument. Vous restez l'unique propriétaire de votre nom de domaine (comme mon-entreprise.fr). Nous paramétrons simplement vos accès DNS le jour du lancement pour raccorder de manière invisible et sécurisée votre nom de domaine existant à la nouvelle infrastructure moderne."
  },
  {
    q: "Quelles technologies utilisez-vous pour la refonte ?",
    a: "Nous ne croyons pas aux solutions toutes faites. Si votre entreprise a besoin d'autonomie pour ajouter des actualités simples, nous installons un WordPress configuré d'une manière propre, légère et sécurisée. Si vous exigez une réactivité maximale sur mobile, une fluidité haut de gamme et une sécurité absolue de vos données, nous développons sur-mesure en Next.js, React et Tailwind CSS."
  },
  {
    q: "Combien de temps prend généralement une refonte ?",
    a: "Une refonte essentielle de mise en conformité visuelle et mobile s'achève sur une période de 3 à 4 semaines de collaboration. Un projet d'architecture sémantique complète optimisé pour le SEO géolocalisé s’étend généralement de 5 à 7 semaines."
  },
  {
    q: "Doit-on tout réécrire à partir de zéro ?",
    a: "Non. Nous étudions ce qui fonctionne dans vos textes. Vos témoignages clients, vos cas d’études, vos jolies réalisations chantiers et vos historiques d'entreprises seront conservés soigneusement, tout en étant habillés d'un écrin fluide moderne pour catalyser la confiance."
  }
];

export function RefonteSiteInternet() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Before/After state (0 to 100 position percent)
  const [sliderPos, setSliderPos] = useState<number>(50);
  
  // Dynamic diagnosis state
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({
    slow: false,
    mobile: false,
    no_leads: false,
    outdated: false,
    unfindable: false,
    incorrect: false
  });

  useEffect(() => {
    document.title = "Refonte de site internet professionnel | VSW Digital";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCheckboxChange = (key: string) => {
    setCheckedAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Compute diagnosis score and text
  const numChecked = Object.values(checkedAnswers).filter(Boolean).length;
  
  const getDiagnosisRecommendation = () => {
    if (numChecked === 0) {
      return {
        title: "Indice de santé globale : Stable",
        text: "Votre site web ne présente pas d’anomalies pénalisantes majeures déclarées. Un audit régulier gratuit reste utile pour identifier de petits leviers sémantiques ou vérifier l'état de votre sécurité.",
        colorClass: "text-emerald-500 bg-emerald-50 border-emerald-200",
        urgency: "Sain"
      };
    } else if (numChecked <= 2) {
      return {
        title: "Indice de santé globale : Vulnérable",
        text: "Attention : Votre site souffre de légers dysfonctionnements (vitesse mobile ou design fatigué). À terme, cela décourage une partie de vos prospects les plus exigeants qui comparent vos services.",
        colorClass: "text-amber-600 bg-amber-50 border-amber-200",
        urgency: "Urgence Modérée"
      };
    } else {
      return {
        title: "Indice de santé globale : Critique",
        text: "Urgence commerciale et technique : Votre site actuel freine activement la confiance de vos visiteurs et n'atteint pas ses objectifs SEO ou de lead. Vos dépenses et efforts de visibilité locaux s'évaporent.",
        colorClass: "text-rose-600 bg-rose-50 border-rose-200",
        urgency: "Urgence Critique"
      };
    }
  };

  const diagnosis = getDiagnosisRecommendation();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-navy-900 leading-normal selection:bg-blue-100">
      
      {/* 1. HERO & INTERACTIVE BEFORE/AFTER SECTION */}
      <section className="relative py-28 bg-[#0a0f1d] text-white overflow-hidden border-b border-slate-900">
        {/* Ambient atmospheric shapes */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-12 left-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
          {/* Technical blueprint grid representation */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3/5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider uppercase text-blue-400">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Transformation Numérique de Confiance</span>
              </div>
              
              <h1 id="main-h1" className="text-4xl md:text-5xl lg:text-5.5xl font-display font-bold tracking-tight leading-tight text-white">
                Refonte de site internet pour moderniser votre image et améliorer vos résultats
              </h1>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-sans font-light">
                Un outil obsolète ou trop lent repousse activement vos clients potentiels. VSW Digital réinvente l’architecture de votre site pour restaurer sa crédibilité, propulser sa rapidité de chargement, et maximiser l'acquisition de contacts utiles sans fausses promesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  id="cta-audit-site-hero"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <span>Demander un diagnostic de mon site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#notre-methode" 
                  id="cta-method-hero"
                  className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 text-slate-300 rounded-xl font-bold tracking-wide transition-all duration-300 text-center flex items-center justify-center"
                >
                  Découvrir notre méthode
                </a>
              </div>

              {/* Real numbers in quiet typography */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 max-w-lg text-left">
                <div>
                  <span className="block text-xl md:text-2xl font-display font-bold text-white">-75%</span>
                  <span className="block text-slate-400 text-[10px] font-mono leading-none tracking-wider uppercase">Poids technique</span>
                </div>
                <div>
                  <span className="block text-xl md:text-2xl font-display font-bold text-white">&lt; 1.5s</span>
                  <span className="block text-slate-400 text-[10px] font-mono leading-none tracking-wider uppercase">Temps de chargement</span>
                </div>
                <div>
                  <span className="block text-xl md:text-2xl font-display font-bold text-white">100%</span>
                  <span className="block text-slate-400 text-[10px] font-mono leading-none tracking-wider uppercase">Sécurisé &amp; RGPD</span>
                </div>
              </div>
            </div>

            {/* Right column - Premium Interactive Before/After slider mock up */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-lg bg-slate-900/60 border border-slate-800/80 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex justify-between items-center mb-4 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-400 animate-spin-slow" />
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-wider font-mono">Simulateur de Refonte</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded">GLISSIÈRE INTERACTIVE</span>
                </div>

                <p className="text-slate-400 text-[11px] mb-4 text-left leading-normal">
                  Faites glisser le curseur pour comparer l’état visuel et technique de votre présence avant et après notre intervention :
                </p>

                {/* BEFORE / AFTER CONTAINER FRAME */}
                <div className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden select-none border border-slate-850 bg-slate-950">
                  
                  {/* AFTER STAGE (Background - VSW Digital Design) */}
                  <div className="absolute inset-0 w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-blue-950 text-left">
                    {/* Fake modern header */}
                    <div className="flex justify-between items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[9px] text-white">
                      <span className="font-bold">MonEntreprise Premium</span>
                      <span className="text-emerald-400 flex items-center gap-1 font-mono uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold text-[8px]">
                        <Zap className="w-2.5 h-2.5" /> 99/100 Vitesse
                      </span>
                    </div>

                    {/* Fake modern content */}
                    <div className="my-auto space-y-1.5 py-2">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[8px] rounded uppercase font-bold tracking-wider">
                        Qualité Certifiée
                      </div>
                      <h4 className="font-display font-medium text-white text-lg leading-tight block">
                        Ingénierie de précision sur-mesure pour votre habitation
                      </h4>
                      <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                        Chaque maison est unique. Nos artisans certifiés RGE conçoivent et modifient vos installations avec une garantie longue durée.
                      </p>
                      
                      {/* Interactive clickables simulation */}
                      <div className="flex gap-2 pt-1">
                        <span className="px-2.5 py-1 bg-blue-600 rounded text-[8px] font-bold text-white shadow-sm flex items-center gap-1">
                          Demander un devis gratuit <ArrowRight className="w-2 h-2 text-white" />
                        </span>
                        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] font-medium text-slate-300">
                          Nos Réalisations
                        </span>
                      </div>
                    </div>

                    {/* Fake trust elements */}
                    <div className="grid grid-cols-4 gap-1.5 border-t border-white/10 pt-2 text-[7px] text-slate-400">
                      <span className="flex items-center gap-0.5 text-slate-300 font-bold"><Check className="w-2 h-2 text-emerald-400" /> Assurance Decennale</span>
                      <span className="flex items-center gap-0.5 text-slate-300 font-bold"><Check className="w-2 h-2 text-emerald-400" /> Label RGE Eco</span>
                      <span className="flex items-center gap-0.5 text-slate-300 font-bold"><Check className="w-2 h-2 text-emerald-400" /> Matériel Français</span>
                      <span className="flex items-center gap-0.5 text-slate-300 font-bold font-mono text-emerald-400"><Star className="w-2 h-2 text-amber-400 fill-amber-400" /> 4.9/5 Avis</span>
                    </div>
                  </div>

                  {/* BEFORE STAGE (Overlay - Old Clunky Design) */}
                  <div 
                    className="absolute inset-0 h-full p-4 flex flex-col justify-between bg-[#ecebe5] text-slate-800 transition-all select-none border-r-2 border-slate-400/80"
                    style={{ width: `${sliderPos}%` }}
                  >
                    {/* Fake header old */}
                    <div className="flex justify-between items-center bg-stone-300/40 border border-stone-400/50 px-3 py-1.5 rounded text-[8px] text-slate-600">
                      <span className="font-bold tracking-widest uppercase">MONENTREPRISE123.COM</span>
                      <span className="text-rose-600 flex items-center gap-1 font-mono uppercase bg-rose-500/10 px-1.5 py-0.5 rounded font-bold text-[7px]">
                        <AlertOctagon className="w-2.5 h-2.5" /> 23/100 LENT
                      </span>
                    </div>

                    {/* Fake text old */}
                    <div className="my-auto space-y-2 py-2 text-left">
                      <h4 className="font-serif text-sm text-stone-900 leading-tight underline font-bold">
                        Bievenu sur le blog corporatif de Jean et Cie sas
                      </h4>
                      <p className="text-[8px] text-stone-600 leading-relaxed font-mono">
                        Page mise à jour en novembre 2017. Nous proposons de faire nos travaux selon disponiblité. Téléphone de contact: 06.00... (voir bas de page). Page non-responsive.
                      </p>
                      
                      {/* broken structure */}
                      <div className="p-1.5 bg-amber-500/10 border border-amber-300/40 rounded text-[7px] text-rose-700 flex items-center gap-1 font-mono">
                        <AlertTriangle className="w-2.5 h-2.5 text-rose-600 shrink-0" /> Erreur d'affichage : Images non optimisées
                      </div>
                    </div>

                    {/* Low trust footer old */}
                    <div className="border-t border-stone-300 pt-2 text-[7px] text-stone-500 text-left">
                      📍 Nous appeler durant les jours ouvrés • Mentions légales non conformes • Copyrigth 2012
                    </div>
                  </div>

                  {/* Range Input Overlay for Drag control */}
                  <input 
                    type="range" 
                    min="1" 
                    max="99" 
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
                    aria-label="Séparateur avant après la refonte"
                  />

                  {/* Vertical separator visual bar */}
                  <div 
                    className="absolute top-0 bottom-0 pointer-events-none w-0.5 bg-white z-20 flex items-center justify-center shadow-lg"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center border-2 border-white pointer-events-none shadow-xl transform -translate-x-1/2">
                      <RefreshCw className="w-3.5 h-3.5 text-white animate-spin-slow" />
                    </div>
                  </div>
                </div>

                {/* Snap presets toggles below */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400">
                  <button 
                    onClick={() => setSliderPos(95)}
                    className="px-2.5 py-1.5 bg-slate-950 hover:bg-rose-950/40 text-rose-400 rounded-md font-medium border border-rose-950/40 transition-colors"
                  >
                    🔍 Voir l'ancien site
                  </button>
                  <span className="font-mono text-[9px] text-slate-500">GLISSEZ LA BARRE</span>
                  <button 
                    onClick={() => setSliderPos(5)}
                    className="px-2.5 py-1.5 bg-slate-950 hover:bg-blue-950/40 text-blue-400 rounded-md font-medium border border-blue-950/40 transition-colors"
                  >
                    ✨ Voir la refonte
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE DIAGNOSTIC AUTO-CHECKUP SECTION */}
      <section className="py-24 bg-white border-b border-slate-100 flex items-center text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Auto-évaluation gratuite en 3 secondes</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Votre site actuel freine-t-il la croissance de votre entreprise ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
              Sélectionnez les signes d’alerte correspondants à votre situation actuelle pour obtenir instantanément une analyse personnalisée et objective de vos urgences technologiques.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            
            {/* Left Box - Selection Checkbox List */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-[2rem] space-y-5">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2">Cochez les anomalies constatées :</h3>
              
              <div className="space-y-3.5">
                {[
                  { key: 'slow', label: 'Mon site prend plus de 3 ou 4 secondes à charger sur mobile' },
                  { key: 'mobile', label: 'Certaines images débordent ou mes boutons sont trop petits sur smartphone' },
                  { key: 'no_leads', label: 'Je ne reçois presque plus de nouveaux contacts ou formulaires de mon site' },
                  { key: 'outdated', label: 'Le style graphique paraît démodé et ne reflète plus la valeur réelle de mon travail' },
                  { key: 'unfindable', label: 'Je n’apparais pas sur Google en cherchant mon métier + ma ville' },
                  { key: 'incorrect', label: 'Mes prestations, services, labels ou informations n’y sont pas à jour' }
                ].map((item) => (
                  <label 
                    key={item.key} 
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                      checkedAnswers[item.key] 
                        ? 'bg-blue-50/50 border-blue-300 text-slate-900 shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input 
                      type="checkbox"
                      checked={checkedAnswers[item.key]}
                      onChange={() => handleCheckboxChange(item.key)}
                      className="mt-1 h-4.5 w-4.5 border-slate-300 text-blue-600 focus:ring-blue-500 rounded cursor-pointer"
                    />
                    <span className="text-xs md:text-sm font-medium leading-relaxed">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Right Box - Dynamic scoring recommendations */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between">
              <div className="bg-slate-950 text-white rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex-1 flex flex-col justify-between shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Terminal className="w-32 h-32" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex gap-2 items-center px-2.5 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-[9px] uppercase tracking-wider">
                    <span>Diagnostic instantané</span>
                  </div>

                  <div className="space-y-2 text-left">
                    <span className="text-slate-400 text-xs font-mono uppercase tracking-wider block">Constat de conformité :</span>
                    <h4 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <span>Anomalie(s) détectée(s) :</span>
                      <span className="font-extrabold text-[#3b82f6] text-2xl font-mono">{numChecked}</span>
                    </h4>
                  </div>

                  <div className="text-left space-y-3.5">
                    <div className={`p-4 rounded-xl border font-sans text-xs flex flex-col gap-2 ${diagnosis.colorClass}`}>
                      <div className="flex items-center gap-2 font-bold font-display uppercase tracking-wider text-[11px]">
                        <AlertTriangle className="w-4 h-4" />
                        <span>{diagnosis.title} ({diagnosis.urgency})</span>
                      </div>
                      <p className="leading-relaxed opacity-95">{diagnosis.text}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-800/80 mt-8 text-left space-y-4 relative z-10">
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    💡 Un audit par nos ingénieurs permet d’aller plus loin : étude sémantique, repérage d’erreurs de redirection DNS et décompte de perte de trafic.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="w-full text-center block px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold tracking-wider transition-all duration-300 shadow-lg shadow-blue-500/10 flex items-center justify-center gap-1.5"
                  >
                    <span>Demander mon plan d'action d'audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS SECTION - SEO, Vitesse, Design */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 flex items-center text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Garanties de Méthodologie</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Les 3 piliers d’une refonte de site réussie
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
              Une refonte professionnelle ne consiste pas à repeindre la façade. Elle consiste à nettoyer les fondations pour garantir indexation, performance et conversion durable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Pillar 1 */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-transform hover:-translate-y-1 duration-200 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">1. Protection du capital SEO</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  Si vos pages existantes plaisent déjà à Google, pas question de les détruire. Notre plan de <strong>redirection 301</strong> s’assure que l’ancien historique de vos URLs est proprement transmis à votre nouvelle vitrine, sans perte de trafic ni coupures de liens.
                </p>
              </div>
              <ul className="space-y-2 border-t border-slate-100 pt-4 text-[11px] text-slate-500 font-mono">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Plan complet de redirection 301</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Conservation de la force sémantique</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Recalibrage des balises de titres sémantiques</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-transform hover:-translate-y-1 duration-200 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">2. Allègement &amp; Vitesse mobile</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  Plus de 60% de votre trafic recherche vos services de rénovation, de logistique ou de conseil depuis un smartphone dehors. Nous forçons l’utilisation de formats d'images légers (WebP/AVIF), et épurons le code pour charger vos pages en moins de 1.5s réelles.
                </p>
              </div>
              <ul className="space-y-2 border-t border-slate-100 pt-4 text-[11px] text-slate-500 font-mono">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Moins de 1.5 seconde de temps de chargement</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Core Web Vitals entièrement au vert</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Ergonomie Mobile fluidifiée à 100%</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-transform hover:-translate-y-1 duration-200 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">3. Stratégie de conversion locale</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  Un beau site inutile n'aide pas votre croissance. Nous plaçons vos éléments de réassurance (labels de qualité, décennale, avis certifiés) en tête de lecture et simplifions l'accès au bouton d'appel direct ou au tunnel de devis.
                </p>
              </div>
              <ul className="space-y-2 border-t border-slate-100 pt-4 text-[11px] text-slate-500 font-mono">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Éléments de réassurance en tête</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Tunnels de contact épurés et sécurisés</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Suivi de formulaires d'intentions de devis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODERNIZED BENEFITS - What is being upgraded specifically */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Valeur ajoutée de la métamorphose</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Qu’allez-vous gagner en réalisant votre refonte chez nous ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
              Découvrez les bénéfices concrets et mesurables pour votre organisation après notre processus de mise aux normes techniques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="group bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 hover:border-blue-300 hover:bg-white transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 font-display text-base mb-2 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGYTIMELINE - Step by Step process */}
      <section id="notre-methode" className="py-24 bg-slate-50 border-b border-slate-150 scroll-mt-6 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Transparence Absolue</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Notre protocole étape par étape pour sécuriser le lancement
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Parce que la refonte de votre plateforme existante doit être planifiée sainement, nous suivons un enchaînement technique strict pour ne perdre aucun élément fort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.id} className="bg-white border border-slate-200 rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-black text-blue-100 block leading-none">{step.num}</span>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-mono rounded font-bold uppercase tracking-wider">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2 font-display leading-snug">{step.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick quote box for safety of users */}
          <div className="mt-12 bg-blue-50/50 border border-blue-150 rounded-2xl p-5 text-center max-w-2xl mx-auto font-mono text-[11px] text-blue-800 leading-relaxed">
            👨‍💻 <strong>Rappel crucial :</strong> Sur les sites ayant de solides positions SEO de départ, notre plan de redirection d'urls garantit le transfert de force technique sémantique sans coupure au cours du déploiement.
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVE TECH EXPLANATION - WordPress vs Next.js/Tailwind */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Guide Technologique</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Quelle technologie de refonte convient à votre métier ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Pas de solution unique imposée à la va-vite. Nous analysons rationnellement vos besoins opérationnels pour vous recommander l’outil le plus cohérent économiquement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Box 1 - WordPress */}
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-[10px] uppercase font-bold rounded">
                    WordPress Professionnel épuré
                  </span>
                  <span className="text-xs font-mono text-slate-400">Pour l'Autonomie</span>
                </div>
                
                <h3 className="font-display font-medium text-slate-900 text-xl leading-snug">
                  La solution idéale si vous écrivez ou modifiez vos actualités régulièrement.
                </h3>
                
                <p className="text-slate-650 text-xs leading-relaxed font-sans">
                  Si vous êtes un artisan local, une PME avec un blog régulier ou si vous souhaitez rajouter des articles par vous-même facilement au quotidien, un <strong>WordPress optimisé</strong> s'avère parfait. Nous le purgeons de toutes ses extensions lentes de base de données pour préserver sa rapidité de chargement.
                </p>

                <div className="border-t border-slate-200 pt-4 text-xs space-y-2 font-mono text-slate-500">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Administration intuitive familière</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Insertion autonome d'articles de blog</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Nettoyage rigoureux de votre vieux WordPress</div>
                </div>
              </div>
            </div>

            {/* Box 2 - Next.js & Tailwind */}
            <div className="bg-blue-950/20 border border-blue-500/20 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-mono text-[10px] uppercase font-bold rounded">
                    Next.js, React &amp; Tailwind CSS Sur-Mesure
                  </span>
                  <span className="text-xs font-mono text-blue-500">Pour la Performance</span>
                </div>
                
                <h3 className="font-display font-medium text-slate-100 text-xl leading-snug">
                  La vitesse maximale pour devancer vos concurrents locaux.
                </h3>
                
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  Pour les services exigeants, les startups et les marques de prestige qui requièrent un design à forte crédibilité, l'architecture Next.js offre des performances fulgurantes. Vos pages se chargent de manière instantanée, offrant un score de <strong>100% Core Web Vitals</strong> pour séduire l’algorithme Google.
                </p>

                <div className="border-t border-blue-900/60 pt-4 text-xs space-y-2 font-mono text-slate-300">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Sécurité absolue impossible à pirater</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Vitesse de clic foudroyante sur mobile</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Code taillé au pixel près sans thèmes lourds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DETAILED BEFORE/AFTER LIST GRID */}
      <section className="py-24 bg-slate-50 border-b border-slate-150 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Mesure de l’évolution</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Analyse comparative : Ce que change notre intervention
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Comparez méthodiquement les différences techniques fondamentales constatées lors de la refonte d’un ancien outil.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Column BEFORE */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-bold text-rose-700 font-display text-base tracking-tight flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  <span>Ancien site fatigué / non-conforme</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase font-bold">Inactif</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Lenteur alarmante au chargement", text: "Images lourdes non compressées, scripts d’extensions obsolètes ralentissant l'affichage (+4.5s d’attente sur réseau 4G mobile)." },
                  { title: "Taux de rebond d'internautes important", text: "Absence de numéros ou de formulaires directs en haut. L’internaute pressé quitte instantanément la page s'il doit chercher vos coordonnées." },
                  { title: "Faiblesse sémantique & Invisibilité", text: "Contenu flou ou trop court, structure de balises H1-H3 anarchique, réduisant à néant l’indexation géographique de votre zone de prospection." },
                  { title: "Responsivité approximative et boutons trop petits", text: "Affichage décalé sur écran mobile, nécessité de zoomer pour lire les explications, entachant immédiatement votre crédibilité." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                    <div>
                      <strong className="text-slate-900 text-xs block mb-0.5">{item.title}</strong>
                      <p className="text-slate-600 text-[11px] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column AFTER */}
            <div className="bg-blue-950/20 border border-blue-500/20 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-4">
                <h3 className="font-bold text-blue-300 font-display text-base tracking-tight flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Après refonte VSW Digital</span>
                </h3>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase font-bold">Optimisé</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Vitesse d'affichage sous les 1.5s", text: "Code compact, chargement différé des ressources secondaires et conversion de chaque image aux formats de nouvelle génération (WebP/AVIF)." },
                  { title: "Tunnels de conversions clairs et visibles", text: "Boutons d’appels immédiats pour mobile, preuves de rigueur (avis, labels d'expertise, décennale) distillés stratégiquement pour rassurer." },
                  { title: "Maillage local performant pour les robots", text: "Mots-clés étudiés, sémantique conforme et données structurées insérées proprement pour indexation optimale sur votre rayon géographique." },
                  { title: "Design fluide et responsive pixel-perfect", text: "Une page étudiée pour s’adapter instantanément et avec la même élégance visuelle sur ordinateurs, tablettes pros et smartphones." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 bg-[#0d1222] border border-blue-950 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <div>
                      <strong className="text-slate-100 text-xs block mb-0.5">{item.title}</strong>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTORS TARGET - Who is this useful for */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Expertise Métier</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Pour quels secteurs d’activités la refonte est-elle primordiale ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
              Rénovation, gros œuvre, conseils pros ou artisans régionaux : un prospect consciencieux parcourt toujours votre site web pour valider le sérieux de vos devis avant signature.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
            {sectors.map((sector, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200/60 text-slate-755 rounded-xl text-xs font-semibold shadow-sm hover:border-blue-400 hover:bg-white transition-all duration-200">
                {sector}
              </span>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 font-mono mt-8">
            ✓ Nous calibrons la tonalité commerciale et technique selon les priorités réglementaires de chaque corporation.
          </p>
        </div>
      </section>

      {/* 9. FORMULES / OFFRES INDICATIVES */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Propositions Transparentes</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Des paliers de refonte clairs selon votre maturité Web
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Parce que chaque organisation a des priorités distinctes, nous dimensionnons nos accompagnements de refonte de manière méthodique, sans survente inutile.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {offers.map((offer) => (
              <div 
                key={offer.id} 
                className={`bg-white border rounded-[2rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  offer.recommended 
                    ? 'border-blue-550 shadow-xl ring-1 ring-blue-500/20' 
                    : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {offer.badge && (
                  <span className={`absolute -top-3 left-6 px-3 py-1 text-[9px] font-mono uppercase tracking-widest font-black rounded-full border ${
                    offer.recommended 
                      ? 'bg-blue-600 text-white border-blue-500' 
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {offer.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Options d’ingénierie</span>
                    <h3 className="text-xl font-display font-bold text-slate-900">{offer.title}</h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{offer.desc}</p>
                  
                  <div className="border-t border-slate-100 pt-5 space-y-3 text-left">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Détails inclus :</p>
                    <ul className="space-y-2.5">
                      {offer.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-6">
                  <Link
                    to="/contact"
                    className={`w-full text-center block px-6 py-3.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                      offer.recommended 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/10' 
                        : 'bg-slate-950 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Demander mon devis détaillé
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REAL COMPLIANCE / WHY VSW DIGITAL */}
      <section className="py-24 bg-white border-b border-slate-100 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Notre Philosophie</span>
              <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Pourquoi confier la refonte de votre plateforme à VSW Digital ?
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
                Refondre un site implique la sauvegarde de votre réputation locale. Notre méthode pragmatique associe rigueur technique et clarté budgétaire pour s'assurer que vous conservez vos acquis.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-950 font-display text-sm block mb-0.5">Priorité à l'acquisition concrète :</strong>
                    <span className="text-slate-600 text-xs leading-relaxed">Nous n'insérons pas de décoration graphique superflue. Chaque bloc visuel est conçu pour diriger le regard vers le contact.</span>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-950 font-display text-sm block mb-0.5">Rigueur sur la redirection 301 :</strong>
                    <span className="text-slate-600 text-xs leading-relaxed">Nous protégeons scrupuleusement l'historique d’indexation de vos pages de services d’une manière totalement transparente pour les robots de recherche.</span>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-950 font-display text-sm block mb-0.5">Explications sans jargon d’ingénieur :</strong>
                    <span className="text-slate-600 text-xs leading-relaxed">Nous vous exposons l'évolution de votre chantier numérique en termes simples, clairs et sans termes cryptiques.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Charter box */}
            <div className="relative">
              <div className="bg-[#0c1223] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden max-w-sm mx-auto shadow-2xl space-y-6">
                <div className="absolute top-0 right-0 p-4 font-mono text-slate-800 text-6xl select-none font-black opacity-30">VSW</div>
                
                <h4 className="font-bold text-base font-display text-blue-400 flex items-center gap-1.5 border-b border-slate-800 pb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>La Charte d'Éthique VSW Digital</span>
                </h4>
                
                <div className="space-y-4">
                  <div className="border-l border-blue-500 pl-4 space-y-1 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">01. Aucun abonnement caché</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed font-sans">Vous êtes l'unique propriétaire légal de votre site, de son hébergeur et de ses domaines dès le jour de la livraison.</p>
                  </div>

                  <div className="border-l border-blue-500 pl-4 space-y-1 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">02. Pas de faisses garanties SEO</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed font-sans">Nous ne promettons jamais de première place Google en 48h. Nous garantissons une base sémantique et technique rigoureuse validée par Google.</p>
                  </div>

                  <div className="border-l border-blue-500 pl-4 space-y-1 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">03. Code d'Origine Contrôlé</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed font-sans">Aucun assemblage de thèmes lourds qui ralentissent son affichage. Chaque composant est configuré proprement.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-slate-50 text-left border-b border-slate-150">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Réponses d’Experts</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Questions posées fréquemment sur la refonte de site
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
              Ressource de réponses claires et objectives sur les enjeux de transition de votre site existant vers une nouvelle ère.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-4"
                >
                  <span className="font-bold text-slate-900 font-display text-[15px] leading-tight">
                    {faq.q}
                  </span>
                  <div className="shrink-0 p-1 bg-slate-50 border border-slate-200 text-slate-500 rounded-md">
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100">
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. LOWER CTA SECTION - HIGH VALUE CONTACT PUSH */}
      <section className="py-24 bg-[#0a0f1d] text-white relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-[130px]" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider text-[10px] rounded-lg inline-block">
              Analyse &amp; Diagnostic sans engagement
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold tracking-tight">
              Prêt à transformer votre site existant en levier de croissance ?
            </h2>
            <p className="text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto text-sm md:text-base">
              Soumettez-nous simplement l’adresse de votre site web actuel. Nos équipes de techniciens réaliseront une analyse objective et constructive de ses indices réels de performances sans harcèlement commercial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              to="/contact"
              id="cta-contact-bottom"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/15 flex items-center justify-center gap-2"
            >
              <span>Demander mon audit technique gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 text-slate-500 font-mono text-[10px] uppercase">
            <span>RÉPONSE CLAIRE SOUS 24 HEURES • ÉCHANGE TOTALEMENT SANS ENGAGEMENT</span>
          </div>
        </div>
      </section>

    </div>
  );
}
