import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ingredients = [
  { name: 'Ashwagandha', description: 'Adaptogen for stress and vitality', image: '/images/products/ashwagandha.jpg' },
  { name: 'Brahmi', description: 'Supports cognitive function and clarity', image: '/images/products/brahmi.jpg' },
  { name: 'Amla', description: 'Rich in Vitamin C and antioxidants', image: '/images/products/amla.jpg' },
  { name: 'Turmeric', description: 'Powerful natural anti-inflammatory', image: '/images/products/turmeric.jpg' },
  { name: 'Giloy', description: 'Immunity booster and detoxifier', image: '/images/home/goal-immunity.jpg' },
  { name: 'Shatavari', description: 'Nourishing tonic for women\'s health', image: '/images/home/how-it-works.jpg' },
  { name: 'Triphala', description: 'Classic digestive and cleansing blend', image: '/images/products/triphala.jpg' },
  { name: 'Neem', description: 'Purifying herb for skin and blood', image: '/images/home/goal-digestion.jpg' },
];

export default function IngredientsSection() {
  return (
    <section className="py-24 bg-[#F2EBDD] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/images/patterns/botanical-line.svg")', backgroundSize: '400px' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#174A3A] mb-4">
            Powered by Nature
          </h2>
          <p className="text-[#68746C] max-w-2xl mx-auto">
            Discover the powerful botanicals at the heart of our formulations. Sourced ethically and verified for purity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {ingredients.map((herb, idx) => (
            <div key={idx} className="group flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-[#FAF7EF] mb-4 overflow-hidden border-4 border-[#F2EBDD] group-hover:border-[#C9A45C] transition-colors relative flex items-center justify-center">
                <Image src={herb.image} alt={herb.name} fill className="object-cover" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#17231D] mb-2">{herb.name}</h3>
              <p className="text-[#68746C] text-xs text-center mb-4 line-clamp-2">{herb.description}</p>
              <Link href={`/ingredients/${herb.name.toLowerCase()}`} className="text-[#C9A45C] text-xs font-bold uppercase tracking-wider flex items-center hover:text-[#174A3A] transition-colors mt-auto">
                Learn More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
