
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals getting started',
      features: [
        '1,000 messages per month',
        'Basic emotional analysis',
        'Standard response time',
        'Email support',
        'Web platform access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for professionals and small teams',
      features: [
        '10,000 messages per month',
        'Advanced emotional analysis',
        'Priority response time',
        'Priority support',
        'All platform access',
        'Custom personality settings',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited messages',
        'Enterprise-grade analysis',
        'Instant response time',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security features',
        'Team management',
        'Custom branding'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                relative bg-card/30 backdrop-blur-sm rounded-2xl border p-8
                transition-all duration-300 hover:scale-105
                ${plan.popular 
                  ? 'border-lime-500/50 shadow-2xl shadow-lime-500/20' 
                  : 'border-lime-500/20 hover:border-lime-500/40'
                }
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-lime-500 text-black px-4 py-2 rounded-full text-sm font-bold font-space-grotesk">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-4 font-space-grotesk">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-lime-400 font-jetbrains-mono">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1 font-space-grotesk">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <span className="text-gray-300 font-space-grotesk">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`
                  w-full font-bold text-lg py-6 rounded-xl transition-all duration-300 font-space-grotesk
                  ${plan.popular
                    ? 'bg-lime-500 hover:bg-lime-400 text-black'
                    : 'bg-transparent border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-black'
                  }
                `}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
