import type { BlogPost } from "../../types/blog";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogArticleHeaderProps {
  post: BlogPost;
}

export function BlogArticleHeader({ post }: BlogArticleHeaderProps) {
  const authorName = post.author?.name || "VSW Digital";
  const authorRole = post.author?.role || "Agence web, SEO et automatisation";
  const authorAvatar = post.author?.avatar;
  const tags = post.tags || [];

  return (
    <header className="relative overflow-hidden border-b border-white/[0.06] bg-[#0f172a] py-16 text-white md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_32%)]" />
        <div className="absolute right-1/4 top-0 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/15 blur-[110px]" />
        <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d’Ariane"
          className="mb-7 flex flex-wrap items-center gap-2 text-xs"
        >
          <Link
            to="/blog"
            className="font-semibold uppercase tracking-[0.2em] text-blue-300 transition-colors hover:text-blue-200"
          >
            Blog
          </Link>

          <span className="text-slate-600">/</span>

          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-300">
            {post.category}
          </span>
        </nav>

        {/* Title */}
        <h1 className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        {/* Introduction */}
        {post.introduction && (
          <p className="mt-7 max-w-3xl border-l-4 border-[#3b82f6] bg-white/[0.03] py-2 pl-5 text-base leading-8 text-slate-300 md:text-lg">
            {post.introduction}
          </p>
        )}

        {/* Metadata */}
        <div className="mt-9 flex flex-col justify-between gap-6 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center">
          {/* Author */}
          <div className="flex items-center gap-3">
            {authorAvatar ? (
              <img
                src={authorAvatar}
                alt={authorName}
                referrerPolicy="no-referrer"
                className="h-12 w-12 rounded-full border border-white/[0.14] object-cover shadow-lg"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300">
                <User className="h-5 w-5" />
              </div>
            )}

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Rédigé par
              </p>

              <p className="text-sm font-semibold text-white">{authorName}</p>

              <p className="text-xs text-slate-400">{authorRole}</p>
            </div>
          </div>

          {/* Date / Reading time */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
            {post.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-blue-300" />
                <span>Publié le {post.date}</span>
              </span>
            )}

            {post.updatedDate && (
              <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-slate-400">
                Mis à jour le {post.updatedDate}
              </span>
            )}

            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-blue-300" />
                <span>{post.readTime}</span>
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2.5 border-t border-white/[0.08] pt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-400 transition-colors hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}