import { motion } from "motion/react";
import {
  Palette,
  Search,
  Megaphone,
  Code,
  Cloud,
  RefreshCw,
  Wrench,
  BarChart,
  ArrowRight,
  Sparkles,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Création site internet",
    desc: "Sites modernes, rapides, responsives et optimisés pour convertir vos visiteurs en demandes qualifiées.",
    link: "/creation-site-internet",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    desc: "Améliorez votre visibilité sur Google avec une structure claire, des contenus utiles et un SEO durable.",
    link: "/referencement-seo",
  },
  {
    icon: Megaphone,
    title: "Google Ads & leads",
    desc: "Générez rapidement des appels, demandes de devis et prospects qualifiés avec des campagnes ciblées.",
    link: "/google-ads",
  },
  {
    icon: Code,
    title: "Application web sur mesure",
    desc: "Espaces clients, tableaux de bord, outils métier et applications évolutives adaptées à votre activité.",
    link: "/application-web-sur-mesure",
  },
  {
    icon: Cloud,
    title: "Cloud & automatisation",
    desc: "Gagnez du temps avec des workflows, notifications, bases de données et solutions cloud sécurisées.",
    link: "/cloud-automatisation",
  },
  {
    icon: Brain,
    title: "IA & automatisation",
    desc: "Solutions concrètes pour traiter vos demandes, exploiter vos contenus et automatiser vos tâches avec supervision.",
    link: "/ia-automatisation-intelligente",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site",
    desc: "Modernisez votre image, votre SEO, votre performance mobile et votre capacité à générer des contacts.",
    link: "/refonte-site-internet",
  },
  {
    icon: Wrench,
    title: "Maintenance technique",
    desc: "Suivi, mises à jour, sécurité, sauvegardes, corrections et accompagnement après la mise en ligne.",
    link: "/maintenance-site-internet",
  },
  {
    icon: BarChart,
    title: "Audit digital",
    desc: "Analysez votre site, votre SEO, vos conversions et vos priorités pour améliorer vos résultats digitaux.",
    link: "/audit-digital",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services-list"
      className="relative isolate overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* Décor clair premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/15 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 translate-y-1/3 rounded-full bg-sky-300/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6] shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            Services principaux
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
          >
            Des solutions digitales pour construire, attirer et{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
              convertir
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Chaque service répond à un objectif concret : améliorer votre image,
            gagner en visibilité, générer des demandes ou structurer votre
            activité avec des outils digitaux fiables.
          </motion.p>
        </div>

        {/* Grille */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.42 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#3b82f6]/0 blur-2xl transition-all duration-300 group-hover:bg-[#3b82f6]/12" />

                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="relative mb-3 font-display text-xl font-bold tracking-tight text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                  {service.title}
                </h3>

                <p className="relative mb-7 flex-1 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>

                <Link
                  to={service.link}
                  className="relative mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] transition-colors hover:text-[#0f172a]"
                >
                  Découvrir ce service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}