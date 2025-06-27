
import React from 'react';
import { Heart, MessageSquare, Brain, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Empathy',
    description: 'Deep emotional understanding that resonates with your feelings'
  },
  {
    icon: MessageSquare,
    title: 'Deep Conversation',
    description: 'Meaningful dialogues that go beyond surface-level interactions'
  },
  {
    icon: Brain,
    title: 'Compassion',
    description: 'Genuine care and support in every conversation thread'
  },
  {
    icon: Sparkles,
    title: 'Intelligence',
    description: 'Advanced AI that adapts to your communication style'
  }
];

const ChatFeatures = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Why Choose Our AI
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of conversational AI with features designed for meaningful connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/20 hover:border-lime-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-500/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-lime-400 group-hover:text-lime-300 transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-lime-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatFeatures;
