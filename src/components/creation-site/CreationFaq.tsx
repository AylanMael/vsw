import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "À qui appartient le site internet une fois terminé ?",
    a: "Une fois le projet livré et réglé, les fichiers du site vous sont remis selon les conditions prévues au devis. L’objectif de VSW Digital est de vous fournir une solution claire, exploitable et non captive. Le nom de domaine doit idéalement être enregistré à votre nom afin que vous en gardiez la maîtrise.",
  },
  {
    q: "Quels sont les frais d’hébergement mensuels ou annuels ?",
    a: "Les frais dépendent de la solution choisie. Un site statique peut parfois être hébergé avec des coûts très faibles, voire sans abonnement d’hébergement dans certains cas. En revanche, le nom de domaine reste généralement payant chaque année, et certaines options comme les emails professionnels, bases de données, stockage ou services cloud peuvent générer des frais supplémentaires.",
  },
  {
    q: "Un autre professionnel pourra-t-il modifier le site après sa création ?",
    a: "Oui, si le site est développé avec des technologies standards comme React, TypeScript ou Tailwind CSS, un développeur qualifié pourra le reprendre, l’héberger ailleurs ou le faire évoluer. Nous privilégions des bases techniques lisibles et maintenables pour éviter les dépendances inutiles.",
  },
  {
    q: "Assurez-vous la rédaction des contenus et la sélection des visuels ?",
    a: "Oui, nous pouvons vous accompagner sur la rédaction des textes, la structure des pages, les titres, les appels à l’action et le choix des visuels. L’objectif est de produire des contenus clairs pour vos clients et cohérents avec votre stratégie SEO.",
  },
  {
    q: "Combien de temps faut-il pour concevoir un site internet ?",
    a: "Le délai dépend du volume de pages, du niveau de personnalisation, des contenus à produire et des validations nécessaires. Un site simple peut généralement être réalisé en quelques semaines. Un site plus complet avec contenus, SEO, maquettes et optimisations demandera davantage de temps.",
  },
  {
    q: "Proposez-vous un service de maintenance après le lancement ?",
    a: "Oui. Même lorsqu’un site est développé proprement, il reste important de prévoir un minimum de suivi : petites modifications, surveillance technique, sauvegardes, mises à jour éventuelles, suivi SEO ou accompagnement publicitaire. La maintenance permet de garder un site propre, cohérent et adapté à l’évolution de votre activité.",
  },
];

export function CreationFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="border-b border-slate-100 bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Des réponses claires
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Vos questions sur la création de site internet
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Avant de lancer un projet web, il est normal de vouloir comprendre
            les coûts, la propriété, l’hébergement, les délais et la maintenance.
            Voici les réponses aux questions les plus fréquentes.
          </p>
        </div>

        {/* Accordions */}
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
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
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
                      id={`faq-panel-${index}`}
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