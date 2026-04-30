import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'PROJECT', href: '/project' },
    { label: 'RESUME', href: '/resume' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-20 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5"
    >
      <NavLink to="/" className="flex items-center gap-3 z-50">
        <div className="flex bg-brand-purple/20 p-2 rounded-lg border border-brand-purple/30">
          <Terminal size={18} className="text-brand-purple" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase">Jeric</span>
      </NavLink>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-12">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) => 
              `text-[11px] font-bold transition-colors tracking-widest ${
                isActive ? 'text-brand-purple' : 'text-white/70 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all shadow-lg backdrop-blur-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-[#0A0A0B] border-l border-white/10 z-[70] flex flex-col p-6 pt-24 md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
            >
              {/* Solid Background Layer to prevent bleed-through */}
              <div className="absolute inset-0 bg-[#0A0A0B] z-[-1]" />
              <div className="absolute inset-0 bg-brand-purple/[0.02] pointer-events-none" />
              
              <div className="flex flex-col gap-3 relative z-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `group flex items-center justify-between px-6 py-4 rounded-2xl transition-all border ${
                          isActive 
                            ? 'bg-brand-purple/20 border-brand-purple/40 text-white' 
                            : 'bg-white/5 border-transparent text-white/50 hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <span className="text-sm font-bold tracking-[0.2em] uppercase">{item.label}</span>
                      <Terminal size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pb-10 px-6">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                  System_Status: Online<br />
                  Auth_Level: User
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
