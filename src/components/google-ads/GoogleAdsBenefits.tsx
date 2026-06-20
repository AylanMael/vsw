import { motion } from "motion/react";
import {
  Target,
  TrendingUp,
  DollarSign,
  Phone,
  Zap,
  Search,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Attirer des demandes qualifiées",
    desc: "Cibler les internautes qui recherchent activement vos services et les orienter vers une page adaptée.",
  },
  {
    icon: TrendingUp,
    title: "Ciblage plus précis",
    desc: "Définir vos mots-clés, votre zone géographique, vos horaires et vos annonces selon vos priorités commerciales.",
  },
  {
    icon: DollarSign,
    title: "Budget mieux piloté",
    desc: "Suivre les dépenses, ajuster les enchères et identifier progressivement les recherches les plus utiles.",
  },
  {
    icon: Phone,
    title: "Suivi des appels et formulaires",
    desc: "Mesurer les actions importantes : appels, demandes de devis, formulaires envoyés ou clics stratégiques.",
  },
  {
    icon: Zap,
    title: "Tests rapides",
    desc: "Tester plusieurs messages, offres ou zones afin de comprendre ce qui fonctionne le mieux pour votre activité.",
  },
  {
    icon: Search,
    title: "Complément au SEO",
    desc: "Utiliser Google Ads pour obtenir de la visibilité pendant que votre référencement naturel se construit dans le temps.",
  },
];

export function GoogleAdsBenefits() {
  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Bénéfices Google Ads
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des campagnes pensées pour mieux cibler, mesurer et ajuster
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Google Ads peut être un levier efficace lorsque les campagnes sont
            bien structurées, suivies et reliées à des pages d’atterrissage
            claires. L’objectif n’est pas seulement d’obtenir des clics, mais de
            mieux comprendre ce qui génère des demandes utiles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#3b82f6] transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#3b82f6]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {benefit.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}