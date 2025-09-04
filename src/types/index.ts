export interface PromoCode {
  id: string;
  broker: string;
  brokerLogo: string;
  title: string;
  bonus: string;
  code: string;
  verified: boolean;
  verifiedDate: string;
  available: boolean;
  status: 'available' | 'coming_soon' | 'sold_out';
  isMainOffer?: boolean;
  terms: string[];
  instructions: string[];
  brokerUrl: string;
}

export interface NavSection {
  id: string;
  label: string;
  active: boolean;
}
