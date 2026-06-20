import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';

// Landing page stays eager for fast first paint; the rest are code-split.
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const AuraCaribe = lazy(() => import('./pages/AuraCaribe'));
const BulkOrders = lazy(() => import('./pages/BulkOrders'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const HospitalityCollection = lazy(() => import('./pages/HospitalityCollection'));
const Login = lazy(() => import('./pages/Login'));
const ShopCollections = lazy(() => import('./pages/ShopCollections'));
const IndustryPage = lazy(() => import('./pages/IndustryPage'));
const Privacy = lazy(() => import('./pages/Privacy'));
const TheExecutiveSuite = lazy(() => import('./pages/TheExecutiveSuite'));
const UniformGuideBlog = lazy(() => import('./pages/UniformGuideBlog'));

function PageFallback() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh]" aria-live="polite" aria-busy="true">
      <span className="h-10 w-10 rounded-full border-2 border-outline-variant border-t-primary animate-spin" role="status" aria-label="Loading" />
    </div>
  );
}

function NotFound() {
  return (
    <section className="flex-grow flex flex-col items-center justify-center text-center px-grid-margin py-section-gap-mobile min-h-[60vh]">
      <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">404</p>
      <h1 className="font-display-md text-display-md text-primary dark:text-zinc-100 mb-4">Page not found</h1>
      <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-400 max-w-md mb-8">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-transform">
        Back to Home
      </Link>
    </section>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageFallback />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/aura-caribe" element={<PageTransition><AuraCaribe /></PageTransition>} />
        <Route path="/bulk-orders" element={<PageTransition><BulkOrders /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/hospitality-collection" element={<PageTransition><HospitalityCollection /></PageTransition>} />
        <Route path="/collections" element={<PageTransition><ShopCollections /></PageTransition>} />
        <Route path="/industries/:slug" element={<PageTransition><IndustryPage /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/executive-suite" element={<PageTransition><TheExecutiveSuite /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><UniformGuideBlog /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}