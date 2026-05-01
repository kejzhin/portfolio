import { motion } from 'motion/react';
import { Facebook, Linkedin, Github } from 'lucide-react';

export default function SocialSidebar() {
  const socials = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Github, href: 'https://github.com' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-8 bottom-12 z-50 hidden md:flex flex-col items-center gap-8"
    >
      <div className="w-px h-24 bg-linear-to-b from-transparent to-white/20" />
      
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1, color: '#8B5CF6' }}
          className="text-white/40 hover:text-white transition-colors"
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
}
