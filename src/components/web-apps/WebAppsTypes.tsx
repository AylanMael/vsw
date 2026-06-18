
import { motion } from 'motion/react';
import { Layout, Server, FileText, Target, Users, Bot, Code, Settings, BarChart } from 'lucide-react';

const types = [
    { icon: Users, title: "Espace client sécurisé" },
    { icon: BarChart, title: "Tableau de bord métier" },
    { icon: FileText, title: "Gestion documentaire" },
    { icon: Target, title: "Gestion de leads/CRM" },
    { icon: Settings, title: "Portail administrateur" },
    { icon: Settings, title: "Outils de devis" },
];

export function WebAppsTypes() {
    return (
        <section className="py-24 bg-navy-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Solutions adaptées</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {types.map((t,i) => (
                        <div key={i} className="p-8 bg-navy-800 rounded-3xl border border-white/5 flex items-center gap-6 hover:border-electric-blue transition-all group">
                            <div className="p-3 bg-navy-900 rounded-2xl group-hover:bg-electric-blue/10 transition-colors">
                                <t.icon className="h-8 w-8 text-electric-blue" />
                            </div>
                            <span className="font-bold text-lg">{t.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
