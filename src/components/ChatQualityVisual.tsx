
import React from 'react';
import { Zap, Heart, Brain, Sparkles } from 'lucide-react';

const ChatQualityVisual = () => {
  const qualityMetrics = [
    {
      icon: Brain,
      label: 'Emotional Intelligence',
      value: '99.7%',
      description: 'Advanced emotion recognition and response',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Heart,
      label: 'Empathy Score',
      value: '98.3%',
      description: 'Deep understanding of human emotions',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Zap,
      label: 'Response Speed',
      value: '<50ms',
      description: 'Lightning-fast conversation flow',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Sparkles,
      label: 'Personality Match',
      value: '96.8%',
      description: 'Adaptive personality mirroring',
      color: 'from-purple-400 to-indigo-400'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-space-grotesk">
            Quality Metrics
          </h2>
          <p className="text-xl text-gray-400 font-space-grotesk max-w-3xl mx-auto">
            Experience unparalleled emotional connection through our advanced AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-lime-500/20 p-8 text-center hover:border-lime-500/40 transition-all duration-300 hover:scale-105 h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} mx-auto mb-6 flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-4xl font-bold text-white mb-2 font-jetbrains-mono">
                    {metric.value}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-bold text-lime-400 mb-3 font-space-grotesk">
                    {metric.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm font-space-grotesk leading-relaxed">
                    {metric.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ChatQualityVisual;
