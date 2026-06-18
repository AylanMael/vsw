import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronRight, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
  ExternalLink, 
  Database, 
  Code, 
  Cloud, 
  Search, 
  Megaphone, 
  ArrowRight, 
  Layout, 
  MessageSquare, 
  Settings, 
  Layers, 
  ShieldCheck, 
  Eye, 
  TrendingUp, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Truck, 
  Wrench, 
  Server, 
  Workflow, 
  Users, 
  Check,
  Building,
  Activity,
  ArrowUpRight,
  Bookmark,
  Plus
} from 'lucide-react';

export const metadata = {
  title: 'Réalisations web, SEO et applications sur mesure | VSW Digital',
  description: 'Découvrez les réalisations, démonstrateurs et études de cas de VSW Digital : sites internet, SEO, Google Ads, applications web, espaces clients, cloud et automatisation.',
};

// Project definition
interface Project {
  id: string;
  title: string;
  type: 'Démonstrateur' | 'Projet type' | 'Étude de cas anonymisée' | 'Cas d’usage';
  category: string;
  filterCategories: string[]; // matched category terms for easy filtering
  url: string;
  description: string;
  probleme: string;
  solution: string;
  benefices: string;
  technologies: string[];
  ctaText: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Démonstrateur espace client avec dépôt de documents',
    type: 'Démonstrateur',
    category: 'Application web',
    filterCategories: ['applications-web', 'demonstrateurs'],
    url: '/demo-espace-client',
    description: 'Exemple d’application web sur mesure permettant aux clients de déposer des documents, suivre leur dossier et recevoir des notifications, avec un portail administrateur pour gérer les statuts.',
    probleme: 'Les documents étaient dispersés entre emails, fichiers et suivis manuels.',
    solution: 'Un espace client sécurisé, un tableau de bord administrateur, des statuts de traitement et des notifications automatiques.',
    benefices: 'Gain de temps, meilleure organisation, expérience client plus professionnelle, centralisation des documents.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Firestore', 'Firebase Storage', 'Tailwind CSS'],
    ctaText: 'Tester le démonstrateur'
  },
  {
    id: 'project-2',
    title: 'Site vitrine professionnel pour entreprise de services',
    type: 'Projet type',
    category: 'Site internet',
    filterCategories: ['sites-internet', 'projets-types'],
    url: '/creation-site-internet',
    description: 'Création d’un site professionnel pour présenter les services, rassurer les visiteurs et générer des demandes de contact.',
    probleme: 'L’entreprise avait besoin d’une présence claire, crédible et adaptée aux recherches locales.',
    solution: 'Un site moderne, responsive, structuré par services, avec formulaire de contact, appels à l’action et base SEO.',
    benefices: 'Image plus professionnelle, meilleure lisibilité de l’offre, meilleure capacité à convertir les visiteurs.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SEO technique'],
    ctaText: 'Voir la solution'
  },
  {
    id: 'project-3',
    title: 'Stratégie SEO locale pour entreprise de déménagement',
    type: 'Étude de cas anonymisée',
    category: 'SEO',
    filterCategories: ['seo', 'etudes-de-cas'],
    url: '/referencement-seo',
    description: 'Optimisation SEO pour renforcer la visibilité locale d’une entreprise de services dans un secteur concurrentiel.',
    probleme: 'Le site avait peu de trafic naturel et manquait de pages locales et de contenus structurés.',
    solution: 'Optimisation des pages services, création de contenus SEO, maillage interne, structure Hn, pages locales et suivi Search Console.',
    benefices: 'Meilleure visibilité sur les recherches locales, meilleure compréhension des services par Google, trafic organique plus qualifié.',
    technologies: ['SEO', 'Search Console', 'Suivi de position', 'Maillage interne', 'Données structurées'],
    ctaText: 'Consulter l’étude de cas'
  },
  {
    id: 'project-4',
    title: 'Landing page Google Ads pour générer des demandes de devis',
    type: 'Projet type',
    category: 'Google Ads',
    filterCategories: ['google-ads', 'projets-types'],
    url: '/google-ads',
    description: 'Création d’une page de destination optimisée pour transformer les clics publicitaires en appels ou demandes de devis.',
    probleme: 'Les campagnes envoyaient les visiteurs vers une page trop générale, avec peu d’appels à l’action.',
    solution: 'Une landing page claire, rapide, mobile, orientée conversion, avec formulaire visible, téléphone, preuves de confiance et suivi des conversions.',
    benefices: 'Meilleure cohérence entre annonce et page, meilleure conversion, budget publicitaire mieux exploité.',
    technologies: ['Google Ads', 'Landing page', 'Tracking conversions', 'SEO technique', 'UX conversion'],
    ctaText: 'Voir le projet'
  },
  {
    id: 'project-5',
    title: 'Automatisation de formulaire et notification interne',
    type: 'Cas d’usage',
    category: 'Cloud & automatisation',
    filterCategories: ['cloud-automatisation', 'cas-usages'],
    url: '/cloud-automatisation',
    description: 'Automatisation d’un formulaire de demande avec enregistrement en base de données, notification interne et suivi du statut.',
    probleme: 'Les demandes étaient reçues manuellement par email, sans suivi centralisé.',
    solution: 'Formulaire connecté, stockage dans Firestore, statut de traitement, notification automatique et tableau de suivi.',
    benefices: 'Moins de pertes d’informations, meilleur suivi, traitement plus rapide, organisation plus claire.',
    technologies: ['Next.js', 'Firebase', 'Firestore', 'Cloud Functions', 'Notifications email'],
    ctaText: 'Découvrir le cas d’usage'
  },
  {
    id: 'project-6',
    title: 'Application de gestion documentaire pour activité administrative',
    type: 'Projet type',
    category: 'Application web',
    filterCategories: ['applications-web', 'projets-types'],
    url: '/application-web-sur-mesure',
    description: 'Conception d’un outil permettant de déposer, classer, valider et suivre des documents clients depuis un espace sécurisé.',
    probleme: 'Les dossiers clients nécessitaient beaucoup d’échanges email et un suivi manuel.',
    solution: 'Portail client, tableau de bord admin, statuts, gestion documentaire et notifications.',
    benefices: 'Centralisation, meilleure traçabilité, gain de temps administratif, service client plus professionnel.',
    technologies: ['Next.js', 'React', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Tailwind CSS'],
    ctaText: 'Voir le projet'
  },
  {
    id: 'project-7',
    title: 'Refonte d’un site professionnel vieillissant',
    type: 'Projet type',
    category: 'Refonte site internet',
    filterCategories: ['sites-internet', 'projets-types'],
    url: '/creation-site-internet',
    description: 'Modernisation d’un site existant pour améliorer le design, la lisibilité, le SEO, la vitesse et la conversion.',
    probleme: 'Le site ne reflétait plus le sérieux de l’entreprise et ne générait pas suffisamment de contacts.',
    solution: 'Nouvelle architecture, design moderne, contenus retravaillés, optimisation mobile, SEO technique et CTA plus visibles.',
    benefices: 'Image plus professionnelle, meilleure expérience utilisateur, meilleure capacité à convertir les visiteurs.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SEO technique', 'Web Performance'],
    ctaText: 'Voir le projet'
  },
  {
    id: 'project-8',
    title: 'Tableau de bord de suivi des leads',
    type: 'Démonstrateur',
    category: 'Application web / CRM',
    filterCategories: ['applications-web', 'demonstrateurs'],
    url: '/applications-web',
    description: 'Exemple de mini-CRM permettant de suivre les prospects, statuts, sources de contact, relances et demandes commerciales.',
    probleme: 'Les prospects étaient suivis dans différents fichiers sans vision globale.',
    solution: 'Un tableau de bord centralisant les leads, les statuts, les sources, les priorités et les prochaines actions.',
    benefices: 'Meilleur suivi commercial, moins d’oublis, meilleure organisation, décisions plus rapides.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind CSS'],
    ctaText: 'Essayer la démo'
  }
];

const categoriesFilters = [
  { id: 'all', title: 'Tous' },
  { id: 'sites-internet', title: 'Sites internet' },
  { id: 'seo', title: 'SEO' },
  { id: 'google-ads', title: 'Google Ads' },
  { id: 'applications-web', title: 'Applications web' },
  { id: 'cloud-automatisation', title: 'Cloud & automatisation' },
  { id: 'demonstrateurs', title: 'Démonstrateurs' },
  { id: 'etudes-de-cas', title: 'Études de cas' }
];

const steps = [
  { id: 'step-1', num: '01', title: 'Comprendre le besoin réel', desc: 'Nous analysons en détail vos processus physiques et vos difficultés quotidiennes avant de proposer le moindre bouton.' },
  { id: 'step-2', num: '02', title: 'Identifier les objectifs prioritaires', desc: 'Qu’il s’agisse de doubler vos prospects locaux ou d’économiser 5 heures administratives, nous fixons des indicateurs pragmatiques.' },
  { id: 'step-3', num: '03', title: 'Concevoir une solution claire', desc: 'Maquettes interactives simples, clarté des flux utilisateurs et validation de la structure de l’information.' },
  { id: 'step-4', num: '04', title: 'Développer une version efficace (MVP)', desc: 'Nous privilégions l’efficacité opérationnelle : mise en ligne rapide sous 4 à 8 semaines avec les fonctions vitales.' },
  { id: 'step-5', num: '05', title: 'Améliorer avec les données réelles', desc: 'Une fois l’outil entre vos mains et celles des utilisateurs, nous ajustons et perfectionnons le code sur la base de retours réels.' }
];

const resultsBenefits = [
  { id: 'res-1', icon: Eye, title: 'Plus de visibilité', desc: 'Des positions fortes et durables sur Google là où vos clients vous recherchent activement.' },
  { id: 'res-2', icon: TrendingUp, title: 'Plus de demandes qualifiées', desc: 'Des formulaires et tunnels pensés pour maximiser l’appel à l’action et la prise de contact.' },
  { id: 'res-3', icon: ShieldCheck, title: 'Une meilleure image', desc: 'Un site ou portail premium qui renforce instantanément votre sérieux vis-à-vis des banques, partenaires ou gros clients.' },
  { id: 'res-4', icon: Workflow, title: 'Des processus mieux structurés', desc: 'En finissant-en avec les papiers ou emails volants grâce à un hébergement de fichiers centralisé.' },
  { id: 'res-5', icon: Cpu, title: 'Moins de tâches répétitives', desc: 'Des raccordements automatisés qui synchronisent vos formulaires de devis avec vos agendas ou tableaux internes.' },
  { id: 'res-6', icon: Layers, title: 'Des outils plus évolutifs', desc: 'Grâce à des choix de programmation (React, Firebase) qui permettent d’agrandir votre logiciel d’année en année sans tout réécrire.' }
];

const techList = [
  { id: 'tech-1', group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { id: 'tech-2', group: 'Backend & Cloud', items: ['Firebase (Firestore / Storage)', 'Google Cloud', 'AWS', 'APIs & Webhooks'] },
  { id: 'tech-3', group: 'Marketing & SEO', items: ['SEO Technique (Sémantique)', 'Google Ads', 'WordPress (si adapté)'] }
];

const sectors = [
  { id: 'sec-1', name: 'Déménagement', icon: Truck },
  { id: 'sec-2', name: 'Sécurité privée', icon: ShieldCheck },
  { id: 'sec-3', name: 'Rénovation', icon: Wrench },
  { id: 'sec-4', name: 'Domiciliation d’entreprise', icon: Building },
  { id: 'sec-5', name: 'Cabinet comptable', icon: FileText },
  { id: 'sec-6', name: 'Formation', icon: GraduationCap },
  { id: 'sec-7', name: 'Transport & Logistique', icon: Truck },
  { id: 'sec-8', name: 'Réparation téléphone', icon: Cpu },
  { id: 'sec-9', name: 'Commerce local', icon: Layout },
  { id: 'sec-10', name: 'Laverie automatique', icon: Settings },
  { id: 'sec-11', name: 'Services aux entreprises', icon: Briefcase },
  { id: 'sec-12', name: 'BTP & Construction', icon: Wrench },
  { id: 'sec-13', name: 'Nettoyage professionnel', icon: Activity },
  { id: 'sec-14', name: 'Professions indépendantes', icon: Users }
];

const faqs = [
  {
    q: "Présentez-vous uniquement des projets clients réels ?",
    a: "Non, et nous le précisons de manière totalement transparente. Nous présentons à la fois des projets types, des études de cas réelles anonymisées pour préserver la confidentialité stratégique de nos clients, ainsi que des démonstrateurs interactifs fonctionnels. Cela vous permet d’évaluer concrètement nos compétences et l'expérience utilisateur finale."
  },
  {
    q: "Qu’est-ce qu’un démonstrateur ?",
    a: "Un démonstrateur est une application web testable en direct. C'est un prototype fonctionnel complet conçu par notre agence (comme notre portail de dépôt de documents et d'alertes) qui illustre nos compétences en développement, design d'interface et cloud, sans pour autant exposer des données confidentielles réelles."
  },
  {
    q: "Peut-on adapter un démonstrateur à mon entreprise ?",
    a: "Oui, tout à fait. Nos démonstrateurs sont développés avec des architectures réutilisables. Si le flux de notre 'Démonstrateur Espace Client' correspond à votre flux de travail, nous pouvons nous appuyer sur ce socle solide pour le personnaliser et le déployer rapidement pour votre propre entreprise, réduisant ainsi les temps de code."
  },
  {
    q: "Pouvez-vous créer une application similaire pour mon activité ?",
    a: "C’est notre spécialité de prédilection. Après avoir étudié vos besoins (par exemple : portail de souscription, gestionnaire de bons d'intervention terrain, relances bancaires automatiques), nous concevons un outil web sur mesure, sécurisé et ultra-rapide, configuré pour simplifier votre quotidien."
  },
  {
    q: "Pouvez-vous reprendre ou améliorer un site existant ?",
    a: "Oui. Nous débutons toujours par un audit technique de votre site actuel pour voir si son socle est robuste. S’il est trop rigide ou obsolète, nous vous présenterons un scénario de refonte complète optimisée en termes de performance et de conversion. C'est souvent l'option la plus économique sur le moyen terme."
  },
  {
    q: "Travaillez-vous avec des PME et artisans ?",
    a: "Absolument. Nous pensons que le sur-mesure ou le SEO local ne doivent pas être réservés uniquement aux grands groupes du CAC40. Nous créons des outils adaptés au budget de TPE, d'artisans d’Île-de-France et d'indépendants du service, en se concentrant sur les fonctions de haute priorité pour que l'investissement soit très vite amorti."
  },
  {
    q: "Pouvez-vous créer une étude de cas après mon projet ?",
    a: "Oui, avec votre accord explicite, nous serons ravis de valoriser les résultats obtenus (ex. +150% de contacts qualifiés, ou 10 heures par semaine économisées) sous forme de cas d'usage illustré pour votre marque ou la nôtre, tout en respectant scrupuleusement le niveau de confidentialité désiré."
  },
  {
    q: "Les projets sont-ils réalisés avec Next.js, Firebase ou WordPress ?",
    a: "Nous choisissons techniquement nos outils uniquement en fonction du besoin. Pour un logiciel métier rapide requérant une base de données en temps réel et des espaces clients, nous recommandons une architecture Next.js/React couplée à Firebase (Firestore, Cloud Functions). Pour un site de contenu ou un simple blog de services, un CMS comme WordPress ou un site statique ultra-performant sous Tailwind suffira amplement."
  },
  {
    q: "Est-ce que chaque projet inclut le SEO ?",
    a: "La performance technique de référencement naturel (balisages Hn, rapidité de chargement mobile, responsive design, balisages de données structurées) est systématiquement intégrée par défaut dans chaque développement de site et d'application chez nous. Le SEO n'est pas une option, c'est la base de tout projet web professionnel digne de ce nom."
  },
  {
    q: "Comment choisir entre site vitrine, application web ou automatisation ?",
    a: "C'est l'objectif de notre premier appel de cadrage gratuit. Si votre but est simplement d'obtenir un point d'ancrage crédible pour présenter vos services et être trouvé localement sur Google : optez pour un site internet professionnel. Si vous perdez du temps à synchroniser vos fichiers, envoyer des devis, ou échanger des documents par email avec vos clients : l'automatisation de formulaires ou un espace client sur mesure sera l'outil le plus rentable."
  }
];

export function Realisations() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Set document meta-title and scroll to top
    document.title = "Réalisations web, SEO et applications sur mesure | VSW Digital";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filter project when filter updates
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.filterCategories.includes(activeFilter)));
    }
  }, [activeFilter]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO SECTION - Dark slate/navy twilight */}
      <section className="relative py-28 bg-[#0a0f1d] text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-600/25 blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]"></div>
          {/* Subtle tech grid indicator */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-span-12 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col */}
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold tracking-wider uppercase text-blue-400">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Réalisations &amp; études de cas</span>
              </div>
              
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-5xl font-display font-black tracking-tight leading-tight text-white max-w-xl">
                Réalisations web, études de cas et démonstrateurs digitaux
              </h1>
              
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg font-sans">
                Découvrez comment VSW Digital accompagne les entreprises dans la création de sites internet, le référencement SEO, la génération de leads, les applications web sur mesure, le cloud et l’automatisation métier.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  id="cta-contact-hero"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35"
                >
                  Discuter de mon projet
                </Link>
                <a 
                  href="#projects-showcase" 
                  id="cta-projects-hero"
                  className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center"
                >
                  Voir les projets
                </a>
              </div>
            </div>

            {/* Right Col - Interactive Tech Indicators Map */}
            <div className="relative">
              <div className="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md max-w-md mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <Database className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <p className="text-slate-400 text-xs font-mono">VSW Digital Engine</p>
                    <h4 className="text-white font-bold text-sm tracking-wide">Indicateurs de Performance Projets</h4>
                  </div>
                </div>

                {/* Simulated Stack Chart */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Sites vitrines &amp; professionnalisme</span>
                      <span className="text-emerald-400 font-bold">100% Mobile-Friendly</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[100%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>SEO &amp; Visibilité Google Locale</span>
                      <span className="text-blue-400 font-bold">+150% Trafic Moyen</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[95%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Applications Web &amp; Sécurité</span>
                      <span className="text-purple-400 font-bold">Chiffrement AES-256</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[100%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Cloud &amp; Automatisation Métier</span>
                      <span className="text-amber-400 font-bold">-80% Tâches Manuelles</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full w-[88%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                      <span>Génération de leads via Google Ads</span>
                      <span className="text-rose-400 font-bold">Tracking Conversions Précis</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-[92%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-xs text-slate-400 font-mono">Systèmes Cloud Actifs</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Europe-West</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION - Solving real-world business needs */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Notre vision</span>
            <h2 id="intro-title" className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Des projets pensés pour résoudre de vrais besoins métier
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-lg">
              Chaque ligne de code écrite ou stratégie déployée a pour vocation d’apporter une transformation de valeur à votre entreprise locale, agence ou commerce de proximité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-lg">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Améliorer l’image professionnelle</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Présentez une vitrine soignée qui inspire instantanément d’importants clients locaux et surclasse vos concurrents directs.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 font-bold text-lg">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Rendre visible sur Google (SEO)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Apparaissez au moment exact où les clients recherchent activement un artisan ou pro du service dans votre région de couverture.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 font-bold text-lg">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Générer plus de demandes (Google Ads)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Construisez des tunnels d’atterrissage à taux de conversion maximal pour rediriger intelligemment les clics publicitaires Google.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 font-bold text-lg">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Automatiser vos tâches répétitives</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Synchronisez automatiquement vos formulaires en ligne avec vos CRM, emails et outils administratifs pour éradiquer les erreurs.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 font-bold text-lg">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Centraliser des données client</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Conservez tous vos dossiers, factures et formulaires archivés en lieu sûr, accessible en un clic par toute votre équipe.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6 font-bold text-lg">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Améliorer l’expérience client</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Offrez un mini-portail modernisé permettant à vos propres clients de déposer rapidement leurs fichiers de n’importe quel smartphone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERS & GRID SHOWCASE */}
      <section id="projects-showcase" className="py-24 bg-white scroll-mt-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-2">Notre galerie technique</span>
              <h2 id="portfolio-title" className="text-3xl font-display font-bold text-slate-900 tracking-tight">
                Explorez nos exemples et études de cas
              </h2>
            </div>
            
            {/* Interactive Badge Category filters */}
            <div className="flex flex-wrap gap-2 max-w-3xl">
              {categoriesFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full duration-200 transition-all border ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {filter.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group flex flex-col bg-white border border-slate-150 rounded-3xl p-6 lg:p-8 hover:border-slate-300 transition-all duration-300 hover:shadow-xl relative flex-1"
                >
                  {/* Card Header Labels */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-slate-100 pb-4">
                    <span className="font-mono text-xs text-slate-500 font-medium tracking-wide">
                      {project.category}
                    </span>
                    
                    {/* Visual status badge based on type */}
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md uppercase ${
                        project.type === 'Démonstrateur' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : project.type === 'Projet type'
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : project.type === 'Étude de cas anonymisée'
                          ? 'bg-purple-50 text-purple-700 border border-purple-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problème & Solution Box */}
                    <div className="bg-slate-50 rounded-2xl p-4 gap-4 space-y-3 border border-slate-100">
                      <div>
                        <span className="font-bold text-slate-900 text-xs block mb-1">Défis &amp; Problématique :</span>
                        <p className="text-xs text-slate-600 leading-relaxed italic">{project.probleme}</p>
                      </div>
                      <div className="border-t border-slate-200/50 pt-2">
                        <span className="font-bold text-blue-600 text-xs block mb-1">Solution proposée par l'agence :</span>
                        <p className="text-xs text-slate-600 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Bénéfices attendus */}
                    <div>
                      <span className="font-bold text-slate-900 text-xs block mb-1.5">Indicateurs de gains :</span>
                      <p className="text-xs text-emerald-600 font-medium leading-relaxed bg-emerald-50/50 p-2.5 border border-emerald-100/55 rounded-lg">
                        {project.benefices}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">Technologies clés :</span>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-slate-100 border border-slate-200/60 rounded-full text-[10px] text-slate-600 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={project.url}
                      className="w-full sm:w-auto inline-flex items-center justify-between gap-2 px-5 py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all group-hover:bg-blue-600"
                    >
                      <span>{project.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. MAIN FEATURED DEMONSTRATOR SECTION - /demo-espace-client */}
      <section className="py-24 bg-[#0a0f1d] text-white overflow-hidden relative border-t border-b border-slate-950">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-slate-900/10 z-0"></div>
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-blue-500/15 blur-[100px] z-0"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Right side visual simulation inside a web-window mockup layout */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Simulated window header */}
                <div className="bg-slate-955 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-slate-500 font-mono text-[10px]">vsw-customer-space.firebase.app</span>
                  <div className="w-6"></div>
                </div>

                {/* Simulated interface view */}
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Dossier client : #TRANSPORT_IDF</p>
                      <h4 className="text-white font-bold text-sm">Gestion Transport SAS</h4>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md text-[10px] font-bold uppercase animate-pulse">
                      En attente
                    </span>
                  </div>

                  <div className="p-4 bg-slate-800/40 border border-slate-800 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300 font-medium">Glisser vos justificatifs administratifs :</p>
                    <div className="border border-dashed border-slate-700 rounded-lg p-5 text-center hover:border-blue-500 transition-colors pointer-events-none">
                      <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-[11px] text-slate-400">PDF, JPG, PNG (max 5 Mo)</p>
                    </div>
                  </div>

                  {/* Simulated timeline */}
                  <div className="space-y-3">
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Mises à jour récentes :</p>
                    <div className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1"></span>
                      <div>
                        <p className="text-xs font-semibold text-slate-200">Justificatif d’identité validé</p>
                        <p className="text-[10px] text-slate-400 font-mono">11 Juin - Agent VSW</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start opacity-70">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1"></span>
                      <div>
                        <p className="text-xs font-semibold text-slate-200">Nouveau dossier de candidature</p>
                        <p className="text-[10px] text-slate-400 font-mono">10 Juin - Système</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left side text column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold tracking-wider uppercase text-emerald-400 inline-block">
                Solution vedette
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Démonstrateur principal : espace client sécurisé avec dépôt de documents
              </h2>
              
              <p className="text-slate-300 leading-relaxed font-sans text-base">
                Ce démonstrateur illustre le type d’application métier que VSW Digital peut concevoir pour une entreprise qui gère des clients, documents, dossiers et statuts de traitement. Vous pouvez en essayer la version d'essai en direct sur notre site.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300"><strong className="text-white">Espace client sécurisé :</strong> accès privatisé sans mot de passe complexe par lien unique.</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300"><strong className="text-white">Dépôt instantané :</strong> transfert ultra-fluide de fichiers depuis ordinateurs et mobiles.</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300"><strong className="text-white">Dashboard administrateur :</strong> traitement complet des pièces par vos relecteurs.</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300"><strong className="text-white">Notifications automatiques :</strong> alertes programmées via emails ou SMS.</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300"><strong className="text-white">Gestion de statut :</strong> historique des validation de pièces actualisé en direct.</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300"><strong className="text-white">Architecture cloud évolutive :</strong> hébergement sécurisé en Europe (Firebase/Google Cloud).</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/demo-espace-client"
                  id="cta-nav-demo"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Voir le démonstrateur</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  id="cta-contact-demo"
                  className="px-6 py-3 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white rounded-xl font-bold text-sm tracking-wide transition-all"
                >
                  Adapter cette solution à mon activité
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. METHODE DE PRESENTATION DES PROJETS - Comment nous travaillons */}
      <section className="py-24 bg-slate-50 border-b border-slate-150">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Garantie méthodologique</span>
            <h2 id="method-title" className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Comment VSW Digital aborde chaque projet
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
              Nous n'appliquons pas de solutions rigides du commerce. Nous suivons un parcours en 5 étapes pour faire du web un véritable atout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={step.id} className="bg-white border border-slate-200/50 rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-all">
                <span className="font-mono text-4xl font-extrabold text-blue-100 block mb-4">{step.num}</span>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 bg-white border border-slate-200 text-slate-400 p-0.5 rounded-full shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONCRETE RESULTS BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Orienté conversion</span>
            <h2 id="benefits-title" className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Des réalisations orientées résultats
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              Parce que la réussite d’un projet digital se mesure avant tout aux bénéfices concrets générés dans l’entreprise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultsBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-start gap-4 hover:border-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 font-display text-base">{benefit.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES USED SECTION */}
      <section className="py-24 bg-[#0a0f1d] text-white relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-500 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase block">Expertise technique native</span>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Des technologies adaptées à chaque projet
            </h2>
            <p className="text-slate-400 font-sans text-sm md:text-base">
              VSW Digital choisit la technologie selon le besoin, le budget, la maintenabilité et les objectifs à long terme du client. Pas de surenchère compliquée, place au pragmatisme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {techList.map((tech) => (
              <div key={tech.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="font-display font-bold text-sm text-blue-400 border-b border-slate-800 pb-3">{tech.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 rounded-lg text-xs font-mono text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto italic font-sans">
            "Notre principe : n’utilisons la complexité d’une application cloud sur mesure que si votre retour sur investissement est largement garanti par le gain d’efficacité."
          </p>
        </div>
      </section>

      {/* 8. SECTEURS REPRESENTES */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block">Adaptation sectorielle</span>
            <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Des projets adaptés aux métiers de services
            </h2>
            <p className="text-slate-600 font-sans text-sm">
              Quel que soit votre secteur réglementaire ou artisanal, nous modélisons des interfaces adaptées à vos utilisateurs types.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.id} className="bg-white border border-slate-200 rounded-xl p-4 text-center items-center flex flex-col justify-center gap-3 hover:border-blue-500 duration-200 hover:shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-tight block">{sector.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TRANSPARENCE BLOCK */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-3 text-left">
              <h3 className="font-display font-bold text-slate-900 text-lg">
                Des démonstrateurs clairement distingués des projets clients
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Certains projets présentés sont des démonstrateurs interactifs fonctionnels ou des cas d'usage types développés par l'agence. Les démonstrateurs permettent d’illustrer concrètement nos compétences techniques (Next.js, Firebase) sans exposer l’identité, les données stratégiques confidentielles ou l’activité réelle de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EXPANDABLE FAQ WITH STATE ACCORDIONS */}
      <section className="py-24 bg-slate-50 border-t border-slate-150">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase block mb-2">Des réponses transparentes</span>
            <h2 id="faq-title" className="text-3xl font-display font-bold text-slate-900 tracking-tight">
              Foire aux Questions : Réalisations &amp; Fonctionnement
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-350 transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180 bg-blue-50 text-blue-600' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-sans bg-slate-50/40">
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
      <section className="py-24 bg-[#0a0f1d] text-white text-center relative border-t border-slate-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Vous voulez créer un projet digital concret et utile ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Présentez-nous votre activité, vos objectifs et vos difficultés actuelles. VSW Digital vous aide à transformer votre besoin en site web, application, automatisation ou stratégie digitale claire.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              id="cta-contact-final"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 text-base"
            >
              <span>Parler de mon projet</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
