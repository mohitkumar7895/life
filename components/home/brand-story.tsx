import Link from 'next/link';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/testimonials/t1.jpg" 
              alt="Ayurvedic Lifestyle"
              fill
              className="object-cover"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C9A45C]/20 rounded-full blur-2xl" />
          </div>

          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl text-[#17231D] leading-tight mb-8">
              Born From The Wisdom Of Ayurveda
            </h2>
            <div className="space-y-6 text-[#68746C] text-lg leading-relaxed mb-10">
              <p>
                Fit Life Ayurvedic was founded on a simple belief: nature provides everything we need to heal, balance, and thrive. We looked past the crowded shelves of synthetic supplements and returned to the roots of Indian wellness—Ayurveda.
              </p>
              <p>
                Our journey began by collaborating with traditional Ayurvedic practitioners to understand the delicate synergy of herbs. We don't just mix ingredients; we honor the ancient processes required to unlock their true potential.
              </p>
              <p>
                Today, we bridge the gap between this profound ancient wisdom and your modern lifestyle, ensuring that every product is pure, potent, and crafted with integrity.
              </p>
            </div>
            <Link 
              href="/about" 
              className="inline-block border-2 border-[#174A3A] text-[#174A3A] hover:bg-[#174A3A] hover:text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
