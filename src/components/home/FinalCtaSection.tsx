import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
  "Analyse de votre présence actuelle",
  "Priorités claires pour améliorer vos résultats",
  "Conseils adaptés à votre activité",
];

export function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
      {/* Background premium */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#3b82f6]" />
            Prêt à passer à l’étape suivante ?
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Transformons votre présence digitale en{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              véritable levier de croissance
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Site internet, SEO, Google Ads, application web ou automatisation :
            parlons de vos objectifs et identifions les actions les plus utiles
            pour développer votre activité.
          </p>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {benefits.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-[#3b82f6]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/40"
            >
              Demander mon audit gratuit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              Découvrir nos services
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Réponse personnalisée selon votre activité, vos objectifs et votre
            niveau de maturité digitale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}