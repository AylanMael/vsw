import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Google Ads est-il adapté aux petites entreprises ?",
    a: "Oui, Google Ads peut être adapté aux PME, artisans et entreprises locales lorsque les campagnes sont bien ciblées, que le budget est suivi et que les pages d’atterrissage sont claires. L’intérêt est de concentrer les annonces sur les recherches les plus utiles pour votre activité.",
  },
  {
    q: "Quel budget faut-il prévoir ?",
    a: "Le budget dépend de votre secteur, de votre zone géographique, de la concurrence et du coût moyen des clics. Il est souvent préférable de commencer avec un budget maîtrisé, de mesurer les résultats, puis d’ajuster progressivement selon les données obtenues.",
  },
  {
    q: "Combien de temps faut-il pour obtenir des résultats ?",
    a: "Google Ads peut rendre une annonce visible rapidement après le lancement de la campagne. En revanche, les résultats commerciaux dépendent du ciblage, des annonces, du budget, de la concurrence et de la qualité de la page de destination. Les campagnes s’améliorent généralement avec l’analyse des données.",
  },
  {
    q: "Quelle est la différence entre Google Ads et le SEO ?",
    a: "Google Ads permet d’acheter de la visibilité sur des mots-clés précis, avec un budget défini. Le SEO consiste à améliorer progressivement la visibilité naturelle d’un site dans les résultats Google. Les deux approches peuvent être complémentaires.",
  },
  {
    q: "Peut-on suivre les appels et les formulaires ?",
    a: "Oui. Le suivi des conversions est essentiel pour comprendre ce qui fonctionne : appels, formulaires envoyés, clics importants ou demandes de devis. Cela permet d’optimiser les campagnes avec des données plus concrètes.",
  },
];

export function GoogleAdsFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-slate-100 bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            FAQ Google Ads
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Questions fréquentes sur Google Ads
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Avant de lancer une campagne, il est important de comprendre le
            budget, le suivi des conversions, les délais d’optimisation et la
            différence avec le référencement naturel.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[1.4rem] border bg-white shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-xl shadow-blue-500/10"
                    : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7"
                  aria-expanded={isOpen}
                  aria-controls={`google-ads-faq-panel-${index}`}
                >
                  <span className="font-display text-base font-bold leading-snug text-[#0f172a] md:text-lg">
                    {faq.q}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#3b82f6] text-white"
                        : "bg-blue-50 text-[#3b82f6]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`google-ads-faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-6 pb-6 pt-4 md:px-7">
                        <p className="text-sm leading-7 text-slate-600 md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}