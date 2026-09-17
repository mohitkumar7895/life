'use client';

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] bg-[#FAF7EF] flex items-center justify-center py-12">
        <div className="bg-white rounded-3xl p-8 md:p-16 max-w-2xl w-full mx-4 text-center shadow-xl border border-[#174A3A]/10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-[#3F7655]" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-[#68746C] text-lg mb-8">
            Thank you for choosing Fit Life Ayurvedic. Your wellness journey begins soon. We'll send shipping updates to your email.
          </p>
          
          <div className="bg-[#FAF7EF] p-6 rounded-2xl inline-block mb-10 text-left border border-dashed border-[#174A3A]/30">
            <p className="text-sm text-[#68746C] mb-1">Order Number</p>
            <p className="font-mono text-xl font-bold text-[#174A3A]">FLA-{Math.floor(Math.random() * 900000) + 100000}</p>
          </div>
          
          <div>
            <Link href="/shop">
              <Button className="bg-[#174A3A] hover:bg-[#3F7655] text-white px-8 h-12 rounded-xl text-lg shadow-lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
