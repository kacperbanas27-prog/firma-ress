/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Sizes() {
  const tables = [
    { title: 'T-Shirt Damski', data: [['S', '50 cm', '66 cm'], ['M', '53 cm', '69 cm'], ['L', '56 cm', '72 cm'], ['XL', '59 cm', '74 cm'], ['XXL', '62 cm', '77 cm']] },
    { title: 'T-Shirt Męski', data: [['S', '50 cm', '66 cm'], ['M', '53 cm', '69 cm'], ['L', '56 cm', '72 cm'], ['XL', '59 cm', '74 cm'], ['XXL', '62 cm', '77 cm']] },
    { title: 'Polo Damskie', data: [['S', '50 cm', '66 cm'], ['M', '53 cm', '69 cm'], ['L', '56 cm', '72 cm'], ['XL', '59 cm', '74 cm'], ['XXL', '62 cm', '77 cm']] },
    { title: 'Polo Męskie', data: [['S', '50 cm', '66 cm'], ['M', '53 cm', '69 cm'], ['L', '56 cm', '72 cm'], ['XL', '59 cm', '74 cm'], ['XXL', '62 cm', '77 cm']] }
  ];

  return (
    <section className="container mx-auto px-4 pt-32 mb-24">
      <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Specyfikacja techniczna</span>
      <h2 className="text-5xl lg:text-7xl heading-bold mb-16 text-slate-800">
        Tabele<br />rozmiarów.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {tables.map((table) => (
          <div key={table.title} className="border border-slate-100 rounded-sm p-8 bg-white shadow-sm overflow-hidden">
             <div className="flex items-center gap-3 mb-8">
               <div className="w-4 h-4 bg-brand-blue" />
               <h3 className="text-xl heading-bold text-slate-800">{table.title}</h3>
             </div>
             <table className="w-full text-left">
               <thead>
                 <tr className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-300 border-b border-slate-100">
                   <th className="py-4">Rozmiar</th>
                   <th className="py-4">Szerokość (A)</th>
                   <th className="py-4">Długość (B)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 {table.data.map((row) => (
                   <tr key={row[0]} className="hover:bg-slate-50 transition-colors">
                     <td className="py-4 font-black italic text-brand-blue">{row[0]}</td>
                     <td className="py-4 text-xs font-medium text-slate-500 tracking-widest">{row[1]}</td>
                     <td className="py-4 text-xs font-medium text-slate-500 tracking-widest">{row[2]}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-8 rounded-sm flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-brand-blue rounded-full flex items-center justify-center text-brand-blue font-black italic text-sm shrink-0">A</div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-[200px]">
              Szerokość mierzona 1 cm poniżej rękawów, wszerz koszulki.
            </p>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-brand-blue rounded-full flex items-center justify-center text-brand-blue font-black italic text-sm shrink-0">B</div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-[200px]">
              Długość najwyższego punktu ramienia do dołu koszulki.
            </p>
         </div>
      </div>
    </section>
  );
}
