import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BLOG_POSTS } from "../src/data/blog-posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://vsw-digital.fr";

type SitemapPage = {
  url: string;
  priority: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatSitemapDate(dateStr?: string): string {
  if (!dateStr) {
    return new Date().toISOString().split("T")[0];
  }

  const months: Record<string, string> = {
    janvier: "01",
    fevrier: "02",
    mars: "03",
    avril: "04",
    mai: "05",
    juin: "06",
    juillet: "07",
    aout: "08",
    septembre: "09",
    octobre: "10",
    novembre: "11",
    decembre: "12",
  };

  const normalizedDate = dateStr
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const parts = normalizedDate.split(/\s+/);

  if (parts.length === 3) {
    const day = parts[0].padStart(2, "0");
    const month = months[parts[1]];
    const year = parts[2];

    if (month && /^\d{4}$/.test(year)) {
      return `${year}-${month}-${day}`;
    }
  }

  return new Date().toISOString().split("T")[0];
}

function buildUrlEntry({
  loc,
  lastmod,
  changefreq,
  priority,
}: {
  loc: string;
  lastmod: string;
  changefreq: SitemapPage["changefreq"];
  priority: string;
}) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generate() {
  const mainPages: SitemapPage[] = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/services", priority: "0.8", changefreq: "weekly" },
    { url: "/creation-site-internet", priority: "0.8", changefreq: "weekly" },
    { url: "/refonte-site-internet", priority: "0.8", changefreq: "weekly" },
    { url: "/maintenance-site-internet", priority: "0.8", changefreq: "weekly" },
    { url: "/referencement-seo", priority: "0.8", changefreq: "weekly" },
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
    { url: "/politique-confidentialite", priority: "0.3", changefreq: "monthly" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const urls = mainPages.map((page) =>
    buildUrlEntry({
      loc: `${BASE_URL}${page.url}`,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
    })
  );

  BLOG_POSTS.forEach((post) => {
    urls.push(
      buildUrlEntry({
        loc: `${BASE_URL}/blog/${post.slug}`,
        lastmod: formatSitemapDate(post.updatedDate || post.date),
        changefreq: "weekly",
        priority: "0.7",
      })
    );
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  const publicDir = path.join(__dirname, "../public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

  console.log("✅ sitemap.xml généré avec succès dans /public");
  console.log("✅ robots.txt généré avec succès dans /public");
}

generate();
