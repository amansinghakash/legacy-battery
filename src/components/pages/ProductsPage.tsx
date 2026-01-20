import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products, Product } from '../../lib/productData';
import { Battery3D } from '../Battery3D';
import { Filter, Star, TrendingUp } from 'lucide-react';
import { useCart } from '../../lib/cartContext';

interface ProductsPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('All');
  const [selectedVoltage, setSelectedVoltage] = useState<string>('All');
  const { addToCart } = useCart();

  const categories = ['All', 'EV', 'Solar', 'Industrial', 'Home'];
  const capacities = ['All', '5 kWh', '10 kWh', '15 kWh', '30 kWh', '60 kWh', '100 kWh', '200 kWh', '500 kWh'];
  const voltages = ['All', '24V', '48V', '96V', '350V', '400V', '800V', '1000V'];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    if (selectedCapacity !== 'All' && product.capacity !== selectedCapacity) return false;
    if (selectedVoltage !== 'All' && product.voltage !== selectedVoltage) return false;
    return true;
  });

  const getColorForCategory = (category: string): 'blue' | 'green' | 'orange' => {
    const colorMap: Record<string, 'blue' | 'green' | 'orange'> = {
      EV: 'blue',
      Solar: 'green',
      Industrial: 'orange',
      Home: 'blue',
    };
    return colorMap[category] || 'blue';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Discover the perfect battery solution for your needs
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 glass rounded-2xl p-6 border border-[var(--neon-blue)]/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-[var(--neon-blue)]" />
            <h3 className="text-xl font-black">Filters</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm text-gray-400 mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg transition-all magnetic-btn ${
                      selectedCategory === cat
                        ? 'bg-[var(--neon-blue)] text-black font-black'
                        : 'glass border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Capacity Filter */}
            <div>
              <label className="block text-sm text-gray-400 mb-3">Capacity</label>
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="w-full px-4 py-2 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
              >
                {capacities.map((cap) => (
                  <option key={cap} value={cap}>
                    {cap}
                  </option>
                ))}
              </select>
            </div>

            {/* Voltage Filter */}
            <div>
              <label className="block text-sm text-gray-400 mb-3">Voltage</label>
              <select
                value={selectedVoltage}
                onChange={(e) => setSelectedVoltage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
              >
                {voltages.map((volt) => (
                  <option key={volt} value={volt}>
                    {volt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              color={getColorForCategory(product.category)}
              onViewDetails={() => onNavigate('product-detail', product.id)}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-500">No products found matching your filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  index: number;
  color: 'blue' | 'green' | 'orange';
  onViewDetails: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  color,
  onViewDetails,
  onAddToCart,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: {
      border: 'border-[var(--neon-blue)]',
      text: 'text-[var(--neon-blue)]',
      bg: 'bg-[var(--neon-blue)]',
      glow: 'hover-glow-blue',
    },
    green: {
      border: 'border-[var(--neon-green)]',
      text: 'text-[var(--neon-green)]',
      bg: 'bg-[var(--neon-green)]',
      glow: 'hover-glow-green',
    },
    orange: {
      border: 'border-[var(--neon-orange)]',
      text: 'text-[var(--neon-orange)]',
      bg: 'bg-[var(--neon-orange)]',
      glow: 'hover-glow-green',
    },
  };

  const colorClass = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`glass rounded-2xl overflow-hidden border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all cursor-pointer group ${colorClass.glow}`}
    >
      {/* Product Image/3D Battery */}
      <div className="relative h-64 flex items-center justify-center p-6 overflow-hidden">
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: isHovered
              ? `radial-gradient(circle at 50% 50%, var(--neon-${color}) 0%, transparent 70%)`
              : `radial-gradient(circle at 50% 50%, var(--neon-${color}) 0%, transparent 50%)`,
          }}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="px-3 py-1 rounded-full bg-[var(--neon-green)] text-black text-xs font-black">
              NEW
            </span>
          )}
          {product.discount && (
            <span className="px-3 py-1 rounded-full bg-[var(--neon-orange)] text-black text-xs font-black">
              -{product.discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-black">
              OUT OF STOCK
            </span>
          )}
        </div>

        <Battery3D size="md" color={color} animated={isHovered} interactive={false} />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-start justify-between mb-2">
            <span className={`text-xs font-black px-2 py-1 rounded ${colorClass.bg} text-black`}>
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className={`w-4 h-4 fill-[var(--neon-orange)] ${colorClass.text}`} />
              <span className="text-sm">4.9</span>
            </div>
          </div>
          <h3 className="text-xl font-black mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-[var(--neon-blue)]/20">
          <div>
            <div className="text-xs text-gray-500">Capacity</div>
            <div className={`font-black ${colorClass.text}`}>{product.capacity}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Voltage</div>
            <div className={`font-black ${colorClass.text}`}>{product.voltage}</div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="text-3xl font-black text-white">
              ${product.price.toLocaleString()}
            </div>
          </div>
          {product.discount && (
            <div className="flex items-center gap-1 text-[var(--neon-green)]">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-black">Save ${(product.originalPrice! - product.price).toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            onClick={onViewDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 rounded-lg glass border border-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)] transition-all font-black magnetic-btn"
          >
            View Details
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-3 rounded-lg ${colorClass.bg} text-black font-black magnetic-btn`}
            disabled={!product.inStock}
            style={{
              opacity: product.inStock ? 1 : 0.5,
              cursor: product.inStock ? 'pointer' : 'not-allowed',
            }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
