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
  FileX,
  RefreshCw,
  Mail,
  UserCheck,
  ShieldCheck,
  Building,
  Check,
  Undo
} from 'lucide-react';

// Fictional Documents for the interactive dashboard
interface MockDoc {
  id: string;
  client: string;
  type: string;
  date: string;
  status: 'En attente' | 'Validé' | 'À compléter' | 'Refusé';
  size: string;
}

const initialDocs: MockDoc[] = [
  { id: 'doc-1', client: 'SARL Martin', type: 'Kbis de l\'entreprise', date: 'Aujourd\'hui', status: 'En attente', size: '1.2 Mo' },
  { id: 'doc-2', client: 'Cabinet Nova', type: 'Pièce d\'identité Dirigeant', date: 'Hier', status: 'Validé', size: '2.4 Mo' },
  { id: 'doc-3', client: 'Alpha Services', type: 'Justificatif de domicile', date: 'Hier', status: 'À compléter', size: '1.8 Mo' },
  { id: 'doc-4', client: 'Transport IDF', type: 'RIB (Informations bancaires)', date: '12 Juin', status: 'Validé', size: '940 Ko' },
  { id: 'doc-5', client: 'Innov Group', type: 'Bilan comptable 2025', date: '10 Juin', status: 'En attente', size: '4.5 Mo' }
];

interface LogActivity {
  id: string;
  time: string;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

const initialLogs: LogActivity[] = [
  { id: 'log-1', time: '10:42', text: 'Nouveau document KBIS déposé par SARL Martin', type: 'info' },
  { id: 'log-2', time: 'Aujourd\'hui', text: 'Pièce d\'identité validée pour Cabinet Nova', type: 'success' },
  { id: 'log-3', time: 'Hier', text: 'Demande de complément envoyée à Alpha Services (pièce trop ancienne)', type: 'warning' },
  { id: 'log-4', time: '12 Juin', text: 'Nouveau dossier configuré pour Transport IDF', type: 'info' }
];

const faqs = [
  {
    q: "Cette application est-elle un vrai logiciel ou seulement un site web ?",
    a: "C'est un véritable outil métier (SaaS) sécurisé par mot de passe ou lien magique crypté. Contrairement à un simple site vitrine qui présente vos services, une application web sur mesure gère d’importantes logiques internes : bases de données en direct (Firestore/Cloud SQL), système de rôles utilisateurs (clients, employés, administrateurs), génération automatique de documents PDF, et connectivité API."
  },
  {
    q: "Peut-on adapter cette solution à mon métier ?",
    a: "Oui, absolument. C’est le principe même du sur-mesure de VSW Digital : nous n’adaptons pas votre entreprise à un logiciel existant rigide, nous concevons le logiciel pour qu'il s’adapte à 100% à la réalité opérationnelle de vos équipes terrain, vendeurs ou secrétaires comptables."
  },
  {
    q: "Peut-on commencer par une version simple ?",
    a: "C’est notre philosophie recommandée par défaut : la méthode progressive du MVP (Produit Minimum Viable). Nous isolons vos 3 priorités les plus douloureuses (ex. dépôt de pièces, alertes, relance de reliquats) pour mettre en ligne l'outil de base sous 4 à 8 semaines. Vos chantiers et équipes profitent ainsi d'une amélioration rapide, et nous enrichissons le logiciel d’étape en étape au gré de vos besoins réels."
  },
  {
    q: "Les clients peuvent-ils déposer des documents depuis leur téléphone ?",
    a: "Oui. L'interface client est entièrement 'responsive design mobile et tablette'. Vos clients ont juste besoin d'ouvrir l'adresse ou le lien magique reçu par SMS pour capturer ou uploader directement la photo de leur pièce d'identité ou justificatif."
  },
  {
    q: "Peut-on envoyer des notifications automatiquement ?",
    a: "Tout à fait. Nous programmons des déclencheurs intelligents basés sur des services de référence comme Resend (e-mail) ou Twilio (SMS). Ainsi, dès qu'un document est validé par un de vos collaborateurs, un message personnalisé s'envoie automatiquement à l'usager pour le tenir au courant."
  },
  {
    q: "Les documents sont-ils sécurisés ?",
    a: "La sécurité est intégrée dès le premier jet de code. Vos fichiers sensibles circulent sur des connexions chiffrées de bout en bout et logent dans des espaces privatifs fermés par défaut (Google Cloud Storage) au sein de serveurs souverains sécurisés en Europe. Aucun fichier n'est visible sans une clé temporaire et dynamique."
  },
  {
    q: "Peut-on avoir plusieurs rôles : admin, client, collaborateur ?",
    a: "Oui. Nous configurons des droits d'accès affinés (Role-Based Access Control) selon vos désirs. Vos collaborateurs internes de bureau gèrent uniquement les dossiers, vos employés terrain visualisent les interventions affectées, tandis que vos clients ne consultent que leur propre espace privatisé."
  },
  {
    q: "Peut-on ajouter la signature électronique plus tard ?",
    a: "Absolument. Nos architectures logicielles sous Next.js et React s'avèrent infiniment évolutives. Vous pouvez lancer votre MVP aujourd'hui puis décider de brancher d'ici quelques mois des services partenaires de signature électronique (Yousign, DocuSign) très simplement."
  },
  {
    q: "Peut-on connecter l’application à Stripe ou une API externe ?",
    a: "Oui. Nous créons des passerelles sécurisées (API / Webhooks) pour connecter vos applications métier ou CRM existants à des plateformes leaders : paiement en ligne par acompte (Stripe), outils comptables externes, ou gestionnaires d'historiques bancaires."
  },
  {
    q: "Combien coûte ce type d’application ?",
    a: "L'investissement dépend du nombre d'écrans techniques, du niveau de sécurité requis et des raccordements API configurés. Nous concevons ensembles un cahier des charges pragmatique adapté à vos moyens pour démarrer progressivement, avec des coûts d'infrastructures de cloud de départ (Firebase) quasi-inexistants grâce au palier gratuit de Google."
  }
];

export function DemoEspaceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Demo States
  const [docsList, setDocsList] = useState<MockDoc[]>(initialDocs);
  const [activityLogs, setActivityLogs] = useState<LogActivity[]>(initialLogs);
  const [filterStatus, setFilterStatus] = useState<string>('Tous');
  const [selectedDoc, setSelectedDoc] = useState<MockDoc | null>(null);

  useEffect(() => {
    document.title = "Démo application web : espace client et dépôt de documents | VSW Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez un exemple d’application web sur mesure conçue par VSW Digital : espace client, dépôt de documents, tableau de bord, notifications et portail administrateur.");
    }
  }, []);

  const handleStatusChange = (docId: string, newStatus: MockDoc['status']) => {
    const doc = docsList.find(d => d.id === docId);
    if (!doc) return;

    // Update document status
    setDocsList(prev => prev.map(d => d.id === docId ? { ...d, status: newStatus } : d));

    // Compile log item
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    let logType: LogActivity['type'] = 'info';
    let logText = '';

    if (newStatus === 'Validé') {
      logType = 'success';
      logText = `Document "${doc.type}" validé pour ${doc.client}. Mail automatique envoyé.`;
    } else if (newStatus === 'À compléter') {
      logType = 'warning';
      logText = `Demande de complément envoyée à ${doc.client} pour le document "${doc.type}".`;
    } else if (newStatus === 'Refusé') {
      logType = 'error';
      logText = `Document "${doc.type}" refusé pour ${doc.client}.`;
    }

    setActivityLogs(prev => [
      { id: `log-${Date.now()}`, time: timeStr, text: logText, type: logType },
      ...prev
    ]);

    // Close detail card if currently selected
    if (selectedDoc && selectedDoc.id === docId) {
      setSelectedDoc(null);
    }
  };

  const resetDemo = () => {
    setDocsList(initialDocs);
    setActivityLogs(initialLogs);
    setSelectedDoc(null);
    setFilterStatus('Tous');
  };

  const filteredDocs = filterStatus === 'Tous' 
    ? docsList 
    : docsList.filter(d => d.status === filterStatus);

  // Statistics counters directly inferred from the state
  const totalDocs = docsList.length;
  const processedDocs = docsList.filter(d => d.status === 'Validé').length;
  const pendingDocs = docsList.filter(d => d.status === 'En attente').length;
  const toCompleteDocs = docsList.filter(d => d.status === 'À compléter').length;
  const percentageProcessed = totalDocs > 0 ? Math.round((processedDocs / totalDocs) * 100) : 0;

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen text-slate-950 font-sans mt-16 scroll-smooth">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-slate-950 text-white border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric-blue/15 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
        
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading and Marketing Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-8"
            >
              <span className="inline-flex items-center gap-2 text-cyan-400 font-semibold tracking-wider uppercase text-xs px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
                Démonstrateur application web
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.1] text-white tracking-tight">
                Exemple d’application web : <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan-400 to-indigo-400">espace client, documents et tableau de bord</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Découvrez comment VSW Digital peut transformer un processus manuel en application web moderne et hautement sécurisée : un espace client sécurisé, un dépôt de documents en ligne, un tableau de bord administrateur et des notifications automatiques.
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Architecture :</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs font-mono text-slate-300">Next.js</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs font-mono text-slate-300">React</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs font-mono text-slate-300">TypeScript</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs font-mono text-slate-300">Firebase</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                <Link 
                  to="/contact" 
                  className="group px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/30 text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                  id="cta-hero-demo-contact"
                >
                  Créer une application similaire
                  <ArrowRight className="h-4.5 w-4.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#demonstrateur-live" 
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                >
                  Voir les fonctionnalités
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hero KPI Dashboard Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric-blue/20 to-indigo-500/10 rounded-[2.5rem] blur-2xl pointer-events-none"></div>
              
              <div className="relative bg-slate-900/90 border border-white/10 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                    <Database className="h-3 w-3 text-cyan-400" /> Firestore Cloud active
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold tracking-wider text-slate-400 uppercase font-mono">Indicateurs clés du démonstrateur</h3>
                  
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Fichiers reçus</p>
                      <p className="text-2xl font-display font-extrabold text-white mt-1">124</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Clients actifs</p>
                      <p className="text-2xl font-display font-extrabold text-white mt-1">38</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">En attente</p>
                      <p className="text-2xl font-display font-extrabold text-amber-400 mt-1">12</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Notifs envoyées</p>
                      <p className="text-2xl font-display font-extrabold text-electric-blue mt-1">7 aujourd'hui</p>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Taux de documents traités</span>
                      <span className="text-emerald-400 font-bold">96%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-electric-blue to-emerald-400 h-full rounded-full w-[96%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== 2. CONTEXTE METIER ==================== */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-6 space-y-6">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest px-3 py-1 bg-rose-50 border border-rose-100 rounded-full inline-block">Le besoin métier réel</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 leading-tight">
                Le fardeau : mieux gérer vos clients, documents et demandes
              </h2>
              <div className="h-1 w-16 bg-rose-500 rounded-full"></div>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Une entreprise reçoit chaque semaine des dizaines d’e-mails contenant des justificatifs de chantiers, des RIBs d'exploitation, des pièces d’identité client ou des bilans. Les fichiers sont dispersés, les pièces jointes expirent, et votre secrétaire perd 10h par semaine à relancer manuellement.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-semibold">
                Il en résulte de l’épuisement, des dossiers oubliés et des retards critiques de paiement.
              </p>
            </div>

            <div className="md:col-span-6 bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-4">
              <h3 className="font-extrabold text-lg text-slate-900">Les 10 problèmes résolus par l'application :</h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Documents envoyés par e-mails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Fichiers difficiles à retrouver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Absence de statut clair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Relances exclusivement manuelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Perte de temps administratif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Erreurs de saisie et de suivi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Manque de visibilité clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Absence de dashboard centralisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Données sensibles mal gérées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  <span>Difficulté à collaborer</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3. LA SOLUTION DOUBLE ESPACE ==================== */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl text-slate-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-100 rounded-full inline-block">Architecture logicielle</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">La solution : un espace client connecté à un portail administrateur</h2>
            <div className="h-1.5 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              VSW Digital structure votre projet autour de deux interfaces complémentaires synchronisées en temps réel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Column 1: Espace Client */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 text-electric-blue rounded-xl inline-block border border-blue-100">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">L’Espace Client Sécurisé</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  L’interface simplifiée que vous offrez à vos clients d’affaires ou usagers. Aucun téléchargement nécessaire, elle s'affiche parfaitement sur smartphone et tablette de chantier.
                </p>
                <div className="h-px bg-slate-100 my-4"></div>
                <ul className="space-y-3 font-semibold text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Connexion ultrasécurisée (sans mot de passe complexe)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Dépôt de documents par simple glisser-déposer</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Suivi clair de l'avancement "Approuvé / À modifier"</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Consultation de documents et factures d’acompte</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Notifications mails/SMS en direct à chaque étape</li>
                </ul>
              </div>
              <a href="#demonstrateur-live" className="text-xs text-electric-blue font-bold flex items-center gap-1.5 pt-4 hover:underline">
                Simuler le parcours client <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Column 2: Portail Admin */}
            <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-white/5 text-cyan-400 rounded-xl inline-block border border-white/5">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Le Portail Administrateur (Outil Métier)</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Le cœur opérationnel destiné à vos collaborateurs de bureau et gestionnaires. C'est l'écran de contrôle qui valide les informations et automatise les envois.
                </p>
                <div className="h-px bg-white/5 my-4"></div>
                <ul className="space-y-3 font-semibold text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-400 shrink-0" /> Liste clients centralisée avec historique des échanges</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-400 shrink-0" /> Visionneuse de documents sans téléchargement obligatoire</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-400 shrink-0" /> Validation, refus ou demande d'infos en 1 clic</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-400 shrink-0" /> Log d'activité complet des actions de chaque collaborateur</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-400 shrink-0" /> Tableau de bord analytics d'efficacité opérationnelle</li>
                </ul>
              </div>
              <a href="#demonstrateur-live" className="text-xs text-cyan-400 font-bold flex items-center gap-1.5 pt-4 hover:underline">
                Tester le portail administrateur <ChevronRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 4. INTERACTIVE LIVE DEMONSTRATOR GRAPHICS ==================== */}
      <section id="demonstrateur-live" className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-100 rounded-full inline-block">Démonstration en direct</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Aperçu interactif : modifiez le statut d'un document client</h2>
            <div className="h-1.5 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Ressentez la puissance de nos développements sur mesure : cliquez sur l'un des boutons d'actions pour simuler la validation en temps réel avec notifications, logs et métriques synchronisés.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Statistics Banner */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 font-mono tracking-wider font-bold block uppercase">Total documents</span>
                <span className="text-3xl font-display font-black text-slate-900 mt-1">{totalDocs}</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 font-mono tracking-wider font-bold block uppercase">Statut Validés</span>
                <span className="text-3xl font-display font-black text-emerald-600 mt-1">{processedDocs}</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 font-mono tracking-wider font-bold block uppercase">En attente d'avis</span>
                <span className="text-3xl font-display font-black text-amber-500 mt-1">{pendingDocs}</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 font-mono tracking-wider font-bold block uppercase">À compléter</span>
                <span className="text-3xl font-display font-black text-rose-500 mt-1">{toCompleteDocs}</span>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-white rounded-2xl flex flex-col justify-between col-span-2 md:col-span-1">
                <span className="text-[10px] text-slate-400 font-mono tracking-wider font-bold block uppercase">Finition globale</span>
                <span className="text-xl font-display font-black text-cyan-400 mt-1">{percentageProcessed}% validé</span>
              </div>
            </div>

            {/* Left side: The Mock Administrative Table */}
            <div className="lg:col-span-8 bg-slate-950 text-white rounded-[2rem] p-6 md:p-8 border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-5">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Portail Admin - Suivi des documents</h3>
                  <p className="text-xs text-slate-400">Cliquez sur un document ou modifiez son statut pour simuler l'action sur la base Firestore.</p>
                </div>
                
                {/* Reset button of the interactive simulator */}
                <button 
                  onClick={resetDemo}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 text-xs rounded-xl font-semibold text-slate-300 transition-all shrink-0 self-end sm:self-auto"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Réinitialiser la démo
                </button>
              </div>

              {/* Filtering bar in simulated portal */}
              <div className="flex gap-1.5 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
                {['Tous', 'En attente', 'Validé', 'À compléter'].map(st => (
                  <button
                    key={st}
                    onClick={() => { setFilterStatus(st); setSelectedDoc(null); }}
                    className={`text-xs px-3.5 py-1.5 rounded-lg whitespace-nowrap font-semibold transition-all ${filterStatus === st ? 'bg-electric-blue text-white shadow' : 'text-slate-400 hover:text-white'}`}
                  >
                    {st} {st !== 'Tous' && `(${docsList.filter(d => d.status === st).length})`}
                  </button>
                ))}
              </div>

              {/* Main Simulated Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300 min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px] font-bold tracking-wider">
                      <th className="py-3 px-2">Client / Entreprise</th>
                      <th className="py-3 px-2">Type de document</th>
                      <th className="py-3 px-2">Date d'envoi</th>
                      <th className="py-3 px-2">Statut de validation</th>
                      <th className="py-3 px-2 text-right">Actions rapides</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900">
                    {filteredDocs.map((doc) => (
                      <tr 
                        key={doc.id} 
                        className={`hover:bg-white/5 transition-colors cursor-pointer ${selectedDoc?.id === doc.id ? 'bg-white/5' : ''}`}
                        onClick={() => setSelectedDoc(doc)}
                      >
                        <td className="py-4 px-2 font-semibold text-white">{doc.client}</td>
                        <td className="py-4 px-2">{doc.type} <span className="text-[10px] text-slate-500 font-mono">({doc.size})</span></td>
                        <td className="py-4 px-2 text-slate-400">{doc.date}</td>
                        <td className="py-4 px-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                            doc.status === 'Validé' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                            doc.status === 'En attente' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                            'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}>
                            {doc.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            {doc.status !== 'Validé' && (
                              <button 
                                onClick={() => handleStatusChange(doc.id, 'Validé')}
                                className="p-1 px-1.5 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold rounded border border-emerald-500/20 text-[10px] transition-all"
                                title="Approuver le document"
                              >
                                Valider
                              </button>
                            )}
                            {doc.status !== 'À compléter' && (
                              <button 
                                onClick={() => handleStatusChange(doc.id, 'À compléter')}
                                className="p-1 px-1.5 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-slate-950 font-bold rounded border border-amber-500/20 text-[10px] transition-all"
                                title="Demande de modification"
                              >
                                Compléter
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredDocs.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-slate-500 italic">Aucun document correspondant à ce filtre disponible dans le démonstrateur.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Live interactive document viewer card inside dashboard */}
              {selectedDoc && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Dossier sélectionné :</span>
                      <h4 className="text-sm font-bold text-white">{selectedDoc.client} — {selectedDoc.type}</h4>
                    </div>
                    <button onClick={() => setSelectedDoc(null)} className="text-slate-400 hover:text-white font-bold">✕</button>
                  </div>

                  <p className="text-xs text-slate-300">
                    Voici l’aperçu virtuel de la visionneuse de documents confidentiels. Vous pouvez valider ou solliciter des modifications instantanément pour avertir le client final.
                  </p>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleStatusChange(selectedDoc.id, 'Validé')}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                    >
                      <CheckCircle className="h-3.5 w-3.5" /> Valider le document
                    </button>
                    <button 
                      onClick={() => handleStatusChange(selectedDoc.id, 'À compléter')}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                    >
                      <RefreshCw className="h-3.5 w-3.5" /> Demander un complément
                    </button>
                    <button 
                      onClick={() => handleStatusChange(selectedDoc.id, 'Refusé')}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                    >
                      <FileX className="h-3.5 w-3.5" /> Refuser
                    </button>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right side: Realtime Notifications / Logs Stack Feed */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 space-y-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <h3 className="font-extrabold text-slate-900 font-display text-sm">Automated Event Logs</h3>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Chaque action de validation déclenche automatiquement des tâches de base Firestore et envoie des e-mails. Voyez les événements récents ci-dessous :
              </p>

              <div className="space-y-3.5 overflow-y-auto max-h-[350px] pr-1">
                {activityLogs.map((log) => (
                  <div key={log.id} className="p-3 bg-white border border-slate-100 rounded-xl space-y-1">
                    <div className="flex justify-between items-center">
                      <span className={`text-[9px] font-black uppercase tracking-wider ${
                        log.type === 'success' ? 'text-emerald-600' :
                        log.type === 'warning' ? 'text-amber-600' :
                        log.type === 'error' ? 'text-rose-600' :
                        'text-sky-500'
                      }`}>
                        {log.type === 'success' ? 'VALIDÉ (Resend)' :
                         log.type === 'warning' ? 'RELANCE (Twilio)' :
                         log.type === 'error' ? 'REFUS (Système)' :
                         'INFO CLIENT'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{log.time}</span>
                    </div>
                    <p className="text-[11.5px] text-slate-700 leading-snug">{log.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 5. SECTION CARACTÉRISTIQUES CLÉS ==================== */}
      <section className="py-24 px-6 bg-slate-50 border-b border-indigo-50/50">
        <div className="container mx-auto max-w-7xl text-slate-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-100 rounded-full inline-block">Ingénierie sur-mesure</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">Fonctionnalités clés de l'application démonstrateur</h2>
            <div className="h-1.5 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Tout ce que nous intégrons pour sécuriser l'adoption de votre outil cloud par vos équipes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: "Authentification sécurisée", desc: "Connexion du client et des administrateurs par rôles, garantissant l'accès chiffré unique." },
              { icon: FileText, title: "Dépôt de documents", desc: "Téléversement glisser-déposer de PDF, justificatifs, d'images ou d'attestations lourdes." },
              { icon: Activity, title: "Gestion des statuts", desc: "Suivi visuel des dossiers par codes couleurs : 'Validé', 'Refusé', 'À compléter'." },
              { icon: Bot, title: "Notifications automatiques", desc: "Mises à jour par e-mail ou SMS immédiates dès qu'une action est validée ou refusée." },
              { icon: BarChart, title: "Tableau de bord administrateur", desc: "Vue globale de synthèse des volumes de dossiers, d'actions d'équipe et de KPI de conversion." },
              { icon: Clock, title: "Historique des actions", desc: "Suivi transparent de 'qui a fait quoi' avec dates et heures pour d'éventuels audits d'entreprises." },
              { icon: Server, title: "Stockage cloud sécurisé", desc: "Fichiers stockés sur Google Cloud Storage, hautement résistants face aux piratages informatiques." },
              { icon: Search, title: "Recherche & Filtres rapides", desc: "Moteur de recherche par nom d'entreprise ou par document pour retrouver n'importe quel élément en 2 secondes." },
              { icon: Settings, title: "Gestion intelligente des rôles", desc: "Attribuez des accès sur mesure : Admin (tout voir), Collaborateur (avis uniquement) ou Client." }
            ].map((f, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-electric-blue/30 hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-slate-50 border border-slate-100 text-electric-blue rounded-2xl inline-block mb-4">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900">{f.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== 6. PARCOURS UTILISATEUR ==================== */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full inline-block">Processus d'adoption</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">Un parcours simple pour le client comme pour l’administrateur</h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-sm md:text-base">
              Qu'il s'agisse de vos collaborateurs internes ou de vos clients externes, l'interaction avec l'application est pensée pour être transparente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Column Client Progress */}
            <div className="bg-slate-900/60 p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-display text-cyan-400 flex items-center gap-2">
                <Users className="h-5 w-5" /> Parcours Client
              </h3>
              
              <div className="space-y-6 font-semibold text-slate-300">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">1</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Le client crée son compte sécurisé en un clic avec son adresse e-mail vérifiée.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">2</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Il consulte la liste claire et pré-configurée des justificatifs réclamés par votre entreprise.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">3</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Il glisse et dépose ses justificatifs (attestations, photos sur le terrain...) depuis n'importe quel téléphone.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">4</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Il suit l'évolution instantanée de chaque document (Attente / Validé / Non Conforme).</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">5</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Il reçoit un e-mail ou SMS automatique dès qu'un document est validé ou d'action requise.</p>
                </div>
              </div>
            </div>

            {/* Column Admin Progress */}
            <div className="bg-slate-900/60 p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-display text-electric-blue flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Parcours Administrateur
              </h3>

              <div className="space-y-6 font-semibold text-slate-300">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">1</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">L'administrateur reçoit une notification système dès qu'un nouveau document est complété.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">2</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Il ouvre d'un clic de souris le dossier global d'un client entreprise ou particulier.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">3</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">Le document s'ouvre dans la visionneuse intégrée : pas besoin de polluer votre espace de téléchargements.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">4</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">En un bouton : il valide ou sollicite des modifications (en indiquant précisément la cause).</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 flex items-center justify-center text-xs shrink-0 font-bold font-mono">5</div>
                  <p className="text-xs md:text-sm mt-1 text-slate-300">L'activité globale est réajustée en millisecondes pour l'ensemble des collaborateurs d'entreprise.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 7. SECTEURS CONCERNÉS ==================== */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-100 rounded-full inline-block">Flexibilité d'intégration</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Pour quels domaines d'activité cette application est-elle essentielle ?</h2>
            <div className="h-1.5 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Si votre métier nécessite de collecter des documents, vous gagnerez un temps de gestion colossal dès le premier jour d'exploitation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cabinets Comptables", desc: "Pour centraliser les bilans fiscaux mensuels, factures et exports clients, loin des spams." },
              { title: "Sociétés de Domiciliation", desc: "Notification lors de réceptions de courriers, stockage de KBIS d'entreprises et pièces légalement conformes." },
              { title: "Organismes de Formation", desc: "Suivi d'attestations de présence, pièces d'identité d'élèves et signatures de feuilles d'émargement." },
              { title: "Sociétés de Déménagement & Logistique", desc: "Upload immédiat de photos avant/après transfert, bons de transport signés en direct par les chauffeurs." },
              { title: "Agences de Rénovation & BTP", desc: "PV d'étapes de chantiers partagés avec le client final garantissant des déblocages de fonds ultra rapides." },
              { title: "Entreprises de Sécurité Privée", desc: "Stockage des agréments CNAPS, attestations habilitations électriques et fiches de présence d'agents." }
            ].map((s, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 hover:shadow-md transition-shadow">
                <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-bold bg-white border border-slate-200 text-slate-600 rounded-full shadow-sm mb-2">{s.title}</span>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== 8. CORE SECURITY & GDPR STANDARDS ==================== */}
      <section className="py-24 px-6 bg-slate-50 border-b border-indigo-50/50">
        <div className="container mx-auto max-w-5xl bg-white border border-slate-100 p-8 md:p-14 rounded-[2.5rem] shadow-sm">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-8 space-y-6">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest px-3 py-1 bg-rose-50 border border-rose-100 rounded-full inline-block">Conformité par défaut</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 leading-snug">Sécurité et RGPD gravés au cœur du code de votre outil</h2>
              <p className="text-slate-500 leading-relaxed text-xs md:text-sm">
                Les pièces d’identité client, RIBs d’exploitation de l'entreprise ou contrats de services sont des informations ultra-sensibles. Nous refusons de loger ces données sur des serveurs partagés non conformes. L’ensemble de notre infrastructure technique exploite des jetons sécurisés ainsi que des pare-feux certifiés par Google Cloud.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-3.5 text-xs text-slate-600 font-semibold">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Chiffrement des fichiers à la source SSL</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Rôles d'accès restreints d'administration</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Serveurs souverains hébergés en Union Européenne</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Conforme aux préconisations RGPD de la CNIL</li>
              </ul>
            </div>

            <div className="md:col-span-4 bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 flex flex-col justify-center items-center text-center space-y-4">
              <Lock className="h-10 w-10 text-cyan-400 shrink-0 animate-pulse" />
              <div>
                <h4 className="font-bold text-white text-sm">Zéro faille de fichiers</h4>
                <p className="text-[10px] text-slate-400 mt-1">Autorisation dynamique des liens pour empêcher les intrusions de tiers.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 9. ROADMAP / MVP METHODOLOGY ==================== */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full inline-block">Philosophie de développement</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Commencez par un MVP simple, puis enrichissez pas-à-pas</h2>
          <div className="h-1 w-16 bg-emerald-500 mx-auto rounded-full"></div>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Plutôt que d'attendre 1 an et de dépenser un budget initial exorbitant pour un outil que vos équipes utiliseront à peine, nous déployons une première version simple, propre et extrêmement fluide en 30 jours (le MVP). Vos techniciens l'adoptent rapidement, puis nous greffons de nouveaux écrans selon vos commentaires hebdomadaires réels.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-xs font-medium text-slate-500 text-left max-w-xl mx-auto pt-4">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Version 1 livrée et testée sous 4 semaines</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Économie massive de budget au lancement</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Zéro boutons ou menus inutiles complexes</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Propriété totale du code validée</div>
          </div>
        </div>
      </section>

      {/* ==================== 10. NOTRE PROMESSE ET VALEURS ==================== */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="container mx-auto max-w-5xl bg-slate-900 rounded-[2.5rem] p-8 md:p-16 border border-white/5 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Notre force</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold">Pourquoi confier le développement de votre outil à VSW Digital ?</h2>
            <div className="h-1 w-16 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs text-slate-400 leading-relaxed font-semibold">
            <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-extrabold text-white text-sm">✓ Maîtrise des technologies souveraines</h4>
              <p className="text-xs text-slate-400 mt-1 font-medium">Next.js est l'outil ultime réputé pour sa vitesse. Vos collaborateurs utiliseront l'application avec le même confort visuel qu'un logiciel natif.</p>
            </div>
            <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-extrabold text-white text-sm">✓ Propriétaire absolu du code</h4>
              <p className="text-xs text-slate-400 mt-1 font-medium">Pas de système CMS ou de plateformes prêtes à l'emploi qui emprisonnent vos dossiers. Le code source brut est déposé sur votre GitHub : vous êtes 100% autonome.</p>
            </div>
            <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-extrabold text-white text-sm">✓ Zéro jargon technique alambiqué</h4>
              <p className="text-xs text-slate-400 mt-1 font-medium">Nous traduisons de manière limpide l'architecture au service de votre rentabilité quotidienne. Nous sommes avant tout des chefs de projets d'entreprises.</p>
            </div>
            <div className="p-6 bg-slate-950/60 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-extrabold text-white text-sm">✓ Double barrière de sécurité et Pare-feu</h4>
              <p className="text-xs text-slate-400 mt-1 font-medium">Nous écrivons l'ensemble des règles de sécurité Firestore de manière unique. Les comptes ne peuvent en aucun cas s'inventer ou intercepter des dossiers tiers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 11. BUDGET CARDS PREVENT PRICE LOCKS ==================== */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto max-w-7xl text-slate-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-100 rounded-full inline-block">Niveaux d'accompagnements</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">Trois niveaux pour donner vie à votre application métier</h2>
            <div className="h-1.5 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Nos diagnostics de structures de données de départ sont offerts gratuitement. Choisissez le forfait d'élaboration de votre maquette.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                tag: "Idéal pour cadrer", 
                title: "Démonstrateur / Prototype", 
                desc: "Pour concevoir l'architecture de départ, simuler le parcours et valider l'utilité du portail devant vos associés.", 
                features: ["Création des maquettes de parcours", "Définition de la structure de données", "Démonstrateur dynamique simulé", "Optimisation responsive de vos formulaires", "Devis de cadrage final"] 
              },
              { 
                tag: "Recommandé PME", 
                title: "MVP Fonctionnel", 
                desc: "Pour déployer une première plateforme cloud réelle et opérationnelle permettant à vos équipes d'automatiser et de valider d'un coup.", 
                features: ["Base de données Firestore opérationnelle", "Authentification sécurisée par liens", "Dépôt et visionnage de documents", "Notifications mails de suivis standards", "Accompagnement de lancement sur 1 mois"] 
              },
              { 
                tag: "Évolutions et multi-rôles", 
                title: "Application Métier Complète", 
                desc: "Pour les structures exigeant d'automatiser à 100% la traçabilité de documents lourds, l'indexation de justificatifs et le raccordement Stripe.", 
                features: ["Gestion des rôles (Admin, Tech, Client)", "Stockage Cloud ultra-privé", "Génération automatique d'attestations", "Raccordement d'APIs CRM tierces", "Contrat de maintenance dédié en option"] 
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full">{p.tag}</span>
                  <h3 className="text-xl font-bold font-display text-slate-900 mt-4">{p.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">{p.desc}</p>
                  
                  <div className="h-px bg-slate-100 my-6"></div>
                  
                  <ul className="space-y-2.5 text-xs text-slate-700 font-semibold mb-8">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <p className="text-[10px] text-slate-400 font-mono text-center uppercase">Sur devis après étude diagnostic gratuite</p>
                  <Link 
                    to="/contact" 
                    className="w-full text-center block py-4 bg-slate-950 hover:bg-electric-blue text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    Demander mon étude gratuite
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== 12. SECTION FAQ ACCORDEON ==================== */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-electric-blue uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-100 rounded-full inline-block">Éclaircir vos questions</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Questions fréquentes</h2>
            <div className="h-1.5 w-20 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Retrouvez l'essentiel sur les modalités budgétaires, délais et sécurisations de bases de données de nos développements logiciels.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-900 hover:text-electric-blue transition-all gap-4"
                >
                  <span className="text-sm md:text-base font-display">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-all text-slate-400 ${openFaq === idx ? 'rotate-180 text-electric-blue' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== 13. CTA FINAL INSPIRING SECTION ==================== */}
      <section className="py-24 bg-slate-950 text-white text-center px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>
        <div className="container relative mx-auto max-w-4xl space-y-8">
          
          <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white">
            Vous voulez créer un espace client ou une application métier similaire ?
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Présentez-nous votre besoin, vos documents, vos utilisateurs et vos objectifs. VSW Digital vous propose une étude technique d’avant-projet gratuite et sans engagement.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-electric-blue hover:bg-white hover:text-navy-900 text-white font-bold rounded-xl transition-all shadow-xl shadow-electric-blue/30 scale-100 hover:scale-[1.02] active:scale-[0.98]"
              id="cta-bottom-demo-espace-client"
            >
              Parler de mon projet
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
