import React, { useState } from 'react';
import { CartProvider } from './lib/cartContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { CheckoutPage } from './components/pages/CheckoutPage';
import { OffersPage } from './components/pages/OffersPage';
import { UpcomingPage } from './components/pages/UpcomingPage';
import { TechnologyPage } from './components/pages/TechnologyPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence, motion } from 'motion/react';

type Page = 'home' | 'products' | 'product-detail' | 'checkout' | 'offers' | 'upcoming' | 'technology' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page as Page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'product-detail':
        return <ProductDetailPage productId={selectedProductId} onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      case 'offers':
        return <OffersPage onNavigate={handleNavigate} />;
      case 'upcoming':
        return <UpcomingPage onNavigate={handleNavigate} />;
      case 'technology':
        return <TechnologyPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[var(--deep-bg)] text-white dark">
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'var(--neon-blue)' }}
          />
          <div
            className="absolute top-1/2 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'var(--neon-green)' }}
          />
          <div
            className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'var(--neon-orange)' }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(var(--neon-blue) 1px, transparent 1px),
                linear-gradient(90deg, var(--neon-blue) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        {/* Navigation */}
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Page Content with transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="relative z-10 border-t border-[var(--neon-blue)]/20 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <div className="text-xl font-black bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
                      LEGACY
                    </div>
                    <div className="text-[10px] text-[var(--neon-blue)]/60">BATTERY</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Powering the future with next-generation battery technology.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-black mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {['Home', 'Products', 'Technology', 'About'].map((link) => (
                    <button
                      key={link}
                      onClick={() => handleNavigate(link.toLowerCase())}
                      className="block text-sm text-gray-400 hover:text-[var(--neon-blue)] transition-colors"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="font-black mb-4">Products</h4>
                <div className="space-y-2">
                  {['EV Batteries', 'Solar Storage', 'Industrial', 'Home Power'].map((product) => (
                    <button
                      key={product}
                      onClick={() => handleNavigate('products')}
                      className="block text-sm text-gray-400 hover:text-[var(--neon-blue)] transition-colors"
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-black mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>sales@legacybattery.com</p>
                  <p>+1 (800) 123-4567</p>
                  <p>Tech Valley, CA 94025</p>
                  <div className="flex gap-3 mt-4">
                    {['💼', '🐦', '👤', '📷'].map((icon, i) => (
                      <button
                        key={i}
                        className="w-8 h-8 glass rounded-lg border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)] transition-all flex items-center justify-center text-lg"
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--neon-blue)]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © 2026 Legacy Battery. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <button className="hover:text-[var(--neon-blue)] transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-[var(--neon-blue)] transition-colors">
                  Terms of Service
                </button>
                <button className="hover:text-[var(--neon-blue)] transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(18, 18, 24, 0.95)',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              color: '#e8e8f0',
              backdropFilter: 'blur(12px)',
            },
          }}
        />
      </div>
    </CartProvider>
  );
}

export default App;
