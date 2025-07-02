
import React from 'react';

const specs = [
  { label: 'Response Time', value: '< 100ms' },
  { label: 'Language Models', value: 'GPT-4 Turbo' },
  { label: 'Emotional Analysis', value: 'Advanced NLP' },
  { label: 'Memory Context', value: '32k tokens' },
  { label: 'Languages Supported', value: '95+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Security', value: 'End-to-end encrypted' },
  { label: 'Platform Support', value: 'Web, iOS, Android' }
];

const TechSpecs = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-lime-500/20 overflow-hidden animate-fade-in">
          <div className="divide-y divide-lime-500/20">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className="flex justify-between items-center px-8 py-6 hover:bg-lime-500/5 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg font-medium text-gray-300">{spec.label}</span>
                <span className="text-lg font-bold text-lime-400">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-400 text-sm">
            * Specifications may vary based on usage and network conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
