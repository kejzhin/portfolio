/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import ScrollToTop from './components/ScrollToTop';
import PortfolioSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Resume from './components/Resume';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

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
      className="pb-10 pt-16 md:pt-0"
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
      className="pt-32 md:pt-40 pb-20 max-w-7xl mx-auto px-6 md:px-10"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10">Project</h1>
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
      className="pt-32 md:pt-40 pb-20 max-w-7xl mx-auto px-6 md:px-10"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10">About Me</h1>
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
      className="pt-32 md:pt-40 pb-20 max-w-7xl mx-auto px-6 md:px-10"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10">Contact</h1>
      <ContactSection />
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative selection:bg-brand-purple/30 selection:text-brand-purple min-h-screen bg-bg-dark">
        {/* Universal Noise Overlay for Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <Navbar />
        <SocialSidebar />
        
        <AnimatedRoutes />
          
        <footer className="py-12 md:py-20 text-center border-t border-white/5 bg-bg-dark">
          <div className="space-y-4 px-8">
            <div className="flex justify-center bg-brand-purple/20 p-2 rounded-lg border border-brand-purple/30 w-fit mx-auto scale-75">
              <Terminal size={18} className="text-brand-purple" />
            </div>
            <p className="text-white/40 text-[11px] font-mono tracking-widest uppercase">
              Built with Passion by Jeric &copy; 2026
            </p>
          </div>
        </footer>
      </main>
    </BrowserRouter>
  );
}
