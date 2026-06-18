import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Clock, Box, HelpCircle } from 'lucide-react';

export function CreationEstimator() {
  // State for selections
  const [siteType, setSiteType] = useState<'essentiel' | 'pro' | 'web-app'>('pro');
  const [pageSize, setPageSize] = useState<'one' | 'few' | 'medium' | 'large'>('few');
  const [addons, setAddons] = useState<string[]>(['copywriting']);

  // Price matrix components
  const basePrices = {
    'essentiel': 1290,
    'pro': 2290,
    'web-app': 3890
  };

  const pageMultipliers = {
    'one': -150,
    'few': 0,
    'medium': 400,
    'large': 950
  };

  const addonPrices: { [key: string]: { price: number; name: string } } = {
    'copywriting': { price: 450, name: "Rédaction Premium optimisée SEO" },
    'portal': { price: 650, name: "Espace client privé sécurisé" },
    'multilang': { price: 400, name: "Traduction multi-lingues" },
    'tracking': { price: 250, name: "Module tracking analytics poussé" }
  };

  const handleToggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(item => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Calculations
  const calculatedPrice = basePrices[siteType] + pageMultipliers[pageSize] + addons.reduce((sum, current) => sum + addonPrices[current].price, 0);

  const getEstimatedDuration = () => {
    let baseDays = 14;
    if (siteType === 'pro') baseDays = 21;
    if (siteType === 'web-app') baseDays = 35;

    if (pageSize === 'medium') baseDays += 5;
    if (pageSize === 'large') baseDays += 10;

    if (addons.length > 2) baseDays += 4;

    return `${Math.ceil(baseDays / 7)} à ${Math.ceil((baseDays + 4) / 7)} semaines`;
  };

  const buildQueryString = () => {
    const selectedAddonsStr = addons.map(id => addonPrices[id].name).join(', ');
    const typeLabel = siteType === 'essentiel' ? 'Vitrine Essentiel' : siteType === 'pro' ? 'Vitrine Pro SEO' : 'Application Métier';
    const pageLabel = pageSize === 'one' ? 'Landing (1 page)' : pageSize === 'few' ? '2 à 5 pages' : pageSize === 'medium' ? '6 à 12 pages' : '12 pages+';
    const text = `Bonjour, je souhaite un devis estimatif pour un site de type "${typeLabel}", taille: "${pageLabel}", addons: [${selectedAddonsStr}]. Budget indicatif: ~${calculatedPrice} € HT.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-50 border-b border-gray-100 scroll-mt-12">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase bg-electric-blue/5 px-3 py-1 rounded-full border border-electric-blue/10">
            Simulateur de Budget
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6">
            Configurez et estimez votre projet en direct
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Sélectionnez vos besoins ci-dessous pour obtenir une évaluation indicative immédiate du budget, du délai d'intégration et découvrez les livrables associés à votre projet.
          </p>
        </div>

        {/* Configuration Body */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Form Side - Left cols 7 */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Step 1: Type of Website */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900/50 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-[10px]">1</span>
                Type de site internet souhaité
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  id="select-type-essentiel"
                  onClick={() => setSiteType('essentiel')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    siteType === 'essentiel' 
                      ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <p className="font-bold text-sm text-navy-900">Pack Essentiel</p>
                  <p className="text-[10px] text-navy-900/50 mt-1 leading-normal">Présence rapide, design épuré artisan.</p>
                </button>

                <button
                  type="button"
                  id="select-type-pro"
                  onClick={() => setSiteType('pro')}
                  className={`p-4 rounded-xl border text-left transition-all relative ${
                    siteType === 'pro' 
                      ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span className="absolute top-[-8px] right-2 bg-electric-blue text-[8px] font-mono font-bold uppercase text-white px-1.5 py-0.5 rounded-full">Pro</span>
                  <p className="font-bold text-sm text-navy-900">Pack Pro SEO</p>
                  <p className="text-[10px] text-navy-900/50 mt-1 leading-normal">Génération de leads, fort SEO local.</p>
                </button>

                <button
                  type="button"
                  id="select-type-webapp"
                  onClick={() => setSiteType('web-app')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    siteType === 'web-app' 
                      ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <p className="font-bold text-sm text-navy-900">Web App / Custom</p>
                  <p className="text-[10px] text-navy-900/50 mt-1 leading-normal">Sur-mesure, portail ou interconnexions.</p>
                </button>
              </div>
            </div>

            {/* Step 2: Number of pages */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900/50 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-[10px]">2</span>
                Volume de pages d'expertises
              </h3>
              <div className="grid sm:grid-cols-4 gap-3">
                {[
                  { id: 'one', name: "Mono-page", desc: "Landing" },
                  { id: 'few', name: "2 à 5 pages", desc: "Start standard" },
                  { id: 'medium', name: "6 à 12 pages", desc: "Multiservices" },
                  { id: 'large', name: "12 pages+", desc: "Domination" },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPageSize(p.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      pageSize === p.id 
                        ? "border-electric-blue bg-electric-blue/[0.02] shadow-sm ring-2 ring-electric-blue/15" 
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <p className="font-bold text-xs text-navy-900">{p.name}</p>
                    <p className="text-[9px] text-navy-900/40 mt-0.5">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Addons */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-navy-900/50 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center text-[10px]">3</span>
                Modules & options de performance
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: 'copywriting', text: "Rédaction SEO Premium", detail: "Copywriting complet d'ingénieur SEO par nos soins." },
                  { id: 'portal', text: "Portail client sécurisé", detail: "Espace client privé sécurisé, devis et facturation." },
                  { id: 'multilang', text: "Traduction multilingue", detail: "Support Anglais/Allemand ou autre, optimisé locale." },
                  { id: 'tracking', text: "Tracking commercial pro", detail: "Rapports de conversion fins et Heatmaps inclus." },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => handleToggleAddon(addon.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 relative ${
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

          {/* Calculator Output Widget - Right columns 5 */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900 text-white rounded-3xl p-8 border border-white/10 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/20 rounded-full blur-2xl -z-10" />

              <div>
                <div className="flex items-center gap-3 pb-6 border-b border-white/5 mb-8">
                  <div className="p-2 bg-white/5 rounded-xl text-electric-blue border border-white/10">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-base">Votre estimation budget</h3>
                    <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Mises à jour instantanées</p>
                  </div>
                </div>

                {/* Simulated Price Display */}
                <div className="mb-8">
                  <span className="text-white/40 text-[10px] uppercase font-mono block mb-1">Budget estimatif indicatif :</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-mono font-bold text-electric-blue">
                      {calculatedPrice.toLocaleString('fr-FR')} €
                    </span>
                    <span className="text-xs text-white/50 font-semibold">HT</span>
                  </div>
                  <span className="text-[9px] text-white/40 block mt-2">Dépenses fixes. Zéro mensualités obligatoires. Possibilité de régler en 3 fois sans frais.</span>
                </div>

                {/* Sub features duration and scope */}
                <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 mb-8">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-wide text-white/40 block">Délai estimatif</span>
                      <span className="text-xs font-semibold text-white/95">{getEstimatedDuration()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Box className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-wide text-white/40 block">Structure de code</span>
                      <span className="text-xs font-semibold text-white/95">React + tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic checklist deliverables */}
                <span className="text-white/40 text-[9px] uppercase font-mono block mb-4 tracking-wider">Compris par défaut dans ce devis :</span>
                <ul className="space-y-3 pl-1">
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Hébergement gratuit à vie (zéro redevance)</span>
                  </li>
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Connexion Google Search Console de base</span>
                  </li>
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Sauvegardes automatiques déportées</span>
                  </li>
                  <li className="flex gap-2.5 text-xs text-white/80">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Certification de sécurité HTTPS Let's Encrypt</span>
                  </li>
                </ul>

              </div>

              {/* Instant pre-filled CTA to Contact */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <Link 
                  to={`/contact?subject=devis-simulateur&message=${buildQueryString()}`}
                  id="cta-estimator-valider"
                  className="w-full py-4 bg-electric-blue hover:bg-white hover:text-navy-900 text-white rounded-xl font-medium transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/15"
                >
                  <span className="text-sm">Valider ce devis estimé</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-center block text-[10px] text-white/30 mt-3 font-mono">Simulateur sans engagement — Devis précis fourni sous 24h</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
