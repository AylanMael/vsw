import { CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  {
    title: "Contenus assistés par IA",
    price: "À partir de 190 €",
    desc: "Création ou amélioration de contenus avec l’aide de l’IA, puis relecture, structuration SEO et adaptation humaine au ton de l’entreprise.",
    features: [
      "Articles et pages services",
      "FAQ et descriptions d’offres",
      "Emails et textes commerciaux",
      "Adaptation au ton de l’entreprise",
    ],
    ctaText: "Améliorer mes contenus",
    badge: "Contenu",
    isCustom: false,
  },
  {
    title: "FAQ intelligente",
    price: "À partir de 390 €",
    desc: "Structuration d’une FAQ ou base de connaissances pour aider vos visiteurs, prospects ou clients à trouver les bonnes réponses.",
    features: [
      "FAQ structurée",
      "Documentation client claire",
      "Support de premier niveau",
      "Contenus connectables à un assistant IA",
    ],
    ctaText: "Créer une FAQ",
    badge: "Base de connaissances",
    isCustom: false,
    isPopular: true,
  },
  {
    title: "Assistant IA pour site",
    price: "Sur devis",
    desc: "Assistant intégré au site pour guider vos visiteurs vers les bons services, pages ou formulaires selon leurs besoins.",
    features: [
      "Réponses aux questions fréquentes",
      "Orientation vers les services",
      "Aide à préparer une demande",
      "Réduction de certaines demandes répétitives",
    ],
    ctaText: "Étudier mon assistant",
    badge: "Assistant",
    isCustom: true,
  },
  {
    title: "Chatbot métier IA",
    price: "Sur devis",
    desc: "Assistant connecté à vos contenus validés : pages, FAQ, documents, offres ou procédures, avec réponses encadrées.",
    features: [
      "Réponses basées sur vos contenus",
      "Support prospect encadré",
      "Orientation personnalisée",
      "Amélioration progressive selon les retours",
    ],
    ctaText: "Créer un chatbot métier",
    badge: "Chatbot",
    isCustom: true,
  },
  {
    title: "Tri intelligent des demandes",
    price: "Sur devis",
    desc: "Analyse des formulaires, emails ou demandes entrantes pour faciliter la qualification, le résumé et l’orientation.",
    features: [
      "Qualification des prospects",
      "Résumé de demande",
      "Préparation de réponse brouillon",
      "Notification à l’équipe concernée",
    ],
    ctaText: "Qualifier mes demandes",
    badge: "Workflow IA",
    isCustom: true,
  },
  {
    title: "Lecture intelligente de documents",
    price: "Sur devis",
    desc: "Extraction et résumé d’informations depuis des documents PDF ou images : factures, justificatifs, Kbis ou dossiers clients.",
    features: [
      "Extraction d’informations",
      "Classement de documents",
      "Détection de pièces manquantes",
      "Aide au traitement interne",
    ],
    ctaText: "Analyser mes documents",
    badge: "Documents",
    isCustom: true,
  },
];

export function AiOffers() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#3b82f6]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Offres IA
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Des solutions IA adaptées à vos besoins réels
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Certaines prestations peuvent être cadrées avec un prix d’entrée.
            Les assistants, chatbots, lectures de documents ou workflows IA sont
            chiffrés après analyse du périmètre et des données disponibles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 ${
                offer.isPopular
                  ? "border-[#3b82f6]"
                  : "border-slate-200 hover:border-blue-200"
              }`}
            >
              {offer.isPopular && (
                <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-[#3b82f6] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/20">
                  <Sparkles className="h-3 w-3" />
                  Recommandé
                </div>
              )}

              <span
                className={`mb-6 inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                  offer.isCustom
                    ? "border-purple-100 bg-purple-50 text-purple-700"
                    : "border-blue-100 bg-blue-50 text-blue-700"
                }`}
              >
                {offer.badge}
              </span>

              <h3 className="font-display text-2xl font-bold text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                {offer.title}
              </h3>

              <p className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#3b82f6]">
                {offer.price}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {offer.desc}
              </p>

              <ul className="mt-7 space-y-4">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact"
                  className={`flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center font-semibold transition-all duration-300 ${
                    offer.isPopular
                      ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                      : "bg-[#0f172a] text-white hover:bg-[#3b82f6]"
                  }`}
                >
                  {offer.ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Notes */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-[#0f172a]">
              Tarifs indicatifs
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Tarifs indicatifs hors taxes. Les services IA sur mesure sont
              chiffrés après analyse du besoin, des données disponibles, des
              outils à connecter et du niveau d’automatisation souhaité.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50/70 p-6">
            <h3 className="font-display text-lg font-bold text-[#0f172a]">
              IA utile, encadrée et progressive
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Nous intégrons l’IA là où elle apporte un vrai gain : traitement
              des demandes, documents, contenus, FAQ, automatisation et
              assistance aux utilisateurs. Chaque solution est cadrée selon vos
              données, vos objectifs et le niveau de supervision souhaité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}