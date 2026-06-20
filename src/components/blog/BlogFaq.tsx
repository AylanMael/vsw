import { useEffect, useMemo, useState } from "react";
import type { BlogFaqItem } from "../../types/blog";
import { ChevronDown, HelpCircle, BadgeAlert } from "lucide-react";

interface BlogFaqProps {
  faqList: BlogFaqItem[];
  articleTitle: string;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function BlogFaq({ faqList, articleTitle }: BlogFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const safeFaqList = useMemo(
    () => faqList.filter((item) => item.q?.trim() && item.a?.trim()),
    [faqList],
  );

  const scriptId = useMemo(() => {
    const safeTitle = slugify(articleTitle || "article");
    return `faq-jsonld-${safeTitle}`;
  }, [articleTitle]);

  const toggleIndex = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  useEffect(() => {
    if (safeFaqList.length === 0) return;

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: safeFaqList.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);

    document.head.appendChild(script);

    return () => {
      const addedScript = document.getElementById(scriptId);

      if (addedScript) {
        addedScript.remove();
      }
    };
  }, [safeFaqList, scriptId]);

  if (safeFaqList.length === 0) {
    return null;
  }

  return (
    <section className="my-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3b82f6]">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Réponses pratiques</span>
        </span>

        <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-3xl">
          Questions fréquentes sur ce thème
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          Quelques réponses simples pour mieux comprendre le sujet et éviter les
          décisions prises uniquement sur des promesses commerciales.
        </p>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        {safeFaqList.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `blog-faq-panel-${index}`;
          const buttonId = `blog-faq-button-${index}`;

          return (
            <div
              key={`${item.q}-${index}`}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-blue-200 shadow-lg shadow-blue-500/10"
                  : "border-slate-200 hover:border-blue-200"
              }`}
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-[#0f172a] selection:bg-transparent md:px-6"
              >
                <span className="text-sm leading-snug md:text-base">
                  {item.q}
                </span>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#3b82f6] text-white"
                      : "bg-blue-50 text-[#3b82f6]"
                  }`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] border-t border-slate-100 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="bg-slate-50/60 px-5 py-5 text-sm leading-7 text-slate-600 md:px-6 md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integrity notice */}
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-100 border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <BadgeAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

        <p className="text-xs leading-7 text-amber-950 md:text-sm">
          <span className="font-bold">Engagement VSW Digital : </span>
          nous évitons les promesses irréalistes comme une première position
          garantie, un résultat immédiat ou un miracle SEO. La visibilité dépend
          de nombreux facteurs : qualité du site, concurrence, contenus,
          technique, popularité et régularité du travail.
        </p>
      </div>
    </section>
  );
}