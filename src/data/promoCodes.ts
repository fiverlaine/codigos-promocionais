import { PromoCode } from '../types';

export const promoCodes: PromoCode[] = [
  {
    id: 'capital-binary-main',
    broker: 'Capital Binary',
    brokerLogo: 'https://i.postimg.cc/fWYfQbyN/logo.png',
    title: 'OFERTA EXCLUSIVA',
    bonus: 'Bônus de R$300',
    code: 'PROMO300',
    verified: true,
    verifiedDate: '2025-01-06',
    available: true,
    status: 'available',
    isMainOffer: true,
    terms: [
      'Válido apenas para novos usuários',
      'Depósito mínimo de R$30',
      'Bônus creditado na hora'
    ],
    instructions: [
      'Copie o código promocional',
      'Clique em "Ir para a Capital Binary"',
      'Faça seu cadastro na Capital Binary',
      'No campo "Código", clique e cole o código',
      'Complete seu primeiro depósito'
    ],
    brokerUrl: 'https://capitalbinary.com/register'
  },
  {
    id: 'xtb-offer',
    broker: 'XTB',
    brokerLogo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x40/ef4444/ffffff?text=XTB',
    title: 'Bônus de Boas-vindas',
    bonus: 'Até R$2.500',
    code: 'XTB2500',
    verified: true,
    verifiedDate: '2025-01-05',
    available: false,
    status: 'coming_soon',
    terms: [
      'Válido apenas para novos clientes',
      'Depósito mínimo de R$1.000',
      'Bônus baseado no valor do depósito',
      'Rollover de 25x o valor do bônus'
    ],
    instructions: [
      'Copie o código promocional',
      'Acesse o site da XTB',
      'Faça seu cadastro',
      'Use o código no primeiro depósito'
    ],
    brokerUrl: 'https://xtb.com/br'
  },
  {
    id: 'avatrade-offer',
    broker: 'AvaTrade',
    brokerLogo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x40/10b981/ffffff?text=AVA',
    title: 'Cashback Especial',
    bonus: 'R$500 Cashback',
    code: 'AVA500CB',
    verified: true,
    verifiedDate: '2025-01-04',
    available: false,
    status: 'sold_out',
    terms: [
      'Válido para novos traders',
      'Cashback após 30 dias de trading',
      'Volume mínimo de negociação necessário'
    ],
    instructions: [
      'Copie o código promocional',
      'Acesse o site da AvaTrade',
      'Complete o registro',
      'Use o código promocional'
    ],
    brokerUrl: 'https://avatrade.com.br'
  },
  {
    id: 'etoro-offer',
    broker: 'eToro',
    brokerLogo: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x40/3b82f6/ffffff?text=eToro',
    title: 'Spread Reduzido',
    bonus: 'Taxa 0% por 30 dias',
    code: 'ETORO0TX',
    verified: true,
    verifiedDate: '2025-01-03',
    available: false,
    status: 'sold_out',
    terms: [
      'Aplicável apenas a novos usuários',
      'Taxa zero em operações selecionadas',
      'Válido por 30 dias após o registro'
    ],
    instructions: [
      'Copie o código promocional',
      'Visite o site da eToro',
      'Crie sua conta',
      'Insira o código na ativação'
    ],
    brokerUrl: 'https://etoro.com/br'
  }
];
