import type { BlogPost } from "../../types/blog";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface RelatedArticlesProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[]) {
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);

  if (currentPost.relatedSlugs && currentPost.relatedSlugs.length > 0) {
    const postsFromSlugs = currentPost.relatedSlugs
      .map((slug) => otherPosts.find((post) => post.slug === slug))
      .filter((post): post is BlogPost => Boolean(post));

    if (postsFromSlugs.length > 0) {
      return postsFromSlugs.slice(0, 3);
    }
  }

  return otherPosts
    .map((post) => {
      let weight = 0;

      if (post.category === currentPost.category) {
        weight += 4;
      }

      const currentTags = currentPost.tags || [];
      const postTags = post.tags || [];

      const sharedTags = postTags.filter((tag) => currentTags.includes(tag));

      weight += sharedTags.length;

      return {
        post,
        weight,
      };
    })
    .filter((item) => item.weight > 0)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map((item) => item.post);
}

export function RelatedArticles({
  currentPost,
  allPosts,
}: RelatedArticlesProps) {
  const related = getRelatedPosts(currentPost, allPosts || []);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-slate-200 pt-16">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
            Lecture recommandée
          </span>

          <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-3xl">
            Articles complémentaires
          </h3>
        </div>

        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] transition-colors hover:text-blue-700"
        >
          <span>Tous les articles</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex flex-grow flex-col p-6">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3b82f6]">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-display text-base font-bold leading-snug tracking-[-0.02em] text-[#0f172a] transition-colors group-hover:text-[#3b82f6] md:text-lg">
                <Link to={`/blog/${post.slug}`} className="outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h4>

              {/* Summary */}
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                {post.summary || post.metaDescription}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-5 text-xs text-slate-500">
                {post.date && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </span>
                )}

                {post.readTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}