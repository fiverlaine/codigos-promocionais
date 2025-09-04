import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle } from 'lucide-react';

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
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Sistema Ativo</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 sm:mb-10 leading-tight">
              Códigos Promocionais
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                Verificados
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              As melhores ofertas para corretoras financeiras
            </p>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
              Todos os códigos são testados e verificados diariamente para garantir sua validade
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-gray-800/50 mb-12 sm:mb-16">
            {!searchComplete ? (
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-green-400" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {isSearching ? "Procurando Ofertas..." : "Procurar Ofertas"}
                  </h2>
                </div>

                {isSearching ? (
                  <div className="space-y-6">
                    {/* Loading Animation */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-gray-700/50 border-t-green-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Search className="h-8 w-8 sm:h-10 sm:w-10 text-green-400 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Search Steps */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3 text-gray-300">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-base sm:text-lg font-medium">Procurando ofertas...</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-gray-300">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span className="text-base sm:text-lg font-medium">Analisando códigos...</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-gray-300">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span className="text-base sm:text-lg font-medium">Verificando disponibilidade...</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleSearchOffers}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white py-5 sm:py-6 px-12 sm:px-16 rounded-2xl font-bold text-xl sm:text-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-4 transform hover:scale-105 shadow-2xl mx-auto group"
                  >
                    <Search className="h-7 w-7 sm:h-8 sm:w-8 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Procurar Ofertas</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-8">
                {/* Success Animation */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                    <CheckCircle className="h-12 w-12 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {offersFound} Ofertas Encontradas!
                </h2>
                
                <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light">
                  Encontramos as melhores ofertas promocionais para você
                </p>

                <button
                  onClick={handleAccessOffers}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white py-5 sm:py-6 px-12 sm:px-16 rounded-2xl font-bold text-xl sm:text-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-4 transform hover:scale-105 shadow-2xl mx-auto group"
                >
                  <span>Acessar Ofertas</span>
                  <ArrowRight className="h-7 w-7 sm:h-8 sm:w-8 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-900/50 text-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold">PromoTrader</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Conectando investidores às melhores oportunidades do mercado financeiro
            </p>
            <div className="border-t border-gray-900/50 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 PromoTrader. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
