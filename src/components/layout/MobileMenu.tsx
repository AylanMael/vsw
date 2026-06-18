import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 bg-white md:hidden p-6 pt-24"
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-navy-900">
            <X className="h-8 w-8" />
          </button>
          <nav className="flex flex-col gap-8 text-2xl font-bold font-display text-navy-900">
            <Link to="/services" onClick={onClose}>Services</Link>
            <Link to="/realisations" onClick={onClose}>Réalisations</Link>
            <Link to="/a-propos" onClick={onClose}>À propos</Link>
            <Link to="/blog" onClick={onClose}>Blog</Link>
            <Link to="/contact" onClick={onClose} className="text-electric-blue">Devis Gratuit</Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
