import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Settings, 
  Database, 
  Zap, 
  Users, 
  Lock, 
  BarChart, 
  Layers, 
  ShieldAlert, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Smartphone, 
  Activity, 
  FileCheck, 
  TrendingUp, 
  Cpu, 
  Server, 
  Bot, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  AlertTriangle,
  ChevronRight,
  Check,
  MousePointerClick,
  Calendar,
  DollarSign
} from 'lucide-react';

const problemsBeforeAfter = [
  {
    before: {
      title: "Excel et e-mails éparpillés",
      desc: "Vos chantiers, fichiers clients et commandes sont dispatchés entre 12 fichiers différents, provoquant des erreurs de saisie quotidiennes."
    },
    after: {
      title: "Base de données centralisée",
      desc: "Une source unique de vérité. Vos équipes partagent le statut en temps réel, sur smartphone, tablette et bureau."
    }
  },
  {
    before: {
      title: "Envoi de pièces sensibles par e-mail",
      desc: "Vos clients envoient leurs pièces d'identité ou RIB par e-mail. C'est lent, non sécurisé et souvent perdu dans les spams."
    },
    after: {
      title: "Espace client hautement sécurisé",
      desc: "Un portail privatisé chiffré AES-256 où le client dépose ses documents en un clic, directement validés et stockés."
    }
  },
  {
    before: {
      title: "Tâches à répétition manuelles",
      desc: "Votre secrétariat perd 10 heures par semaine à copier-coller des données, générer des PDF de devis et relancer par SMS."
    },
    after: {
      title: "Automatisation via Webhooks",
      desc: "Génération automatique de documents signables, notifications SMS de rappel de paiement et synchronisation bancaire automatique."
    }
  },
  {
    before: {
      title: "Logiciels rigides du commerce",
      desc: "Vous payez des abonnements hors de prix pour des CRM ultra-complexes que vos équipes n'utilisent qu'à 15%."
    },
    after: {
      title: "Outil métier 100% sur mesure",
      desc: "Chaque bouton, tableau et indicateur correspond à votre quotidien exact. Zéro bruit visuel, adoption immédiate."
    }
  }
];

const benefits = [
  { 
    icon: Database, 
    title: "Centralisation & Source unique", 
    desc: "Fini les fichiers Excel obsolètes ou les post-its éparpillés. Regroupez l'ensemble de votre savoir-faire de manière ordonnée : clients, chantiers, contrats et factures sur le même outil." 
  },
  { 
    icon: Users, 
    title: "Suivi opérationnel infaillible", 
    desc: "Visualisez en un coup d'œil l'état d'avancement de chaque commande ou dossier en cours, assignez des tâches à vos collaborateurs et réduisez les délais de traitement." 
  },
  { 
    icon: Bot, 
    title: "Automatisation de vos process", 
    desc: "Faites faire le travail pénible par votre application : relances automatiques de documents manquants, génération de devis normalisés et alertes intelligentes." 
  },
  { 
    icon: Lock, 
    title: "Sécurité & RGPD au repos", 
    desc: "Bénéficiez du chiffrement des fichiers au repos et en transit. Contrôlez finement la visibilité des fichiers confidentiels selon le niveau de chaque employé." 
  },
  { 
    icon: Layers, 
    title: "Image de marque haut de gamme", 
    desc: "Proposez à vos propres partenaires et clients finaux un portail professionnel pour stocker leurs factures, consulter des plannings et signer leurs PV de chantiers." 
  },
  { 
    icon: TrendingUp, 
    title: "Évolutivité sans limites", 
    desc: "Vous êtes propriétaire total de votre code (pas d'abonnement captif). Ajoutez de nouveaux écrans au fur et à mesure de votre croissance réelle." 
  }
];

const appTypes = [
  { 
    icon: Users, 
    tag: "Sécurité & Validation",
    title: "Portail client & Dépôt sécurisé", 
    desc: "Un espace privé vérifié par mot de passe ou lien magique. Vos clients y complètent leurs formulaires, règlent leurs factures et déposent leurs justificatifs confidentiels.",
    useCase: "Idéal pour : Cabinets comptables, assureurs, promoteurs de chantiers, prestataires B2B."
  },
  { 
    icon: BarChart, 
    tag: "Pilotage en temps réel",
    title: "Tableau de bord de pilotage (KPIs)", 
    desc: "Toutes vos données d'activité transformées en graphes automatiques interactifs. Exportez des analyses en PDF/Excel en un instant pour piloter vos liquidités.",
    useCase: "Idéal pour : Dirigeants, directeurs commerciaux, franchisés."
  },
  { 
    icon: Settings, 
    tag: "Efficacité terrain",
    title: "Outil de gestion interne", 
    desc: "Dispatch de tâches pour les équipes terrain ou d'ateliers. Validation étape par étape avec upload de photos géolocalisées, fiches de suivi et gestion de stocks.",
    useCase: "Idéal pour : Artisans du BTP, logisticiens, entreprises de nettoyage, techniciens."
  },
  { 
    icon: Bot, 
    tag: "Connectivité & Flux",
    title: "Automatisation de workflows & connecteurs APIs", 
    desc: "L'application prend le relais : synchronisation automatique avec vos passerelles bancaires (Stripe, banques), envois de notifications SMS/e-mails précis.",
    useCase: "Idéal pour : Sociétés de services B2B, courtiers, e-commerce."
  }
];

const concreteCases = [
  { 
    badge: "Expertise Comptable", 
    title: "Collecte mensuelle de pièces", 
    desc: "Relance hebdomadaire par SMS automatisée pour les clients en retard, upload direct depuis smartphone du client final, lecteur intelligent OCR de factures.",
    roi: "-70% de temps d'administration"
  },
  { 
    badge: "BTP & Toiture", 
    title: "PV de réception de travaux numérique", 
    desc: "Le poseur prend des photos de fin de chantier sur sa tablette, fait signer électroniquement le client final sur l'écran. Notification instantanée avec facture de solde générée.",
    roi: "Paiement de solde accéléré de 11 jours"
  },
  { 
    badge: "Service Client B2B", 
    title: "Portail collaboratif de projets", 
    desc: "Visualisation partagée en temps réel de chaque étape. Les dossiers d'agrément technique sont validés par validation hiérarchique avec historiques des modifications.",
    roi: "+40% de satisfaction client constatée"
  }
];

const methodSteps = [
  { 
    step: "01", 
    title: "Audit Métier & Cartographie", 
    desc: "Nous étudions votre façon de travailler : chaque fichier de données existant, chaque action de secrétariat manuelle et chaque goulot d'étranglement de votre organisation." 
  },
  { 
    step: "02", 
    title: "Définition du MVP (Produit Minimal)", 
    desc: "Nous trions les fonctions prioritaires pour concevoir une première version opérationnelle sous 30 jours, optimisant les coûts et évitant le surplus inutile." 
  },
  { 
    step: "03", 
    title: "Maquette UI Haute Fidélité", 
    desc: "Vous visualisez l'expérience finale avant d'investir dans le développement. Nous validons l'ergonomie, les champs et l'affichage mobile ensemble." 
  },
  { 
    step: "04", 
    title: "Développement robuste Next.js & React", 
    desc: "Nous développons votre solution sur une architecture rapide et moderne, garantissant des interfaces instantanées, des micro-animations de guidage et un typage TypeScript strict." 
  },
  { 
    step: "05", 
    title: "Sécurisation & Cloud Firestore Rules", 
    desc: "Authentification par double facteur en option, et verrous absolus au niveau du stockage cloud Google Cloud. Vos fichiers clients sont invulnerables." 
  },
  { 
    step: "06", 
    title: "Lancement & Propriété Totale", 
    desc: "Nous formons vos équipes de manière intuitive, mettons l'outil en ligne sous votre propre nom de domaine. Le code source vous appartient intégralement." 
  }
];

const stackTechnologies = [
  { name: "Next.js & React 19", desc: "La référence mondiale du web interactif. Chargement quasi-instantané, transition fluide et zéro rafraîchissement d'écran fastidieux." },
  { name: "Firebase (Auth & Firestore)", desc: "L'infrastructure de Google qui gère l'authentification sécurisée des utilisateurs et les données en temps réel avec des coûts de serveurs quasi nuls au lancement." },
  { name: "Google Cloud Storage & AWS", desc: "Stockage cloud ultra-résistant de documents confidentiels. Chaque fichier est chiffré et n'est accessible que via signatures URL temporaires." },
  { name: "Passerelles Tierces & APIs", desc: "Connexion naturelle de vos outils : Stripe (paiements récurrents), Resend (e-mails fiables), Twilio (alertes SMS) ou vos logiciels métiers." }
];

const faqs = [
  { q: "Quelle est la différence entre un site internet et une application web ?", a: "Un site web vitrine a pour but de vous faire connaître et de rassurer vos prospects (coordonnées, services, références). Une application web est un véritable outil interactif sécurisé par un portail de connexion. Elle permet d'effectuer des tâches complexes en direct : uploader des documents, générer des rapports dynamiques, calculer des devis automates, piloter des plannings d'interventions chantiers et interagir avec d'autres bases de données." },
  { q: "Qu'est-ce qu'un MVP et pourquoi est-ce la meilleure option ?", a: "Un MVP (Minimum Viable Product) est la version la plus pragmatique et rapide de votre outil. Au lieu de payer pour un cahier des charges massif pendant 12 mois sans tester, nous isolons ses 3 briques indispensables. Vous la mettez sur le terrain en 4 à 8 semaines, commencez à faire travailler vos équipes et à économiser. Nous complétons ensuite les fonctionnalités secondaires à partir des retours concrets." },
  { q: "Suis-je propriétaire de mon application et du code source ?", a: "Oui, à 100%. Chez VSW Digital, pas d'engagement ou de forfait captif de développement. Le code source est déposé sur votre compte GitHub privé. Vous êtes totalement indépendant et possédez l'intégralité de la propriété intellectuelle de votre outil." },
  { q: "Combien coûte le développement d'une application sur mesure ?", a: "Chaque application est calibrée selon son nombre d'écrans techniques et d'intégrations nécessaires. En utilisant la philosophie progressive du MVP, nous démarrons souvent sur des budgets pragmatiques et adaptés aux PMEs, d'autant que l'infrastructure de départ (Firebase) est quasi-gratuite pour les volumes initiaux. Contactez-nous pour recevoir une estimation budgétaire précise sans engagement." },
  { q: "L'outil sera-t-il fluide sur smartphone et tablette ?", a: "Absolument. Toutes nos applications intègrent un design responsive de pointe. Vos techniciens sur le terrain peuvent l'utiliser facilement pour prendre des photos ou valider une étape, tandis que vous pilotez l'activité sur grand écran depuis votre bureau." }
];

export function ApplicationsWeb() {
  const [activeTab, setActiveTab] = useState<'docs' | 'workflow' | 'analytics'>('docs');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quick Calculator state
  const [estimatedUsers, setEstimatedUsers] = useState<number>(5);
  const [hasClientPortal, setHasClientPortal] = useState<boolean>(true);
  const [needAutomatisation, setNeedAutomatisation] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Application Web Sur Mesure & Portails Clients | VSW Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "VSW Digital conçoit des applications web sur mesure, portails clients sécurisés et CRM légers. Boostez l'efficacité de votre PME avec Next.js et Firebase.");
    }
  }, []);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen text-slate-900 leading-relaxed font-sans mt-16 scroll-smooth">
      
      {/* 1. HERO SECTION - High-tech, Premium & Immersive */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-slate-950 text-white">
        {/* Deep ambient glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-modern-purple/15 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-electric-blue font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20">
                <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
                Next.js, React & Cloud Solutions
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] text-white tracking-tight">
                Application web sur mesure pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan-400 to-modern-purple">digitaliser votre activité</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                VSW Digital développe vos outils métiers, portails clients sécurisés et applications de gestion cloud. Gagnez en productivité immédiate et offrez à vos clients l'expérience premium qu'ils attendent.
              </p>

              {/* Technologies logos pill */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-mono mr-2">Propulsé par :</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Next.js 19</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">React & TS</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Firebase Auth</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">Google Cloud</span>
              </div>

              {/* Trust signals & Call to actions */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="group px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/30 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2"
                  >
                    Estimer le coût de mon application
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="#solutions" 
                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                  >
                    Découvrir nos cas d'usage
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <Check className="h-4 w-4 text-electric-blue" /> Diagnostic gratuit
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <Check className="h-4 w-4 text-electric-blue" /> Code 100% votre propriété
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <Check className="h-4 w-4 text-electric-blue" /> Hébergement européen sécurisé
                  </div>
                </div>
              </div>
            </motion.div>

            {/* High-fidelity Interactive Mockup Card Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric-blue/20 to-modern-purple/20 rounded-[2.5rem] blur-2xl pointer-events-none"></div>
              
              <div className="relative bg-slate-900/90 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl overflow-hidden">
                {/* Simulated window header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Lock className="h-3 w-3 text-emerald-400 inline" /> Chiffré en continu (AES-256)
                  </div>
                </div>

                {/* Simulated Interactive Tab selectors */}
                <div className="flex gap-2 mb-5 bg-slate-950 p-1.5 rounded-xl border border-white/5">
                  <button 
                    onClick={() => setActiveTab('docs')}
                    className={`flex-1 flex items-center justify-center gap-1.5 text-xs py-2 px-1 rounded-lg font-semibold transition-all ${activeTab === 'docs' ? 'bg-electric-blue text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    <FileText className="h-3.5 w-3.5" /> Client Portal
                  </button>
                  <button 
                    onClick={() => setActiveTab('workflow')}
                    className={`flex-1 flex items-center justify-center gap-1.5 text-xs py-2 px-1 rounded-lg font-semibold transition-all ${activeTab === 'workflow' ? 'bg-electric-blue text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    <CheckCircle className="h-3.5 w-3.5" /> Workflow
                  </button>
                  <button 
                    onClick={() => setActiveTab('analytics')}
                    className={`flex-1 flex items-center justify-center gap-1.5 text-xs py-2 px-1 rounded-lg font-semibold transition-all ${activeTab === 'analytics' ? 'bg-electric-blue text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    <BarChart className="h-3.5 w-3.5" /> Analytics
                  </button>
                </div>

                {/* Interactive Dynamic Content view */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'docs' && (
                      <motion.div 
                        key="docs"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-4"
                      >
                        <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                          <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            <span>Dépôt de pièces</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                              En attente de validation
                            </span>
                          </div>
                          
                          <div className="mt-3 p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                            <span className="text-slate-200 flex items-center gap-2">
                              <FileText className="h-4 w-4 text-electric-blue" /> IBAN_Dupont_Sarl.pdf
                            </span>
                            <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-0.5 rounded text-[10px]">Valider</span>
                          </div>
                          <div className="mt-2 p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                            <span className="text-slate-200 flex items-center gap-2">
                              <FileCheck className="h-4 w-4 text-emerald-400" /> KBIS_Valide_2026.pdf
                            </span>
                            <span className="text-slate-400 text-[10px]">Déjà validé</span>
                          </div>
                        </div>

                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Users className="h-4 w-4 text-cyan-400" />
                            <div>
                              <p className="text-[11px] text-slate-400">Dernier accès client</p>
                              <p className="text-xs text-white font-semibold">Dupont Sarl - Il y a 5 min</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500">IP: 92.154.*.*</span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'workflow' && (
                      <motion.div 
                        key="workflow"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between p-3 bg-slate-950 border border-white/5 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center font-bold text-xs">
                              ✓
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Étape 1: Planification</p>
                              <p className="text-[10px] text-slate-400">Validé par technicien #01</p>
                            </div>
                          </div>
                          <span className="text-[10.5px] text-slate-500">14 Juin</span>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-slate-950 border border-white/5 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-electric-blue/10 border border-electric-blue/20 text-electric-blue rounded-lg flex items-center justify-center font-bold text-xs animate-pulse">
                              →
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">Étape 2: Intervention site</p>
                              <p className="text-[10px] text-slate-300 font-medium">En cours - Photo requise</p>
                            </div>
                          </div>
                          <span className="text-[10.5px] text-electric-blue bg-electric-blue/10 px-2 py-0.5 rounded font-mono font-bold text-[9px]">Aujourd'hui</span>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 bg-slate-900 border border-dashed border-white/10 rounded-xl text-[11px] text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Étape 3: Clôture & Facture de solde Stripe</span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'analytics' && (
                      <motion.div 
                        key="analytics"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                            <span className="text-[10px] text-slate-400 block font-mono">DÉLAI MOYEN</span>
                            <span className="text-xl font-display font-extrabold text-white">2.4 jours</span>
                            <span className="text-[9px] text-emerald-400 block mt-0.5 font-semibold">↓ -4.1 jours (Excel)</span>
                          </div>
                          <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                            <span className="text-[10px] text-slate-400 block font-mono">SAUVEGARDÉ</span>
                            <span className="text-xl font-display font-extrabold text-white">41 heures / mois</span>
                            <span className="text-[9px] text-purple-400 block mt-0.5 font-semibold">Gain de marge directe</span>
                          </div>
                        </div>

                        {/* Custom visual CSS mini chart */}
                        <div className="bg-slate-950 p-3.5 rounded-xl border border-white/5 space-y-2">
                          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                            <span>Marge d'Efficacité Interne</span>
                            <span className="text-white font-bold">94% d'amélioration</span>
                          </div>
                          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                            <div className="w-[94%] bg-gradient-to-r from-electric-blue to-cyan-400 h-full rounded-full"></div>
                          </div>
                          <span className="text-[10px] text-slate-500 block">Données consolidées Next.js/Firestore</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PROOF STRIP - Realism & Trust */}
      <section className="bg-slate-900 text-white/80 py-6 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap items-center justify-around gap-y-6 gap-x-12 text-center">
            <div>
              <p className="text-2xl font-display font-black text-white">Next.js</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-1">Vitesse maximale</p>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-2xl font-display font-black text-white">Firebase</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-1">Données 100% sécurisées</p>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-2xl font-display font-black text-white">0% Captif</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-1">Propriété totale</p>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>
            <div>
              <p className="text-2xl font-display font-black text-white">RGPD</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mt-1">Hébergement Souverain</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION PAIN POINTS COMPARATOR - "Avant vs Après" - Deep Persuasive Psychology */}
      <section className="py-28 px-6 bg-white relative">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-rose-500 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-rose-50 border border-rose-100 rounded-full">
              L'enjeu réel
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">
              Pourquoi remplacer vos processus manuels par un outil sur mesure ?
            </h2>
            <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-base md:text-lg">
              De nombreuses PME et commerces perdent des opportunités de vente et un temps précieux à cause d'outils rigides ou de processus éparpillés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Chaotic Before Column */}
            <div className="bg-rose-50/40 border border-rose-100 rounded-3xl p-8 lg:p-10 space-y-8 relative">
              <div className="absolute top-6 right-6 text-xs text-rose-500 bg-rose-100 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Avant VSW Digital
              </div>
              
              <h3 className="text-2xl font-display font-extrabold text-slate-900 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">✕</span>
                L'enfer de l'administration manuelle
              </h3>

              <div className="space-y-6">
                {problemsBeforeAfter.map((item, idx) => (
                  <div key={idx} className="pb-6 border-b border-rose-100 last:border-0 last:pb-0">
                    <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-rose-500" />
                      {item.before.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {item.before.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Optimized After Column */}
            <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 lg:p-10 space-y-8 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute top-6 right-6 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-emerald-500/20">
                La Solution Sur Mesure
              </div>
              
              <h3 className="text-2xl font-display font-extrabold text-white flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm">✓</span>
                L'efficacité cloud instantanée
              </h3>

              <div className="space-y-6">
                {problemsBeforeAfter.map((item, idx) => (
                  <div key={idx} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                    <h4 className="font-bold text-base text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                      {item.after.title}
                    </h4>
                    <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                      {item.after.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center pt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-xl font-bold hover:bg-electric-blue transition-colors shadow-lg shadow-slate-900/10"
            >
              Remplacer mes fichiers Excel compliqués
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. SECTION BENEFITS - Six pillars of custom engineering */}
      <section className="py-28 px-6 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-electric-blue font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              Vos Bénéfices métier
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">
              Des gains de marge opérationnelle mesurables
            </h2>
            <div className="h-1 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-base md:text-lg">
              Parce que chaque écran est pensé pour vos processus de travail réels, et non l'inverse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="group p-8 bg-white border border-slate-100/80 rounded-[2rem] hover:border-electric-blue/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-electric-blue/10 transition-colors duration-300 mb-6 border border-slate-100">
                    <b.icon className="h-6 w-6 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION TYPES D'APPLICATIONS (Sleek High-End Presentation) */}
      <section id="solutions" className="py-28 bg-slate-950 text-white px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/5 rounded-full filter blur-[150px] pointer-events-none"></div>

        <div className="container relative mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-cyan-400 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
              Notre domaine d'intervention
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white">
              Quel type de solution pouvons-nous bâtir ?
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
              Du simple portail client hautement chiffré aux interfaces de planification d'équipes complexes connectées en temps réel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((app, idx) => (
              <div key={idx} className="p-8 bg-slate-900 border border-white/5 hover:border-white/10 rounded-[2rem] transition-all flex flex-col justify-between space-y-6 shadow-lg group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-electric-blue/10 transition-colors">
                      <app.icon className="h-6 w-6 text-cyan-400 group-hover:text-electric-blue" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-cyan-400/80 bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                      {app.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold font-display text-white">
                    {app.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-xs text-slate-400 italic">
                  {app.useCase}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CONCRETE CASE STUDIES ("Sur le terrain" - Premium Mini Cards) */}
      <section className="py-28 bg-white px-6">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-electric-blue font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              Des Retours mesurés
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">
              Des cas d'usage concrets avec ROI immédiat
            </h2>
            <div className="h-1 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-base md:text-lg">
              Comment VSW Digital a transformé l'administration quotidienne et la productivité d'entreprises locales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {concreteCases.map((c, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:scale-[1.01] transition-all flex flex-col justify-between min-h-[300px] shadow-sm">
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full shadow-sm">
                    {c.badge}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900">{c.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>

                <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Performance validée</span>
                  <span className="text-xs md:text-sm font-extrabold text-emerald-600 bg-emerald-100/50 px-2.5 py-1 rounded-lg">
                    {c.roi}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PROGRESSIVE WORKFLOW / MVP METHOD - High Trust Factor */}
      <section className="py-28 bg-slate-50 px-6 border-b border-slate-100 relative">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-emerald-600 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              Zéro risque d'investissement
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">
              La méthode MVP (Minimum Viable Product) pour sécuriser vos coûts
            </h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Nous refusons de vous surfacturer des fonctionnalités inutiles. Nous lançons un outil simple, concret et efficace sous 4 à 8 semaines, validé avec vos équipes, puis nous l'améliorons progressivement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {methodSteps.map((m, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl relative overflow-hidden shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-extrabold font-display text-slate-200 block mb-4">
                    {m.step}
                  </span>
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. TECHNOLOGIES STRAP & DETAILS (More Credibility on Next.js, Firebase) */}
      <section className="py-28 bg-white px-6">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-electric-blue font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              Architecture & Sécurité
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">
              Des technologies modernes, sans frais d'infrastructure cachés
            </h2>
            <div className="h-1 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-base md:text-lg">
              Nous développons des applications avec les frameworks utilisés par les géants de la Tech, pour une réactivité parfaite et une sécurité de niveau bancaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stackTechnologies.map((tech, idx) => (
              <div key={idx} className="p-7 bg-slate-50 border border-slate-100 rounded-[2rem] space-y-4 hover:border-electric-blue/20 transition-all">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 text-electric-blue font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-extrabold text-lg text-slate-900 font-display">
                  {tech.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INTERACTIVE TCO / SCOPE ESTIMATOR - High Conversion Hook */}
      <section className="py-24 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-electric-blue/15 rounded-full blur-[80px]"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-slate-950 p-8 md:p-16 rounded-[2.5rem] border border-white/5 relative">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-electric-blue uppercase tracking-widest block">Estimez votre besoin</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white leading-tight">
                Simulez la structure de votre application en 2 secondes
              </h2>
              <p className="text-sm text-slate-300">
                Ajustez les paramètres ci-contre pour configurer les intégrations typiques et estimer la durée approximative du projet de développement.
              </p>

              {/* Slider form field */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Nombre d'utilisateurs simultanés (équipes, techniciens) :</span>
                    <span className="text-emerald-400 font-bold">{estimatedUsers} collaborateurs</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={estimatedUsers} 
                    onChange={(e) => setEstimatedUsers(parseInt(e.target.value))}
                    className="w-full accent-electric-blue bg-white/5 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Switch choices */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <label className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={hasClientPortal} 
                      onChange={() => setHasClientPortal(!hasClientPortal)}
                      className="rounded border-white/10 text-electric-blue focus:ring-slate-950 h-4 w-4"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Espace client sécurisé</p>
                      <p className="text-[10px] text-slate-400">Pour dépôt de justificatifs</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={needAutomatisation} 
                      onChange={() => setNeedAutomatisation(!needAutomatisation)}
                      className="rounded border-white/10 text-electric-blue focus:ring-slate-950 h-4 w-4"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Automatisation complexe</p>
                      <p className="text-[10px] text-slate-400">Génération de PDF & SMS</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Simulated Live estimate response box */}
            <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-8 border border-white/10 shadow-xl text-center space-y-6">
              <Sparkles className="h-10 w-10 text-cyan-400 mx-auto animate-pulse" />
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">Délai estimé de livraison MVP</p>
                <p className="text-3xl md:text-4xl font-display font-extrabold text-white mt-1">
                  {hasClientPortal && needAutomatisation ? "6 à 8 semaines" : "4 à 6 semaines"}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4 text-left">
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Hébergement cloud à frais fixes réduits</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Propriété du code source garantie</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Suivi de projet en direct sur Trello/GitHub</p>
              </div>

              <Link 
                to="/contact"
                className="w-full block text-center py-4 bg-electric-blue hover:bg-white hover:text-navy-900 text-white rounded-xl text-xs font-bold transition-all shadow-xl shadow-electric-blue/20"
              >
                Valider l'estimation avec un expert (Gratuit)
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FAQS - Complete Refinement */}
      <section className="py-28 bg-slate-50 px-6 border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="inline-block text-electric-blue font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              Vous avez des questions ?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">
              Questions fréquentes de cadrage
            </h2>
            <div className="h-1 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Tout ce que vous devez savoir pour démarrer sereinement votre projet de digitalisation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100/80 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 hover:text-electric-blue transition-colors gap-4"
                >
                  <span className="text-sm md:text-base leading-tight font-display">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-electric-blue' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="py-28 bg-gradient-to-br from-slate-950 to-navy-950 text-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue/15 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container relative mx-auto max-w-4xl space-y-8">
          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">Parlons de vos chiffres</span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight">
            Vous avez une idée d'application métier ou de portail client ?
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Profitez d'un premier rendez-vous de diagnostic 100% gratuit et sans engagement. Nous cartographions vos fichiers actuels et vous proposons une feuille de route MVP chiffrée.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-slate-950 transition-all shadow-xl shadow-electric-blue/30 text-center w-full sm:w-auto"
            >
              Prendre rendez-vous (Consultation Offerte)
            </Link>
            <p className="text-xs text-slate-400 font-medium">
              ✓ Évaluation technique • ✓ Zéro engagement
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
