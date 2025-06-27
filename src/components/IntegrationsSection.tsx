
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const IntegrationsSection = () => {
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

        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={partner.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div 
                    className="bg-card/30 backdrop-blur-sm rounded-2xl border border-lime-500/20 p-6 text-center hover:border-lime-500/40 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-lg font-bold text-white mb-2 font-space-grotesk">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-space-grotesk">
                      {partner.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-lime-500/20 border-lime-500/30 text-lime-400 hover:bg-lime-500/30" />
            <CarouselNext className="right-4 bg-lime-500/20 border-lime-500/30 text-lime-400 hover:bg-lime-500/30" />
          </Carousel>
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
