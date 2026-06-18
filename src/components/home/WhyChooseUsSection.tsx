
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-6">
              Pourquoi choisir VSW ?
            </h2>
            <p className="text-navy-900/70 mb-8">
              Une expertise technique d'ingénieur alliée à une vision orientée business et résultats.
            </p>
            <ul className="space-y-4">
              {['Expertise technique pointue', 'Approche orientée résultat', 'Proximité et réactivité'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-electric-blue" />
                  <span className="font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-900 rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-display font-bold mb-6">Nos Engagements</h3>
            <p className="opacity-80">Transparence totale, délais maîtrisés et qualité premium pour chaque projet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
