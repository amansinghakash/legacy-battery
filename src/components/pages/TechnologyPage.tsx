import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Leaf, TrendingUp, Battery, CircuitBoard, Gauge, Award } from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (page: string) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  const benefits = [
    {
      icon: Zap,
      title: 'Ultra-Fast Charging',
      description: 'Revolutionary charging technology delivers 0-80% charge in just 25 minutes',
      details: [
        'High-power DC fast charging support',
        'Intelligent thermal management',
        'Optimized cell chemistry',
        'Smart BMS coordination',
      ],
      color: 'var(--neon-blue)',
    },
    {
      icon: TrendingUp,
      title: 'Extended Lifespan',
      description: 'Industry-leading cycle life ensures your battery lasts for decades',
      details: [
        '7000+ charge-discharge cycles',
        '80% capacity retention guarantee',
        'Advanced cell balancing',
        'Degradation protection algorithms',
      ],
      color: 'var(--neon-green)',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and processes for a cleaner tomorrow',
      details: [
        'Recyclable components',
        'Reduced carbon footprint',
        'Conflict-free materials',
        'Green manufacturing',
      ],
      color: 'var(--neon-green)',
    },
    {
      icon: Shield,
      title: 'Maximum Safety',
      description: 'Multi-layer protection systems ensure complete peace of mind',
      details: [
        'Fire suppression technology',
        'Thermal runaway prevention',
        'Short-circuit protection',
        'Impact-resistant casing',
      ],
      color: 'var(--neon-blue)',
    },
    {
      icon: Battery,
      title: 'High Power Efficiency',
      description: 'Optimized energy conversion delivers maximum performance',
      details: [
        '95%+ round-trip efficiency',
        'Minimal self-discharge',
        'Adaptive load management',
        'Peak power optimization',
      ],
      color: 'var(--neon-orange)',
    },
    {
      icon: CircuitBoard,
      title: 'Smart BMS',
      description: 'Intelligent Battery Management System for optimal performance',
      details: [
        'Real-time monitoring',
        'Predictive maintenance',
        'OTA firmware updates',
        'Cloud connectivity',
      ],
      color: 'var(--neon-blue)',
    },
  ];

  const technologies = [
    {
      title: 'NMC Chemistry',
      description: 'Nickel Manganese Cobalt lithium-ion technology for high energy density',
      metric: '250 Wh/kg',
      label: 'Energy Density',
    },
    {
      title: 'LFP Chemistry',
      description: 'Lithium Iron Phosphate for enhanced safety and longevity',
      metric: '6000+',
      label: 'Cycle Life',
    },
    {
      title: 'Thermal Management',
      description: 'Advanced liquid cooling system maintains optimal temperature',
      metric: '±2°C',
      label: 'Precision',
    },
    {
      title: 'Fast Charging',
      description: 'High-power charging capability without compromising lifespan',
      metric: '350kW',
      label: 'Max Power',
    },
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
              Technology
            </span>{' '}
            & Benefits
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge innovation meets sustainable engineering. Discover what makes Legacy Battery the future of energy storage.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-2xl p-8 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all group cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${benefit.color}22`,
                    border: `2px solid ${benefit.color}44`,
                    boxShadow: `0 0 20px ${benefit.color}33`,
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: benefit.color }} />
                </div>

                <h3 className="text-2xl font-black mb-3 group-hover:text-[var(--neon-blue)] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 mb-6">{benefit.description}</p>

                <div className="space-y-2">
                  {benefit.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: benefit.color }}
                      />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Core Technologies</h2>
            <p className="text-xl text-gray-400">
              The science and engineering behind our batteries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black group-hover:text-[var(--neon-blue)] transition-colors">
                    {tech.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-3xl font-black text-[var(--neon-blue)]">
                      {tech.metric}
                    </div>
                    <div className="text-xs text-gray-500">{tech.label}</div>
                  </div>
                </div>
                <p className="text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-[var(--neon-blue)]/20 mb-20"
        >
          <h2 className="text-4xl font-black mb-8 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '95%', label: 'Efficiency', icon: Gauge },
              { value: '7000+', label: 'Cycles', icon: TrendingUp },
              { value: '25min', label: 'Fast Charge', icon: Zap },
              { value: '20yr', label: 'Warranty', icon: Award },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[var(--neon-blue)]" />
                  <div className="text-5xl font-black text-[var(--neon-blue)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass rounded-3xl p-12 border border-[var(--neon-blue)]/20"
        >
          <h2 className="text-4xl font-black mb-4">
            Experience the Future of Energy
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of customers who trust Legacy Battery for their power needs
          </p>
          <motion.button
            onClick={() => onNavigate('products')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black text-lg magnetic-btn"
            style={{
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
            }}
          >
            Explore Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
