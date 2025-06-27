
import React from 'react';

const ChatQualityVisual = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated waveform background */}
      <div className="absolute inset-0 waveform opacity-30" />
      
      {/* Additional waveform layers */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-lime-500/20 rounded"
            style={{
              left: '10%',
              right: '10%',
              top: `${20 + i * 8}%`,
              height: `${Math.random() * 40 + 10}px`,
              animation: `waveform ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-lime-400 via-lime-300 to-white bg-clip-text text-transparent">
              Deep Dive
            </span>
          </h2>
          
          <p className="text-3xl md:text-4xl font-medium text-white mb-6">
            into an Immersive experience
          </p>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Our AI doesn't just respond—it understands, feels, and connects with you on a deeper level, 
            creating conversations that matter.
          </p>
        </div>

        {/* Visual frequency bars */}
        <div className="flex justify-center items-end space-x-2 mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="bg-lime-500 rounded-t"
              style={{
                width: '8px',
                height: `${Math.random() * 100 + 20}px`,
                animation: `pulse ${1 + Math.random()}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatQualityVisual;
