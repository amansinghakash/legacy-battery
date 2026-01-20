import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../../lib/productData';
import { Battery3D } from '../Battery3D';
import { ArrowLeft, Check, ShoppingCart, Star, Zap } from 'lucide-react';
import { useCart } from '../../lib/cartContext';
import { toast } from 'sonner@2.0.3';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigate,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4">Product not found</h2>
          <button
            onClick={() => onNavigate('products')}
            className="px-6 py-3 rounded-lg bg-[var(--neon-blue)] text-black font-black"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const getColorForCategory = (category: string): 'blue' | 'green' | 'orange' => {
    const colorMap: Record<string, 'blue' | 'green' | 'orange'> = {
      EV: 'blue',
      Solar: 'green',
      Industrial: 'orange',
      Home: 'blue',
    };
    return colorMap[category] || 'blue';
  };

  const color = getColorForCategory(product.category);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onNavigate('checkout');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('products')}
          className="flex items-center gap-2 mb-8 text-[var(--neon-blue)] hover:text-[var(--neon-green)] transition-colors magnetic-btn"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 3D Battery Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-3xl p-8 border border-[var(--neon-blue)]/20 flex items-center justify-center"
          >
            <Battery3D size="xl" color={color} animated interactive />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[var(--neon-blue)] text-black text-sm font-black">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="px-3 py-1 rounded-full bg-[var(--neon-green)] text-black text-sm font-black">
                    NEW
                  </span>
                )}
                <div className="flex items-center gap-1 ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--neon-orange)] text-[var(--neon-orange)]" />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">(248 reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">{product.name}</h1>
              <p className="text-xl text-gray-400">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-4 py-6 border-y border-[var(--neon-blue)]/20">
              <div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </div>
                )}
                <div className="text-5xl font-black text-white">
                  ${product.price.toLocaleString()}
                </div>
              </div>
              {product.discount && (
                <div className="px-4 py-2 rounded-lg bg-[var(--neon-orange)]/20 border border-[var(--neon-orange)] text-[var(--neon-orange)] font-black">
                  Save {product.discount}%
                </div>
              )}
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center glass rounded-lg border border-[var(--neon-blue)]/20">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-[var(--neon-blue)]/10 transition-colors"
                    >
                      -
                    </button>
                    <div className="px-6 py-2 border-x border-[var(--neon-blue)]/20 font-black">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-[var(--neon-blue)]/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    Total: <span className="text-white font-black">${(product.price * quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-4 rounded-xl glass border border-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)] transition-all font-black magnetic-btn flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
                <motion.button
                  onClick={handleBuyNow}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black magnetic-btn"
                  style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                >
                  Buy Now
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[var(--neon-blue)]" />
                Key Features
              </h3>
              <div className="space-y-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--neon-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8 border border-[var(--neon-blue)]/20"
        >
          <h2 className="text-3xl font-black mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-[var(--neon-blue)]/10">
                <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="font-black">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8 border border-[var(--neon-blue)]/20"
        >
          <h2 className="text-3xl font-black mb-6">Applications</h2>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((app, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30"
              >
                {app}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
