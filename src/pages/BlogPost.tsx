import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../data/blog-posts";
import { BlogArticleHeader } from "../components/blog/BlogArticleHeader";
import { BlogTableOfContents } from "../components/blog/BlogTableOfContents";
import { BlogArticleContent } from "../components/blog/BlogArticleContent";
import { BlogFaq } from "../components/blog/BlogFaq";
import { RelatedArticles } from "../components/blog/RelatedArticles";
import { BlogCta } from "../components/blog/BlogCta";
import {
  ArrowLeft,
  ChevronRight,
  Copy,
  FolderOpen,
  Share2,
} from "lucide-react";
import type { BlogSection } from "../types/blog";

function normalizeSlug(slug?: string) {
  return (slug || "").replace(/^\/blog\//, "").replace(/^\//, "");
}

function buildSections(post: (typeof BLOG_POSTS)[number] | undefined) {
  const sections: BlogSection[] = [];

  if (!post) return sections;

  if (post.sections && post.sections.length > 0) {
    return post.sections;
  }

  if (!post.content || post.content.length === 0) {
    return sections;
  }

  let currentSection: BlogSection | null = null;
  let sectionIndex = 1;

  post.content.forEach((paragraph) => {
    if (paragraph.startsWith("###")) {
      if (currentSection) {
        sections.push(currentSection);
      }

      const heading = paragraph.replace("###", "").trim();

      currentSection = {
        id: `section-${sectionIndex++}`,
        heading,
        content: [],
      };

      return;
    }

    if (!currentSection) {
      currentSection = {
        id: `section-${sectionIndex++}`,
        heading: "Introduction",
        content: [],
      };
    }

    currentSection.content.push(paragraph);
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

function upsertMetaAttribute(
  selector: string,
  attributeName: "name" | "property",
  attributeValue: string,
  content: string
) {
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);

  return element;
}

function upsertCanonical(url: string) {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);

  return canonical;
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState("");

  const cleanSlug = normalizeSlug(slug);

  const post = useMemo(() => {
    return BLOG_POSTS.find(
      (article) => normalizeSlug(article.slug) === cleanSlug
    );
  }, [cleanSlug]);

  const sections = useMemo(() => buildSections(post), [post]);

  useEffect(() => {
    if (!post || sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeadingId(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [post, sections]);

  useEffect(() => {
    if (!post) return;

    window.scrollTo({ top: 0, behavior: "instant" });

    const title = post.metaTitle || `${post.title} | Blog VSW Digital`;

    const description =
      post.metaDescription ||
      post.summary ||
      post.introduction ||
      "Article du blog VSW Digital sur le web, le SEO, Google Ads, les applications web et l’automatisation.";

    const currentUrl = `${window.location.origin}/blog/${normalizeSlug(
      post.slug
    )}`;

    document.title = title;

    upsertMetaAttribute(
      'meta[name="description"]',
      "name",
      "description",
      description
    );

    upsertCanonical(currentUrl);

    upsertMetaAttribute(
      'meta[property="og:title"]',
      "property",
      "og:title",
      title
    );

    upsertMetaAttribute(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );

    upsertMetaAttribute(
      'meta[property="og:url"]',
      "property",
      "og:url",
      currentUrl
    );

    upsertMetaAttribute(
      'meta[property="og:type"]',
      "property",
      "og:type",
      "article"
    );

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      datePublished: post.date || undefined,
      dateModified: post.updatedDate || post.date || undefined,
      author: {
        "@type": "Organization",
        name: "VSW Digital",
        url: window.location.origin,
      },
      publisher: {
        "@type": "Organization",
        name: "VSW Digital",
        url: window.location.origin,
        logo: {
          "@type": "ImageObject",
          url: `${window.location.origin}/images/logo-vsw.webp`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": currentUrl,
      },
    };

    const schemaId = `article-jsonld-${normalizeSlug(post.slug)}`;
    const existingSchema = document.getElementById(schemaId);

    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    return () => {
      const schema = document.getElementById(schemaId);

      if (schema) {
        schema.remove();
      }
    };
  }, [post]);

  const handleShare = async () => {
    const currentUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post?.title || "Article VSW Digital",
          text:
            post?.summary ||
            post?.introduction ||
            "Article du blog VSW Digital",
          url: currentUrl,
        });

        return;
      }

      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (error) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch {
        console.error("Impossible de copier le lien :", error);
      }
    }
  };

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20 text-center">
        <div className="max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6]">
            <FolderOpen className="h-9 w-9" />
          </div>

          <h1 className="font-display text-2xl font-bold text-[#0f172a]">
            Article introuvable
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            L’article que vous recherchez n’existe pas ou a été déplacé vers une
            autre rubrique du blog.
          </p>

          <Link
            to="/blog"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#3b82f6] selection:text-white">
      <BlogArticleHeader post={post} />

      {/* Barre sticky */}
      <div className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-[#3b82f6]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour aux articles</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
              copiedLink
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {copiedLink ? (
              <>
                <Copy className="h-4 w-4" />
                Lien copié
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" />
                Partager
              </>
            )}
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-10 md:py-14">
        {/* Fil d’Ariane */}
        <nav
          aria-label="Fil d’Ariane"
          className="mb-8 flex items-center gap-1.5 text-xs text-slate-400"
        >
          <Link to="/" className="transition-colors hover:text-slate-600">
            VSW Digital
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <Link to="/blog" className="transition-colors hover:text-slate-600">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="line-clamp-1 font-semibold text-slate-600">
            {post.title}
          </span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Contenu article */}
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            {sections.length > 0 ? (
              <>
                <div className="mb-8 block border-b border-slate-100 pb-8 lg:hidden">
                  <BlogTableOfContents
                    sections={sections}
                    activeHeadingId={activeHeadingId}
                    onClickSection={(id) => setActiveHeadingId(id)}
                  />
                </div>

                <BlogArticleContent sections={sections} />
              </>
            ) : (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
                <h2 className="font-display text-xl font-bold">
                  Contenu indisponible
                </h2>
                <p className="mt-2 text-sm leading-7">
                  Cet article existe dans la bibliothèque, mais son contenu n’a
                  pas encore été renseigné.
                </p>
              </div>
            )}

            {post.faq && post.faq.length > 0 && (
              <BlogFaq faqList={post.faq} articleTitle={post.title} />
            )}

            <BlogCta />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-36">
              {sections.length > 0 && (
                <BlogTableOfContents
                  sections={sections}
                  activeHeadingId={activeHeadingId}
                  onClickSection={(id) => setActiveHeadingId(id)}
                />
              )}
            </div>
          </aside>
        </div>

        <RelatedArticles currentPost={post} allPosts={BLOG_POSTS} />
      </div>
    </main>
  );
}