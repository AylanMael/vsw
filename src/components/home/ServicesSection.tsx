
import { motion } from 'motion/react';
import { Layout, Search, BarChart, Settings } from 'lucide-react';
import { services } from '../../data/services';

const icons = [Layout, Search, BarChart, Settings];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">
          Nos Services d'Experts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-electric-blue/20 hover:shadow-2xl hover:shadow-electric-blue/5 transition-all duration-300"
              >
                <div className="mb-6 p-3 bg-blue-50/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-navy-900">{s.title}</h3>
                <p className="text-sm text-navy-900/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
