import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Services web, SEO, Google Ads et cloud pour PME | VSW Digital',
  description: 'Découvrez les services de VSW Digital : création de sites internet, SEO, Google Ads, applications web, cloud, automatisation, maintenance et accompagnement digital pour PME.',
};

export function Services() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      
      {/* Vision */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-8">Une approche complète pour transformer votre présence digitale en levier commercial</h2>
            <p className="text-lg text-navy-900/70 leading-relaxed">Un site web seul ne suffit plus. Pour obtenir des résultats, il faut penser l'ensemble de la chaîne : image professionnelle, visibilité Google, expérience utilisateur, publicité, suivi des conversions, automatisation et accompagnement technique. Avec VSW Digital, vous construisez un écosystème qui sert votre activité.</p>
        </div>
      </section>

      <ServicesGrid />

      {/* CTA Final */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Vous avez un projet web, SEO, application ou automatisation ?</h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">Présentez-nous votre activité, vos objectifs et vos difficultés actuelles. VSW Digital vous aide à identifier les services les plus utiles pour développer votre visibilité, générer des demandes qualifiées et structurer votre organisation.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl">
            Demander un audit gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}
