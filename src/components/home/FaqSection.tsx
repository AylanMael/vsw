import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "../../data/faqs";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 md:py-32">
      {/* Décor subtil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/10 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/3 translate-y-1/3 rounded-full bg-sky-300/20 blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* En-tête */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6] shadow-sm"
            >
              <HelpCircle className="h-4 w-4" />
              Questions fréquentes
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl"
            >
              Vous avez des questions sur votre{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] to-sky-400 bg-clip-text text-transparent">
                projet digital ?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Voici les réponses aux questions les plus fréquentes avant de
              lancer un site internet, une refonte, une stratégie SEO ou une
              application web sur mesure.
            </motion.p>
          </div>

          {/* Accordéon */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`overflow-hidden rounded-[1.4rem] border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-xl shadow-blue-500/10"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7"
                  >
                    <span className="font-display text-base font-bold leading-snug text-[#0f172a] md:text-lg">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#3b82f6] text-white"
                          : "bg-blue-50 text-[#3b82f6]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-4 md:px-7">
                          <p className="text-sm leading-7 text-slate-600 md:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}