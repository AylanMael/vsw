import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const servicesLinks = [
  { label: "Création site internet", path: "/creation-site-internet" },
  { label: "Refonte de site", path: "/refonte-site-internet" },
  { label: "Référencement SEO", path: "/referencement-seo" },
  { label: "Google Ads", path: "/google-ads" },
  { label: "Application web sur mesure", path: "/application-web-sur-mesure" },
  { label: "Cloud & automatisation", path: "/cloud-automatisation" },
  { label: "Maintenance site internet", path: "/maintenance-site-internet" },
  { label: "Audit digital", path: "/audit-digital" },
];

const companyLinks = [
  { label: "À propos", path: "/a-propos" },
  { label: "Réalisations", path: "/realisations" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const legalLinks = [
  { label: "Mentions légales", path: "/mentions-legales" },
  { label: "Politique de confidentialité", path: "/politique-confidentialite" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0f172a] text-white">
      {/* Décor subtil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3b82f6]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr_0.8fr_0.9fr]">
          {/* Marque */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/logo-vsw.webp"
                alt="VSW Digital"
                width="770"
                height="200"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Création de sites internet, SEO, Google Ads, applications web,
              cloud et automatisation pour PME, artisans, commerçants et
              entreprises de services.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-sm font-semibold text-white">
                Agence web & solutions digitales
              </p>
              <p className="mt-1 text-xs leading-6 text-slate-300">
                Une approche technique, claire et orientée résultats.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-display text-base font-bold text-white">
              Services
            </h3>

            <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {servicesLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="transition-colors hover:text-[#3b82f6]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="mb-5 font-display text-base font-bold text-white">
              Entreprise
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              {companyLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="transition-colors hover:text-[#3b82f6]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-display text-base font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <a
                href="mailto:contact@vsw-digital.fr"
                className="flex items-start gap-3 transition-colors hover:text-[#3b82f6]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#3b82f6]" />
                <span>contact@vsw-digital.fr</span>
              </a>

              <a
                href="tel:+33651460257"
                className="flex items-start gap-3 transition-colors hover:text-[#3b82f6]"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#3b82f6]" />
                <span>06 51 46 02 57</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex font-semibold text-[#3b82f6] transition-colors hover:text-blue-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-300">© 2026 VSW Digital. Tous droits réservés.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-slate-300 transition-colors hover:text-[#3b82f6]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}