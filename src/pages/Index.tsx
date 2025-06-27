
import React from 'react';
import HeroSection from '../components/HeroSection';
import ChatFeatures from '../components/ChatFeatures';
import ChatQualityVisual from '../components/ChatQualityVisual';
import ChattersReviews from '../components/ChattersReviews';
import TechSpecs from '../components/TechSpecs';
import StickyCTA from '../components/StickyCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-tech text-white overflow-x-hidden">
      <HeroSection />
      <ChatFeatures />
      <ChatQualityVisual />
      <ChattersReviews />
      <TechSpecs />
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Index;
