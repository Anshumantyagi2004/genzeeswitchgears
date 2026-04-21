import Intro from "@/components/Home/Intro";
import CategoryRange from "@/components/Home/CategoryRange";
import Hero from "@/components/Home/Hero";
import ProductRange from "@/components/Home/ProductRange";
import CTASection from "@/components/Main/CTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <CategoryRange />
      <Intro />
      <ProductRange />
      <CTASection />
    </div>
  );
}
