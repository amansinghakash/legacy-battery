import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['sales@legacybattery.com', 'support@legacybattery.com'],
      color: 'var(--neon-blue)',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (800) 123-4567', '+1 (800) 765-4321'],
      color: 'var(--neon-green)',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Legacy Battery HQ', '1234 Innovation Drive, Tech Valley, CA 94025'],
      color: 'var(--neon-orange)',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'var(--neon-blue)',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Facebook', url: '#', icon: '👤' },
    { name: 'Instagram', url: '#', icon: '📷' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-3xl p-8 border border-[var(--neon-blue)]/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-[var(--neon-blue)]" />
              <h2 className="text-3xl font-black">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black magnetic-btn flex items-center justify-center gap-2"
                style={{
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
                }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${info.color}22`,
                        border: `2px solid ${info.color}44`,
                        boxShadow: `0 0 15px ${info.color}33`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                        {info.title}
                      </h3>
                      {info.details.map((detail, j) => (
                        <p key={j} className="text-gray-400 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl overflow-hidden border border-[var(--neon-blue)]/20 mb-12"
        >
          <div className="h-[400px] bg-gradient-to-br from-[var(--neon-blue)]/10 to-[var(--neon-green)]/10 flex items-center justify-center relative overflow-hidden">
            {/* Decorative Grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(var(--neon-blue)44 1px, transparent 1px),
                  linear-gradient(90deg, var(--neon-blue)44 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />
            
            {/* Location Marker */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="relative z-10"
            >
              <MapPin className="w-20 h-20 text-[var(--neon-blue)]" />
              <motion.div
                className="absolute inset-0 blur-xl"
                style={{ background: 'var(--neon-blue)' }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Placeholder text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <div className="glass px-6 py-3 rounded-full border border-[var(--neon-blue)]/30">
                <span className="text-sm text-gray-400">
                  📍 Legacy Battery HQ - Tech Valley, California
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-black mb-6">Connect With Us</h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 glass rounded-xl border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)] transition-all flex items-center justify-center text-3xl magnetic-btn"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
