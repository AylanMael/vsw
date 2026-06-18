
import { motion } from 'motion/react';
import { Target, TrendingUp, DollarSign, Phone, Zap, Search } from 'lucide-react';

const benefits = [
  { icon: Target, title: "Demandes rapides", desc: "Générez des contacts commerciaux dès le lancement de vos campagnes." },
  { icon: TrendingUp, title: "Ciblage précis", desc: "Apparaissez au moment exact où vos clients cherchent vos services." },
  { icon: DollarSign, title: "Budget maîtrisé", desc: "Gardez le contrôle total sur vos dépenses et ajustez en temps réel." },
  { icon: Phone, title: "Mesure des résultats", desc: "Suivez chaque appel et chaque formulaire rempli avec précision." },
  { icon: Zap, title: "Réactivité maximale", desc: "Testez votre marché et vos offres avec une agilité totale." },
  { icon: Search, title: "Complément SEO", desc: "Une visibilité immédiate qui renforce votre portée globale sur Google." },
];

export function GoogleAdsBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Des bénéfices concrets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b,i) => (
                <motion.div 
                   key={i}
                   whileHover={{y: -5}} 
                   className="group p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-electric-blue/20 hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-300"
                >
                    <div className="mb-6 p-4 bg-white rounded-2xl inline-block group-hover:bg-electric-blue/10 transition-colors duration-300">
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
