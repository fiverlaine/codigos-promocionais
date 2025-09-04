import React from 'react';
import { CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { PromoCode } from '../types';

interface PromoCardProps {
  promo: PromoCode;
  onClick: () => void;
}

const PromoCard: React.FC<PromoCardProps> = ({ promo, onClick }) => {
  const getBadgeConfig = () => {
    if (promo.status === 'coming_soon') {
      return {
        text: 'Em breve',
        className: 'bg-gradient-to-r from-orange-500 to-orange-600'
      };
    } else if (promo.status === 'sold_out') {
      return {
        text: 'Esgotado',
        className: 'bg-gradient-to-r from-red-500 to-red-600'
      };
    }
    return null;
  };

  const badgeConfig = getBadgeConfig();

  return (
    <div 
      className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border ${
        promo.isMainOffer 
          ? 'border-green-500 ring-2 ring-green-500/30 hover:ring-green-400/50' 
          : promo.available 
            ? 'border-gray-800 hover:border-gray-700' 
            : 'border-gray-800 opacity-60'
      } group`}
      onClick={onClick}
    >
      {promo.isMainOffer && (
        <div 
          className="absolute -top-2 sm:-top-3 left-4 sm:left-6 inline-flex items-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 pointer-events-none rounded-[20px] px-1.5 py-0.5 text-[12px] leading-none text-white border-none"
          style={{
            background: 'linear-gradient(81deg, rgb(103, 217, 196) 10.42%, rgb(8, 151, 133) 61.86%)',
            boxShadow: 'rgba(20, 184, 161, 0.35) 0px 0px 9px 0px, rgba(20, 184, 161, 0.46) 0px 0px 23.2px 0px, rgba(0, 0, 0, 0.3) 0px 2.22px 7px 0px inset'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1.5L7.36709 3.75443C7.50809 4.12105 7.5786 4.30435 7.68824 4.45854C7.78541 4.5952 7.9048 4.71459 8.04146 4.81176C8.19565 4.9214 8.37895 4.9919 8.74557 5.13291L11 6L8.74557 6.86709C8.37895 7.00809 8.19565 7.0786 8.04146 7.18823C7.9048 7.28541 7.78541 7.4048 7.68824 7.54146C7.5786 7.69565 7.5081 7.87895 7.36709 8.24557L6.5 10.5L5.63291 8.24557C5.49191 7.87895 5.4214 7.69565 5.31177 7.54146C5.21459 7.4048 5.0952 7.28541 4.95854 7.18823C4.80435 7.0786 4.62105 7.00809 4.25443 6.86709L2 6L4.25443 5.13291C4.62105 4.99191 4.80435 4.9214 4.95854 4.81176C5.0952 4.71459 5.21459 4.5952 5.31177 4.45854C5.4214 4.30435 5.49191 4.12105 5.63291 3.75443L6.5 1.5Z" fill="white"></path>
            <path d="M2.25 11V8.5M2.25 3.5V1M1 2.25H3.5M1 9.75H3.5M6.5 1.5L5.63291 3.75443C5.49191 4.12105 5.4214 4.30435 5.31177 4.45854C5.21459 4.5952 5.0952 4.71459 4.95854 4.81176C4.80435 4.9214 4.62105 4.99191 4.25443 5.13291L2 6L4.25443 6.86709C4.62105 7.00809 4.80435 7.0786 4.95854 7.18823C5.0952 7.28541 5.21459 7.4048 5.31177 7.54146C5.4214 7.69565 5.49191 7.87895 5.63291 8.24557L6.5 10.5L7.36709 8.24557C7.5081 7.87895 7.5786 7.69565 7.68824 7.54146C7.78541 7.4048 7.9048 7.28541 8.04146 7.18823C8.19565 7.0786 8.37895 7.00809 8.74557 6.86709L11 6L8.74557 5.13291C8.37895 4.99191 8.19565 4.9214 8.04146 4.81176C7.9048 4.71459 7.78541 4.5952 7.68824 4.45854C7.5786 4.30435 7.50809 4.12105 7.36709 3.75443L6.5 1.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          Exclusivo
        </div>
      )}
      
      {badgeConfig && !promo.isMainOffer && (
        <div className={`absolute -top-2 right-4 sm:right-6 ${badgeConfig.className} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
          {badgeConfig.text}
        </div>
      )}

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src={promo.brokerLogo} 
              alt={promo.broker}
              className="h-8 sm:h-12 w-auto object-contain rounded-lg bg-white p-1 sm:p-2"
            />
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">{promo.broker}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{promo.title}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-green-400">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs font-medium hidden sm:inline">Verificado</span>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <div className={`text-xl sm:text-3xl font-bold ${promo.isMainOffer ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600' : 'text-white'}`}>
            {promo.bonus}
          </div>
          <div className="flex items-center space-x-1 text-gray-500 mt-1 sm:mt-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs">Verificado em {new Date(promo.verifiedDate).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>

        {promo.status === 'coming_soon' && (
          <div className="mt-3 sm:mt-4 p-3 bg-orange-900/30 border border-orange-600/30 rounded-lg">
            <p className="text-xs sm:text-sm text-orange-300">
              Esta oferta estará disponível em breve. Cadastre-se agora na nossa lista de espera!
            </p>
          </div>
        )}

        {promo.status === 'sold_out' && (
          <div className="mt-3 sm:mt-4 p-3 bg-red-900/30 border border-red-600/30 rounded-lg">
            <p className="text-xs sm:text-sm text-red-300">
              Esta oferta foi esgotada devido à alta demanda. Novas vagas em breve!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromoCard;
