import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

type CookieConsent = "accepted" | "rejected";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent") as CookieConsent | null;

    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (value: CookieConsent) => {
    localStorage.setItem("cookieConsent", value);
    setIsVisible(false);

    window.dispatchEvent(
      new CustomEvent("cookieConsentChange", {
        detail: value,
      })
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto w-auto max-w-xl rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/15 md:bottom-6 md:left-auto md:right-6 md:mx-0 md:max-w-md md:p-6"
        >
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#3b82f6]">
              <Cookie className="h-6 w-6" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="cookie-banner-title"
                  className="font-display font-bold text-[#0f172a]"
                >
                  Gestion des cookies
                </h3>

                <button
                  type="button"
                  onClick={() => saveConsent("rejected")}
                  aria-label="Fermer et refuser les cookies non essentiels"
                  className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Nous utilisons des cookies nécessaires au fonctionnement du site.
                Avec votre accord, nous pouvons aussi utiliser des cookies de
                mesure d’audience pour améliorer nos contenus et suivre les
                performances du site.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => saveConsent("accepted")}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0f172a] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Accepter
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent("rejected")}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  Refuser
                </button>

                <Link
                  to="/politique-confidentialite"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#3b82f6]"
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