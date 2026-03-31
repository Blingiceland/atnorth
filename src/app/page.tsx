import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMe from "@/components/Simulation";
import Education from "@/components/OperationalReality";
import SystemStatus from "@/components/SystemStatus";
import CurrentScale from "@/components/CurrentScale";
import Strategy from "@/components/Strategy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyMe />
        <Education />
        <SystemStatus />
        <CurrentScale />
        <Strategy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
