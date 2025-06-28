
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
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-black/10 backdrop-blur-3xl border border-lime-500/30 rounded-3xl p-3 shadow-2xl backdrop-saturate-150">
        <div className="flex flex-col space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  group relative flex items-center justify-center w-10 h-10 rounded-xl
                  transition-all duration-300 font-space-grotesk font-medium
                  ${isActive 
                    ? 'bg-lime-500/30 text-lime-300 border border-lime-400/50 shadow-lg shadow-lime-500/20' 
                    : 'text-gray-400 hover:text-lime-400 hover:bg-lime-500/10 hover:border hover:border-lime-500/20'
                  }
                `}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0.5 h-6 bg-lime-400 rounded-full" />
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
