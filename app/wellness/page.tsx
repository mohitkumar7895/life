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
            <h1 className="font-heading text-5xl md:text-6xl text-[#17231D] mb-6">Holistic Wellness</h1>
            <p className="text-xl text-[#68746C] max-w-2xl mx-auto">
              Wellness is not just the absence of disease, but a state of complete physical, mental, and social well-being.
            </p>
          </div>
          
          <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden mb-16 shadow-xl">
            <Image src="/images/home/goal-stress.jpg" alt="Holistic Wellness" fill className="object-cover" />
          </div>

          <div className="space-y-12 text-[#68746C] text-lg leading-relaxed">
            <p>At Fit Life Ayurvedic, our approach to wellness incorporates diet, lifestyle, herbs, and emotional harmony. We guide you toward natural choices that empower your unique constitution.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#FAF7EF] p-8 rounded-3xl">
                <h3 className="font-heading text-2xl text-[#17231D] mb-4">Mindful Eating</h3>
                <p>Consuming fresh, seasonal, and whole foods that support your digestive fire (Agni).</p>
              </div>
              <div className="bg-[#FAF7EF] p-8 rounded-3xl">
                <h3 className="font-heading text-2xl text-[#17231D] mb-4">Daily Routine (Dinacharya)</h3>
                <p>Aligning your daily habits with the natural rhythms of the sun and seasons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
