import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Copy, ExternalLink, Gift } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      icon: HelpCircle,
      question: 'Como funciona o processo de usar um código promocional?',
      answer: 'É simples: encontre a oferta desejada, copie o código, acesse a corretora através do nosso link e cole o código no campo "Código Promocional" durante o cadastro ou primeiro depósito.'
    },
    {
      icon: Search,
      question: 'Como vocês verificam se os códigos realmente funcionam?',
      answer: 'Nossa equipe testa cada código diariamente, fazendo cadastros de teste nas corretoras para garantir que as ofertas estejam ativas e funcionando corretamente.'
    },
    {
      icon: Copy,
      question: 'Por que alguns códigos estão marcados como indisponíveis?',
      answer: 'Algumas corretoras têm ofertas limitadas por tempo ou quantidade. Quando isso acontece, marcamos como indisponível até uma nova oferta ser negociada com a corretora.'
    },
    {
      icon: ExternalLink,
      question: 'É seguro usar estes códigos promocionais?',
      answer: 'Sim, todos os códigos são obtidos através de parcerias oficiais com as corretoras. Você será sempre redirecionado para os sites oficiais das corretoras licenciadas.'
    },
    {
      icon: Gift,
      question: 'O que fazer se o código não funcionar na corretora?',
      answer: 'Entre em contato conosco imediatamente através do nosso suporte. Verificaremos o problema e, se necessário, forneceremos um código alternativo válido.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="mb-8 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Perguntas Frequentes</h2>
        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-2">
          Tire suas dúvidas sobre como funciona nosso sistema de códigos promocionais.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const Icon = faq.icon;
          const isOpen = openFaq === index;
          
          return (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors group"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-500 transition-colors">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="font-semibold text-white text-sm sm:text-base group-hover:text-green-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-4 sm:p-6 pt-0 border-t border-gray-800">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        
      </div>
    </section>
  );
};

export default HowItWorks;
