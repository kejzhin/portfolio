import { motion } from 'motion/react';
import { Mail, Phone, Facebook, ExternalLink, ShieldCheck, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Using Formspree as an easy endpoint for frontend-only mail sending
      // The user should ideally replace this with their own Formspree ID
      const response = await fetch('https://formspree.io/f/mjvnrpob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _to: 'jericdelosreyes127001@gmail.com'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-2 text-brand-purple mb-4 md:mb-6">
          <ShieldCheck size={24} />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.3em]">Direct Communication</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight">
          Let&apos;s build secure systems with <motion.span 
            initial={{ color: 'rgba(255, 255, 255, 1)' }}
            whileInView={{ color: '#8B5CF6' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >striking visual appeal.</motion.span>
        </h2>
        <p className="text-white/50 text-xl leading-relaxed">
          Need a security assessment, a custom streetwear design, or just want to say hi? Fill out the form below or reach out via my socials.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] border border-white/5 p-6 md:p-8 rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Send size={20} className="text-brand-purple" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-hidden focus:border-brand-purple/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-hidden focus:border-brand-purple/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Subject</label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-hidden focus:border-brand-purple/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-hidden focus:border-brand-purple/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10 resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-brand-purple hover:bg-brand-purple/90 disabled:bg-white/5 disabled:text-white/20 text-white font-bold rounded-2xl transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center gap-3 group"
              >
                {status === 'sending' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  'MESSAGE SENT!'
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-400 text-[10px] font-mono text-center mt-2 uppercase tracking-wider">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[100px] pointer-events-none" />
        </motion.div>

        {/* Contact Details Column */}
        <div className="space-y-4">
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
              className="group relative p-6 bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-brand-purple/20 transition-all duration-500 flex items-center gap-6"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shrink-0"
                style={{ backgroundColor: `${contact.color}20`, color: contact.color }}
              >
                <contact.icon size={24} />
              </div>
              
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold block">
                  {contact.label}
                </span>
                <div className="text-base md:text-lg font-bold text-white group-hover:text-brand-purple transition-colors break-all">
                  {contact.value}
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                <ExternalLink size={16} className="text-white/20" />
              </div>

              {/* Subtle Gradient Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at center, ${contact.color}, transparent 80%)` 
                }}
              />
            </motion.a>
          ))}

          {/* Facebook Quick Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl text-center"
          >
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Urgent Inquiries</p>
            <p className="text-sm font-light text-white/60 mb-6 leading-relaxed">
              For immediate security assessments or design consultations, slide into my DMs.
            </p>
            <a 
              href="http://facebook.com/kejzhin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-brand-purple hover:text-white transition-all transform hover:scale-105"
            >
              <Facebook size={18} />
              FACEBOOK DM
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

