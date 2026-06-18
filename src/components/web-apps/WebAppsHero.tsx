
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function WebAppsHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="inline-block text-electric-blue font-semibold tracking-wider uppercase text-xs px-4 py-1.5 rounded-full bg-electric-blue/10">Applications web sur mesure</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1]">
            Digitalisez vos processus avec des <span className="text-electric-blue">outils web sur mesure</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-lg">
            Nous concevons des applications web modernes, sécurisées et évolutives pour centraliser vos données, automatiser vos tâches et piloter votre activité efficacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/20">
              Parler de mon projet
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Découvrir nos solutions
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:block"
        >
            <div className="bg-navy-800 rounded-3xl p-6 border border-white/10 shadow-2xl skew-y-3">
                <div className="bg-navy-900 rounded-xl p-8 border border-navy-700 space-y-6">
                    <div className="flex justify-between items-center text-xs text-white/50 border-b border-navy-700 pb-4">
                      <span>Dashboard Activité</span>
                      <span className='text-electric-blue'>● Connecté</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-navy-800 p-4 rounded-xl border border-white/5"><p className="text-xs text-white/60">Documents</p><p className="text-3xl font-bold">124</p></div>
                        <div className="bg-navy-800 p-4 rounded-xl border border-white/5"><p className="text-xs text-white/60">Demandes</p><p className="text-3xl font-bold">8</p></div>
                    </div>
                    <div className="h-32 bg-navy-800 rounded-xl flex items-end p-4 gap-3">
                        <div className="w-full bg-electric-blue rounded-t h-1/2"></div>
                        <div className="w-full bg-electric-blue/60 rounded-t h-3/4"></div>
                        <div className="w-full bg-electric-blue rounded-t h-full"></div>
                        <div className="w-full bg-electric-blue/30 rounded-t h-2/3"></div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
