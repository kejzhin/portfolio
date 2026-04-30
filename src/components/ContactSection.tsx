import { motion } from 'motion/react';
import { Mail, Phone, Facebook, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const contactDetails = [
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '(+63) 9684431452', 
      href: 'tel:+639684431452',
      color: '#22C55E'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'jericdelosreyes127001@gmail.com', 
      href: 'mailto:jericdelosreyes127001@gmail.com',
      color: '#3B82F6'
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      value: 'kejzhin', 
      href: 'http://facebook.com/kejzhin',
      color: '#1877F2'
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-2 text-brand-purple mb-6">
          <ShieldCheck size={24} />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.3em]">Direct Communication</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
          Let&apos;s build secure systems with <span className="text-brand-purple">striking visual appeal.</span>
        </h2>
        <p className="text-white/50 text-xl leading-relaxed">
          If you need to reach me immediately, you may contact me through any of the channels below. I&apos;m always open to discussing new projects, creative ideas, or security assessments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactDetails.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.label === 'Facebook' ? '_blank' : undefined}
            rel={contact.label === 'Facebook' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-10 bg-[#0A0A0A] border border-white/5 rounded-[2rem] overflow-hidden hover:border-brand-purple/20 transition-all duration-500"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${contact.color}20`, color: contact.color }}
              >
                <contact.icon size={24} />
              </div>
              
              <div className="mt-auto space-y-2">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold">
                  {contact.label}
                </span>
                <div className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors break-all">
                  {contact.value}
                </div>
              </div>

              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-white/20" />
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
              style={{ 
                background: `radial-gradient(circle at center, ${contact.color}, transparent 60%)` 
              }}
            />
          </motion.a>
        ))}
      </div>

      {/* Immediate Contact Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center"
      >
        <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em] mb-4">Urgent Inquiries</p>
        <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto mb-8">
          Need an immediate response? Send a direct message via Facebook for the fastest turnaround.
        </p>
        <a 
          href="http://facebook.com/kejzhin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-brand-purple hover:text-white transition-all transform hover:scale-105"
        >
          <Facebook size={20} />
          MESSAGE ME NOW
        </a>
      </motion.div>
    </div>
  );
}
