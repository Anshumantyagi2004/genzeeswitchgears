import Intro from "@/components/Home/Intro";
import CategoryRange from "@/components/Home/CategoryRange";
import Hero from "@/components/Home/Hero";
import ProductRange from "@/components/Home/ProductRange";
import CTASection from "@/components/Main/CTA";
import IndustrialSection from "@/components/Home/IndustrialSection";
import StatsSection from "@/components/Main/Stats";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Industries from "@/components/Main/Industries";
import FAQ from "@/components/Home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <CategoryRange />
      <Intro />
      <ProductRange />
      <CTASection />
      <IndustrialSection />
      <StatsSection />
      <WhyChooseUs />
      <Industries />
      <FAQ />
    </div>
  );
}
