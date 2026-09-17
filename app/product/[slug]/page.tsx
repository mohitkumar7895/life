import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { ShieldCheck, Leaf, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { query } from "@/lib/db";
import { notFound } from "next/navigation";
import { ProductPageActions } from "@/components/ui/product-actions";
import { getImageForSlug } from "@/lib/utils";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  let products: any[] = [];
  try {
    products = await query('SELECT * FROM Products WHERE slug = ? AND isPublished = 1', [slug]) as any[];
  } catch (error) {
    console.warn("Database connection failed, using fallback:", error);
    products = [{
      id: '1', name: 'Fallback Product', slug, description: 'Product details temporarily unavailable.', 
      price: '499', mrp: '699', discount: 28, stock: 10
    }];
  }
  
  if (!products || products.length === 0) {
    notFound();
  }
  
  const dbProduct = products[0];
  
  const product = {
    id: dbProduct.id,
    name: dbProduct.name,
    slug: dbProduct.slug,
    description: dbProduct.description,
    price: parseFloat(dbProduct.price),
    mrp: parseFloat(dbProduct.mrp),
    discount: dbProduct.discount || Math.round(((dbProduct.mrp - dbProduct.price) / dbProduct.mrp) * 100) || 0,
    image: getImageForSlug(dbProduct.slug),
    rating: 5,
    reviews: 0,
    stock: dbProduct.stock > 0 ? 'In Stock' : 'Out of Stock',
    benefits: dbProduct.benefits ? JSON.parse(dbProduct.benefits) : [dbProduct.description],
    ingredients: dbProduct.ingredients || 'Ingredients not specified.',
    usage: dbProduct.usage_info || 'Usage information not specified.'
  };
  
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
              <ProductPageActions product={product} />

              {/* Accordions */}
              <Accordion className="w-full mb-12">
                <AccordionItem value="benefits">
                  <AccordionTrigger className="text-lg font-heading text-[#17231D]">Key Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-[#68746C]">
                      {Array.isArray(product.benefits) ? product.benefits.map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <Leaf className="w-4 h-4 text-[#3F7655] mt-1 shrink-0" />
                          {b}
                        </li>
                      )) : (
                        <li className="flex items-start gap-2">
                          <Leaf className="w-4 h-4 text-[#3F7655] mt-1 shrink-0" />
                          {product.benefits}
                        </li>
                      )}
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
