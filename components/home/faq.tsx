import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is FitLife Wellness?",
    answer: "FitLife Wellness is a health and wellness community dedicated to helping people build healthier habits through simple, sustainable lifestyle changes like better nutrition and regular activity."
  },
  {
    question: "How do I get started?",
    answer: "You can start by visiting our Nutrition Center in Sector 8, Noida. We'll help you understand your wellness goals and guide you from there."
  },
  {
    question: "Do I need to follow a strict diet?",
    answer: "No! At FitLife Wellness, we don't believe in complicated diets or perfection. We believe in building simple, sustainable habits that fit into your everyday life."
  },
  {
    question: "Can I join if I'm a beginner?",
    answer: "Absolutely! Our community is welcoming to everyone, whether you are just starting your fitness journey or looking to improve your current habits."
  },
  {
    question: "Where are you located?",
    answer: "Our Nutrition Center is located in Sector 8, Noida. We encourage you to visit us and join our community."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#17231D] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#68746C]">
            Everything you need to know about our community and services.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-[#174A3A]/10">
              <AccordionTrigger className="text-left font-heading text-lg md:text-xl text-[#17231D] hover:text-[#174A3A]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#68746C] text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
