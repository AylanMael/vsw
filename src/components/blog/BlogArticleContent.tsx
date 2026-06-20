import type { BlogSection } from "../../types/blog";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowUpRight,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Info,
} from "lucide-react";

interface BlogArticleContentProps {
  sections: BlogSection[];
}

export function BlogArticleContent({ sections }: BlogArticleContentProps) {
  const renderCallout = (callout: NonNullable<BlogSection["callout"]>) => {
    const styles = {
      default: {
        wrapper: "border-blue-200 border-l-blue-600 bg-blue-50 text-blue-950",
        icon: <Lightbulb className="h-5 w-5 shrink-0 text-blue-600" />,
      },
      warn: {
        wrapper:
          "border-amber-200 border-l-amber-500 bg-amber-50 text-amber-950",
        icon: <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />,
      },
      example: {
        wrapper:
          "border-emerald-200 border-l-emerald-500 bg-emerald-50 text-emerald-950",
        icon: <BookOpen className="h-5 w-5 shrink-0 text-emerald-600" />,
      },
      info: {
        wrapper:
          "border-indigo-200 border-l-indigo-500 bg-indigo-50 text-indigo-950",
        icon: <Info className="h-5 w-5 shrink-0 text-indigo-600" />,
      },
    };

    const variant =
      callout.type === "warn" ||
      callout.type === "example" ||
      callout.type === "info"
        ? callout.type
        : "default";

    const selectedStyle = styles[variant];

    return (
      <div
        className={`my-8 rounded-2xl border border-l-4 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 md:p-6 ${selectedStyle.wrapper}`}
      >
        <div className="mb-2 flex items-center gap-2.5">
          {selectedStyle.icon}

          <span className="text-xs font-bold uppercase tracking-[0.18em]">
            {callout.title}
          </span>
        </div>

        <p className="text-sm leading-7 md:text-base">{callout.text}</p>
      </div>
    );
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {sections.map((section) => {
        const paragraphs = section.content || [];
        const list = section.list || [];
        const internalLink = section.internalLink;

        return (
          <section
            key={section.id}
            id={section.id}
            className="group scroll-mt-28"
          >
            {/* Title */}
            <h2 className="relative mb-5 flex items-center gap-3 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-[#0f172a] md:text-3xl">
              <span className="absolute -left-8 hidden select-none font-mono text-lg font-bold text-blue-600/10 transition-colors group-hover:text-blue-600/30 lg:inline">
                #
              </span>

              <span>{section.heading}</span>
            </h2>

            {/* Paragraphs */}
            {paragraphs.length > 0 && (
              <div className="space-y-5 text-base leading-8 text-slate-700 md:text-lg">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* List */}
            {list.length > 0 && (
              <ul className="my-7 space-y-3.5">
                {list.map((item, index) => (
                  <li
                    key={`${section.id}-list-${index}`}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Callout */}
            {section.callout && renderCallout(section.callout)}

            {/* Internal link */}
            {internalLink && (
              <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3b82f6]">
                      Ressource utile
                    </span>

                    <p className="mt-1 text-sm font-bold leading-snug text-[#0f172a] md:text-base">
                      Besoin d’un accompagnement pour mettre en place ce type
                      d’optimisation ?
                    </p>
                  </div>

                  <Link
                    to={internalLink.url}
                    className="group/link inline-flex items-center justify-center gap-1.5 self-start rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#3b82f6] transition-all hover:border-blue-200 hover:bg-blue-50 sm:self-auto md:text-sm"
                  >
                    <span>{internalLink.text}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}