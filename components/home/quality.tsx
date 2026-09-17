import { ShieldCheck, Leaf, Factory, Beaker } from 'lucide-react';

export default function QualitySection() {
  const cards = [
    { icon: Leaf, title: 'Quality Ingredients', desc: 'Ethically sourced, potent botanicals carefully selected for maximum efficacy.' },
    { icon: Factory, title: 'Careful Manufacturing', desc: 'Produced in hygienic facilities respecting traditional methods and modern safety.' },
    { icon: ShieldCheck, title: 'Hygienic Packaging', desc: 'Packaged securely to preserve freshness and potency of the active herbs.' },
    { icon: Beaker, title: 'Batch-Level Checks', desc: 'Every batch undergoes rigorous quality testing before reaching you.' },
  ];

  return (
    <section className="py-24 bg-[#174A3A] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#FAF7EF] mb-4">
            Quality You Can Feel Good About
          </h2>
          <p className="text-[#F2EBDD]/70 max-w-2xl mx-auto">
            We are committed to providing you with premium, safe, and effective Ayurvedic wellness products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <card.icon className="w-10 h-10 text-[#C9A45C] mb-6" />
              <h3 className="font-heading font-semibold text-xl text-[#FAF7EF] mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
