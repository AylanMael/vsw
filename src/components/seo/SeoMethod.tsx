import { motion } from 'motion/react';
import { SearchCode, Compass, PenTool, Network, AreaChart, ArrowRight } from 'lucide-react';

export function SeoMethod() {
  const steps = [
    {
      icon: SearchCode,
      phase: "Phase 1",
      title: "Audit profond & Recherche Sémantique",
      desc: "Nous analysons scientifiquement les volumes de recherche réels et l'intention commerciale de vos prospects locaux. Nous identifions l'écart concurrentiel (Gap Analysis) pour cibler les mots-clés prioritaires à fort taux d'achat.",
      deliverable: "Rapport d'opportunités + Liste de mots-clés cibles"
    },
    {
      icon: Compass,
      phase: "Phase 2",
      title: "Architecture & Silo Sémantique",
      desc: "Nous structurons l'architecture du site en cocons sémantiques ou silos étanches. Cela permet d'isoler thématiquement vos différentes expertises et de propager naturellement la popularité interne de votre site.",
      deliverable: "Plan de site (Sitemap) en silos sémantiques"
    },
    {
      icon: PenTool,
      phase: "Phase 3",
      title: "Rédaction SEO & Optimisations On-Page",
      desc: "Chaque page d'expertise fait l'objet d'un copywriting d'ingénieurs sémantiques. Nous optimisons le balisage structurel, le champ sémantique, la densité de mots-clés et l'intégration des données structurées Schema.org.",
      deliverable: "Contenus rédigés optimisés + Données JSON-LD intégrées"
    },
    {
      icon: Network,
      phase: "Phase 4",
      title: "Campagne de Netlinking & Autorité",
      desc: "Nous propulsons l'autorité globale de votre domaine d'activité en acquérant des liens externes thématisés (backlinks) de manière saine et progressive. Nous optimisons également vos profils locaux Google Maps.",
      deliverable: "Backlinks thématiques acquis + Profil Google Business au top"
    },
    {
      icon: AreaChart,
      phase: "Phase 5",
      title: "Suivi permanent & Reporting d'Acquisition",
      desc: "Le référencement est une course d'endurance. Nous connectons Google Search Console pour éliminer d'éventuels freins de crawl et fournissons des rapports de positions transparents pour piloter vos conversions réelles.",
      deliverable: "Accès Dashboard Analytics permanent + Bilan mensuel"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8b5cf6] uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100/50">
            Méthodologie d'Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6">
            Notre protocole SEO en 5 étapes pour dominer Google
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Pas d'approximation : notre méthode intègre des étapes analytiques strictes et transparentes pour amener votre activité dans le peloton de tête des requêtes de vos futurs clients.
          </p>
        </div>

        {/* Phase Timeline List */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-gray-200/60 before:pointer-events-none">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col md:flex-row gap-8 items-stretch relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline center bubble */}
                <div className="absolute left-6 md:left-[50%] -translate-x-[11px] w-6 h-6 rounded-full bg-white border-4 border-electric-blue flex items-center justify-center shadow-sm z-10" />

                {/* Card side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                    
                    {/* Visual glowing trace */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-electric-blue/70" />

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-electric-blue/5 border border-electric-blue/10 rounded-xl text-electric-blue shrink-0">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-wider text-electric-blue uppercase font-bold">{step.phase}</span>
                          <h3 className="font-bold text-sm md:text-base text-navy-900 leading-snug">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-navy-900/60 leading-relaxed mb-6 font-sans">
                        {step.desc}
                      </p>
                    </div>

                    {/* Deliverable info */}
                    <div className="pt-4 border-t border-gray-50 flex items-center gap-2.5 text-[11px] font-semibold text-emerald-600">
                      <span className="bg-emerald-50 px-2 py-0.5 rounded text-[9px] font-mono border border-emerald-100">Livrable</span>
                      <span className="truncate">{step.deliverable}</span>
                    </div>

                  </div>
                </div>

                {/* Empty side for layout spacing on desktop */}
                <div className="hidden md:block w-1/2" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
