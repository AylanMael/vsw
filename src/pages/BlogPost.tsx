import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog-posts';
import { BlogArticleHeader } from '../components/blog/BlogArticleHeader';
import { BlogTableOfContents } from '../components/blog/BlogTableOfContents';
import { BlogArticleContent } from '../components/blog/BlogArticleContent';
import { BlogFaq } from '../components/blog/BlogFaq';
import { RelatedArticles } from '../components/blog/RelatedArticles';
import { BlogCta } from '../components/blog/BlogCta';
import { ArrowLeft, Share2, Bookmark, FolderOpen, ChevronRight, HelpCircle, BadgeAlert } from 'lucide-react';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState('');
  
  // Find current post
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // Parse structured sections automatically
  const sections: import('../types/blog').BlogSection[] = [];
  if (post) {
    if (post.sections && post.sections.length > 0) {
      sections.push(...post.sections);
    } else if (post.content && post.content.length > 0) {
      let currentSection: import('../types/blog').BlogSection | null = null;
      let sectionIndex = 1;

      post.content.forEach((paragraph) => {
        if (paragraph.startsWith('###')) {
          if (currentSection) {
            sections.push(currentSection);
          }
          const heading = paragraph.replace('###', '').trim();
          currentSection = {
            id: `section-${sectionIndex++}`,
            heading: heading,
            content: []
          };
        } else {
          if (!currentSection) {
            currentSection = {
              id: `section-${sectionIndex++}`,
              heading: "Introduction",
              content: []
            };
          }
          currentSection.content.push(paragraph);
        }
      });
      if (currentSection) {
        sections.push(currentSection);
      }
    }
  }

  // Core headings monitoring for active TOC highlight
  useEffect(() => {
    if (!post || sections.length === 0) return;

    const observerOption = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeadingId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOption);
    
    // Observe sections
    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [post, sections]);

  // SEO & Schema.org Metadata Injection
  useEffect(() => {
    if (!post) return;

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Ensure Title
    document.title = post.metaTitle;

    // Dynamically insert or replace Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', post.metaDescription);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = `${window.location.origin}/blog/${post.slug}`;
    canonical.setAttribute('href', currentUrl);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', post.metaTitle);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', post.metaDescription);

    // OpenGraph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', currentUrl);

    // Inject Schema JSON-LD Article Markup
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "datePublished": "2026-06-15T08:00:00+02:00", // dates configured on static assets
      "dateModified": post.updatedDate ? "2026-06-18T10:00:00+02:00" : undefined,
      "author": {
        "@type": "Organization",
        "name": "VSW Digital",
        "url": window.location.origin
      },
      "publisher": {
        "@type": "Organization",
        "name": "VSW Digital",
        "url": window.location.origin,
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      }
    };

    const schemaId = `article-jsonld-${post.slug}`;
    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }
    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    return () => {
      // Clean up injected tags on route change
      const addedSchema = document.getElementById(schemaId);
      if (addedSchema) addedSchema.remove();
    };
  }, [post]);

  if (!post) {
    // Elegant Post Not Found screen
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col justify-center items-center px-6 py-20 text-center">
        <div className="max-w-md bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
          <FolderOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Dossier introuvable</h2>
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 font-light">
            L'article que vous recherchez n'existe pas ou a été déplacé vers une autre rubrique thématique.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog VSW Digital</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  return (
    <div className="bg-neutral-50/40 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Editorial Header */}
      <BlogArticleHeader post={post} />

      {/* Floating social share and navigational quick access bar */}
      <div className="bg-white border-b border-neutral-200/80 sticky top-16 z-40 select-none">
        <div className="container mx-auto px-6 max-w-7xl h-12 flex items-center justify-between">
          <Link 
            to="/blog" 
            className="text-xs font-semibold text-neutral-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux articles</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                copiedLink 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border-neutral-200/80'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? "Lien copié !" : "Partager"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Column Content Layout Grid */}
      <main className="container mx-auto px-6 max-w-7xl pt-10 pb-20">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-8 font-mono">
          <Link to="/" className="hover:text-neutral-600">VSW Digital</Link>
          <ChevronRight className="w-3 h-3 text-neutral-300" />
          <Link to="/blog" className="hover:text-neutral-600">Blog</Link>
          <ChevronRight className="w-3 h-3 text-neutral-300" />
          <span className="text-neutral-600 font-semibold line-clamp-1">{post.title}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Main column - Content Block (8-cols width) */}
          <article className="lg:col-span-8 bg-white border border-neutral-200/75 rounded-2xl p-6 md:p-10 shadow-sm">
            
            {/* Embedded TOC on Mobile screens only */}
            <div className="block lg:hidden mb-8 border-b border-neutral-100 pb-8">
              <BlogTableOfContents 
                sections={sections} 
                activeHeadingId={activeHeadingId}
                onClickSection={(id) => setActiveHeadingId(id)}
              />
            </div>

            {/* Main Rich text body */}
            <BlogArticleContent sections={sections} />

            {/* Accordion FAQ with local structured data JSON-LD */}
            <BlogFaq faqList={post.faq} articleTitle={post.title} />

            {/* Direct Contextual conversion CTA block */}
            <BlogCta />

          </article>

          {/* Right Sticky Sidebar Column - Table of Contents (4-cols width) */}
          <aside className="hidden lg:col-span-4 lg:block">
            <BlogTableOfContents 
              sections={sections} 
              activeHeadingId={activeHeadingId}
              onClickSection={(id) => setActiveHeadingId(id)}
            />
          </aside>

        </div>

        {/* Carousel block showcasing related editorial articles */}
        <RelatedArticles currentPost={post} allPosts={BLOG_POSTS} />

      </main>

    </div>
  );
}
