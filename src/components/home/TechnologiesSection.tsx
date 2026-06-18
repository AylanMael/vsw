
import { motion } from 'motion/react';
import { technologies } from '../../data/technologies';

export function TechnologiesSection() {
  return (
    <section className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 underline decoration-electric-blue/30 underline-offset-8">
          Technologies maîtrisées
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((t, i) => (
            <motion.div 
               key={i}
               whileHover={{ scale: 1.05 }}
               className="px-6 py-3 bg-white/10 rounded-full border border-white/10"
            >
              <span className="font-medium">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
