import React from 'react';
import { Home, Info, HelpCircle } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Ofertas', icon: Home },
    { id: 'how-it-works', label: 'Como Funciona', icon: Info },
    { id: 'help', label: 'Ajuda', icon: HelpCircle }
  ];

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  currentSection === item.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
