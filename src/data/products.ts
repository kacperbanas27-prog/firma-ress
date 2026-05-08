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
      id: 't-shirt-meski-basic',
      name: 'T-shirt Męski Basic', 
      price: '39.00 PLN', 
      material: '100% Bawełna', 
      gender: 'male',
      description: 'Klasyczny t-shirt męski z krótkim rękawem, wykonany z wysokiej jakości bawełny.',
      image: '/meskie/t-shirt-krotki-rekaw.png',
      specs: {
        gramatura: '160g/m2',
        surowiec: '100% Bawełna Single Jersey',
        wykonczenie: 'Wzmocnienie na ramionach'
      }
    },
    { 
      id: 'longsleeve-meski-standard',
      name: 'Longsleeve Męski Standard', 
      price: '55.00 PLN', 
      material: '100% Bawełna', 
      gender: 'male',
      description: 'Komfortowa koszulka męska z długim rękawem, idealna na chłodniejsze dni.',
      image: '/meskie/longsleeve-meski.png',
      specs: {
        gramatura: '180g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Dekolt wykończony ściągaczem'
      }
    }
  ],
  'polary': [],
  'koszulki-polo': [],
  'bluzy': [],
  'gastronomia': []
};
