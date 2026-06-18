
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: "Google Ads est-il adapté aux petites entreprises ?", a: "Oui, Google Ads est un excellent levier pour les PME car il permet un ciblage précis et une maîtrise totale du budget." },
    { q: "Quel budget faut-il prévoir ?", a: "Le budget dépend de votre secteur et de vos objectifs. L'important est de commencer avec une stratégie claire et de mesurer le retour sur investissement." },
    { q: "Combien de temps pour obtenir des résultats ?", a: "Google Ads permet d'être visible dès le lancement. Les résultats s'optimisent avec le temps grâce à l'analyse des données." },
    { q: "Quelle est la différence entre Google Ads et le SEO ?", a: "Google Ads offre une visibilité immédiate sur des mots-clés choisis, tandis que le SEO est un travail de fond pour une visibilité durable." },
    { q: "Peut-on suivre les appels ?", a: "Absolument. Le suivi des appels est essentiel pour mesurer l'efficacité réelle de vos campagnes." },
];

export function GoogleAdsFaq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16 underline decoration-electric-blue/30 underline-offset-8">Questions fréquentes</h2>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <button 
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left font-bold text-navy-900"
                            >
                                {f.q}
                                <ChevronDown className={`transition-transform ${activeIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="px-6 pb-6 text-navy-900/70"
                                    >
                                        {f.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
