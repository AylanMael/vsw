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
} from "lucide-react";
import { services } from "../../data/services";

const icons = [Layout, Search, BarChart, Code2, Cloud, Settings, RefreshCw, ShieldCheck];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex rounded-full bg-electric-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-blue"
          >
            Nos expertises digitales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-bold leading-tight text-navy-900 md:text-5xl"
          >
            Des services digitaux pensés pour{" "}
            <span className="text-electric-blue">développer votre activité</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-navy-900/65 md:text-lg"
          >
            Création de sites internet, SEO, Google Ads, applications web,
            automatisation et cloud : VSW Digital vous accompagne avec des
            solutions claires, modernes et orientées résultats.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-2xl hover:shadow-electric-blue/10"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-electric-blue transition-transform duration-300 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 font-display text-xl font-bold text-navy-900">
                  {service.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-navy-900/65">
                  {service.desc}
                </p>

                {service.href && (
                  <Link
                    to={service.href}
                    className="mt-auto inline-flex items-center text-sm font-semibold text-electric-blue transition-colors hover:text-navy-900"
                  >
                    En savoir plus
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/services"
            className="inline-flex rounded-xl bg-navy-900 px-8 py-4 font-medium text-white shadow-xl shadow-navy-900/20 transition-all hover:bg-electric-blue hover:shadow-electric-blue/40"
          >
            Voir tous nos services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}