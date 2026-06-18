
import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, Rocket } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    { icon: Lightbulb, title: "Analyse", desc: "Compréhension de vos besoins métier." },
    { icon: Target, title: "Stratégie", desc: "Conception de la solution optimale." },
    { icon: Zap, title: "Développement", desc: "Code propre, performant et scalable." },
    { icon: Rocket, title: "Lancement", desc: "Déploiement et suivi des résultats." },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">
          Notre Méthode de Travail
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              <s.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
              <h3 className="font-bold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-navy-900/60 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
