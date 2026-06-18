
import { CreationHero } from '../components/creation-site/CreationHero';
import { CreationBenefits } from '../components/creation-site/CreationBenefits';
import { CreationStack } from '../components/creation-site/CreationStack';
import { CreationMethod } from '../components/creation-site/CreationMethod';
import { CreationEstimator } from '../components/creation-site/CreationEstimator';
import { CreationOffers } from '../components/creation-site/CreationOffers';
import { CreationFaq } from '../components/creation-site/CreationFaq';
import { Link } from 'react-router-dom';

export function CreationSiteInternet() {
  return (
    <div className="flex flex-col">
      <CreationHero />
      <CreationBenefits />
      <CreationStack />
      <CreationMethod />
      <CreationEstimator />
      <CreationOffers />
      <CreationFaq />

      {/* Final CTA */}
      <section className="py-24 bg-navy-900 text-white text-center relative overflow-hidden">
        {/* Glow decorative banner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-blue/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Vous recherchez un partenaire technique intègre ?</h2>
          <p className="text-sm md:text-base text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pas de formules magiques, pas de marketing factice. Parlons simplement de votre activité métreuse, de vos enjeux d'acquisition locale et voyons si notre méthode de codage épuré s'adapte à vos ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              id="cta-bottom-call"
              className="inline-block px-8 py-4 bg-electric-blue text-white rounded-xl font-medium hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-xl shadow-electric-blue/10 hover:shadow-white/10"
            >
              Lancer l'audit de mon site actuel
            </Link>
            <a 
              href="#estimator" 
              className="inline-block px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
            >
              Simuler mon tarif en ligne
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

