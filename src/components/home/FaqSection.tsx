
import { motion } from 'motion/react';
import { faqs } from '../../data/faqs';

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 text-center mb-16">
          Questions Fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-navy-900 mb-2">{f.q}</h3>
              <p className="text-navy-900/60 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
