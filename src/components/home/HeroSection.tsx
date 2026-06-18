
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 to-white">
      <div className="container mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-electric-blue font-semibold tracking-wider uppercase text-xs mb-6 px-4 py-1.5 rounded-full bg-electric-blue/10"
        >
          Agence Digitale Premium
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-navy-900 mb-8 leading-[1.1] max-w-4xl mx-auto"
        >
          Transformez votre présence digitale <span className="text-electric-blue">en levier de croissance.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-navy-900/70 max-w-2xl mx-auto mb-12"
        >
          Développement web sur mesure, automatisation et SEO pour dirigeants exigeants orientés résultats.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-navy-900 text-white rounded-xl font-medium hover:bg-electric-blue transition-all shadow-xl shadow-navy-900/20 hover:shadow-electric-blue/40">
            Demander un audit gratuit
          </button>
          <button className="px-8 py-4 bg-white border border-navy-900/10 text-navy-900 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm">
            Découvrir nos services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
