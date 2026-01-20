import React from 'react';
import { motion } from 'motion/react';
import { upcomingProducts } from '../../lib/productData';
import { Battery3D } from '../Battery3D';
import { Calendar, Sparkles, Bell } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface UpcomingPageProps {
  onNavigate: (page: string) => void;
}

export const UpcomingPage: React.FC<UpcomingPageProps> = ({ onNavigate }) => {
  const handleNotifyMe = (productName: string) => {
    toast.success(`You'll be notified when ${productName} launches!`);
  };

  const getCountdown = (launchDate: string) => {
    const launch = new Date(launchDate);
    const now = new Date();
    const diff = launch.getTime() - now.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-20 h-20 text-[var(--neon-blue)] mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-green)] to-[var(--neon-orange)] bg-clip-text text-transparent gradient-animate">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get ready for the next generation of battery technology. Revolutionary innovations that will change the future of energy storage.
          </p>
        </motion.div>

        {/* Upcoming Products */}
        <div className="space-y-12">
          {upcomingProducts.map((product, i) => {
            const daysUntilLaunch = getCountdown(product.launchDate);
            const colorMap: Record<string, 'blue' | 'green' | 'orange'> = {
              EV: 'blue',
              Solar: 'green',
              Industrial: 'orange',
              Home: 'blue',
            };
            const color = colorMap[product.category as keyof typeof colorMap] || 'blue';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`glass rounded-3xl overflow-hidden border border-[var(--neon-${color})]/20 hover:border-[var(--neon-${color})]/50 transition-all`}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* 3D Preview */}
                  <div className="relative">
                    <div className="relative glass rounded-2xl p-8 border border-[var(--neon-blue)]/20 flex items-center justify-center">
                      {/* Blur Effect */}
                      <motion.div
                        className="absolute inset-0 backdrop-blur-md bg-black/30 rounded-2xl z-10 flex items-center justify-center"
                        animate={{
                          opacity: [0.7, 0.9, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        <div className="text-center">
                          <div className="text-6xl mb-4">🔒</div>
                          <div className="text-2xl font-black text-[var(--neon-blue)]">
                            CLASSIFIED
                          </div>
                        </div>
                      </motion.div>
                      <Battery3D size="lg" color={color} animated interactive />
                    </div>
                    
                    {/* Coming Soon Badge */}
                    <div className="absolute -top-4 -right-4 z-20">
                      <motion.div
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black shadow-lg"
                        style={{
                          boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
                        }}
                      >
                        COMING SOON
                      </motion.div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-[var(--neon-blue)] text-black text-sm font-black">
                        {product.category}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-4xl font-black mb-4">{product.name}</h2>
                      <p className="text-xl text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Specs Preview */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-[var(--neon-blue)]/20">
                      <div>
                        <div className="text-sm text-gray-500">Capacity</div>
                        <div className="text-2xl font-black text-[var(--neon-blue)]">
                          {product.capacity}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Voltage</div>
                        <div className="text-2xl font-black text-[var(--neon-green)]">
                          {product.voltage}
                        </div>
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-6 h-6 text-[var(--neon-blue)]" />
                        <h3 className="text-xl font-black">Launch Countdown</h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 glass rounded-lg p-4 border border-[var(--neon-blue)]/30 text-center">
                          <motion.div
                            className="text-4xl font-black text-[var(--neon-blue)]"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                            }}
                          >
                            {daysUntilLaunch}
                          </motion.div>
                          <div className="text-sm text-gray-400 mt-1">Days</div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400 mb-2">Expected Launch</div>
                          <div className="text-lg font-black">
                            {new Date(product.launchDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Notify Button */}
                    <motion.button
                      onClick={() => handleNotifyMe(product.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black magnetic-btn flex items-center justify-center gap-2"
                      style={{
                        boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
                      }}
                    >
                      <Bell className="w-5 h-5" />
                      Notify Me at Launch
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Innovation Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-12 border border-[var(--neon-blue)]/20 text-center"
        >
          <h2 className="text-4xl font-black mb-6">
            Next-Gen Innovation
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Our upcoming battery solutions feature breakthrough technologies including solid-state cells, graphene electrodes, and quantum dot enhancement for unprecedented performance and longevity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Solid-State Technology',
                description: '2x energy density',
                icon: '⚡',
              },
              {
                title: 'Ultra-Fast Charging',
                description: '5-minute full charge',
                icon: '🚀',
              },
              {
                title: 'Extended Lifespan',
                description: '10,000+ cycles',
                icon: '♾️',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                <p className="text-[var(--neon-blue)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
