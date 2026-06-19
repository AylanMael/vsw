import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle,
  Code2,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Expertise technique solide",
    desc: "Une approche issue de l’ingénierie informatique pour créer des sites, applications et solutions digitales fiables.",
  },
  {
    icon: Search,
    title: "SEO pensé dès le départ",
    desc: "Chaque projet est structuré pour améliorer la visibilité sur Google, avec des contenus clairs et un maillage cohérent.",
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
  "Accompagnement avant et après la mise en ligne",
];

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex rounded-full bg-electric-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-blue"
            >
              Pourquoi VSW Digital ?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-display text-3xl font-bold leading-tight text-navy-900 md:text-5xl"
            >
              Une vision technique et stratégique pour{" "}
              <span className="text-electric-blue">développer votre présence digitale</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10 max-w-xl text-base leading-7 text-navy-900/70 md:text-lg"
            >
              VSW Digital accompagne les PME, artisans, commerçants et
              entreprises de services avec une approche complète : création de
              site internet, SEO, Google Ads, applications web, cloud et
              automatisation.
            </motion.p>

            <div className="space-y-6">
              {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-electric-blue">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="mb-1 font-display text-lg font-bold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-navy-900/65">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-2xl shadow-navy-900/20 md:p-12"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-electric-blue/20 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-electric-blue">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                Nos engagements
              </h3>

              <p className="mb-8 leading-7 text-white/75">
                Nous privilégions les solutions utiles, compréhensibles et
                évolutives. Chaque projet est pensé pour répondre à un objectif
                concret : visibilité, crédibilité, conversion ou organisation.
              </p>

              <ul className="mb-8 space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric-blue" />
                    <span className="text-sm leading-relaxed text-white/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded-xl bg-electric-blue px-6 py-3 text-center font-medium text-white transition-all hover:bg-white hover:text-navy-900"
                >
                  Parler de votre projet
                </Link>

                <Link
                  to="/a-propos"
                  className="rounded-xl border border-white/15 px-6 py-3 text-center font-medium text-white transition-all hover:bg-white/10"
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