
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Check } from 'lucide-react';

const colorOptions = [
  { name: 'Lime', color: 'bg-lime-500', selected: true },
  { name: 'Blue', color: 'bg-blue-500', selected: false },
  { name: 'Purple', color: 'bg-purple-500', selected: false },
  { name: 'Red', color: 'bg-red-500', selected: false }
];

const StickyCTA = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="sticky bottom-0 z-50 bg-black/90 backdrop-blur-xl border-t border-lime-500/20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* Price and Info */}
          <div className="flex items-center space-x-8">
            <div>
              <span className="text-3xl font-bold text-white">Free</span>
              <span className="text-lg text-gray-400 ml-2">to start</span>
            </div>
            
            {/* Color Options */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400 mr-2">Theme:</span>
              {colorOptions.map((option, index) => (
                <button
                  key={option.name}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full ${option.color} border-2 ${
                    selectedColor === index ? 'border-white' : 'border-gray-600'
                  } hover:scale-110 transition-transform duration-200`}
                >
                  {selectedColor === index && (
                    <Check className="w-4 h-4 text-white mx-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA and Stock */}
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-lime-400 font-medium">✓ Available Now</p>
              <p className="text-xs text-gray-400">Instant access</p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/30"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCTA;
