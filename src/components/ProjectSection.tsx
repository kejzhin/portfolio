import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, X, Shield, Globe, Cpu, Zap, Lock, Database, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link: string;
  icon: any;
  color: string;
}

interface GraphicProject {
  title: string;
  description: string;
  image: string;
  galleryImages: string[];
  category: string;
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicProject | null>(null);

  const projects: Project[] = [
    {
      title: "Stakecube.net",
      description: "One-stop Ecosystem for Crypto Assets.",
      longDescription: "Automated staking, masternode hosting, and integrated exchange. Served as a Security consultant and Penetration Tester.",
      tags: ["Crypto Ecosystem"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/sc.png",
      link: "https://stakecube.net",
      icon: Database,
      color: "#2C3E50"
    },
    {
      title: "Socialsend.io",
      description: "Blockchain-based Social Payment Gateway.",
      longDescription: "Information Security Analyzer (2019-2022). Performed security tests of the website before deployment, preventing malicious attacks and identifying critical bugs.",
      tags: ["Social Gateway"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/ss.png",
      link: "https://socialsend.io",
      icon: Shield,
      color: "#3498DB"
    },
    {
      title: "Vitae Token",
      description: "Social Rewards Blockchain Platform.",
      longDescription: "Penetration Tester and Information Security.",
      tags: ["Rewards Platform"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/vitae.png",
      link: "https://vitae.co",
      icon: Zap,
      color: "#F1C40F"
    },
    {
      title: "Metrixcoin.com",
      description: "Digital Currency built on Proof-of-Stake.",
      longDescription: "Penetration Tester & Information Security.",
      tags: ["Digital Currency"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/metrix.png",
      link: "https://metrixcoin.com",
      icon: Cpu,
      color: "#27AE60"
    },
    {
      title: "Aercrypt.net",
      description: "Secure Encryption & Communication Hub.",
      longDescription: "Performed penetration testing for Aercrypt's end-to-end encrypted messaging services.",
      tags: ["Encryption Hub"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/aer.jpg",
      link: "https://aercrypt.net",
      icon: Lock,
      color: "#E74C3C"
    },
    {
      title: "StackofStake.com",
      description: "Automated Staking & Masternodes platform.",
      longDescription: "Collaborated on platform security audits to provide a seamless user experience for crypto-asset staking.",
      tags: ["Staking Platform"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/sos.png",
      link: "https://stackofstake.com",
      icon: Database,
      color: "#8E44AD"
    },
    {
      title: "Cryptech.services",
      description: "Blockchain Technical Services Provider.",
      longDescription: "Penetration Tester & security advisor and system vulnerability assessments.",
      tags: ["Tech Services"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/cs.png",
      link: "https://cryptech.services",
      icon: Shield,
      color: "#95A5A6"
    },
    {
      title: "Pepecoin.org",
      description: "The Original Meme Coin Ecosystem.",
      longDescription: "Performed Penetration to Floppygame PEPE and Vulnerability Assessments",
      tags: ["Meme Ecosystem"],
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/pepe.png",
      link: "https://pepecoin.org",
      icon: Globe,
      color: "#1ABC9C"
    }
  ];

  const graphicsProjects: GraphicProject[] = [
    {
      title: "T-Shirt Design",
      description: "Anime-inspired illustrations and custom streetwear concepts featuring iconic characters.",
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/zoro-t.jpg",
      galleryImages: [
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/luffy-t.png?auto=format&fit=crop&q=80&w=800",
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/zoro-t.png?auto=format&fit=crop&q=80&w=800",
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/vs.png?auto=format&fit=crop&q=80&w=800",
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/ng.png?auto=format&fit=crop&q=80&w=800",
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/shanks.png?auto=format&fit=crop&q=80&w=800"
      ],
      category: "Merchandise"
    },
    {
      title: "Logo Design",
      description: "Minimalist and impactful brand identities for tech startups and blockchain projects.",
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/logo.png?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/db.png?auto=format&fit=crop&q=80&w=800",
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/logo.png?auto=format&fit=crop&q=80&w=80"

      ],
      category: "Identity"
    },
    {
      title: "E-book",
      description: "Professional digital publication layouts and cover designs for technical guides.",
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/chester.png?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/duck.png?auto=format&fit=crop&q=80&w=800"
      ],
      category: "Editorial"
    },
    {
      title: "ID Lace / Lanyard",
      description: "Custom event and corporate identity accessories designed for international conferences.",
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/lace.png",
      galleryImages: [
        "https://raw.githubusercontent.com/kejzhin/portfolio/main/image/lace.png"
      ],
      category: "Corporate"
    },
    {
      title: "E-Commerce",
      description: "Digital storefront concepts and visual assets for online retail platforms.",
      image: "https://raw.githubusercontent.com/kejzhin/portfolio/refs/heads/main/image/nec.jpg?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://raw.githubusercontent.com/kejzhin/portfolio/refs/heads/main/image/nec.jpg?auto=format&fit=crop&q=80&w=800"
      ],
      category: "E-Commerce"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-2">
          Project Gallery
        </h2>
        <div className="flex items-center gap-2 text-brand-purple">
          <div className="w-12 h-[1px] bg-brand-purple/50" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Work Showcase</span>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.05,
              y: { type: "spring", stiffness: 300, damping: 20 }
            }}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden hover:border-brand-purple/30 transition-all duration-500 cursor-pointer"
          >
            {/* Image Container with fitted square image */}
            <div className="aspect-square overflow-hidden bg-white/5 relative flex items-center justify-center">
              <img 
                src={project.image || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-all duration-300" />
              
              {/* Card Corner HUD elements */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-brand-purple opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-brand-purple opacity-40 group-hover:opacity-100 transition-opacity" />
              
              {/* Scanline overlay for cards */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="p-2 relative">
              <span className="text-[7px] font-mono text-brand-purple font-bold tracking-[0.1em] uppercase mb-0.5 block truncate">{project.tags[0]}</span>
              <h3 className="text-[10px] font-bold text-white group-hover:text-brand-purple transition-colors line-clamp-1">{project.title}</h3>
            </div>
            
            {/* Decorative Edge Glow */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Graphics Projects Section */}
      <div className="pt-6 space-y-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl px-1"
        >
          <div className="flex items-center gap-2 text-brand-pink mb-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Visual Arts</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Graphics Showcase</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Creative designs, branding, and editorial work.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative group/marquee">
          {/* Fading Edges Mask */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-4 w-max py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
          >
            {/* Duplicate projects for seamless loop */}
            {[...graphicsProjects, ...graphicsProjects].map((graphic, index) => (
              <motion.div
                key={`${graphic.title}-${index}`}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedGraphic(graphic)}
                className="w-[240px] flex-shrink-0 group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-pink/30 hover:shadow-[0_20px_50px_rgba(0,111,255,0.1)] transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-black/40">
                  <img 
                    src={graphic.image} 
                    alt={graphic.title}
                    className="w-full h-full object-contain transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[8px] font-mono text-brand-pink font-bold uppercase tracking-widest mb-1.5 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {graphic.category}
                    </span>
                    <h4 className="text-sm font-bold text-white drop-shadow-md">{graphic.title}</h4>
                    <p className="text-[9px] text-white/50 mt-1 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {graphic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


      {/* Project Details Modal (Folder Style) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl z-10 flex flex-col pointer-events-auto"
            >
            {/* Main Modal Body */}
            <div className="w-full bg-[#0D0D0D] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[90vh] md:h-[550px] relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-brand-purple rounded-full flex items-center justify-center text-white transition-all z-20 shadow-xl border border-white/10 backdrop-blur-md"
              >
                <X size={20} />
              </button>
 
               {/* Left Side: Large Preview Centerpiece */}
              <div className="w-full md:w-2/3 p-4 md:p-6 bg-black/20 flex items-center justify-center relative overflow-hidden shrink-0">
                <div 
                  className="absolute inset-0 opacity-10 blur-[100px]"
                  style={{ backgroundColor: selectedProject.color }}
                />
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center"
                >
                  {selectedProject.image ? (
                    <div className="w-full h-full max-w-[90%] max-h-[90%] rounded-2xl bg-[#111] shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden border border-white/10">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-40 rounded-2xl bg-white p-8 shadow-[0_40px_80px_rgba(0,0,0,0.7)] flex items-center justify-center">
                      <selectedProject.icon className="text-[#111111]" size={80} />
                    </div>
                  )}
                  <div className="mt-6 text-center space-y-1">
                     <div className="text-white/20 font-mono text-[8px] tracking-[0.5em] uppercase">Visual Identity Archive</div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: File Details Interface */}
              <div className="w-full md:w-1/3 flex flex-col border-l border-white/5 bg-[#0D0D0D] overflow-hidden">
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <header className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-brand-purple/10 border border-brand-purple/20 rounded text-[8px] font-mono text-brand-purple font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-1">{selectedProject.title}</h3>
                      <div className="h-0.5 w-10 bg-brand-purple rounded-full mb-4" />
                      <p className="text-white/50 text-xs leading-relaxed mb-6">
                        {selectedProject.longDescription}
                      </p>
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-purple hover:bg-brand-purple/90 text-white text-[10px] font-bold rounded-lg transition-all shadow-lg active:scale-[0.98]"
                      >
                        <ExternalLink size={12} />
                        <span>Explore Project</span>
                      </a>
                    </div>
                  </header>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 bg-black/10">
                  <div className="flex justify-between items-center px-1 pt-4">
                    <span className="text-[7px] font-mono text-white/10 uppercase tracking-[0.3em]">Integrated Archive &copy; 2024</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Graphics Pop-up */}
      <AnimatePresence>
        {selectedGraphic && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGraphic(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100, rotateX: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl z-10 flex flex-col pointer-events-auto"
            >
                {/* Main Modal Body */}
                <div className="w-full bg-[#1A1A1A] border border-white/20 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] flex flex-col md:flex-row h-full max-h-[85vh] md:h-[520px] relative">
                  <button 
                    onClick={() => setSelectedGraphic(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-brand-pink rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 z-40 border border-white/20 shadow-xl"
                  >
                    <X size={20} />
                  </button>

                  {/* Left Side: Gallery Grid */}
                  <div className="w-full md:w-[60%] p-6 md:p-8 bg-black/40 overflow-y-auto custom-scrollbar shrink-0 md:shrink">
                    <div className="grid grid-cols-2 gap-3">
                    {selectedGraphic.galleryImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'} rounded-xl overflow-hidden border border-white/10 group/gallery`}
                      >
                        <img 
                          src={img} 
                          alt="Gallery item" 
                          className="w-full h-full object-contain group-hover/gallery:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side: File Details Interface */}
                <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col border-l border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent shrink-0 overflow-hidden">
                  <div className="flex-grow flex flex-col justify-center">
                    <header className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="px-2 py-0.5 bg-brand-pink/10 border border-brand-pink/30 rounded">
                          <span className="text-[8px] font-mono text-brand-pink font-bold">{selectedGraphic.category.toUpperCase()}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">{selectedGraphic.title}</h3>
                      <p className="text-white/50 text-[11px] leading-relaxed font-light line-clamp-3">
                        {selectedGraphic.description}
                      </p>
                    </header>

                    <div className="mt-8">
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-3">Portfolio Metadata</span>
                        <div className="space-y-3 font-mono">
                          <div className="flex justify-between items-center text-[10px]">
                             <span className="text-white/40">Tools Use:</span>
                             <span className="text-white/80">Adobe Photoshop</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <footer className="pt-6 border-t border-white/5 flex items-center justify-end">
                    <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em]">
                      &copy; 2024 JDLSR
                    </span>
                  </footer>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Design Decoration */}
      <div className="pt-6 mb-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />
        <div className="text-center font-mono text-[10px] text-white/20 uppercase tracking-[0.5em] animate-pulse">
          Continuous Innovation &middot; Secure by Design
        </div>
      </div>
    </div>
  );
}
