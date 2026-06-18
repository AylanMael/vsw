import { BlogSection } from '../../types/blog';
import { BookOpen, ChevronRight, Hash } from 'lucide-react';

interface BlogTableOfContentsProps {
  sections: BlogSection[];
  activeHeadingId?: string;
  onClickSection?: (id: string) => void;
}

export function BlogTableOfContents({ sections, activeHeadingId, onClickSection }: BlogTableOfContentsProps) {
  
  const handleScroll = (id: string) => {
    if (onClickSection) {
      onClickSection(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm sticky top-28">
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-neutral-100">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h3 className="text-base font-bold text-neutral-900 tracking-tight">
          Sommaire de l'article
        </h3>
      </div>

      <nav className="space-y-1">
        {sections.map((section, idx) => {
          const isActive = activeHeadingId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 flex items-start gap-2.5 ${
                isActive 
                  ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm shadow-blue-500/5' 
                  : 'text-neutral-600 hover:text-blue-600 hover:bg-neutral-50'
              }`}
            >
              <span className={`mt-1 flex-shrink-0 transition-transform ${isActive ? 'translate-x-0.5' : ''}`}>
                <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-neutral-400'}`} />
              </span>
              <span className="leading-tight">
                {section.heading}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Trust metric summary decoration for enhanced editorial authority */}
      <div className="mt-8 pt-5 border-t border-neutral-100 text-[11px] text-neutral-400 font-mono tracking-normal leading-relaxed">
        <div className="flex items-center gap-1.5 font-bold text-neutral-500 mb-1.5 uppercase text-[9px] tracking-wider">
          <Hash className="w-3 h-3 text-blue-500" />
          <span>GARANTIE DE SINCÉRITÉ</span>
        </div>
        No AI Slop—Chaque guide est préparé pour répondre concrètement aux objectifs d'architectures et d'acquisitions de votre entreprise.
      </div>
    </div>
  );
}
