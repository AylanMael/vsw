
import { motion } from 'motion/react';
import { Lightbulb, Target, Settings, Code, FileText, BarChart } from 'lucide-react';

const steps = [
    { icon: Lightbulb, title: "1. Analyse", desc: "Compréhension de votre métier, marges et objectifs." },
    { icon: Target, title: "2. Stratégie", desc: "Définition des cibles, zones et budgets." },
    { icon: Settings, title: "3. Création", desc: "Structuration des campagnes et annonces." },
    { icon: Code, title: "4. Tracking", desc: "Mise en place du suivi précis des conversions." },
    { icon: FileText, title: "5. Optimisation", desc: "Amélioration continue des pages de destination." },
    { icon: BarChart, title: "6. Reporting", desc: "Analyse des données et pilotage de la rentabilité." },
];

export function GoogleAdsMethod() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-16 underline decoration-electric-blue/30 underline-offset-8">Notre méthode de rentabilité</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((s,i) => (
                        <motion.div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-electric-blue transition-all">
                            <div className="mb-6 p-4 bg-white rounded-2xl inline-block">
                                <s.icon className="h-8 w-8 text-electric-blue" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-navy-900 mb-3">{s.title}</h3>
                            <p className="text-sm text-navy-900/60 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
