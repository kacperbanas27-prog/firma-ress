/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Product = {
  id: string;
  name: string;
  price: string;
  material: string;
  gender: 'male' | 'female';
  description: string;
  specs: {
    gramatura: string;
    surowiec: string;
    wykonczenie: string;
  };
};

export type Category = {
  name: string;
  slug: string;
};

export const CATEGORIES: Category[] = [
  { name: 'T-Shirty', slug: 't-shirty' },
  { name: 'Polary', slug: 'polary' },
  { name: 'Koszulki Polo', slug: 'koszulki-polo' },
  { name: 'Bluzy', slug: 'bluzy' },
  { name: 'Gastronomia', slug: 'gastronomia' },
];

export const PRODUCTS_DATA: Record<string, Product[]> = {
  't-shirty': [
    { 
      id: 't-shirt-meski-premium',
      name: 'T-shirt Męski Premium', 
      price: '45.00 PLN', 
      material: '100% Bawełna, 50/50 Elanobawełna', 
      gender: 'male',
      description: 'Klasyczny t-shirt męski o wysokiej gramaturze, idealny do znakowania haftem lub nadrukiem.',
      specs: {
        gramatura: '180g/m2 - 210g/m2',
        surowiec: 'Dzianina jednołożyskowa Single Jersey',
        wykonczenie: 'Ściągacz z dodatkiem elastanu'
      }
    },
    { 
      id: 't-shirt-damski-slim',
      name: 'T-shirt Damski Slim', 
      price: '42.00 PLN', 
      material: '100% Bawełna', 
      gender: 'female',
      description: 'Dopasowany krój podkreślający sylwetkę, wykonany z miękkiej bawełny czesanej.',
      specs: {
        gramatura: '160g/m2',
        surowiec: '100% Bawełna Czesana',
        wykonczenie: 'Taliowany fason, szwy boczne'
      }
    },
    // Add more as needed...
  ],
  'polary': [
    { 
      id: 'polar-heavy-duty',
      name: 'Polar Męski Heavy Duty', 
      price: '120.00 PLN', 
      material: 'Gramatura 360g', 
      gender: 'male',
      description: 'Bardzo ciepły polar z wzmocnieniami na ramionach i łokciach.',
      specs: {
        gramatura: '360g/m2',
        surowiec: '100% Poliester Microfleece',
        wykonczenie: 'Wykończenie antypillingowe'
      }
    }
  ],
  // ... other categories can be filled similarly
};
