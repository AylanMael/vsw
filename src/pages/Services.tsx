import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers3,
  Target,
} from "lucide-react";
import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesGrid } from "../components/services/ServicesGrid";

export const metadata = {
  title: "Services web, SEO, Google Ads et cloud pour PME | VSW Digital",
  description:
    "Découvrez les services de VSW Digital : création de sites internet, SEO, Google Ads, applications web, cloud, automatisation, maintenance et accompagnement digital pour PME.",
};

const visionPoints = [
  "Une image professionnelle qui inspire confiance",
  "Une visibilité Google pensée dès la structure",
  "Des pages conçues pour générer des demandes qualifiées",
  "Des outils digitaux évolutifs selon votre activité",
];

const paths = [
  {
    icon: Target,
    title: "Vous voulez générer plus de demandes",
    desc: "Nous travaillons votre site, vos appels à l’action, vos landing pages, votre SEO et vos campagnes Google Ads.",
    link: "/audit-digital",
    cta: "Demander un audit",
  },
  {
    icon: Layers3,
    title: "Vous voulez moderniser votre présence",
    desc: "Nous pouvons créer ou refondre votre site pour améliorer votre image, votre clarté, votre performance et votre crédibilité.",
    link: "/creation-site-internet",
    cta: "Créer un site professionnel",
  },
  {
    icon: Compass,
    title: "Vous voulez structurer votre activité",
    desc: "Nous concevons des applications web, espaces clients, tableaux de bord, formulaires avancés et automatisations cloud.",
    link: "/application-web-sur-mesure",
    cta: "Découvrir les applications web",
  },
];

export function Services() {
  return (
    <div className="flex flex-col">
      <ServicesHero />

      {/* Vision */}
      <section className="relative isolate overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]">
                Vision globale
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Un site seul ne suffit plus : il faut construire un{" "}
                <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
                  écosystème digital utile
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                Pour obtenir des résultats, il faut penser l’ensemble de la
                chaîne : image professionnelle, visibilité Google, expérience
                utilisateur, publicité, suivi des conversions, automatisation et
                accompagnement technique.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                Avec VSW Digital, vous ne construisez pas seulement un site :
                vous mettez en place une présence digitale capable de soutenir
                votre activité et d’évoluer avec vos besoins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <h3 className="mb-5 font-display text-xl font-bold text-[#0f172a]">
                Ce que nous cherchons à construire
              </h3>

              <ul className="space-y-4">
                {visionPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                    <span className="text-sm leading-7 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Parcours selon besoin */}
      <section className="relative isolate overflow-hidden bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6]"
            >
              Trouver le bon point de départ
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
            >
              Chaque projet digital commence par un{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
                besoin concret
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Vous n’avez pas toujours besoin de tout faire en même temps. Nous
              vous aidons à prioriser les actions les plus utiles selon votre
              situation actuelle.
            </motion.p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {paths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-[#0f172a]">
                    {item.title}
                  </h3>

                  <p className="mb-7 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] transition-colors hover:text-[#0f172a]"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Vous avez un projet web, SEO, application ou automatisation ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Présentez-nous votre activité, vos objectifs et vos difficultés
              actuelles. VSW Digital vous aide à identifier les services les
              plus utiles pour développer votre visibilité, générer des demandes
              qualifiées et structurer votre organisation.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-700/30 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-800/40"
              >
                Demander un audit gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}