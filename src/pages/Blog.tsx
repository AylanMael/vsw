import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { BLOG_POSTS } from "../data/blog-posts";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeAlert,
  BarChart3,
  Bookmark,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  Code,
  Compass,
  Cpu,
  FileText,
  HelpCircle,
  Layout,
  Laptop,
  Search,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

type InternalLink =
  | string
  | {
      url: string;
      text: string;
    };

interface BlogPost {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary?: string;
  introduction?: string;
  tags: string[];
  internalLink?: InternalLink;
  internalLinkLabel?: string;
}

const categories = [
  {
    name: "Tous",
    desc: "Tous nos articles, guides et dossiers pratiques.",
    icon: Compass,
  },
  {
    name: "Création de site internet",
    desc: "Sites vitrines, structure, design, contenus et conversion.",
    icon: Layout,
  },
  {
    name: "Référencement SEO",
    desc: "SEO naturel, SEO local, contenus, maillage interne et visibilité Google.",
    icon: Search,
  },
  {
    name: "Google Ads",
    desc: "Campagnes Search, landing pages, suivi des conversions et génération de leads.",
    icon: BarChart3,
  },
  {
    name: "Applications web",
    desc: "Espaces clients, tableaux de bord, outils métier, SaaS et applications sur mesure.",
    icon: Code,
  },
  {
    name: "Cloud & automatisation",
    desc: "Firebase, Google Cloud, workflows, API, notifications et automatisation métier.",
    icon: Cpu,
  },
  {
    name: "WordPress",
    desc: "Création, maintenance, sécurité, performance et optimisation WordPress.",
    icon: Laptop,
  },
  {
    name: "Next.js / React",
    desc: "Technologies modernes, performance web, composants interactifs et architecture frontend.",
    icon: Zap,
  },
  {
    name: "Stratégie digitale PME",
    desc: "Aide à la décision pour choisir les bonnes priorités digitales.",
    icon: TrendingUp,
  },
];

const serviceLinks = [
  {
    title: "Création site internet",
    url: "/creation-site-internet",
    desc: "Créer un site clair, professionnel et adapté aux PME.",
  },
  {
    title: "Référencement SEO",
    url: "/referencement-seo",
    desc: "Améliorer votre visibilité naturelle sur Google.",
  },
  {
    title: "Google Ads",
    url: "/google-ads",
    desc: "Structurer des campagnes orientées demandes qualifiées.",
  },
  {
    title: "Application sur mesure",
    url: "/application-web-sur-mesure",
    desc: "Créer un espace client, un dashboard ou un outil métier.",
  },
  {
    title: "Cloud & automatisation",
    url: "/cloud-automatisation",
    desc: "Connecter vos outils et automatiser certaines tâches.",
  },
  {
    title: "Refonte de site",
    url: "/refonte-site-internet",
    desc: "Moderniser un site devenu lent, ancien ou peu efficace.",
  },
  {
    title: "Maintenance site internet",
    url: "/maintenance-site-internet",
    desc: "Sécuriser, sauvegarder et maintenir votre site dans le temps.",
  },
  {
    title: "Audit digital",
    url: "/audit-digital",
    desc: "Identifier les priorités avant d’investir davantage.",
  },
];

const objectives = [
  {
    title: "Je veux créer ou moderniser mon site internet",
    icon: Layout,
    desc: "Des ressources pour concevoir un site plus clair, plus moderne et plus efficace.",
    slugs: [
      "site-internet-professionnel-generer-clients",
      "combien-coute-site-internet-professionnel",
      "quand-refaire-son-site-internet",
      "wordpress-ou-nextjs-choisir",
    ],
  },
  {
    title: "Je veux être plus visible localement sur Google",
    icon: Search,
    desc: "Des guides pour renforcer votre présence sur les recherches locales utiles.",
    slugs: [
      "seo-local-entreprise-visible-google",
      "seo-local-pme-artisan",
      "ameliorer-vitesse-site-internet",
    ],
  },
  {
    title: "Je veux générer plus de prospects qualifiés",
    icon: Zap,
    desc: "Des contenus pour mieux comprendre Google Ads, les landing pages et la conversion.",
    slugs: [
      "google-ads-ou-seo-generer-demandes",
      "google-ads-pme-eviter-gaspillage-budget",
      "landing-page-google-ads-conversion",
      "generation-leads-site-web",
    ],
  },
  {
    title: "Je veux digitaliser ma gestion ou créer un outil métier",
    icon: Code,
    desc: "Des ressources pour comprendre les espaces clients, dashboards et applications web.",
    slugs: [
      "application-web-sur-mesure-utilite",
      "espace-client-en-ligne-avantages",
      "firebase-application-web-pme",
    ],
  },
  {
    title: "Je veux gagner du temps et mieux m’organiser",
    icon: Cpu,
    desc: "Des articles sur l’automatisation, l’audit digital et la maintenance.",
    slugs: [
      "automatisation-metier-pme",
      "audit-digital-pourquoi-commencer-diagnostic",
      "maintenance-site-internet-important",
    ],
  },
];

const faqs = [
  {
    q: "Pourquoi créer un blog pour une agence web comme VSW Digital ?",
    a: "Un blog professionnel permet d’expliquer clairement les choix techniques, SEO et marketing. Il aide les dirigeants de PME à mieux comprendre les options avant d’investir dans un site, une campagne, une application ou une automatisation.",
  },
  {
    q: "À quoi sert concrètement la bibliothèque de ressources VSW Digital ?",
    a: "Elle sert de centre d’aide à la décision. Vous pouvez y trouver des repères sur les coûts, les priorités, les pièges à éviter, le SEO, Google Ads, WordPress, React, Firebase ou la maintenance.",
  },
  {
    q: "Comment concilier écriture pour Google et écriture pour les humains ?",
    a: "Nous écrivons d’abord pour l’utilisateur : clarté, pédagogie, exemples et logique. Ensuite, nous structurons le contenu pour que Google comprenne correctement les sujets traités.",
  },
  {
    q: "Proposez-vous une garantie de première position sur Google ?",
    a: "Non. Aucune agence sérieuse ne peut garantir une position précise sur Google. En revanche, il est possible de construire une base technique, éditoriale et sémantique plus saine pour améliorer les chances de progression.",
  },
  {
    q: "À quelle fréquence publiez-vous des articles ?",
    a: "Nous privilégions des contenus utiles et structurés plutôt qu’une production massive. L’objectif est de publier des ressources qui aident vraiment à comprendre un sujet et à prendre une décision.",
  },
  {
    q: "Comment les articles sont-ils reliés aux prestations ?",
    a: "Chaque article peut renvoyer vers une page de service pertinente : création de site, SEO, Google Ads, application web, automatisation, maintenance ou audit digital.",
  },
];

function normalizeSlug(slug: string) {
  return slug.replace(/^\/blog\//, "").replace(/^\//, "");
}

function articleUrl(slug: string) {
  return `/blog/${normalizeSlug(slug)}`;
}

function getInternalLinkUrl(link?: InternalLink) {
  if (!link) return "";
  return typeof link === "string" ? link : link.url;
}

function getInternalLinkLabel(article: BlogPost) {
  if (!article.internalLink) return "";
  if (typeof article.internalLink === "string") {
    return article.internalLinkLabel || "Voir le service";
  }

  return article.internalLink.text || "Voir le service";
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeObjective, setActiveObjective] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const allArticles = BLOG_POSTS as BlogPost[];
  const featuredArticles = allArticles.slice(0, 3);

  useEffect(() => {
    document.title = "Blog web, SEO, Google Ads & digital pour PME | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Guides VSW Digital sur la création de sites internet, SEO, Google Ads, applications web, cloud, WordPress, React, Firebase et automatisation pour PME."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "Tous") return allArticles.length;

    return allArticles.filter((article) => article.category === categoryName)
      .length;
  };

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "Tous" || article.category === selectedCategory;

      const summary = article.summary || article.introduction || "";

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        summary.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [allArticles, searchQuery, selectedCategory]);

  const findArticleBySlug = (slug: string) => {
    const clean = normalizeSlug(slug);
    return allArticles.find((article) => normalizeSlug(article.slug) === clean);
  };

  const selectedCategoryDescription =
    categories.find((category) => category.name === selectedCategory)?.desc ||
    "Tous nos articles, guides et dossiers pratiques.";

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
              Bibliothèque de ressources
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Blog web, SEO, Google Ads, applications web et{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                automatisation
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Des guides clairs pour aider les PME, artisans et entreprises de
              services à comprendre leurs priorités digitales : site internet,
              SEO, publicité, outils métier, cloud et maintenance.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#category-explorer-bar"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Consulter les dossiers
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Demander un diagnostic
              </Link>
            </div>
          </motion.div>

          {/* Widget catégories */}
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
                  <Bookmark className="h-4 w-4 text-[#3b82f6]" />
                  <span className="text-xs font-semibold text-slate-300">
                    Thématiques
                  </span>
                </div>

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  {allArticles.length} articles
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {categories
                  .filter((category) => category.name !== "Tous")
                  .map((category) => {
                    const Icon = category.icon;

                    return (
                      <button
                        key={category.name}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category.name);
                          const element = document.getElementById("articles-list");
                          element?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group rounded-2xl border border-white/10 bg-[#020617] p-4 text-left transition-all hover:border-blue-400/40 hover:bg-white/[0.06]"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                            <Icon className="h-4 w-4" />
                          </div>

                          <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-400">
                            {getCategoryCount(category.name)}
                          </span>
                        </div>

                        <span className="block truncate text-sm font-bold text-white transition-colors group-hover:text-blue-300">
                          {category.name}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHARTE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                <Bookmark className="h-7 w-7" />
              </div>

              <h2 className="font-display text-2xl font-bold text-[#0f172a]">
                Notre charte éditoriale
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Les sujets digitaux peuvent vite devenir flous ou trop
                techniques. Notre objectif est d’expliquer simplement, avec
                prudence et honnêteté, sans promesses irréalistes.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                {[
                  "Ressources gratuites",
                  "Conseils concrets",
                  "Ton clair et accessible",
                  "Pas de promesse SEO magique",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Conseils fiables & compréhensibles
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Une bibliothèque pour soutenir vos choix digitaux
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Le blog VSW Digital aide les dirigeants de PME à mieux comprendre
                les enjeux d’un site internet, d’une stratégie SEO, d’une
                campagne Google Ads, d’une application web ou d’une
                automatisation.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Vulgarisation",
                    desc: "Expliquer sans jargon inutile les notions techniques importantes.",
                  },
                  {
                    title: "Actions concrètes",
                    desc: "Donner des pistes applicables pour améliorer un site ou un processus.",
                  },
                  {
                    title: "Repères budgétaires",
                    desc: "Aider à comprendre ce qui influence les coûts d’un projet digital.",
                  },
                  {
                    title: "Réalisme",
                    desc: "Éviter les promesses simplistes et privilégier les bases solides.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-display font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section
        id="category-explorer-bar"
        className="bg-slate-50 py-20 scroll-mt-24"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Explorer par compétence
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
              Choisissez une thématique
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sélectionnez un univers pour filtrer les articles disponibles.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all ${
                    selectedCategory === category.name
                      ? "border-[#3b82f6] bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-[#3b82f6]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      selectedCategory === category.name
                        ? "bg-blue-400 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {getCategoryCount(category.name)}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-3xl rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm leading-7 text-slate-500">
            {selectedCategoryDescription}
          </p>
        </div>
      </section>

      {/* ARTICLES À LA UNE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Analyses de référence
              </span>

              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
                Articles à la une
              </h2>
            </div>

            <span className="text-sm text-slate-400">
              Sélection de ressources utiles
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </div>
      </section>

      {/* LISTE DES ARTICLES */}
      <section
        id="articles-list"
        className="bg-slate-50 py-24 md:py-32 scroll-mt-24"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Bibliothèque opérationnelle
              </span>

              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a]">
                {selectedCategory === "Tous"
                  ? "Tous nos guides"
                  : `Guides : ${selectedCategory}`}
              </h2>
            </div>

            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Rechercher un mot-clé, une technologie..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#3b82f6] focus:ring-4 focus:ring-blue-500/10"
              />
              <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-12 text-center">
              <HelpCircle className="mx-auto h-12 w-12 text-slate-400" />

              <h3 className="mt-5 font-display text-2xl font-bold text-[#0f172a]">
                Aucun article trouvé
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
                Aucun contenu ne correspond à votre recherche actuelle.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tous");
                }}
                className="mt-6 rounded-2xl bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-400"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIENS SERVICES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                Du conseil à l’action
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Des articles reliés à nos expertises
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Chaque ressource peut vous aider à mieux comprendre un sujet,
                puis à choisir l’accompagnement adapté : site, SEO, Google Ads,
                application, cloud, maintenance ou audit.
              </p>

              <div className="mt-8 rounded-2xl bg-[#0f172a] p-6 text-white">
                <div className="mb-3 flex items-center gap-2 text-blue-300">
                  <BadgeAlert className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Notre philosophie
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  Pas de complexité inutile : nous recommandons une solution
                  seulement lorsqu’elle répond à un besoin réel.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Accéder directement à nos expertises
              </span>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.url}
                    to={service.url}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <h3 className="font-display font-bold text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.desc}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6]">
                      Voir le service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}

                <Link
                  to="/contact"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-[#3b82f6] p-5 font-semibold text-white transition-all hover:bg-blue-400 sm:col-span-2"
                >
                  <span>Parler directement de votre projet</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Besoin immédiat
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
              Cibler selon votre objectif
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sélectionnez votre priorité pour afficher des ressources adaptées.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-3">
              {objectives.map((objective, index) => {
                const Icon = objective.icon;

                return (
                  <button
                    key={objective.title}
                    type="button"
                    onClick={() => setActiveObjective(index)}
                    className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                      activeObjective === index
                        ? "border-[#0f172a] bg-[#0f172a] text-white shadow-xl shadow-slate-900/10"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        activeObjective === index
                          ? "bg-[#3b82f6] text-white"
                          : "bg-blue-50 text-[#3b82f6]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-display text-sm font-bold">
                      {objective.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <div className="mb-6">
                <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                  <FileText className="h-4 w-4" />
                  Ressources conseillées
                </span>

                <p className="text-sm leading-7 text-slate-600">
                  {objectives[activeObjective].desc}
                </p>
              </div>

              <div className="space-y-3">
                {objectives[activeObjective].slugs.map((slug) => {
                  const article = findArticleBySlug(slug);

                  if (!article) return null;

                  return (
                    <Link
                      key={slug}
                      to={articleUrl(article.slug)}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-blue-200 hover:bg-white hover:shadow-lg"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {article.category}
                        </span>

                        <h3 className="mt-1 font-display text-sm font-bold text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                          {article.title}
                        </h3>
                      </div>

                      <ChevronRight className="h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#3b82f6]" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
                <span className="text-xs text-slate-500">
                  Ressources utiles pour PME et indépendants
                </span>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6] hover:underline"
                >
                  Demander un diagnostic
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA AUDIT */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
        </div>

        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Diagnostic digital
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous ne savez pas par quelle action démarrer ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Un diagnostic permet d’identifier les priorités : site, SEO, Google
            Ads, vitesse mobile, maintenance, automatisation ou outil métier.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Demander un diagnostic
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#faqs-container-section"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              Consulter la FAQ
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faqs-container-section"
        className="bg-white py-24 md:py-32"
      >
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              Quelques réponses sur notre approche éditoriale et notre manière
              de relier les contenus aux services.
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
        </div>

        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Passer à l’action
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Consolidons votre présence digitale
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            VSW Digital vous aide à transformer vos idées en site, stratégie
            SEO, campagne Google Ads, application web ou automatisation utile.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Discuter de mon projet
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleCard({
  article,
  featured = false,
}: {
  article: BlogPost;
  featured?: boolean;
}) {
  const internalUrl = getInternalLinkUrl(article.internalLink);
  const internalLabel = getInternalLinkLabel(article);
  const summary = article.summary || article.introduction || "";

  return (
    <article
      className={`group flex flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 ${
        featured ? "bg-slate-50" : ""
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3b82f6]">
          {article.category}
        </span>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          {featured ? (
            <Clock className="h-4 w-4" />
          ) : (
            <Calendar className="h-4 w-4" />
          )}
          <span>{featured ? article.readTime : article.date}</span>
        </div>
      </div>

      <Link to={articleUrl(article.slug)}>
        <h3 className="font-display text-xl font-bold leading-tight text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
          {article.title}
        </h3>
      </Link>

      <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
        {summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.slice(0, featured ? 3 : 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
        <Link
          to={articleUrl(article.slug)}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3b82f6]"
        >
          Lire le dossier
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        {internalUrl && (
          <Link
            to={internalUrl}
            className="hidden text-xs font-semibold text-slate-400 transition-colors hover:text-[#3b82f6] sm:inline"
          >
            {internalLabel}
          </Link>
        )}
      </div>
    </article>
  );
}