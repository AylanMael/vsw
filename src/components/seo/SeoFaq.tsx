import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Quand verrai-je les premiers résultats d'acquisition SEO ?",
    a: "Le SEO est un investissement progressif. Pour une thématique locale ou peu concurrentielle, les premiers gains de positions significatifs s'observent sous 3 à 6 semaines. Pour des requêtes à forte concurrence ou au niveau national, il faut compter entre 3 et 6 mois de travail de fond (Netlinking et accumulation de contenu thématique) pour s'installer durablement en première page. Une fois acquis, ce trafic est stable et entièrement gratuit."
  },
  {
    q: "Proposez-vous une garantie de résultat pour la première position ?",
    a: "Toute agence ou prestataire qui vous garantit par contrat la position #1 sur Google ment. Seul Google maîtrise son algorithme complexe de classement (composé de plus de 200 facteurs secrets). En revanche, nous nous engageons sur une obligation de moyens d'une grande rigueur : nos protocoles sémantiques strictes et notre code épuré permettent à plus de 90% de nos clients de se positionner durablement dans le Top 3 sur leurs requêtes stratégiques."
  },
  {
    q: "Quelle est la différence entre Google Ads (SEA) et le SEO ?",
    a: "La publicité Google Ads (SEA) est un système de location de trafic : vous payez chaque clic d'internaute. Dès que vous coupez le budget quotidien, votre site redevient instantanément invisible. À l'inverse, le SEO (référencement naturel) est l'acquisition d'un actif immobilier virtuel. Vous ne payez pas les clics et vous restez visible 24h/24, devenant un canal d'acquisition pérenne et autonome."
  },
  {
    q: "Pouvez-vous optimiser mon site internet WordPress existant ?",
    a: "Oui, tout à fait. Nous effectuons un audit technique complet de votre CMS existant pour identifier les freins à l'indexation (plugins lourds, thèmes mal codés, lenteur mobile). Si la structure est exploitable, nous effectuons les rectifications on-page directement. Si le site est trop vétuste ou pénalisé techniquement par des builders obsolètes, nous vous proposerons de cloner vos maquettes dans notre moteur React d'ingénierie moderne."
  },
  {
    q: "Le niveau d'optimisation dépend-il du secteur géographique ?",
    a: "Absolument. C'est ce qu'on appelle le SEO local. Ranker sur 'plombier Bordeaux' demande une stratégie de silos géographiques plus poussée que sur une ville intermédiaire comme 'plombier Libourne'. Nous calibrons notre étude de mot-clé au plus proche de votre zone de prospection réelle pour que chaque euro investi cible directement des clients potentiels autour de vos chantiers."
  },
  {
    q: "Les réseaux sociaux influencent-ils directement mon SEO ?",
    a: "Pas directement. Les signaux provenant de Facebook, LinkedIn ou Instagram ne sont pas directement intégrés par l'algorithme d'indexation de Google pour classer une page web. Cependant, une forte présence sociale génère des recherches de marque directes sur Google et favorise l'obtention de liens naturels (backlinks), ce qui améliore indirectement l'autorité globale de votre domaine."
  }
];

export function SeoFaq() {
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
            Foire Aux Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6">
            Tout comprendre sur le référencement naturel
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Le SEO est crucial mais soulève souvent des questions d'orientation commerciale. Nous vous apportons des réponses techniques précises, pragmatiques et transparentes.
          </p>
        </div>

        {/* Accordeons items Accordions */}
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
                  id={`seo-faq-btn-${idx}`}
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
