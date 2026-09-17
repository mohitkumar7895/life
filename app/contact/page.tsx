import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-6">Get in Touch</h1>
            <p className="text-[#68746C] text-lg">
              Have questions about our community or need guidance on your wellness journey? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#174A3A]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F2EBDD] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#174A3A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-[#17231D] mb-2">Visit Us</h3>
                    <p className="text-[#68746C] leading-relaxed">
                      FitLife Wellness Nutrition Center, <br/> Sector 8, Noida
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#174A3A]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F2EBDD] rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#174A3A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-[#17231D] mb-2">Call Us</h3>
                    <p className="text-[#68746C]">Mon-Fri from 9am to 6pm.</p>
                    <p className="text-[#174A3A] font-semibold mt-2">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#174A3A]/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F2EBDD] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#174A3A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-[#17231D] mb-2">Email Us</h3>
                    <p className="text-[#68746C]">We usually respond within 24 hours.</p>
                    <p className="text-[#174A3A] font-semibold mt-2">hello@fitlifewellness.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-[#174A3A]/10 h-full">
                <h2 className="font-heading text-3xl text-[#17231D] mb-8">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#17231D]">First Name</label>
                      <Input placeholder="John" className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#17231D]">Last Name</label>
                      <Input placeholder="Doe" className="h-12 bg-[#FAF7EF] border-transparent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#17231D]">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 bg-[#FAF7EF] border-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#17231D]">Message</label>
                    <textarea 
                      className="w-full h-32 p-4 rounded-xl bg-[#FAF7EF] border-transparent focus:ring-1 focus:ring-[#174A3A] outline-none resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  <Button className="w-full h-14 bg-[#174A3A] hover:bg-[#3F7655] text-white rounded-xl text-lg shadow-lg shadow-[#174A3A]/20">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
