'use client';

import { useState } from 'react';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart, isLoaded } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'COD'
  });

  const tax = getCartTotal() * 0.18;
  const total = getCartTotal() + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      router.push('/order-success');
    }, 1500);
  };

  if (!isLoaded) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF7EF]">
          <h2 className="text-2xl font-semibold mb-4 text-[#17231D]">Loading checkout...</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF7EF]">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Link href="/shop">
            <Button className="bg-[#174A3A]">Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="bg-[#FAF7EF] min-h-screen py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/cart" className="inline-flex items-center text-[#68746C] hover:text-[#174A3A] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cart
          </Link>
          
          <h1 className="font-heading text-4xl text-[#17231D] mb-8">Secure Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} id="checkout-form" className="space-y-8">
                
                {/* Shipping Details */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#174A3A]/5">
                  <h2 className="font-heading text-2xl text-[#17231D] mb-6 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#174A3A]" /> Shipping Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#17231D]">Full Name *</label>
                      <Input name="fullName" required onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#17231D]">Mobile Number *</label>
                      <Input name="mobile" required type="tel" onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-[#17231D]">Email Address</label>
                      <Input name="email" type="email" onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-[#17231D]">Complete Address *</label>
                      <Input name="address" required onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#17231D]">City *</label>
                      <Input name="city" required onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#17231D]">State *</label>
                        <Input name="state" required onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#17231D]">Pincode *</label>
                        <Input name="pincode" required onChange={handleInputChange} className="h-12 bg-[#FAF7EF] border-transparent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#174A3A]/5">
                  <h2 className="font-heading text-2xl text-[#17231D] mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#174A3A]" /> Payment Method
                  </h2>
                  
                  <div className="space-y-4">
                    <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${formData.paymentMethod === 'COD' ? 'border-[#174A3A] bg-[#174A3A]/5' : 'border-gray-200 hover:border-[#174A3A]/50'}`}>
                      <div className="flex items-center gap-3">
                        <input type="radio" name="paymentMethod" value="COD" checked={formData.paymentMethod === 'COD'} onChange={handleInputChange} className="w-5 h-5 accent-[#174A3A]" />
                        <span className="font-medium text-[#17231D]">Cash on Delivery</span>
                      </div>
                      <span className="text-xs font-semibold text-[#174A3A] bg-[#174A3A]/10 px-2 py-1 rounded">Available</span>
                    </label>
                    
                    <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-not-allowed transition-colors ${formData.paymentMethod === 'ONLINE' ? 'border-[#174A3A] bg-[#174A3A]/5' : 'border-gray-200 opacity-60'}`}>
                      <div className="flex items-center gap-3">
                        <input type="radio" name="paymentMethod" value="ONLINE" disabled onChange={handleInputChange} className="w-5 h-5 accent-[#174A3A]" />
                        <span className="font-medium text-[#17231D]">Online Payment</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">Coming Soon</span>
                    </label>
                  </div>
                </div>

              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#174A3A]/5 sticky top-24">
                <h3 className="font-heading font-semibold text-xl text-[#17231D] mb-6">Order Review</h3>
                
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="w-16 h-16 bg-[#F2EBDD] rounded-lg flex-shrink-0" />
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-[#17231D] line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-[#68746C]">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-bold text-[#17231D]">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm mb-6 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-[#68746C]">
                    <span>Subtotal</span>
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
                
                <Button type="submit" form="checkout-form" className="w-full bg-[#174A3A] hover:bg-[#3F7655] text-white h-14 rounded-xl text-lg shadow-lg shadow-[#174A3A]/20">
                  Place Order
                </Button>
                
                <p className="text-xs text-[#68746C] mt-4 text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
