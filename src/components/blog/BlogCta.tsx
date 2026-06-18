import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export function BlogCta() {
  return (
    <section className="relative my-20 rounded-3xl overflow-hidden bg-[#0a0f21] text-white py-12 px-6 md:p-14 border border-white/[0.08] shadow-2xl">
      {/* Dynamic atmospheric ambient colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/15 blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
        {/* Fine background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Custom badge label */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[10px] font-bold tracking-widest uppercase text-blue-400 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>APPROCHE DE PROXIMITÉ</span>
        </span>

        {/* Title & Description of CTA */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-white max-w-2xl leading-tight">
          Vous souhaitez améliorer votre présence digitale ?
        </h3>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
          VSW Digital vous aide à identifier les actions prioritaires pour améliorer votre site, votre visibilité, vos leads ou vos outils métier de façon pragmatique et rentable.
        </p>

        {/* Action button */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-1.5 text-sm md:text-base border border-blue-550/20"
          >
            <span>Demander un audit digital</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.10] text-slate-100 rounded-xl font-semibold tracking-wide transition-all duration-300 flex items-center justify-center text-sm md:text-base"
          >
            Découvrir nos services
          </Link>
        </div>

        {/* Confidence metrics footer */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-10 border-t border-white/[0.06] mt-8 w-full max-w-xl text-[11px] text-slate-400 font-mono">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Diagnostic et Audit Neutres</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Soutien de Proximité PME / Artisans</span>
          </div>
        </div>

      </div>
    </section>
  );
}
