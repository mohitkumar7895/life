import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ayurveda?",
    answer: "Ayurveda is a 5000-year-old system of natural healing that has its origins in the Vedic culture of India. It emphasizes balance in all areas of life and uses natural herbs, diet, and lifestyle practices to promote optimal wellness."
  },
  {
    question: "How do I choose a product?",
    answer: "You can browse our 'Shop By Wellness Goal' section if you have a specific area you want to support (e.g., immunity, sleep, digestion). We always recommend consulting with a healthcare practitioner for personalized advice."
  },
  {
    question: "How should Ayurvedic products be used?",
    answer: "Each product has specific usage instructions on its label and product page. Generally, they are taken with water or warm milk. Consistency is key in Ayurveda for the best results."
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, we offer Cash on Delivery for most pincodes across India. You can select this option during checkout."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day return policy for sealed, unopened products. Please contact our support team to initiate a return request."
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
            Everything you need to know about our products and services.
          </p>
        </div>

        <Accordion type="single" collapsible="true" className="w-full">
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
