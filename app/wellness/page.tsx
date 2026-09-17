import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl text-[#17231D] mb-6">Our Wellness Goals</h1>
            <p className="text-xl text-[#68746C] max-w-2xl mx-auto">
              At FitLife Wellness, we focus on a comprehensive approach to your health through simple, everyday habits.
            </p>
          </div>
          
          <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden mb-16 shadow-xl">
            <Image src="/images/home/goal-stress.jpg" alt="Holistic Wellness" fill className="object-cover" />
          </div>

          <div className="space-y-12 text-[#68746C] text-lg leading-relaxed">
            <p>We educate, motivate and support people in improving their overall lifestyle through better nutrition, regular physical activity, proper hydration, quality sleep, positive mindset and healthy social connections.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#FAF7EF] p-8 rounded-3xl">
                <h3 className="font-heading text-2xl text-[#17231D] mb-4">Balanced Nutrition</h3>
                <p>Developing healthy eating habits and reaching your weight-management goals without complicated diets.</p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-3xl">
                <h3 className="font-heading text-2xl text-[#17231D] mb-4">Active Lifestyle</h3>
                <p>Incorporating regular physical activity and movement for everyday energy.</p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-3xl">
                <h3 className="font-heading text-2xl text-[#17231D] mb-4">Mind & Recovery</h3>
                <p>Prioritizing better sleep, hydration, and maintaining a positive mindset for stress management.</p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-3xl">
                <h3 className="font-heading text-2xl text-[#17231D] mb-4">Community Connections</h3>
                <p>Fostering healthy social connections that provide consistency, accountability and long-term improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
