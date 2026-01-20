import React from 'react';
import { motion } from 'motion/react';
import { offers } from '../../lib/productData';
import { Tag, Clock, TrendingDown } from 'lucide-react';

interface OffersPageProps {
  onNavigate: (page: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onNavigate }) => {
  const getTimeRemaining = (validUntil: string) => {
    const end = new Date(validUntil);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return { days, hours };
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
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent gradient-animate">
              Exclusive Offers
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Limited time deals on premium battery solutions
          </p>
        </motion.div>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 relative overflow-hidden rounded-3xl p-12 border border-[var(--neon-orange)]"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.1) 0%, rgba(255, 136, 0, 0.05) 100%)',
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'linear-gradient(45deg, var(--neon-orange) 25%, transparent 25%, transparent 75%, var(--neon-orange) 75%)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-[var(--neon-orange)] text-black text-sm font-black mb-4">
              ⚡ FLASH SALE
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              New Year Mega Sale
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Save up to 20% on all EV batteries + Free installation
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="glass rounded-lg px-6 py-4 border border-[var(--neon-orange)]">
                <div className="text-3xl font-black text-[var(--neon-orange)]">05</div>
                <div className="text-xs text-gray-400">Days</div>
              </div>
              <div className="text-2xl text-[var(--neon-orange)]">:</div>
              <div className="glass rounded-lg px-6 py-4 border border-[var(--neon-orange)]">
                <div className="text-3xl font-black text-[var(--neon-orange)]">14</div>
                <div className="text-xs text-gray-400">Hours</div>
              </div>
              <div className="text-2xl text-[var(--neon-orange)]">:</div>
              <div className="glass rounded-lg px-6 py-4 border border-[var(--neon-orange)]">
                <div className="text-3xl font-black text-[var(--neon-orange)]">32</div>
                <div className="text-xs text-gray-400">Minutes</div>
              </div>
            </div>
            <motion.button
              onClick={() => onNavigate('products')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-[var(--neon-orange)] text-black font-black magnetic-btn"
              style={{ boxShadow: '0 0 30px rgba(255, 136, 0, 0.5)' }}
            >
              Shop Flash Sale
            </motion.button>
          </div>
        </motion.div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => {
            const colorMap: Record<string, string> = {
              blue: 'var(--neon-blue)',
              green: 'var(--neon-green)',
              orange: 'var(--neon-orange)',
            };
            const color = colorMap[offer.bannerColor];
            const { days, hours } = getTimeRemaining(offer.validUntil);

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-2xl overflow-hidden border transition-all cursor-pointer group"
                style={{
                  borderColor: `${color}33`,
                }}
              >
                {/* Header */}
                <div
                  className="p-6 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${color}22 0%, ${color}11 100%)`,
                  }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
                    style={{ background: color }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-5 h-5" style={{ color }} />
                      <span className="text-sm font-black" style={{ color }}>
                        LIMITED OFFER
                      </span>
                    </div>
                    <h3 className="text-2xl font-black mb-2">{offer.title}</h3>
                    <p className="text-gray-400">{offer.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Discount Badge */}
                  {offer.discount > 0 && (
                    <div className="flex items-center justify-center gap-2 py-4">
                      <TrendingDown className="w-8 h-8" style={{ color }} />
                      <div className="text-5xl font-black" style={{ color }}>
                        {offer.discount}%
                      </div>
                      <div className="text-lg">OFF</div>
                    </div>
                  )}

                  {/* Time Remaining */}
                  <div
                    className="flex items-center gap-2 p-3 rounded-lg"
                    style={{
                      background: `${color}11`,
                      border: `1px solid ${color}33`,
                    }}
                  >
                    <Clock className="w-4 h-4" style={{ color }} />
                    <span className="text-sm">
                      Ends in {days} days, {hours} hours
                    </span>
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={() => onNavigate('products')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-lg font-black magnetic-btn"
                    style={{
                      background: color,
                      color: '#000',
                    }}
                  >
                    Claim Offer
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Perks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Free Shipping',
              description: 'On all orders above $10,000',
              icon: '🚚',
              color: 'var(--neon-blue)',
            },
            {
              title: 'Extended Warranty',
              description: 'Get 2 years extra warranty',
              icon: '🛡️',
              color: 'var(--neon-green)',
            },
            {
              title: 'Installation Support',
              description: 'Professional installation included',
              icon: '🔧',
              color: 'var(--neon-orange)',
            },
          ].map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 text-center"
            >
              <div className="text-5xl mb-4">{perk.icon}</div>
              <h3
                className="text-xl font-black mb-2"
                style={{ color: perk.color }}
              >
                {perk.title}
              </h3>
              <p className="text-gray-400">{perk.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
