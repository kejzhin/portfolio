import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import ScrollToTop from './components/ScrollToTop';
import SubPageBackground from './components/SubPageBackground';
import PortfolioSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Resume from './components/Resume';
import { motion, AnimatePresence } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-0 pt-0"
    >
      <Hero />
    </motion.div>
  );
}

function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-16 md:pt-24 pb-6 max-w-7xl mx-auto px-6 md:px-10"
    >
      <PortfolioSection />
    </motion.div>
  );
}

function ResumePage() {
  return (
    <div className="pt-20 md:pt-0">
      <Resume />
    </div>
  );
}

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pt-16 md:pt-24 pb-6 max-w-7xl mx-auto px-6 md:px-10"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6">About Me</h1>
      <AboutSection />
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-16 md:pt-24 pb-6 max-w-7xl mx-auto px-6 md:px-10"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact</h1>
      <ContactSection />
    </motion.div>
  );
}

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className={`relative selection:bg-brand-purple/30 selection:text-brand-purple ${isHome ? 'h-dvh overflow-hidden' : 'min-h-screen'} bg-bg-dark`}>
      {/* Universal Noise Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Dynamic Background for non-home pages */}
      {!isHome && <SubPageBackground />}
      
      <Navbar />
      <SocialSidebar />
      
      <div className="relative">
        <AnimatedRoutes />
      </div>
        
      {!isHome && (
        <footer className="py-4 md:py-8 text-center border-t border-white/5 bg-bg-dark relative overflow-hidden">
          {/* Ticker Effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-purple/20 to-transparent" />
          <div className="w-full overflow-hidden whitespace-nowrap py-1 opacity-20 group">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="inline-block text-[8px] font-mono text-brand-purple uppercase tracking-[0.5em]"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8">System_Status: Optimal // Connection: Secured // Identity: Verified // Port_Scan: Complete // Encryption: active</span>
              ))}
            </motion.div>
          </div>

          <div className="space-y-4 px-8 mt-4">
            <p className="text-white/40 text-[11px] font-mono tracking-widest uppercase">
              Built with Passion by Jeric &copy; 2026
            </p>
          </div>
        </footer>
      )}
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainContent />
    </BrowserRouter>
  );
}
