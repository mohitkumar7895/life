'use client';

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useCart } from "@/context/CartContext";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const tax = getCartTotal() * 0.18; // 18% GST estimate
  const total = getCartTotal() + tax;

  return (
    <>
      <Navbar />
      
      <div className="bg-[#FAF7EF] min-h-screen py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl text-[#17231D] mb-8 flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-[#174A3A]" /> Your Cart
          </h1>

          {cart.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#174A3A]/5 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-[#F2EBDD] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-[#68746C]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#17231D] mb-4">Your cart is empty</h2>
              <p className="text-[#68746C] mb-8">
                Looks like you haven't added any wellness products to your cart yet.
              </p>
              <Link href="/shop">
                <Button className="bg-[#174A3A] hover:bg-[#3F7655] text-white px-8 h-12 rounded-xl text-lg">
                  Explore Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#174A3A]/5 flex flex-col sm:flex-row gap-6 items-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#F2EBDD] rounded-xl flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-gray-400">IMG</span>
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="font-heading font-semibold text-xl text-[#17231D] mb-1">{item.name}</h3>
                      <p className="text-[#68746C] text-sm mb-4">₹{item.price} each</p>
                      
                      <div className="flex items-center justify-center sm:justify-start gap-4">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-10 h-10 flex items-center justify-center text-[#68746C] hover:bg-gray-50 rounded-l-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-medium text-[#17231D]">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center text-[#68746C] hover:bg-gray-50 rounded-r-lg transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-xl font-bold text-[#17231D] sm:text-right w-full sm:w-auto">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#174A3A]/5 sticky top-24">
                  <h3 className="font-heading font-semibold text-xl text-[#17231D] mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div className="flex justify-between text-[#68746C]">
                      <span>Subtotal ({getCartCount()} items)</span>
                      <span className="text-[#17231D] font-medium">₹{getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#68746C]">
                      <span>Estimated Tax (18%)</span>
                      <span className="text-[#17231D] font-medium">₹{tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#68746C]">
                      <span>Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#17231D] text-lg">Total</span>
                      <span className="font-bold text-[#174A3A] text-2xl">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Link href="/checkout">
                    <Button className="w-full bg-[#174A3A] hover:bg-[#3F7655] text-white h-14 rounded-xl text-lg shadow-lg shadow-[#174A3A]/20">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <div className="mt-4 text-center text-xs text-[#68746C] flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Secure Checkout
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

import { ShieldCheck } from "lucide-react";
