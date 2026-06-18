import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Check, Shield, Search, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CreationHero() {
  const [speedScore, setSpeedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < 100) {
          current += 1;
          setSpeedScore(current);
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white border-b border-gray-100">
      {/* Decorative Grid SVG */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Copywriting */}
          <div className="lg:col-span-7 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/10"
            >
              <Zap className="h-4 w-4 text-electric-blue animate-pulse" />
              <span className="text-electric-blue font-semibold tracking-wide uppercase text-[11px] font-mono">
                Ingénierie Web Haute Performance
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-navy-900 mb-6 leading-[1.1]"
            >
              Création de sites internet qui <span className="text-electric-blue relative inline-block">transforment<span className="absolute bottom-1 left-0 w-full h-1 bg-electric-blue/20"></span></span> vos visiteurs en clients
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-navy-900/75 max-w-2xl mb-8 leading-relaxed"
            >
              Nous ne concevons pas de simples cartes de visite virtuelles passives. VSW Digital développe des architectures web sur-mesure ultra-rapides, impeccablement optimisées pour Google et conçues pour maximiser les appels et demandes de devis de votre PME.
            </motion.p>
            
            {/* Visual reassurance points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-4 mb-10 text-sm font-medium text-navy-900"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-50 text-emerald-500 p-1 rounded-md border border-emerald-100">
                  <Check className="h-4 w-4" />
                </div>
                <span>Vitesse mobile fulgurante (&lt; 1.5s)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-50 text-emerald-500 p-1 rounded-md border border-emerald-100">
                  <Check className="h-4 w-4" />
                </div>
                <span>Balisage sémantique SEO natif</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-50 text-emerald-500 p-1 rounded-md border border-emerald-100">
                  <Check className="h-4 w-4" />
                </div>
                <span>Propriété 100% totale du code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-50 text-emerald-500 p-1 rounded-md border border-emerald-100">
                  <Check className="h-4 w-4" />
                </div>
                <span>Garantie anti-panne & sécurité HTTPS</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/contact" 
                id="cta-hero-contact"
                className="px-8 py-4 bg-navy-900 text-white rounded-xl font-medium hover:bg-electric-blue transition-all duration-300 text-center shadow-lg shadow-navy-900/10 hover:shadow-electric-blue/20"
              >
                Calculer mon budget projet
              </Link>
              <a 
                href="#estimator" 
                id="cta-hero-method"
                className="px-8 py-4 bg-white border border-navy-900/10 text-navy-900 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 text-center shadow-sm"
              >
                Estimer mon devis en 3 clics
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4 text-xs font-mono text-navy-900/50"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="w-8 h-8 rounded-full border-2 border-white bg-navy-900 text-white flex items-center justify-center font-bold font-sans text-[10px]">
                    {n === 4 ? "+50" : `U${n}`}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-500 gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p>Noté <span className="text-navy-900 font-bold">4.9/5</span> par les artisans & PME locales</p>
              </div>
            </motion.div>
          </div>
          
          {/* Column Right: Interactive PageSpeed Simulator */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-navy-900 text-white rounded-2xl shadow-2xl p-6 border border-white/10 relative overflow-hidden max-w-sm sm:max-w-md mx-auto"
            >
              {/* Header: Mock Browser interface */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-white/5 rounded px-3 py-1 text-[10px] font-mono text-white/50 w-44 truncate text-center">
                  vsw-digital.fr/speed-test
                </div>
                <div className="w-4" />
              </div>

              {/* Title inside mock UI */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-6 w-1 rounded bg-electric-blue" />
                <h4 className="text-xs uppercase tracking-widest font-mono text-white/60">Google PageSpeed Mobile</h4>
              </div>

              {/* Radial Meter Section */}
              <div className="flex flex-col items-center justify-center py-4 relative mb-6">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  
                  {/* Circle SVG */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="68" 
                      className="stroke-white/10 fill-none" 
                      strokeWidth="10" 
                    />
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="68" 
                      className={`fill-none transition-all duration-300 ${
                        speedScore > 89 ? "stroke-emerald-500" : speedScore > 49 ? "stroke-yellow-500" : "stroke-red-500"
                      }`} 
                      strokeWidth="10" 
                      strokeDasharray="427"
                      strokeDashoffset={427 - (427 * speedScore) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Inside metrics */}
                  <div className="absolute flex flex-col items-center">
                    <span className={`text-4xl font-bold font-mono ${
                      speedScore > 89 ? "text-emerald-400" : "text-yellow-400"
                    }`}>
                      {speedScore}
                    </span>
                    <span className="text-[10px] uppercase text-white/40 font-mono tracking-wider">
                      Mobile Performance
                    </span>
                  </div>
                </div>
              </div>

              {/* Three Sub Scores */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                <div>
                  <div className="text-emerald-400 text-lg font-mono font-bold">100</div>
                  <div className="text-[9px] uppercase tracking-wide text-white/50">Accessibilité</div>
                </div>
                <div>
                  <div className="text-emerald-400 text-lg font-mono font-bold">100</div>
                  <div className="text-[9px] uppercase tracking-wide text-white/50">Pratiques</div>
                </div>
                <div>
                  <div className="text-emerald-400 text-lg font-mono font-bold">100</div>
                  <div className="text-[9px] uppercase tracking-wide text-white/50">SEO</div>
                </div>
              </div>

              {/* Core Web Vitals Status badges */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2.5 text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Largest Contentful Paint (LCP)</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">0.8s</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>First Input Delay (FID)</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">12ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Cumulative Layout Shift (CLS)</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">0.01</span>
                </div>
              </div>

              {/* Floating success banner */}
              <div className="absolute top-[35%] right-[-5px] bg-emerald-500 text-white font-mono text-[9px] font-bold px-3 py-1 rounded-l-full shadow-lg">
                Core Web Vitals PASSED
              </div>
            </motion.div>

            {/* Glowing background accent behind mockup */}
            <div className="absolute -inset-4 bg-electric-blue/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

