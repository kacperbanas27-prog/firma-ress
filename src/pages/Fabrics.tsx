/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Fabrics() {
  const sections = [
    {
      id: 'gastronomia',
      title: 'Tkaniny odzież gastronomiczna',
      stats: [
        { label: 'Skład', value: '65% poliester, 35% bawełna' },
        { label: 'Gramatura', value: '205 g/m²' },
      ],
      features: [
        'Wytrzymałość na tarcie i uszkodzenia mechaniczne',
        'Niska kurczliwość (+- 2%) w praniu 95°C (biała)',
        'Trwałość barw',
        'Wysoki komfort użytkowania'
      ]
    },
    {
      id: 'standardowe',
      title: 'Tkaniny standardowe',
      stats: [
        { label: 'Skład', value: '50% bawełna, 50% poliester' },
        { label: 'Gramatura', value: '190 g/m²' },
      ],
      features: [
        'Optymalne połączenie naturalności i trwałości',
        'Doskonała baza pod nadruki i hafty',
        'Wytrzymałość na częste pranie',
        'Klasyczny wygląd i splot'
      ]
    },
    {
      id: 'polary',
      title: 'Tkaniny na polary',
      stats: [
        { label: 'Skład', value: '100% Poliester (antypilling)' },
        { label: 'Gramatura', value: '270 g/m² lub 360 g/m²' },
      ],
      features: [
        'Oddychająca struktura',
        'Wykończenie antypillingowe (brak mechacenia)',
        'Nie ogranicza przepływu pary wodnej',
        'Wysoka izolacja termiczna'
      ]
    }
  ];

  return (
    <div className="pb-20">
      <section className="container mx-auto px-4 pt-32 mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-brand-blue font-black uppercase text-xs tracking-[0.3em] block mb-4"
        >
          Materiały i Surowce
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black italic text-brand-dark tracking-tighter uppercase"
        >
          Nasze <span className="text-brand-blue">Tkaniny</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-8 text-gray-500 font-medium leading-relaxed"
        >
          Jakość gotowego wyrobu zaczyna się od wyboru odpowiedniej dzianiny. 
          Stosujemy wyłącznie sprawdzone materiały o parametrach dostosowanych do przeznaczenia odzieży.
        </motion.p>
      </section>

      <div className="container mx-auto px-4 space-y-32">
        {sections.map((section, idx) => (
          <section key={section.id} id={section.id} className={`scroll-mt-32 flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="aspect-square bg-slate-50 border border-slate-100 rounded-sm overflow-hidden relative group flex items-center justify-center"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id={`pattern-${section.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#pattern-${section.id})`} />
                  </svg>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-200 rotate-90">
                  Miejsce na zdjęcie tkaniny
                </div>
                <div className="absolute inset-0 border-[20px] border-white/50 pointer-events-none" />
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                 <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-brand-dark mb-8">
                   {section.title}
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                   {section.stats.map(stat => (
                     <div key={stat.label} className="bg-slate-50 p-6 rounded-sm border-l-4 border-brand-blue text-left">
                       <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{stat.label}</span>
                       <p className="font-black italic text-lg text-brand-dark">{stat.value}</p>
                     </div>
                   ))}
                 </div>

                 <div className="text-left">
                  <h3 className="text-xs uppercase font-black tracking-widest text-brand-dark mb-4 pb-2 border-b-2 border-slate-100 inline-block">Charakterystyka:</h3>
                  <ul className="space-y-4">
                    {section.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-sm shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <div className="w-1.5 h-1.5 bg-current rounded-full" />
                        </div>
                        <span className="text-sm font-medium text-slate-600 line-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                 </div>

                 <div className="mt-12 p-4 bg-brand-dark text-white/50 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                   UWAGA: Kolory wyświetlane na monitorze mają charakter wyłącznie orientacyjny i mogą nie odzwierciedlać dokładnie rzeczywistych barw dzianiny.
                 </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className="container mx-auto px-4 mt-32 py-20 bg-brand-dark text-white rounded-sm text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
            Potrzebujesz tkaniny o specjalnych <span className="text-brand-blue">właściwościach?</span>
          </h2>
          <p className="max-w-xl mx-auto opacity-60 mb-12 font-medium">
            Jeżeli Twoje zamówienie wymaga specjalistycznego podejścia lub niestandardowych parametrów, nasza produkcja jest gotowa do testów.
          </p>
          <motion.a 
            href="/kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-blue text-white px-12 py-5 rounded-sm font-black uppercase italic tracking-widest hover:bg-brand-blue-hover transition-all inline-block"
          >
            Skonsultuj się z nami
          </motion.a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
      </section>
    </div>
  );
}
