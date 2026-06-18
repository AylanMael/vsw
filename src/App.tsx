import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { CreationSiteInternet } from './pages/CreationSiteInternet';
import { ReferencementSeo } from './pages/ReferencementSeo';
import { ApplicationsWeb } from './pages/ApplicationsWeb';
import { DemoEspaceClient } from './pages/DemoEspaceClient';
import { Realisations } from './pages/Realisations';
import { RefonteSiteInternet } from './pages/RefonteSiteInternet';
import { MaintenanceSiteInternet } from './pages/MaintenanceSiteInternet';
import { CloudAutomatisation } from './pages/CloudAutomatisation';
import { GoogleAds } from './pages/GoogleAds';
import { Contact } from './pages/Contact';
import { AuditDigital } from './pages/AuditDigital';
import { APropos } from './pages/APropos';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="creation-site-internet" element={<CreationSiteInternet />} />
          <Route path="refonte-site-internet" element={<RefonteSiteInternet />} />
          <Route path="maintenance-site-internet" element={<MaintenanceSiteInternet />} />
          <Route path="referencement-seo" element={<ReferencementSeo />} />
          <Route path="applications-web" element={<ApplicationsWeb />} />
          <Route path="application-web-sur-mesure" element={<ApplicationsWeb />} />
          <Route path="demo-espace-client" element={<DemoEspaceClient />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="cloud-automatisation" element={<CloudAutomatisation />} />
          <Route path="google-ads" element={<GoogleAds />} />
          <Route path="audit-digital" element={<AuditDigital />} />
          <Route path="a-propos" element={<APropos />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
