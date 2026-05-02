/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ChevronRight, ArrowRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS_DATA } from '../data/products';

export default function CategoryDetail() {
  const { slug } = useParams();
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const category = CATEGORIES.find(c => c.slug === slug);
  
  const allCategoryProducts = PRODUCTS_DATA[slug || ''] || [];
  const products = allCategoryProducts.filter(p => p.gender === gender);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Nie odnaleziono kategorii.</h2>
        <NavLink to="/" className="btn-primary">Wróć do strony głównej</NavLink>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="mb-12">
        <NavLink to="/" className="text-brand-blue text-[10px] uppercase font-black tracking-widest flex items-center gap-2 mb-8 hover:gap-4 transition-all w-fit">
          <ChevronLeft size={14} /> Powrót do strony głównej
        </NavLink>
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
           <div>
             <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Kolekcja rzemieślnicza</span>
             <h1 className="text-5xl lg:text-7xl heading-bold text-slate-800 uppercase italic font-black tracking-tighter leading-[0.9]">{category.name}</h1>
           </div>
           <div className="flex bg-gray-200 p-1 rounded-sm">
             <button 
               onClick={() => setGender('male')}
               className={`px-6 py-2 text-[10px] font-black uppercase italic tracking-widest transition-all ${gender === 'male' ? 'bg-white shadow-sm opacity-100' : 'opacity-40 hover:opacity-60'}`}
             >
               Mężczyzna
             </button>
             <button 
               onClick={() => setGender('female')}
               className={`px-6 py-2 text-[10px] font-black uppercase italic tracking-widest transition-all ${gender === 'female' ? 'bg-white shadow-sm opacity-100' : 'opacity-40 hover:opacity-60'}`}
             >
               Kobieta
             </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Categories */}
        <div className="lg:w-1/4 space-y-1 hidden lg:block">
          <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-6 block">Inne Kategorie</span>
          {CATEGORIES.map((cat) => (
            <NavLink 
              key={cat.slug} 
              to={`/produkty/${cat.slug}`}
              className={({ isActive }) => `
                w-full text-left px-6 py-4 text-xs font-black uppercase italic tracking-tighter transition-all flex items-center justify-between group
                ${isActive ? 'bg-white border-l-4 border-brand-blue shadow-sm' : 'hover:bg-white hover:shadow-sm opacity-60 hover:opacity-100'}
              `}
            >
              {cat.name}
              <ChevronRight size={16} className={cat.slug === slug ? 'text-brand-blue' : 'text-slate-300'} />
            </NavLink>
          ))}
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <NavLink 
                key={product.id} 
                to={`/produkty/${slug}/${product.id}`}
                className="group bg-white p-2 rounded-sm border border-slate-100 transition-all hover:shadow-xl block"
              >
                <div className="bg-slate-50 aspect-square mb-6 flex items-center justify-center p-8 overflow-hidden relative">
                   {product.image ? (
                     <img 
                       src={product.image} 
                       alt={product.name} 
                       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                       referrerPolicy="no-referrer"
                     />
                   ) : (
                     <div className="w-full h-full border-4 border-dashed border-slate-200 flex items-center justify-center text-slate-200 font-black italic uppercase text-center text-2xl group-hover:scale-105 transition-transform">
                       {product.name.split(' ')[0]} {gender === 'male' ? 'M' : 'K'}
                     </div>
                   )}
                   <div className="absolute top-4 right-4 bg-white/80 px-2 py-1 text-[8px] font-bold uppercase tracking-widest">Premium quality</div>
                </div>
                <div className="p-4">
                  <h4 className="heading-bold text-lg mb-1">{product.name}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">{product.material}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-brand-blue font-black italic">{product.price}</span>
                    <button className="bg-brand-blue text-white p-2.5 rounded-sm group-hover:scale-110 transition-transform">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="bg-white p-12 text-center rounded-sm border border-slate-100">
               <p className="text-slate-400 font-medium italic">Obecnie brak produktów dla tej płci w wybranej kategorii. Sprawdź drugą sekcję.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

