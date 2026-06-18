
import { motion } from 'motion/react';
import { RefreshCcw, Database, Users, Lock, BarChart, Zap } from 'lucide-react';

const benefits = [
  { icon: RefreshCcw, title: "Gain de temps massif", desc: "Automatisez vos tâches répétitives et concentrez-vous sur votre cœur de métier." },
  { icon: Database, title: "Centralisation des données", desc: "Fini les fichiers dispersés, vos informations sont structurées et accessibles." },
  { icon: Users, title: "Suivi client & demandes", desc: "Maîtrisez vos flux de demandes, de devis et vos suivis clients." },
  { icon: Lock, title: "Sécurité & Confidentialité", desc: "Vos données sont stockées de manière sécurisée et organisée." },
  { icon: BarChart, title: "Pilotage métier", desc: "Des tableaux de bord pour visualiser et piloter votre activité efficacement." },
  { icon: Zap, title: "Évolutivité garantie", desc: "Des solutions modulaires qui grandissent avec vos ambitions." },
];

export function CloudBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Des bénéfices concrets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b,i) => (
                <motion.div 
                   key={i}
                   whileHover={{y: -5}} 
                   className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-electric-blue/20 hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-300"
                >
                    <div className="mb-6 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-electric-blue/10 transition-colors duration-300">
                        <b.icon className="h-8 w-8 text-electric-blue" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-3 text-navy-900 group-hover:text-electric-blue transition-colors duration-300">{b.title}</h3>
                    <p className="text-base text-navy-900/60 leading-relaxed">{b.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
