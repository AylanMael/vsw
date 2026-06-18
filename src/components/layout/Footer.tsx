import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-navy-900 text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold font-display mb-4">VSW Digital</h3>
          <p className="text-navy-400 text-sm leading-relaxed">
            Expertise technique, résultats orientés pour PME et entreprises locales.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-3 text-sm text-navy-400">
            <li><Link to="/creation-site-internet" className="hover:text-electric-blue">Développement Web</Link></li>
            <li><Link to="/refonte-site-internet" className="hover:text-electric-blue">Refonte de Site</Link></li>
            <li><Link to="/maintenance-site-internet" className="hover:text-electric-blue">Maintenance &amp; Support</Link></li>
            <li><Link to="/referencement-seo" className="hover:text-electric-blue">Référencement SEO</Link></li>
            <li><Link to="/google-ads" className="hover:text-electric-blue">Google Ads</Link></li>
            <li><Link to="/cloud-automatisation" className="hover:text-electric-blue">Automatisation</Link></li>
            <li><Link to="/audit-digital" className="hover:text-electric-blue">Audit Digital</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Entreprise</h4>
          <ul className="space-y-3 text-sm text-navy-400">
            <li><Link to="/a-propos" className="hover:text-electric-blue">À propos</Link></li>
            <li><Link to="/realisations" className="hover:text-electric-blue">Réalisations</Link></li>
            <li><Link to="/blog" className="hover:text-electric-blue">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <p className="text-sm text-navy-400 mb-2">vsw.contact@gmail.com</p>
          <Link to="/contact" className="text-sm text-electric-blue hover:underline">Contactez-nous</Link>
        </div>
      </div>
      <div className="container mx-auto border-t border-white/10 mt-12 pt-8 text-center text-sm text-navy-400">
        © 2026 VSW Digital. Tous droits réservés. Mentions Légales.
      </div>
    </footer>
  );
}
