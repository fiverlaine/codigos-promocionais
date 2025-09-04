import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle, Zap, Shield, Gift } from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  const [offersFound, setOffersFound] = useState(0);

  const handleSearchOffers = async () => {
    setIsSearching(true);
    setSearchComplete(false);
    setOffersFound(0);

    // Simula a busca de ofertas com animação
    const searchSteps = [
      { delay: 1000, message: "Procurando ofertas..." },
      { delay: 1500, message: "Analisando códigos..." },
      { delay: 2000, message: "Verificando disponibilidade..." },
      { delay: 1500, message: "Finalizando busca..." }
    ];

    for (const step of searchSteps) {
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    // Simula o resultado da busca
    setOffersFound(4);
    setSearchComplete(true);
    setIsSearching(false);
  };

  const handleAccessOffers = () => {
    onEnterApp();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="bg-black border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">PromoTrader</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Códigos Promocionais
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Verificados
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              As melhores ofertas para corretoras financeiras, com foco especial na Capital Binary. 
              Todos os códigos são testados e verificados diariamente.
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-800 mb-8 sm:mb-12">
            {!searchComplete ? (
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Search className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {isSearching ? "Procurando Ofertas..." : "Procurar Ofertas"}
                  </h2>
                </div>

                {isSearching ? (
                  <div className="space-y-6">
                    {/* Loading Animation */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Search className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Search Steps */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm sm:text-base">Procurando ofertas...</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span className="text-sm sm:text-base">Analisando códigos...</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span className="text-sm sm:text-base">Verificando disponibilidade...</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleSearchOffers}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 sm:py-5 px-8 sm:px-12 rounded-xl font-bold text-lg sm:text-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg mx-auto"
                  >
                    <Search className="h-6 w-6 sm:h-7 sm:w-7" />
                    <span>Procurar Ofertas</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Success Animation */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {offersFound} Ofertas Encontradas!
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-300 mb-8">
                  Encontramos as melhores ofertas promocionais para você
                </p>

                <button
                  onClick={handleAccessOffers}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 sm:py-5 px-8 sm:px-12 rounded-xl font-bold text-lg sm:text-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg mx-auto"
                >
                  <span>Acessar Ofertas</span>
                  <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7" />
                </button>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Códigos Verificados</h3>
              <p className="text-gray-400 text-sm text-center">Todos os códigos são testados diariamente</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Gift className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Ofertas Exclusivas</h3>
              <p className="text-gray-400 text-sm text-center">Acesso a promoções especiais</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Atualizações Rápidas</h3>
              <p className="text-gray-400 text-sm text-center">Novos códigos adicionados constantemente</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <svg className="h-4 w-4 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold">PromoTrader</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Conectando investidores às melhores oportunidades do mercado financeiro 
              através de códigos promocionais verificados e ofertas exclusivas.
            </p>
            <div className="border-t border-gray-900 pt-4 sm:pt-6">
              <p className="text-gray-500 text-xs sm:text-sm">
                © 2025 PromoTrader. Todos os direitos reservados. 
                Investir envolve riscos. Leia sempre os termos e condições das corretoras.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
