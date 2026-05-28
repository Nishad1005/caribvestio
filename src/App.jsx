import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import AuraCaribe from './pages/AuraCaribe';
import BulkOrders from './pages/BulkOrders';
import ContactUs from './pages/ContactUs';
import HospitalityCollection from './pages/HospitalityCollection';
import IndustriesServed from './pages/IndustriesServed';
import ShopCollections from './pages/ShopCollections';
import TheExecutiveSuite from './pages/TheExecutiveSuite';
import UniformGuideBlog from './pages/UniformGuideBlog';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/aura-caribe" element={<PageTransition><AuraCaribe /></PageTransition>} />
        <Route path="/bulk-orders" element={<PageTransition><BulkOrders /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
        <Route path="/hospitality-collection" element={<PageTransition><HospitalityCollection /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesServed /></PageTransition>} />
        <Route path="/collections" element={<PageTransition><ShopCollections /></PageTransition>} />
        <Route path="/executive-suite" element={<PageTransition><TheExecutiveSuite /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><UniformGuideBlog /></PageTransition>} />
      </Routes>
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