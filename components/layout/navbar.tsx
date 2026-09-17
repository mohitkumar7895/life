'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Our Story', href: '/about' },
    { name: 'Ayurveda', href: '/ayurveda' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div className="bg-[#174A3A] text-[#FAF7EF] text-center py-2 text-sm font-medium tracking-wide">
        Pure Ayurvedic Wellness • Natural Ingredients • Trusted Quality
      </div>
      
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#FAF7EF]/90 backdrop-blur-md shadow-sm py-3' : 'bg-[#FAF7EF] py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#17231D]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center justify-center">
            <span className="font-heading text-2xl md:text-3xl font-bold text-[#174A3A] leading-none">
              FIT LIFE
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#C9A45C] font-semibold mt-1 uppercase">
              Ayurvedic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#17231D] hover:text-[#3F7655] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A45C] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 text-[#17231D]">
            <button 
              aria-label="Search" 
              className="hover:text-[#3F7655] transition-colors hidden sm:block"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" aria-label="Wishlist" className="hover:text-[#3F7655] transition-colors hidden sm:block">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/cart" aria-label="Cart" className="hover:text-[#3F7655] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A45C] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <Link href="/login" aria-label="Account" className="hover:text-[#3F7655] transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-3/4 max-w-sm bg-[#FAF7EF] z-[70] shadow-xl p-6 md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <Link href="/" className="flex flex-col" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-heading text-2xl font-bold text-[#174A3A] leading-none">
                    FIT LIFE
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#C9A45C] font-semibold mt-1 uppercase">
                    Ayurvedic
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#17231D] p-2 bg-[#F2EBDD] rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#17231D] hover:text-[#3F7655]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-12 pt-8 border-t border-[#174A3A]/10 flex space-x-6">
                <Link href="/login" className="flex items-center space-x-2 text-[#17231D]">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
                <Link href="/wishlist" className="flex items-center space-x-2 text-[#17231D]">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100] flex items-start justify-center pt-24 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF7EF] w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 text-[#68746C] hover:text-[#17231D] p-2 bg-[#F2EBDD] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-heading font-semibold text-[#17231D] mb-6">What are you looking for?</h2>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products, categories..." 
                  className="w-full bg-white border-2 border-[#174A3A]/10 rounded-xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:border-[#174A3A]/40 focus:ring-0 transition-colors"
                  autoFocus
                />
                <Search className="w-6 h-6 text-[#68746C] absolute left-4 top-1/2 -translate-y-1/2" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#174A3A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3F7655] transition-colors">
                  Search
                </button>
              </div>
              
              <div className="mt-8">
                <p className="text-sm font-medium text-[#68746C] mb-3 uppercase tracking-wider">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Ashwagandha', 'Immunity Boost', 'Digestive Health', 'Hair Oils'].map(term => (
                    <span key={term} className="bg-white border border-[#174A3A]/10 px-4 py-2 rounded-full text-sm text-[#17231D] hover:border-[#174A3A] cursor-pointer transition-colors">
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
