import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface RelatedArticlesProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

export function RelatedArticles({ currentPost, allPosts }: RelatedArticlesProps) {
  // Find related articles (same category or similar tags, excluding current)
  const related = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      // Basic matching weight: 4 points if same category, +1 point for each shared tag
      let weight = 0;
      if (post.category === currentPost.category) weight += 4;
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      weight += sharedTags.length;
      return { post, weight };
    })
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map(w => w.post);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-neutral-150 pt-16 mt-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs text-blue-600 font-mono font-bold uppercase tracking-widest block mb-1">
            LECTURE RECOMMANDÉE
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
            Dossiers complémentaires à découvrir
          </h3>
        </div>
        <Link 
          to="/blog" 
          className="text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 group font-mono"
        >
          <span>Tous les dossiers</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((post) => (
          <article 
            key={post.slug}
            className="group flex flex-col bg-white border border-neutral-200/75 rounded-2xl overflow-hidden hover:border-blue-400/80 hover:shadow-lg hover:shadow-blue-500/[0.02] transition-all duration-300"
          >
            <div className="p-6 flex flex-col flex-grow">
              
              {/* Category */}
              <div className="mb-3.5">
                <span className="inline-block px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold tracking-wider uppercase font-mono">
                  {post.category}
                </span>
              </div>

              {/* Title & summary */}
              <h4 className="text-base font-bold text-neutral-900 group-hover:text-blue-650 transition-colors tracking-tight line-clamp-2 leading-snug mb-2.5">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h4>

              <p className="text-xs md:text-sm text-neutral-500 font-light line-clamp-3 mb-6 leading-relaxed">
                {post.metaDescription}
              </p>

              {/* Footer info lockup */}
              <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </span>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
