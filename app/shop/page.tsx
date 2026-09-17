import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard, { ProductCardProps } from "@/components/ui/product-card";
import { query } from "@/lib/db";

export default async function ShopPage() {
  const dbProducts = await query('SELECT * FROM Products WHERE isPublished = 1 ORDER BY createdAt DESC') as any[];
  
  const allProducts: ProductCardProps[] = dbProducts.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    description: p.description,
    price: parseFloat(p.price),
    mrp: parseFloat(p.mrp),
    discount: p.discount || Math.round(((p.mrp - p.price) / p.mrp) * 100) || 0,
    image: '/images/products/placeholder.jpg',
    rating: 5,
  }));

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
