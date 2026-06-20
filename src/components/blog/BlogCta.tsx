import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export function BlogCta() {
  return (
    <section className="relative my-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0f172a] px-6 py-12 text-white shadow-2xl md:p-14">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#3b82f6]/15 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Approche pragmatique</span>
        </span>

        {/* Title */}
        <h3 className="max-w-2xl font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
          Vous souhaitez améliorer votre présence digitale ?
        </h3>

        <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          VSW Digital vous aide à identifier les actions prioritaires pour
          améliorer votre site, votre visibilité, vos demandes de contact ou vos
          outils métier, avec une approche claire et progressive.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-4 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-400/20 bg-[#3b82f6] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/20 sm:w-auto md:text-base"
          >
            <span>Demander un audit digital</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/services"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.04] px-8 py-4 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:w-auto md:text-base"
          >
            Découvrir nos services
          </Link>
        </div>

        {/* Trust footer */}
        <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-4 border-t border-white/[0.08] pt-8 text-xs text-slate-400 sm:grid-cols-2">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>Diagnostic clair et sans engagement</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <HeartHandshake className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>Accompagnement PME, artisans et indépendants</span>
          </div>
        </div>
      </div>
    </section>
  );
}