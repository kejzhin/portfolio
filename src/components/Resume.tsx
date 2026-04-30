import { motion } from 'motion/react';
import { Download, Briefcase, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      company: "American Technologies Inc.",
      role: "Data Management Staff",
      period: "2025",
      description: "Reviewing and managing incoming files using M-Files, Oracle database encoding, and developing Python scripts for automated data entry."
    },
    {
      company: "Gentech IT Solutions Corp.",
      role: "I.T Technician",
      period: "2023 - 2025",
      description: "Web administration, online support, graphics design, marketing, and hardware technical support including system assembly and installation."
    },
    {
      company: "Jaslink Trading",
      role: "Graphics Designer",
      period: "2023",
      description: "Creating advertising layouts, managing e-commerce platforms (Lazada/Shopee), and providing hardware assembly support."
    },
    {
      company: "Socialsend.net (Freelance)",
      role: "Information Security / Security Analyzer",
      period: "2019 - 2022",
      description: "Performing security tests on production websites, analyzing vulnerabilities, and identifying critical system bugs."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-20 px-8 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-balance leading-tight">Jeric M. De Los Reyes</h1>
            <p className="text-brand-purple font-mono text-sm tracking-widest uppercase">Information Technology</p>
          </div>
          <a 
            href="https://ais-pre-k7ro2nezliiod7xejc254m-277370446902.asia-southeast1.run.app/resume_jeric.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-purple/20"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            {/* Experience Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-brand-purple">
                <Briefcase size={24} />
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-8 pl-4 border-l border-white/5">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative space-y-2">
                    <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_10px_#8B5CF6]" />
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="text-xs font-mono text-brand-purple bg-brand-purple/10 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <div className="text-sm font-bold text-white/70">{exp.company}</div>
                    <p className="text-sm text-white/40 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Skills Card */}
            <div className="bento-card bg-white/5 border-white/10">
              <div className="bento-label mb-4">Core Skills</div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Graphics Designing', 
                  'Hardware / Software Troubleshooting', 
                  'Computer Repair', 
                  'Gadget Repair',
                  'Web Penetration Testing', 
                  'Linux', 
                  'Technical Support'
                ].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/70 uppercase">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-mono text-white/40 uppercase mb-2">
                  <span>Typing Speed</span>
                  <span>60-80 WPM</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-brand-purple" />
                </div>
              </div>
            </div>

            {/* Animating Object - Security Hub */}
            <div className="relative h-56 flex items-center justify-center overflow-hidden rounded-3xl bg-black/40 border border-white/5 shadow-inner">
              {/* Grid Background Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
              
              {/* Rotating Scanning Line */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent z-10"
              />

              {/* Data Orbits */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute border border-brand-purple/10 rounded-full"
                  style={{ 
                    width: `${120 + i * 40}px`, 
                    height: `${120 + i * 40}px`,
                    opacity: 0.3 - i * 0.1
                  }}
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-brand-purple rounded-full shadow-[0_0_8px_#8B5CF6]" 
                  />
                </motion.div>
              ))}

              {/* Central Security Core */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="z-20 relative"
              >
                <div className="w-20 h-20 bg-brand-purple/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-brand-purple/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <ShieldCheck className="text-brand-purple" size={36} />
                </div>
                
                {/* Floating Status Icons Around Core */}
                <motion.div
                   animate={{ y: [0, -5, 0] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-4 -right-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center shadow-lg"
                >
                  <Terminal size={14} className="text-brand-purple" />
                </motion.div>
                <motion.div
                   animate={{ y: [0, 5, 0] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute -bottom-4 -left-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center shadow-lg"
                >
                  <Cpu size={14} className="text-brand-pink" />
                </motion.div>
              </motion.div>

              {/* Status Text HUD Style */}
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 tracking-wider">SEC_LEVEL: ALPHA</span>
              </div>
              <div className="absolute bottom-4 right-6 text-right">
                <span className="text-[8px] font-mono text-brand-purple/60 leading-none block">DATABASE_SYNC</span>
                <span className="text-[10px] font-mono text-white/40">100% ENCRYPTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
