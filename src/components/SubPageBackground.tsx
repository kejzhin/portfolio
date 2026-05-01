import { motion } from 'motion/react';

export default function SubPageBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic atmospheric glows */}
      <div className="absolute top-[5%] -right-[10%] w-[600px] h-[600px] bg-brand-purple/15 rounded-full blur-[140px] opacity-50 animate-pulse" />
      <div className="absolute bottom-[10%] -left-[10%] w-[700px] h-[700px] bg-brand-pink/5 rounded-full blur-[160px] opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[200px] opacity-30" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }} 
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

      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ y: ['-100%', '300%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-brand-purple/30 to-transparent shadow-[0_0_30px_rgba(139,92,246,0.2)]"
      />

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
