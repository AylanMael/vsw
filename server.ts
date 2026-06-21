import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { BLOG_POSTS } from "./src/data/blog-posts";

const getCurrentDirname = () => {
  try {
    if (typeof __dirname !== "undefined") {
      return __dirname;
    }
    return path.dirname(fileURLToPath(import.meta.url));
  } catch (e) {
    return process.cwd();
  }
};

const __dirname = getCurrentDirname();

function formatSitemapDate(dateStr?: string): string {
  if (!dateStr) {
    return new Date().toISOString().split("T")[0];
  }
  
  const months: Record<string, string> = {
    janvier: "01",
    fevrier: "02",
    février: "02",
    mars: "03",
    avril: "04",
    mai: "05",
    juin: "06",
    juillet: "07",
    aout: "08",
    août: "08",
    septembre: "09",
    octobre: "10",
    novembre: "11",
    decembre: "12",
    décembre: "12"
  };

  try {
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 3) {
      const day = parts[0].padStart(2, "0");
      const monthLabel = parts[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const month = months[monthLabel] || "06";
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
  } catch (error) {
    // Ignore and fallback
  }

  return new Date().toISOString().split("T")[0];
}

async function startServer() {
  const app = express();
  // IMPORTANT: Use the PORT provided by the environment, default to 3000.
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Dynamic SEO Friendly Sitemap
  app.get("/sitemap.xml", (req, res) => {
    res.header("Content-Type", "application/xml");
    
    const baseUrl = "https://vsw-digital.fr";
    
    // Static pages
    const mainPages = [
      { url: "", priority: "1.0", changefreq: "daily" },
      { url: "/services", priority: "0.8", changefreq: "weekly" },
      { url: "/creation-site-internet", priority: "0.8", changefreq: "weekly" },
      { url: "/refonte-site-internet", priority: "0.8", changefreq: "weekly" },
      { url: "/maintenance-site-internet", priority: "0.8", changefreq: "weekly" },
      { url: "/referencement-seo", priority: "0.8", changefreq: "weekly" },
      { url: "/applications-web", priority: "0.8", changefreq: "weekly" },
      { url: "/application-web-sur-mesure", priority: "0.8", changefreq: "weekly" },
      { url: "/demo-espace-client", priority: "0.7", changefreq: "weekly" },
      { url: "/realisations", priority: "0.8", changefreq: "weekly" },
      { url: "/cloud-automatisation", priority: "0.8", changefreq: "weekly" },
      { url: "/google-ads", priority: "0.8", changefreq: "weekly" },
      { url: "/audit-digital", priority: "0.8", changefreq: "weekly" },
      { url: "/a-propos", priority: "0.7", changefreq: "monthly" },
      { url: "/blog", priority: "0.9", changefreq: "daily" },
      { url: "/contact", priority: "0.8", changefreq: "monthly" },
      { url: "/mentions-legales", priority: "0.3", changefreq: "monthly" },
      { url: "/politique-confidentialite", priority: "0.3", changefreq: "monthly" }
    ];

    const todayStr = new Date().toISOString().split("T")[0];

    const urlElements = mainPages.map((page) => {
      return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Dynamic blog pages
    BLOG_POSTS.forEach((post) => {
      const lastmod = formatSitemapDate(post.updatedDate || post.date);
      urlElements.push(`  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.join("\n")}
</urlset>`;

    res.send(sitemapXml);
  });

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    res.header("Content-Type", "text/plain");
    res.send(`User-agent: *
Allow: /

Sitemap: https://vsw-digital.fr/sitemap.xml
`);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
