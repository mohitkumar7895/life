import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  image: string;
  rating: number;
}

export default function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#174A3A]/5 flex flex-col">
      <div className="relative h-64 bg-[#F2EBDD] overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.discount > 0 && (
            <span className="bg-[#174A3A] text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.discount}% OFF
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#68746C] hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm">
          <Heart className="w-4 h-4" />
        </button>

        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/product/${product.slug}`} className="block flex-grow">
          <h3 className="font-heading font-semibold text-xl text-[#17231D] mb-2 group-hover:text-[#3F7655] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#68746C] text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
        </Link>

        <div className="mt-auto">
          {/* Rating */}
          <div className="flex items-center mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className={`w-4 h-4 ${star <= product.rating ? 'text-[#C9A45C]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-[#68746C] ml-2">({product.rating}.0)</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#17231D]">₹{product.price}</span>
              {product.mrp > product.price && (
                <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full border-[#174A3A] text-[#174A3A] hover:bg-[#174A3A] hover:text-white rounded-xl">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Button>
            <Button className="w-full bg-[#174A3A] hover:bg-[#3F7655] text-white rounded-xl">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
