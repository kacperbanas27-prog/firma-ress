/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function About() {
  return (
    <section className="container mx-auto px-4 mb-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <span className="text-brand-blue text-[10px] uppercase font-black tracking-widest mb-4 block">O Firmie</span>
          <h2 className="text-5xl lg:text-7xl heading-bold mb-8 text-slate-800">
            Tradycja<br />krakowskiego<br />rzemiosła.
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
            RESS Sp. z o.o. to synonim solidności w branży odzieżowej od ponad 50 lat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-brand-blue text-white p-10 rounded-sm">
              <h3 className="text-2xl heading-bold mb-4">Solidność i Pasja</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Wszystkie produkty wytwarzamy we własnej szwalni w Krakowie, co pozwala nam na pełną kontrolę jakości.
              </p>
              <div className="w-12 h-1 bg-white mt-8 opacity-40" />
            </div>
            <div className="bg-white border border-slate-100 p-10 rounded-sm">
              <h3 className="text-2xl heading-bold mb-4 text-slate-800">Własny Park Maszynowy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Posiadamy nowoczesne maszyny do haftu komputerowego, sublimacji i druku DTG, gwarantujące precyzyjne znakowanie Twojej odzieży.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-square max-w-[500px]">
          <div className="absolute inset-0 bg-brand-dark rounded-sm overflow-hidden flex items-center justify-center p-12">
            <span className="text-[240px] font-black italic text-white/5 select-none leading-none">1972</span>
            <div className="absolute bottom-12 left-12 right-12">
               <h3 className="text-3xl heading-bold mb-4 text-white">Pół wieku doświadczenia</h3>
               <p className="text-white/60 text-sm leading-relaxed">
                 Obecnie specjalizujemy się w produkcji koszulek o sprawdzonym składzie 50% bawełna 50% poliester, który łączy naturalność z niezwykłą wytrzymałością.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
