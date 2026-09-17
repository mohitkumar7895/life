import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import WellnessGoals from "@/components/home/wellness-goals";
import FeaturedProducts from "@/components/home/featured-products";
import IngredientsSection from "@/components/home/ingredients";
import OurAyurvedaStory from "@/components/home/our-ayurveda";
import QualitySection from "@/components/home/quality";
import HowItWorks from "@/components/home/how-it-works";
import BrandStory from "@/components/home/brand-story";
import Testimonials from "@/components/home/testimonials";
import OfferSection from "@/components/home/offer";
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
              <span className="text-3xl mb-4">🌿</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Natural Ingredients</h3>
              <p className="text-[#68746C] text-sm">Traditional herbs carefully selected.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🪷</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Ayurvedic Wisdom</h3>
              <p className="text-[#68746C] text-sm">Inspired by classical wellness traditions.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🧪</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Quality Focused</h3>
              <p className="text-[#68746C] text-sm">Made with consistent quality standards.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-4">🤍</span>
              <h3 className="font-heading font-semibold text-lg mb-2">Everyday Wellness</h3>
              <p className="text-[#68746C] text-sm">Simple wellness for modern lifestyles.</p>
            </div>
          </div>
        </div>
      </section>

      <WellnessGoals />
      <FeaturedProducts />
      <IngredientsSection />
      <OurAyurvedaStory />
      <QualitySection />
      <HowItWorks />
      <BrandStory />
      <Testimonials />
      <OfferSection />
      <FAQ />
      <Newsletter />

      <Footer />
    </>
  );
}
