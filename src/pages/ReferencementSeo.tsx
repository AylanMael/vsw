import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { SeoHero } from "../components/seo/SeoHero";
import {
  SeoProblemSection,
  SeoBenefitsSection,
} from "../components/seo/SeoProblemBenefits";
import { SeoPillars } from "../components/seo/SeoPillars";
import { SeoMethod } from "../components/seo/SeoMethod";
import { SeoEstimator } from "../components/seo/SeoEstimator";
import { SeoFaq } from "../components/seo/SeoFaq";

export function ReferencementSeo() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      <SeoHero />
      <SeoProblemSection />
      <SeoBenefitsSection />
      <SeoPillars />
      <SeoMethod />
      <SeoEstimator />
      <SeoFaq />

      {/* CTA final */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container relative mx-auto px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              <Search className="h-4 w-4" />
              Référencement SEO
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Vous voulez améliorer votre visibilité sur Google de manière
              durable ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Pas de promesse magique ni de raccourci artificiel. Nous analysons
              votre site, vos contenus, vos concurrents et vos mots-clés pour
              construire une stratégie SEO claire, progressive et adaptée à vos
              objectifs.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact?subject=audit-seo"
                id="cta-seo-bottom-audit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/40"
              >
                Demander un audit SEO
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#seo-estimator"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Estimer mon budget SEO
              </a>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Une première analyse permet de savoir si votre priorité est le SEO
              technique, les contenus, le maillage interne, les pages locales ou
              la refonte de votre structure actuelle.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}