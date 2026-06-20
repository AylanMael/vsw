import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  FileText,
  Scale,
} from "lucide-react";

const legalSections = [
  {
    icon: Building2,
    title: "Éditeur du site",
    content: [
      "Le présent site est édité par VSW Digital.",
      "Responsable de la publication : Amar HACHOUR.",
      "Email : contact@vsw-digital.fr",
      "Téléphone : 06 51 46 02 57",
      "Forme juridique : SASU",
      "SIRET : à compléter",
      "RCS : à compléter",
      "Capital social : 3 000 €",
    ],
  },
  {
    icon: Server,
    title: "Hébergement",
    content: [
      "Le site est hébergé par : Google Cloud.",
      "Nom de l’hébergeur : Google LLC",
      "Adresse de l’hébergeur : 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
      "Site web de l’hébergeur : https://cloud.google.com/",
    ],
  },
  {
    icon: FileText,
    title: "Propriété intellectuelle",
    content: [
      "L’ensemble des contenus présents sur le site VSW Digital, notamment les textes, éléments graphiques, logos, icônes, images, maquettes, interfaces et structures de pages, sont protégés par le droit de la propriété intellectuelle.",
      "Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans autorisation préalable écrite de VSW Digital est interdite.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Données personnelles",
    content: [
      "Les informations transmises via les formulaires du site sont utilisées uniquement pour répondre aux demandes envoyées par les visiteurs.",
      "Les données collectées peuvent inclure le nom, l’adresse email, le numéro de téléphone, le nom de l’entreprise, le site internet et le contenu du message.",
      "Ces données ne sont pas revendues à des tiers.",
      "Conformément à la réglementation applicable, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à : contact@vsw-digital.fr.",
    ],
  },
  {
    icon: Scale,
    title: "Responsabilité",
    content: [
      "VSW Digital s’efforce de fournir des informations fiables et à jour sur son site.",
      "Toutefois, les informations présentées ont une valeur informative et ne constituent pas un engagement contractuel automatique.",
      "VSW Digital ne peut être tenu responsable d’une mauvaise utilisation du site, d’une interruption temporaire, d’une erreur technique ou d’un dommage indirect lié à la consultation du site.",
    ],
  },
  {
    icon: FileText,
    title: "Cookies",
    content: [
      "Le site peut utiliser des cookies nécessaires à son bon fonctionnement ou des outils de mesure d’audience, selon les services activés.",
      "Si des outils de suivi, de statistiques ou de publicité sont ajoutés, une politique de cookies adaptée devra être mise en place.",
    ],
  },
];

export function MentionsLegales() {
  useEffect(() => {
    document.title = "Mentions légales | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Mentions légales du site VSW Digital : éditeur, hébergement, propriété intellectuelle, données personnelles et responsabilité."
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
            Informations légales
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Mentions légales
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Cette page présente les informations relatives à l’éditeur du site,
            à son hébergement, à la propriété intellectuelle, aux données
            personnelles et aux responsabilités liées à l’utilisation du site.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-slate-100 bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-6 text-amber-950">
            <p className="text-sm leading-7">
              <strong>Important :</strong> certaines informations doivent être
              complétées avec les données exactes de l’entreprise : forme
              juridique, SIRET, RCS, capital social et hébergeur. Cette page est
              une base propre à adapter avant publication.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {legalSections.map((section) => {
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
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-[#0f172a]">
              Contact
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Pour toute question concernant le site, les contenus ou les données
              personnelles, vous pouvez contacter VSW Digital :
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:contact@vsw-digital.fr"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-[#0f172a] transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#3b82f6]"
              >
                <Mail className="h-5 w-5" />
                contact@vsw-digital.fr
              </a>

              <a
                href="tel:+33651460257"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-[#0f172a] transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#3b82f6]"
              >
                <Phone className="h-5 w-5" />
                06 51 46 02 57
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-500">
            Dernière mise à jour : juin 2026.
          </p>
        </div>
      </section>
    </main>
  );
}