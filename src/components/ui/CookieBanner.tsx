import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10"
        >
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6]">
              <Cookie className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#0f172a]">
                Gestion des cookies
              </h3>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                Nous utilisons des cookies pour améliorer votre expérience. En
                continuant, vous acceptez notre utilisation de ces technologies.
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleAccept}
                  className="rounded-xl bg-[#0f172a] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Accepter
                </button>
                <Link
                  to="/politique-confidentialite"
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
