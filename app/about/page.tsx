import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { Leaf, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full bg-[#174A3A] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/images/testimonials/t1.jpg" 
              alt="Ayurvedic Background" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-white max-w-3xl px-4">
            <h1 className="font-heading text-5xl md:text-6xl mb-6">Our Journey</h1>
            <p className="text-xl text-[#F2EBDD]">Bringing 5000 years of Ayurvedic wisdom into the modern world.</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-heading text-4xl text-[#17231D] mb-6">The Philosophy</h2>
              <p className="text-[#68746C] text-lg leading-relaxed mb-6">
                At Fit Life Ayurvedic, we believe that true wellness stems from a deep connection with nature. Our bodies are perfectly capable of healing themselves when provided with the right botanical support and balance.
              </p>
              <p className="text-[#68746C] text-lg leading-relaxed">
                We travel across India to source the most potent herbs directly from their natural habitats. By combining this raw natural power with modern extraction techniques, we create formulations that are both highly effective and completely safe.
              </p>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl border border-[#174A3A]/10">
              <Image 
                src="/images/testimonials/t2.jpg" 
                alt="Ayurvedic Philosophy" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm border border-[#174A3A]/5">
              <div className="w-16 h-16 bg-[#F2EBDD] rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-[#3F7655]" />
              </div>
              <h3 className="font-heading text-2xl text-[#17231D] mb-4">Pure Ingredients</h3>
              <p className="text-[#68746C]">No synthetic additives, fillers, or artificial colors. Just pure, unadulterated nature.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm border border-[#174A3A]/5">
              <div className="w-16 h-16 bg-[#F2EBDD] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-[#3F7655]" />
              </div>
              <h3 className="font-heading text-2xl text-[#17231D] mb-4">Strict Quality</h3>
              <p className="text-[#68746C]">Every batch is tested for heavy metals, pesticides, and microbial contamination.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm border border-[#174A3A]/5">
              <div className="w-16 h-16 bg-[#F2EBDD] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#3F7655]" />
              </div>
              <h3 className="font-heading text-2xl text-[#17231D] mb-4">Cruelty Free</h3>
              <p className="text-[#68746C]">We love all living beings. Our products are never tested on animals.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
