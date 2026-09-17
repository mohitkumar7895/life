'use client';

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen py-12 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#174A3A]/5 w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-bold text-[#17231D] mb-2">Welcome Back</h1>
            <p className="text-[#68746C]">Sign in to your Fit Life account</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-[#17231D] mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#174A3A]/20 focus:border-[#174A3A] transition-colors"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#17231D] mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#174A3A]/20 focus:border-[#174A3A] transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-[#174A3A] focus:ring-[#174A3A]" />
                <span className="text-sm text-[#68746C]">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#174A3A] hover:underline font-medium">Forgot Password?</a>
            </div>

            <Button className="w-full bg-[#174A3A] hover:bg-[#3F7655] text-white h-12 rounded-xl text-lg mt-4">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#68746C]">
              Don't have an account?{' '}
              <a href="#" className="text-[#174A3A] font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
