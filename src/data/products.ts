/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProductColor = {
  name: string;
  hex: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: string;
  material: string;
  gender: 'male' | 'female';
  description: string;
  image?: string;
  gallery?: string[];
  colors?: ProductColor[];
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
      price: '45.00 zł', 
      material: '100% Bawełna', 
      gender: 'male',
      description: 'Klasyczny t-shirt męski z krótkim rękawem, wykonany z wysokiej jakości bawełny.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/0267195dbff81dcee9d4f09c88a5ad38fe1d1d77/t-shirty/t-shirt-krotki-rekaw.png.png',
      colors: [
        { name: 'Biały', hex: '#FFFFFF', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/0267195dbff81dcee9d4f09c88a5ad38fe1d1d77/t-shirty/t-shirt-krotki-rekaw.png.png' },
        { name: 'Czarny', hex: '#000000', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_czarny-1223x1536.png' },
        { name: 'Czerwony', hex: '#E21E26', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_czerwony-250x314.png' },
        { name: 'Pomarańczowy', hex: '#F99E1C', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_orange-250x314.png' },
        { name: 'Zielony', hex: '#228B22', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_zielony-250x314.png' },
        { name: 'Żółty', hex: '#FFD700', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_zolty-250x314.png' },
        { name: 'Błękitny', hex: '#87CEEB', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_blekitny-250x314.png' },
        { name: 'Brązowy', hex: '#4B3621', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/750c5777b6b2772a78b06df3498a35b0d3ab4849/T-shirty/M%C4%99skie/kolory%20t-shirty%20100%25/ress_tshirt_brazowy2.webp' },
        { name: 'Rudy', hex: '#CD5700', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/750c5777b6b2772a78b06df3498a35b0d3ab4849/T-shirty/M%C4%99skie/kolory%20t-shirty%20100%25/ress_tshirt_rudy-700x879.webp' },
        { name: 'Turkusowy', hex: '#008B8B', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/750c5777b6b2772a78b06df3498a35b0d3ab4849/T-shirty/M%C4%99skie/kolory%20t-shirty%20100%25/ress_tshirt_turkusowy3-700x879.webp' }
      ],
      gallery: [
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_czarny-1223x1536.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_czerwony-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_orange-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_zielony-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_zolty-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirt/Ress_tshirt_blekitny-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/750c5777b6b2772a78b06df3498a35b0d3ab4849/T-shirty/M%C4%99skie/kolory%20t-shirty%20100%25/ress_tshirt_brazowy2.webp',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/750c5777b6b2772a78b06df3498a35b0d3ab4849/T-shirty/M%C4%99skie/kolory%20t-shirty%20100%25/ress_tshirt_rudy-700x879.webp',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/750c5777b6b2772a78b06df3498a35b0d3ab4849/T-shirty/M%C4%99skie/kolory%20t-shirty%20100%25/ress_tshirt_turkusowy3-700x879.webp'
      ],
      specs: {
        gramatura: '160g/m2',
        surowiec: '100% Bawełna Single Jersey',
        wykonczenie: 'Dekolt wykończony ściągaczem'
      }
    },
    { 
      id: 'longsleeve-meski-basic',
      name: 'Longsleeve Męski Basic', 
      price: '45.00 zł', 
      material: '100% Bawełna', 
      gender: 'male',
      description: 'Komfortowa koszulka męska z długim rękawem.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/0267195dbff81dcee9d4f09c88a5ad38fe1d1d77/t-shirty/longsleeve-meski.png.png',
      colors: [
        { name: 'Biały', hex: '#FFFFFF', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/0267195dbff81dcee9d4f09c88a5ad38fe1d1d77/t-shirty/longsleeve-meski.png.png' },
        { name: 'Błękitny', hex: '#87CEEB', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_blekitny-700x879.png' },
        { name: 'Czerwony', hex: '#E21E26', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_czerwony-700x879.png' },
        { name: 'Pomarańczowy', hex: '#F99E1C', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_pomaranczowy-700x879.png' },
        { name: 'Zielony', hex: '#228B22', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_zielony-700x879.png' },
        { name: 'Żółty', hex: '#FFD700', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_zolty-700x879.png' }
      ],
      gallery: [
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_blekitny-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_czerwony-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_pomaranczowy-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_zielony-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/M%C4%99skie/kolory%20t-shirty%20dlugie/RESS_tshirt_dl_rekaw_meski_zolty-700x879.png'
      ],
      specs: {
        gramatura: '180g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Miękki splot'
      }
    },
    {
      id: 't-shirt-damski-bialy',
      name: 'T-shirt Damski',
      price: '39.00 zł',
      material: '100% Bawełna',
      gender: 'female',
      description: 'Damska koszulka w kolorze białym, taliowany krój.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/RESS_tshirt_bialy_damski.png',
      colors: [
        { name: 'Biały', hex: '#FFFFFF', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/RESS_tshirt_bialy_damski.png' },
        { name: 'Czarny', hex: '#000000', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_czarny_damski-1223x1536.png' },
        { name: 'Czerwony', hex: '#E21E26', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_czerwony_damski-1-250x314.png' },
        { name: 'Chabrowy', hex: '#0047AB', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_chaber-250x314.png' },
        { name: 'Melanż', hex: '#B2BEB5', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_melanz-1-250x314.png' },
        { name: 'Pomarańczowy', hex: '#F99E1C', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_pomaranczowy-1-250x314.png' },
        { name: 'Zielony', hex: '#228B22', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_zielony-1-250x314.png' },
        { name: 'Żółty', hex: '#FFD700', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_zolty-1-250x314.png' }
      ],
      gallery: [
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_czarny_damski-1223x1536.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_czerwony_damski-1-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_chaber-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_melanz-1-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_pomaranczowy-1-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_zielony-1-250x314.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt/RESS_tshirt_damski_zolty-1-250x314.png'
      ],
      specs: {
        gramatura: '150g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Szwy boczne'
      }
    },
    {
      id: 'longsleeve-damski-bialy',
      name: 'Longsleeve Damski',
      price: '55.00 zł',
      material: '100% Bawełna',
      gender: 'female',
      description: 'Damska koszulka z długim rękawem, idealna baza stylizacji.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/RESS_tshirtdamski_dlrekaw_bialy.png',
      colors: [
        { name: 'Biały', hex: '#FFFFFF', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/RESS_tshirtdamski_dlrekaw_bialy.png' },
        { name: 'Błękitny', hex: '#87CEEB', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_blekitny-700x879.png' },
        { name: 'Czerwony', hex: '#E21E26', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_czerwony-700x879.png' },
        { name: 'Pomarańczowy', hex: '#F99E1C', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_pomaranczowe-700x879.png' },
        { name: 'Zielony', hex: '#228B22', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_zielone-700x879.png' },
        { name: 'Żółty', hex: '#FFD700', image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_zolte-700x879.png' }
      ],
      gallery: [
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_blekitny-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_czerwony-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_pomaranczowe-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_zielone-700x879.png',
        'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/kolory%20t-shirt%20dlugi/RESS_tshirtdamski_dlrekaw_zolte-700x879.png'
      ],
      specs: {
        gramatura: '160g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Miękki materiał'
      }
    },
    {
      id: 't-shirt-damski-spring',
      name: 'T-shirt Damski Spring',
      price: '45.00 zł',
      material: '100% Bawełna',
      gender: 'female',
      description: 'Lekka koszulka damska z kolekcji wiosennej.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/DTS_02-1-700x1050.png',
      specs: {
        gramatura: '150g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Wzmocnione szwy'
      }
    },
    {
      id: 't-shirt-damski-casual',
      name: 'T-shirt Damski Casual',
      price: '42.00 zł',
      material: '100% Bawełna',
      gender: 'female',
      description: 'Codzienna koszulka damska o klasycznym kroju.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/DTS_01-1.png',
      specs: {
        gramatura: '160g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Ściągacz z elastanem'
      }
    },
    {
      id: 't-shirt-damski-summer',
      name: 'T-shirt Damski Summer',
      price: '44.00 zł',
      material: '100% Bawełna',
      gender: 'female',
      description: 'Lekka i przewiewna koszulka na lato.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/DTS_03-1-700x1050.png',
      specs: {
        gramatura: '145g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Dekolt wycięty'
      }
    },
    {
      id: 't-shirt-damski-premium',
      name: 'T-shirt Damski Premium',
      price: '48.00 zł',
      material: '100% Bawełna',
      gender: 'female',
      description: 'Wysokiej jakości koszulka damska o zwiększonej gramaturze.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/afe25bd8e4730474f39f5fdee4e5f7eab1ca0003/T-shirty/Damskie/DTS_04-1.png',
      specs: {
        gramatura: '180g/m2',
        surowiec: '100% Bawełna',
        wykonczenie: 'Silikonowanie materiału'
      }
    }
  ],
  'polary': [
    {
      id: 'polar-meski-classic',
      name: 'Polar Męski Classic',
      price: '89.00 zł',
      material: '100% Poliester',
      gender: 'male',
      description: 'Ciepła i wytrzymała bluza polarowa z pełnym zamkiem.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/main/polary/polar-meski.png',
      specs: {
        gramatura: '280g/m2',
        surowiec: 'Fleece, wykończenie antypillingowe',
        wykonczenie: 'Dwie kieszenie boczne na zamek'
      }
    }
  ],
  'koszulki-polo': [
    {
      id: 'polo-meskie-pique',
      name: 'Koszulka Polo Męska',
      price: '49.00 zł',
      material: '65% Bawełna / 35% Poliester',
      gender: 'male',
      description: 'Elegancka koszulka polo wykonana z dzianiny typu Pique.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/main/koszulki-polo/polo-meskie.png',
      specs: {
        gramatura: '200g/m2',
        surowiec: 'Pique (65% bawełna, 35% poliester)',
        wykonczenie: 'Kołnierzyk i mankiety z dzianiny ściągaczowej'
      }
    }
  ],
  'bluzy': [
    {
      id: 'bluza-meska-kaptur',
      name: 'Bluza Męska z Kapturem',
      price: '95.00 zł',
      material: '65% Bawełna / 35% Poliester',
      gender: 'male',
      description: 'Klasyczna "kangurka" z kapturem i kieszenią z przodu.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/main/bluzy/bluza-kaptur.png',
      specs: {
        gramatura: '280g/m2',
        surowiec: '65% bawełna, 35% poliester',
        wykonczenie: 'Wnętrze czesane'
      }
    }
  ],
  'gastronomia': [
    {
      id: 'fartuch-gastronomiczny',
      name: 'Fartuch Przedni Gastronomiczny',
      price: '35.00 zł',
      material: '65% Poliester / 35% Bawełna',
      gender: 'male',
      description: 'Wytrzymały fartuch ochronny dla personelu kuchennego i kelnerskiego.',
      image: 'https://raw.githubusercontent.com/kacperbanas27-prog/firma-ress/main/gastronomia/fartuch.png',
      specs: {
        gramatura: '240g/m2',
        surowiec: 'Twill (65% poliester, 35% bawełna)',
        wykonczenie: 'Duża kieszeń przednia'
      }
    }
  ]
};
