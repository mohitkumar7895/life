import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard, { ProductCardProps } from "@/components/ui/product-card";

// Placeholder products for the shop page
const allProducts: ProductCardProps[] = [
  { id: '1', name: 'Ashwagandha Wellness Capsules', slug: 'ashwagandha-wellness-capsules', description: 'Natural stress relief and daily vitality.', price: 499, mrp: 699, discount: 28, image: '/images/products/ashwagandha.jpg', rating: 5 },
  { id: '2', name: 'Triphala Digestive Formula', slug: 'triphala-digestive-formula', description: 'Gentle detox and digestive support.', price: 399, mrp: 499, discount: 20, image: '/images/products/triphala.jpg', rating: 4 },
  { id: '3', name: 'Herbal Hair Care Oil', slug: 'herbal-hair-care-oil', description: 'Nourishing blend of Bhringraj and Amla.', price: 549, mrp: 799, discount: 31, image: '/images/products/hair-oil.jpg', rating: 5 },
  { id: '4', name: 'Turmeric Curcumin Support', slug: 'turmeric-curcumin-support', description: 'Powerful anti-inflammatory.', price: 599, mrp: 899, discount: 33, image: '/images/products/turmeric.jpg', rating: 5 },
  { id: '5', name: 'Brahmi Brain Tonic', slug: 'brahmi-brain-tonic', description: 'Enhances cognitive functions and memory.', price: 450, mrp: 550, discount: 18, image: '/images/products/brahmi.jpg', rating: 4 },
  { id: '6', name: 'Amla Vitamin C Boost', slug: 'amla-vitamin-c-boost', description: 'Immunity booster and skin health.', price: 299, mrp: 399, discount: 25, image: '/images/products/amla.jpg', rating: 4 },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />
      
      {/* Shop Header */}
      <div className="bg-[#174A3A] py-16 text-center text-white">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">Shop Wellness</h1>
        <p className="text-[#F2EBDD]/80">Authentic Ayurvedic formulations for your modern lifestyle.</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-[#174A3A]/10 p-6 sticky top-24">
            <h3 className="font-heading font-semibold text-lg text-[#17231D] mb-4">Categories</h3>
            <ul className="space-y-3 text-[#68746C] text-sm">
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> Digestive Wellness</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> Daily Energy</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> Immunity Support</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> Stress & Relaxation</label></li>
            </ul>
            
            <h3 className="font-heading font-semibold text-lg text-[#17231D] mt-8 mb-4">Price Range</h3>
            <ul className="space-y-3 text-[#68746C] text-sm">
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> Under ₹500</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> ₹500 - ₹1000</label></li>
              <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#174A3A]" /> Above ₹1000</label></li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <p className="text-[#68746C] text-sm">Showing {allProducts.length} products</p>
            <select className="border border-[#174A3A]/10 rounded-lg text-sm px-3 py-2 text-[#17231D] focus:ring-1 focus:ring-[#174A3A] outline-none bg-white">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

      </div>
      
      <Footer />
    </>
  );
}
