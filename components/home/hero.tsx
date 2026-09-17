'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-ivory overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#174A3A]/10 text-[#174A3A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6"
            >
              HEALTH EDUCATION • HEALTHY HABITS
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-[#17231D] leading-[1.1] mb-6"
            >
              Welcome to FitLife Wellness <br />
              <span className="text-[#3F7655] text-3xl md:text-4xl lg:text-5xl mt-2 inline-block">A healthier lifestyle starts with better everyday choices.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#68746C] mb-10 leading-relaxed space-y-4"
            >
              <p>FitLife Wellness is a community in Sector 8, Noida, dedicated to helping you understand nutrition, develop healthier habits, and stay consistent.</p>
              <p>Through expert guidance, accountability, and a supportive environment, we help you work towards a more active lifestyle.</p>
              <p className="font-medium text-[#17231D]">Start taking care of your health today.<br/>Learn. Improve. Stay Consistent. Live Fit.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="bg-[#174A3A] hover:bg-[#3F7655] text-white px-8 py-4 rounded-xl font-medium text-center transition-colors shadow-lg shadow-[#174A3A]/20"
              >
                START YOUR JOURNEY
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-[#174A3A] text-[#174A3A] hover:bg-[#174A3A] hover:text-white px-8 py-4 rounded-xl font-medium text-center transition-colors"
              >
                LEARN MORE
              </Link>
            </motion.div>
          </div>

          {/* Right Image/Visuals */}
          <div className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img
                src="/images/hero.jpg"
                alt="Fit Life Ayurvedic Premium Wellness"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-6 left-2 md:top-10 md:left-0 bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 border border-white/50 z-20"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#174A3A]/10 flex items-center justify-center text-sm md:text-xl">🍎</div>
              <span className="font-semibold text-xs md:text-sm text-[#17231D]">Nutrition</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-0 md:bottom-20 md:right-10 bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 border border-white/50 z-20"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] text-sm md:text-base">🤝</div>
              <span className="font-semibold text-xs md:text-sm text-[#17231D]">Community</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 right-2 md:-right-4 bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 border border-white/50"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#3F7655]/10 flex items-center justify-center text-sm md:text-xl">💪</div>
              <span className="font-semibold text-xs md:text-sm text-[#17231D]">Active Lifestyle</span>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#3F7655] opacity-5 blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#C9A45C] opacity-10 blur-3xl mix-blend-multiply"></div>
    </section>
  );
}
