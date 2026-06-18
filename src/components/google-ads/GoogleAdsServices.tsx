
import { motion } from 'motion/react';
import { Search, FileText, Settings, BarChart, Users, Phone } from 'lucide-react';

const services = [
  { icon: Settings, title: "Audit de compte", desc: "Analyse technique et stratégique de vos campagnes existantes." },
  { icon: Search, title: "Campagnes Search", desc: "Structuration de campagnes ciblées sur des requêtes rentables." },
  { icon: Users, title: "Ciblage & mots-clés", desc: "Identification des intentions de recherche réelles de vos clients." },
  { icon: FileText, title: "Rédaction d'annonces", desc: "Annonces percutantes pour maximiser le taux de clics." },
  { icon: BarChart, title: "Landing pages", desc: "Création ou optimisation de pages pour convertir vos visiteurs." },
  { icon: Phone, title: "Suivi des conversions", desc: "Traçabilité précise des appels et demandes de devis." },
];

export function GoogleAdsServices() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Un accompagnement complet</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s,i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-electric-blue transition-all">
                    <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl inline-block">
                        <s.icon className="h-8 w-8 text-electric-blue" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-navy-900 mb-3">{s.title}</h3>
                    <p className="text-sm text-navy-900/60 leading-relaxed">{s.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
