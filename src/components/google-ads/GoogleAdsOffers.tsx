
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
    { title: "Audit Google Ads", desc: "Analyse experte pour identifier les pertes de budget et leviers d'amélioration.", features: ["Analyse campagnes", "Audit mots-clés", "Analyse tracking", "Recommandations"] },
    { title: "Lancement", desc: "Configuration complète pour générer rapidement vos premiers leads qualifiés.", features: ["Recherche mots-clés", "Structuration", "Rédaction annonces", "Configuration suivi"] },
    { title: "Gestion mensuelle", desc: "Optimisation continue pour améliorer la rentabilité dans la durée.", features: ["Suivi performances", "Ajustement mots-clés", "Tests annonces", "Reporting mensuel"] },
];

export function GoogleAdsOffers() {
    return (
        <section className="py-24 bg-navy-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Nos prestations</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {offers.map((o,i) => (
                         <div key={i} className="group p-8 bg-navy-800 rounded-3xl border border-white/5 flex flex-col hover:border-electric-blue transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/10">
                             <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-electric-blue transition-colors">{o.title}</h3>
                             <p className="text-white/60 mb-8 text-sm leading-relaxed">{o.desc}</p>
                             <ul className="space-y-4 mb-8 flex-grow">
                                 {o.features.map((f,j) => (
                                     <li key={j} className="flex items-center gap-3 text-sm text-white font-medium">
                                         <CheckCircle className="h-5 w-5 text-electric-blue shrink-0" />
                                         {f}
                                     </li>
                                 ))}
                             </ul>
                             <Link to="/contact" className="w-full text-center py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-electric-blue transition-all">Sur devis</Link>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
