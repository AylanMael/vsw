
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Zap, RefreshCcw, Bell } from 'lucide-react';

export function CloudHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="inline-block text-electric-blue font-semibold tracking-wider uppercase text-xs px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20">Cloud & Automatisation</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white">
            Cloud & automatisation pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-400">gagner du temps au quotidien</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-lg">
            Nous aidons les PME et artisans à automatiser leurs tâches répétitives, connecter leurs outils métier et sécuriser leurs données grâce à des solutions cloud évolutives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/20 hover:scale-105 active:scale-95">
              Automatiser mon activité
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Découvrir les solutions
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="hidden md:block relative"
        >
           <div className="absolute -inset-4 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-[2rem] blur-2xl"></div>
           <div className="relative bg-navy-800 rounded-3xl p-6 border border-white/10 shadow-2xl skew-y-3">
               <div className="bg-navy-900 rounded-xl p-8 border border-navy-700 space-y-6">
                   <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-navy-800 rounded-xl border border-white/5"><p className="text-xs text-white/50 mb-1">Entrée</p><div className='flex items-center gap-2'><Database className="text-electric-blue h-5 w-5"/>Formulaire</div></div>
                     <div className="p-4 bg-navy-800 rounded-xl border border-white/5"><p className="text-xs text-white/50 mb-1">Process</p><div className='flex items-center gap-2'><Zap className="text-electric-blue h-5 w-5"/>Traitement</div></div>
                   </div>
                   <div className="flex items-center gap-4 bg-navy-850 p-4 rounded-xl border border-navy-600">
                      <RefreshCcw className="text-electric-blue animate-spin"/>
                      <span className='text-sm'>Flux automatisé actif</span>
                   </div>
                   <div className="flex items-center gap-4 bg-navy-850 p-4 rounded-xl border border-navy-600">
                      <Bell className="text-electric-blue"/>
                      <span className='text-sm'>Notification envoyée</span>
                   </div>
               </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
