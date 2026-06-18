import { motion } from 'motion/react';
import { Code2, FileText, Share2, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

export function SeoPillars() {
  const pillars = [
    {
      num: "01",
      icon: Code2,
      title: "Optimisation Technique (On-Page)",
      subtitle: "La fondation indispensable pour séduire les algorithmes Google",
      desc: "Avant d'écrire le moindre mot, votre site doit être techniquement irréprochable. Google sanctionne lourdement les sites lents, complexes ou mal structurés. Notre code React ultra-léger et épuré garantit un affichage instantané et un crawl fluide.",
      points: [
        "Vitesse de chargement optimale (Core Web Vitals au vert)",
        "Indexation précise garantie via des structures HTML5 rigoureuses",
        "Données structurées Schema.org pour générer des rich snippets",
        "Sitemap.xml et robots.txt configurés selon les règles de l'art",
        "Optimisation mobile absolue (Responsive & Touch Targets corrects)"
      ],
      tag: "Fondation algorithmique",
      color: "from-blue-500/10 to-transparent border-blue-500/15"
    },
    {
      num: "02",
      icon: FileText,
      title: "Stratégie de Contenu & Sémantique",
      subtitle: "Répondre avec précision aux requêtes d'achat réelles",
      desc: "Nous concevons des silos de pages d'expertises sémantiquement étanches qui démontrent votre autorité thématique auprès de Google. Chaque article ou page répond exactement à une intention de recherche d'un internaute qualifié de votre zone géographique.",
      points: [
        "Étude poussée des volumes de recherche locaux et nationaux",
        "Regroupement de mots-clés par cocon sémantique (clustering)",
        "Copywriting persuasif et structuré pour la conversion (Call-To-Actions)",
        "Balisage sémantique optimisé (HN hiérarchisés, balises Alt)",
        "Maillage interne logique pour diluer la puissance sémantique"
      ],
      tag: "Domination de mots-clés",
      color: "from-purple-500/10 to-transparent border-purple-500/15"
    },
    {
      num: "03",
      icon: Share2,
      title: "Autorité & Netlinking Ciblé",
      subtitle: "Gagner la confiance du moteur de recherche sur vos concurrents",
      desc: "Les liens externes (backlinks) pointant vers votre site agissent comme des votes de confiance pour les robots Google. Nous déployons des campagnes d'acquisition de liens de haute qualité sur des domaines connexes, consolidant votre autorité en permanence.",
      points: [
        "Netlinking thématisé et géographiquement cohérent",
        "Optimisation des profils Google Business Profile et annuaires",
        "Analyse de l'écart d'autorité (Gap Analysis) face à la concurrence",
        "Ancrages de liens naturels, variés et non suroptimisés (White Hat)",
        "Suivi fin des indicateurs d'autorité (Trust Flow & Citation Flow)"
      ],
      tag: "Crédibilité de domaine",
      color: "from-amber-500/10 to-transparent border-amber-500/15"
    }
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-electric-blue/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Ingénierie tripartite du SEO
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
            Les 3 piliers d'un positionnement indestructible
          </h2>
          <p className="text-white/60 leading-relaxed text-sm md:text-base">
            Le référencement Google n'est pas un art occulte ou une suite de techniques magiques. C'est une discipline scientifique de rigueur qui repose sur la synergie de trois composants indissociables.
          </p>
        </div>

        {/* Pillars Blocks */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-gradient-to-r ${pillar.color} rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl relative overflow-hidden`}
              >
                {/* Visual watermarked number in background */}
                <div className="absolute -top-6 -right-6 text-[100px] md:text-[140px] font-mono font-extrabold text-white/[0.02] select-none pointer-events-none leading-none">
                  {pillar.num}
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start relative z-10">
                  
                  {/* Left block (Title & details) */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono font-bold text-electric-blue bg-white/5 px-3.5 py-1.5 rounded-lg border border-white/5">
                      {pillar.tag}
                    </span>
                    <h3 className="text-2xl md:text-3.5xl font-display font-bold text-white mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-electric-blue/90 text-xs md:text-sm font-semibold">
                      {pillar.subtitle}
                    </p>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed pt-2">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Right block (Features ticks checklist) */}
                  <div className="lg:col-span-6 bg-white/[0.02] rounded-24 p-6 border border-white/5 space-y-4">
                    <span className="text-[10px] text-white/40 uppercase font-mono block tracking-wider">Spécifications techniques d'intégration :</span>
                    <ul className="space-y-3">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex gap-3 text-xs text-white/80 items-start">
                          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
