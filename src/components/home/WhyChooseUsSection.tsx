import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle,
  Code2,
  Search,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Expertise technique solide",
    desc: "Une approche issue de l’ingénierie informatique pour créer des sites, applications et solutions digitales fiables, rapides et évolutives.",
  },
  {
    icon: Search,
    title: "SEO pensé dès le départ",
    desc: "Chaque projet est structuré pour améliorer la visibilité sur Google, avec des contenus clairs, des pages utiles et un maillage cohérent.",
  },
  {
    icon: TrendingUp,
    title: "Orientation résultats",
    desc: "L’objectif n’est pas seulement d’avoir un beau site, mais de générer plus de visibilité, de confiance et de demandes qualifiées.",
  },
];

const commitments = [
  "Écoute et analyse de votre besoin réel",
  "Conseils clairs, sans jargon inutile",
  "Solutions modernes, rapides et évolutives",
  "Design responsive adapté au mobile",
  "SEO, conversion et performance intégrés dès la conception",
  "Accompagnement avant et après la mise en ligne",
];

export function WhyChooseUsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0f172a]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.92fr]">
          {/* Colonne gauche */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6] shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              Pourquoi VSW Digital ?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mb-6 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
            >
              Une vision technique et stratégique pour{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
                développer votre présence digitale
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mb-10 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              VSW Digital accompagne les PME, artisans, commerçants et
              entreprises de services avec une approche complète : création de
              site internet, SEO, Google Ads, applications web, cloud et
              automatisation.
            </motion.p>

            <div className="space-y-5">
              {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3b82f6]/0 blur-2xl transition-all duration-300 group-hover:bg-[#3b82f6]/10" />

                    <div className="relative flex gap-4">
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#3b82f6] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="mb-1 font-display text-lg font-bold tracking-tight text-[#0f172a]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-7 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Carte droite */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/25 md:p-10"
          >
            {/* Décor carte */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3b82f6]/25 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-15" />
            </div>

            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-300 ring-1 ring-white/10">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
                  Engagements
                </div>
              </div>

              <h3 className="mb-4 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                Un accompagnement clair, humain et orienté résultats
              </h3>

              <p className="mb-8 leading-7 text-slate-300">
                Nous privilégions les solutions utiles, compréhensibles et
                évolutives. Chaque projet est pensé pour répondre à un objectif
                concret : visibilité, crédibilité, conversion ou organisation.
              </p>

              <ul className="mb-9 space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                    <span className="text-sm leading-relaxed text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mini bloc preuve */}
              <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6] text-white">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Une approche adaptée aux PME
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Des conseils concrets, des priorités claires et une
                      solution adaptée à votre budget, votre métier et vos
                      objectifs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  Parler de votre projet
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/a-propos"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}