
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AIImageGenerator from '../components/AIImageGenerator';
import ChatQualityVisual from '../components/ChatQualityVisual';
import TechSpecs from '../components/TechSpecs';
import PricingSection from '../components/PricingSection';
import IntegrationsSection from '../components/IntegrationsSection';
import SecuritySection from '../components/SecuritySection';
import StickyCTA from '../components/StickyCTA';
import NavigationSidebar from '../components/NavigationSidebar';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection />;
      case 'features':
        return (
          <div className="animate-slide-in-left">
            <AIImageGenerator />
          </div>
        );
      case 'quality':
        return (
          <div className="animate-slide-in-left">
            <ChatQualityVisual />
            <TechSpecs />
          </div>
        );
      case 'pricing':
        return (
          <div className="animate-slide-in-left">
            <PricingSection />
          </div>
        );
      case 'integrations':
        return (
          <div className="animate-slide-in-left">
            <IntegrationsSection />
          </div>
        );
      case 'security':
        return (
          <div className="animate-slide-in-left">
            <SecuritySection />
          </div>
        );
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-tech text-white overflow-x-hidden font-space-grotesk">
      <NavigationSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="relative">
        {renderSection()}
        
        {/* Show CTA only on hero section */}
        {activeSection === 'hero' && <StickyCTA />}
      </div>
    </div>
  );
};

export default Index;
