import { motion } from "motion/react";
import {
  Building2,
  Hammer,
  ShieldCheck,
  Truck,
  Smartphone,
  GraduationCap,
  BriefcaseBusiness,
  Store,
  Home,
  Car,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { sectors } from "../../data/sectors";

const icons = [
  Building2,
  Hammer,
  ShieldCheck,
  Truck,
  Smartphone,
  GraduationCap,
  BriefcaseBusiness,
  Store,
  Home,
  Car,
];

export function SectorsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3b82f6]/25 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-[#3b82f6]" />
            Secteurs accompagnés
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl"
          >
            Des solutions digitales adaptées aux{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              métiers de terrain
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            Chaque secteur a ses contraintes : visibilité locale, demandes de
            devis, prise de contact, planning, documents, avis clients ou
            automatisation. Nous construisons des solutions adaptées à votre
            activité réelle.
          </motion.p>
        </div>

        {/* Grille secteurs */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((sector, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.045, duration: 0.45 }}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 text-left shadow-2xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.1]"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#3b82f6]/0 blur-2xl transition-all duration-300 group-hover:bg-[#3b82f6]/20" />

                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="relative font-semibold leading-snug text-white">
                  {sector.name}
                </p>

                <div className="relative mt-4 flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors group-hover:text-blue-200">
                  Solutions adaptées
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Phrase de réassurance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur"
        >
          <p className="text-sm leading-7 text-slate-300 md:text-base">
            Que vous soyez une entreprise locale, un prestataire de services, un
            artisan, un commerce ou une structure en développement, VSW Digital
            vous aide à construire une présence en ligne claire, crédible et
            orientée génération de demandes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}