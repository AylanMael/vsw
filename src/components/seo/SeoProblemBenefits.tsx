
import { AlertCircle, Target, TrendingUp, ShieldCheck, Users, Zap, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function SeoProblemSection() {
  const problems = [
    {
      label: "Visibilité invisible",
      title: "Peu ou pas de trafic organique",
      desc: "Votre site stagne dans les tréfonds de Google. Sans trafic qualifié quotidien, l'investissement de votre site internet reste à rendement nul.",
      color: "border-red-100 bg-red-50/10 text-red-600"
    },
    {
      label: "Positionnement",
      title: "Pages mal indexées sur Google",
      desc: "Les moteurs de recherche n'accordent aucune autorité à vos pages clés, les reléguant au-delà de la 3ème page là où personne ne clique.",
      color: "border-orange-100 bg-orange-50/10 text-orange-600"
    },
    {
      label: "Sémantique",
      title: "Absence de stratégie de mots-clés",
      desc: "Vous ciblez des requêtes trop génériques ou, à l'inverse, sans volume de recherche. Vos prospects cherchent d'autres termes professionnels.",
      color: "border-yellow-105 bg-yellow-50/10 text-yellow-600"
    },
    {
      label: "Technique",
      title: "Structure de code non optimisée",
      desc: "Temps de chargement mobile interminable, balisage heading anarchique, absence de données structurées. Google refuse de vous mettre en avant.",
      color: "border-amber-100 bg-amber-50/10 text-amber-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/60 border-b border-gray-100 relative">
      {/* Visual blueprint overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: text content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Le diagnostic de terrain
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 leading-tight">
              Votre site internet existe, mais est-il vraiment visible ?
            </h2>
            <p className="text-navy-900/70 text-sm md:text-base leading-relaxed">
              Disposer d'une magnifique vitrine virtuelle est inutile si personne ne passe devant. Sur internet, 91% des clics se font exclusivement sur la première page de Google. 
            </p>
            <p className="text-navy-900/60 text-xs md:text-sm leading-relaxed">
              Si vos expertises locales n'émergent pas immédiatement lorsque vos prospects tapent vos services, vous offrez mécaniquement vos parts de marché à vos concurrents les plus visibles.
            </p>
          </div>

          {/* Column Right: Grid of structured problem cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {problems.map((prob, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${prob.color}`}>
                      {prob.label}
                    </span>
                    <AlertCircle className="h-4 w-4 text-red-500/50" />
                  </div>
                  <h3 className="font-bold text-sm text-navy-900 mb-2">{prob.title}</h3>
                  <p className="text-[11px] text-navy-900/60 leading-relaxed font-sans">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export function SeoBenefitsSection() {
  const benefits = [
    { 
      icon: TrendingUp, 
      category: "Position SEO",
      title: "Visibilité accrue ciblée", 
      desc: "Soyez présent de manière permanente sur les requêtes commerciales précises qui qualifient votre cible.",
      details: ["Positionnement de mots-clés chauds", "Indexation de vos services clés", "Silos sémantiques robustes"],
      badgeColor: "bg-blue-50 text-blue-600 border-blue-100"
    },
    { 
      icon: Users, 
      category: "Conversion client",
      title: "Flux de prospects qualifiés", 
      desc: "Attirez des internautes motivés qui cherchent activement une réponse ou un prestataire qualifié sur votre secteur.",
      details: ["Taux de rebond réduit", "Intention de contact immédiate", "Formulaires de devis optimisés"],
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    { 
      icon: Zap, 
      category: "Canal gratuit",
      title: "Indépendance publicitaire", 
      desc: "Développez et pérennisez un actif d'indexation stable, sans dépendre du coût par clic toujours plus cher des enchères Ads.",
      details: ["Trafic 100% gratuit stabilisé", "ROI exponentiel dans le temps", "Capital d'autorité de domaine"],
      badgeColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    { 
      icon: ShieldCheck, 
      category: "Légitimité",
      title: "Crédibilité locale absolue", 
      desc: "Figurer au sommet des résultats Google est perçu par vos prospects comme un label incontestable de professionnalisme.",
      details: ["Fiche Google Établissement OK", "Preuves de confiance valorisées", "Notoriété de marque renforcée"],
      badgeColor: "bg-amber-50 text-amber-600 border-amber-100"
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Maximiser votre acquisition
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6 leading-tight">
            Le SEO : un investissement commercial à long terme
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Contrairement à la publicité payante qui s'arrête dès que vous coupez le budget, l'optimisation pour moteurs de recherche bâtit une infrastructure d'acquisition solide et durable qui produit des demandes jour après jour.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }} 
              className="group p-8 bg-white border border-gray-100 rounded-3xl hover:border-electric-blue/20 hover:shadow-2xl hover:shadow-electric-blue/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual icon & badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-50 group-hover:bg-electric-blue/5 rounded-2xl inline-block group-hover:scale-110 transition-all duration-300 border border-gray-100 group-hover:border-electric-blue/10">
                    <b.icon className="h-6 w-6 text-electric-blue" />
                  </div>
                  <span className={`text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-md border ${b.badgeColor}`}>
                    {b.category}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display mb-3 text-navy-900 group-hover:text-electric-blue transition-colors duration-200">
                  {b.title}
                </h3>
                <p className="text-xs text-navy-900/65 leading-relaxed mb-6">
                  {b.desc}
                </p>
              </div>

              {/* Sub features bullet points */}
              <div className="border-t border-gray-50 pt-5 mt-auto">
                <ul className="space-y-2.5">
                  {b.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-[10px] font-medium text-navy-900/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-blue/70" />
                      <span>{detail}</span>
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

