export default function OurAyurvedaStory() {
  const steps = [
    { num: '01', title: 'Traditional Knowledge', desc: 'Rooted in 5000-year-old classical Ayurvedic texts.' },
    { num: '02', title: 'Carefully Selected Herbs', desc: 'Sourced from their natural, potent geographical habitats.' },
    { num: '03', title: 'Modern Processing', desc: 'Extracted using advanced techniques to retain active compounds.' },
    { num: '04', title: 'Quality Checks', desc: 'Rigorous batch testing for purity, heavy metals, and potency.' },
    { num: '05', title: 'Wellness Delivered', desc: 'Formulated for your modern lifestyle.' },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-4">
            Ancient Wisdom. <span className="text-[#3F7655]">Modern Wellness.</span>
          </h2>
          <p className="text-[#68746C] max-w-3xl mx-auto text-lg">
            Fit Life Ayurvedic combines traditional Ayurvedic knowledge with modern manufacturing and strict quality practices to bring you wellness you can trust.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-30" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#FAF7EF] border border-[#174A3A]/10 flex items-center justify-center mb-6 z-10 group-hover:bg-[#174A3A] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <span className="font-heading text-3xl text-[#C9A45C] font-bold group-hover:text-white transition-colors">{step.num}</span>
                </div>
                <h4 className="font-heading font-semibold text-lg text-[#17231D] mb-3">{step.title}</h4>
                <p className="text-[#68746C] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
