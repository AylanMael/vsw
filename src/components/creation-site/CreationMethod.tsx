
import { motion } from 'motion/react';
import { Lightbulb, Target, Palette, Zap, Search, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  { 
    number: "01",
    phase: "Cadrage",
    icon: Lightbulb, 
    title: "Analyse métier & Benchmark", 
    desc: "Nous étudions en profondeur vos concurrents locaux, les intentions de recherches de vos clients et votre proposition de valeur unique.",
    bullets: ["Identification des mots-clés prioritaires", "Analyse comparative de la concurrence", "Définition des objectifs de conversion (KPIs)"]
  },
  { 
    number: "02",
    phase: "Fondation",
    icon: Target, 
    title: "Stratégie sémantique & Arborescence", 
    desc: "Création d'un plan de site stratégique (siloing sémantique) pour garantir une indexation parfaite de chaque service sur votre zone géographique.",
    bullets: ["Structure de maillage interne", "Planification des contenus d'expertises", "Maquettes d'intention (UX wireframes)"]
  },
  { 
    number: "03",
    phase: "Esthétique",
    icon: Palette, 
    title: "Identité visuelle & UI Design", 
    desc: "Création d'un webdesign sur-mesure combinant modernité graphique, lisibilité exemplaire pour rassurer et optimiser la conversion mobile.",
    bullets: ["Webdesign haut de gamme sur-mesure", "Prototypage interactif mobile/desktop", "Sélection minutieuse typographies & contrastes"]
  },
  { 
    number: "04",
    phase: "Code",
    icon: Zap, 
    title: "Développement React épuré", 
    desc: "Codage intégral sans aucun outil lourd. Nous écrivons un code propre, ultra-optimisé et léger pour un temps de chargement instantané.",
    bullets: ["Intégration responsive rigoureuse", "Sémantique HTML5 & accessibilité", "Zéro sur-couche d'extensions tierces lourdes"]
  },
  { 
    number: "05",
    phase: "SEO Intégral",
    icon: Search, 
    title: "Optimisation de visibilité Google", 
    desc: "Nous injectons les meilleures pratiques SEO au cœur même de la structure technique du site avant sa sortie.",
    bullets: ["Données structurées JSON-LD", "Optimisation fine des balises et meta-tags", "Plan de redirections 301 étanche si refonte"]
  },
  { 
    number: "06",
    phase: "Livraison",
    icon: Rocket, 
    title: "Déploiement & Accompagnement", 
    desc: "Lancement sur serveur sécurisé, interconnexion de vos outils d'analytics (Search Console, Analytics) et formation de prise en main autonome.",
    bullets: ["Mise en ligne sans interruption de service", "Configuration HTTPS & pare-feu", "Formation synthétique (vidéo personnalisée)"]
  },
];

export function CreationMethod() {
  return (
    <section className="py-24 bg-slate-50/50 border-b border-gray-100 relative overflow-hidden">
      {/* Visual ambient circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-electric-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-modern-purple/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#8b5cf6] uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100/50">
            Processus Éprouvé
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6 leading-tight">
            Notre méthode de création rigoureuse
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            La création d’un site performant ne doit rien au hasard. Nous suivons un déploiement ordonné en 6 étapes clés, de la première idée stratégique au suivi de vos nouvelles demandes de devis.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Step floating index number */}
                <span className="absolute top-4 right-6 text-5xl md:text-6xl font-mono font-bold text-gray-50 group-hover:text-electric-blue/5 transition-colors duration-300 select-none">
                  {s.number}
                </span>

                {/* Step badge and icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-electric-blue/5 text-electric-blue rounded-xl group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#8b5cf6] bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100/30">
                    PHASE {s.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-navy-900 mb-3 group-hover:text-electric-blue transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-xs text-navy-900/65 leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              {/* Step Bullet Deliverables */}
              <div className="border-t border-gray-50 pt-5 mt-auto bg-slate-50/20 -mx-8 -mb-8 p-8 rounded-b-3xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy-900/40 block mb-3">
                  Livrables & Actions :
                </span>
                <ul className="space-y-2">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-[11px] text-navy-900/75 leading-relaxed">
                      <ChevronRight className="h-3.5 w-3.5 text-electric-blue shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
