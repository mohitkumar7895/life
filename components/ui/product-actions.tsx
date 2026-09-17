'use client';

import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { ProductCardProps } from './product-card';

export function ProductPageActions({ product }: { product: ProductCardProps }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/checkout');
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex border border-[#174A3A]/20 rounded-xl h-14 w-full sm:w-32 bg-[#FAF7EF]">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 flex items-center justify-center text-[#17231D] hover:bg-gray-100 rounded-l-xl">-</button>
          <span className="flex-1 flex items-center justify-center font-bold text-[#17231D]">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="flex-1 flex items-center justify-center text-[#17231D] hover:bg-gray-100 rounded-r-xl">+</button>
        </div>
        <Button onClick={handleAddToCart} className="flex-grow h-14 text-lg bg-transparent border-2 border-[#174A3A] text-[#174A3A] hover:bg-[#174A3A] hover:text-white rounded-xl">
          Add to Cart
        </Button>
        <Button className="w-14 h-14 flex items-center justify-center bg-[#FAF7EF] border border-[#174A3A]/10 text-[#68746C] hover:text-red-500 rounded-xl">
          <Heart className="w-6 h-6" />
        </Button>
      </div>

      <Button onClick={handleBuyNow} className="w-full h-14 text-lg bg-[#C9A45C] hover:bg-[#b08d4f] text-white rounded-xl shadow-lg shadow-[#C9A45C]/20 mb-10">
        Buy It Now
      </Button>
    </>
  );
}

export function ProductCardActions({ product }: { product: ProductCardProps }) {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button onClick={() => addToCart(product, 1)} variant="outline" className="w-full border-[#174A3A] text-[#174A3A] hover:bg-[#174A3A] hover:text-white rounded-xl">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Cart
      </Button>
      <Button onClick={() => { addToCart(product, 1); router.push('/checkout'); }} className="w-full bg-[#174A3A] hover:bg-[#3F7655] text-white rounded-xl">
        Buy Now
      </Button>
    </div>
  );
}
