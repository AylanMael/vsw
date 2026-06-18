import { SeoHero } from '../components/seo/SeoHero';
import { SeoProblemSection, SeoBenefitsSection } from '../components/seo/SeoProblemBenefits';
import { SeoPillars } from '../components/seo/SeoPillars';
import { SeoMethod } from '../components/seo/SeoMethod';
import { SeoEstimator } from '../components/seo/SeoEstimator';
import { SeoFaq } from '../components/seo/SeoFaq';
import { Link } from 'react-router-dom';

export function ReferencementSeo() {
  return (
    <div className="flex flex-col">
      <SeoHero />
      <SeoProblemSection />
      <SeoBenefitsSection />
      <SeoPillars />
      <SeoMethod />
      <SeoEstimator />
      <SeoFaq />

      {/* CTA final */}
      <section className="py-24 bg-navy-900 text-white text-center relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-electric-blue/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Prêt à dominer votre secteur sur Google ?</h2>
          <p className="text-sm md:text-base text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pas de fausses promesses ni de discours nébuleux. Nous étudions scientifiquement votre concurrence locale, calculons vos mots-clés d'acquisition et voyons si la méthode de cocon sémantique est calibrée pour vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact?subject=audit-seo" 
              id="cta-seo-bottom-audit"
              className="inline-block px-8 py-4 bg-electric-blue text-white rounded-xl font-medium hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-xl shadow-electric-blue/10 hover:shadow-white/10"
            >
              Lancer l'audit de mes positions actuelles
            </Link>
            <a 
              href="#seo-estimator" 
              className="inline-block px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
            >
              Estimer mon budget sémantique
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

