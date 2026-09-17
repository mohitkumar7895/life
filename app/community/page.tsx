import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl text-[#17231D] mb-6">Our Community</h1>
            <p className="text-xl text-[#68746C] max-w-2xl mx-auto">
              Join a welcoming space where people come together to learn, grow, and build sustainable healthy habits.
            </p>
          </div>
          
          <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden mb-16 shadow-xl">
            <Image src="/images/home/how-it-works.jpg" alt="Ayurveda" fill className="object-cover" />
          </div>

          <div className="space-y-12 text-[#68746C] text-lg leading-relaxed">
            <section>
              <h2 className="font-heading text-3xl text-[#17231D] mb-4">Why Community Matters</h2>
              <p>At FitLife Wellness, we know that building new habits is much easier when you're not doing it alone. Our community provides the accountability, encouragement, and support you need to stay consistent and reach your lifestyle goals.</p>
            </section>
            
            <section>
              <h2 className="font-heading text-3xl text-[#17231D] mb-4">What to Expect</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Group Support:</strong> Connect with like-minded individuals on similar wellness journeys.</li>
                <li><strong>Expert Guidance:</strong> Learn from our nutrition experts and wellness coaches.</li>
                <li><strong>Accountability:</strong> Track your progress together and celebrate your wins, big and small.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
