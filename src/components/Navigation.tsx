import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { useCart } from '../lib/cartContext';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'offers', label: 'Offers' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'technology', label: 'Technology' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--neon-blue)]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Zap className="w-8 h-8 text-[var(--neon-blue)] group-hover:text-[var(--neon-green)] transition-colors" />
                <motion.div
                  className="absolute inset-0 blur-lg"
                  style={{ background: 'var(--neon-blue)' }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-green)] to-[var(--neon-blue)] bg-clip-text text-transparent gradient-animate">
                  LEGACY
                </span>
                <div className="text-[10px] text-[var(--neon-blue)]/60 tracking-widest">BATTERY</div>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all relative magnetic-btn ${
                    currentPage === item.id
                      ? 'text-[var(--neon-blue)]'
                      : 'text-gray-400 hover:text-[var(--neon-blue)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[var(--neon-blue)]/10 rounded-lg border border-[var(--neon-blue)]/30"
                      style={{
                        boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => onNavigate('checkout')}
                className="relative p-2 rounded-lg hover:bg-[var(--neon-blue)]/10 transition-colors magnetic-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart className="w-6 h-6 text-[var(--neon-blue)]" />
                {cartCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--neon-orange)] rounded-full flex items-center justify-center text-xs font-black"
                    style={{
                      boxShadow: '0 0 15px rgba(255, 136, 0, 0.6)',
                    }}
                  >
                    {cartCount}
                  </motion.div>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-[var(--neon-blue)]/10 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[var(--neon-blue)]" />
                ) : (
                  <Menu className="w-6 h-6 text-[var(--neon-blue)]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[var(--neon-blue)]/20 glass"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-[var(--neon-blue)]/20 text-[var(--neon-blue)] border border-[var(--neon-blue)]/30'
                        : 'text-gray-400 hover:bg-[var(--neon-blue)]/10 hover:text-[var(--neon-blue)]'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};
