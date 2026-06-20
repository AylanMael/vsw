import { CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  {
    title: "Vitrine Essentiel",
    tagline: "Présence professionnelle simple",
    idealFor:
      "Artisans, indépendants, professions libérales ou commerces qui veulent une présence claire et crédible.",
    price: "1 290 €",
    duration: "2 à 3 semaines",
    features: [
      "4 à 5 pages clés de présentation",
      "Design moderne et responsive",
      "Formulaire de contact",
      "Base SEO technique",
      "Téléphone cliquable sur mobile",
      "Conseil pour hébergement et nom de domaine",
    ],
    isPopular: false,
    ctaText: "Demander cette formule",
    badge: "Pack démarrage",
  },
  {
    title: "Vitrine Pro SEO",
    tagline: "Site structuré pour PME locale",
    idealFor:
      "PME, artisans et entreprises de services qui veulent mieux présenter leurs offres et renforcer leur visibilité locale.",
    price: "2 290 €",
    duration: "3 à 5 semaines",
    features: [
      "Pages services structurées",
      "Rédaction ou optimisation des contenus",
      "Structure SEO locale",
      "Optimisation mobile et performance",
      "Mise en valeur des avis ou références",
      "Connexion possible à Search Console",
      "Conseils de suivi après lancement",
    ],
    isPopular: true,
    ctaText: "Demander la formule Pro",
    badge: "Idéal PME locale",
  },
  {
    title: "Premium Évolutif",
    tagline: "Projet avancé ou sur mesure",
    idealFor:
      "Entreprises qui souhaitent un site plus complet, une image haut de gamme ou des fonctionnalités spécifiques.",
    price: "Sur devis",
    duration: "4 à 8 semaines",
    features: [
      "Design personnalisé plus avancé",
      "Structure multi-services, multi-villes ou multilingue",
      "Espace client ou portail possible",
      "Connexion possible à un CRM ou outil métier",
      "Suivi des conversions Google / Meta",
      "Optimisation technique selon le projet",
      "Accompagnement après lancement selon besoin",
    ],
    isPopular: false,
    ctaText: "Demander une étude",
    badge: "Projet sur mesure",
  },
];

export function CreationOffers() {
  return (
    <section className="relative border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Formules indicatives
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des formules adaptées à votre niveau de projet
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Ces offres donnent un premier repère de budget. Le devis final
            dépend du nombre de pages, du niveau de design, des contenus, des
            fonctionnalités et des intégrations souhaitées.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className={`relative flex flex-col justify-between rounded-[2rem] p-8 transition-all duration-300 ${
                offer.isPopular
                  ? "border-2 border-[#3b82f6] bg-[#0f172a] text-white shadow-2xl shadow-blue-500/10 lg:-translate-y-2"
                  : "border border-slate-200 bg-slate-50 text-[#0f172a] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
              }`}
            >
              {offer.isPopular && (
                <div className="absolute right-1/2 top-0 flex translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#3b82f6] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-500/30">
                  <Sparkles className="h-3 w-3" />
                  Recommandé
                </div>
              )}

              <div>
                {/* Badge */}
                <span
                  className={`mb-6 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                    offer.isPopular
                      ? "border-white/10 bg-white/10 text-blue-200"
                      : "border-slate-200 bg-white text-slate-500"
                  }`}
                >
                  {offer.badge}
                </span>

                <h3 className="font-display text-2xl font-bold">
                  {offer.title}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    offer.isPopular ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {offer.tagline}
                </p>

                {/* Price */}
                <div
                  className={`my-7 flex items-baseline gap-2 border-b pb-7 ${
                    offer.isPopular
                      ? "border-white/10"
                      : "border-slate-200"
                  }`}
                >
                  <span className="font-display text-4xl font-bold">
                    {offer.price}
                  </span>

                  {offer.price !== "Sur devis" && (
                    <span
                      className={`text-sm font-semibold ${
                        offer.isPopular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      HT
                    </span>
                  )}
                </div>

                {/* Ideal for */}
                <p
                  className={`mb-7 text-sm leading-7 ${
                    offer.isPopular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {offer.idealFor}
                </p>

                {/* Duration */}
                <div
                  className={`mb-8 flex items-center gap-2 text-sm font-semibold ${
                    offer.isPopular ? "text-emerald-300" : "text-[#3b82f6]"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                  <span>Délai indicatif : {offer.duration}</span>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6"
                    >
                      <CheckCircle
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          offer.isPopular
                            ? "text-blue-300"
                            : "text-emerald-500"
                        }`}
                      />

                      <span
                        className={
                          offer.isPopular ? "text-slate-100" : "text-slate-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`mt-auto flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center font-semibold transition-all duration-300 ${
                  offer.isPopular
                    ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                    : "border border-slate-200 bg-white text-[#0f172a] shadow-sm hover:border-[#0f172a] hover:bg-[#0f172a] hover:text-white"
                }`}
              >
                {offer.ctaText}
              </Link>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
          Les prix et délais sont donnés à titre indicatif. Un devis précis est
          établi après analyse du besoin, des contenus, des fonctionnalités et
          des contraintes techniques du projet.
        </p>
      </div>
    </section>
  );
}