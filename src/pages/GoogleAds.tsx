
import { GoogleAdsHero } from '../components/google-ads/GoogleAdsHero';
import { GoogleAdsBenefits } from '../components/google-ads/GoogleAdsBenefits';
import { GoogleAdsServices } from '../components/google-ads/GoogleAdsServices';
import { GoogleAdsMethod } from '../components/google-ads/GoogleAdsMethod';
import { GoogleAdsOffers } from '../components/google-ads/GoogleAdsOffers';
import { GoogleAdsFaq } from '../components/google-ads/GoogleAdsFaq';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Google Ads & génération de leads pour PME | VSW Digital',
  description: 'VSW Digital crée et optimise vos campagnes Google Ads pour générer des appels, demandes de devis et prospects qualifiés grâce à une stratégie claire, des landing pages efficaces et un suivi des conversions.',
};

export function GoogleAds() {
  return (
    <div className="flex flex-col">
      <GoogleAdsHero />
      <GoogleAdsBenefits />
      <GoogleAdsServices />
      <GoogleAdsMethod />
      <GoogleAdsOffers />
      <GoogleAdsFaq />

      {/* Final CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-8">Vous voulez générer plus de demandes qualifiées avec Google Ads ?</h2>
          <p className="text-lg text-navy-900/70 mb-12 max-w-2xl mx-auto">Présentez-nous votre activité, votre zone d’intervention et vos objectifs. VSW Digital vous aide à structurer une campagne Google Ads claire, mesurable et orientée résultats.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-navy-900 text-white rounded-xl font-bold hover:bg-electric-blue transition-all shadow-xl">
            Demander un audit Google Ads
          </Link>
        </div>
      </section>
    </div>
  );
}
