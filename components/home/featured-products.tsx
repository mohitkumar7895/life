import ProductCard, { ProductCardProps } from '@/components/ui/product-card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProducts: ProductCardProps[] = [
  {
    id: '1',
    name: 'Ashwagandha Wellness Capsules',
    slug: 'ashwagandha-wellness-capsules',
    description: 'Natural stress relief and daily vitality support with pure Ashwagandha root extract.',
    price: 499,
    mrp: 699,
    discount: 28,
    image: '/images/products/ashwagandha.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Triphala Digestive Formula',
    slug: 'triphala-digestive-formula',
    description: 'Gentle detox and digestive support blending Amla, Haritaki, and Bibhitaki.',
    price: 399,
    mrp: 499,
    discount: 20,
    image: '/images/products/triphala.jpg',
    rating: 4,
  },
  {
    id: '3',
    name: 'Herbal Hair Care Oil',
    slug: 'herbal-hair-care-oil',
    description: 'Nourishing blend of Bhringraj and Amla for strong, healthy hair.',
    price: 549,
    mrp: 799,
    discount: 31,
    image: '/images/products/hair-oil.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Turmeric Curcumin Support',
    slug: 'turmeric-curcumin-support',
    description: 'Powerful anti-inflammatory and antioxidant support for overall wellness.',
    price: 599,
    mrp: 899,
    discount: 33,
    image: '/images/products/turmeric.jpg',
    rating: 5,
  },
];

export default function FeaturedProducts() {
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
