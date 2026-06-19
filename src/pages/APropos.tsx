import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Check,
  TrendingUp,
  BookOpen,
  ShieldCheck,
  Compass,
  HelpCircle,
  ChevronDown,
  Workflow,
  CheckCircle2,
  XCircle,
  Database,
  Layout,
  Search,
  BarChart3,
  Code,
  Server,
  Wrench,
  Terminal,
  Laptop,
  Zap,
  HeartHandshake,
  Cpu,
} from "lucide-react";

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
    title: "Clarté",
    desc: "Nous expliquons les choix techniques avec des mots simples. Vous comprenez ce qui est fait, pourquoi c’est utile et comment cela sert votre activité.",
    icon: Compass,
  },
  {
    title: "Rigueur technique",
    desc: "Chaque projet est pensé avec une approche propre : structure claire, sécurité, performance, maintenance et évolutivité.",
    icon: ShieldCheck,
  },
  {
    title: "Pédagogie",
    desc: "Nous vous accompagnons pour que vous gardiez la maîtrise de vos outils, de vos accès, de vos contenus et de vos données.",
    icon: BookOpen,
  },
  {
    title: "Résultats concrets",
    desc: "Un site doit servir votre activité : améliorer votre image, votre visibilité, vos demandes de contact et votre organisation.",
    icon: TrendingUp,
  },
  {
    title: "Évolutivité",
    desc: "Nous construisons des bases capables d’évoluer : site vitrine, SEO, landing pages, automatisation, espace client ou application web.",
    icon: Zap,
  },
  {
    title: "Accompagnement humain",
    desc: "Nous privilégions une relation directe, claire et réactive, avec une compréhension réelle de votre métier et de vos priorités.",
    icon: HeartHandshake,
  },
];

const expertises: ExpertiseItem[] = [
  {
    title: "Création de sites internet professionnels",
    desc: "Conception de sites modernes, rapides, responsives et pensés pour inspirer confiance dès les premières secondes.",
    badge: "Site web",
    icon: Layout,
    details: [
      "Structure claire des pages",
      "Design responsive mobile",
      "Appels à l’action visibles",
      "Base SEO propre dès la création",
    ],
  },
  {
    title: "Référencement naturel SEO",
    desc: "Optimisation de votre site pour améliorer progressivement votre visibilité sur Google et attirer des visiteurs qualifiés.",
    badge: "Visibilité",
    icon: Search,
    details: [
      "Recherche de mots-clés",
      "Pages services optimisées",
      "Maillage interne cohérent",
      "SEO local selon votre zone d’activité",
    ],
  },
  {
    title: "Google Ads & génération de leads",
    desc: "Création de campagnes ciblées pour générer plus rapidement des appels, formulaires et demandes qualifiées.",
    badge: "Acquisition",
    icon: BarChart3,
    details: [
      "Campagnes Search ciblées",
      "Landing pages orientées conversion",
      "Suivi des formulaires et appels",
      "Optimisation progressive du budget",
    ],
  },
  {
    title: "Applications web sur mesure",
    desc: "Développement d’outils web adaptés à votre activité : espaces clients, tableaux de bord, formulaires avancés ou portails métier.",
    badge: "Application",
    icon: Code,
    details: [
      "React, Next.js et TypeScript",
      "Espaces sécurisés",
      "Tableaux de bord métier",
      "Connexion à des bases de données",
    ],
  },
  {
    title: "Cloud & automatisation",
    desc: "Automatisation de certaines tâches répétitives pour gagner du temps, centraliser vos données et fluidifier votre organisation.",
    badge: "Cloud",
    icon: Workflow,
    details: [
      "Firebase, Google Cloud, AWS",
      "Notifications automatiques",
      "Stockage sécurisé de documents",
      "Connexion entre formulaires et outils métier",
    ],
  },
  {
    title: "Maintenance et évolution",
    desc: "Suivi technique, corrections, mises à jour, sécurité, sauvegardes et amélioration progressive de votre présence digitale.",
    badge: "Suivi",
    icon: Wrench,
    details: [
      "Mises à jour techniques",
      "Sauvegardes régulières",
      "Corrections et petites évolutions",
      "Accompagnement après mise en ligne",
    ],
  },
];

const sectors = [
  {
    name: "Déménagement & transport",
    desc: "Sites orientés devis, pages locales, formulaires précis et visibilité SEO sur les trajets ou zones d’intervention.",
  },
  {
    name: "Sécurité privée",
    desc: "Présentation claire des prestations, réassurance, conformité, demande de devis et pages adaptées aux besoins B2B.",
  },
  {
    name: "Rénovation & BTP",
    desc: "Mise en avant des réalisations, pages services, preuves de confiance, zones d’intervention et demandes de devis.",
  },
  {
    name: "Réparation & dépannage",
    desc: "Visibilité locale, boutons d’appel rapides, informations claires, horaires, tarifs indicatifs et parcours mobile fluide.",
  },
  {
    name: "Formation & e-learning",
    desc: "Présentation des programmes, inscriptions, téléchargement de documents, espace apprenant ou automatisation des demandes.",
  },
  {
    name: "Domiciliation d’entreprises",
    desc: "Explication des formules, parcours d’inscription, dépôt de documents, signature, paiement et espace client.",
  },
  {
    name: "Commerces & restaurants",
    desc: "Site vitrine, menu, horaires, Google Business Profile, SEO local, réservation et présence mobile efficace.",
  },
  {
    name: "PME & services B2B",
    desc: "Positionnement clair, génération de leads, pages services, contenu SEO et outils internes évolutifs.",
  },
];

const differences: DifferenceItem[] = [
  {
    classic: "Un site générique construit rapidement sans vraie réflexion sur vos clients.",
    vsw: "Une structure pensée autour de vos services, de vos prospects et de vos objectifs commerciaux.",
  },
  {
    classic: "Un discours technique difficile à comprendre.",
    vsw: "Des explications claires, pédagogiques et orientées décision.",
  },
  {
    classic: "Des solutions figées ou difficiles à faire évoluer.",
    vsw: "Des bases modernes capables d’évoluer vers du SEO, des landing pages, des automatisations ou une application web.",
  },
  {
    classic: "Une approche centrée uniquement sur le design.",
    vsw: "Une approche qui associe design, contenu, SEO, performance, conversion et suivi.",
  },
  {
    classic: "Un manque de visibilité sur ce qui est réellement livré.",
    vsw: "Une méthode transparente avec des priorités, des livrables et un accompagnement clair.",
  },
];

const steps: StepItem[] = [
  {
    num: "01",
    title: "Cadrage",
    subTitle: "Comprendre",
    desc: "Nous commençons par comprendre votre métier, vos offres, vos clients, votre zone d’intervention, vos contraintes et vos objectifs.",
  },
  {
    num: "02",
    title: "Audit ou diagnostic",
    subTitle: "Analyser",
    desc: "Nous analysons votre site existant, votre visibilité, vos contenus, vos formulaires, votre SEO et vos freins éventuels.",
  },
  {
    num: "03",
    title: "Architecture",
    subTitle: "Structurer",
    desc: "Nous définissons les pages utiles, les messages clés, les appels à l’action, le maillage interne et la logique de conversion.",
  },
  {
    num: "04",
    title: "Création",
    subTitle: "Construire",
    desc: "Nous concevons une interface moderne, rapide, responsive et adaptée à votre image, avec une base technique propre.",
  },
  {
    num: "05",
    title: "Optimisation",
    subTitle: "Améliorer",
    desc: "Nous travaillons les contenus, le SEO, la performance, l’expérience mobile, les formulaires et le suivi des conversions.",
  },
  {
    num: "06",
    title: "Accompagnement",
    subTitle: "Faire évoluer",
    desc: "Après mise en ligne, nous pouvons assurer la maintenance, les évolutions, le suivi SEO et les améliorations progressives.",
  },
];

const technologies: TechItem[] = [
  {
    name: "WordPress",
    category: "CMS",
    desc: "Une solution efficace pour les sites vitrines, blogs, pages services et sites administrables par l’entreprise.",
    badge: "Administrable",
    icon: Layout,
    forWho: "Sites vitrines et contenus SEO",
  },
  {
    name: "React & Next.js",
    category: "Frontend",
    desc: "Une stack moderne pour créer des interfaces rapides, fluides, évolutives et adaptées aux projets plus avancés.",
    badge: "Performance",
    icon: Code,
    forWho: "Applications web et interfaces premium",
  },
  {
    name: "TypeScript",
    category: "Qualité",
    desc: "Un outil qui renforce la fiabilité du code et aide à limiter les erreurs lors du développement.",
    badge: "Robustesse",
    icon: Terminal,
    forWho: "Projets évolutifs et maintenables",
  },
  {
    name: "Tailwind CSS",
    category: "Design",
    desc: "Une approche moderne pour créer des interfaces propres, responsives et cohérentes sur tous les écrans.",
    badge: "Responsive",
    icon: Laptop,
    forWho: "Design moderne et rapide",
  },
  {
    name: "SEO & Analytics",
    category: "Acquisition",
    desc: "Structure SEO, contenus, suivi des conversions, mesure des formulaires et analyse des sources de trafic.",
    badge: "Mesure",
    icon: BarChart3,
    forWho: "Visibilité et génération de leads",
  },
  {
    name: "Firebase",
    category: "Backend",
    desc: "Authentification, base de données, stockage de documents et outils utiles pour des applications web rapides.",
    badge: "Cloud",
    icon: Database,
    forWho: "Espaces clients et portails web",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    desc: "Services cloud pour connecter, automatiser, héberger et faire évoluer certains processus métier.",
    badge: "Évolutif",
    icon: Server,
    forWho: "Automatisation et architecture cloud",
  },
  {
    name: "AWS",
    category: "Infrastructure",
    desc: "Services cloud pour hébergement, stockage, sauvegarde, automatisation et architecture technique plus avancée.",
    badge: "Infrastructure",
    icon: Cpu,
    forWho: "Projets cloud et continuité",
  },
];

const faqs: FaqItem[] = [
  {
    q: "VSW Digital est-elle une agence web classique ?",
    a: "VSW Digital est une structure à taille humaine qui associe création web, SEO, développement, cloud et automatisation. L’objectif est d’apporter aux PME une approche claire, technique et orientée résultats.",
  },
  {
    q: "Pourquoi choisir une approche technique pour un site vitrine ?",
    a: "Même un site vitrine doit être rapide, sécurisé, bien structuré, lisible sur mobile et optimisé pour Google. Une bonne base technique évite beaucoup de limites lors des futures évolutions.",
  },
  {
    q: "Travaillez-vous avec WordPress ou avec React / Next.js ?",
    a: "Les deux sont possibles. WordPress est très adapté aux sites administrables et au contenu. React ou Next.js sont pertinents pour des interfaces plus modernes, rapides, personnalisées ou évolutives.",
  },
  {
    q: "Le SEO est-il prévu dès la création du site ?",
    a: "Oui, c’est recommandé. La structure des pages, les titres, les contenus, les liens internes et la performance doivent être pensés dès le départ pour construire une base SEO plus saine.",
  },
  {
    q: "Pouvez-vous améliorer un site existant sans tout refaire ?",
    a: "Oui. Un audit permet de savoir si quelques optimisations suffisent ou si une refonte est préférable. Il peut s’agir du contenu, du SEO, du mobile, du formulaire, des CTA ou de la performance.",
  },
  {
    q: "Développez-vous des applications web sur mesure ?",
    a: "Oui. Nous pouvons concevoir des espaces clients, tableaux de bord, formulaires avancés, dépôts de documents, systèmes de notification ou outils métier connectés.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Vous pouvez gérer votre site si vous le souhaitez. Nous pouvons aussi proposer une maintenance pour assurer les mises à jour, sauvegardes, corrections, petites évolutions et améliorations continues.",
  },
];

export function APropos() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "À propos de VSW Digital | Agence web, SEO et cloud";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.32),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
          >
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 shadow-2xl shadow-blue-500/10 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#3b82f6]" />
              À propos de VSW Digital
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Une agence digitale à taille humaine, portée par une{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                vraie culture technique
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              VSW Digital accompagne les PME, artisans, commerçants et
              entreprises de services dans la création de sites internet
              professionnels, le SEO, Google Ads, les applications web, le cloud
              et l’automatisation.
            </p>

            <p className="mt-5 max-w-2xl border-l-2 border-blue-500/60 pl-4 text-sm leading-7 text-slate-400 md:text-base">
              Notre conviction : un site ne doit pas seulement être beau. Il
              doit être clair, rapide, visible, rassurant et utile pour votre
              activité.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Échanger sur mon projet
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Consulter nos services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="relative mx-auto hidden w-full max-w-xl lg:block"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="rounded-full bg-white/8 px-4 py-1 text-xs text-slate-300">
                  vsw-digital.fr
                </span>
              </div>

              <div className="rounded-[1.5rem] bg-[#f8fafc] p-6 text-[#0f172a]">
                <p className="text-sm font-medium text-slate-500">
                  Profil technique
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight">
                  Web, SEO, cloud & automatisation
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "Sites web & refonte", value: "Clarté + performance" },
                    { label: "SEO & Google Ads", value: "Visibilité + acquisition" },
                    { label: "Applications web", value: "Outils métier évolutifs" },
                    { label: "Cloud & données", value: "Automatisation progressive" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
                    >
                      <p className="text-sm font-bold text-[#0f172a]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#0f172a] p-5 text-white">
                  <p className="text-sm font-semibold">Approche VSW Digital</p>
                  <p className="mt-2 text-xs leading-6 text-slate-300">
                    Une solution adaptée au besoin réel : pas de complexité
                    inutile, mais une base sérieuse pour évoluer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10"
            >
              <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                Le visage derrière le code
              </span>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#3b82f6] to-sky-400 text-xl font-bold text-white">
                  V
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    Fondateur de VSW Digital
                  </h3>
                  <p className="text-sm text-slate-500">
                    Ingénierie informatique, web, SEO et cloud
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                VSW Digital est née d’une volonté simple : rendre les solutions
                digitales plus claires, plus solides et plus utiles pour les
                entreprises qui veulent avancer sans se perdre dans la technique.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    Culture
                  </span>
                  <span className="mt-1 block font-bold text-[#0f172a]">
                    Technique propre
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    Priorité
                  </span>
                  <span className="mt-1 block font-bold text-[#0f172a]">
                    Utilité métier
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                L’origine de VSW Digital
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Une agence née d’un parcours technique et d’une passion pour le
                web
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#3b82f6]" />

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  VSW Digital s’appuie sur une formation d’ingénieur en
                  informatique et sur une pratique concrète de la création de
                  sites internet, du SEO, de WordPress, de React, du cloud et de
                  l’automatisation.
                </p>

                <p>
                  L’objectif est de rapprocher deux mondes souvent séparés : la
                  rigueur technique d’un côté, et les besoins commerciaux très
                  concrets des PME, artisans, commerçants et entreprises de
                  services de l’autre.
                </p>

                <p>
                  Notre approche consiste à concevoir des outils clairs,
                  performants et évolutifs, sans complexité inutile, avec une
                  pédagogie constante et une attention particulière portée à la
                  visibilité, à la conversion et à l’usage réel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                Vision
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Un site internet doit devenir un{" "}
                <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
                  outil commercial mesurable
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                Pour nous, un site ne doit pas se limiter à une brochure en
                ligne. Il doit aider votre entreprise à être comprise, trouvée,
                contactée et suivie correctement.
              </p>

              <div className="mt-8 rounded-[2rem] bg-[#0f172a] p-7 text-white shadow-2xl shadow-slate-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-[#3b82f6]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Notre logique
                  </p>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  Associer création web, SEO, contenu, performance, expérience
                  mobile, suivi des conversions et automatisation progressive.
                  C’est cette combinaison qui permet à votre présence digitale
                  de devenir réellement utile.
                </p>
              </div>
            </motion.div>

            <div className="space-y-3">
              {[
                {
                  title: "Rassurer vos visiteurs",
                  desc: "Design clair, preuves de confiance, avis, réalisations et informations accessibles.",
                },
                {
                  title: "Présenter votre offre",
                  desc: "Pages services bien structurées et messages faciles à comprendre.",
                },
                {
                  title: "Être visible sur Google",
                  desc: "SEO technique, contenus utiles, pages locales et maillage interne cohérent.",
                },
                {
                  title: "Générer des contacts",
                  desc: "CTA visibles, formulaires simples, téléphone cliquable et suivi des conversions.",
                },
                {
                  title: "Évoluer avec le temps",
                  desc: "Ajout progressif de pages, outils, automatisations, espace client ou application web.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#3b82f6]">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              Nos valeurs
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des principes simples pour un accompagnement sérieux
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous cherchons à construire une relation claire, utile et durable,
              fondée sur la transparence, la rigueur et la compréhension de vos
              objectifs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              Expertises
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une double expertise entre web, SEO, cloud et outils métier
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              VSW Digital accompagne les projets de visibilité, de conversion et
              d’organisation digitale avec une approche progressive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertises.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.article
                  key={exp.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex h-full flex-col rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3b82f6]">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {exp.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {exp.desc}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {exp.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3b82f6]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Stack technique
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des technologies choisies selon le besoin réel du projet
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous ne choisissons pas une technologie par effet de mode. Nous la
              choisissons selon vos objectifs, votre budget, votre besoin
              d’autonomie et votre capacité d’évolution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.article
                  key={tech.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#3b82f6] ring-1 ring-slate-200 group-hover:bg-[#3b82f6] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0f172a]">
                    {tech.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {tech.desc}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-500">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#3b82f6]" />
                    {tech.forWho}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              Secteurs accompagnés
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Des solutions adaptées aux contraintes de chaque métier
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Chaque secteur a ses propres besoins : visibilité locale,
              demandes de devis, confiance, prise de rendez-vous, dépôt de
              documents ou automatisation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
                  <h3 className="font-display font-bold text-[#0f172a]">
                    {sector.name}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              Ce qui nous distingue
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une approche plus claire, plus technique et plus utile
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nous privilégions une méthode transparente, progressive et
              adaptée à votre réalité plutôt qu’une solution standardisée.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                  <XCircle className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f172a]">
                  Approche standard
                </h3>
              </div>

              <div className="space-y-4">
                {differences.map((item) => (
                  <div
                    key={item.classic}
                    className="flex gap-3 border-b border-slate-100 pb-4 text-sm leading-7 text-slate-600 last:border-0 last:pb-0"
                  >
                    <span className="font-bold text-rose-500">✕</span>
                    <span>{item.classic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3b82f6]/20 blur-3xl" />

              <div className="relative mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Approche VSW Digital
                </h3>
              </div>

              <div className="relative space-y-4">
                {differences.map((item) => (
                  <div
                    key={item.vsw}
                    className="flex gap-3 border-b border-white/10 pb-4 text-sm leading-7 text-slate-200 last:border-0 last:pb-0"
                  >
                    <span className="font-bold text-[#3b82f6]">✓</span>
                    <span>{item.vsw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              Méthode
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Une démarche structurée, étape par étape
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Un projet digital réussi commence par une bonne compréhension,
              puis avance avec des priorités claires.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-4xl font-black text-[#3b82f6]/20">
                    {step.num}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3b82f6]">
                    {step.subTitle}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0f172a]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHIQUE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20 md:p-10">
              <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-400/10 blur-3xl" />

              <span className="relative inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Éthique
              </span>

              <h3 className="relative mt-7 font-display text-3xl font-bold tracking-tight">
                Un partenariat fondé sur la clarté
              </h3>

              <p className="relative mt-5 text-sm leading-7 text-slate-300">
                Notre rôle n’est pas de complexifier votre projet, mais de vous
                aider à prendre les bonnes décisions : ce qu’il faut faire
                maintenant, ce qui peut attendre, et ce qui est réellement utile
                pour votre activité.
              </p>
            </div>

            <div>
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                Transparence
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Des recommandations adaptées à votre situation réelle
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Conseils utiles",
                    desc: "Nous évitons les solutions inutiles ou disproportionnées.",
                  },
                  {
                    title: "Progressivité",
                    desc: "Vous pouvez avancer étape par étape selon vos priorités.",
                  },
                  {
                    title: "Transparence",
                    desc: "Les choix techniques sont expliqués clairement.",
                  },
                  {
                    title: "Propriété",
                    desc: "Vous gardez la maîtrise de vos accès, contenus et outils.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <h3 className="font-display font-bold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
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
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes sur VSW Digital
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Voici les réponses aux questions les plus courantes avant de
              lancer un projet web, SEO, cloud ou application.
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
                    onClick={() => toggleFaq(index)}
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
            Échange de cadrage
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous cherchez un partenaire digital sérieux pour faire avancer votre
            projet ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre activité, vos objectifs et vos blocages
            actuels. VSW Digital vous aide à identifier les actions les plus
            utiles pour améliorer votre présence en ligne.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Échanger sur mon projet
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}