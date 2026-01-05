import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import FeatureSection from "@/components/landing/FeatureSection";
import PopularPacks from "@/components/landing/PopularPacks";
import CalculatorTeaser from "@/components/landing/CalculatorTeaser";
import AcademyTeaser from "@/components/landing/AcademyTeaser";
import CTASection from "@/components/landing/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300 selection:bg-primary selection:text-black min-h-screen flex flex-col relative">

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2c3928_1px,transparent_1px),linear-gradient(to_bottom,#2c3928_1px,transparent_1px)] opacity-[0.03] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
      </div>

      <LandingHeader />

      <main className="flex-1 w-full relative z-10">
        <LandingHero />
        <FeatureSection />
        <PopularPacks />

        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <CalculatorTeaser />
            <AcademyTeaser />
          </div>
        </section>

        <CTASection />
      </main>

      <LandingFooter />
    </div>
  );
}
