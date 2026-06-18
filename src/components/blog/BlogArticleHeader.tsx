import { BlogPost } from '../../types/blog';
import { Calendar, Clock, User, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogArticleHeaderProps {
  post: BlogPost;
}

export function BlogArticleHeader({ post }: BlogArticleHeaderProps) {
  return (
    <header className="relative py-12 md:py-20 bg-[#090d1a] text-white overflow-hidden border-b border-white/[0.04]">
      {/* Background radial overlays for a premium editorial accent */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-45">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Breadcrumb + Category Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Link to="/blog" className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-mono uppercase tracking-widest">
            Blog
          </Link>
          <span className="text-slate-600 font-mono text-xs">/</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold tracking-wide uppercase text-blue-400 font-mono">
            {post.category}
          </span>
        </div>

        {/* H1 Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] mb-6 text-slate-100">
          {post.title}
        </h1>

        {/* Chapô / Introduction Summary */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light mb-8 max-w-3xl border-l-[3px] border-blue-600 pl-4 py-1 italic bg-white/[0.01]">
          {post.introduction}
        </p>

        {/* Metadata + Tags Grid */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/[0.06] pt-6 mt-8">
          
          {/* Author info */}
          <div className="flex items-center gap-3">
            {post.author.avatar ? (
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-white/[0.12] shadow"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-300 font-bold border border-blue-500/20">
                <User className="w-5 h-5" />
              </div>
            )}
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold font-mono">Rédigé par</p>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-[11px] text-slate-400">{post.author.role}</p>
            </div>
          </div>

          {/* Time and dates metrics */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Publié le {post.date}</span>
            </span>
            {post.updatedDate && (
              <span className="inline-flex items-center gap-1.5 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05] text-slate-400">
                <span>Mis à jour</span>
              </span>
            )}
            <span className="text-slate-600 hidden xs:inline">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{post.readTime}</span>
            </span>
          </div>

        </div>

        {/* Tags badges */}
        <div className="flex flex-wrap gap-2.5 mt-8 border-t border-white/[0.06] pt-5">
          {post.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 rounded bg-[#0f172a] hover:bg-[#131d35] transition-colors border border-white/[0.05] text-[11px] font-mono text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </header>
  );
}
