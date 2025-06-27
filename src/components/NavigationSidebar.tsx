
import React from 'react';
import { MessageCircle, DollarSign, Users, Shield, Cpu, Star } from 'lucide-react';

interface NavigationSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'hero', label: 'Home', icon: MessageCircle },
  { id: 'features', label: 'Features', icon: Cpu },
  { id: 'quality', label: 'Quality', icon: Star },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
  { id: 'integrations', label: 'Partners', icon: Users },
  { id: 'security', label: 'Security', icon: Shield },
];

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-xl border border-lime-500/20 rounded-2xl p-4 shadow-2xl">
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  group relative flex items-center space-x-3 px-4 py-3 rounded-xl
                  transition-all duration-300 font-space-grotesk font-medium
                  ${isActive 
                    ? 'bg-lime-500/20 text-lime-400 border border-lime-500/30' 
                    : 'text-gray-400 hover:text-lime-400 hover:bg-lime-500/10'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm whitespace-nowrap">{item.label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-lime-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;
