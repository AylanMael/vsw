import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Services', path: '/services' },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Blog', path: '/blog' },
];

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-white md:hidden flex flex-col p-6"
        >
          {/* Header row inside Mobile Menu to maintain structural continuity */}
          <div className="flex h-16 items-center justify-between border-b border-gray-100">
            <div className="flex items-center select-none">
              <img
                src="/images/logo-vsw.webp"
                alt="VSW Digital Logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <button 
              onClick={onClose} 
              className="p-1.5 text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-2 py-8">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`text-xs uppercase tracking-widest font-bold p-4 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-navy-900 bg-navy-900/5'
                      : 'text-navy-900/60 hover:text-navy-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Premium Mobile CTA */}
          <div className="mt-auto border-t border-gray-100 pt-6 flex flex-col gap-4">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold py-4 bg-navy-900 text-white rounded-xl hover:bg-electric-blue transition-all duration-200 shadow-sm"
            >
              <span>Audit Gratuit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <p className="text-center text-[9px] uppercase tracking-[0.2em] text-navy-900/30">
              © {new Date().getFullYear()} VSW Digital
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
