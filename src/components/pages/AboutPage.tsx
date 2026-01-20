import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Award, Globe, TrendingUp } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge research and development',
      color: 'var(--neon-blue)',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Building trust through consistent quality and performance',
      color: 'var(--neon-green)',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and green energy',
      color: 'var(--neon-orange)',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and success are our top priorities',
      color: 'var(--neon-blue)',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Legacy Battery established with a vision to revolutionize energy storage' },
    { year: '2019', title: 'First Product Launch', description: 'Released our flagship EV battery series' },
    { year: '2021', title: 'Global Expansion', description: 'Expanded operations to 25+ countries' },
    { year: '2023', title: '1M Units Sold', description: 'Reached milestone of 1 million batteries delivered' },
    { year: '2025', title: 'Innovation Award', description: 'Recognized as Technology Leader of the Year' },
    { year: '2026', title: 'Next-Gen Tech', description: 'Launching solid-state battery technology' },
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
            About{' '}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Legacy Battery
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering the future of energy storage with innovation, reliability, and sustainability
          </p>
        </motion.div>

        {/* Hero Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-[var(--neon-blue)]/20 mb-20 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'var(--neon-blue)' }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl font-black mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded in 2018, Legacy Battery emerged from a simple yet powerful vision: to create battery technology that doesn't just power devices, but powers a sustainable future. Our founders, a team of electrochemical engineers and sustainability experts, recognized the urgent need for cleaner, more efficient energy storage solutions.
              </p>
              <p>
                From our first prototype to today's industry-leading products, we've remained committed to innovation without compromise. Every battery we produce represents countless hours of research, rigorous testing, and an unwavering dedication to excellence.
              </p>
              <p>
                Today, Legacy Battery powers electric vehicles, homes, and industries across the globe. But we're not just building batteries—we're building a legacy of sustainable power for generations to come.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{
                  background: 'var(--neon-blue)22',
                  border: '2px solid var(--neon-blue)44',
                }}
              >
                <Target className="w-8 h-8 text-[var(--neon-blue)]" />
              </div>
              <h2 className="text-3xl font-black group-hover:text-[var(--neon-blue)] transition-colors">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To deliver world-class battery solutions that empower individuals and industries to embrace sustainable energy, combining cutting-edge technology with environmental responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10 border border-[var(--neon-green)]/20 hover:border-[var(--neon-green)]/50 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{
                  background: 'var(--neon-green)22',
                  border: '2px solid var(--neon-green)44',
                }}
              >
                <TrendingUp className="w-8 h-8 text-[var(--neon-green)]" />
              </div>
              <h2 className="text-3xl font-black group-hover:text-[var(--neon-green)] transition-colors">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be the global leader in battery innovation, setting new standards for performance, safety, and sustainability while accelerating the world's transition to clean energy.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all text-center group cursor-pointer"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: `${value.color}22`,
                      border: `2px solid ${value.color}44`,
                      boxShadow: `0 0 20px ${value.color}33`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-xl font-black mb-3 group-hover:text-[var(--neon-blue)] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">
              Key milestones in our growth and innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-green)] to-[var(--neon-orange)]" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${
                    i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all">
                      <div className="text-3xl font-black text-[var(--neon-blue)] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-black mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full border-4 border-[var(--neon-blue)] bg-[var(--deep-bg)] z-10"
                    style={{
                      boxShadow: '0 0 20px var(--neon-blue)',
                    }}
                  />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-[var(--neon-blue)]/20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1M+', label: 'Batteries Sold' },
              { value: '25+', label: 'Countries' },
              { value: '500+', label: 'Team Members' },
              { value: '15+', label: 'R&D Centers' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-black text-[var(--neon-blue)] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
