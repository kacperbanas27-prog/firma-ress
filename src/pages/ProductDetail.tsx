/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, ShieldCheck, Ruler, Palette, ArrowRight, Layers } from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES } from '../data/products';
import ProductImageSlider from '../components/ProductImageSlider';
import ColorPaletteModal from '../components/ColorPaletteModal';

export default function ProductDetail() {
  const { categorySlug, productId } = useParams();
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<'cotton' | 'elanocotton'>('cotton');
  
  const SIZES = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];
  const categoryProducts = PRODUCTS_DATA[categorySlug || ''] || [];
  const product = categoryProducts.find(p => p.id === productId);
  const category = CATEGORIES.find(c => c.slug === categorySlug);

  const isLongsleeve = product.id.includes('longsleeve');

  // Reset color selection when product changes
  useEffect(() => {
    setSelectedColorIndex(null);
    if (isLongsleeve) {
      setSelectedMaterial('elanocotton');
    } else {
      setSelectedMaterial('cotton');
    }
  }, [productId, isLongsleeve]);

  // Reset color selection if it becomes unavailable when changing material
  useEffect(() => {
    if (selectedColorIndex !== null && product?.colors) {
      const selectedColor = product.colors[selectedColorIndex];
      const isNewColor = ['Brązowy', 'Rudy', 'Turkusowy'].includes(selectedColor.name);
      if (isNewColor && selectedMaterial === 'elanocotton') {
        setSelectedColorIndex(null);
      }
    }
  }, [selectedMaterial, product, selectedColorIndex]);

  if (!product || !category) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Nie odnaleziono produktu.</h2>
        <NavLink to="/" className="btn-primary">Wróć do strony głównej</NavLink>
      </div>
    );
  }

  const sliderImages = product.image ? (product.gallery ? [product.image, ...product.gallery] : [product.image]) : [];
  const activeSliderIndex = selectedColorIndex !== null && product.colors 
    ? sliderImages.indexOf(product.colors[selectedColorIndex].image) 
    : undefined;

  const displayPrice = categorySlug === 't-shirty' && selectedMaterial === 'elanocotton'
    ? '46.00 zł'
    : product.price;

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12">
        {/* Back Button */}
        <div className="mb-8">
          <NavLink 
            to={`/produkty/${categorySlug}`}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-blue transition-colors group p-3 -m-3"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Powrót do: {category.name}
          </NavLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Product Image - Sticky for desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-6">
            <div className="relative aspect-[4/5] bg-white rounded-sm overflow-hidden flex items-center justify-center group mx-auto max-w-sm lg:max-w-none shadow-sm border border-slate-50">
               {product.image ? (
                 <ProductImageSlider 
                   mainImage={product.image}
                   gallery={product.gallery}
                   alt={product.name}
                   interval={3000}
                   activeIndex={activeSliderIndex !== -1 ? activeSliderIndex : undefined}
                 />
               ) : (
                 <div className="w-full h-full border-8 border-dashed border-gray-100 flex items-center justify-center text-gray-100 font-black italic uppercase text-8xl md:text-9xl select-none">
                   {product.name.charAt(0)}
                 </div>
               )}
            </div>

            {/* Technical Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-gray-100 border border-gray-100">
               {[
                 { label: 'Gramatura', val: product.specs.gramatura },
                 { label: 'Surowiec', val: product.specs.surowiec },
                 { label: 'Wykończenie', val: product.specs.wykonczenie }
               ].map((spec) => (
                 <div key={spec.label} className="bg-white p-4 lg:p-6 text-center md:text-left">
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{spec.label}</span>
                    <p className="text-xs font-bold text-brand-dark leading-relaxed">{spec.val}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Product Sidebar Info - Sticky */}
          <div className="lg:col-span-7 space-y-8">
            <header className="space-y-4 mb-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-brand-dark leading-[1] md:leading-[0.85]">
                {product.name}
              </h1>
              <div className="w-20 h-2 bg-brand-blue mx-auto lg:mx-0" />
            </header>

            <div className="space-y-8">
              {/* Price Display */}
              <div className="py-6 border-y border-slate-100 flex flex-col sm:flex-row items-center sm:items-baseline gap-2 justify-center lg:justify-start">
                <div className="flex items-baseline gap-2">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cena bazowa:</span>
                   <span className="text-3xl sm:text-4xl font-black italic text-brand-blue tracking-tighter">{displayPrice}</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase">netto</span>
                </div>
                <p className="text-[11px] font-black text-brand-dark uppercase tracking-[0.15em] sm:mt-3 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                   Min. 50 sztuk
                </p>
              </div>

              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed text-center lg:text-left">
                {product.description}
              </p>

              {/* Material Selection */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Surowce Dostępne</label>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => !isLongsleeve && setSelectedMaterial('cotton')}
                    disabled={isLongsleeve}
                    className={`px-6 py-4 text-[10px] font-black uppercase italic tracking-widest rounded-sm transition-all relative ${
                      selectedMaterial === 'cotton' 
                        ? 'bg-brand-dark text-white shadow-xl translate-y-[-2px]' 
                        : 'bg-white border border-slate-200 text-slate-400 hover:border-brand-blue hover:text-brand-blue'
                    } ${isLongsleeve ? 'opacity-40 grayscale cursor-not-allowed' : ''}`}
                  >
                    <span className={isLongsleeve ? 'line-through decoration-brand-dark decoration-2' : ''}>
                      Bawełna 100%
                    </span>
                  </button>
                  <button 
                    onClick={() => setSelectedMaterial('elanocotton')}
                    className={`px-6 py-4 text-[10px] font-black uppercase italic tracking-widest rounded-sm transition-all ${
                      selectedMaterial === 'elanocotton' 
                        ? 'bg-brand-dark text-white shadow-xl translate-y-[-2px]' 
                        : 'bg-white border border-slate-200 text-slate-400 hover:border-brand-blue hover:text-brand-blue'
                    }`}
                  >
                    Elanobawełna
                  </button>
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Wybierz Kolor</label>
                    <button 
                      onClick={() => setIsPaletteOpen(true)}
                      className="text-[9px] font-black text-brand-blue underline decoration-brand-blue/30 underline-offset-4 uppercase tracking-[0.15em] hover:text-brand-dark hover:decoration-brand-dark transition-all"
                    >
                      Pełna paleta kolorów
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color, index) => {
                      const isNewColor = ['Brązowy', 'Rudy', 'Turkusowy'].includes(color.name);
                      const isUnavailable = isNewColor && selectedMaterial === 'elanocotton';
                      
                      return (
                        <button
                          key={color.name}
                          onClick={() => !isUnavailable && setSelectedColorIndex(index)}
                          disabled={isUnavailable}
                          className={`w-10 h-10 rounded-full border-2 transition-all relative flex items-center justify-center p-0.5 ${
                            selectedColorIndex === index 
                              ? 'border-brand-blue scale-110 shadow-lg' 
                              : 'border-slate-100 hover:border-slate-300'
                          } ${isUnavailable ? 'opacity-30 grayscale cursor-not-allowed' : ''}`}
                          title={isUnavailable ? `${color.name} (Niedostępny dla Elanobawełny)` : color.name}
                        >
                          <div 
                            className="w-full h-full rounded-full border border-black/5 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                          {isUnavailable && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-[120%] h-[1px] bg-brand-dark/50 rotate-45" />
                            </div>
                          )}
                          {selectedColorIndex === index && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-blue rounded-full border-2 border-white flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Actions Section */}
              <div className="flex flex-col gap-10">
                 <div className="pt-4 border-t border-slate-50">
                    <div className="flex items-center justify-between mb-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dostępne Rozmiary</label>
                       {selectedSize && (
                         <span className="text-[9px] font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/5 px-2 py-0.5 rounded-full">
                            wybrano: {selectedSize}
                         </span>
                       )}
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-stretch gap-2">
                       <div className="flex-1 grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                          {SIZES.map((size) => (
                             <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`h-10 rounded-sm text-[10px] font-black uppercase tracking-tighter transition-all flex items-center justify-center ${
                                   selectedSize === size
                                      ? 'bg-brand-dark text-white ring-2 ring-brand-blue ring-offset-2'
                                      : 'bg-white border border-slate-100 text-slate-400 hover:border-slate-300 hover:text-brand-dark'
                                }`}
                             >
                                {size}
                             </button>
                          ))}
                       </div>

                       <NavLink 
                          to="/rozmiary" 
                          className="flex items-center justify-center gap-3 w-full md:w-32 border border-slate-100 rounded-sm text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-brand-dark transition-all flex-col text-center px-4 py-6 md:py-0"
                       >
                          <Ruler size={16} />
                          <span>Tabela<br/>Rozmiarów</span>
                       </NavLink>
                    </div>
                 </div>

                 <a href="tel:+48501893106" className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white h-20 rounded-sm flex items-center justify-between px-8 transition-all active:scale-[0.98] group overflow-hidden relative">
                   <span className="font-black italic text-xl sm:text-2xl uppercase tracking-tighter relative z-10">ZAPYTAJ O WYCENĘ SZCZEGÓŁOWĄ</span>
                   <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform relative z-10" />
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                 </a>
              </div>
            </div>

            {/* Branding Footer for sidebar */}
            <div className="pt-8">
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
      <ColorPaletteModal 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={setSelectedMaterial}
        isLongsleeve={isLongsleeve}
      />
    </div>
  );
}
