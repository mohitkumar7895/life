import Link from 'next/link';

export default function OfferSection() {
  return (
    <section className="py-20 bg-[#174A3A] relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3F7655] rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#C9A45C] rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 bg-[#C9A45C]/20 text-[#C9A45C] border border-[#C9A45C]/30 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
          Limited Time Offer
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Begin Your Wellness Journey
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Special introductory offers available on selected wellness products. Experience the purity of Ayurveda today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/shop?offer=intro"
            className="bg-[#C9A45C] hover:bg-[#b08d4f] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            SHOP NOW
          </Link>
          <Link 
            href="/shop"
            className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
