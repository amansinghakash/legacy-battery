import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../lib/cartContext';
import { Trash2, Plus, Minus, CreditCard, Smartphone, Building, Wallet, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'card',
  });

  const subtotal = getCartTotal();
  const tax = subtotal * 0.18; // 18% tax
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Validate form
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'zip'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate order placement
    setStep('success');
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add some products to get started</p>
          <motion.button
            onClick={() => onNavigate('products')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black magnetic-btn"
          >
            Browse Products
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Checkout
            </span>
          </h1>
        </motion.div>

        {/* Progress Steps */}
        {step !== 'success' && (
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4">
              {['cart', 'shipping', 'payment'].map((s, i) => (
                <React.Fragment key={s}>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${
                        step === s
                          ? 'bg-[var(--neon-blue)] text-black scale-110'
                          : ['cart', 'shipping'].indexOf(step) > i
                          ? 'bg-[var(--neon-green)] text-black'
                          : 'glass border border-[var(--neon-blue)]/20 text-gray-400'
                      }`}
                    >
                      {['cart', 'shipping'].indexOf(step) > i ? '✓' : i + 1}
                    </div>
                    <span className="hidden md:inline capitalize">{s}</span>
                  </div>
                  {i < 2 && (
                    <div
                      className={`h-1 w-20 rounded transition-all ${
                        ['cart', 'shipping'].indexOf(step) > i
                          ? 'bg-[var(--neon-green)]'
                          : 'bg-[var(--neon-blue)]/20'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Cart Step */}
          {step === 'cart' && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20"
                  >
                    <div className="flex gap-6">
                      <div className="w-24 h-24 glass rounded-lg flex items-center justify-center">
                        <div className="text-4xl">🔋</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {item.capacity} • {item.voltage}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center glass rounded-lg border border-[var(--neon-blue)]/20">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-[var(--neon-blue)]/10 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <div className="px-4 font-black">{item.quantity}</div>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-[var(--neon-blue)]/10 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-red-500/10 text-red-500 transition-colors rounded-lg"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black">${(item.price * item.quantity).toLocaleString()}</div>
                        <div className="text-sm text-gray-400">${item.price.toLocaleString()} each</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <OrderSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
                onContinue={() => setStep('shipping')}
              />
            </motion.div>
          )}

          {/* Shipping Step */}
          {step === 'shipping' && (
            <motion.div
              key="shipping"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2 glass rounded-2xl p-8 border border-[var(--neon-blue)]/20">
                <h2 className="text-2xl font-black mb-6">Shipping Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="123 Main St, Apt 4B"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="NY"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      placeholder="10001"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep('cart')}
                    className="px-6 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)] transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep('payment')}
                    className="flex-1 px-6 py-3 rounded-lg bg-[var(--neon-blue)] text-black font-black magnetic-btn"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
              <OrderSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
              />
            </motion.div>
          )}

          {/* Payment Step */}
          {step === 'payment' && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2 space-y-6">
                <div className="glass rounded-2xl p-8 border border-[var(--neon-blue)]/20">
                  <h2 className="text-2xl font-black mb-6">Payment Method</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                      { id: 'upi', label: 'UPI', icon: Smartphone },
                      { id: 'netbanking', label: 'Net Banking', icon: Building },
                      { id: 'wallet', label: 'Digital Wallet', icon: Wallet },
                    ].map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                          className={`p-4 rounded-lg border transition-all ${
                            formData.paymentMethod === method.id
                              ? 'border-[var(--neon-blue)] bg-[var(--neon-blue)]/10'
                              : 'border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50'
                          }`}
                        >
                          <Icon className="w-6 h-6 mb-2 text-[var(--neon-blue)]" />
                          <div className="font-black">{method.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Payment Form Mock */}
                <div className="glass rounded-2xl p-8 border border-[var(--neon-blue)]/20">
                  <h3 className="text-xl font-black mb-4">Enter Payment Details</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number / UPI ID"
                      className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full px-4 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 focus:border-[var(--neon-blue)] outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('shipping')}
                    className="px-6 py-3 rounded-lg glass border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)] transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 px-6 py-4 rounded-lg bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black magnetic-btn text-lg"
                    style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                  >
                    Place Order - ${total.toLocaleString()}
                  </button>
                </div>
              </div>
              <OrderSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
              />
            </motion.div>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="mb-6"
              >
                <CheckCircle2 className="w-32 h-32 mx-auto text-[var(--neon-green)]" />
              </motion.div>
              <h2 className="text-5xl font-black mb-4">Order Placed Successfully!</h2>
              <p className="text-xl text-gray-400 mb-8">
                Thank you for choosing Legacy Battery. Your order will be delivered soon.
              </p>
              <div className="glass rounded-2xl p-6 border border-[var(--neon-green)]/30 max-w-md mx-auto mb-8">
                <div className="text-sm text-gray-400 mb-2">Order ID</div>
                <div className="text-2xl font-black text-[var(--neon-green)]">
                  #LB{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
              </div>
              <motion.button
                onClick={() => onNavigate('home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black font-black magnetic-btn"
              >
                Back to Home
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const OrderSummary: React.FC<{
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onContinue?: () => void;
}> = ({ subtotal, tax, shipping, total, onContinue }) => (
  <div className="glass rounded-2xl p-6 border border-[var(--neon-blue)]/20 h-fit sticky top-24">
    <h3 className="text-xl font-black mb-6">Order Summary</h3>
    <div className="space-y-4 mb-6">
      <div className="flex justify-between">
        <span className="text-gray-400">Subtotal</span>
        <span className="font-black">${subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Tax (18%)</span>
        <span className="font-black">${tax.toLocaleString()}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Shipping</span>
        <span className="font-black">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
      </div>
      {shipping === 0 && (
        <div className="text-xs text-[var(--neon-green)]">
          ✓ Free shipping on orders over $10,000
        </div>
      )}
      <div className="border-t border-[var(--neon-blue)]/20 pt-4">
        <div className="flex justify-between items-end">
          <span className="text-xl font-black">Total</span>
          <span className="text-3xl font-black text-[var(--neon-blue)]">
            ${total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
    {onContinue && (
      <button
        onClick={onContinue}
        className="w-full py-4 rounded-lg bg-[var(--neon-blue)] text-black font-black magnetic-btn"
      >
        Continue to Shipping
      </button>
    )}
  </div>
);
