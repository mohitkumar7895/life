import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ShieldCheck, Leaf, ArrowLeft, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock product data for display
const product = {
  id: '1',
  name: 'Ashwagandha Wellness Capsules',
  slug: 'ashwagandha-wellness-capsules',
  description: 'Pure KSM-66 Ashwagandha root extract for stress relief, improved energy levels, and overall vitality. Traditionally used in Ayurveda to balance the body and mind.',
  price: 499,
  mrp: 699,
  discount: 28,
  image: '/images/products/ashwagandha.jpg',
  rating: 4.8,
  reviews: 124,
  stock: 'In Stock',
  benefits: [
    'Helps reduce stress and anxiety',
    'Supports healthy energy levels',
    'Promotes restful sleep',
    'Enhances cognitive function'
  ],
  ingredients: 'Each capsule contains: Ashwagandha (Withania somnifera) root extract - 500mg (Standardized to 5% withanolides).',
  usage: 'Take 1-2 capsules twice daily with water or warm milk, preferably after meals, or as directed by your healthcare practitioner.'
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch product by slug here
  
  return (
    <>
      <Navbar />
      
      <div className="bg-white min-h-screen py-12">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-[#68746C] mb-8 gap-2">
            <Link href="/" className="hover:text-[#174A3A]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#174A3A]">Shop</Link>
            <span>/</span>
            <span className="text-[#17231D] font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-[#F2EBDD] rounded-3xl overflow-hidden relative flex items-center justify-center border border-[#174A3A]/5">
                <span className="text-[#174A3A]/20 text-2xl font-heading">Product Image</span>
                {product.discount > 0 && (
                  <span className="absolute top-6 left-6 bg-[#C9A45C] text-white font-bold px-4 py-1.5 rounded-full shadow-md">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center cursor-pointer border-2 ${i === 1 ? 'border-[#174A3A] bg-[#F2EBDD]' : 'border-transparent bg-gray-100 hover:border-[#174A3A]/30'}`}>
                    <span className="text-[10px] text-gray-400">Thumb</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-[#C9A45C] fill-[#C9A45C]' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 font-medium text-[#17231D]">{product.rating}</span>
                </div>
                <span className="text-[#68746C] text-sm underline cursor-pointer hover:text-[#174A3A]">
                  Read {product.reviews} Reviews
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl md:text-4xl font-bold text-[#174A3A]">₹{product.price}</span>
                {product.mrp > product.price && (
                  <span className="text-lg text-gray-400 line-through">₹{product.mrp}</span>
                )}
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  {product.stock}
                </span>
              </div>

              <p className="text-[#68746C] text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex border border-[#174A3A]/20 rounded-xl h-14 w-full sm:w-32 bg-[#FAF7EF]">
                  <button className="flex-1 flex items-center justify-center text-[#17231D] hover:bg-gray-100 rounded-l-xl">-</button>
                  <span className="flex-1 flex items-center justify-center font-bold text-[#17231D]">1</span>
                  <button className="flex-1 flex items-center justify-center text-[#17231D] hover:bg-gray-100 rounded-r-xl">+</button>
                </div>
                <Button className="flex-grow h-14 text-lg bg-transparent border-2 border-[#174A3A] text-[#174A3A] hover:bg-[#174A3A] hover:text-white rounded-xl">
                  Add to Cart
                </Button>
                <Button className="w-14 h-14 flex items-center justify-center bg-[#FAF7EF] border border-[#174A3A]/10 text-[#68746C] hover:text-red-500 rounded-xl">
                  <Heart className="w-6 h-6" />
                </Button>
              </div>

              <Button className="w-full h-14 text-lg bg-[#C9A45C] hover:bg-[#b08d4f] text-white rounded-xl shadow-lg shadow-[#C9A45C]/20 mb-10">
                Buy It Now
              </Button>

              {/* Accordions */}
              <Accordion className="w-full mb-12">
                <AccordionItem value="benefits">
                  <AccordionTrigger className="text-lg font-heading text-[#17231D]">Key Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-[#68746C]">
                      {product.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Leaf className="w-4 h-4 text-[#3F7655] mt-1 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ingredients">
                  <AccordionTrigger className="text-lg font-heading text-[#17231D]">Ingredients</AccordionTrigger>
                  <AccordionContent className="text-[#68746C]">
                    {product.ingredients}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="usage">
                  <AccordionTrigger className="text-lg font-heading text-[#17231D]">How To Use</AccordionTrigger>
                  <AccordionContent className="text-[#68746C]">
                    {product.usage}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-[#FAF7EF] rounded-xl border border-[#174A3A]/5">
                  <ShieldCheck className="w-8 h-8 text-[#174A3A]" />
                  <span className="text-sm font-medium text-[#17231D]">Quality Assured</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#FAF7EF] rounded-xl border border-[#174A3A]/5">
                  <Leaf className="w-8 h-8 text-[#174A3A]" />
                  <span className="text-sm font-medium text-[#17231D]">100% Natural</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
