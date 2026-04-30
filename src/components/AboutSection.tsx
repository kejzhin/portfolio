import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card md:col-span-3 md:p-12 justify-center min-h-[300px]"
      >
        <div className="max-w-3xl">
          <div className="bento-label mb-8">My Specialization</div>
          <p className="text-2xl md:text-4xl font-bold leading-tight text-white mb-8">
            I specialize in <span className="text-brand-purple">web penetration testing</span> and <span className="text-brand-purple">IT security</span>, 
            helping websites and systems stay secure from threats.
          </p>
          <div className="h-px w-20 bg-brand-purple/20 mb-8" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/60">
            I also have a passion for <span className="text-brand-pink underline decoration-brand-pink/20">graphics and print design</span>, 
            adding a creative touch when needed. I’m eager to collaborate on projects that combine 
            security and impactful digital experiences.
          </p>
        </div>
      </motion.div>

      {/* Education Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="md:col-span-3 mt-10 mb-4"
      >
        <h2 className="text-3xl font-bold tracking-tight">Education Background</h2>
      </motion.div>

      {/* Education - Aurora A. Elementary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bento-card flex-row items-center gap-6 py-6"
      >
        <div className="flex-1 text-left">
          <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest block mb-1">2007 - 2014</span>
          <h3 className="text-lg font-bold">Aurora A. Elementary School</h3>
        </div>
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden p-2 shrink-0">
          <img src="https://logodix.com/logo/1857912.png" alt="Aurora A. Logo" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      {/* Education - Carlos L. Albert */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bento-card flex-row items-center gap-6 py-6 border-brand-purple/20 bg-brand-purple/5"
      >
        <div className="flex-1 text-left">
          <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest block mb-1">2018 - 2020</span>
          <h3 className="text-lg font-bold">Carlos L. Albert Highschool</h3>
        </div>
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-brand-purple/20 overflow-hidden p-1 shrink-0">
          <img src="https://i.ibb.co/vzB7K8r/CLASH-logo.png" alt="Carlos L. Logo" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      {/* Education - AMA University */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bento-card flex-row items-center gap-6 py-6"
      >
        <div className="flex-1 text-left">
          <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest block mb-1">2020 - 2021</span>
          <h3 className="text-lg font-bold">AMA University & College</h3>
        </div>
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden shrink-0">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/AMA_University_logo.png" alt="AMA Logo" className="w-full h-full object-contain" />
        </div>
      </motion.div>
    </div>
  );
}
