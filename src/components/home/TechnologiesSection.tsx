import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Code2,
  Cloud,
  Database,
  Search,
  ShieldCheck,
  Workflow,
  LayoutDashboard,
  Server,
  BarChart3,
} from "lucide-react";
import { technologies } from "../../data/technologies";

const categoryIcons = {
  frontend: Code2,
  cms: LayoutDashboard,
  cloud: Cloud,
  backend: Server,
  database: Database,
  seo: Search,
  analytics: BarChart3,
  security: ShieldCheck,
  automation: Workflow,
};

export function TechnologiesSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
      {/* Décor visuel */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-blue/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-blue"
          >
            Stack moderne & évolutive
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-bold leading-tight md:text-5xl"
          >
            Des technologies solides pour créer des{" "}
            <span className="text-electric-blue">solutions digitales performantes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
          >
            VSW Digital utilise des outils modernes pour créer des sites rapides,
            des applications web évolutives, des espaces clients, des tableaux
            de bord et des automatisations adaptées aux besoins des PME.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon =
              categoryIcons[tech.category as keyof typeof categoryIcons] || Code2;

            return (
              <motion.article
                key={tech.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:border-electric-blue/40 hover:bg-white/[0.09]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-electric-blue transition-all duration-300 group-hover:bg-electric-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 font-display text-xl font-bold text-white">
                  {tech.name}
                </h3>

                <p className="text-sm leading-relaxed text-white/65">
                  {tech.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/application-web-sur-mesure"
            className="inline-flex rounded-xl bg-electric-blue px-8 py-4 font-medium text-white shadow-xl shadow-electric-blue/20 transition-all hover:bg-white hover:text-navy-900"
          >
            Découvrir nos applications web
          </Link>
        </motion.div>
      </div>
    </section>
  );
}