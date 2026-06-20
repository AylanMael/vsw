import { CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  {
    title: "Audit Google Ads",
    desc: "Analyse de vos campagnes existantes pour identifier les dépenses peu utiles, les problèmes de ciblage et les pistes d’amélioration.",
    features: [
      "Analyse des campagnes existantes",
      "Audit des mots-clés",
      "Vérification du suivi des conversions",
      "Recommandations prioritaires",
    ],
    ctaText: "Demander un audit",
    badge: "Diagnostic",
    isPopular: false,
  },
  {
    title: "Lancement de campagne",
    desc: "Création d’une campagne structurée pour tester votre marché, cibler les bonnes recherches et mesurer les premières actions utiles.",
    features: [
      "Recherche de mots-clés",
      "Structuration des groupes d’annonces",
      "Rédaction des annonces",
      "Configuration du suivi",
    ],
    ctaText: "Lancer une campagne",
    badge: "Création",
    isPopular: true,
  },
  {
    title: "Gestion mensuelle",
    desc: "Suivi régulier de vos campagnes pour analyser les données, ajuster les annonces et améliorer progressivement le pilotage du budget.",
    features: [
      "Suivi des performances",
      "Ajustement des mots-clés",
      "Tests d’annonces",
      "Reporting mensuel",
    ],
    ctaText: "Demander un suivi",
    badge: "Accompagnement",
    isPopular: false,
  },
];

export function GoogleAdsOffers() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-10 [background-size:24px_24px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Prestations Google Ads
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Des prestations adaptées à votre niveau de maturité publicitaire
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Que vous partiez de zéro ou que vous ayez déjà des campagnes actives,
            nous vous aidons à structurer, mesurer et améliorer vos actions
            publicitaires avec une approche claire et progressive.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] border p-8 transition-all duration-300 ${
                offer.isPopular
                  ? "border-[#3b82f6] bg-white/[0.08] shadow-2xl shadow-blue-500/10"
                  : "border-white/10 bg-white/[0.04] hover:border-blue-400/30 hover:bg-white/[0.07]"
              }`}
            >
              {offer.isPopular && (
                <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-[#3b82f6] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/20">
                  <Sparkles className="h-3 w-3" />
                  Recommandé
                </div>
              )}

              <div>
                <span
                  className={`mb-6 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                    offer.isPopular
                      ? "border-blue-400/30 bg-blue-400/10 text-blue-200"
                      : "border-white/10 bg-white/5 text-slate-400"
                  }`}
                >
                  {offer.badge}
                </span>

                <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-blue-300">
                  {offer.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {offer.desc}
                </p>

                <ul className="mt-8 space-y-4">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  className={`flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center font-semibold transition-all duration-300 ${
                    offer.isPopular
                      ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                      : "border border-white/10 bg-white/5 text-white hover:border-[#3b82f6] hover:bg-[#3b82f6]"
                  }`}
                >
                  {offer.ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-400">
          Les résultats d’une campagne Google Ads dépendent du secteur, de la
          concurrence, du budget, de la qualité des annonces, du suivi des
          conversions et de la page de destination.
        </p>
      </div>
    </section>
  );
}