
import { motion } from 'motion/react';
import { Database, Server, Cpu, Cloud, Globe } from 'lucide-react';

const techs = [
    { icon: Globe, title: "Next.js / React", desc: "Pour des interfaces fluides." },
    { icon: Database, title: "Firebase", desc: "Base de données évolutive." },
    { icon: Cloud, title: "Google Cloud / AWS", desc: "Infrastructure robuste." },
    { icon: Server, title: "API / Serverless", desc: "Automatisation légère." },
    { icon: Cpu, title: "Règles de sécurité", desc: "Protection des données." },
];

export function CloudTechs() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Technologies au service du métier</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {techs.map((t,i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 text-center hover:border-electric-blue transition-all">
                            <t.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                            <h3 className="font-bold text-navy-900">{t.title}</h3>
                            <p className="text-xs text-navy-900/60 mt-1">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
