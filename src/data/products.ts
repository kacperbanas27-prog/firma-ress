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
  't-shirty': [],
  'polary': [],
  'koszulki-polo': [],
  'bluzy': [],
  'gastronomia': []
};
