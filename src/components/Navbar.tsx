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
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:px-20 bg-transparent"
    >
      <NavLink to="/" className="flex items-center gap-3 z-[110] relative">
        <div className="flex bg-brand-purple/20 p-2 rounded-lg border border-brand-purple/30 backdrop-blur-sm">
          <Terminal size={18} className="text-brand-purple" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">Jeric</span>
      </NavLink>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-12 z-[110] relative">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) => 
              `group relative text-[11px] font-bold transition-all tracking-[0.2em] px-2 py-1 ${
                isActive ? 'text-brand-purple' : 'text-white/70 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">{item.label}</span>
                
                {/* Lightning/Electric Hover Effect */}
                <motion.div 
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={false}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        opacity: [0, 1, 0, 0.8, 0],
                        scaleX: [0.8, 1.2, 0.7, 1.4, 1],
                        x: [-(Math.random() * 5), Math.random() * 5, 0],
                        skewX: [0, 20, -20, 0]
                      }}
                      transition={{ 
                        duration: 0.15 + (i * 0.05), 
                        repeat: Infinity, 
                        repeatDelay: 0.5 + Math.random() * 1.5 
                      }}
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-purple shadow-[0_0_12px_#8B5CF6,0_0_20px_#8B5CF6]" 
                      style={{ 
                        bottom: `${i * 2 - 1}px`,
                        opacity: 0.3 + (i * 0.2)
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-brand-purple/10 blur-xl rounded-full" />
                </motion.div>

                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-purple shadow-[0_0_10px_#8B5CF6]"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-[110] relative p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-xl border border-white/10 transition-all shadow-lg backdrop-blur-md"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-black border-l border-white/20 z-[90] flex flex-col p-6 pt-32 md:hidden shadow-[-20px_0_100px_rgba(0,0,0,1)]"
            >
              {/* Force solid background */}
              <div className="absolute inset-0 bg-[#050505] z-[-1]" />
              
              <div className="flex flex-col gap-5 relative z-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <NavLink 
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `group relative flex items-center justify-between px-6 py-5 transition-all border overflow-hidden ${
                          isActive 
                            ? 'bg-brand-purple/10 border-brand-purple/40 text-white shadow-[inset_0_0_25px_rgba(139,92,246,0.15)]' 
                            : 'bg-white/[0.03] border-white/5 text-white/70 hover:bg-white/[0.08] hover:border-white/10 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => {
                        return (
                          <>
                            {/* Animated Background Mesh */}
                            {isActive && (
                              <motion.div 
                                className="absolute inset-0 bg-brand-purple/5 z-0"
                                animate={{ 
                                  opacity: [0.1, 0.2, 0.1],
                                  scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            )}

                            {/* Technical Accent Line */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-purple transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.6)] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} />
                            
                            {/* Top Corner Accent */}
                            <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-purple/40 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="flex flex-col gap-0.5 relative z-10">
                              <span className="text-[14px] font-bold tracking-[0.2em] uppercase font-mono">{item.label}</span>
                            </div>
                            
                            <div className="flex items-center gap-3 relative z-10">
                              {isActive ? (
                                <div className="flex flex-col items-end gap-1">
                                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-pulse shadow-[0_0_8px_rgba(139,92,246,1)]" />
                                  <span className="text-[6px] font-mono text-brand-purple/60">0{i+1}</span>
                                </div>
                              ) : (
                                <span className="text-[10px] font-mono text-white/10">0{i+1}</span>
                              )}
                              <Terminal 
                                size={14} 
                                className={`transition-all duration-500 ${
                                  isActive ? 'text-brand-purple opacity-100 rotate-0' : 'opacity-20 translate-x-3 -rotate-12'
                                }`} 
                              />
                            </div>
                          </>
                        );
                      }}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
