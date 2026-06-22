import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MainLayout } from './components/layout/MainLayout';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const CreationSiteInternet = lazy(() => import('./pages/CreationSiteInternet').then(m => ({ default: m.CreationSiteInternet })));
const IaAutomatisation = lazy(() => import('./pages/IaAutomatisation').then(m => ({ default: m.IaAutomatisation })));
const ReferencementSeo = lazy(() => import('./pages/ReferencementSeo').then(m => ({ default: m.ReferencementSeo })));
const ApplicationsWeb = lazy(() => import('./pages/ApplicationsWeb').then(m => ({ default: m.ApplicationsWeb })));
const DemoEspaceClient = lazy(() => import('./pages/DemoEspaceClient').then(m => ({ default: m.DemoEspaceClient })));
const Realisations = lazy(() => import('./pages/Realisations').then(m => ({ default: m.Realisations })));
const RefonteSiteInternet = lazy(() => import('./pages/RefonteSiteInternet').then(m => ({ default: m.RefonteSiteInternet })));
const MaintenanceSiteInternet = lazy(() => import('./pages/MaintenanceSiteInternet').then(m => ({ default: m.MaintenanceSiteInternet })));
const CloudAutomatisation = lazy(() => import('./pages/CloudAutomatisation').then(m => ({ default: m.CloudAutomatisation })));
const GoogleAds = lazy(() => import('./pages/GoogleAds').then(m => ({ default: m.GoogleAds })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AuditDigital = lazy(() => import('./pages/AuditDigital').then(m => ({ default: m.AuditDigital })));
const APropos = lazy(() => import('./pages/APropos').then(m => ({ default: m.APropos })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales').then(m => ({ default: m.MentionsLegales })));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite').then(m => ({ default: m.PolitiqueConfidentialite })));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="creation-site-internet" element={<CreationSiteInternet />} />
            <Route path="refonte-site-internet" element={<RefonteSiteInternet />} />
            <Route path="maintenance-site-internet" element={<MaintenanceSiteInternet />} />
            <Route path="ia-automatisation-intelligente" element={<IaAutomatisation />} />
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
            <Route path="mentions-legales" element={<MentionsLegales />} />
            <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
