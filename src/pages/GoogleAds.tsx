import { Link } from "react-router-dom";
import { ArrowRight, Megaphone } from "lucide-react";
import { GoogleAdsHero } from "../components/google-ads/GoogleAdsHero";
import { GoogleAdsBenefits } from "../components/google-ads/GoogleAdsBenefits";
import { GoogleAdsServices } from "../components/google-ads/GoogleAdsServices";
import { GoogleAdsMethod } from "../components/google-ads/GoogleAdsMethod";
import { GoogleAdsOffers } from "../components/google-ads/GoogleAdsOffers";
import { GoogleAdsFaq } from "../components/google-ads/GoogleAdsFaq";

export const metadata = {
  title: "Google Ads & génération de leads pour PME | VSW Digital",
  description:
    "VSW Digital crée et optimise vos campagnes Google Ads pour générer des appels, demandes de devis et prospects qualifiés grâce à une stratégie claire, des landing pages efficaces et un suivi des conversions.",
};

export function GoogleAds() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      <GoogleAdsHero />
      <GoogleAdsBenefits />
      <GoogleAdsServices />
      <GoogleAdsMethod />
      <GoogleAdsOffers />
      <GoogleAdsFaq />

      {/* CTA Final */}
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
              <Megaphone className="h-4 w-4" />
              Google Ads & génération de leads
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Vous voulez générer plus de demandes qualifiées avec Google Ads ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Présentez-nous votre activité, votre zone d’intervention, votre
              budget et vos objectifs. VSW Digital vous aide à structurer une
              campagne Google Ads claire, mesurable et orientée demandes
              qualifiées.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/40"
              >
                Demander un audit Google Ads
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Une première analyse permet de vérifier si Google Ads est le bon
              levier pour votre activité ou s’il vaut mieux renforcer d’abord
              votre site, votre SEO ou vos pages d’atterrissage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}