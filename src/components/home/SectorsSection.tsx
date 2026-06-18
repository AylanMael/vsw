
import { motion } from 'motion/react';
import { sectors } from '../../data/sectors';

export function SectorsSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-16">
          Secteurs que nous accompagnons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sectors.map((s, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <p className="font-semibold text-navy-900">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
