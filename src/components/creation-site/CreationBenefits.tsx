
import { motion } from 'motion/react';
import { Layout, ShieldCheck, Search, FileText, Zap, Layers, ArrowRight } from 'lucide-react';

const benefits = [
  { 
    icon: Layout, 
    category: "Design d'écrans",
    title: "Valoriser votre image de marque", 
    desc: "Un design épuré, d'une grande modernité, conçu sur-mesure pour votre marque.",
    details: ["Charte graphique unique", "Recherche de styles sur-mesure", "Animations soignées fluides"],
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100"
  },
  { 
    icon: ShieldCheck, 
    category: "Crédibilité locale",
    title: "Rassurer les visiteurs", 
    desc: "Nous disposons intelligemment vos preuves de confiance clés au coeur de la navigation.",
    details: ["Avis clients automatisés", "Garanties décennales & Qualibat", "Portfolio haute-définition"],
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  { 
    icon: Search, 
    category: "Visibilité ciblée",
    title: "Surgir en tête de Google", 
    desc: "Un socle technique d'une propreté absolue pour plaire immédiatement aux robots de Google.",
    details: ["Balisage HTML5 sémantique", "Données structurées Schema.org", "Optimisation sémantique locale"],
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100"
  },
  { 
    icon: FileText, 
    category: "Architecture claire",
    title: "Structurer vos expertises", 
    desc: "Une hiérarchie de pages claire pour présenter vos travaux et services par type ou zone.",
    details: ["Pages d'expertises dédiées", "Silotage sémantique SEO", "Lecture aérée et structurée"],
    badgeColor: "bg-amber-50 text-amber-600 border-amber-100"
  },
  { 
    icon: Zap, 
    category: "Machine à contacts",
    title: "Générer des devis qualifiés", 
    desc: "Placer stratégiquement vos formulaires de contact là où vos visiteurs sont prêts à s'engager.",
    details: ["Formulaires d'estimation rapides", "Numéro cliquable permanent", "Boutons CTA à fort impact"],
    badgeColor: "bg-rose-50 text-rose-600 border-rose-100"
  },
  { 
    icon: Layers, 
    category: "Actif durable",
    title: "S'assurer un code évolutif", 
    desc: "Pas de systèmes bridés. Vous êtes propriétaire d'un code standardisé, évolutif et robuste.",
    details: ["Évite l'obsolescence technique", "Prêt pour CRM ou espace client", "Facilité de modification future"],
    badgeColor: "bg-cyan-50 text-cyan-600 border-cyan-100"
  },
];

export function CreationBenefits() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase bg-electric-blue/5 px-3 py-1 rounded-full border border-electric-blue/10">
            Maximiser votre R.O.I.
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mt-4 mb-6 leading-tight">
            Des bénéfices concrets pour devancer vos concurrents
          </h2>
          <p className="text-navy-900/60 leading-relaxed text-sm md:text-base">
            Oubliez les thèmes génériques empilant les plugins lourds et non maintenus. Nous construisons pour votre PME un véritable actif commercial sur-mesure, stable et conçu pour durer 10 ans sans perdre sa jeunesse.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {/* Header card info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-50 group-hover:bg-electric-blue/5 rounded-2xl inline-block group-hover:scale-110 transition-all duration-300 border border-gray-100 group-hover:border-electric-blue/10">
                    <b.icon className="h-6 w-6 text-electric-blue" />
                  </div>
                  <span className={`text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-md border ${b.badgeColor}`}>
                    {b.category}
                  </span>
                </div>

                {/* Title and paragraph */}
                <h3 className="text-lg font-bold font-display mb-3 text-navy-900 group-hover:text-electric-blue transition-colors duration-200">
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
                    <li key={dIdx} className="flex items-center gap-2 text-[11px] font-medium text-navy-900/80">
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
