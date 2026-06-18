import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Clock, Box, ShieldCheck } from 'lucide-react';

export function SeoEstimator() {
  // State variables for dynamic simulation
  const [competition, setCompetition] = useState<'low' | 'medium' | 'high'>('medium');
  const [clusters, setClusters] = useState<'few' | 'mid' | 'large'>('mid');
  const [addons, setAddons] = useState<string[]>(['maps']);

  // Price matrix components
  const basePrices = {
    'low': 690,
    'medium': 1290,
    'high': 2190
  };

  const clusterPrices = {
    'few': 0,
    'mid': 450,
    'large': 950
  };

  const addonPrices: { [key: string]: { price: number; name: string } } = {
    'articles': { price: 350, name: "Rédaction trimestrielle de 3 articles" },
    'backlinks': { price: 550, name: "Campagne d'autorité de 5 backlinks" },
    'maps': { price: 250, name: "Optimisation de fiche Google Business" },
    'speed': { price: 200, name: "Optimisation technique de vitesse Core Vitals" }
  };

  const handleToggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(item => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Price sum
  const calculatedPrice = basePrices[competition] + clusterPrices[clusters] + addons.reduce((sum, opt) => sum + addonPrices[opt].price, 0);

  // Time projection
  const getEstimatedDuration = () => {
    let baseWeeks = 3;
    if (competition === 'medium') baseWeeks = 6;
    if (competition === 'high') baseWeeks = 12;

    if (clusters === 'mid') baseWeeks += 2;
    if (clusters === 'large') baseWeeks += 4;

    return `${baseWeeks} à ${baseWeeks + 2} semaines`;
  };

  // URL query prefill
  const buildQueryString = () => {
    const compLabel = competition === 'low' ? 'Faible (SEO Local)' : competition === 'medium' ? 'Modérée (Départemental / Métropole)' : 'Intense (National)';
    const clusterLabel = clusters === 'few' ? '1 cocon (2 à 5 pages)' : clusters === 'mid' ? '3 cocons (5 à 12 pages)' : '5 cocons+ (12 pages+)';
    const addonsStr = addons.map(id => addonPrices[id].name).join(', ');
    const text = `Bonjour, je souhaite un devis estimatif d'accompagnement SEO : concurrence: "${compLabel}", volume: "${clusterLabel}", options: [${addonsStr}]. Budget simulé: ~${calculatedPrice} € HT.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="seo-estimator" className="py-24 bg-slate-50 border-b border-gray-100 scroll-mt-12">
      <div className="container mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Simulateur de Budget SEO
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6">
            Configurez votre stratégie et son budget
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Configurez vos objectifs de référencement naturel pour obtenir une estimation immédiate, les temps de positionnement projetés et les livrables correspondants.
          </p>
        </div>

        {/* Configuration container side-by-side */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Configure Controls Column */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Control 1: Competition & geo targets */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900/50 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-[10px]">1</span>
                Zone géographique & Niveau de concurrence
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  id="select-comp-low"
                  onClick={() => setCompetition('low')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    competition === 'low' 
                      ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <p className="font-bold text-sm text-navy-900">SEO Local / Faible</p>
                  <p className="text-[10px] text-navy-900/50 mt-1 leading-normal">Artisans de quartier ou niche commerciale.</p>
                </button>

                <button
                  type="button"
                  id="select-comp-medium"
                  onClick={() => setCompetition('medium')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    competition === 'medium' 
                      ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <p className="font-bold text-sm text-navy-900 font-display">Modérée / Métropole</p>
                  <p className="text-[10px] text-navy-900/50 mt-1 leading-normal">Secteur concurrentiel à l'échelle départementale.</p>
                </button>

                <button
                  type="button"
                  id="select-comp-high"
                  onClick={() => setCompetition('high')}
                  className={`p-4 rounded-xl border text-left transition-all relative ${
                    competition === 'high' 
                      ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span className="absolute top-[-8px] right-2 bg-electric-blue text-[8px] font-mono font-bold uppercase text-white px-1.5 py-0.5 rounded-full">National</span>
                  <p className="font-bold text-sm text-navy-900">Intense / National</p>
                  <p className="text-[10px] text-navy-900/50 mt-1 leading-normal">PME e-commerce ou services B2B nationaux compétitifs.</p>
                </button>
              </div>
            </div>

            {/* Control 2: Organic density (clusters of keywords) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900/50 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-[10px]">2</span>
                Moteurs sémantiques (expertises à positionner)
              </h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { id: 'few', name: "1 Cocon SEO", desc: "1 à 4 expertises clés" },
                  { id: 'mid', name: "3 Cocons", desc: "5 à 12 pages optimisées" },
                  { id: 'large', name: "5 Cocons+", desc: "12 pages sémantiques+" },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setClusters(c.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      clusters === c.id 
                        ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <p className="font-bold text-xs text-navy-900">{c.name}</p>
                    <p className="text-[9px] text-navy-900/40 mt-0.5">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Boost Addons */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900/50 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-[10px]">3</span>
                Piliers de valorisation de positions
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: 'maps', text: "Optimisation de visibilité locale", detail: "Fiche Google Maps soignée et optimisation d'avis." },
                  { id: 'backlinks', text: "Backlinks d'Autorité Rapprochement", detail: "Liens de qualité thématique depuis des blogs industriels." },
                  { id: 'articles', text: "Rédaction trimestrielle d'articles", detail: "Garantir un flux de contenu frais de haute qualité." },
                  { id: 'speed', text: "Refonte Core Vitals", detail: "Gain de temps de chargement critique de votre code existant." },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => handleToggleAddon(addon.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-start gap-4 relative ${
                      addons.includes(addon.id)
                        ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 transition-colors ${
                      addons.includes(addon.id) ? "bg-electric-blue border-electric-blue text-white" : "border-gray-200"
                    }`}>
                      {addons.includes(addon.id) && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-navy-900">{addon.text}</p>
                      <p className="text-[9px] text-navy-900/50 mt-1 lines-2">{addon.detail}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Calculator Output Display Card */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900 text-white rounded-3xl p-8 border border-white/10 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/20 rounded-full blur-2xl -z-10" />

              <div>
                {/* Header widget */}
                <div className="flex items-center gap-3 pb-6 border-b border-white/5 mb-8">
                  <div className="p-2.5 bg-white/5 rounded-xl text-electric-blue border border-white/10">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-base">Votre plan budgétaire SEO</h3>
                    <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Simulation d'autorité</p>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-8">
                  <span className="text-white/40 text-[10px] uppercase font-mono block mb-1">Budget investissement indicatif :</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-mono font-bold text-electric-blue">
                      {calculatedPrice.toLocaleString('fr-FR')} €
                    </span>
                    <span className="text-xs text-white/50 font-semibold">HT</span>
                  </div>
                  <span className="text-[9px] text-white/40 block mt-2">Investissement forfaitaire. Pas d'obligation d'engagement annuel déguisé. Possibilité de fractionner l'intégration.</span>
                </div>

                {/* Scope items duration & structures */}
                <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 mb-8">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-wide text-white/40 block">Délai d'optimisation</span>
                      <span className="text-xs font-semibold text-white/95">{getEstimatedDuration()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Box className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-wide text-white/40 block">Indexation cible</span>
                      <span className="text-xs font-semibold text-white/95">1re Page Google</span>
                    </div>
                  </div>
                </div>

                {/* Deliverable points */}
                <span className="text-white/40 text-[9px] uppercase font-mono block mb-4 tracking-wider">Inclus systématiquement :</span>
                <ul className="space-y-3 pl-1">
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Intégration technique Search Console</span>
                  </li>
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Contrôle et rectification d'erreurs 404</span>
                  </li>
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Création du plan sitemap dynamique</span>
                  </li>
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Garantie de non-pénalisation Google (White Hat)</span>
                  </li>
                </ul>

              </div>

              {/* Instant CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <Link 
                  to={`/contact?subject=devis-seo-simulateur&message=${buildQueryString()}`}
                  id="cta-seo-estimator-submit"
                  className="w-full py-4 bg-electric-blue hover:bg-white hover:text-navy-900 text-white rounded-xl font-medium transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/15"
                >
                  <span className="text-sm">Valider ce plan SEO simulé</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-center block text-[10px] text-white/30 mt-3 font-mono">Devis complet détaillé fourni sous 24h après étude concurrentielle</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
