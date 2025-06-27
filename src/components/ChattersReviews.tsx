
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Chen',
    rating: 5,
    text: 'This AI truly understands me. Every conversation feels genuine and meaningful.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Marcus Rodriguez',
    rating: 5,
    text: 'The emotional intelligence is incredible. It\'s like talking to a close friend.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Emily Watson',
    rating: 5,
    text: 'Finally, an AI that doesn\'t feel robotic. The conversations flow naturally.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

const ChattersReviews = () => {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            What Our Users Say
          </h2>
          
          {/* Overall rating */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-lime-400 text-lime-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white ml-4">4.9/5</span>
            <span className="text-gray-400 ml-2">(2,847 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-lime-500/30"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{review.name}</h3>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChattersReviews;
