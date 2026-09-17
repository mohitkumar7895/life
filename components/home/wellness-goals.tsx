import Image from 'next/image';
import Link from 'next/link';

const goals = [
  { 
    title: 'Stress & Sleep', 
    description: 'Calm the nervous system and promote deep, restorative rest.',
    image: '/images/home/goal-stress.jpg'
  },
  { 
    title: 'Digestion & Detox', 
    description: 'Optimize your Agni (digestive fire) and gently cleanse.',
    image: '/images/home/goal-digestion.jpg'
  },
  { 
    title: 'Immunity & Vitality', 
    description: 'Build strong Ojas for lasting natural defense and energy.',
    image: '/images/home/goal-immunity.jpg'
  },
  { 
    title: 'Skin & Hair Care', 
    description: 'Nourish from within for external glowing beauty.',
    image: '/images/home/goal-hair.jpg'
  }
];

export default function WellnessGoals() {
  return (
    <section className="py-24 bg-[#FAF7EF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#174A3A] mb-4">
            Wellness, The Ayurvedic Way
          </h2>
          <p className="text-[#68746C] max-w-2xl mx-auto">
            Find the right support for your unique mind-body constitution and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <Link href={`/shop?category=${goal.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} key={index} className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-[#3F7655]/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="w-full h-full bg-[#174A3A]/5 group-hover:scale-105 transition-transform duration-700 relative">
                  <Image 
                    src={goal.image} 
                    alt={goal.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="text-center transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-heading font-semibold text-xl text-[#17231D] mb-2">{goal.title}</h3>
                <p className="text-[#68746C] text-sm mb-4">{goal.description}</p>
                <span className="text-[#C9A45C] font-semibold text-sm tracking-wider uppercase group-hover:text-[#174A3A] transition-colors relative inline-block">
                  Explore
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#174A3A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
