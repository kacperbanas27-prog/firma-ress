/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, ShieldCheck, Ruler, Palette, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES } from '../data/products';

export default function ProductDetail() {
  const { categorySlug, productId } = useParams();
  
  const categoryProducts = PRODUCTS_DATA[categorySlug || ''] || [];
  const product = categoryProducts.find(p => p.id === productId);
  const category = CATEGORIES.find(c => c.slug === categorySlug);

  if (!product || !category) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Nie odnaleziono produktu.</h2>
        <NavLink to="/" className="btn-primary">Wróć do strony głównej</NavLink>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-12">
        <NavLink 
          to={`/produkty/${categorySlug}`} 
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-blue transition-all w-fit"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Kolekcja: {category.name}
        </NavLink>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Product Image - Sticky for desktop */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-[4/5] bg-gray-50 rounded-sm overflow-hidden flex items-center justify-center p-12 lg:p-24 group">
               {product.image ? (
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                 />
               ) : (
                 <div className="w-full h-full border-8 border-dashed border-gray-100 flex items-center justify-center text-gray-100 font-black italic uppercase text-9xl group-hover:scale-105 transition-transform duration-700 select-none">
                   {product.name.charAt(0)}
                 </div>
               )}
               
               {/* Editorial Tag */}
               <div className="absolute top-12 left-12 transform -rotate-90 origin-left border-l-4 border-brand-blue pl-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Specyfikacja Rzemieślnicza</span>
               </div>

               <div className="absolute bottom-12 right-12">
                 <ShieldCheck size={48} className="text-brand-blue opacity-20" />
               </div>
            </div>

            {/* Technical Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-gray-100 border border-gray-100">
               {[
                 { label: 'Gramatura', val: product.specs.gramatura },
                 { label: 'Surowiec', val: product.specs.surowiec },
                 { label: 'Wykończenie', val: product.specs.wykonczenie }
               ].map((spec) => (
                 <div key={spec.label} className="bg-white p-8">
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{spec.label}</span>
                    <p className="text-xs font-bold text-brand-dark leading-relaxed">{spec.val}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Product Sidebar Info - Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-12">
            <header className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-brand-blue text-white px-2 py-0.5 text-[8px] font-black uppercase tracking-widest">Premium</span>
                <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">ID: #{product.id.split('-').pop()}</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-brand-dark leading-[0.85]">
                {product.name}
              </h1>
              <div className="w-20 h-2 bg-brand-blue" />
            </header>

            <div className="space-y-8">
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Material Selection */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Surowce Dostępne</label>
                <div className="flex flex-wrap gap-2">
                  <button className="px-6 py-4 bg-brand-dark text-white text-[10px] font-black uppercase italic tracking-widest rounded-sm shadow-xl">
                    Bawełna 100%
                  </button>
                  <button className="px-6 py-4 bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase italic tracking-widest rounded-sm hover:border-brand-blue hover:text-brand-blue transition-all">
                    Elanobawełna
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="py-8 border-y border-slate-100">
                <div className="flex items-baseline gap-2 mb-1">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cena bazowa:</span>
                   <span className="text-4xl font-black italic text-brand-blue tracking-tighter">{product.price}</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase">netto</span>
                </div>
                <p className="text-[11px] font-black text-brand-dark uppercase tracking-[0.15em] mt-4 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                   Minimalne zamówienie: 50 sztuk
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4">
                 <a href="tel:+48501893106" className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white h-20 rounded-sm flex items-center justify-between px-8 transition-all active:scale-[0.98] group overflow-hidden relative shadow-2xl shadow-brand-blue/20">
                    <span className="font-black italic text-2xl uppercase tracking-tighter relative z-10">ZAPYTAJ O WYCENĘ SZCZEGÓŁOWĄ</span>
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform relative z-10" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                 </a>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <NavLink to="/rozmiary" className="flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-sm text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-brand-dark transition-all">
                       <Ruler size={14} /> Tabela Rozmiarów
                    </NavLink>
                    <button className="flex items-center justify-center gap-3 py-4 border border-slate-100 rounded-sm text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-brand-dark transition-all">
                       <Palette size={14} /> Karta Produktu (PDF)
                    </button>
                 </div>
              </div>
            </div>

            {/* Branding Footer for sidebar */}
            <div className="pt-12">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-blue flex items-center justify-center text-[10px] font-black italic text-brand-blue">R</div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 leading-none">RESS.PL Heritage S.A.</span>
               </div>
               <p className="text-[9px] text-slate-300 font-medium uppercase tracking-widest leading-loose">
                 Projektowane i produkowane w Krakowie zgodnie z normami ISO 9001:2015 oraz standardami HACCP.
               </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
