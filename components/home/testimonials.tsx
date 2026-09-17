'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, MH',
    rating: 5,
    text: 'Joining the FitLife Wellness community completely changed my approach to health. The guidance I received helped me build sustainable habits.',
    image: '/images/testimonials/t1.jpg',
    isDemo: true,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    location: 'Delhi, DL',
    rating: 5,
    text: 'I used to struggle with consistency, but the accountability here is amazing. I feel more energetic and focused than ever before.',
    image: '/images/testimonials/t2.jpg',
    isDemo: true,
  },
  {
    id: 3,
    name: 'Anjali Desai',
    location: 'Bangalore, KA',
    rating: 4,
    text: 'The focus on balanced nutrition instead of restrictive diets was a game changer for me. I finally have a lifestyle I can maintain.',
    image: '/images/testimonials/t3.jpg',
    isDemo: true,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#F2EBDD]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#174A3A] mb-4">
            Stories of Wellness
          </h2>
          <p className="text-[#68746C] max-w-2xl mx-auto">
            Real experiences from our community on their wellness journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#174A3A]/5">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4 md:px-8 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-[#C9A45C] fill-[#C9A45C]' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-[#17231D] text-lg md:text-2xl font-medium leading-relaxed italic mb-8">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#FAF7EF] overflow-hidden border-2 border-[#C9A45C]">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-heading font-semibold text-[#17231D] text-lg">{t.name}</h4>
                      <p className="text-sm text-[#68746C]">{t.location}</p>
                    </div>
                  </div>
                  {t.isDemo && (
                    <span className="mt-6 text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded">DEMO DATA</span>
                  )}
                </div>
              ))}
            </div>
            
            <button 
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#174A3A] hover:bg-[#174A3A] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#174A3A] hover:bg-[#174A3A] hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-[#174A3A]' : 'bg-[#174A3A]/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
