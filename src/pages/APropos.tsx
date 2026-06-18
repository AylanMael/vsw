import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Compass, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Workflow, 
  CheckCircle2, 
  XCircle, 
  Lock, 
  Database, 
  Layout, 
  Search, 
  BarChart3, 
  Code, 
  Server, 
  Wrench, 
  Briefcase, 
  Building, 
  Globe, 
  Terminal, 
  FileText, 
  Laptop, 
  Zap, 
  Activity, 
  HeartHandshake, 
  Cpu
} from 'lucide-react';

interface ValueCard {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

interface ExpertiseItem {
  title: string;
  desc: string;
  badge: string;
  icon: React.ComponentType<any>;
  details: string[];
}

interface DifferenceItem {
  classic: string;
  vsw: string;
}

interface StepItem {
  num: string;
  title: string;
  desc: string;
  subTitle: string;
}

interface TechItem {
  name: string;
  category: string;
  desc: string;
  badge: string;
  icon: React.ComponentType<any>;
  forWho: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const values: ValueCard[] = [
  {
    title: "Clarté Absolue",
    desc: "Nous traduisons la complexité en termes simples. Pas de jargon technique, pas de mystère : vous comprenez exactement ce que nous faisons et pourquoi.",
    icon: Compass
  },
  {
    title: "Rigueur d'Ingénieur",
    desc: "Nous concevons des outils informatiques robustes, documentés et parfaitement sécurisés. Chaque ligne de code est pensée pour durer.",
    icon: ShieldCheck
  },
  {
    title: "Pédagogie & Autonomie",
    desc: "Nous vous formons pour vous donner le plein contrôle. Vous restez propriétaire à 100% de vos outils, de vos accès et de vos données.",
    icon: BookOpen
  },
  {
    title: "Culture du Résultat",
    desc: "Un beau site ne suffit pas. Notre priorité absolue est l'impact concret sur votre activité : appels téléphoniques, demandes de devis, ventes.",
    icon: TrendingUp
  },
  {
    title: "Évolutivité Agile",
    desc: "Nous bâtissons des bases saines. Votre site grandira avec votre entreprise : du simple site vitrine à l'automatisation de tout votre CRM.",
    icon: Zap
  },
  {
    title: "Proximité Francilienne",
    desc: "Ancrés en Île-de-France (Val-de-Marne et Paris), nous aimons nous déplacer pour vous rencontrer, échanger de vive voix et comprendre votre métier.",
    icon: HeartHandshake
  }
];

const expertises: ExpertiseItem[] = [
  {
    title: "Création de sites internet vitrines",
    desc: "Conception sur-mesure de vitrines haut de gamme. Maquettes élégantes pensées pour valoriser votre savoir-faire et capter le visiteur.",
    badge: "Webmastering",
    icon: Layout,
    details: ["Maquettes responsives mobiles", "Optimisation du taux de conversion", "Intégration de fiches Google Maps", "Conformité RGPD et sécurité active"]
  },
  {
    title: "Référencement Naturel (SEO)",
    desc: "Optimisation de votre structure sémantique pour vous positionner durablement en première page Google sur vos mots-clés stratégiques locaux.",
    badge: "Visibilité Locale",
    icon: Search,
    details: ["Étude d'intention de recherche", "Rédaction de pages de services", "Optimisation technique des balises", "Netlinking et autorité locale"]
  },
  {
    title: "Campagnes Google Ads (SEA)",
    desc: "Acquisition de leads qualifiés dès le premier jour. Mise en place de tunnels de conversion précis pour un retour sur investissement mesuré.",
    badge: "Publicité Rentable",
    icon: BarChart3,
    details: ["Recherche de mots-clés payants", "Exclusion stricte des clics inutiles", "Rapport de coût par acquisition", "Création de Landing Pages ultra-rapides"]
  },
  {
    title: "Applications Web & Espaces Clients",
    desc: "Développement d'interfaces logicielles modernes, d'espaces de gestion sécurisés et de tableaux de bord interactifs pour simplifier votre quotidien.",
    badge: "Logiciels Sur-mesure",
    icon: Code,
    details: ["Next.js & React ultra-véloces", "Espaces membres hautement sécurisés", "Intégrations d'API tierces", "Bases de données sécurisées"]
  },
  {
    title: "Cloud & Automatisation de Processus",
    desc: "Éradication des tâches administratives répétitives. Connexion transparente de vos formulaires en ligne à votre logiciel de facturation ou de suivi.",
    badge: "Efficacité Business",
    icon: Workflow,
    details: ["Workflows automatisés (Make, Zapier)", "Architectures serverless robustes", "Sauvegardes multi-cloud automatisées", "Sécurisation Cloud (Firebase/AWS/GCP)"]
  },
  {
    title: "Maintenance Réactive & Évolution",
    desc: "Supervision continue de votre outil pour garantir un fonctionnement ininterrompu, une vitesse optimale et des mises à jour régulières.",
    badge: "Sérénité Totale",
    icon: Wrench,
    details: ["Sauvegardes quotidiennes déportées", "Correctifs d'anomalies sous 24h", "Optimisations continues de vitesse", "Ajustement de contenus inclus"]
  }
];

const sectors = [
  { name: "Déménagement & Logistique", desc: "Calculateurs de volume interactifs, formulaires de devis précis et visibilité SEO locale forte dans le Val-de-Marne." },
  { name: "Sécurité Privée & Gardiennage", desc: "Design institutionnel rutilant, mise en relief des agréments obligatoires (CNAPS) et captation de marchés." },
  { name: "Entreprises du BTP & Rénovation", desc: "Mise en valeur visuelle de vos chantiers, réassurance par avis contrôlés et demandes de rappel téléphonique direct." },
  { name: "Transport de Personnes & VTC", desc: "Système intuitif de simulation de trajet, réservation de course en ligne et fluidité complète sur écran mobile." },
  { name: "Dépannage & Réparation Locale", desc: "Indexation SEO locale d'urgence, grilles tarifaires transparentes et bouton d'appel direct en un clic." },
  { name: "Centres de Formation & CPF", desc: "Valorisation des programmes, téléchargement de catalogue synthétique de formation et conformité Qualiopi obligatoire." },
  { name: "Domiciliation d'Entreprises", desc: "Explication claire des forfaits, conformité juridique, et automatisation de la souscription mensuelle." },
  { name: "Commerçants, Artisans & Libéraux", desc: "Prise de rendez-vous en ligne, horaires clairs, plan interactif et visibilité locale sur Google Business Profile." }
];

const differences: DifferenceItem[] = [
  {
    classic: "Un site standard copié-collé sans réel ciblage de votre clientèle locale.",
    vsw: "Un site conçu scientifiquement pour transformer vos simples visiteurs en clients réels."
  },
  {
    classic: "Un jargon complexe utilisé pour masquer le manque de résultats concrets.",
    vsw: "Une totale clarté pédagogique. Vous comprenez chaque euro investi."
  },
  {
    classic: "Des contrats d'engagement captifs de 24 à 48 mois impossibles à résilier.",
    vsw: "Zéro contrat bloquant. Nos prestations et notre maintenance d'excellence sont sans engagement."
  },
  {
    classic: "Des interlocuteurs commerciaux impersonnels qui changent sans cesse.",
    vsw: "Un ingénieur-concepteur unique, disponible par ligne directe et réactif sous 24h."
  },
  {
    classic: "Un code lourd, difficile à faire évoluer sans devoir tout payer à nouveau.",
    vsw: "Une structure moderne et propre, capable d'évoluer de la vitrine simple vers l'application cloud."
  }
];

const steps: StepItem[] = [
  {
    num: "01",
    title: "Cadrage Compréhensif",
    subTitle: "Comprendre votre vérité commerciale",
    desc: "Nous débutons par un échange approfondi. Pas de technique à cette étape : nous parlons de votre cœur de métier, de la typologie de vos clients, de vos zones géographiques clés et de vos marges."
  },
  {
    num: "02",
    title: "Audit & Alignement",
    subTitle: "Analyser factuellement l'existant",
    desc: "Si vous possédez déjà un site, nous l'analysons (vitesse, SEO, conversion). Sinon, nous concevons une proposition claire de création, chiffrée de manière transparente, pour répondre au besoin réel."
  },
  {
    num: "03",
    title: "Conception Technique",
    subTitle: "Le juste équilibre technologique",
    desc: "Rigueur du génie logiciel : nous concevons une structure épurée, sans plugins superflus. Un code optimisé pour charger instantanément sur smartphone, sécurisé d'office par des bases saines."
  },
  {
    num: "04",
    title: "Sémantique SEO & Positionnement",
    subTitle: "Visibilité sémantique chirurgicale",
    desc: "Nous construisons votre architecture de liens, vos titres de rubriques et vos balises pour plaire aux critères de Google, tout en rédigeant des textes attractifs pour vos clients."
  },
  {
    num: "05",
    title: "Mise en service & Transfert",
    subTitle: "Le plein contrôle vous appartient",
    desc: "Nous assurons la configuration de votre hébergement et le lancement sécurisé. Nous vous formons pas à pas : vous recevez des clés d'accès complètes, vous êtes autonome sur votre administration."
  },
  {
    num: "06",
    title: "Accompagnement Collaboratif",
    subTitle: "La maintenance proactive continue",
    desc: "Nous restons engagés à vos côtés par un suivi réactif mensuel. Vous souhaitez changer un horaire, modifier vos réalisations, ou lier une automatisation ? Nous nous en chargeons sous 24h."
  }
];

const technologies: TechItem[] = [
  {
    name: "WordPress Épuré",
    category: "Site Vitrine & CMS",
    desc: "Notre approche WordPress bannit la lourdeur des templates tout-en-un. Nous construisons des sites vitrines TPE ultra-rapides, sains, sécurisés et facilement modifiables par vos soins.",
    badge: "Sûr & Administrable",
    icon: Layout,
    forWho: "Parfait pour les sites vitrines professionnels locaux"
  },
  {
    name: "React & Next.js",
    category: "Applications Modernes",
    desc: "La crème de la technologie web. Utilisé pour concevoir des sites web haut de gamme, des espaces clients fluides, des calculateurs ou applications web sur mesure avec une vélocité sans égale.",
    badge: "Haute Performance",
    icon: Code,
    forWho: "Recommandé pour les outils interactifs et vitesse absolue"
  },
  {
    name: "TypeScript & Robustesse",
    category: "Qualité Logicielle",
    desc: "Une sur-couche stricte pour JavaScript qui permet de valider la logique avant le déploiement en ligne. Cela élimine plus de 90% des bugs d'affichage rencontrés sur les supports mobiles.",
    badge: "Zéro Bug Graphique",
    icon: Terminal,
    forWho: "Garantie de stabilité pour vos applications critiques"
  },
  {
    name: "Tailwind CSS",
    category: "Design & Expérience",
    desc: "Moteur de style contemporain ultra-léger. Permet d'intégrer des visuels d'une précision chirurgicale et un responsive d'une netteté absolue sur tous les écrans (ordinateurs, tablettes, smartphones).",
    badge: "Responsive Millimétré",
    icon: Laptop,
    forWho: "Intégration mobile et fluidité visuelle sans faille"
  },
  {
    name: "Optimisations SEO & Google Ads",
    category: "Acquisition Cliente",
    desc: "Mise en place des schémas de données structurées et du maillage. Branchement d'outils analytiques fins pour mesurer précisément d'où viennent vos prospects sans masquer de budget.",
    badge: "Mesure du ROI",
    icon: BarChart3,
    forWho: "Essentiel pour générer des chantiers et des contrats"
  },
  {
    name: "Bases de Données Firebase & SQL",
    category: "Backends Modernes",
    desc: "Stockage dynamique crypté en temps réel et authentification sécurisée. Nous mettons en place des liaisons de données fluides pour vos espaces clients sans latence.",
    badge: "Données Sécurisées",
    icon: Database,
    forWho: "Idéal pour piloter vos comptes et formulaires sécurisés"
  },
  {
    name: "Architecture Google Cloud",
    category: "Infrastructure Serverless",
    desc: "Exécution serverless hautement performante et sécurisée de vos routines d'automatisation. Solution fiable de classe entreprise au coût le plus juste.",
    badge: "Forte Fiabilité",
    icon: Server,
    forWho: "Pour les processus d'intégration d'API automatisés"
  },
  {
    name: "Services Cloud AWS",
    category: "Gestion & Sauvegardes",
    desc: "Hébergement élastique, redondance de données mondiale et hébergement du code hautement découplé. Assure que vos données d'entreprise critiques ne soient jamais compromises.",
    badge: "Zéro Perte de Données",
    icon: Cpu,
    forWho: "Parfait pour l'archivage et la continuité d'activité"
  }
];

const faqs: FaqItem[] = [
  {
    q: "VSW Digital est-elle une grosse agence web ou un consultant informatique indépendant ?",
    a: "VSW Digital est une structure agile et à taille humaine, fondée par un ingénieur en informatique diplômé qui assure lui-même l'accompagnement stratégique et le développement technique des projets. Pour les besoins complexes d'identité visuelle avancée ou de campagnes d'envergure, nous mobilisons un réseau d'experts seniors sélectionnés de confiance (designers UI/UX, rédacteurs SEO). Cette configuration vous évite les frais de gestion d'une grosse agence tout en vous garantissant une ligne de conseil directe, réactive et un travail haut de gamme."
  },
  {
    q: "Pourquoi faire appel à un ingénieur informatique plutôt qu'à un prestataire web classique ?",
    a: "Un prestataire classique configure souvent des thèmes lourds qui accumulent des plug-ins non mis à jour, ce qui ralentit le site et l'expose à des piratages. Un ingénieur informatique aborde votre projet avec une culture du génie logiciel : structure de code optimisée, sécurité renforcée d'office, bases de données structurées, performances d'affichage optimales et évolutivité sans devoir tout jeter. De plus, nous associons cette force technique à une démarche pédagogique claire pour tout vous expliquer simplement."
  },
  {
    q: "Puis-je vous confier la création de mon site vitrine si je suis un dirigeant non technique ?",
    a: "C'est précisément notre cœur de métier. Nous prenons le temps d'expliquer chaque décision sans aucun mot barbare. Nous gérons l'intégralité du travail : réservation de votre nom de domaine, configuration sécurisée, mise en page, rédaction sémantique SEO de vos textes, et paramétrage mobile. Vous recevez un outil clés en main et nous vous apprenons de manière conviviale à l'utiliser."
  },
  {
    q: "Comment garantissez-vous que mon site va générer de vraies demandes de devis et clients ?",
    a: "Nous lions systématiquement la technique au commerce. Dès la structure des maquettes, nous mettons en relief les éléments de réassurance indispensable (votre savoir-faire, vos agréments de sécurité, vos assurances décennales, vos avis clients réels). De plus, nous concevons des boutons d'appels mobiles saillants, des formulaires fluides sans étapes inutiles et un positionnement SEO localisé pour être repéré immédiatement sur votre secteur géographique."
  },
  {
    q: "Proposez-vous du référencement naturel (SEO) et des campagnes Google Ads ?",
    a: "Oui, les deux disciplines font partie intégrante de nos plans de déploiement. Nous construisons le référencement naturel dès l'architecture de base du site pour que Google puisse l'étudier favorablement de manière native. Pour une visibilité commerciale immédiate, nous configurons des campagnes de recherche Google Ads méticuleusement construites pour évincer les expressions de recherche superflues et concentrer l'intérêt uniquement sur vos clients potentiaux."
  },
  {
    q: "Développez-vous également des applications web modernes sous React, Next.js ou Firebase ?",
    a: "Absolument. Lorsque votre entreprise a des besoins spécifiques qui dépassent les capacités d'un site vitrine classique (portail utilisateur crypté, tableau de bord automatisé, système d'interventions terrain, outil de devis en temps réel), nous concevons des applications de premier rang avec des bases de données instantanées, le tout hébergé en cloud sécurisé."
  },
  {
    q: "Utilisez-vous WordPress pour les petites structures ?",
    a: "Oui, WordPress est une excellente solution d'acquisition pour de nombreux artisans et commerçants locaux. Cependant, nous y appliquons une charte d'ingénierie stricte : thèmes optimisés de fondation, aucun plug-in inutile qui dégrade la sécurité, traitement rigoureux des formats d'images modernes (WebP) et mise en cache efficace pour garantir la plus haute vitesse d'affichage sur smartphone."
  },
  {
    q: "Que se passe-t-il après la mise en ligne du site ? Suis-je lié par un abonnement ?",
    a: "Non. Une fois le site paramétré et livré, vous êtes légalement propriétaire à 100% de votre site, de votre nom de domaine au code source. Nous vous remettons l'ensemble des clés d'administration globales. Nous proposons un plan d'abonnement de maintenance technique de premier ordre pour assurer les sauvegardes, la sécurité quotidienne et les modifications légères, mais ce plan est strictement sans engagement."
  }
];

export function APropos() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "À propos de notre engagement technique | VSW Digital";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-905 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - Premium Twilight deep canvas with interactive engineer card */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-[#090d1a] text-white overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px] translate-y-1/2" />
          {/* Grid structure overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] opacity-25" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-[11px] font-semibold tracking-wider uppercase text-blue-400 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Notre ADN de Spécialiste</span>
            </span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800/80 font-mono">
              🛠️ Culture Génie Logiciel x Réalité Business
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, SEO integrated copy */}
            <div className="lg:col-span-7 space-y-6">
              <h1 id="about-h1" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-[1.10] text-white">
                À propos de VSW Digital
              </h1>
              
              <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl font-light">
                VSW Digital accompagne les entreprises dans la création de sites internet professionnels, le référencement SEO, Google Ads, les applications web sur mesure, l’automatisation et le cloud. Notre approche associe une solide expertise technique, une vision commerciale de proximité et un accompagnement humain sans jargon pour guider les PME et artisans vers une croissance visible et mesurable.
              </p>

              <p className="text-slate-400 text-sm md:text-md italic max-w-2xl font-light leading-relaxed border-l-2 border-blue-500/50 pl-4 py-1">
                "Nous refusons l'opacité technique des grandes agences pour vous proposer une collaboration directe, agile et extrêmement rigoureuse."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  id="cta-about-speak"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm md:text-base border border-blue-500/30"
                >
                  <span>Échanger sur mon projet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 text-slate-200 rounded-xl font-bold tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <span>Consulter nos services</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Interactive Terminal Credentials Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-[12px] opacity-30 select-none pointer-events-none" />
              <div className="bg-[#0b1022] border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    INGÉNIEUR PROFILE vsw.sh
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400 font-bold block">FORMATION & CRÉDIBILITÉ</span>
                    <h3 className="font-display font-medium text-lg text-white">Ingénieur en Informatique diplômé</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      Algorithmique avancée, structures de données sécurisées, gestion de bases de données distribuées et architecture logicielle d'entreprise.
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-4 border-t border-slate-800/60">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">MAÎTRISE MÉTIER PRATIQUE</span>
                    
                    <div className="space-y-2.5">
                      {[
                        { label: "React / Next.js / TypeScript", val: "95%", style: "bg-blue-500" },
                        { label: "WordPress Épuré & Haute Vitesse", val: "90%", style: "bg-emerald-500" },
                        { label: "SEO Sémantique & Google Local", val: "95%", style: "bg-teal-500" },
                        { label: "Acquisition Paid & Google Ads", val: "88%", style: "bg-amber-500" },
                        { label: "Microservices Cloud (Firebase, AWS, GCP)", val: "85%", style: "bg-indigo-500" },
                      ].map((tech, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-[11px] text-slate-350 font-medium font-mono">
                            <span>{tech.label}</span>
                            <span>{tech.val}</span>
                          </div>
                          <div className="h-1 bg-slate-950 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full ${tech.style}`} 
                              initial={{ width: 0 }}
                              animate={{ width: tech.val }}
                              transition={{ duration: 1.2, delay: i * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500">
                  <span>📍 Val-de-Marne & Île-de-France — Disponible</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SECTION HISTOIRE - Humanizing the founder story & software engineer roots */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-250/20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Box representing the founder's quote & human values */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-[2.50rem] p-8 md:p-10 relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/5 blur-lg rounded-full" />
                
                <span className="font-mono text-[10px] uppercase font-bold text-blue-600 tracking-wider bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
                  Le Visage derrière le code
                </span>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-lg font-bold font-mono">
                      V
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 leading-tight">Valentin</h4>
                      <p className="text-slate-500 text-xs">Directeur Technique & Fondateur</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed italic block font-light">
                    "Après avoir travaillé sur des logiciels bancaires et des plateformes SaaS hautement sécurisées, j'ai constaté que les artisans et dirigeants locaux étaient fatigués des solutions génériques. J'ai conçu VSW Digital pour leur apporter le meilleur du développement et du SEO, avec une immense pédagogie."
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-4 grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase tracking-wider">CULTURE</span>
                    <span className="block font-bold text-slate-800 mt-0.5">Fait main, sans bloatware</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[10px] uppercase tracking-wider">ENGAGEMENT</span>
                    <span className="block font-bold text-slate-800 mt-0.5">Propriétaire à 100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder's story and technical background */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
                L'Origine de VSW Digital
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Une agence née d'un parcours technique et d'une passion pour le web
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full" />
              
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-light">
                <p>
                  VSW Digital a été fondée par un <strong className="text-slate-900 font-semibold">ingénieur en informatique de formation</strong>, passionné par les architectures de code fluides, l'optimisation des performances et les mécanismes de référencement naturel. Issu du développement d'applications logicielles complexes, il s'est rapidement aperçu qu'une faille persistait sur le marché numérique des petites et moyennes entreprises : l'écart grandissant entre l'ingénierie brute complexe et les réalités concrètes d'acquisition client vécues par les artisans et dirigeants sur le terrain.
                </p>
                <p>
                  Fort d'une pratique concrète et éprouvée de la création de sites internet WordPress, il s'est entouré d'experts SEO de confiance pour formuler un accompagnement d'un nouveau type. L'agence réconcilie les meilleures technologies du web moderne (<strong className="text-slate-950 font-medium">React, Next.js, Firebase, AWS et Google Cloud</strong>) avec la rigueur pragmatique d'une gestion webmaster classique quotidienne.
                </p>
                <p>
                  Notre volonté n'est pas de vous vendre un énième site générique standardisé ou une montagne d'abonnements superflus. Nous construisons des outils clairs et sécurisés, conçus pour durer, capturer des clients et vous rassurer à chaque étape grâce à une vulgarisation transparente et un respect rigoureux de votre budget.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SECTION VISION / WHY AN ENGINEER MAKES SENSE */}
      <section className="py-20 md:py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100/60 px-3.5 py-1.5 rounded-full inline-block">
                La Philosophie VSW
              </span>
              <h2 className="text-3xl md:text-4px font-display font-bold text-slate-900 tracking-tight leading-tight">
                Pour nous, un site internet est un investissement stratégique mesurable
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full" />
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Pour VSW Digital, la présence web ne peut pas se limiter à une dépense stérile ou à une simple brochure esthétique passive oubliée dans un coin du web. Un site internet de services ou une plateforme logicielle professionnelle doit agir comme un pivot commercial performant et un atout d'organisation quotidienne.
              </p>

              <div className="bg-[#0f172a] text-white p-6 md:p-8 rounded-2xl border border-slate-800/80 space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
                  <p className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">Une approche technique coordonnée :</p>
                </div>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  L'ingénierie technique n'est rien sans stratégie de visibilité. C'est pourquoi nous lions nativement le développement web à l'optimisation sémantique locale SEO, à la mise en place de campagnes d'acquisition Google Ads ultra-ciblées, à la conversion ergonomique d'audience et à l'automatisation cloud de vos fiches de contacts vers vos outils de travail de manière transparente.
                </p>
              </div>
            </div>

            {/* Right List cards representing the 7 key parameters we embed in websites */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] font-mono uppercase font-black text-slate-400 tracking-wider block mb-1">LES 7 FONDAMENTAUX D'UN SITE RENTABLE</span>
              {[
                { title: "Rassurer et crédibiliser vos visiteurs", desc: "Intégration d'avis Google réels, HTTPS fort, photos authentiques de vos réalisations." },
                { title: "Présenter avec clarté votre offre", desc: "Arborescence ergonomique fluide, pas de jargon complexe ou déroutant." },
                { title: "Se positionner en page 1 Google", desc: "Ciblage chirurgical des mots-clés géolocalisés à forte intention d'achat." },
                { title: "Générer activement des contacts", desc: "Formulaires ergonomiques rapides, boutons d'appels mobiles omniprésents." },
                { title: "Rapidité d'affichage exceptionnelle", desc: "Compression d'images, scripts épurés pour la rapidité mobile (Core Web Vitals)." },
                { title: "Évolutivité de l'architecture", desc: "Modifications aisées sans repartir à zéro pour ajouter un nouveau service." },
                { title: "Interfaçage sémantique & Automation", desc: "Vos formulaires de prospects alimentent automatiquement votre CRM ou boîte email." }
              ].map((vPoint, idx) => (
                <div key={idx} className="bg-white border border-slate-150 rounded-xl p-4 flex gap-3.5 items-start shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-650 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs md:text-sm leading-tight font-display">{vPoint.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-1 font-light">{vPoint.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION VALEURS - Grid of 6 core values with premium styling */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
              Nos Piliers de Confiance
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Des valeurs simples pour un accompagnement sérieux et serein
            </h2>
            <p className="text-slate-605 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Parce que la confiance se mérite par des actes et des livrables concrets, nous alignons toute notre méthodologie sur ces six engagements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex items-start gap-4.5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 font-display text-base md:text-lg leading-tight group-hover:text-blue-600 transition-colors">{val.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SECTION EXPERTISE & TECHNOLOGIES - Detailed analysis of the stack & expertise details */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
              Compétences et Expertises Métier
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Une double expertise à la jonction du web, du SEO et du cloud
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Que ce soit pour optimiser l'arborescence de votre site sémantique local ou configurer des automatisations avancées, nous combinons l'intégralité du cycle de vie de votre projet numérique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertises.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-xl bg-blue-50/50 border border-blue-100/80 text-blue-600 flex items-center justify-center">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-bold text-slate-900 text-base md:text-lg font-display leading-tight">{exp.title}</h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">{exp.desc}</p>
                    </div>

                    {/* Bullet list representing actual deliverables/competency */}
                    <div className="pt-4 border-t border-slate-100/90 space-y-1.5">
                      {exp.details.map((det, i) => (
                        <div key={i} className="flex gap-2 items-center text-[11px] md:text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. EXPANDED TECH STACK DESCRIPTION - Reassurance on WordPress, SEO, React, Next.js, Cloud */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-205/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
            <span className="text-xs font-bold tracking-wider text-slate-600 uppercase bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full inline-block">
              Notre Stack d'Ingénierie
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Des technologies rigoureusement choisies pour la performance
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Pas de posture dogmatique. Nous sélectionnons la meilleure suite technologique en fonction de votre cible d'acquisition commerciale, de votre budget d'hébergement, et de votre autonomie opérationnelle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center w-full">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/85 text-blue-605 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-200/60 border border-slate-300/30 px-2 py-0.5 rounded uppercase">
                        {t.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 text-sm md:text-base font-display">{t.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-light">{t.desc}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10.5px] font-mono text-slate-400 font-light flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{t.forWho}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. SECTION SECTEURS - Empathy-based sectors to capture local trades */}
      <section className="py-20 md:py-28 bg-[#fafbfe] border-b border-slate-210/60">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
              Secteurs d'Intervention
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Des réponses claires et pragmatiques à des contraintes métiers concrètes
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              Nous n'avons pas de posture théorique hors-sol. Nous avons façonné et optimisé des sites pour de nombreux secteurs d'activité, chacun exigeant des parcours utilisateurs spécifiques.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-150 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <h3 className="font-bold text-slate-900 text-sm md:text-base font-display">{sec.name}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance visual quote about experience */}
          <div className="mt-12 md:mt-16 bg-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/10 blur-xl rounded-full" />
            
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-3xl mx-auto text-center italic">
              "Chaque profession locale possède ses leviers sémantiques et de réassurance propres. Un déménageur dans le Val-de-Marne doit faciliter l'évaluation du cubage mobile en quelques clics. Un serrurier parisien exige une visibilité SEO d'urgence et un bouton d'appel joignable sous 2 secondes. Un centre de formation doit rassurer par rapport à Qualiopi et clarifier le parcours CPF. Notre ingénierie s'adapte à la réalité physique de votre quotidien."
            </p>
          </div>

        </div>
      </section>

      {/* 8. SECTION COMPARAISON / DIFFÉRENCE */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
            <span className="text-xs font-bold tracking-wider text-rose-600 bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full inline-block">
              Ce qui nous distingue
            </span>
            <h2 className="text-3xl md:text-4.2xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Pourquoi nous confier votre présence plutôt qu'à une agence classique ?
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              À l'opacité et aux grilles de tarifs exorbitantes des agences traditionnelles déconnectées, nous opposons une structure d'ingénieur directe, éthique et centrée sur la performance réelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Left box: Classic agencies */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                  <XCircle className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg md:text-xl">Agence web traditionnelle</h3>
              </div>
              
              <div className="space-y-4">
                {differences.map((diff, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start text-xs md:text-sm text-slate-500 border-b border-slate-100 pb-3 last:border-0 last:pb-0 font-light">
                    <span className="font-bold text-rose-500 text-md inline-block mt-0.5 shrink-0">✕</span>
                    <span>{diff.classic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right box: VSW approach */}
            <div className="bg-[#0b1022] text-white border border-slate-800/90 rounded-3xl p-6 md:p-10 space-y-6 relative overflow-hidden shadow-2xl ring-1 ring-blue-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/15 blur-2xl rounded-full" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <CheckCircle2 className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg md:text-xl">L'Engagement VSW Digital</h3>
                </div>
                <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded uppercase font-bold tracking-wider">VSW ENGAGE</span>
              </div>
              
              <div className="space-y-4">
                {differences.map((diff, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start text-xs md:text-sm text-slate-200 border-b border-slate-800/60 pb-3 last:border-0 last:pb-0 font-light">
                    <span className="font-bold text-blue-400 text-md inline-block mt-0.5 shrink-0">✓</span>
                    <span className="font-medium text-slate-100">{diff.vsw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. SECTION MÉTHODE DE TRAVAIL - Numbered step timeline */}
      <section className="py-20 md:py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
              Méthodologie Pédagogique
            </span>
            <h2 className="text-3xl md:text-4.5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Une démarche limpide, découpée pas-à-pas en toute confiance
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base max-w-2xl mx-auto font-light">
              La réussite de votre projet tient dans le respect d'une méthode structurée, de la clarification sémantique initiale à l'administration d'hébergement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((st, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between hover:border-blue-505/40 hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="font-mono text-3xl font-extrabold text-blue-600/20">{st.num}</span>
                    <span className="text-[10px] font-mono tracking-wider text-blue-600 bg-blue-50/85 px-2.5 py-0.5 rounded-full uppercase">
                      {st.subTitle}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-md md:text-lg font-display leading-tight">{st.title}</h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-2.5 font-light">{st.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SECTION ETHIQUE ET REASSURANCE DIRECTE - Transparency contract */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left box ethical code */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b1022] text-white rounded-[2.5rem] p-8 md:p-10 space-y-5 border border-slate-800 shadow-2xl relative overflow-hidden ring-1 ring-blue-500/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl rounded-full" />
                
                <span className="text-emerald-400 font-mono text-[9px] font-extrabold block uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-max">
                  CHARTE D'ÉTIQUE VSW DIGITAL
                </span>
                
                <h4 className="font-display font-medium text-lg leading-tight">Notre Contrat d'Engagement</h4>
                
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  L'informatique est trop souvent le théâtre de promesses miracles d'agences cherchant des contrats de 24 mois captifs. VSW Digital propose une alternative transparente basée sur le respect mutuel.
                </p>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded">INTÉGRITÉ EXPÉRIMENTÉE</span>
                  <span>SANS SURPRISE</span>
                </div>
              </div>
            </div>

            {/* Right text listing ethical commitment */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
                Contrat de Sérénité
              </span>
              <h2 className="text-3xl md:text-4.2xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Un partenariat de confiance pour libérer votre potentiel
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full" />

              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Nous tenons fermement à plusieurs engagements moraux auprès de nos clients de Paris et du Val-de-Marne. Nous privilégions systématiquement :
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1 font-display">La pertinence des conseils :</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light">Nous ne vous proposerons jamais d'investir dans une refonte totale de site si de simples réglages sémantiques suffisent pour capter des clients.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1 font-display">Vos outils ajustés :</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light">Chaque intégration ou automatisation logicielle est taillée pour correspondre précisément à votre flux administratif de travail actuel.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1 font-display">La transparence absolue :</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light">Nous vous indiquons ouvertement les blocages ergonomiques et nous vous remettons des rapports Google Analytics pour mesurer l'audimat réel.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1 font-display">La progressivité agile :</h4>
                    <p className="text-slate-500 text-xs md:text-sm font-light">Il est plus sûr d'éprouver et d'ajuster l'efficacité commerciale au fil de l'eau plutôt que de complexifier outre mesure à vos débuts.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11. SECTION FAQ - Frequently Asked Questions */}
      <section className="py-20 md:py-28 bg-[#fafbfe] border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
              Foire Aux Questions (FAQ)
            </span>
            <h2 className="text-3xl md:text-4.2xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Tout savoir sur le fonctionnement et la philosophie de VSW Digital
            </h2>
            <p className="text-slate-605 leading-relaxed font-sans text-sm md:text-base font-light max-w-2xl mx-auto">
              Nous répondons avec franchise et clarté à l'intégralité des interrogations légitimes de nos futurs partenaires :
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 font-display text-base leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
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

      {/* 12. CTA FINAL - High-end glow design */}
      <section className="py-24 md:py-32 bg-[#090d1a] text-white relative overflow-hidden border-t border-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[130px]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 space-y-8">
          <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full inline-block">
            ENTRETIEN STRATÉGIQUE OFFERT
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Vous cherchez un partenaire digital sérieux pour faire avancer votre projet ?
          </h2>
          <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Présentez-nous en détail votre activité, vos objectifs commerciaux précis et vos blocages techniques actuels. VSW Digital vous conseille et met en œuvre une présence en ligne plus claire, plus visible et plus utile pour votre entreprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link 
              to="/contact" 
              className="px-8.5 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-0.5"
            >
              <span>Échanger avec l'ingénieur de projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-slate-500 text-[10px] sm:text-xs font-mono">
            🌍 Échange de cadrage initial offert (téléphone, visioconférence ou déplacement Île-de-France)
          </p>
        </div>
      </section>

    </div>
  );
}
