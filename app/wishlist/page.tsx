'use client';

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl text-[#17231D] mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#174A3A] fill-current" /> Your Wishlist
          </h1>

          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#174A3A]/5 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-[#F2EBDD] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-[#68746C]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#17231D] mb-4">Your wishlist is empty</h2>
            <p className="text-[#68746C] mb-8">
              Save your favorite wellness products here to find them later.
            </p>
            <Link href="/shop">
              <Button className="bg-[#174A3A] hover:bg-[#3F7655] text-white px-8 h-12 rounded-xl text-lg">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
