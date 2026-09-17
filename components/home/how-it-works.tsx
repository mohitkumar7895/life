import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choose Your Wellness Product', desc: 'Browse our curated collection of Ayurvedic solutions.' },
    { num: '02', title: 'Place Your Order', desc: 'Secure and simple checkout process.' },
    { num: '03', title: 'Receive At Your Doorstep', desc: 'Fast, reliable delivery straight to you.' },
    { num: '04', title: 'Make Wellness A Habit', desc: 'Incorporate into your daily routine for best results.' },
  ];

  return (
    <section className="py-24 bg-[#FAF7EF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
            <Image 
              src="/images/home/how-it-works.jpg" 
              alt="Ayurvedic Wellness Process" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-6">
              Simple Steps to <br/><span className="text-[#3F7655]">Better Wellness</span>
            </h2>
            <p className="text-[#68746C] mb-12">
              Embarking on your Ayurvedic journey should be as natural and stress-free as the products themselves. Here's how it works:
            </p>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#174A3A] text-white flex items-center justify-center font-bold text-lg mr-6">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl text-[#17231D] mb-1">{step.title}</h4>
                    <p className="text-[#68746C] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
