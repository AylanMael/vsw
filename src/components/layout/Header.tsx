import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

const NAV_ITEMS = [
  { label: 'Services', path: '/services' },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Blog', path: '/blog' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md transition-all duration-200">
        <div className="container mx-auto flex h-16 md:h-18 items-center justify-between px-6">
          <Link to="/" className="flex items-center select-none group">
            <img
              src="/images/logo-vsw.webp"
              alt="VSW Digital Logo"
              className="h-8 w-auto md:h-9 object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[12px] uppercase tracking-wider font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-navy-900 bg-navy-900/5'
                      : 'text-navy-900/60 hover:text-navy-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="h-5 w-[1px] bg-gray-200/80 mx-2" />
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-electric-blue transition-all duration-200 shadow-sm shadow-navy-900/5 hover:shadow-lg hover:shadow-electric-blue/15 hover:-translate-y-[1px] active:translate-y-0"
            >
              <span>Audit Gratuit</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </nav>

          <button className="md:hidden p-1.5 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
