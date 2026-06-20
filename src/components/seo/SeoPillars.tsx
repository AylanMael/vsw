import { motion } from "motion/react";
import { Code2, FileText, Share2, ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Code2,
    title: "Optimisation technique",
    subtitle: "Une base propre pour faciliter l’exploration et la compréhension du site",
    desc: "Avant de produire du contenu, le site doit reposer sur une structure technique saine : pages rapides, HTML clair, balises bien organisées, maillage interne cohérent et compatibilité mobile.",
    points: [
      "Amélioration de la vitesse et de l’expérience mobile",
      "Structure HTML claire et balisage cohérent",
      "Données structurées Schema.org lorsque cela est pertinent",
      "Sitemap.xml et robots.txt correctement configurés",
      "Pages lisibles sur mobile, tablette et ordinateur",
    ],
    tag: "Base technique",
    color: "from-blue-500/10 to-transparent border-blue-500/15",
  },
  {
    num: "02",
    icon: FileText,
    title: "Contenu & sémantique",
    subtitle: "Créer des pages utiles, claires et alignées avec les recherches des clients",
    desc: "Le SEO repose sur des contenus capables de répondre aux vraies questions des internautes. Chaque page doit être structurée autour d’un service, d’une intention de recherche et d’un objectif de conversion réaliste.",
    points: [
      "Recherche de mots-clés selon votre activité",
      "Organisation des contenus par thématiques",
      "Rédaction claire, utile et orientée utilisateur",
      "Titres, balises et liens internes cohérents",
      "Appels à l’action adaptés à chaque page",
    ],
    tag: "Contenu utile",
    color: "from-purple-500/10 to-transparent border-purple-500/15",
  },
  {
    num: "03",
    icon: Share2,
    title: "Popularité & SEO local",
    subtitle: "Renforcer progressivement la crédibilité du site et de l’entreprise",
    desc: "La visibilité dépend aussi de la confiance accordée à votre site et à votre entreprise. Cela passe par une présence locale cohérente, une fiche Google Business bien renseignée et des signaux de notoriété travaillés avec prudence.",
    points: [
      "Optimisation de la fiche Google Business",
      "Cohérence des informations locales",
      "Pistes de liens et citations de qualité",
      "Analyse de la concurrence locale",
      "Suivi progressif des signaux de visibilité",
    ],
    tag: "Visibilité locale",
    color: "from-amber-500/10 to-transparent border-amber-500/15",
  },
];

export function SeoPillars() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Les piliers du SEO
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Trois leviers pour construire une visibilité SEO solide
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Le référencement naturel ne repose pas sur une seule action. Il
            combine une base technique propre, des contenus utiles et des signaux
            de confiance construits dans le temps.
          </p>
        </div>

        {/* Pillars */}
        <div className="mx-auto max-w-5xl space-y-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r ${pillar.color} p-8 shadow-xl shadow-slate-950/20 md:p-10`}
              >
                {/* Background number */}
                <div className="pointer-events-none absolute -right-5 -top-8 select-none font-mono text-[110px] font-black leading-none text-white/[0.03] md:text-[150px]">
                  {pillar.num}
                </div>

                <div className="relative z-10 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Left */}
                  <div className="space-y-5 lg:col-span-6">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                      {pillar.tag}
                    </span>

                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div>
                        <h3 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                          {pillar.title}
                        </h3>

                        <p className="mt-2 text-sm font-semibold leading-6 text-blue-200">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-300">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Points travaillés
                    </span>

                    <ul className="space-y-3.5">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                        >
                          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}