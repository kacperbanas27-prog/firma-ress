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
  image?: string;
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
      image: '/t-shirt-meski-premium.jpg',
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
      image: '/t-shirt-damski-slim.jpg',
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
      image: '/polar-heavy-duty.jpg',
      specs: {
        gramatura: '360g/m2',
        surowiec: '100% Poliester Microfleece',
        wykonczenie: 'Wykończenie antypillingowe'
      }
    }
  ],
  'koszulki-polo': [
    {
      id: 'polo-cotton-classic',
      name: 'Koszulka Polo Cotton Classic',
      price: '55.00 PLN',
      material: '100% Bawełna Pique',
      gender: 'male',
      description: 'Elegancka koszulka polo wykonana z grubej bawełny o splotu pique.',
      image: '/polo-cotton-classic.jpg',
      specs: {
        gramatura: '200g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Kołnierzyk i mankiety z dzianiny ściągaczowej'
      }
    }
  ],
  'bluzy': [
    {
      id: 'bluza-hoodie-premium',
      name: 'Bluza z Kapturem Premium',
      price: '95.00 PLN',
      material: '80% Bawełna, 20% Poliester',
      gender: 'male',
      description: 'Ciepła bluza z kapturem i kieszenią typu kangurka.',
      image: '/bluza-hoodie-premium.jpg',
      specs: {
        gramatura: '280g/m2',
        surowiec: 'Czesana strona wewnętrzna',
        wykonczenie: 'Dwuwarstwowy kaptur'
      }
    }
  ],
  'gastronomia': [
    {
      id: 'fartuch-kelnerski-pro',
      name: 'Fartuch Kelnerski Pro',
      price: '35.00 PLN',
      material: '65% Poliester, 35% Bawełna',
      gender: 'male',
      description: 'Profesjonalny fartuch kelnerski z praktyczną kieszenią.',
      image: '/fartuch-kelnerski-pro.jpg',
      specs: {
        gramatura: '190g/m2',
        surowiec: 'Tkanina o splocie płóciennym',
        wykonczenie: 'Wzmocnione szwy'
      }
    }
  ]
};
