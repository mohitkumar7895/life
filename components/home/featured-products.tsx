import ProductCard, { ProductCardProps } from '@/components/ui/product-card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { query } from '@/lib/db';

export default async function FeaturedProducts() {
  const dbProducts = await query('SELECT * FROM Products WHERE isPublished = 1 ORDER BY createdAt DESC LIMIT 4') as any[];
  
  const featuredProducts: ProductCardProps[] = dbProducts.map((p) => ({
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-4">
              Nature's Best, <span className="text-[#3F7655]">Crafted for You</span>
            </h2>
            <p className="text-[#68746C]">
              Discover our most loved Ayurvedic formulations, carefully crafted to support your daily wellness journey.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="group flex items-center text-[#174A3A] font-semibold hover:text-[#C9A45C] transition-colors whitespace-nowrap"
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
