import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Layout,
  Search,
  BarChart,
  Settings,
  Code2,
  Cloud,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { services } from "../../data/services";

const icons = [
  Layout,
  Search,
  BarChart,
  Code2,
  Cloud,
  Settings,
  RefreshCw,
  ShieldCheck,
];

export function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0f172a]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />
      </div>

      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6] shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            Nos expertises digitales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
          >
            Des services pensés pour créer, attirer et{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
              convertir vos futurs clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
          >
            VSW Digital réunit création web, SEO, Google Ads, applications sur
            mesure, cloud et automatisation pour construire une présence
            digitale claire, performante et évolutive.
          </motion.p>
        </div>

        {/* Grille services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* halo hover */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#3b82f6]/0 blur-2xl transition-all duration-300 group-hover:bg-[#3b82f6]/15" />

                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white group-hover:ring-[#3b82f6]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="relative mb-3 font-display text-xl font-bold tracking-tight text-[#0f172a]">
                  {service.title}
                </h3>

                <p className="relative mb-7 flex-1 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>

                {service.href && (
                  <Link
                    to={service.href}
                    className="relative mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] transition-colors hover:text-[#0f172a]"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Bande CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-[#0f172a] p-8 text-center shadow-2xl shadow-slate-900/20 md:p-10"
        >
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Une stratégie digitale cohérente
            </p>

            <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Besoin d’un site, de visibilité ou d’un outil web sur mesure ?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Nous pouvons analyser votre situation actuelle et vous proposer les
              actions prioritaires : site internet, SEO, landing page, Google
              Ads, automatisation ou application métier.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-7 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Voir tous nos services
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Demander un audit gratuit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}