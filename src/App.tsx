import React, { useState } from 'react';
import Header from './components/Header';
import PromoCard from './components/PromoCard';
import PromoDetail from './components/PromoDetail';
import HowItWorks from './components/HowItWorks';
import { Shield, Gift, Award } from 'lucide-react';
import { promoCodes } from './data/promoCodes';
import { PromoCode } from './types';

function App() {
  const [selectedPromo, setSelectedPromo] = useState<PromoCode | null>(null);

  const mainOffer = promoCodes.find(promo => promo.isMainOffer);
  const otherOffers = promoCodes.filter(promo => !promo.isMainOffer);

  const handlePromoClick = (promo: PromoCode) => {
    setSelectedPromo(promo);
  };

  const handleBackToOffers = () => {
    setSelectedPromo(null);
  };

  if (selectedPromo) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
          <PromoDetail promo={selectedPromo} onBack={handleBackToOffers} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-8 sm:py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Códigos Promocionais
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Verificados
              </span>
            </h1>
            <p className="text-sm sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              As melhores ofertas para corretoras financeiras, com foco especial na Capital Binary. 
              Todos os códigos são testados e verificados diariamente.
            </p>
          </div>
        </section>

        {/* Main Offer */}
        {mainOffer && (
          <section className="mb-8 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Oferta Exclusiva</h2>
              <p className="text-gray-400 text-sm sm:text-base">A melhor oportunidade para começar a investir</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <PromoCard 
                promo={mainOffer} 
                onClick={() => handlePromoClick(mainOffer)}
              />
            </div>
          </section>
        )}

        {/* Other Offers */}
        <section className="mb-8 sm:mb-16">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {otherOffers.map((promo) => (
              <PromoCard 
                key={promo.id} 
                promo={promo} 
                onClick={() => handlePromoClick(promo)}
              />
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="mb-8 sm:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 py-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-white text-sm font-medium">Códigos Verificados</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Gift className="h-4 w-4 text-blue-400" />
              </div>
              <span className="text-white text-sm font-medium">Ofertas Exclusivas</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-purple-400" />
              </div>
              <span className="text-white text-sm font-medium">Confiança Total</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />
      </main>

      <footer className="bg-black border-t border-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-20">
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
}

export default App;
