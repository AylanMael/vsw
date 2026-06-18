import { useState, useEffect } from 'react';
import { BlogFaqItem } from '../../types/blog';
import { ChevronDown, HelpCircle, BadgeAlert } from 'lucide-react';

interface BlogFaqProps {
  faqList: BlogFaqItem[];
  articleTitle: string;
}

export function BlogFaq({ faqList, articleTitle }: BlogFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Inject JSON-LD FAQ Schema on load to maximize Rich Snippet visibility
  useEffect(() => {
    if (!faqList || faqList.length === 0) return;

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    const scriptId = `faq-jsonld-${articleTitle.replace(/\s+/g, '-').toLowerCase()}`;
    
    // Clean existing script
    const existing = document.getElementById(scriptId);
    if (existing) {
      existing.remove();
    }

    // Append new script element
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const addedScript = document.getElementById(scriptId);
      if (addedScript) addedScript.remove();
    };
  }, [faqList, articleTitle]);

  return (
    <section className="bg-neutral-50 border border-neutral-100/85 rounded-3xl p-6 md:p-10 shadow-sm my-16">
      
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/70 border border-blue-200/50 text-[10px] font-bold tracking-wider uppercase text-blue-600 font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>RÉPONSES PRATIQUES</span>
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 mb-6">
        Questions fréquemment posées sur ce thème
      </h3>

      <div className="space-y-4">
        {faqList.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-neutral-200/70 overflow-hidden transition-all duration-300 shadow-sm"
              id={`faq-item-${idx}`}
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-neutral-900 text-sm md:text-base selection:bg-transparent"
              >
                <span>{item.q}</span>
                <span className={`p-1 rounded-lg bg-neutral-50 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600 bg-blue-50' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] border-t border-neutral-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="p-5 text-sm md:text-base leading-relaxed text-neutral-600 font-light bg-neutral-50/40">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust and Integrity advisory banner */}
      <div className="flex items-start gap-3 mt-8 p-4 rounded-xl bg-orange-50 border border-orange-100 border-l-[3.5px] border-l-orange-500">
        <BadgeAlert className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
        <div className="space-y-0.5 text-xs text-orange-950 font-normal leading-relaxed">
          <span className="font-bold">Charte d'intégrité VSW Digital :</span> Nous ne promettons jamais de première position magique ni de miracle SEO instantané. Le positionnement Google s'appuie exclusivement sur la réactivité technique de votre site, sa pertinence et un travail de référencement sain et durable.
        </div>
      </div>

    </section>
  );
}
