import Navbar from "@/components/Navbar";
import WealthHero from "@/components/WealthHero";
import SovereignMix from "@/components/SovereignMix";
import PayoutTimeline from "@/components/PayoutTimeline";
import Marketplace from "@/components/Marketplace";
import Calculator from "@/components/Calculator";
import LearningSnippet from "@/components/LearningSnippet";
import ComplianceCorner from "@/components/ComplianceCorner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Wealth & Analytics */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <WealthHero />

          {/* Stats & Sovereign Mix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SovereignMix />
            <PayoutTimeline />
          </div>

          <Marketplace />
        </div>

        {/* Right Column: Tools & Compliance */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Calculator />
          <LearningSnippet />
          <ComplianceCorner />
        </div>
      </main>
    </div>
  );
}
