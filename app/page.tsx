import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import WellnessGoals from "@/components/home/wellness-goals";
import HowItWorks from "@/components/home/how-it-works";
import BrandStory from "@/components/home/brand-story";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import Newsletter from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Feature Strip Placeholder */}
      <section className="bg-[#17231D] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🍎</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Balanced Nutrition</h3>
              <p className="text-[#68746C] text-sm">Healthy eating habits for life.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🏃</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Regular Activity</h3>
              <p className="text-[#68746C] text-sm">Movement for everyday energy.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🌙</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Better Sleep</h3>
              <p className="text-[#68746C] text-sm">Rest and recover naturally.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🤝</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Supportive Community</h3>
              <p className="text-[#68746C] text-sm">Guidance and accountability.</p>
            </div>
          </div>
        </div>
      </section>

      <BrandStory />
      <WellnessGoals />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Newsletter />

      <Footer />
    </>
  );
}
