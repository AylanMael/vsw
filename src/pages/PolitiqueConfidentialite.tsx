import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Mail,
  Scale,
  FileText,
  Users,
  Clock,
  Cookie,
} from "lucide-react";

const privacySections = [
  {
    icon: FileText,
    title: "Responsable du traitement",
    content: [
      "Le responsable du traitement des données collectées via le site est VSW Digital.",
      "Responsable de la publication : Amar HACHOUR.",
      "Email de contact : contact@vsw-digital.fr.",
    ],
  },
  {
    icon: Database,
    title: "Données collectées",
    content: [
      "Lorsque vous utilisez le formulaire de contact ou de demande de devis, nous pouvons collecter les informations que vous nous transmettez volontairement.",
      "Ces données peuvent inclure : nom, prénom, adresse e-mail, numéro de téléphone, nom de l’entreprise, site web, type de projet, budget indicatif, délai souhaité et contenu du message.",
    ],
  },
  {
    icon: Eye,
    title: "Finalités des traitements",
    content: [
      "Les données collectées sont utilisées pour répondre à vos demandes, comprendre votre besoin, échanger avec vous sur votre projet et assurer le suivi de la relation commerciale.",
      "Elles peuvent également être utilisées pour établir un devis, préparer une proposition commerciale ou recontacter une personne ayant sollicité VSW Digital.",
    ],
    list: [
      "Répondre aux demandes envoyées depuis le site.",
      "Préparer un devis ou une première analyse du projet.",
      "Échanger avec vous par email ou téléphone.",
      "Assurer le suivi commercial de la demande.",
      "Améliorer la qualité de nos services et de notre site.",
    ],
  },
  {
    icon: Scale,
    title: "Base légale",
    content: [
      "Les traitements reposent principalement sur l’intérêt légitime de VSW Digital à répondre aux demandes reçues et à assurer le suivi de ses prospects et clients.",
      "Lorsque cela est nécessaire, certains traitements peuvent reposer sur votre consentement, notamment pour des outils de mesure d’audience ou de prospection non strictement nécessaires.",
      "Le RGPD impose que tout traitement repose sur une base légale et que les personnes soient informées de la collecte, de ses finalités et de leurs droits. :contentReference[oaicite:1]{index=1}",
    ],
  },
  {
    icon: Users,
    title: "Destinataires des données",
    content: [
      "Les données sont destinées à VSW Digital et aux personnes chargées de traiter les demandes reçues.",
      "Elles peuvent être transmises à des prestataires techniques uniquement lorsque cela est nécessaire au fonctionnement du site, à l’hébergement, à la messagerie, au stockage ou à la maintenance.",
      "Les données ne sont pas revendues à des tiers.",
    ],
  },
  {
    icon: Clock,
    title: "Durée de conservation",
    content: [
      "Les données sont conservées pendant la durée nécessaire au traitement de la demande et au suivi de la relation commerciale.",
      "Les données personnelles ne doivent pas être conservées indéfiniment : une durée de conservation doit être définie en fonction de la finalité du traitement. :contentReference[oaicite:2]{index=2}",
      "À titre indicatif, les demandes de contact peuvent être conservées jusqu’à 3 ans après le dernier échange, sauf obligation légale ou relation contractuelle en cours.",
    ],
  },
  {
    icon: Lock,
    title: "Sécurité des données",
    content: [
      "VSW Digital met en œuvre des mesures techniques et organisationnelles raisonnables pour limiter les risques de perte, d’accès non autorisé, de modification ou de divulgation des données.",
      "Ces mesures peuvent inclure l’utilisation d’un hébergement sécurisé, de connexions protégées, de règles d’accès, de mots de passe robustes et de bonnes pratiques de maintenance.",
      "Aucune mesure de sécurité ne peut toutefois garantir une protection absolue contre tous les risques.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Vos droits",
    content: [
      "Conformément au RGPD, vous pouvez demander l’accès, la rectification, l’effacement, la limitation du traitement, l’opposition au traitement ou la portabilité de vos données lorsque ces droits sont applicables.",
      "Pour exercer vos droits, vous pouvez écrire à : contact@vsw-digital.fr.",
      "Vous pouvez également introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies et traceurs",
    content: [
      "Le site peut utiliser des cookies nécessaires à son bon fonctionnement.",
      "Si des outils de mesure d’audience, de publicité, de suivi ou de services tiers sont ajoutés, un bandeau de consentement et une gestion des préférences devront être mis en place lorsque la réglementation l’exige.",
      "Certains traceurs nécessitent l’information et le consentement préalable de l’utilisateur, tandis que d’autres peuvent être dispensés selon leur finalité. :contentReference[oaicite:3]{index=3}",
    ],
  },
];

export function PolitiqueConfidentialite() {
  useEffect(() => {
    document.title = "Politique de confidentialité | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Politique de confidentialité de VSW Digital : données collectées, finalités, conservation, droits RGPD, cookies et contact."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.04] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute -left-[10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#3b82f6]/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l’accueil
          </Link>

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Confidentialité
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Politique de confidentialité
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Cette page explique quelles données peuvent être collectées via le
            site VSW Digital, pourquoi elles sont utilisées, combien de temps
            elles peuvent être conservées et comment exercer vos droits.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-slate-100 bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-6 text-amber-950">
            <p className="text-sm leading-7">
              <strong>Note :</strong> cette politique doit être adaptée si vous
              ajoutez des outils tiers comme Google Analytics, Meta Pixel,
              reCAPTCHA, newsletter, publicité, espace client, paiement en ligne
              ou tout autre service traitant des données personnelles.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {privacySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#0f172a]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#0f172a]">
              Nous contacter
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Pour toute question concernant cette politique ou pour exercer vos
              droits relatifs à vos données personnelles, vous pouvez contacter
              VSW Digital :
            </p>

            <a
              href="mailto:contact@vsw-digital.fr"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-[#0f172a] transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#3b82f6]"
            >
              <Mail className="h-5 w-5" />
              contact@vsw-digital.fr
            </a>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-500">
            Dernière mise à jour : juin 2026.
          </p>
        </div>
      </section>
    </main>
  );
}