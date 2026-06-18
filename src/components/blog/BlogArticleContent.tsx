import { BlogSection } from '../../types/blog';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ArrowUpRight, 
  AlertTriangle,
  Lightbulb, 
  BookOpen,
  Info
} from 'lucide-react';

interface BlogArticleContentProps {
  sections: BlogSection[];
}

export function BlogArticleContent({ sections }: BlogArticleContentProps) {
  
  // Renders the editorial custom callout box with tailored theme accent
  const renderCallout = (callout: NonNullable<BlogSection['callout']>) => {
    let bgClass = "bg-blue-50/75 border-blue-200 text-blue-900";
    let icon = <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0" />;

    if (callout.type === 'warn') {
      bgClass = "bg-amber-50/75 border-amber-200 text-amber-950";
      icon = <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />;
    } else if (callout.type === 'example') {
      bgClass = "bg-emerald-50/75 border-emerald-200 text-emerald-950";
      icon = <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />;
    } else if (callout.type === 'info') {
      bgClass = "bg-indigo-50/75 border-indigo-200 text-indigo-950";
      icon = <Info className="w-5 h-5 text-indigo-600 flex-shrink-0" />;
    }

    return (
      <div className={`my-8 p-5 md:p-6 rounded-2xl border-l-4 border-l-blue-600 ${bgClass} transition-transform hover:-translate-y-0.5 shadow-sm`}>
        <div className="flex items-center gap-2.5 mb-2 font-bold tracking-tight text-sm">
          {icon}
          <span className="uppercase tracking-wide font-mono text-xs">{callout.title}</span>
        </div>
        <p className="text-sm md:text-base leading-relaxed font-normal opacity-95">
          {callout.text}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {sections.map((section) => (
        <section 
          key={section.id} 
          id={section.id} 
          className="scroll-mt-28 group"
        >
          {/* H2 Title */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 mb-5 relative flex items-center gap-3">
            <span className="text-blue-600/10 font-mono text-lg font-bold select-none absolute -left-8 group-hover:text-blue-600/30 transition-colors hidden lg:inline">
              #
            </span>
            <span>{section.heading}</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-5 text-neutral-700 text-base md:text-lg leading-relaxed font-light">
            {section.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Bullet List standardisation */}
          {section.list && section.list.length > 0 && (
            <ul className="my-6 space-y-3.5 pl-2">
              {section.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-750 text-sm md:text-base leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Callout render */}
          {section.callout && renderCallout(section.callout)}

          {/* Interlinking action bar */}
          {section.internalLink && (
            <div className="mt-8 mb-5 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1">
                  <span className="text-[10px] text-blue-600 font-mono font-bold uppercase tracking-widest">
                    RECOMMANDATION STRATÉGIQUE VSW DIGITAL
                  </span>
                  <p className="text-neutral-900 font-bold text-sm md:text-base tracking-tight leading-snug">
                    Besoin d'un accompagnement direct pour déployer ces optimisations ?
                  </p>
                </div>
                <Link
                  to={section.internalLink.url}
                  className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-white hover:bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-xl group"
                >
                  <span>{section.internalLink.text}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
