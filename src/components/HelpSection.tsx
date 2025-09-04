import React from 'react';
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';

const HelpSection: React.FC = () => {
  const faqs = [
    {
      question: 'Os códigos promocionais são realmente gratuitos?',
      answer: 'Sim, todos os códigos promocionais em nossa plataforma são 100% gratuitos. Não cobramos nada pelos códigos.'
    },
    {
      question: 'Como vocês verificam se os códigos funcionam?',
      answer: 'Nossa equipe testa cada código diariamente, fazendo cadastros de teste nas corretoras para garantir que as ofertas estejam ativas.'
    },
    {
      question: 'Por que alguns códigos estão indisponíveis?',
      answer: 'Algumas corretoras têm ofertas limitadas por tempo ou quantidade. Quando isso acontece, marcamos como indisponível até uma nova oferta ser negociada.'
    },
    {
      question: 'É seguro usar estes códigos?',
      answer: 'Sim, todos os códigos são obtidos através de parcerias oficiais com as corretoras. Você será redirecionado sempre para os sites oficiais.'
    },
    {
      question: 'O que fazer se o código não funcionar?',
      answer: 'Entre em contato conosco imediatamente. Verificaremos o problema e, se necessário, forneceremos um código alternativo.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Central de Ajuda</h1>
        <p className="text-lg text-gray-600">
          Encontre respostas para as perguntas mais frequentes ou entre em contato conosco.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Chat Online</h3>
          <p className="text-sm text-gray-600 mb-4">Resposta imediata para suas dúvidas</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Iniciar Chat
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
            <Mail className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
          <p className="text-sm text-gray-600 mb-4">Resposta em até 24 horas</p>
          <a 
            href="mailto:suporte@promotrader.com"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors inline-block"
          >
            Enviar E-mail
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
            <Phone className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
          <p className="text-sm text-gray-600 mb-4">Suporte personalizado</p>
          <a 
            href="https://wa.me/5511999999999"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors inline-block"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <Clock className="h-5 w-5 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">Horários de Atendimento</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Chat Online & WhatsApp</h3>
            <p className="text-gray-600 text-sm">Segunda a Sexta: 9h às 18h</p>
            <p className="text-gray-600 text-sm">Sábado: 9h às 14h</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">E-mail</h3>
            <p className="text-gray-600 text-sm">24 horas por dia, 7 dias por semana</p>
            <p className="text-gray-600 text-sm">Resposta em até 24 horas úteis</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
