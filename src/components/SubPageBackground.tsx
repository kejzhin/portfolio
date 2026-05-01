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
             backgroundImage: `linear-gradient(to right, rgba(0, 229, 255, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(0, 229, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '100px 100px' 
           }} 
      />

      {/* Floating Technical Elements - More numerous and varied */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
                x: (i * 10 + Math.random() * 10) + '%', 
                y: (i * 8 + Math.random() * 15) + '%',
                opacity: 0,
                rotate: Math.random() * 360
            }}
            animate={{ 
              y: ['0%', (Math.random() * -40 - 20) + '%', '0%'],
              opacity: [0.03, 0.1, 0.03],
              rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)]
            }}
            transition={{ 
              duration: 12 + i * 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className={`absolute rounded-2xl border border-brand-purple/10 ${i % 3 === 0 ? 'w-48 h-48' : 'w-20 h-20'}`}
            style={{ 
              clipPath: i % 4 === 0 ? 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)' : i % 4 === 1 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Hexagon Pattern Section */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[8%] right-[15%] opacity-[0.05] scale-150"
      >
        <svg width="300" height="300" viewBox="0 0 100 100">
           <path d="M50 1L95 25V75L50 99L5 75V25L50 1Z" fill="none" stroke="#00E5FF" strokeWidth="0.3" />
           <path d="M50 20L80 35V65L50 80L20 65V35L50 20Z" fill="none" stroke="#00E5FF" strokeWidth="0.1" />
        </svg>
      </motion.div>

      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] left-[8%] opacity-[0.03] scale-[2.5]"
      >
        <svg width="400" height="400" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="48" fill="none" stroke="#00E5FF" strokeWidth="0.1" strokeDasharray="3 3" />
           <circle cx="50" cy="50" r="30" fill="none" stroke="#00E5FF" strokeWidth="0.05" />
        </svg>
      </motion.div>

      {/* Additional Spinning Technical Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] border border-brand-purple/5 rounded-full border-dashed opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] border border-brand-pink/5 rounded-full border-dashed opacity-10"
      />

      {/* Floating Geometry Objects (More) */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`extra-obj-${i}`}
            initial={{ 
              x: (20 + i * 15) + '%', 
              y: (10 + i * 12) + '%',
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              y: ['0%', '-30%', '0%'],
              opacity: [0, 0.1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180]
            }}
            transition={{ 
              duration: 15 + i * 2, 
              repeat: Infinity, 
              delay: i * 3
            }}
            className="absolute w-32 h-32 border-[0.5px] border-brand-purple/20 rounded-lg"
          />
        ))}
      </div>

      {/* Pulsing Light Circles */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-brand-purple/5 rounded-full"
      />

      {/* Cyber HUD Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 w-32 h-1 bg-linear-to-r from-brand-purple/50 to-transparent"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-20 w-32 h-1 bg-linear-to-l from-brand-pink/50 to-transparent"
        />
        <div className="absolute top-1/2 left-4 w-px h-64 bg-linear-to-b from-transparent via-brand-purple/20 to-transparent" />
        <div className="absolute top-1/2 right-4 w-px h-64 bg-linear-to-b from-transparent via-brand-pink/20 to-transparent" />
      </div>

      {/* Scanning Line Effect - more visible */}
      <motion.div 
        animate={{ y: ['-100%', '350%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-purple/60 to-transparent shadow-[0_0_20px_rgba(0,229,255,0.3)]"
      />
      <motion.div 
        animate={{ y: ['350%', '-100%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-pink/40 to-transparent opacity-30 shadow-[0_0_20px_rgba(0,111,255,0.2)]"
      />

      {/* Pulsing Circuit Board Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 229, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 229, 255, 1)" />
            <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 100 L 100 100 L 150 150 L 300 150 L 350 200"
          stroke="url(#circuit-grad)"
          strokeWidth="1"
          fill="none"
          animate={{ strokeDashoffset: [1000, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: 500 }}
        />
        <motion.path
          d="M 1000 800 L 900 800 L 850 750 L 700 750 L 650 700"
          stroke="url(#circuit-grad)"
          strokeWidth="1"
          fill="none"
          animate={{ strokeDashoffset: [0, 1000], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: 500 }}
        />
      </svg>

      {/* Floating HUD Elements - Simplified to shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`hud-box-${i}`}
            initial={{ 
              top: (20 + i * 20) + '%', 
              left: (10 + i * 25) + '%',
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              delay: i * 2,
              times: [0, 0.5, 1]
            }}
            className="flex flex-col gap-1"
          >
            <div className="w-16 h-[1px] bg-brand-purple/30" />
            <div className="w-3 h-3 border border-brand-purple/20 rotate-45" />
            <div className="w-8 h-[1px] bg-brand-purple/20 ml-auto" />
          </motion.div>
        ))}
      </div>

      {/* Connection Nodes Background */}
      <motion.svg 
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full opacity-[0.08] origin-center scale-[2]"
      >
        <pattern id="dotGridLarge" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#00E5FF" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGridLarge)" />
      </motion.svg>
    </div>
  );
}
