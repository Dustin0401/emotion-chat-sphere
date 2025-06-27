
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 800,
      y: Math.random() * 600,
      delay: Math.random() * 3
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Sphere Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-lime-500/20 via-lime-500/10 to-transparent animate-pulse-glow" />
          <div className="absolute inset-8 rounded-full bg-gradient-radial from-lime-400/30 via-lime-400/10 to-transparent animate-float" />
          <div className="absolute inset-16 rounded-full bg-gradient-radial from-lime-300/40 via-lime-300/20 to-transparent animate-pulse-glow" 
               style={{ animationDelay: '1s' }} />
          
          {/* Central core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-lime-500 animate-pulse-glow shadow-2xl shadow-lime-500/50" />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-lime-100 to-lime-400 bg-clip-text text-transparent">
            AI CHAT
          </span>
        </h1>
        
        <p className="text-3xl md:text-4xl font-medium mb-4 text-gray-300">
          High fidelity to your emotions
        </p>
        
        <p className="text-xl md:text-2xl font-light mb-12 text-lime-400 tracking-wide">
          Feel every word
        </p>

        <Button 
          size="lg" 
          className="bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/30"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          Chat Now
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-lime-500 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
