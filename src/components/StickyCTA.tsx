
import React from 'react';

const StickyCTA = () => {
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
          </div>

          {/* Availability Status */}
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-lime-400 font-medium">✓ Available Now</p>
              <p className="text-xs text-gray-400">Instant access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCTA;
