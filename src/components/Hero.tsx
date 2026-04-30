import { motion, useInView } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

function TypewriterSequence({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing');

  useEffect(() => {
    let timer: any;
    const currentPhrase = phrases[index % phrases.length];

    if (phase === 'typing') {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setPhase('waiting');
        }, 100);
      }
    } else if (phase === 'waiting') {
      timer = setTimeout(() => {
        setPhase('deleting');
      }, 2500);
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 40);
      } else {
        setPhase('typing');
        setIndex(prev => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [index, displayText, phase, phrases]);

  return (
    <span className="relative inline-flex items-center min-w-0">
      <span className="transition-opacity duration-300 whitespace-pre-wrap">
        <span className="text-gradient">
          {displayText}
        </span>
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[0.9em] bg-brand-purple ml-2 flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
      />
    </span>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-8 px-6 md:px-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl relative z-10 flex flex-col md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-4 md:space-y-6 md:col-span-7 z-20 relative"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter min-h-[2.2em] font-mono">
              <TypewriterSequence phrases={["Hi!", "I'm Jeric", "Web Penetration\nTester"]} />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white/40 text-xs md:text-lg font-mono tracking-widest uppercase border-l-2 border-brand-purple/30 pl-4"
            >
              Security Researcher / Ethical Hacker / Graphics Designer
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={() => navigate('/project')}
              className="px-6 md:px-8 py-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold rounded-xl transition-all glow-purple text-sm md:text-base"
            >
              My Work
            </button>
            <button 
              onClick={() => navigate('/resume')}
              className="px-6 md:px-8 py-3 border-2 border-white/20 hover:border-brand-purple/50 text-white font-semibold rounded-xl transition-all bg-white/5 backdrop-blur-sm text-sm md:text-base"
            >
              Hire Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-full md:relative md:right-0 md:top-0 md:translate-y-0 md:col-span-5 z-0 opacity-20 md:opacity-100 flex items-center justify-center min-h-[250px] md:min-h-[500px] pointer-events-none"
        >
          {/* Main Floating Object Group */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Primary Orbiting Prism */}
            <motion.div 
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 0.95, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 md:w-48 md:h-48 glass-card rounded-[1.5rem] md:rounded-[2rem] border-brand-purple/30 shadow-2xl relative flex items-center justify-center group"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-linear-to-br from-brand-purple to-brand-pink rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-4 border border-white/5 rounded-2xl" />
              <div className="z-10 text-xl md:text-3xl font-bold text-white/20">SEC</div>
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360, x: [100, 150, 100], y: [-50, 50, -50] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-12 h-12 glass-card rounded-xl border-brand-pink/40 shadow-lg"
            />

            <motion.div 
              animate={{ rotate: -360, x: [-120, -180, -120], y: [80, -80, 80] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-16 h-16 glass-card rounded-full border-brand-purple/40 shadow-lg"
            />

            <motion.div 
              animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 w-4 h-4 bg-brand-purple rounded-full shadow-[0_0_20px_#8B5CF6]"
            />

            <motion.div 
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-20 w-8 h-8 glass-card rounded-lg rotate-12 border-white/20"
            />

            {/* Glowing lines/nodes connections effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
               <div className="w-[120%] h-px bg-linear-to-r from-transparent via-brand-purple to-transparent rotate-12" />
               <div className="w-[120%] h-px bg-linear-to-r from-transparent via-brand-pink to-transparent -rotate-12" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
