
import { motion } from 'motion/react';
import { Lightbulb, Target, Palette, Zap, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
    { icon: Lightbulb, title: "1. Analyse", desc: "Compréhension de vos processus, utilisateurs et objectifs." },
    { icon: Target, title: "2. Stratégie", desc: "Définition des fonctionnalités prioritaires et architecture." },
    { icon: Palette, title: "3. UX/UI", desc: "Design d'une interface simple et intuitive." },
    { icon: Zap, title: "4. Développement", desc: "Code performant, sécurisé et évolutif." },
    { icon: ShieldCheck, title: "5. Tests", desc: "Vérification des rôles, formulaires et sécurité." },
    { icon: Rocket, title: "6. Lancement", desc: "Mise en ligne, accompagnement et suivi." },
];

export function WebAppsMethod() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Notre méthode de création</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((s,i) => (
                        <motion.div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-electric-blue/20 transition-all">
                            <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl inline-block">
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
