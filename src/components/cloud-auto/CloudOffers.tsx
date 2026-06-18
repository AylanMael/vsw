
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
    { title: "Automatisation simple", desc: "Pour automatiser une tâche précise et gagner rapidement du temps.", features: ["Formulaire connecté", "Enregistrement", "Email automatique", "Notification interne"] },
    { title: "Workflow métier", desc: "Pour structurer un processus complet avec étapes.", features: ["Base de données", "Statuts", "Notifications", "Stockage docs", "Tableau de bord"] },
    { title: "Solution cloud avancée", desc: "Pour une solution robuste, évolutive et connectée.", features: ["Architecture évolutive", "Fonctions backend", "API externes", "Rôles utilisateurs", "Sécurité avancée"] },
];

export function CloudOffers() {
    return (
        <section className="py-24 bg-navy-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Des solutions adaptées</h2>
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
