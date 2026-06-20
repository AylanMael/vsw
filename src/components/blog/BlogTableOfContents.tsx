import type { BlogSection } from "../../types/blog";
import { BookOpen, ChevronRight, Hash } from "lucide-react";

interface BlogTableOfContentsProps {
  sections: BlogSection[];
  activeHeadingId?: string;
  onClickSection?: (id: string) => void;
}

export function BlogTableOfContents({
  sections,
  activeHeadingId,
  onClickSection,
}: BlogTableOfContentsProps) {
  const handleScroll = (id: string) => {
    onClickSection?.(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#3b82f6]">
          <BookOpen className="h-5 w-5" />
        </div>

        <h3 className="font-display text-base font-bold tracking-[-0.02em] text-[#0f172a]">
          Sommaire de l’article
        </h3>
      </div>

      <nav aria-label="Sommaire de l’article" className="space-y-1">
        {sections.map((section) => {
          const isActive = activeHeadingId === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleScroll(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={`flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm leading-snug transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 font-semibold text-[#3b82f6] shadow-sm shadow-blue-500/5"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#3b82f6]"
              }`}
            >
              <span
                className={`mt-0.5 shrink-0 transition-transform ${
                  isActive ? "translate-x-0.5" : ""
                }`}
              >
                <ChevronRight
                  className={`h-4 w-4 ${
                    isActive ? "text-[#3b82f6]" : "text-slate-400"
                  }`}
                />
              </span>

              <span>{section.heading}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-8 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-500">
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
          <Hash className="h-3.5 w-3.5 text-[#3b82f6]" />
          <span>Lecture guidée</span>
        </div>

        <p>
          Ce sommaire vous permet de parcourir rapidement les points clés de
          l’article et de revenir facilement aux sections importantes.
        </p>
      </div>
    </aside>
  );
}