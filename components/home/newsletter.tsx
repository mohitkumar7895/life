import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#FAF7EF] border-t border-[#174A3A]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#174A3A]/5 text-center">
          <div className="w-16 h-16 bg-[#F2EBDD] rounded-full flex items-center justify-center mx-auto mb-6 text-[#174A3A]">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-[#17231D] mb-4">
            Stay Connected With Ayurveda
          </h2>
          <p className="text-[#68746C] mb-8 max-w-md mx-auto">
            Join our community for wellness tips, exclusive offers, and the latest updates on our Ayurvedic formulations.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-12 bg-[#FAF7EF] border-none focus-visible:ring-1 focus-visible:ring-[#174A3A] rounded-xl text-base"
              required
            />
            <Button 
              type="submit" 
              className="h-12 px-8 bg-[#174A3A] hover:bg-[#3F7655] text-white rounded-xl text-base font-semibold transition-colors"
            >
              JOIN US
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
