
import { CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  { 
    title: "Vitrine Essentiel", 
    tagline: "Présence locale rapide",
    idealFor: "Artisans, professions libérales ou commerces de proximité démarrant leur activité.",
    price: "1 290 €",
    duration: "10-15 jours",
    features: [
      "4 à 5 pages clés de présentation",
      "Webdesign moderne & 100% Mobile",
      "Formulaire de devis & contact protégé",
      "Optimisation SEO locale de base",
      "Boutons d'appels directs pour mobiles",
      "Hébergement ultra-rapide sécurisé"
    ],
    isPopular: false,
    ctaText: "Choisir l'offre Essentiel",
    badge: "Le pack démarrage"
  },
  { 
    title: "Vitrine Pro SEO", 
    tagline: "Maximiser vos chantiers",
    idealFor: "PME et artisans établis souhaitant surpasser leurs concurrents sur Google.",
    price: "2 290 €",
    duration: "3-4 semaines",
    features: [
      "Pages d'expertises illimitées (silos)",
      "Rédaction de contenus optimisée SEO",
      "Campagne d'indexation locale ciblée",
      "Score mobile Google PageSpeed > 90/100",
      "Intégration d'avis Google automatisés",
      "Rapport trimestriel d'analytics & leads",
      "Sauvegarde & Sécurité renforcée"
    ],
    isPopular: true,
    ctaText: "Choisir l'offre Pro SEO",
    badge: "Idéal PME locale"
  },
  { 
    title: "Premium Évolutif", 
    tagline: "Sur-mesure de pointe",
    idealFor: "Entreprises installées voulant une image haut de gamme ou des fonctions complexes.",
    price: "Sur devis",
    duration: "4-6 semaines",
    features: [
      "Design 100% sur-mesure d'ingénieur",
      "Structure multi-langues ou multi-villes",
      "Espace client privé ou portail collaboratif",
      "Interconnexion de formulaires avec votre CRM",
      "Tracking marketing avancé (Meta/Google)",
      "Optimisation de vitesse extrême",
      "Accompagnement mensuel inclus 3 mois"
    ],
    isPopular: false,
    ctaText: "Demander une étude Premium",
    badge: "Le sur-mesure absolu"
  },
];

export function CreationOffers() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase bg-electric-blue/5 px-3 py-1 rounded-full border border-electric-blue/10">
            Transparence & Rigueur
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6 leading-tight">
            Des formules conçues pour s'adapter à votre projet
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Aucun coût caché ni abonnement captif. Nos devis sont fixes, transparents et taillés sur-mesure selon la complexité et les objectifs d'affaires de votre entreprise.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {offers.map((o, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                o.isPopular 
                  ? "bg-navy-900 text-white shadow-2xl shadow-blue-900/10 scale-105 lg:translate-y-[-8px] border-2 border-electric-blue" 
                  : "bg-slate-50 text-navy-900 border border-gray-100 hover:border-gray-200"
              }`}
            >
              
              {/* Popular Badge */}
              {o.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%] bg-electric-blue text-white text-[10px] font-mono tracking-widest uppercase font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-electric-blue/30">
                  <Sparkles className="h-3 w-3 animate-pulse" />
                  Recommandé par nos clients
                </div>
              )}

              <div>
                {/* Badge card info */}
                <span className={`inline-block text-[10px] font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded-md mb-6 ${
                  o.isPopular ? "bg-white/10 text-electric-blue border border-white/10" : "bg-white text-navy-900/50 border border-black/5"
                }`}>
                  {o.badge}
                </span>

                <h3 className="text-2xl font-bold font-display mb-1">{o.title}</h3>
                <p className={`text-xs mb-6 ${o.isPopular ? "text-white/60" : "text-navy-900/50"}`}>{o.tagline}</p>
                
                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-gray-100/10 flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-mono font-bold">{o.price}</span>
                  {o.price !== "Sur devis" && <span className="text-xs text-muted-foreground">HT</span>}
                </div>

                {/* Ideal for target */}
                <p className={`text-xs mb-8 leading-relaxed font-medium ${
                  o.isPopular ? "text-white/80" : "text-navy-900/70"
                }`}>
                  {o.idealFor}
                </p>

                {/* Delivery duration info */}
                <div className={`text-xs font-mono mb-8 flex items-center gap-2 ${
                  o.isPopular ? "text-emerald-400" : "text-electric-blue"
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current" />
                  <span>Délai d'exécution : {o.duration}</span>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {o.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs leading-relaxed">
                      <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${
                        o.isPopular ? "text-electric-blue" : "text-emerald-500"
                      }`} />
                      <span className={o.isPopular ? "text-white/95" : "text-navy-900"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action button */}
              <Link 
                to="/contact" 
                className={`w-full text-center py-4 rounded-xl font-medium transition-all duration-300 ${
                  o.isPopular 
                    ? "bg-electric-blue text-white hover:bg-white hover:text-navy-900 shadow-lg shadow-electric-blue/20" 
                    : "bg-white border border-navy-900/10 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 shadow-sm"
                }`}
              >
                {o.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
