import { motion } from 'motion/react';

export default function SubPageBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background fill to ensure no transparency issues */}
      <div className="absolute inset-0 bg-bg-dark" />
      
      {/* Dynamic atmospheric glows - more vibrant */}
      <div className="absolute top-[5%] -right-[10%] w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[140px] opacity-60 animate-pulse" />
      <div className="absolute bottom-[10%] -left-[10%] w-[700px] h-[700px] bg-brand-pink/10 rounded-full blur-[160px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[200px] opacity-40" />
      
      {/* Subtle Tech-Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{ 
             backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
             backgroundSize: '100px 100px' 
           }} 
      />

      {/* Floating Technical Elements - More numerous and varied */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
                x: (i * 15 + Math.random() * 10) + '%', 
                y: (i * 12 + Math.random() * 15) + '%',
                opacity: 0,
                rotate: Math.random() * 360
            }}
            animate={{ 
              y: ['0%', (Math.random() * -30 - 10) + '%', '0%'],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 15 + i * 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className={`absolute rounded-xl border border-brand-purple/10 ${i % 2 === 0 ? 'w-40 h-40' : 'w-24 h-24'}`}
            style={{ 
              clipPath: i % 3 === 0 ? 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Hexagon Pattern Section */}
      <div className="absolute top-[15%] left-[5%] opacity-[0.03] scale-150 rotate-12">
        <svg width="400" height="400" viewBox="0 0 100 100">
           <path d="M50 1L95 25V75L50 99L5 75V25L50 1Z" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
           <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Pulsing Light Circles */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-brand-purple/5 rounded-full"
      />

      {/* Large Ambient Pulsing Circle */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: 360
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] border-[0.5px] border-brand-purple/10 rounded-full"
      />

      {/* Scanning Line Effect - more visible */}
      <motion.div 
        animate={{ y: ['-100%', '350%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-brand-purple/40 to-transparent shadow-[0_0_40px_rgba(139,92,246,0.3)]"
      />

      {/* Modern Binary-like data stream effect background */}
      <div className="absolute inset-0 opacity-[0.03] font-mono text-[10px] text-brand-purple overflow-hidden flex flex-wrap gap-4 p-4 select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            {Array.from({ length: 40 }).map((_, j) => (
              <span key={j} className="opacity-40">{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>

      {/* Connection Nodes Background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <pattern id="dotGridLarge" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#8B5CF6" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGridLarge)" />
      </svg>
    </div>
  );
}
