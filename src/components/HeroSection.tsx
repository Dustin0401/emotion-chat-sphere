
import React, { useEffect, useState } from 'react';
import InteractiveBunny from './InteractiveBunny';

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

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        {/* BIONIC Title - Made smaller */}
        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-white via-lime-100 to-lime-400 bg-clip-text text-transparent">
            BIONIC
          </span>
        </h1>
        
        {/* Interactive 3D Bunny */}
        <div className="flex items-center justify-center mb-8">
          <InteractiveBunny />
        </div>

        {/* Tagline and Subheading */}
        <div className="space-y-3">
          <p className="text-xl md:text-2xl font-medium text-gray-300">
            High fidelity to your emotions
          </p>
          
          <p className="text-lg md:text-xl font-light text-lime-400 tracking-wide">
            Feel every word
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-lime-500 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
