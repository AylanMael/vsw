import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data/blog-posts';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  TrendingUp, 
  BookOpen, 
  Search, 
  BarChart3, 
  Code, 
  Server, 
  Wrench, 
  Laptop, 
  Zap, 
  HeartHandshake, 
  Cpu, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Workflow, 
  CheckCircle2, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ArrowUpRight,
  Database,
  Layout,
  MessageSquare,
  Bookmark,
  ChevronRight,
  User,
  Share2,
  Lock,
  Compass,
  FileText,
  BadgeAlert
} from 'lucide-react';

interface Article {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  internalLink: string;
  internalLinkLabel: string;
  content: string[]; // Structured blocks of content for the fluid reader modal
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [activeObjective, setActiveObjective] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Blog web, SEO, Google Ads & Digital pour PME | VSW Digital";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Main Categories
  const categories = [
    { name: 'Tous', desc: 'Découvrez l\'intégralité de nos dossiers techniques et stratégiques.', icon: Compass },
    { name: 'Création de site internet', desc: 'Articles sur les sites vitrines, sites professionnels, structure, design, contenus et conversion.', icon: Layout },
    { name: 'Référencement SEO', desc: 'Articles sur le SEO naturel, SEO local, mots-clés, contenus, maillage interne et visibilité Google.', icon: Search },
    { name: 'Google Ads', desc: 'Articles sur les campagnes Search, landing pages, suivi des conversions et génération de leads.', icon: BarChart3 },
    { name: 'Applications web', desc: 'Articles sur les espaces clients, tableaux de bord, outils métier, SaaS et applications sur mesure.', icon: Code },
    { name: 'Cloud & automatisation', desc: 'Articles sur Firebase, Google Cloud, AWS, workflows, API, notifications et automatisation métier.', icon: Cpu },
    { name: 'WordPress', desc: 'Articles sur la création, maintenance, sécurité, performance et optimisation WordPress.', icon: Laptop },
    { name: 'Next.js / React', desc: 'Articles sur les technologies modernes, la performance web extrême, les composants interactifs et l\'architecture frontend.', icon: Zap },
    { name: 'Stratégie digitale PME', desc: 'Dossiers d\'aide à la décision pour choisir les bonnes priorités digitales, estimer les budgets et optimiser les conversions.', icon: TrendingUp }
  ];

  // Highlighted articles (Featured)
  const featuredArticles = BLOG_POSTS.slice(0, 3);

  // Grid articles (loaded from consolidated data file)
  const allArticles = BLOG_POSTS;

  const objectives = [
    {
      title: "Je veux créer ou moderniser mon site internet",
      icon: Layout,
      desc: "Trouvez les dossiers pour concevoir un site internet performant, moderne et rentable, propriétaire à 100%.",
      slugs: [
        "/blog/site-internet-professionnel-generer-clients",
        "/blog/combien-coute-site-internet-professionnel",
        "/blog/quand-refaire-son-site-internet",
        "/blog/wordpress-ou-nextjs-choisir"
      ]
    },
    {
      title: "Je veux être plus visible localement sur Google",
      icon: Search,
      desc: "Découvrez comment attirer des internautes chauds de votre département ou de votre zone géographique proche.",
      slugs: [
        "/blog/seo-local-entreprise-visible-google",
        "/blog/seo-local-pme-artisan",
        "/blog/ameliorer-vitesse-site-internet"
      ]
    },
    {
      title: "Je veux générer des prospects qualifiés rapidement",
      icon: Zap,
      desc: "Ciblez les méthodes pour obtenir des demandes urgentes via vos annonces publicitaires à budget maîtrisé.",
      slugs: [
        "/blog/google-ads-ou-seo-generer-demandes",
        "/blog/google-ads-pme-eviter-gaspillage-budget",
        "/blog/landing-page-google-ads-conversion",
        "/blog/generation-leads-site-web"
      ]
    },
    {
      title: "Je veux digitaliser ma gestion ou créer un outil métier",
      icon: Code,
      desc: "Améliorez vos performances opérationnelles avec des espaces d'échanges collaboratifs sécurisés.",
      slugs: [
        "/blog/application-web-sur-mesure-utilite",
        "/blog/espace-client-en-ligne-avantages",
        "/blog/firebase-application-web-pme"
      ]
    },
    {
      title: "Je veux gagner du temps et de l'efficacité",
      icon: Cpu,
      desc: "Supprimez vos formalités répétitives grâce au branchement de microservices et d'automates fiables.",
      slugs: [
        "/blog/automatisation-metier-pme",
        "/blog/audit-digital-pourquoi-commencer-diagnostic",
        "/blog/maintenance-site-internet-important"
      ]
    }
  ];

  const faqs = [
    {
      q: "Pourquoi créer un blog pour une agence web comme VSW Digital ?",
      a: "Un blog professionnel n'est pas un espace de rédaction détaché de la réalité commerciale. C'est un moteur central d'acquisition et d'explication pragmatique. Il nous permet d'expliquer nos choix techniques (Next.js, WordPress, SEO, Cloud AWS/GCP, Firebase) et de vulgariser l'informatique pour soutenir les dirigeants de PME locales dans leurs choix d'investissement."
    },
    {
      q: "À quoi sert concrètement la bibliothèque de ressources VSW Digital ?",
      a: "Elle fait office de centre d'aide à la décision stratégique pour les PME, commerçants et artisans d'Île-de-France. Avant d'engager le moindre budget ou de signer un devis, vous pouvez vous documenter de manière transparente sur les coûts réels de fabrication, l'utilité du référencement géolocalisé et les pièges d'agences fréquemment rencontrés."
    },
    {
      q: "Comment l'agence concilie-t-elle l'écriture pour Google et pour les humains ?",
      a: "La règle fondamentale est d'écrire d'abord pour le véritable être humain qui étudie votre site. Le but est de le rassurer avec de vrais arguments d'expertises, des photos concrètes et des garanties de confiance. L'adaptation technique (mots-clés, balises, maillage de liens internes) intervient ensuite pour que les robots de Google comprennent l'arborescence logique créée."
    },
    {
      q: "Proposez-vous une garantie de première position sur Google ?",
      a: "Nous refusons catégoriquement d'avancer de telles promesses, qui relèvent de la spéculation ou de l'arnaque SEO. Les algorithmes de Google sont entièrement propriétaires et changent régulièrement. En revanche, nous garantissons la mise en place de structures ultra-rapides, de sémantiqiues locales irréprochables et de facteurs de conversion propices à maximiser vos demandes de devis réelles, ce qui est le véritable objectif de votre visibilité."
    },
    {
      q: "À quelle fréquence VSW Digital publie-t-elle des dossiers d'analyses ?",
      a: "Nous privilégions l'exhaustivité et la solidité pédagogique à la production de masse de paragraphes vides générés à la chaîne par des intelligences artificielles (AI slop). Nous publions une à deux études de cas ou dossiers pragmatiques par mois, rédigés par un ingénieur ayant un sens d'ingénierie et d'acquisition pragmatique."
    },
    {
      q: "Comment VSW Digital associe-t-elle ses articles de blog à ses prestations ?",
      a: "Nous construisons un maillage interne chirurgical et logique. Chaque article thématique dirige son autorité et son sens pédagogique vers nos fiches de services commerciales correspondantes. De cette manière, les pages de conversion reçoivent de la force de positionnement naturelle tout en offrant un chemin d'action direct au lecteur intéressé."
    }
  ];

  const serviceLinks = [
    { title: "Création site internet", url: "/creation-site-internet", desc: "Pour obtenir un site vitrine rapide d'artisan ou de PME." },
    { title: "Référencement SEO", url: "/referencement-seo", desc: "Pour capter du trafic chaud sur votre zone géographique." },
    { title: "Campagnes Google Ads", url: "/google-ads", desc: "Pour générer des demandes qualifiées dès le lancement." },
    { title: "Application sur-mesure", url: "/application-web-sur-mesure", desc: "Pour simplifier vos processus internes." },
    { title: "Cloud & Automatisation", url: "/cloud-automatisation", desc: "Pour éliminer vos saisies répétitives." },
    { title: "Refonte de site", url: "/refonte-site-internet", desc: "Pour moderniser un site web devenu obsolète et lent." },
    { title: "Maintenance proactive", url: "/maintenance-site-internet", desc: "Pour assurer la sécurité et les sauvegardes du site." },
    { title: "Audit digital complet", url: "/audit-digital", desc: "Pour analyser de manière neutre votre existant et vos gisements de leads." }
  ];

  // Combine featured + all articles for query searching and filtering
  const searchableArticles = [...allArticles];
  
  // Dynamic count helper for categories
  const getCategoryCount = (catName: string) => {
    if (catName === 'Tous') {
      return searchableArticles.length;
    }
    return searchableArticles.filter(art => art.category === catName).length;
  };

  // Filtering logic
  const filteredArticles = searchableArticles.filter(art => {
    const matchesCategory = selectedCategory === 'Tous' || art.category === selectedCategory;
    const summaryText = art.summary || art.introduction || '';
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          summaryText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50 text-neutral-800 font-sans antialiased selection:bg-blue-600 selection:text-white">

      {/* 1. HERO SECTION - Premium Deep Space Editorial Cover */}
      <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 bg-[#090d1a] text-white overflow-hidden border-b border-white/[0.04]">
        {/* Abstract vector gradients of premium feel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[130px] -translate-y-1/2" />
          <div className="absolute bottom-[-10%] right-[15%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px] translate-y-1/2" />
          {/* Subtle architectural tech grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-25" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold tracking-wider uppercase text-blue-400 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BIBLIOTHÈQUE DE RESSOURCES</span>
            </span>
            <span className="text-slate-600 text-xs hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06] font-mono">
              💼 Pour PME, Artisans et Dirigeants de Territoire
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Strongest Editorial Title, Clear & Credible Statement */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.10] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-350">
                Blog web, SEO, Google Ads, applications web, cloud, WordPress, Next.js, Firebase et automatisation
              </h1>
              
              <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                Un espace de connaissances concrètes, sans jargon barbare ni promesses SEO farfelues. Retrouvez des directives d'ingénieurs pour décider sereinement, réduire vos dépenses informatiques inutiles et maximiser vos performances commerciales locales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#category-explorer-bar" 
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm md:text-base border border-blue-500/30"
                >
                  <span>Consulter les dossiers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-150 rounded-xl font-bold tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <span>Demander un diagnostic gratuit</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Interactive Glassmorphism Widget */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-[12px] opacity-20 select-none pointer-events-none" />
              
              <div className="bg-[#0b1022]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl relative">
                <div className="flex items-center justify-between mb-6 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      CONTROLEUR DE THÉMATIQUES
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-450 font-mono">15 Guides Opérationnels</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Création de site internet", target: "Création de site internet", color: "text-blue-400 bg-blue-500/10 border-blue-500/25", icon: Layout },
                    { label: "Référencement SEO", target: "Référencement SEO", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25", icon: Search },
                    { label: "Google Ads", target: "Google Ads", color: "text-amber-400 bg-amber-500/10 border-amber-500/25", icon: BarChart3 },
                    { label: "Applications web", target: "Applications web", color: "text-purple-400 bg-purple-500/10 border-purple-500/25", icon: Code },
                    { label: "Cloud & automatisation", target: "Cloud & automatisation", color: "text-sky-400 bg-sky-500/10 border-sky-500/25", icon: Cpu },
                    { label: "WordPress", target: "WordPress", color: "text-teal-400 bg-teal-500/10 border-teal-500/25", icon: Laptop },
                    { label: "Next.js / React", target: "Next.js / React", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25", icon: Zap },
                    { label: "Stratégie digitale PME", target: "Stratégie digitale PME", color: "text-pink-400 bg-pink-500/10 border-pink-500/25", icon: TrendingUp }
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <button 
                        key={idx}
                        onClick={() => {
                          setSelectedCategory(item.target);
                          const el = document.getElementById("articles-list");
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-2.5 shadow-xs text-left hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 group"
                      >
                        <div className="flex justify-between items-center w-full">
                          <div className={`p-1.5 rounded-lg ${item.color.split(' ')[1]} ${item.color.split(' ')[2]}`}>
                            <IconComp className={`w-4 h-4 ${item.color.split(' ')[0]}`} />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 bg-white/[0.05] px-1.5 py-0.5 rounded">
                            {getCategoryCount(item.target)}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold tracking-tight text-white font-display mt-0.5 group-hover:text-blue-400 transition-colors truncate w-full">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. OUR EDUCATIONAL CHARTER - Premium Human Presentation */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200/50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Our Promise Box */}
            <div className="lg:col-span-4 relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl -rotate-2 scale-[1.02] -z-10" />
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-8 space-y-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-650 flex items-center justify-center">
                  <Bookmark className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-slate-900 text-xl leading-tight">
                    Notre Charte déontologique
                  </h3>
                  <div className="h-0.5 w-10 bg-blue-600 rounded-full" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  L'informatique et le marketing en ligne souffrent d'une opacité regrettable. Nous nous engageons à documenter nos solutions avec franchise, humilité et clarté, indépendamment des modes technologiques éphémères.
                </p>
                <div className="h-[1px] bg-slate-200" />
                <div className="space-y-2.5">
                  <div className="flex gap-2.5 items-center text-xs font-mono text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                    <span>Ressources gratuites de libre accès</span>
                  </div>
                  <div className="flex gap-2.5 items-center text-xs font-mono text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                    <span>Auteurs 100% ingénieurs qualifiés</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Educational Statement for PME/Artisans */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block font-mono">
                CONSEILS FIABLES &amp; COMPRÉHENSIBLES
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight tracking-tight">
                Une bibliothèque de connaissances construite pour soutenir vos choix digitaux
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                Le blog VSW Digital apporte des éclairages clairs aux dirigeants de PME, commerçants et travailleurs indépendants d'Île-de-France. Chaque dossier est rédigé dans le seul objectif d'expliquer comment rationnaliser vos dépenses, acquérir des parts de marché localisées et maîtriser l'arrière-boutique de votre communication numérique.
              </p>

              {/* Grid 4 spec flags */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Vulgarisation & Pédagogie", desc: "Pas de métaphores complexes inutiles. Nous expliquons le code et l'acquisition avec des concepts de l'économie réelle." },
                  { title: "Actions directement applicables", desc: "Chaque article formule des recommandations concrètes et rationnelles d'amélioration immédiates." },
                  { title: "Calcul de coûts réels", desc: "Nous détaillons en toute honnêteté les tarifs récurrents de maintenance, d'hébergement ou de publicité." },
                  { title: "Réalisme & Respect des chiffres", desc: "Pas de promesse magique de 1re place non viable sur Google. Nous bâtissons des bases saines et mesurables." }
                ].map((spec, idx) => (
                  <div key={idx} className="flex gap-3 px-5 py-4 bg-slate-50 border border-slate-150 rounded-xl hover:bg-blue-50/10 hover:border-blue-200 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm md:text-base font-display leading-tight">{spec.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1 font-light">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EXPERTISES CATEGORIES - Redesigned Filter Dashboard */}
      <section id="category-explorer-bar" className="py-20 bg-slate-100/60 border-b border-slate-200/50 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black block">INDEX CHRONOLOGIQUE</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
              Explorer par compétence
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Sélectionnez ci-dessous l'un de nos univers de rédaction technique pour afficher instantanément la sélection de nos dossiers d'ingénierie.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-5 py-3 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 border flex items-center gap-2 ${
                    selectedCategory === cat.name 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20 scale-[1.03]' 
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5'
                  }`}
                >
                  <CatIcon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${selectedCategory === cat.name ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-500'}`}>
                    {getCategoryCount(cat.name)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 text-center max-w-3xl mx-auto">
            <p className="text-xs md:text-sm font-mono text-slate-500 italic bg-white inline-block px-6 py-2 rounded-full border border-slate-200/55 shadow-xs">
              « {categories.find(c => c.name === selectedCategory)?.desc} »
            </p>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM FEATURED DOSSIERS (EDITORIAL LAYOUT) */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex justify-between items-end mb-12 border-b border-slate-150 pb-5">
            <div className="space-y-1.5 animate-fade-in">
              <span className="text-xs font-mono font-black text-blue-600 uppercase tracking-widest block">ANALYSES DE RÉFÉRENCE</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">Articles à la Une</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Sélection exclusive de la rédaction</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((art, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/60 border border-slate-200 rounded-2xl p-6.5 md:p-8 hover:bg-white hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative border bar for editorial focus */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
                      {art.category}
                    </span>
                    <div className="text-[10.5px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to={`/blog/${art.slug}`}>
                      <h3 className="text-xl font-bold font-display text-slate-900 hover:text-blue-650 transition-colors leading-snug">
                        {art.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                      {art.summary || art.introduction}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {art.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[9.5px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/50 uppercase font-light">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center w-full pt-1.5">
                    <Link 
                      to={`/blog/${art.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-500 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Lire le dossier</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </Link>
                    {art.internalLink && (
                      <Link 
                        to={typeof art.internalLink === 'string' ? art.internalLink : art.internalLink.url} 
                        className="text-[10px] font-mono text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1"
                      >
                        <Wrench className="w-3 h-3" />
                        <span>Fiche service</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. REDESIGNED ARTICLE PORTAL LIBRARY (GRID) */}
      <section id="articles-list" className="py-24 md:py-32 bg-slate-100/30 border-b border-slate-200/50 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-slate-200 pb-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-black text-blue-600 uppercase tracking-widest block font-bold">BIBLIOTHÈQUE OPÉRATIONNELLE</span>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900">
                {selectedCategory === 'Tous' ? 'Tous nos guides d\'analyse' : `Guides : ${selectedCategory}`}
              </h2>
            </div>

            {/* In-page interactive search micro-engine */}
            <div className="w-full md:max-w-md relative">
              <input 
                type="text" 
                placeholder="Rechercher par mot-clé, technologie ou problème..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-250 text-xs focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="font-display font-bold text-slate-900">Aucun dossier disponible</h3>
              <p className="text-slate-500 text-xs md:text-sm font-light max-w-md mx-auto">
                Nous ne disposons pas d'écrits techniques correspondant précisément à votre recherche « {searchQuery} » dans cette catégorie. Vous pouvez réinitialiser vos recherches.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('Tous'); }}
                className="px-6 py-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((art, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6.5 hover:shadow-2xl hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9.5px] font-mono font-bold text-slate-550 bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 rounded uppercase">
                        {art.category}
                      </span>
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{art.date}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link to={`/blog/${art.slug}`}>
                        <h3 className="text-base md:text-lg font-bold font-display text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                          {art.title}
                        </h3>
                      </Link>
                      <p className="text-slate-500 text-xs leading-relaxed font-light line-clamp-3">
                        {art.summary || art.introduction}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1">
                      {art.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono text-slate-400 bg-slate-50 border border-slate-150 rounded px-1.5 py-0.5">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center w-full pt-1.5 border-t border-slate-50">
                      <Link 
                        to={`/blog/${art.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        <span>Découvrir</span>
                        <ArrowUpRight className="w-4 h-4 text-blue-600" />
                      </Link>
                      
                      {art.internalLink && (
                        <Link 
                          to={typeof art.internalLink === 'string' ? art.internalLink : art.internalLink.url} 
                          className="text-[9.5px] font-mono text-slate-400 hover:underline hover:text-blue-600 transition-colors truncate max-w-[130px]"
                        >
                          → {typeof art.internalLink === 'string' ? art.internalLinkLabel || "En savoir plus" : art.internalLink.text}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>



      {/* 6. INTERNAL LINKING SECTION (BENTO GRID CATALOG OF EXPERTISES) */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block font-mono">
                DU CONSEIL À LA CONCRÉTISATION
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-1000 tracking-tight leading-tight">
                Des conseils toujours reliés à nos services d'ingénierie
              </h2>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                Nous ne croyons pas aux articles de blog vides de sens écrits pour tromper les algorithmes de recherche. Pour chaque problématique métier locale décryptée dans cette bibliothèque, nous proposons une prestation d'ingénierie et d'acquisition pragmatique, claire et structurée.
                <br /><br />
                Explorez directement nos champs d'action pour solliciter notre avis technique gratuit.
              </p>

              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 space-y-3 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl" />
                <p className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1">
                  <BadgeAlert className="w-4 h-4" />
                  <span>Notre philosophie commerciale :</span>
                </p>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  Pas de contrats captifs abusifs, pas de frais masqués de mise en service. Nos interventions d'administration, de programmation ou de campagnes publicitaires sont transparentes et d'esprit sans engagement.
                </p>
              </div>
            </div>

            {/* List with styled cards linking internally to pages */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
                <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest block font-bold">ACCÉDER DIRECTEMENT À NOS EXPERTISES :</span>
                
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {serviceLinks.map((srv, idx) => (
                    <Link 
                      key={idx} 
                      to={srv.url}
                      className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group h-max"
                    >
                      <div className="space-y-1">
                        <span className="text-xs md:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors font-display block">{srv.title}</span>
                        <p className="text-slate-550 text-[11px] font-light leading-snug line-clamp-2">{srv.desc}</p>
                      </div>
                      <div className="flex justify-end pt-2 w-full text-blue-600">
                        <span className="text-[10.5px] font-semibold text-blue-600 group-hover:underline inline-flex items-center gap-0.5">
                          <span>Voir le service</span>
                          <ArrowRight className="w-3 h-3 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                  <Link 
                    to="/contact" 
                    className="p-4 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white hover:opacity-95 hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-between items-center sm:col-span-2 group min-h-[44px] touch-target"
                  >
                    <span className="text-xs md:text-sm font-bold font-display">Parler directement avec un technicien d'Île-de-France</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. METHOD SECTION - Sementic Audit & Realistic Framework */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block font-mono">
              APPROCHE PROGRAMMATIQUE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
              Une planification éditoriale structurée autour d'utilités concrètes
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base font-light">
              Nous couvrons six intentions clés qui jalonnent le quotidien d'une PME pour l'aider à anticiper son budget et ses choix de technologies logicielles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Vulgariser un concept", desc: "Décrypter le fond technique des outils sans acronymes indigestes. Comprendre ce qu'est un robot, une base NoSQL ou un CDN." },
              { num: "02", title: "Comparer de façon rationnelle", desc: "WordPress ou Next.js pour votre vitrine ? Google Ads ou SEO localisé ? Des analyses mesurées basées sur des cas réels." },
              { num: "03", title: "Identifier un dysfonctionnement", desc: "Pourquoi un site avec du trafic ne génère pas d'appels réels ? Détecter les freins cachés de vos parcours mobiles." },
              { num: "04", title: "Estimer les coûts unitaires réels", desc: "La transparence absolue concernant les frais de développement, de serveurs de sauvegarde et de maintenance corrective." },
              { num: "05", title: "Sécuriser une refonte", desc: "Les directives de migration indispensables pour moderniser votre design sans risquer d'égarer vos positions sémantiques Google." },
              { num: "06", title: "Éliminer la paperasse répétitive", desc: "Quels automates fiables intégrer à vos formulaires pour économiser entre 5 et 10 heures d'administration hebdomadaires." }
            ].map((st, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6.5 hover:shadow-xl hover:border-blue-500/20 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xl font-bold text-blue-500/80">{st.num}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base font-display mb-1.5">{st.title}</h3>
                <p className="text-slate-550 text-xs md:text-sm leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE FILTERING BY BUSINESS OBJECTIVE */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase">PROBLÉMATIQUE DE SECTEUR</span>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Cibler selon votre besoin immédiat
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Quel obstacle de gestion ou de prospection rencontrez-vous actuellement ? Sélectionnez votre objectif pour filtrer la sélection de nos dossiers.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Left Buttons Sidebar */}
            <div className="md:col-span-5 flex flex-col gap-2.5">
              {objectives.map((obj, idx) => {
                const ObjIcon = obj.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveObjective(idx)}
                    className={`w-full text-left p-5 rounded-xl transition-all border flex gap-4 items-center duration-300 ${
                      activeObjective === idx 
                        ? 'bg-slate-905 bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${activeObjective === idx ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                      <ObjIcon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs md:text-sm font-bold font-display leading-tight block">{obj.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right recommend article boxes */}
            <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>LIGNES STRATÉGIQUES CONSEILLÉES :</span>
                  </h3>
                  <p className="text-xs text-slate-550 leading-relaxed font-light italic">
                    « {objectives[activeObjective].desc} »
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {objectives[activeObjective].slugs.map((sl, iIdx) => {
                    const resolved = searchableArticles.find(a => a.slug === sl) || featuredArticles.find(a => a.slug === sl);
                    if (!resolved) return null;
                    return (
                      <Link 
                        key={iIdx}
                        to={`/blog/${resolved.slug}`}
                        className="p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md cursor-pointer transition-all duration-300 flex justify-between items-center group"
                      >
                        <div className="space-y-1 mr-4">
                          <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase block">{resolved.category}</span>
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm leading-tight font-display group-hover:text-blue-600 transition-colors leading-snug">{resolved.title}</h4>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6 flex justify-between items-center flex-wrap gap-4">
                <span className="text-[11px] text-slate-500 font-mono">Dossiers opérationnels qualifiés PME</span>
                <Link to="/contact" className="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1">
                  <span>Demander un diagnostic offert</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. CRITICAL CONCERNS CTA BOX (MAILLAGE INTERNE + NO FALSE REASSURANCES) */}
      <section className="py-24 md:py-32 bg-[#090d1a] text-white relative overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold tracking-wider uppercase text-blue-400 font-mono">
            🔍 ÉVALUATION TECHNIQUE SANS FRAIS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Vous ne savez pas par quelle action démarrer ?
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed max-w-2xl mx-auto font-light">
            Un diagnostic digital neutre permet de mesurer l'efficacité de vos outils : lenteur mobile, lacunes de sécurité WordPress, ciblage de vos dépenses publicitaires Google Ads, ou routines administratives automatisables. Notre démarche est factuelle et délivre un plan d'actions ordonné de manière pragmatique.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 inline-flex items-center justify-center gap-2.5 text-sm md:text-base border border-blue-500/30 shadow-lg shadow-blue-500/20"
            >
              <span>Demander mon audit offert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a 
              href="#faqs-container-section"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-100 rounded-xl font-bold tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Consulter la FAQ
            </a>
          </div>
        </div>
      </section>

      {/* 10. FOIRE AUX QUESTIONS (FAQ SECTION - CORRECTED TYPO) */}
      <section id="faqs-container-section" className="py-24 md:py-32 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block font-mono">
              FOIRE AUX QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-1000 leading-tight">
              Tout savoir sur l'organisation éditoriale de nos conseils
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Nous répondons de façon transparente et intègre aux questions stratégiques récurrentes des gérants d'entreprises locales.
            </p>
          </div>

          <div className="space-y-4.5">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-slate-100/80 min-h-[44px] touch-target"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-slate-850 font-display leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs md:text-sm font-light leading-relaxed border-t border-slate-150">
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

      {/* 11. FINAL EDITORIAL CTA CONTAINER */}
      <section className="py-24 md:py-32 bg-[#090d1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
            Consolidons ensemble votre structure numérique commerciale
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            VSW Digital met en œuvre les solutions méthodologiques éprouvées au sein de ces dossiers d'ingénierie. Bâtissons un écosystème mobile, performant, rapide et parfaitement taillé pour transformer vos visiteurs de prédilection en clients physiques réels.
          </p>

          <div className="pt-6">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base shadow-lg shadow-blue-500/20 border border-blue-500/20"
            >
              <span>Discuter de ma visibilité sémantique</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
