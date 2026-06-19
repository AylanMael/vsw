import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/70 via-white to-white py-24 md:py-32">
      {/* Décor visuel */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-blue/10 blur-3xl" />
        <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center rounded-full bg-electric-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-blue"
        >
          Agence web, SEO & applications sur mesure
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-8 max-w-5xl font-display text-4xl font-bold leading-[1.1] text-navy-900 md:text-6xl lg:text-7xl"
        >
          Création de sites web, SEO et applications digitales pour{" "}
          <span className="text-electric-blue">
            développer votre activité.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-navy-900/70 md:text-xl"
        >
          VSW Digital accompagne les PME, artisans, commerçants et entreprises
          de services dans la création de sites performants, le référencement
          SEO, Google Ads et le développement d’outils web sur mesure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="rounded-xl bg-navy-900 px-8 py-4 font-medium text-white shadow-xl shadow-navy-900/20 transition-all hover:bg-electric-blue hover:shadow-electric-blue/40"
          >
            Demander un audit gratuit
          </Link>

          <Link
            to="/services"
            className="rounded-xl border border-navy-900/10 bg-white px-8 py-4 font-medium text-navy-900 shadow-sm transition-all hover:bg-gray-50"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-navy-900/60"
        >
          <span>Sites rapides & responsives</span>
          <span className="hidden h-1 w-1 rounded-full bg-navy-900/30 sm:block" />
          <span>SEO pensé dès la création</span>
          <span className="hidden h-1 w-1 rounded-full bg-navy-900/30 sm:block" />
          <span>Solutions évolutives cloud</span>
        </motion.div>
      </div>
    </section>
  );
}