import React from 'react';
import { Shield, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white shadow-2xl border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-2 sm:p-3 rounded-xl shadow-lg">
              <TrendingUp className="h-5 w-5 sm:h-7 sm:w-7" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-white">
                PromoTrader
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">Códigos Verificados • Ofertas Exclusivas</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-900 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-800">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
            <span className="text-xs sm:text-sm text-gray-300 font-medium">100% Verificado</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
