import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import FeaturesSection from "./FeatureSection";
import ValuesSection from "./ValueSection";
import CaseStudySection from "./CaseStudySection";
import JournalSection from "./JournalSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
    
  export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ValuesSection />
      <CaseStudySection />
      <JournalSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}