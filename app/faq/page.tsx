import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FAQ from "@/components/home/faq";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7EF] min-h-screen pt-24 pb-20">
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
