import { Search, Eye, Target, TrendingUp, ShieldCheck, Star, MapPin, Phone, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const mockSearches = [
  {
    keyword: "artisan charpentier bordeaux",
    title: "Charpente Traditionnelle Bordeaux | SAS Durand Artisan RGE",
    url: "https://www.charpente-durand-bordeaux.fr",
    desc: "★ SAS Durand : Spécialiste charpente bois et couverture RGE à Bordeaux. Devis gratuit sous 48h. Garantie décennale assurée. Plus de 15 ans d'expérience.",
    reviews: "4.9 · ‎124 avis",
    badge: "1er sur Google"
  },
  {
    keyword: "cabinet comptable nantes",
    title: "Expert-Comptable Nantes | Cabinet Atlantique Audit & Conseil",
    url: "https://www.atlantique-audit-nantes.com",
    desc: "✔ Accompagnement sur-mesure pour créateurs d'entreprise, artisans et PME à Nantes. Optimisation fiscale, comptabilité générale & déclarations pros.",
    reviews: "4.8 · ‎84 avis",
    badge: "Top 3 Local"
  },
  {
    keyword: "installateur pompe a chaleur lyon",
    title: "Pompe à Chaleur Lyon | Chauffage Éco RGE - Installation & Dépannage",
    url: "https://www.chauffage-eco-lyon.fr",
    desc: "Éco Chauffage : Installateur agréé de pompes à chaleur air-eau et climatisation à Lyon. Éligible aux aides MaprimeRénov 2026. Audit énergétique offert.",
    reviews: "4.9 · ‎192 avis",
    badge: "Optimisé SEO"
  }
];

export function SeoHero() {
  const [selectedSearch, setSelectedSearch] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const targetText = mockSearches[selectedSearch].keyword;
    setTypingText("");
    setIsTyping(true);
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < targetText.length) {
        setTypingText((prev) => prev + targetText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [selectedSearch]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-navy-900 text-white border-b border-white/5">
      {/* Visual blueprint elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: High impact copywriting */}
          <div className="lg:col-span-7 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/15"
            >
              <TrendingUp className="h-4 w-4 text-electric-blue animate-pulse" />
              <span className="text-electric-blue font-semibold tracking-wide uppercase text-[11px] font-mono">
                Référencement Naturel Prédictif
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-[1.1] text-white"
            >
              Positionnez votre PME <span className="text-electric-blue relative inline-block">devant<span className="absolute bottom-1 left-0 w-full h-1 bg-electric-blue/25"></span></span> tous vos concurrents sur Google
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/70 max-w-2xl mb-8 leading-relaxed"
            >
              Un magnifique site internet est invisible s'il est relégué en page 2 de Google. VSW Digital déploie des stratégies SEO scientifiques et locales, axées sur l'intention d'achat réelle pour attirer un flux ininterrompu de prospects qualifiés directs.
            </motion.p>
            
            {/* Quick check points */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid sm:grid-cols-2 gap-3 mb-10 text-xs sm:text-sm font-medium text-white/90"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-500/10 text-emerald-400 p-0.5 rounded border border-emerald-500/20">
                  <Check className="h-4 w-4" />
                </div>
                <span>Siloing sémantique de proximité</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-500/10 text-emerald-400 p-0.5 rounded border border-emerald-500/20">
                  <Check className="h-4 w-4" />
                </div>
                <span>Données structurées Schema.org</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-500/10 text-emerald-400 p-0.5 rounded border border-emerald-500/20">
                  <Check className="h-4 w-4" />
                </div>
                <span>Optimisation de vitesse Google Core Vitals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-500/10 text-emerald-400 p-0.5 rounded border border-emerald-500/20">
                  <Check className="h-4 w-4" />
                </div>
                <span>Stratégie de backlinks thématisés</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/contact?subject=audit-seo" 
                id="cta-seo-hero-audit"
                className="px-8 py-4 bg-electric-blue text-white rounded-xl font-medium hover:bg-white hover:text-navy-900 transition-all duration-300 text-center shadow-lg shadow-electric-blue/10 hover:shadow-white/20 font-sans"
              >
                Calculer mon budget SEO
              </Link>
              <a 
                href="#seo-estimator" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 text-center shadow-sm"
              >
                Estimer mon projet en direct
              </a>
            </motion.div>
          </div>
          
          {/* Column Right: Interactive SERP Google Simulator */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white text-navy-900 rounded-3xl shadow-2xl p-6 border border-gray-100 relative overflow-hidden max-w-sm sm:max-w-md mx-auto"
            >
              {/* Fake Google Logo and search input */}
              <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-between">
                  {/* Styled mock google colors */}
                  <span className="font-sans font-extrabold tracking-tight text-lg select-none">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                    Simulation de Visibilité #1
                  </span>
                </div>

                {/* Google Search Bar */}
                <div className="flex items-center gap-2.5 bg-gray-50 px-3.5 py-2.5 rounded-full border border-gray-200">
                  <Search className="h-4 w-4 text-gray-400 shrink-0" />
                  <div className="text-xs text-navy-900 font-medium font-mono min-h-[16px] flex items-center">
                    {typingText}
                    {isTyping && <span className="w-1 h-3.5 bg-electric-blue ml-0.5 animate-pulse" />}
                  </div>
                </div>

                {/* Active selectors - Interactive buttons */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {mockSearches.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      id={`serp-selector-${idx}`}
                      onClick={() => setSelectedSearch(idx)}
                      className={`text-[10px] font-medium font-sans px-3 py-1.5 rounded-full border transition-all ${
                        selectedSearch === idx 
                          ? "bg-electric-blue/10 border-electric-blue text-electric-blue font-semibold shadow-sm" 
                          : "bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-500"
                      }`}
                    >
                      {idx === 0 ? "Artisans Voeu" : idx === 1 ? "B2B Pro" : "Service RGE"}
                    </button>
                  ))}
                </div>
              </div>

              {/* SERP result snippet */}
              <div className="space-y-4">
                
                {/* Result card 1 (First place organic result) */}
                <div className="p-4 bg-blue-50/20 border border-blue-100 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                  {/* Rank tag */}
                  <div className="absolute top-3 right-3 bg-emerald-500 text-white font-mono text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                    {mockSearches[selectedSearch].badge}
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-[9px]">VSW</div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium text-gray-500 leading-none truncate max-w-[200px]">
                        {mockSearches[selectedSearch].url}
                      </span>
                      <span className="text-[8px] text-gray-400 font-mono">Recherche Organique</span>
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-blue-800 hover:underline cursor-pointer leading-snug mb-1.5">
                    {mockSearches[selectedSearch].title}
                  </h3>

                  {/* Rich stars review */}
                  <div className="flex items-center gap-1.5 mb-2 text-[10px] font-medium text-[#c07a00]">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current stroke-[2.5]" />
                      ))}
                    </div>
                    <span>Note : {mockSearches[selectedSearch].reviews}</span>
                  </div>

                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans mb-3">
                    {mockSearches[selectedSearch].desc}
                  </p>

                  {/* Visual sitelinks tags */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-[10px] font-semibold text-blue-800">
                    <span className="hover:underline cursor-pointer flex items-center gap-1">
                      <span>➤ Nos Réalisations</span>
                    </span>
                    <span className="hover:underline cursor-pointer flex items-center gap-1">
                      <span>➤ Demander un Tarif</span>
                    </span>
                  </div>
                </div>

                {/* Simulated Google Local Pack widget underneath */}
                <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between text-xs text-navy-900/60 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                    <span className="text-[11px] font-semibold text-navy-900">Établissement Google Business Fiche OK</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-500 font-bold font-mono text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Nativo</span>
                  </div>
                </div>
              </div>

              {/* Glow badge overlay */}
              <div className="absolute top-[40%] left-[-4px] bg-electric-blue text-white font-mono text-[9px] font-bold px-3 py-1 rounded-r-full shadow-lg">
                Google Rank #1
              </div>
            </motion.div>

            {/* Glowing effect behind mock */}
            <div className="absolute -inset-4 bg-electric-blue/15 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

