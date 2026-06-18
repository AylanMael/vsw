
import { CloudHero } from '../components/cloud-auto/CloudHero';
import { CloudBenefits } from '../components/cloud-auto/CloudBenefits';
import { CloudMethod } from '../components/cloud-auto/CloudMethod';
import { CloudTechs } from '../components/cloud-auto/CloudTechs';
import { CloudOffers } from '../components/cloud-auto/CloudOffers';
import { Link } from 'react-router-dom';

export function CloudAutomatisation() {
  return (
    <div className="flex flex-col">
      <CloudHero />
      <CloudBenefits />
      <CloudTechs />
      <CloudMethod />
      <CloudOffers />

      {/* Final CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-8">Vous voulez automatiser une partie de votre activité ?</h2>
          <p className="text-lg text-navy-900/70 mb-12 max-w-2xl mx-auto">Présentez-nous vos tâches répétitives et vos objectifs. VSW Digital vous propose les automatisations les plus utiles pour gagner du temps et structurer votre organisation.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-navy-900 text-white rounded-xl font-bold hover:bg-electric-blue transition-all shadow-xl">
            Parler de mon projet
          </Link>
        </div>
      </section>
    </div>
  );
}
