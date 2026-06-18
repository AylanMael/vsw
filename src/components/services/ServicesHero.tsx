import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Bot, Cloud, Layout, Megaphone, Search, Wrench } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="inline-block text-electric-blue font-bold tracking-wider uppercase text-xs px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20">Services VSW Digital</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white">
            Services digitaux pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-400">gagner en croissance</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-lg">
            Nous accompagnons les PME et entreprises locales à construire une présence digitale visible, rentable et moderne, de la stratégie à l'exécution technique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/20 hover:scale-[1.02] active:scale-[0.98]">
              Demander un audit gratuit
            </Link>
            <a href="#services-list" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Explorer nos services
            </a>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="hidden md:block relative"
        >
           <div className="absolute -inset-4 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-[2rem] blur-2xl"></div>
           <div className="relative bg-navy-800 rounded-3xl p-6 border border-white/10 shadow-2xl skew-y-3">
               <div className="bg-navy-900 rounded-xl p-8 border border-navy-700 space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-navy-800 rounded-xl border border-white/5 flex items-center gap-3"><Layout className="text-electric-blue h-5 w-5"/> Site Web</div>
                    <div className="p-4 bg-navy-800 rounded-xl border border-white/5 flex items-center gap-3"><Search className="text-electric-blue h-5 w-5"/> SEO</div>
                    <div className="p-4 bg-navy-800 rounded-xl border border-white/5 flex items-center gap-3"><Megaphone className="text-electric-blue h-5 w-5"/> Ads</div>
                    <div className="p-4 bg-navy-800 rounded-xl border border-white/5 flex items-center gap-3"><Cloud className="text-electric-blue h-5 w-5"/> Cloud</div>
                   </div>
                   <div className="flex items-center gap-4 bg-navy-850 p-4 rounded-xl border border-navy-600">
                      <BarChart3 className="text-electric-blue"/>
                      <span className='text-sm'>Croissance & Acquisition</span>
                   </div>
               </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
