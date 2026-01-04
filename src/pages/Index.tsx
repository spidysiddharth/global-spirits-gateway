import { useState, useEffect } from "react";
import AgeVerification from "@/components/AgeVerification";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  if (!isVerified) {
    return <AgeVerification onVerified={() => setIsVerified(true)} />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <PortfolioPreview />
      <GlobalReach />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
