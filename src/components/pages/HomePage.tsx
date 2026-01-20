import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Battery3D } from '../Battery3D';
import { ArrowRight, Zap, Shield, Leaf, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Charging',
      description: 'Revolutionary charging technology gets you powered up in minutes',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Maximum Safety',
      description: 'Advanced protection systems ensure complete peace of mind',
      color: 'green',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and processes for a greener future',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Long Lifespan',
      description: 'Industry-leading cycle life delivers exceptional value',
      color: 'blue',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(var(--neon-blue)22 1px, transparent 1px),
                linear-gradient(90deg, var(--neon-blue)22 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, var(--neon-green) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full glass border border-[var(--neon-blue)]/30"
              >
                <span className="text-[var(--neon-blue)] text-sm tracking-wider">
                  ⚡ NEXT-GENERATION POWER
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-green)] to-[var(--neon-orange)] bg-clip-text text-transparent gradient-animate">
                  Powering the Future
                </span>
                <br />
                <span className="text-white">with Legacy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                Experience the pinnacle of battery technology. Engineered for performance,
                designed for sustainability, built to last.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={() => onNavigate('checkout')}
                  className="group relative px-8 py-4 rounded-xl overflow-hidden magnetic-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] opacity-100 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <span className="relative flex items-center gap-2 text-black font-black">
                    Order Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('products')}
                  className="px-8 py-4 rounded-xl glass border border-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)] transition-all magnetic-btn hover-glow-blue"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-black">Explore Products</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { value: '7000+', label: 'Cycles' },
                  { value: '25min', label: 'Fast Charge' },
                  { value: '20yr', label: 'Warranty' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-[var(--neon-blue)]">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* 3D Battery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <Battery3D size="xl" color="blue" animated interactive />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[var(--neon-blue)] flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[var(--neon-blue)]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
                Legacy
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Industry-leading technology that powers tomorrow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const colors = {
                blue: 'var(--neon-blue)',
                green: 'var(--neon-green)',
                orange: 'var(--neon-orange)',
              };
              const color = colors[feature.color as keyof typeof colors];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all cursor-pointer group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${color}22`,
                      border: `1px solid ${color}44`,
                      boxShadow: `0 0 20px ${color}33`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <h3 className="text-xl font-black mb-2 text-white group-hover:text-[var(--neon-blue)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass rounded-3xl p-12 md:p-16 border border-[var(--neon-blue)]/30 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                style={{ background: 'var(--neon-blue)' }}
              />
              <div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
                style={{ background: 'var(--neon-green)' }}
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Power Your Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of satisfied customers who trust Legacy Battery for their energy needs
              </p>
              <motion.button
                onClick={() => onNavigate('products')}
                className="px-10 py-5 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black text-lg magnetic-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
                }}
              >
                Browse All Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
