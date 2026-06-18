import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-navy-900/10 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link to="/" className="text-2xl font-bold font-display text-navy-900">
            VSW<span className="text-electric-blue">Digital</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-navy-900/80">
            <Link to="/services" className="hover:text-electric-blue transition-colors">Services</Link>
            <Link to="/realisations" className="hover:text-electric-blue transition-colors">Réalisations</Link>
            <Link to="/a-propos" className="hover:text-electric-blue transition-colors">À propos</Link>
            <Link to="/blog" className="hover:text-electric-blue transition-colors">Blog</Link>
            <Link to="/contact" className="px-6 py-2.5 bg-navy-900 text-white rounded-xl hover:bg-electric-blue transition-all">Audit Gratuit</Link>
          </nav>
          <button className="md:hidden text-navy-900" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
