import { motion } from "motion/react";
import {
  Search,
  FileText,
  Settings,
  BarChart,
  Users,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Audit de compte",
    desc: "Analyser vos campagnes existantes, vos mots-clés, vos annonces, votre budget et votre suivi des conversions.",
  },
  {
    icon: Search,
    title: "Campagnes Search",
    desc: "Structurer des campagnes ciblées sur les recherches les plus pertinentes pour votre activité.",
  },
  {
    icon: Users,
    title: "Ciblage & mots-clés",
    desc: "Identifier les intentions de recherche, les zones prioritaires et les termes à exclure pour mieux piloter le budget.",
  },
  {
    icon: FileText,
    title: "Rédaction d’annonces",
    desc: "Créer des annonces claires, cohérentes avec vos services et alignées avec vos pages d’atterrissage.",
  },
  {
    icon: BarChart,
    title: "Landing pages",
    desc: "Créer ou améliorer des pages de destination pour faciliter la compréhension, la confiance et la prise de contact.",
  },
  {
    icon: Phone,
    title: "Suivi des conversions",
    desc: "Mettre en place le suivi des appels, formulaires, clics importants et demandes utiles à votre activité.",
  },
];

export function GoogleAdsServices() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Accompagnement Google Ads
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Un accompagnement complet pour structurer vos campagnes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Une campagne Google Ads ne se limite pas à quelques annonces. Elle
            demande une stratégie de mots-clés, une structure claire, un suivi
            des conversions et des pages adaptées aux visiteurs.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6] transition-all duration-300 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#3b82f6]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}