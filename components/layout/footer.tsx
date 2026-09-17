import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#17231D] text-[#FAF7EF] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col inline-block">
              <span className="font-heading text-3xl font-bold text-white leading-none">
                FIT LIFE
              </span>
              <span className="text-xs tracking-[0.2em] text-[#C9A45C] font-semibold mt-1 uppercase">
                Ayurvedic
              </span>
            </Link>
            <p className="text-[#68746C] max-w-sm">
              Wellness rooted in nature and inspired by the ancient wisdom of Ayurveda. Carefully crafted for modern lifestyles.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'Our Story', 'Ayurveda', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[#68746C] hover:text-[#C9A45C] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Customer Care</h4>
            <ul className="space-y-4">
              {['Shipping Policy', 'Refund Policy', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[#68746C] hover:text-[#C9A45C] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-heading text-lg text-white mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#174A3A] flex items-center justify-center text-white hover:bg-[#3F7655] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#174A3A] flex items-center justify-center text-white hover:bg-[#3F7655] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#174A3A] flex items-center justify-center text-white hover:bg-[#3F7655] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            <p className="text-[#68746C] mt-6 text-sm">
              Products displayed are intended for general wellness and are not a substitute for professional medical advice.
            </p>
          </div>
        </div>

        <div className="border-t border-[#174A3A]/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#68746C]">
          <p>© {new Date().getFullYear()} Fit Life Ayurvedic. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img src="/icons/visa.svg" alt="Visa" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="/icons/mastercard.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="/icons/upi.svg" alt="UPI" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
