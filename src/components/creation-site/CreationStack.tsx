import { motion } from 'motion/react';
import { ShieldCheck, Zap, Code, RefreshCw, XCircle, CheckCircle2 } from 'lucide-react';

export function CreationStack() {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric-blue/10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Ingénierie Web face aux CMS historiques
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
            Pourquoi le code moderne surpasse les sites WordPress ordinaires
          </h2>
          <p className="text-white/60 leading-relaxed text-sm md:text-base">
            De nombreux prestataires se contentent d'installer des thèmes WordPress préconçus, alourdis par des dizaines d'extensions hétéroclites. Voici pourquoi notre méthode d'intégration native en React change absolument tout.
          </p>
        </div>

        {/* Detailed Side by Side Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* VSW Digital - Left side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-electric-blue/20 text-electric-blue rounded-xl border border-electric-blue/20">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">Le Stack Moderne VSW Digital</h3>
              </div>
              <p className="text-white/70 text-xs leading-relaxed mb-8">
                Nous codons vos projets en utilisant les technologies les plus agiles (React, Tailwind CSS, Vite). Le résultat est entièrement pré-compilé et ultra-sécurisé.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Chargement instantané</h4>
                    <p className="text-xs text-white/50 mt-1">
                      Les pages s'affichent en moins d'une seconde, créant une expérience fluide sur mobile et un SEO optimal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sécurité totale native</h4>
                    <p className="text-xs text-white/50 mt-1">
                      Pas de base de données exposée ou d'interfaces d'administration vulnérables. Risque de piratage réduit à zéro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Aucune maintenance obligatoire payante</h4>
                    <p className="text-xs text-white/50 mt-1">
                      Le code ne vieillit pas, n'a pas besoin de mises à jour quotidiennes de plugins et ne peut pas se casser tout seul.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Design à emporter, zéro limite de mise en page</h4>
                    <p className="text-xs text-white/50 mt-1">
                      Chaque centimètre carré est personnalisable au pixel près selon vos indications de terrain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WordPress / Page Builders - Right side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] rounded-3xl p-8 border border-white/5 shadow-xl flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-500/10 text-red-400 rounded-xl border border-red-500/10">
                  <XCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">WordPress & Builders ordinaires</h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-8">
                Ces CMS lourds reposent sur des bases PHP et s'appuient sur des sur-couches graphiques (Elementor, Divi) gérées par des tiers.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white/90">Lenteur de chargement mobile</h4>
                    <p className="text-xs text-white/45 mt-1">
                      L'empilement de scripts CSS/JS et l'hébergement lourd occasionnent des temps de chargement de 3 à 5 secondes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white/90">Failles de sécurité permanentes</h4>
                    <p className="text-xs text-white/45 mt-1">
                      95% des hacks de sites proviennent d'extensions WordPress non à jour. S'exposer à des pannes ou vols de données.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white/90">Mises à jour manuelles critiques</h4>
                    <p className="text-xs text-white/45 mt-1">
                      Obligation de surveiller et mettre à jour le système mensuellement sous peine d'incompatibilité ou d'erreur critique de serveur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white/90">Limites de structure & bugs</h4>
                    <p className="text-xs text-white/45 mt-1">
                      Bloqué par les restrictions de mise en page des thèmes, conduisant à des designs formatés et sans âme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Technical Stack icons / tags */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-white/50 font-mono">
          <span className="text-xs uppercase tracking-wider text-electric-blue font-bold">Notre Stack de Prédilection :</span>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>React.js 19</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Tailwind CSS v4</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Vite Bundler</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Motion UI</span>
          </div>
        </div>

      </div>
    </section>
  );
}
