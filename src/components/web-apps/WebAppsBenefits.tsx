
import { motion } from 'motion/react';
import { Database, Zap, Users, Lock, BarChart, RefreshCcw } from 'lucide-react';

const benefits = [
  { icon: Database, title: "Centralisation des données", desc: "Fini les fichiers Excel éparpillés, tout votre métier au même endroit." },
  { icon: RefreshCcw, title: "Automatisation métier", desc: "Gain de temps massif en automatisant les processus répétitifs." },
  { icon: Users, title: "Suivi client & demandes", desc: "Ne perdez plus aucune information de vos prospects ou clients." },
  { icon: Lock, title: "Sécurité & Accès", desc: "Données protégées, rôles utilisateurs et accès sécurisé." },
  { icon: BarChart, title: "Pilotage & Dashboards", desc: "Pilotez votre activité avec des indicateurs clairs et en temps réel." },
  { icon: Zap, title: "Évolutivité garantie", desc: "Votre solution grandit avec votre entreprise sans limite complexe." },
];

export function WebAppsBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Des bénéfices concrets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b,i) => (
                <motion.div 
                   key={i}
                   whileHover={{y: -5}} 
                   className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-electric-blue/20 hover:shadow-2xl hover:shadow-electric-blue/5 transition-all duration-300"
                >
                    <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl inline-block group-hover:bg-electric-blue/10 transition-colors duration-300">
                        <b.icon className="h-8 w-8 text-electric-blue" />
                    </div>
                    <h3 className="text-xl font-bold font-display mb-3 text-navy-900">{b.title}</h3>
                    <p className="text-sm text-navy-900/60 leading-relaxed">{b.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
