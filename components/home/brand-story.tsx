import Link from 'next/link';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[350px] md:h-[450px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl order-last lg:order-first">
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
            <h2 className="font-heading text-4xl md:text-5xl text-[#17231D] leading-tight mb-4">
              FITLIFE WELLNESS
            </h2>
            <h3 className="text-2xl text-[#3F7655] font-medium mb-8">
              Helping You Build a Healthier Lifestyle, One Day at a Time.
            </h3>
            <div className="space-y-6 text-[#68746C] text-lg leading-relaxed mb-10">
              <p>
                Good health is not about complicated diets or short-term fixes. It is about building simple, sustainable habits that become part of your everyday life.
              </p>
              <p>
                Our Nutrition Center in Sector 8, Noida is a welcoming community where you can learn about healthy living, track your progress, and receive daily encouragement. We focus on better nutrition, regular physical activity, and a positive mindset.
              </p>
              <p className="font-semibold text-[#17231D]">
                We don't believe in perfection. We believe in progress.
              </p>
              <p>
                Whether you want to feel more energetic, manage your weight, or take better care of yourself, we are here to help you take the first step.
              </p>
              <p className="font-medium">
                Your health is your greatest investment. Start your journey today.<br/>
                📍 FitLife Wellness Nutrition Center, Sector 8, Noida
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
