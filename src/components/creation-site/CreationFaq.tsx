import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "À qui appartient le site internet une fois terminé ?",
    a: "Le site internet vous appartient à 100% dès le règlement de la facture de livraison. Contrairement à de nombreuses agences qui louent des sites internet déguisés sous forme d'engagements mensuels obligatoires sur 3 ou 4 ans, chez VSW Digital, vous êtes l'unique propriétaire du code, du nom de domaine et du graphisme du site."
  },
  {
    q: "Quels sont les frais d'hébergement mensuels ou annuels ?",
    a: "Grâce à notre Stack d'ingénierie Web moderne, nous pouvons déployer vos sites de manière statique sur des réseaux CDN (Content Delivery Network) mondiaux de pointe de manière 100% gratuite. Vous économisez l'intégralité des frais classiques d'hébergement. Le seul abonnement annuel obligatoire est l'achat de votre nom de domaine professionnel (environ 10 à 15 € HT par an chez OVH ou Gandi, géré en votre nom)."
  },
  {
    q: "Est-ce qu'un autre professionnel pourra modifier le site après sa création ?",
    a: "Absolument. Nous programmons nos projets à l'aide de langages standardisés d'une grande rigueur professionnelle (React.js, Tailwind CSS). N'importe quel développeur Web qualifié à l'échelle internationale pourra reprendre, étendre ou héberger à nouveau votre code sans aucune barrière technologique propriétaire."
  },
  {
    q: "Assurez-vous la rédaction des contenus textuels et la sélection de photos ?",
    a: "Oui, tout à fait. Dans notre formule phare 'Vitrine Pro SEO', nous prenons entièrement en charge la rédaction de vos pages d'expertises. Nous concevons nous-mêmes les textes pour qu'ils soient à la fois extrêmement convaincants pour vos clients de terrain et optimisés avec les mots-clés stratégiques indispensables pour séduire les robots d'indexation de Google."
  },
  {
    q: "Combien de temps faut-il pour concevoir un site internet ?",
    a: "La conception varie selon le niveau de complexité choisi. Un site de présence locale 'Vitrine Essentiel' est généralement finalisé en 10 à 15 jours. Un site vitrine complet avec SEO siloté 'Vitrine Pro SEO' nécessite environ 3 à 4 semaines de travail collaboratif échelonné (maquettes, validation, coding et optimisations sémantiques)."
  },
  {
    q: "Proposez-vous un service de maintenance après le lancement ?",
    a: "Oui, bien que des sites codés en React moderne soient intrinsèquement invulnérables aux erreurs de thèmes ou aux failles de plugins classiques de WordPress, nous proposons un forfait d'accompagnement mensuel pour effectuer les petites modifications de textes/photos de l'année, sauvegarder vos bases, configurer vos campagnes publicitaires de proximité et suivre vos analytics."
  }
];

export function CreationFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8b5cf6] uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100/50">
            Des réponses claires
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6">
            Vos questions de création de site internet
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Avant de démarrer un projet numérique, il est important d'avoir les idées claires. Nous répondons en toute transparence à vos principales interrogations logistiques et techniques.
          </p>
        </div>

        {/* Accordions list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-slate-50 border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-electric-blue bg-blue-50/10 shadow-md shadow-blue-900/5" : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 select-none"
                >
                  <span className="font-bold text-sm md:text-base text-navy-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white border border-gray-100 text-navy-900/40 shrink-0 transition-all ${
                    isOpen ? "rotate-180 border-electric-blue/20 text-electric-blue" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-50 text-xs md:text-sm text-navy-900/70 leading-relaxed">
                        {faq.a}
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
