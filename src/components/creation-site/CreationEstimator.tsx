import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Check,
  ArrowRight,
  Clock,
  Box,
  HelpCircle,
} from "lucide-react";

type SiteType = "essentiel" | "pro" | "web-app";
type PageSize = "one" | "few" | "medium" | "large";

const basePrices: Record<SiteType, number> = {
  essentiel: 1290,
  pro: 2290,
  "web-app": 3890,
};

const pageMultipliers: Record<PageSize, number> = {
  one: -150,
  few: 0,
  medium: 400,
  large: 950,
};

const addonPrices: Record<string, { price: number; name: string }> = {
  copywriting: {
    price: 450,
    name: "Rédaction optimisée SEO",
  },
  portal: {
    price: 650,
    name: "Espace client privé",
  },
  multilang: {
    price: 400,
    name: "Version multilingue",
  },
  tracking: {
    price: 250,
    name: "Suivi analytics et conversions",
  },
};

const siteTypeOptions: {
  id: SiteType;
  name: string;
  desc: string;
  badge?: string;
}[] = [
  {
    id: "essentiel",
    name: "Site Essentiel",
    desc: "Présence professionnelle simple et rapide.",
  },
  {
    id: "pro",
    name: "Site Pro SEO",
    desc: "Site structuré pour présenter vos services et faciliter les demandes.",
    badge: "Recommandé",
  },
  {
    id: "web-app",
    name: "Web app / Sur mesure",
    desc: "Portail client, outil métier ou fonctionnalités avancées.",
  },
];

const pageSizeOptions: {
  id: PageSize;
  name: string;
  desc: string;
}[] = [
  { id: "one", name: "Mono-page", desc: "Landing page" },
  { id: "few", name: "2 à 5 pages", desc: "Site standard" },
  { id: "medium", name: "6 à 12 pages", desc: "Multi-services" },
  { id: "large", name: "12 pages+", desc: "Projet étendu" },
];

const addonOptions = [
  {
    id: "copywriting",
    text: "Rédaction SEO",
    detail: "Rédaction ou optimisation des textes principaux.",
  },
  {
    id: "portal",
    text: "Espace client",
    detail: "Accès privé, dépôt de documents ou suivi de dossier.",
  },
  {
    id: "multilang",
    text: "Version multilingue",
    detail: "Préparation d’une ou plusieurs langues supplémentaires.",
  },
  {
    id: "tracking",
    text: "Suivi des conversions",
    detail: "Mesure des formulaires, appels ou actions importantes.",
  },
];

export function CreationEstimator() {
  const [siteType, setSiteType] = useState<SiteType>("pro");
  const [pageSize, setPageSize] = useState<PageSize>("few");
  const [addons, setAddons] = useState<string[]>(["copywriting"]);

  const handleToggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedPrice =
    basePrices[siteType] +
    pageMultipliers[pageSize] +
    addons.reduce((sum, current) => sum + addonPrices[current].price, 0);

  const getEstimatedDuration = () => {
    let baseDays = 14;

    if (siteType === "pro") baseDays = 21;
    if (siteType === "web-app") baseDays = 35;

    if (pageSize === "medium") baseDays += 5;
    if (pageSize === "large") baseDays += 10;

    if (addons.length > 2) baseDays += 4;

    return `${Math.ceil(baseDays / 7)} à ${Math.ceil(
      (baseDays + 7) / 7
    )} semaines`;
  };

  const buildQueryString = () => {
    const selectedAddons = addons
      .map((id) => addonPrices[id]?.name)
      .filter(Boolean)
      .join(", ");

    const typeLabel =
      siteType === "essentiel"
        ? "Site Essentiel"
        : siteType === "pro"
          ? "Site Pro SEO"
          : "Web app / Sur mesure";

    const pageLabel =
      pageSize === "one"
        ? "Landing page"
        : pageSize === "few"
          ? "2 à 5 pages"
          : pageSize === "medium"
            ? "6 à 12 pages"
            : "12 pages et plus";

    const text = `Bonjour, je souhaite un devis indicatif pour un projet de type "${typeLabel}", avec un volume "${pageLabel}". Options souhaitées : ${selectedAddons || "aucune option sélectionnée"}. Budget estimatif affiché : environ ${calculatedPrice} € HT.`;

    return encodeURIComponent(text);
  };

  return (
    <section
      id="estimator"
      className="scroll-mt-24 border-b border-slate-100 bg-slate-50 py-24 md:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Simulateur indicatif
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Estimez rapidement le budget de votre projet
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Ce simulateur donne une première estimation indicative. Le prix final
            dépendra du contenu, des fonctionnalités, du niveau de design, des
            intégrations et du périmètre réel validé ensemble.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-[1.35fr_0.85fr]">
          {/* Form Side */}
          <div className="flex flex-col gap-8">
            {/* Step 1 */}
            <EstimatorBlock
              step="1"
              title="Type de site internet souhaité"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {siteTypeOptions.map((option) => {
                  const isActive = siteType === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSiteType(option.id)}
                      className={`relative rounded-2xl border p-5 text-left transition-all ${
                        isActive
                          ? "border-[#3b82f6] bg-blue-50 shadow-sm ring-4 ring-blue-500/10"
                          : "border-slate-200 bg-white hover:border-blue-200"
                      }`}
                    >
                      {option.badge && (
                        <span className="absolute -top-3 right-3 rounded-full bg-[#3b82f6] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/20">
                          {option.badge}
                        </span>
                      )}

                      <p className="font-display text-base font-bold text-[#0f172a]">
                        {option.name}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {option.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </EstimatorBlock>

            {/* Step 2 */}
            <EstimatorBlock step="2" title="Volume de pages">
              <div className="grid gap-3 sm:grid-cols-4">
                {pageSizeOptions.map((option) => {
                  const isActive = pageSize === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPageSize(option.id)}
                      className={`rounded-2xl border p-4 text-center transition-all ${
                        isActive
                          ? "border-[#3b82f6] bg-blue-50 shadow-sm ring-4 ring-blue-500/10"
                          : "border-slate-200 bg-white hover:border-blue-200"
                      }`}
                    >
                      <p className="font-display text-sm font-bold text-[#0f172a]">
                        {option.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {option.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </EstimatorBlock>

            {/* Step 3 */}
            <EstimatorBlock step="3" title="Modules et options">
              <div className="grid gap-4 sm:grid-cols-2">
                {addonOptions.map((addon) => {
                  const isActive = addons.includes(addon.id);

                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`relative flex items-start gap-3 rounded-2xl border p-5 text-left transition-all ${
                        isActive
                          ? "border-[#3b82f6] bg-blue-50 shadow-sm ring-4 ring-blue-500/10"
                          : "border-slate-200 bg-white hover:border-blue-200"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isActive
                            ? "border-[#3b82f6] bg-[#3b82f6] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isActive && <Check className="h-3.5 w-3.5" />}
                      </span>

                      <span>
                        <span className="block font-display text-sm font-bold text-[#0f172a]">
                          {addon.text}
                        </span>
                        <span className="mt-1 block text-xs leading-6 text-slate-500">
                          {addon.detail}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </EstimatorBlock>
          </div>

          {/* Calculator Output */}
          <div>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#3b82f6]/20 blur-2xl" />

              <div>
                <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300">
                    <Calculator className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Votre estimation
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Mise à jour instantanée
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Budget indicatif
                  </span>

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-blue-300 md:text-6xl">
                      {calculatedPrice.toLocaleString("fr-FR")} €
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      HT
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-slate-400">
                    Cette estimation n’est pas un devis définitif. Elle permet
                    simplement de cadrer un premier ordre de grandeur.
                  </p>
                </div>

                <div className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Délai estimatif
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {getEstimatedDuration()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Box className="h-5 w-5 shrink-0 text-emerald-400" />
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Base technique
                      </span>
                      <span className="text-sm font-semibold text-white">
                        React + Tailwind
                      </span>
                    </div>
                  </div>
                </div>

                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Généralement inclus dans le cadrage
                </span>

                <ul className="space-y-3">
                  {[
                    "Structure responsive mobile et desktop",
                    "Base SEO technique",
                    "Connexion possible à Search Console",
                    "Sécurisation HTTPS selon l’hébergement choisi",
                    "Conseils pour hébergement et maintenance",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  to={`/contact?subject=devis-simulateur&message=${buildQueryString()}`}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-4 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-400"
                >
                  Demander une estimation précise
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <p className="mt-3 text-center text-xs leading-6 text-slate-500">
                  Simulation sans engagement. Une estimation précise nécessite
                  une analyse du besoin réel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
          <p className="text-sm leading-7">
            Les montants affichés sont indicatifs. Ils peuvent varier selon la
            complexité du contenu, les fonctionnalités, les intégrations, les
            contraintes SEO, les délais et le niveau d’accompagnement demandé.
          </p>
        </div>
      </div>
    </section>
  );
}

function EstimatorBlock({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#3b82f6]">
          {step}
        </span>
        {title}
      </h3>

      {children}
    </motion.div>
  );
}