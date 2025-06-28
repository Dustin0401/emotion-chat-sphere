
import React, { useEffect, useRef } from 'react';

const IntegrationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'Slack', logo: '🟪', description: 'Team Communication' },
    { name: 'Microsoft Teams', logo: '🟦', description: 'Enterprise Chat' },
    { name: 'Discord', logo: '🟣', description: 'Community Platform' },
    { name: 'Telegram', logo: '🔵', description: 'Messaging App' },
    { name: 'WhatsApp', logo: '🟢', description: 'Business API' },
    { name: 'Zoom', logo: '🔷', description: 'Video Meetings' },
    { name: 'Notion', logo: '⚪', description: 'Workspace Tool' },
    { name: 'HubSpot', logo: '🟠', description: 'CRM Platform' },
    { name: 'Salesforce', logo: '🔶', description: 'Sales Cloud' },
    { name: 'Zapier', logo: '🟡', description: 'Automation' },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Adjust speed here
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-space-grotesk">
            Integration Partners
          </h2>
          <p className="text-xl text-gray-400 font-space-grotesk">
            Seamlessly connect with your favorite platforms and tools
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-card/30 backdrop-blur-sm rounded-2xl border border-lime-500/20 p-6 text-center hover:border-lime-500/40 transition-all duration-300 w-48"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-bold text-white mb-2 font-space-grotesk">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-400 font-space-grotesk">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 font-space-grotesk">
            Can't find your platform? <span className="text-lime-400 hover:text-lime-300 cursor-pointer">Contact us</span> for custom integrations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
