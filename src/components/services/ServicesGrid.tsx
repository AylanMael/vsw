import { motion } from 'motion/react';
import { Palette, Search, Megaphone, Code, Cloud, RefreshCw, Wrench, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Palette, title: "Création Site Internet", desc: "Sites modernes, rapides, responsive et optimisés pour convertir.", link: "/creation-site-internet" },
  { icon: Search, title: "Référencement SEO", desc: "Positionnez votre activité durablement sur les moteurs de recherche.", link: "/referencement-seo" },
  { icon: Megaphone, title: "Google Ads & Leads", desc: "Générez des appels et demandes de devis qualifiés rapidement.", link: "/google-ads" },
  { icon: Code, title: "Applications Web", desc: "Espaces clients, outils métier, applications évolutives.", link: "/applications-web" },
  { icon: Cloud, title: "Cloud & Automatisation", desc: "Gagnez du temps avec des workflows et solutions cloud sécurisées.", link: "/cloud-automatisation" },
  { icon: RefreshCw, title: "Refonte de site", desc: "Modernisez votre image, votre SEO et votre taux de conversion.", link: "/refonte-site-internet" },
  { icon: Wrench, title: "Maintenance technique", desc: "Suivi, mises à jour, sécurité et hébergement performant.", link: "/maintenance-site-internet" },
  { icon: BarChart, title: "Audit Digital", desc: "Analyse experte pour booster votre performance digitale.", link: "/audit-digital" },
];

export function ServicesGrid() {
  return (
    <section id="services-list" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Nos services principaux</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s,i) => (
                <motion.div 
                   key={i} 
                   whileHover={{y: -5}}
                   className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-electric-blue/20 hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-300 flex flex-col"
                >
                    <div className="mb-6 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-electric-blue/10 transition-colors duration-300">
                        <s.icon className="h-8 w-8 text-electric-blue" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-navy-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">{s.title}</h3>
                    <p className="text-sm text-navy-900/60 leading-relaxed mb-6 flex-grow">{s.desc}</p>
                    <Link to={s.link} className="flex items-center text-electric-blue font-bold hover:gap-2 transition-all">
                        Découvrir ce service <span className="ml-2">→</span>
                    </Link>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
