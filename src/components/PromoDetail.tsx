import React, { useState } from 'react';
import { ArrowLeft, Copy, ExternalLink, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { PromoCode } from '../types';
import { generatePromoCode } from '../utils/codeGenerator';

interface PromoDetailProps {
  promo: PromoCode;
  onBack: () => void;
}

const PromoDetail: React.FC<PromoDetailProps> = ({ promo, onBack }) => {
  const [copied, setCopied] = useState(false);
  const [currentCode, setCurrentCode] = useState(promo.code);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCopyCode = async () => {
    try {
      // Primeiro tenta usar a API moderna do clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentCode);
      } else {
        // Fallback para ambientes sem suporte ou com restrições
        fallbackCopyTextToClipboard(currentCode);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Se a API moderna falhar, usa o método de fallback
      try {
        fallbackCopyTextToClipboard(currentCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.error('Erro ao copiar código:', fallbackError);
        // Em último caso, mostra o código para o usuário copiar manualmente
        showCopyFeedback();
      }
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Evita scroll no iOS
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (!successful) {
        throw new Error('Comando de cópia não suportado');
      }
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const showCopyFeedback = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleGenerateNewCode = async () => {
    setIsGenerating(true);
    // Simula um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 500));
    const newCode = generatePromoCode();
    setCurrentCode(newCode);
    setIsGenerating(false);
    setCopied(false); // Reset copied state
  };

  const handleGoToBroker = () => {
    window.open(promo.brokerUrl, '_blank');
  };

  const getUnavailableMessage = () => {
    if (promo.status === 'coming_soon') {
      return 'Oferta Em Breve';
    } else if (promo.status === 'sold_out') {
      return 'Oferta Esgotada';
    }
    return 'Oferta Indisponível';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm sm:text-base">Voltar às ofertas</span>
      </button>

      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
        <div className={`p-6 sm:p-8 ${promo.isMainOffer ? 'bg-gradient-to-r from-green-600 to-green-500' : 'bg-gradient-to-r from-gray-800 to-gray-900'} text-white`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img 
                src={promo.brokerLogo} 
                alt={promo.broker}
                className="h-12 sm:h-16 w-auto object-contain bg-white p-2 sm:p-3 rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">{promo.broker}</h1>
                <p className="text-green-100 text-base sm:text-lg">{promo.title}</p>
              </div>
            </div>
            
            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-4xl font-bold">{promo.bonus}</div>
              <div className="flex items-center space-x-1 mt-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300" />
                <span className="text-xs sm:text-sm">Verificado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Seu Código Promocional</h2>
              
              <div className="bg-gray-900 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-800">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-white break-all">{currentCode}</span>
                    <div className="flex space-x-2 w-full sm:w-auto">
                      <button
                        onClick={handleGenerateNewCode}
                        disabled={isGenerating}
                        className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 ${
                          isGenerating 
                            ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                            : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                        }`}
                      >
                        <RefreshCw className={`h-4 w-4 sm:h-5 sm:w-5 ${isGenerating ? 'animate-spin' : ''}`} />
                        <span className="hidden sm:inline">{isGenerating ? 'Gerando...' : 'Novo'}</span>
                      </button>
                      <button
                        onClick={handleCopyCode}
                        className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 flex-1 sm:flex-none justify-center ${
                          copied 
                            ? 'bg-green-600 text-white' 
                            : 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
                        }`}
                      >
                        {copied ? (
                          <>
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {promo.id === 'capital-binary-main' && (
                    <div className="bg-blue-900/30 border border-blue-600/30 rounded-lg p-3">
                      <p className="text-blue-200 text-xs sm:text-sm text-center">
                        💡 <strong>Dica:</strong> Clique em "Novo" para gerar um código único a cada uso!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {promo.available ? (
                <button
                  onClick={handleGoToBroker}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 sm:py-4 px-6 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>Ir para a {promo.broker}</span>
                </button>
              ) : (
                <div className={`w-full text-white py-3 sm:py-4 px-6 rounded-xl font-bold text-center flex items-center justify-center space-x-2 ${
                  promo.status === 'coming_soon' ? 'bg-orange-600' : 'bg-red-600'
                }`}>
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>{getUnavailableMessage()}</span>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Como Usar</h2>
              
              <div className="space-y-3 sm:space-y-4">
                {promo.instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-900/30 border border-yellow-600/30 rounded-xl">
            <h3 className="font-bold text-yellow-300 mb-3 flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Importante</span>
            </h3>
            <p className="text-yellow-200 text-xs sm:text-sm">
              Este código funciona apenas em corretoras que possuem um campo para "código promocional" durante o cadastro ou depósito. 
              Se você tentar usar em outras corretoras, não irá funcionar.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="font-bold text-white mb-3 sm:mb-4 text-lg sm:text-xl">Termos e Condições</h3>
            <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-800">
              <ul className="space-y-2 sm:space-y-3">
                {promo.terms.map((term, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-gray-300">
                    <span className="text-green-400 font-bold">•</span>
                    <span className="text-xs sm:text-sm">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoDetail;
