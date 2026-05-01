import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, X, Shield, Globe, Cpu, Zap, Lock, Database, Terminal, Image as ImageIcon } from 'lucide-react';
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
      longDescription: "Automated staking, masternode hosting, and integrated exchange. Served as a security consultant and UI contributor for the platform's ecosystem expansion.",
      tags: ["Staking", "Exchange", "Security"],
      image: "https://stakecube.info/wp-content/uploads/2020/03/StakeCube-Logo-White-Text-Small.png",
      link: "https://stakecube.net",
      icon: Database,
      color: "#2C3E50"
    },
    {
      title: "Socialsend.io",
      description: "Blockchain-based Social Payment Gateway.",
      longDescription: "Information Security Analyzer (2019-2022). Performed security tests of the website before deployment, preventing malicious attacks and identifying critical bugs.",
      tags: ["Security", "Web3", "Social"],
      image: "https://socialsend.io/assets/images/logo.png",
      link: "https://socialsend.io",
      icon: Shield,
      color: "#3498DB"
    },
    {
      title: "Vitae Token",
      description: "Social Rewards Blockchain Platform.",
      longDescription: "Strategic technical support and security auditing for the Vitaatoken ecosystem, focusing on platform integrity and user data protection.",
      tags: ["Web3", "Auditing", "UI"],
      image: "https://vitaetoken.io/images/logo-white.png",
      link: "https://vitae.co",
      icon: Zap,
      color: "#F1C40F"
    },
    {
      title: "Metrixcoin.com",
      description: "Digital Currency built on Proof-of-Stake.",
      longDescription: "Graphics design and technical advisory for the Metrix community. Focused on modernizing the digital identity and securing community-driven applications.",
      tags: ["PoS", "Design", "Consulting"],
      image: "https://metrixcoin.com/images/metrix-logo.png",
      link: "https://metrixcoin.com",
      icon: Cpu,
      color: "#27AE60"
    },
    {
      title: "Aercrypt.net",
      description: "Secure Encryption & Communication Hub.",
      longDescription: "Developed secure communication protocols and performed penetration testing for Aercrypt's end-to-end encrypted messaging services.",
      tags: ["Encryption", "Pentesting", "Dev"],
      image: "https://aercrypt.net/assets/img/logo.png",
      link: "https://aercrypt.net",
      icon: Lock,
      color: "#E74C3C"
    },
    {
      title: "StackofStake.com",
      description: "Automated Staking & Masternodes platform.",
      longDescription: "Collaborated on platform security audits and UI refinements to provide a seamless user experience for crypto-asset staking.",
      tags: ["Staking", "Masternodes", "UI"],
      image: "https://stackofstake.com/img/logo.png",
      link: "https://stackofstake.com",
      icon: Database,
      color: "#8E44AD"
    },
    {
      title: "Cryptech.services",
      description: "Blockchain Technical Services Provider.",
      longDescription: "I.T Technician and security advisor. Provided hardware assembly support, software installation, and system vulnerability assessments.",
      tags: ["Services", "Tech Support", "Security"],
      image: "https://cryptech.services/assets/images/logo.png",
      link: "https://cryptech.services",
      icon: Terminal,
      color: "#95A5A6"
    },
    {
      title: "Pepecoin.org",
      description: "The Original Meme Coin Ecosystem.",
      longDescription: "Community driven graphics design and web development for the original Pepecoin community projects and explorer tools.",
      tags: ["Meme", "Web Dev", "Graphics"],
      image: "https://pepecoin.org/assets/img/logo.png",
      link: "https://pepecoin.org",
      icon: Globe,
      color: "#1ABC9C"
    }
  ];

  const graphicsProjects: GraphicProject[] = [
    {
      title: "T-Shirt Design",
      description: "Custom apparel branding and illustrations created for various crypto communities.",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1576566582148-46a10c4be49f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800"
      ],
      category: "Merchandise"
    },
    {
      title: "Logo Design",
      description: "Minimalist and impactful brand identities for tech startups and blockchain projects.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
      ],
      category: "Identity"
    },
    {
      title: "Ebook Design",
      description: "Professional digital publication layouts and cover designs for technical guides.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1532012197367-27a964e727ec?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800"
      ],
      category: "Editorial"
    },
    {
      title: "ID Lace / Lanyard",
      description: "Custom event and corporate identity accessories designed for international conferences.",
      image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800",
      galleryImages: [
        "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1611689225620-3e9028820f3c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1584441484419-751b74000fe7?auto=format&fit=crop&q=80&w=800"
      ],
      category: "Corporate"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-2 text-brand-purple mb-4">
          <Layers size={20} />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">Work Showcase</span>
        </div>
        <h2 className="text-4xl font-bold mb-4">Project Gallery</h2>
        <p className="text-white/50 text-lg leading-relaxed">
          Here are some of the projects I worked on with some design on it. Click on any project to see technical details.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-brand-purple/30 transition-all duration-500 cursor-pointer"
          >
            {/* Image Container with Logo overlay */}
            <div className="aspect-[16/10] overflow-hidden bg-white/5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-20 scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="relative z-20 p-8 transform group-hover:scale-110 transition-transform duration-500">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white shadow-xl overflow-hidden p-2"
                  style={{ backgroundColor: project.color }}
                >
                  <project.icon className="text-white" size={40} />
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-white/40 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Decorative Edge Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Graphics Projects Section */}
      <div className="pt-10 space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 text-brand-pink mb-4">
            <Layers size={20} />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">Visual Arts</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Graphics Project</h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Here are some of the creative designs I&apos;ve crafted, ranging from branding to apparel and editorial work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {graphicsProjects.map((graphic, index) => (
            <motion.div
              key={graphic.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedGraphic(graphic)}
              className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-pink/30 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={graphic.image} 
                  alt={graphic.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-brand-pink uppercase tracking-widest mb-1">{graphic.category}</span>
                <h4 className="text-lg font-bold text-white">{graphic.title}</h4>
                <p className="text-xs text-white/60 mt-1">{graphic.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal (Folder Style) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl z-10 flex flex-col pointer-events-auto"
            >
              {/* Folder Tab */}
              <div className="flex items-end px-4 md:px-12 h-10">
                <div 
                  className="w-40 md:w-56 h-full border-t border-x border-white/20 rounded-t-2xl flex items-center justify-center gap-2 relative shadow-2xl"
                  style={{ backgroundColor: selectedProject.color }}
                >
                  <selectedProject.icon size={16} className="text-white" />
                  <span className="text-[8px] md:text-[10px] font-mono text-white font-bold uppercase tracking-widest whitespace-nowrap px-2">Case_Study_{selectedProject.title.split('.')[0]}</span>
                  <div className="absolute -right-4 bottom-0 w-4 h-4 rounded-bl-full border-b border-l border-white/20" style={{ backgroundColor: selectedProject.color }} />
                </div>
              </div>

              {/* Main Folder Body */}
              <div className="w-full bg-[#111111] border border-white/20 rounded-3xl rounded-tl-none overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px] md:min-h-[550px] max-h-[80vh] overflow-y-auto custom-scrollbar md:overflow-visible">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-14 right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-20"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Large Preview Centerpiece */}
                <div className="w-full md:w-3/5 p-8 md:p-12 bg-black/40 flex items-center justify-center relative overflow-hidden shrink-0">
                  <div 
                    className="absolute inset-0 opacity-10 blur-3xl"
                    style={{ backgroundColor: selectedProject.color }}
                  />
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8"
                  >
                    <div className="w-32 h-32 rounded-[2.5rem] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center justify-center">
                       <selectedProject.icon className="text-[#111111]" size={64} />
                    </div>
                    <div className="text-center space-y-2">
                       <div className="text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase">Security Encryption</div>
                       <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: File Details Interface */}
                <div className="w-full md:w-2/5 p-10 md:p-14 flex flex-col border-l border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent">
                  <div className="space-y-10 flex-grow">
                    <header className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-white/50 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-4xl font-bold tracking-tight text-white">{selectedProject.title}</h3>
                      <p className="text-white/40 text-lg leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </header>

                    <div className="space-y-4">
                      <div className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl">
                         <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-1">Impact Analysis</span>
                         <span className="text-sm text-white/70">Verified Infrastructure & User Security Protocols</span>
                      </div>
                       <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all shadow-lg"
                      >
                        <ExternalLink size={18} />
                        <span>View Live Platform</span>
                      </a>
                    </div>
                  </div>

                  <footer className="pt-10 border-t border-white/5 text-center">
                    <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em]">Integrated Archive &copy; 2024</span>
                  </footer>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Graphics Folder Pop-up */}
      <AnimatePresence>
        {selectedGraphic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGraphic(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100, rotateX: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl z-10 flex flex-col pointer-events-auto"
            >
                {/* Folder Tab (Top Edge) */}
                <div className="flex items-end px-4 md:px-12 h-10">
                  <div className="w-40 md:w-48 h-full bg-[#1A1A1A] border-t border-x border-white/20 rounded-t-2xl flex items-center justify-center gap-2 relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
                    <span className="text-[8px] md:text-[10px] font-mono text-white/60 uppercase tracking-widest font-bold">Project_Archive</span>
                    {/* Decorative Folder Notches */}
                    <div className="absolute -right-4 bottom-0 w-4 h-4 bg-[#1A1A1A] rounded-bl-full border-b border-l border-white/20" />
                  </div>
                </div>

                {/* Main Folder Body */}
                <div className="w-full bg-[#1A1A1A] border border-white/20 rounded-3xl rounded-tl-none overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)] flex flex-col md:flex-row h-full md:min-h-[650px] max-h-[85vh] overflow-y-auto custom-scrollbar md:overflow-hidden">
                  <button 
                    onClick={() => setSelectedGraphic(null)}
                    className="absolute top-14 right-6 w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 z-40"
                  >
                    <X size={20} />
                  </button>

                  {/* Left Side: Gallery Grid */}
                  <div className="w-full md:w-[60%] p-4 md:p-10 bg-black/40 overflow-y-auto custom-scrollbar shrink-0 md:shrink">
                    <div className="grid grid-cols-2 gap-4">
                    {selectedGraphic.galleryImages.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'} rounded-xl overflow-hidden border border-white/10 group/gallery`}
                      >
                        <img 
                          src={img} 
                          alt="Gallery item" 
                          className="w-full h-full object-cover group-hover/gallery:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side: File Details Interface */}
                <div className="w-full md:w-[40%] p-10 flex flex-col border-l border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent shrink-0">
                  <div className="space-y-10 flex-grow">
                    <header className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1 bg-brand-pink/10 border border-brand-pink/30 rounded-md">
                          <span className="text-[9px] font-mono text-brand-pink font-bold">PROJECT_ID: {selectedGraphic.title.toUpperCase().slice(0, 3)}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{selectedGraphic.category}</span>
                      </div>
                      <h3 className="text-4xl font-bold tracking-tight text-white/90">{selectedGraphic.title}</h3>
                      <p className="text-white/50 text-base leading-relaxed font-light">
                        {selectedGraphic.description}
                      </p>
                    </header>

                    <div className="space-y-4">
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-3">Portfolio Metadata</span>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-xs">
                             <span className="text-white/40">Status:</span>
                             <span className="text-green-400 font-bold">Archives_Safe</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                             <span className="text-white/40">Resolution:</span>
                             <span className="text-white/80">300 DPI / UHD</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                             <span className="text-white/40">Files:</span>
                             <span className="text-white/80">{selectedGraphic.galleryImages.length} Artifacts Found</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <footer className="pt-10 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-brand-purple" />
                      <span className="text-[10px] font-mono text-white/30 tracking-widest">ENCRYPTED_FOLDER</span>
                    </div>
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
      <div className="pt-10 mb-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-10" />
        <div className="text-center font-mono text-[10px] text-white/20 uppercase tracking-[0.5em] animate-pulse">
          Continuous Innovation &middot; Secure by Design
        </div>
      </div>
    </div>
  );
}
