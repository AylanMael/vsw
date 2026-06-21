import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import fs from "fs";
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

let lastMailDiagnostic: any = { status: "Aucune tentative d'envoi n'a encore été enregistrée." };

async function startServer() {
  const app = express();
  // IMPORTANT: Use the PORT provided by the environment, default to 3000.
  const PORT = parseInt(process.env.PORT || "3000", 10);

  // Middleware to parse JSON bodies for APIs
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/mail-diagnostic", (req, res) => {
    res.json(lastMailDiagnostic);
  });

  // POST endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    const {
      fullName,
      email,
      phone,
      company,
      website,
      projectType,
      budget,
      timeline,
      message,
    } = req.body;

    // Basic server-side validation
    if (!fullName || !email || !projectType || !message) {
      res.status(400).json({
        error: "Champs obligatoires manquants."
      });
      return;
    }

    const projectTypeLabels: Record<string, string> = {
      creation: "Création de site internet",
      refonte: "Refonte de site internet",
      seo: "Référencement SEO",
      "google-ads": "Google Ads & génération de leads",
      "app-sur-mesure": "Application web sur mesure",
      "cloud-auto": "Cloud & automatisation",
      maintenance: "Maintenance / hébergement",
      audit: "Audit digital",
      autre: "Autre demande",
    };

    const budgetLabels: Record<string, string> = {
      "under-1k": "Moins de 1 000 €",
      "1k-2.5k": "1 000 € à 2 500 €",
      "2.5k-5k": "2 500 € à 5 000 €",
      "5k-10k": "5 000 € à 10 000 €",
      "over-10k": "Plus de 10 000 €",
      tbd: "À définir ensemble",
    };

    const timelineLabels: Record<string, string> = {
      asap: "Dès que possible",
      month: "Dans le mois",
      "2-3-months": "Dans les 2 à 3 mois",
      "medium-term": "Projet à moyen terme",
      tbd: "Je ne sais pas encore",
    };

    const projectTypeLabel = projectTypeLabels[projectType] || projectType;
    const budgetLabel = budgetLabels[budget] || budget || "Non désigné / À définir";
    const timelineLabel = timelineLabels[timeline] || timeline || "Non désigné / À définir";

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER || "contact@vsw-digital.fr";
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      console.warn("⚠️ SMTP_PASS assumes dry-run as it is not configured in secrets. Mail sending simulated successfully.");
      lastMailDiagnostic = {
        timestamp: new Date().toISOString(),
        prospect_email: email,
        smtp_user: smtpUser,
        smtp_host: smtpHost,
        success: false,
        error: "SMTP_PASS non configuré dans les secrets d'application."
      };
      res.json({
        success: true,
        emailSent: false,
        warning: "SMTP_PASS non configuré. Veuillez l'ajouter dans les secrets d'application pour envoyer de vrais e-mails."
      });
      return;
    }

    // 1. Notification à l'administrateur (réception)
    const adminMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || "VSW Digital"}" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email,
      subject: `[Nouveau Lead VSW] ${fullName} - ${projectTypeLabel}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff; color: #334155;">
  <div style="background-color: #0f172a; padding: 24px; text-align: center;">
    <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nouveau contact reçu</h2>
    <p style="color: #3b82f6; margin: 5px 0 0 0; font-size: 14px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">vsw-digital.fr</p>
  </div>
  <div style="padding: 24px; line-height: 1.6;">
    <p style="margin-top: 0; color: #475569;">Un nouveau prospect vient de soumettre une demande de contact via le site internet.</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; width: 150px; color: #1e293b;">Nom complet :</td>
        <td style="padding: 10px 0; color: #334155;">${fullName}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Email :</td>
        <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Téléphone :</td>
        <td style="padding: 10px 0; color: #334155;">${phone || "Non renseigné"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Entreprise :</td>
        <td style="padding: 10px 0; color: #334155;">${company || "Non renseignée"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Site Web actuel :</td>
        <td style="padding: 10px 0; color: #334155;">${website || "Non renseigné"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Type de projet :</td>
        <td style="padding: 10px 0; font-weight: bold; color: #2563eb;">${projectTypeLabel}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Budget estimé :</td>
        <td style="padding: 10px 0; color: #334155;">${budgetLabel}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; color: #1e293b;">Délai souhaité :</td>
        <td style="padding: 10px 0; color: #334155;">${timelineLabel}</td>
      </tr>
    </table>
    
    <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 4px;">
      <h4 style="margin-top: 0; margin-bottom: 8px; color: #1e293b; font-size: 15px;">Message du client :</h4>
      <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
    </div>
    
    <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
      Ce formulaire de contact a été enregistré dans Firestore sous la collection <strong>leads</strong>.
    </p>
  </div>
  <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
    © ${new Date().getFullYear()} VSW Digital. Tous droits réservés.
  </div>
</div>
      `,
    };

    // 2. Accusé de réception automatique (pour le client)
    const clientMailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || "VSW Digital"}" <${smtpUser}>`,
      to: email,
      subject: `Accusé de réception - Votre projet avec VSW Digital`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff; color: #334155;">
  <div style="background-color: #0f172a; padding: 24px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">VSW Digital</h1>
    <p style="color: #3b82f6; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 0.15em; font-weight: bold; text-transform: uppercase;">Agence Digitale & Cloud</p>
  </div>
  <div style="padding: 24px; line-height: 1.6;">
    <p style="font-size: 16px; font-weight: bold; color: #1e293b; margin-top: 0;">Bonjour ${fullName},</p>
    <p>Nous vous remercions pour l'intérêt que vous portez à <strong>VSW Digital</strong>.</p>
    <p>Nous avons bien reçu votre demande concernant votre projet de <strong>${projectTypeLabel.toLowerCase()}</strong> et nous allons l'étudier avec le plus grand soin.</p>
    
    <p style="margin-top: 20px; font-weight: bold; color: #1e293b;">Voici les prochaines étapes de notre démarche :</p>
    <ul style="padding-left: 20px; color: #475569; margin-top: 10px;">
      <li style="margin-bottom: 8px;"><strong>Analyse de votre besoin :</strong> Nous analysons vos objectifs et, si applicable, votre site existant ou votre présence actuelle.</li>
      <li style="margin-bottom: 8px;"><strong>Premier contact :</strong> Un de nos experts vous recontactera sous 24 à 48 heures (jours ouvrés) afin d'échanger sur les détails et d'affiner le cadrage.</li>
      <li style="margin-bottom: 8px;"><strong>Étude et devis :</strong> Nous vous proposerons des solutions pragmatiques, adaptées à votre budget et à vos ambitions.</li>
    </ul>

    <div style="background-color: #f8fafc; border-radius: 6px; padding: 15px; margin: 25px 0; border: 1px solid #e2e8f0; border-left: 4px solid #3b82f6;">
      <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
        <strong>Résumé de votre message :</strong><br/>
        <em>"${message.length > 150 ? message.substring(0, 150) + "..." : message}"</em>
      </p>
    </div>

    <p>Si vous souhaitez apporter des compléments d'informations entre-temps, n'hésitez pas à répondre directement à cet e-mail.</p>
    
    <p style="margin-top: 30px; margin-bottom: 0;">À très bientôt,</p>
    <p style="margin-top: 5px; font-weight: bold; color: #1e293b;">L'équipe VSW Digital</p>
    <p style="font-size: 13px; color: #64748b; margin-top: 5px;">
      E-mail : <a href="mailto:contact@vsw-digital.fr" style="color: #3b82f6; text-decoration: none;">contact@vsw-digital.fr</a><br/>
      Site web : <a href="https://vsw-digital.fr" style="color: #3b82f6; text-decoration: none;">vsw-digital.fr</a>
    </p>
  </div>
  <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
    Ce message est un accusé de réception automatique de votre demande. Pour nous écrire, répondez simplement à cet e-mail.
  </div>
</div>
      `,
    };

    let emailSent = false;
    let errors: string[] = [];

    // Tentative 1 : SMTP configuré par défaut (ex: Port 465 SSL)
    try {
      console.log(`Tentative d'envoi d'e-mail via SMTP ${smtpHost}:${smtpPort} (secure: ${smtpPort === 465})...`);
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 8000,
        greetingTimeout: 5000,
      });

      await transporter.verify();
      
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(clientMailOptions),
      ]);

      emailSent = true;
      console.log(`📧 Emails envoyés avec succès via le port primaire ${smtpPort}`);
    } catch (err1) {
      const errMsg1 = err1 instanceof Error ? err1.message : String(err1);
      console.error(`❌ Échec de l'envoi primaire (${smtpHost}:${smtpPort}) :`, errMsg1);
      errors.push(`Primaire (${smtpHost}:${smtpPort}) : ${errMsg1}`);

      // Tentative 2: Repli sur le port alternatif (si 465, alors 587 avec STARTTLS, et inversement)
      const fallbackPort = smtpPort === 465 ? 587 : 465;
      try {
        console.log(`🔄 Repli : tentative d'envoi via SMTP ${smtpHost}:${fallbackPort} (secure: ${fallbackPort === 465})...`);
        const fallbackTransporter = nodemailer.createTransport({
          host: smtpHost,
          port: fallbackPort,
          secure: fallbackPort === 465, // si 587, secure doit être false (STARTTLS)
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          connectionTimeout: 8000,
          greetingTimeout: 5000,
        });

        await fallbackTransporter.verify();

        await Promise.all([
          fallbackTransporter.sendMail(adminMailOptions),
          fallbackTransporter.sendMail(clientMailOptions),
        ]);

        emailSent = true;
        console.log(`📧 Emails envoyés avec succès via le port de repli ${fallbackPort}`);
      } catch (err2) {
        const errMsg2 = err2 instanceof Error ? err2.message : String(err2);
        console.error(`❌ Échec de l'envoi de repli (Port ${fallbackPort}) :`, errMsg2);
        errors.push(`Repli (${smtpHost}:${fallbackPort}) : ${errMsg2}`);
      }
    }

    // Sauvegarde du diagnostic
    lastMailDiagnostic = {
      timestamp: new Date().toISOString(),
      prospect_email: email,
      project_type: projectTypeLabel,
      smtp_user: smtpUser,
      smtp_host: smtpHost,
      primary_port_tried: smtpPort,
      success: emailSent,
      errors: errors,
      smtp_pass_provided: !!smtpPass,
      smtp_pass_length: smtpPass ? smtpPass.length : 0,
    };

    if (emailSent) {
      res.json({ success: true, emailSent: true });
    } else {
      res.status(500).json({
        success: false,
        error: "Impossible d'envoyer l'e-mail de notification.",
        details: errors.join(" | ")
      });
    }
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
    
    // 1. Configurer un cache fort et immuable pour les ressources statiques (Vite génère des hashs uniques pour les assets)
    app.use("/assets", express.static(path.join(distPath, "assets"), {
      maxAge: "1y",
      immutable: true,
      fallthrough: false
    }));

    // 2. Servir les autres fichiers statiques de la racine (robots.txt, sitemap.xml, favicon.ico, etc.)
    app.use(express.static(distPath, {
      maxAge: "1h",
      index: false
    }));

    // 3. Servir le fichier d'entrée index.html avec STRICTEMENT AUCUN CACHE pour éviter la page blanche suite à une mise à jour
    app.get('*', (req, res) => {
      res.set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      });
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
