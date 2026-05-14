/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ChevronRight, ArrowRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS_DATA } from '../data/products';
import ProductImageSlider from '../components/ProductImageSlider';

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
    <section className="container mx-auto px-4 pt-24 md:pt-32 mb-16">
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 text-center lg:text-left">
           <div>
             <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">Kolekcja rzemieślnicza</span>
             <h1 className="text-4xl sm:text-5xl lg:text-7xl heading-bold text-slate-800 uppercase italic font-black tracking-tighter leading-[1] sm:leading-[0.9]">{category.name}</h1>
           </div>
           <div className="flex bg-gray-200 p-1 rounded-sm w-fit">
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

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <NavLink 
                key={product.id} 
                to={`/produkty/${slug}/${product.id}`}
                className="group bg-white p-2 rounded-sm border border-slate-100 transition-all hover:shadow-xl block"
              >
                <div className="bg-white aspect-square mb-4 flex items-center justify-center overflow-hidden relative border border-slate-100/50">
                   {product.image ? (
                     <ProductImageSlider 
                       mainImage={product.image}
                       gallery={product.gallery}
                       alt={product.name}
                       interval={2500}
                     />
                   ) : (
                     <div className="w-full h-full border-4 border-dashed border-slate-200 flex items-center justify-center text-slate-200 font-black italic uppercase text-center text-2xl">
                       {product.name.split(' ')[0]} {gender === 'male' ? 'M' : 'K'}
                     </div>
                   )}
                </div>
                <div className="p-3">
                  <h4 className="heading-bold text-base mb-1">{product.name}</h4>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-brand-blue font-black italic text-sm">{product.price}</span>
                    <button className="bg-brand-blue text-white p-2 rounded-sm group-hover:scale-110 transition-transform">
                      <ArrowRight size={14} />
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

