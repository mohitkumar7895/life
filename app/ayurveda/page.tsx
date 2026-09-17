import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function AyurvedaPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl text-[#17231D] mb-6">The Science of Life</h1>
            <p className="text-xl text-[#68746C] max-w-2xl mx-auto">
              Discover the ancient Indian system of medicine that balances the mind, body, and spirit.
            </p>
          </div>
          
          <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden mb-16 shadow-xl">
            <Image src="/images/home/how-it-works.jpg" alt="Ayurveda" fill className="object-cover" />
          </div>

          <div className="space-y-12 text-[#68746C] text-lg leading-relaxed">
            <section>
              <h2 className="font-heading text-3xl text-[#17231D] mb-4">What is Ayurveda?</h2>
              <p>Ayurveda, often called the "Mother of All Healing," originated in India over 5,000 years ago. It stems from the Sanskrit words ayur (life) and veda (science or knowledge). Thus, Ayurveda translates to knowledge of life.</p>
            </section>
            
            <section>
              <h2 className="font-heading text-3xl text-[#17231D] mb-4">The Three Doshas</h2>
              <p className="mb-4">According to Ayurvedic theory, everything in the universe is made up of five elements: space, air, fire, water, and earth. These combine in the human body to form three life forces or energies, called doshas:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Vata (Space and Air):</strong> Controls basic body functions like cell division, breathing, blood flow, and heart function.</li>
                <li><strong>Pitta (Fire and Water):</strong> Controls digestion, metabolism, and certain hormones linked to appetite.</li>
                <li><strong>Kapha (Water and Earth):</strong> Controls muscle growth, body strength, stability, weight, and your immune system.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
